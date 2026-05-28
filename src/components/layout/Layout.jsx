import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import BottomNav from './BottomNav'
import FAB from './FAB'
import BannerInstalacao from './BannerInstalacao'

function Layout() {
  const { pathname } = useLocation()
  const esconderFAB = pathname === '/novo'

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      <Header />
      <main className="flex-1 pt-14 pb-20 overflow-y-auto">
        <Outlet />
      </main>
      {!esconderFAB && <FAB />}
      <BannerInstalacao />
      <BottomNav />
    </div>
  )
}

export default Layout
