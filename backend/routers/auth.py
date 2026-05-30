from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from deps import get_db, usuario_atual
from models import Usuario
from schemas import LoginIn, LoginOut, UsuarioOut
from security import verificar_senha, criar_token

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/login", response_model=LoginOut)
def login(dados: LoginIn, db: Session = Depends(get_db)):
    email = dados.email.strip().lower()
    usuario = db.query(Usuario).filter(Usuario.email == email).first()
    if not usuario or not verificar_senha(dados.senha, usuario.senha_hash):
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "E-mail ou senha inválidos.")
    return LoginOut(token=criar_token(usuario.id), usuario=UsuarioOut.model_validate(usuario))


@router.get("/eu", response_model=UsuarioOut)
def eu(usuario: Usuario = Depends(usuario_atual)):
    return UsuarioOut.model_validate(usuario)
