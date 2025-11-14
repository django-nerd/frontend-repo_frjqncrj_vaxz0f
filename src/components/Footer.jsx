export default function Footer(){
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} PulseChat. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a className="hover:text-slate-900" href="#">Privacy</a>
          <a className="hover:text-slate-900" href="#">Terms</a>
          <a className="hover:text-slate-900" href="#">Support</a>
        </nav>
      </div>
    </footer>
  )
}
