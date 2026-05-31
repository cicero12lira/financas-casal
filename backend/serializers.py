"""Converte modelos SQLAlchemy em dicts no formato que o frontend espera.
Inclui sincronizado=True (o que vem do servidor já está confirmado)."""

_LANC = [
    "id", "data", "valor", "tipo", "categoria", "quem_pagou", "descricao",
    "criado_em", "conta_id", "conta_destino_id", "cartao_id", "recorrente",
    "frequencia", "vencimento", "efetivada", "serie_id", "parcela_num",
    "parcela_total", "pago", "competencia", "origem", "ref_casal_id",
]
_CONTA = ["id", "nome", "tipo", "saldo_inicial", "criado_em"]
_CARTAO = ["id", "nome", "bandeira", "limite", "dia_fechamento", "dia_vencimento",
           "conta_pagamento_id", "criado_em"]


def _dump(obj, campos):
    d = {c: getattr(obj, c) for c in campos}
    d["sincronizado"] = True
    return d


def lancamento(obj):
    return _dump(obj, _LANC)


def conta(obj):
    return _dump(obj, _CONTA)


def cartao(obj):
    return _dump(obj, _CARTAO)
