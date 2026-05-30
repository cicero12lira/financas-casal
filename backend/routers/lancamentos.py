from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session

from deps import get_db, usuario_atual
from models import Lancamento, Usuario
from schemas import LancamentoIn, LancamentoUpdate
import serializers

router = APIRouter(prefix="/lancamentos", tags=["lancamentos"])


def _query_escopo(db, escopo, usuario):
    q = db.query(Lancamento).filter(Lancamento.escopo == escopo)
    if escopo == "pessoal":
        q = q.filter(Lancamento.usuario_id == usuario.id)
    return q


@router.get("")
def listar(
    escopo: str = Query("casal"),
    db: Session = Depends(get_db),
    usuario: Usuario = Depends(usuario_atual),
):
    rows = _query_escopo(db, escopo, usuario).all()
    return [serializers.lancamento(r) for r in rows]


@router.post("")
def criar(
    dados: LancamentoIn,
    escopo: str = Query("casal"),
    db: Session = Depends(get_db),
    usuario: Usuario = Depends(usuario_atual),
):
    payload = dados.model_dump()
    lanc = Lancamento(
        **payload,
        escopo=escopo,
        usuario_id=usuario.id if escopo == "pessoal" else None,
    )
    db.merge(lanc)  # merge = upsert (id vem do cliente)
    db.commit()
    return serializers.lancamento(db.get(Lancamento, dados.id))


@router.put("/{lanc_id}")
def atualizar(
    lanc_id: str,
    dados: LancamentoUpdate,
    db: Session = Depends(get_db),
    usuario: Usuario = Depends(usuario_atual),
):
    lanc = db.get(Lancamento, lanc_id)
    if not lanc:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Lançamento não encontrado.")
    if lanc.escopo == "pessoal" and lanc.usuario_id != usuario.id:
        raise HTTPException(status.HTTP_403_FORBIDDEN, "Sem acesso a este lançamento.")
    for campo, valor in dados.model_dump(exclude_unset=True).items():
        setattr(lanc, campo, valor)
    db.commit()
    return serializers.lancamento(lanc)


@router.delete("/{lanc_id}")
def remover(
    lanc_id: str,
    db: Session = Depends(get_db),
    usuario: Usuario = Depends(usuario_atual),
):
    lanc = db.get(Lancamento, lanc_id)
    if not lanc:
        return {"ok": True}
    if lanc.escopo == "pessoal" and lanc.usuario_id != usuario.id:
        raise HTTPException(status.HTTP_403_FORBIDDEN, "Sem acesso a este lançamento.")
    db.delete(lanc)
    db.commit()
    return {"ok": True}
