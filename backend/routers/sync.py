import json
import uuid
from datetime import datetime

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from deps import get_db, usuario_atual
from models import Lancamento, Config, Usuario

router = APIRouter(tags=["sync"])


def _nome_do_usuario(db: Session, usuario: Usuario) -> str:
    row = db.get(Config, 1)
    cfg = {}
    if row and row.dados:
        try:
            cfg = json.loads(row.dados)
        except (ValueError, TypeError):
            cfg = {}
    chave = "nome_pessoa_b" if usuario.papel == "b" else "nome_pessoa_a"
    return cfg.get(chave) or usuario.nome


@router.post("/reconciliar")
def reconciliar(db: Session = Depends(get_db), usuario: Usuario = Depends(usuario_atual)):
    """Espelha no controle pessoal cada despesa do casal paga pelo usuário,
    e remove os vínculos órfãos. Equivale ao antigo reconciliarPessoal."""
    nome = _nome_do_usuario(db, usuario)

    despesas_casal = (
        db.query(Lancamento)
        .filter(
            Lancamento.escopo == "casal",
            Lancamento.tipo.in_(["gasto", "cartao"]),
            Lancamento.quem_pagou == nome,
        )
        .all()
    )
    ids_casal = {d.id for d in despesas_casal}

    pessoais_casal = (
        db.query(Lancamento)
        .filter(Lancamento.escopo == "pessoal", Lancamento.usuario_id == usuario.id, Lancamento.origem == "casal")
        .all()
    )
    ja_vinculado = {p.ref_casal_id for p in pessoais_casal}

    criados = 0
    for d in despesas_casal:
        if d.id in ja_vinculado:
            continue
        db.add(Lancamento(
            id=str(uuid.uuid4()),
            escopo="pessoal",
            usuario_id=usuario.id,
            data=d.data,
            valor=d.valor,
            tipo="gasto",
            categoria=d.categoria,
            descricao=f"[Casal] {d.descricao}" if d.descricao else "[Casal]",
            criado_em=datetime.utcnow().isoformat(),
            origem="casal",
            ref_casal_id=d.id,
        ))
        criados += 1

    removidos = 0
    for p in pessoais_casal:
        if p.ref_casal_id not in ids_casal:
            db.delete(p)
            removidos += 1

    db.commit()
    return {"criados": criados, "removidos": removidos}
