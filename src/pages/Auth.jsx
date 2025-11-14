import Navbar from '../components/Navbar'

export default function Auth(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-xl font-semibold mb-6">Welcome back</h1>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input className="mt-2 w-full px-3 py-2 rounded-lg border border-slate-200" placeholder="you@example.com"/>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Password</label>
              <input type="password" className="mt-2 w-full px-3 py-2 rounded-lg border border-slate-200" placeholder="••••••••"/>
            </div>
            <button className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800">Sign in</button>
          </div>

          <p className="mt-6 text-sm text-slate-600">No account? <a href="#" className="text-slate-900 font-medium">Create one</a></p>
        </div>
      </div>
    </div>
  )
}
