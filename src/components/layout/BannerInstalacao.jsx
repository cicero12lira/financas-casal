import usePWAInstall from '../../hooks/usePWAInstall'

function BannerInstalacao() {
  const { mostrar, instalar, dispensar } = usePWAInstall()

  if (!mostrar) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 z-30 bg-bg-card border border-accent-primary/40 rounded-2xl p-4 shadow-lg animate-fade-in">
      <div className="flex items-start gap-3">
        <span className="text-2xl mt-0.5">💰</span>
        <div className="flex-1">
          <p className="text-text-primary text-sm font-medium">Instalar FinançasCasal</p>
          <p className="text-text-secondary text-xs mt-0.5">Adicione à tela inicial para acesso rápido.</p>
        </div>
        <button onClick={dispensar} className="text-text-secondary text-lg leading-none active:opacity-60 transition-opacity">
          &times;
        </button>
      </div>
      <button onClick={instalar}
        className="mt-3 w-full py-2 rounded-xl bg-accent-primary text-white text-sm font-medium active:scale-95 transition-transform">
        Instalar
      </button>
    </div>
  )
}

export default BannerInstalacao
