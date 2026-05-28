import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { getPinHash } from './services/storage'
import useSync from './hooks/useSync'
import PinPage from './pages/Pin/PinPage'
import Layout from './components/layout/Layout'
import HomePage from './pages/Home/HomePage'
import NovoLancamentoPage from './pages/NovoLancamento/NovoLancamentoPage'
import HistoricoPage from './pages/Historico/HistoricoPage'
import ConfiguracoesPage from './pages/Configuracoes/ConfiguracoesPage'

// Lazy load do Dashboard para isolar o chunk do Recharts
const DashboardPage = lazy(() => import('./pages/Dashboard/DashboardPage'))

const Carregando = (
  <div className="flex items-center justify-center h-full py-20 text-text-secondary text-sm">
    Carregando...
  </div>
)

function RotaProtegida() {
  const pinExiste = !!getPinHash()
  const sessionAtiva = sessionStorage.getItem('fc_session') === 'true'
  if (!pinExiste || !sessionAtiva) return <Navigate to="/pin" replace />
  return <Outlet />
}

function App() {
  useSync()

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/pin" element={<PinPage />} />
        <Route element={<RotaProtegida />}>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/novo" element={<NovoLancamentoPage />} />
            <Route path="/historico" element={<HistoricoPage />} />
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
