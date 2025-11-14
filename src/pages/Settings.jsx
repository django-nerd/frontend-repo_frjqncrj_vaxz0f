import Navbar from '../components/Navbar'

export default function Settings(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-xl font-semibold mb-6">Settings</h1>

          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-slate-700">Display name</label>
              <input className="mt-2 w-full px-3 py-2 rounded-lg border border-slate-200" placeholder="Your name"/>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Status</label>
              <input className="mt-2 w-full px-3 py-2 rounded-lg border border-slate-200" placeholder="What’s on your mind?"/>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700">Enable read receipts</span>
              <input type="checkbox" className="h-5 w-5" defaultChecked/>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700">Show typing indicators</span>
              <input type="checkbox" className="h-5 w-5" defaultChecked/>
            </div>
            <div className="pt-2">
              <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500">Save changes</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
