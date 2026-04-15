import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Subpage from './pages/Subpage'
import AboutModal from './components/AboutModal'
import cowboyLogo from './data/cowboy.png'

export default function App() {
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <BrowserRouter>
      <header className="site-header">
        <div className="logo" ><Link to="/"><img src={cowboyLogo} alt="Weird little dude, logo" style={{ height: '32px' }} /></Link></div>
        <nav className="nav">
         
          <button class = "about-btn"onClick={() => setShowAboutModal(true)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', marginLeft: '16px' }}>About</button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Subpage />} />
      </Routes>

      <AboutModal show={showAboutModal} onClose={() => setShowAboutModal(false)} />
    </BrowserRouter>
  )
}