from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

from settings import settings

engine = create_engine(settings.DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)


class Base(DeclarativeBase):
    pass


def init_db():
    # Cria as tabelas se não existirem (app pequeno, sem migrations formais).
    import models  # noqa: F401
    Base.metadata.create_all(bind=engine)
