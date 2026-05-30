from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env.prod", extra="ignore")

    DATABASE_URL: str = "postgresql+psycopg://financas_user:financas@financas_postgres:5432/db_financas"
    SECRET_KEY: str = "troque-isto-em-producao"
    JWT_ALG: str = "HS256"
    JWT_EXPIRA_HORAS: int = 720  # 30 dias — app de casal, sessão longa

    # Seed dos dois usuários do casal (idempotente, ver scripts/seed.py)
    USUARIO_A_EMAIL: str = ""
    USUARIO_A_SENHA: str = ""
    USUARIO_A_NOME: str = "Pessoa A"
    USUARIO_B_EMAIL: str = ""
    USUARIO_B_SENHA: str = ""
    USUARIO_B_NOME: str = "Pessoa B"


settings = Settings()
