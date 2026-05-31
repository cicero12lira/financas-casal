from datetime import datetime

from sqlalchemy import String, Float, Boolean, Integer, DateTime, ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column

from database import Base


class Usuario(Base):
    __tablename__ = "usuarios"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    email: Mapped[str] = mapped_column(String, unique=True, index=True)
    senha_hash: Mapped[str] = mapped_column(String)
    nome: Mapped[str] = mapped_column(String)
    papel: Mapped[str] = mapped_column(String)  # 'a' | 'b'
    criado_em: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class Config(Base):
    __tablename__ = "config"

    # Singleton: sempre id = 1
    id: Mapped[int] = mapped_column(Integer, primary_key=True, default=1)
    dados: Mapped[str] = mapped_column(Text)  # JSON serializado (nomes, emails, orcamento, categorias)


class Lancamento(Base):
    __tablename__ = "lancamentos"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    escopo: Mapped[str] = mapped_column(String, index=True)         # 'casal' | 'pessoal'
    usuario_id: Mapped[str | None] = mapped_column(String, index=True, nullable=True)  # null no casal

    data: Mapped[str] = mapped_column(String)                       # YYYY-MM-DD
    valor: Mapped[float] = mapped_column(Float)
    tipo: Mapped[str] = mapped_column(String)                       # gasto | receita | transferencia | cartao
    categoria: Mapped[str] = mapped_column(String, default="")
    quem_pagou: Mapped[str] = mapped_column(String, default="")
    descricao: Mapped[str] = mapped_column(String, default="")
    criado_em: Mapped[str] = mapped_column(String, default="")

    conta_id: Mapped[str] = mapped_column(String, default="")
    conta_destino_id: Mapped[str] = mapped_column(String, default="")
    cartao_id: Mapped[str] = mapped_column(String, default="")
    recorrente: Mapped[bool] = mapped_column(Boolean, default=False)
    frequencia: Mapped[str] = mapped_column(String, default="")
    vencimento: Mapped[str] = mapped_column(String, default="")
    efetivada: Mapped[bool] = mapped_column(Boolean, default=True)  # False = agendado pendente de confirmação

    # Parcelas (cartão) e séries de recorrência
    serie_id: Mapped[str] = mapped_column(String, default="", index=True)  # agrupa parcelas/recorrências
    parcela_num: Mapped[int] = mapped_column(Integer, default=0)            # ex.: 2 de 12
    parcela_total: Mapped[int] = mapped_column(Integer, default=0)
    pago: Mapped[bool] = mapped_column(Boolean, default=True)               # cartão: False até a fatura ser paga
    competencia: Mapped[str] = mapped_column(String, default="")            # YYYY-MM (mês da fatura do cartão)

    # Só usados no escopo pessoal
    origem: Mapped[str] = mapped_column(String, default="manual")   # manual | casal
    ref_casal_id: Mapped[str] = mapped_column(String, default="")


class Conta(Base):
    __tablename__ = "contas"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    escopo: Mapped[str] = mapped_column(String, index=True)
    usuario_id: Mapped[str | None] = mapped_column(String, index=True, nullable=True)

    nome: Mapped[str] = mapped_column(String)
    tipo: Mapped[str] = mapped_column(String, default="corrente")
    saldo_inicial: Mapped[float] = mapped_column(Float, default=0.0)
    criado_em: Mapped[str] = mapped_column(String, default="")


class Cartao(Base):
    __tablename__ = "cartoes"

    id: Mapped[str] = mapped_column(String, primary_key=True)
    escopo: Mapped[str] = mapped_column(String, index=True)
    usuario_id: Mapped[str | None] = mapped_column(String, index=True, nullable=True)

    nome: Mapped[str] = mapped_column(String)
    bandeira: Mapped[str] = mapped_column(String, default="")
    limite: Mapped[float] = mapped_column(Float, default=0.0)
    dia_fechamento: Mapped[int] = mapped_column(Integer, default=0)
    dia_vencimento: Mapped[int] = mapped_column(Integer, default=0)
    conta_pagamento_id: Mapped[str] = mapped_column(String, default="")
    criado_em: Mapped[str] = mapped_column(String, default="")
