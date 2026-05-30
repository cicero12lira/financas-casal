import json

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from deps import get_db, usuario_atual
from models import Config, Usuario

router = APIRouter(prefix="/config", tags=["config"])


def _ler(db: Session) -> dict:
    row = db.get(Config, 1)
    if not row or not row.dados:
        return {}
    try:
        return json.loads(row.dados)
    except (ValueError, TypeError):
        return {}


@router.get("")
def obter(db: Session = Depends(get_db), _: Usuario = Depends(usuario_atual)):
    return _ler(db)


@router.put("")
def salvar(novos: dict, db: Session = Depends(get_db), _: Usuario = Depends(usuario_atual)):
    atual = _ler(db)
    atual.update(novos or {})
    row = db.get(Config, 1)
    if row:
        row.dados = json.dumps(atual)
    else:
        db.add(Config(id=1, dados=json.dumps(atual)))
    db.commit()
    return atual
