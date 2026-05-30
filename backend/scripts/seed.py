"""Cria/atualiza os dois usuários do casal e a config inicial a partir do .env.prod.
Idempotente: rodar quantas vezes quiser.

    docker exec financas_backend python scripts/seed.py
"""
import json
import sys
import uuid

sys.path.insert(0, "/app")

from database import SessionLocal, init_db
from models import Usuario, Config
from security import hash_senha
from settings import settings


def _upsert_usuario(db, email, senha, nome, papel):
    email = (email or "").strip().lower()
    if not email or not senha:
        print(f"[seed] pulando pessoa {papel}: e-mail/senha vazios")
        return None
    u = db.query(Usuario).filter(Usuario.email == email).first()
    if u:
        u.nome, u.papel, u.senha_hash = nome, papel, hash_senha(senha)
        print(f"[seed] atualizado: {email} ({papel})")
    else:
        u = Usuario(id=str(uuid.uuid4()), email=email, senha_hash=hash_senha(senha), nome=nome, papel=papel)
        db.add(u)
        print(f"[seed] criado: {email} ({papel})")
    return u


def main():
    init_db()
    db = SessionLocal()
    try:
        _upsert_usuario(db, settings.USUARIO_A_EMAIL, settings.USUARIO_A_SENHA, settings.USUARIO_A_NOME, "a")
        _upsert_usuario(db, settings.USUARIO_B_EMAIL, settings.USUARIO_B_SENHA, settings.USUARIO_B_NOME, "b")

        # Semeia a config (nomes/emails) se ainda não existir
        if not db.get(Config, 1):
            db.add(Config(id=1, dados=json.dumps({
                "nome_pessoa_a": settings.USUARIO_A_NOME,
                "nome_pessoa_b": settings.USUARIO_B_NOME,
                "email_pessoa_a": (settings.USUARIO_A_EMAIL or "").strip().lower(),
                "email_pessoa_b": (settings.USUARIO_B_EMAIL or "").strip().lower(),
            })))
            print("[seed] config inicial criada")

        db.commit()
        print("[seed] concluído")
    finally:
        db.close()


if __name__ == "__main__":
    main()
