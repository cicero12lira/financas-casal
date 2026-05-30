from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import init_db
from routers import auth, config, lancamentos, contas, cartoes, sync

app = FastAPI(title="FinançasCasal API")

# O frontend é servido pelo mesmo host (financas_frontend faz proxy de /api),
# então CORS é permissivo apenas como conveniência em dev.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def _startup():
    init_db()


@app.get("/api/health")
def health():
    return {"ok": True}


# Todas as rotas sob /api
app.include_router(auth.router, prefix="/api")
app.include_router(config.router, prefix="/api")
app.include_router(lancamentos.router, prefix="/api")
app.include_router(contas.router, prefix="/api")
app.include_router(cartoes.router, prefix="/api")
app.include_router(sync.router, prefix="/api")
