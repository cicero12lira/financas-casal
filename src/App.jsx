import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { estaLogado } from './services/storage'
import useSync from './hooks/useSync'
import LoginPage from './pages/Login/LoginPage'
import Layout from './components/layout/Layout'
import HomePage from './pages/Home/HomePage'
import NovoLancamentoPage from './pages/NovoLancamento/NovoLancamentoPage'
import HistoricoPage from './pages/Historico/HistoricoPage'
import CarteiraPage from './pages/Carteira/CarteiraPage'
import ConfiguracoesPage from './pages/Configuracoes/ConfiguracoesPage'

// Lazy load das telas com Recharts para isolar o chunk
const DashboardPage = lazy(() => import('./pages/Dashboard/DashboardPage'))
const CartaoPage = lazy(() => import('./pages/Cartao/CartaoPage'))

const Carregando = (
  <div className="flex items-center justify-center h-full py-20 text-text-secondary text-sm">
    Carregando...
  </div>
)

function RotaProtegida() {
  if (!estaLogado()) return <Navigate to="/login" replace />
  return <Outlet />
}

function App() {
  useSync()

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<RotaProtegida />}>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/novo" element={<NovoLancamentoPage />} />
            <Route path="/historico" element={<HistoricoPage />} />
            <Route path="/carteira" element={<CarteiraPage />} />
            <Route path="/cartao/:id" element={
              <Suspense fallback={Carregando}>
                <CartaoPage />
              </Suspense>
            } />
            <Route path="/dashboard" element={
              <Suspense fallback={Carregando}>
                <DashboardPage />
              </Suspense>
            } />
            <Route path="/configuracoes" element={<ConfiguracoesPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
