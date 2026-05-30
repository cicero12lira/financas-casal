from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session

from deps import get_db, usuario_atual
from models import Cartao, Usuario
from schemas import CartaoIn, CartaoUpdate
import serializers

router = APIRouter(prefix="/cartoes", tags=["cartoes"])


def _dono_ok(obj, usuario):
    return not (obj.escopo == "pessoal" and obj.usuario_id != usuario.id)


@router.get("")
def listar(escopo: str = Query("casal"), db: Session = Depends(get_db), usuario: Usuario = Depends(usuario_atual)):
    q = db.query(Cartao).filter(Cartao.escopo == escopo)
    if escopo == "pessoal":
        q = q.filter(Cartao.usuario_id == usuario.id)
    return [serializers.cartao(c) for c in q.all()]


@router.post("")
def criar(dados: CartaoIn, escopo: str = Query("casal"), db: Session = Depends(get_db), usuario: Usuario = Depends(usuario_atual)):
    db.merge(Cartao(**dados.model_dump(), escopo=escopo, usuario_id=usuario.id if escopo == "pessoal" else None))
    db.commit()
    return serializers.cartao(db.get(Cartao, dados.id))


@router.put("/{cartao_id}")
def atualizar(cartao_id: str, dados: CartaoUpdate, db: Session = Depends(get_db), usuario: Usuario = Depends(usuario_atual)):
    cartao = db.get(Cartao, cartao_id)
    if not cartao:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Cartão não encontrado.")
    if not _dono_ok(cartao, usuario):
        raise HTTPException(status.HTTP_403_FORBIDDEN, "Sem acesso.")
    for campo, valor in dados.model_dump(exclude_unset=True).items():
        setattr(cartao, campo, valor)
    db.commit()
    return serializers.cartao(cartao)


@router.delete("/{cartao_id}")
def remover(cartao_id: str, db: Session = Depends(get_db), usuario: Usuario = Depends(usuario_atual)):
    cartao = db.get(Cartao, cartao_id)
    if not cartao:
        return {"ok": True}
    if not _dono_ok(cartao, usuario):
        raise HTTPException(status.HTTP_403_FORBIDDEN, "Sem acesso.")
    db.delete(cartao)
    db.commit()
    return {"ok": True}
