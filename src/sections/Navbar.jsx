import { useState } from 'react'
import Button from '../components/Button'
import { ctaButton, navItems } from '../data/navbarData'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed z-50 flex w-full flex-wrap items-center justify-between px-24 py-5 max-[690px]:px-8  max-[1000px]:px-10 md:py-6 ">
      <a href="#" className="text-2xl font-bold lowercase tracking-tight text-slate-900">
        restaurant
      </a>

      <div className="order-2 flex items-center gap-3 min-[690px]:order-3">
        <button
          type="button"
          onClick={handleMenuToggle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700  min-[690px]:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          aria-label="Toggle navigation"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>

        <div className="hidden min-[690px]:block">
          <Button text={ctaButton.text} color={ctaButton.color} />
        </div>

      </div>

      <nav
        id="navbar-menu"
        className={`${isMenuOpen ? 'flex' : 'hidden'} order-3 w-full flex-col items-center gap-2 rounded-xl bg-white/80 p-3 text-sm text-slate-500 shadow-sm min-[690px]:order-2 min-[690px]:flex min-[690px]:w-auto min-[690px]:flex-row min-[690px]:gap-7 min-[690px]:rounded-none min-[690px]:bg-transparent min-[690px]:p-0 min-[690px]:shadow-none`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={handleMenuClose}
            className="w-full rounded-md px-2 py-2 text-center transition-colors hover:text-slate-900 min-[690px]:w-auto min-[690px]:p-0"
          >
            {item.label}
          </a>
        ))}

        <Button text={ctaButton.text} color={ctaButton.color} className="mt-2 w-full min-[690px]:hidden" />
      </nav>
    </header>
  )
}

export default Navbar
