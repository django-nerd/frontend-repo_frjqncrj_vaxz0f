import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Landing(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[{t:'Instant sync',d:'Messages appear in real-time across all your devices.'},{t:'Typing indicators',d:'See who is typing so you never talk over each other.'},{t:'Read receipts',d:'Know when your messages are delivered and read.'}].map((f,i)=> (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{f.t}</h3>
              <p className="text-slate-600 text-sm">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
