import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Download(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold">Get the PulseChat app</h1>
          <p className="mt-2 text-slate-600">Fast native apps that keep you in sync across devices.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{t:'macOS',d:'Apple silicon & Intel'},{t:'Windows',d:'10 and later'},{t:'Linux',d:'Debian & RPM'},{t:'iOS & Android',d:'Coming soon'}].map((p,i)=> (
              <button key={i} className="rounded-xl border border-slate-200 bg-slate-50 hover:bg-white px-4 py-6 text-left">
                <p className="font-medium">{p.t}</p>
                <p className="text-sm text-slate-500">{p.d}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
