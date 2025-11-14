import Navbar from '../components/Navbar'
import ChatLayout from '../components/ChatLayout'

export default function Chats(){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <ChatLayout />
    </div>
  )
}
