from datetime import datetime, timedelta

from jose import jwt, JWTError
from passlib.context import CryptContext

from settings import settings

_pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_senha(senha: str) -> str:
    return _pwd.hash(senha)


def verificar_senha(senha: str, senha_hash: str) -> bool:
    return _pwd.verify(senha, senha_hash)


def criar_token(uid: str) -> str:
    expira = datetime.utcnow() + timedelta(hours=settings.JWT_EXPIRA_HORAS)
    payload = {"sub": uid, "exp": expira}
    return jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.JWT_ALG)


def ler_token(token: str) -> str | None:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.JWT_ALG])
        return payload.get("sub")
    except JWTError:
        return None
