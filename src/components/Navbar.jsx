import { Link, NavLink } from 'react-router-dom'
import { MessageSquareText, Users, Settings, LogIn, Home, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const base = 'text-sm font-medium px-3 py-2 rounded-md transition-colors'
  const inactive = 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
  const active = 'text-slate-900 bg-white shadow'

  return (
    <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center text-white shadow-md">
                <MessageSquareText size={18} />
              </div>
              <span className="text-slate-900 font-semibold tracking-tight group-hover:opacity-90">PulseChat</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
              <span className="inline-flex items-center gap-2"><Home size={16}/> Home</span>
            </NavLink>
            <NavLink to="/chats" className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
              <span className="inline-flex items-center gap-2"><MessageSquareText size={16}/> Chats</span>
            </NavLink>
            <NavLink to="/contacts" className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
              <span className="inline-flex items-center gap-2"><Users size={16}/> Contacts</span>
            </NavLink>
            <NavLink to="/settings" className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
              <span className="inline-flex items-center gap-2"><Settings size={16}/> Settings</span>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/auth" className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">
              <LogIn size={16}/> Sign in
            </Link>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu size={20}/>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur">
          <div className="px-4 py-2 flex flex-col gap-1">
            <NavLink onClick={() => setOpen(false)} to="/" end className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
              <span className="inline-flex items-center gap-2"><Home size={16}/> Home</span>
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/chats" className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
              <span className="inline-flex items-center gap-2"><MessageSquareText size={16}/> Chats</span>
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contacts" className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
              <span className="inline-flex items-center gap-2"><Users size={16}/> Contacts</span>
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/settings" className={({isActive}) => `${base} ${isActive ? active : inactive}`}>
              <span className="inline-flex items-center gap-2"><Settings size={16}/> Settings</span>
            </NavLink>
            <Link onClick={() => setOpen(false)} to="/auth" className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">
              <LogIn size={16}/> Sign in
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
