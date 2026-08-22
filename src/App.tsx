import { Route, Routes } from 'react-router-dom'
import { DeleteMyAccount } from './pages/DeleteMyAccount'
import { DeleteMyData } from './pages/DeleteMyData'
import { Home } from './pages/Home'
import { PrivacyPolicy } from './pages/PrivacyPolicy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/delete-my-data" element={<DeleteMyData />} />
      <Route path="/delete-my-account" element={<DeleteMyAccount />} />
    </Routes>
  )
}

export default App
