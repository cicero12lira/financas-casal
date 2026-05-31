from pydantic import BaseModel, ConfigDict


# ---------- Auth ----------

class LoginIn(BaseModel):
    email: str
    senha: str


class UsuarioOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str
    email: str
    nome: str
    papel: str


class LoginOut(BaseModel):
    token: str
    usuario: UsuarioOut


# ---------- Lançamentos ----------
# Espelha o objeto do frontend. id é gerado no cliente (gerarUUID).

class LancamentoIn(BaseModel):
    id: str
    data: str
    valor: float
    tipo: str
    categoria: str = ""
    quem_pagou: str = ""
    descricao: str = ""
    criado_em: str = ""
    conta_id: str = ""
    conta_destino_id: str = ""
    cartao_id: str = ""
    recorrente: bool = False
    frequencia: str = ""
    vencimento: str = ""
    efetivada: bool = True
    serie_id: str = ""
    parcela_num: int = 0
    parcela_total: int = 0
    pago: bool = True
    competencia: str = ""
    origem: str = "manual"
    ref_casal_id: str = ""


class LancamentoUpdate(BaseModel):
    # Atualização parcial — todos opcionais
    data: str | None = None
    valor: float | None = None
    tipo: str | None = None
    categoria: str | None = None
    quem_pagou: str | None = None
    descricao: str | None = None
    conta_id: str | None = None
    conta_destino_id: str | None = None
    cartao_id: str | None = None
    recorrente: bool | None = None
    frequencia: str | None = None
    vencimento: str | None = None
    efetivada: bool | None = None
    serie_id: str | None = None
    parcela_num: int | None = None
    parcela_total: int | None = None
    pago: bool | None = None
    competencia: str | None = None


# ---------- Contas ----------

class ContaIn(BaseModel):
    id: str
    nome: str
    tipo: str = "corrente"
    saldo_inicial: float = 0.0
    criado_em: str = ""


class ContaUpdate(BaseModel):
    nome: str | None = None
    tipo: str | None = None
    saldo_inicial: float | None = None


# ---------- Cartões ----------

class CartaoIn(BaseModel):
    id: str
    nome: str
    bandeira: str = ""
    limite: float = 0.0
    dia_fechamento: int = 0
    dia_vencimento: int = 0
    conta_pagamento_id: str = ""
    criado_em: str = ""


class CartaoUpdate(BaseModel):
    nome: str | None = None
    bandeira: str | None = None
    limite: float | None = None
    dia_fechamento: int | None = None
    dia_vencimento: int | None = None
    conta_pagamento_id: str | None = None
