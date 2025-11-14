import { Link } from 'react-router-dom'
import { MessageCircle, ShieldCheck, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(1000px_400px_at_10%_-20%,rgba(99,102,241,0.35),rgba(255,255,255,0)),radial-gradient(1000px_400px_at_110%_10%,rgba(236,72,153,0.35),rgba(255,255,255,0))]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Chat in real‑time.
              <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Anywhere. Effortlessly.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              PulseChat keeps your conversations flowing with instant delivery, typing indicators, and beautifully simple design.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/chats" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">
                <MessageCircle size={18}/> Start messaging
              </Link>
              <Link to="/download" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50">
                <Zap size={18}/> Get the app
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2"><ShieldCheck className="text-emerald-500" size={16}/> End‑to‑end encryption</div>
              <div className="inline-flex items-center gap-2"><Zap className="text-indigo-500" size={16}/> Lightning fast</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-2xl rounded-3xl"></div>
            <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="h-[520px] rounded-xl bg-slate-50 border border-slate-100 p-4 overflow-hidden">
                <div className="h-10 rounded-md bg-white border border-slate-200 flex items-center px-3 gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs text-slate-500">Connected to Pulse server</span>
                </div>
                <div className="mt-4 space-y-3">
                  {Array.from({length:6}).map((_,i)=> (
                    <div key={i} className={`flex ${i%2===0? 'justify-start':'justify-end'}`}>
                      <div className={`${i%2===0? 'bg-white text-slate-800':'bg-indigo-600 text-white'} max-w-[70%] px-4 py-2 rounded-2xl ${i%2===0? 'rounded-tl-sm':'rounded-tr-sm'} shadow-sm border ${i%2===0? 'border-slate-200':'border-indigo-500/30'}`}>
                        <p className="text-sm">{i%2===0? 'Hey! Did you try PulseChat?':'Yes! The UI is super clean and fast.'}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2">
                    <input placeholder="Write a message" className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                    <button className="px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
