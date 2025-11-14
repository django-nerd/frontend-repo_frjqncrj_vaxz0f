import { useEffect, useRef, useState } from 'react'
import { Paperclip, SendHorizonal, SmilePlus, Search, Phone, Video, MoreVertical } from 'lucide-react'

function MessageBubble({ text, mine, time }) {
  return (
    <div className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
      <div className={`${mine ? 'bg-indigo-600 text-white rounded-tr-sm' : 'bg-white text-slate-800 rounded-tl-sm'} max-w-[75%] px-4 py-2 rounded-2xl shadow-sm border ${mine? 'border-indigo-500/30':'border-slate-200'}`}>
        <p className="text-sm leading-relaxed">{text}</p>
        <div className={`mt-1 text-[10px] ${mine? 'text-indigo-100/90':'text-slate-400'}`}>{time}</div>
      </div>
    </div>
  )
}

export default function ChatLayout() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey! Are we still on for today?', mine: false, time: '10:00 AM' },
    { id: 2, text: 'Absolutely! I will be there in 10.', mine: true, time: '10:02 AM' },
    { id: 3, text: "Awesome. I'll bring the docs.", mine: false, time: '10:03 AM' },
  ])
  const [input, setInput] = useState('')
  const viewportRef = useRef(null)

  useEffect(() => {
    // Auto scroll to bottom when messages change
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight
    }
  }, [messages])

  const send = () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, { id: Date.now(), text: input.trim(), mine: true, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) }])
    setInput('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send()
    }
  }

  return (
    <div className="h-[calc(100vh-56px)] grid grid-cols-1 md:grid-cols-12">
      {/* Sidebar */}
      <aside className="hidden md:flex md:col-span-4 lg:col-span-3 border-r border-slate-200 flex-col">
        <div className="p-3 border-b border-slate-200">
          <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-slate-50 border border-slate-200">
            <Search size={16} className="text-slate-500"/>
            <input placeholder="Search conversations" className="flex-1 bg-transparent outline-none text-sm"/>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {Array.from({length: 8}).map((_,i)=> (
            <button key={i} className="w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center text-xs font-semibold">SJ</div>
                <div className="min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-900 truncate">Sam Johnson</p>
                    <span className="text-[10px] text-slate-400">{9 - i}:3{i} AM</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">Hey! Are we still on for today?</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Chat */}
      <section className="md:col-span-8 lg:col-span-9 flex flex-col">
        <div className="h-14 border-b border-slate-200 px-3 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="md:hidden h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center text-xs font-semibold">SJ</div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 leading-tight">Sam Johnson</h3>
              <p className="text-xs text-emerald-600">Online • typing…</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1.5 rounded-md hover:bg-slate-100"><Phone size={18}/></button>
            <button className="px-2 py-1.5 rounded-md hover:bg-slate-100"><Video size={18}/></button>
            <button className="px-2 py-1.5 rounded-md hover:bg-slate-100"><MoreVertical size={18}/></button>
          </div>
        </div>

        <div ref={viewportRef} className="flex-1 overflow-y-auto bg-slate-50/60 p-3 md:p-6 space-y-3">
          {messages.map(m => (
            <MessageBubble key={m.id} text={m.text} mine={m.mine} time={m.time} />
          ))}
        </div>

        <div className="border-t border-slate-200 p-3 md:p-4 bg-white">
          <div className="flex items-end gap-2">
            <button className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-600"><SmilePlus size={18}/></button>
            <div className="flex-1 relative">
              <textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={handleKey} rows={1} placeholder="Message Sam" className="w-full resize-none max-h-32 min-h-[44px] px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>
            <button className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-600"><Paperclip size={18}/></button>
            <button onClick={send} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500">
              <SendHorizonal size={18}/> Send
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
