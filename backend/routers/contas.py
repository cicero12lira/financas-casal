from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session

from deps import get_db, usuario_atual
from models import Conta, Usuario
from schemas import ContaIn, ContaUpdate
import serializers

router = APIRouter(prefix="/contas", tags=["contas"])


def _dono_ok(obj, usuario):
    return not (obj.escopo == "pessoal" and obj.usuario_id != usuario.id)


@router.get("")
def listar(escopo: str = Query("casal"), db: Session = Depends(get_db), usuario: Usuario = Depends(usuario_atual)):
    q = db.query(Conta).filter(Conta.escopo == escopo)
    if escopo == "pessoal":
        q = q.filter(Conta.usuario_id == usuario.id)
    return [serializers.conta(c) for c in q.all()]


@router.post("")
def criar(dados: ContaIn, escopo: str = Query("casal"), db: Session = Depends(get_db), usuario: Usuario = Depends(usuario_atual)):
    db.merge(Conta(**dados.model_dump(), escopo=escopo, usuario_id=usuario.id if escopo == "pessoal" else None))
    db.commit()
    return serializers.conta(db.get(Conta, dados.id))


@router.put("/{conta_id}")
def atualizar(conta_id: str, dados: ContaUpdate, db: Session = Depends(get_db), usuario: Usuario = Depends(usuario_atual)):
    conta = db.get(Conta, conta_id)
    if not conta:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Conta não encontrada.")
    if not _dono_ok(conta, usuario):
        raise HTTPException(status.HTTP_403_FORBIDDEN, "Sem acesso.")
    for campo, valor in dados.model_dump(exclude_unset=True).items():
        setattr(conta, campo, valor)
    db.commit()
    return serializers.conta(conta)


@router.delete("/{conta_id}")
def remover(conta_id: str, db: Session = Depends(get_db), usuario: Usuario = Depends(usuario_atual)):
    conta = db.get(Conta, conta_id)
    if not conta:
        return {"ok": True}
    if not _dono_ok(conta, usuario):
        raise HTTPException(status.HTTP_403_FORBIDDEN, "Sem acesso.")
    db.delete(conta)
    db.commit()
    return {"ok": True}
