import Landing from './pages/Landing'
import Chats from './pages/Chats'
import Contacts from './pages/Contacts'
import Settings from './pages/Settings'
import Auth from './pages/Auth'
import Download from './pages/Download'
import { Routes, Route } from 'react-router-dom'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  )
}
