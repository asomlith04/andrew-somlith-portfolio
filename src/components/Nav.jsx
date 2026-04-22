import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b-2 border-p5-white/20 bg-p5-black/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 bg-p5-red border-2 border-p5-white flex items-center justify-center text-xs font-black text-p5-white rotate-45 group-hover:rotate-0 transition-transform duration-200">
            A
          </span>
          <span className="font-black text-sm tracking-widest uppercase text-p5-white">
            Andrew<span className="text-p5-red">.</span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-all duration-150 border-2 cursor-pointer ${
                    isActive
                      ? 'bg-p5-red border-p5-red text-p5-white'
                      : 'border-transparent text-p5-white/60 hover:text-p5-white hover:border-p5-white/40'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-p5-white transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-p5-white transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-p5-white transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t-2 border-p5-white/20 bg-p5-black">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 text-sm font-bold uppercase tracking-widest border-b border-p5-white/10 cursor-pointer ${
                  isActive ? 'text-p5-red' : 'text-p5-white/70 hover:text-p5-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
