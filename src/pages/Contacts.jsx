import Navbar from '../components/Navbar'

function ContactRow({name, status}){
  return (
    <div className="flex items-center justify-between p-4 border-b border-slate-100">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white grid place-items-center text-xs font-semibold">
          {name.split(' ').map(p=>p[0]).join('').slice(0,2)}
        </div>
        <div>
          <p className="text-sm font-medium text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{status}</p>
        </div>
      </div>
      <button className="text-sm font-medium px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Message</button>
    </div>
  )
}

export default function Contacts(){
  const data = [
    {name:'Sam Johnson', status:'Online'},
    {name:'Ariana Lee', status:'Last seen 2h ago'},
    {name:'Marcus Green', status:'Online'},
    {name:'Jin Park', status:'Do not disturb'},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white border-x md:border border-slate-200 md:rounded-xl md:mt-6">
        <h1 className="text-xl font-semibold mb-4">Contacts</h1>
        <div className="divide-y divide-slate-100">
          {data.map((c,i)=> <ContactRow key={i} name={c.name} status={c.status} />)}
        </div>
      </div>
    </div>
  )
}
