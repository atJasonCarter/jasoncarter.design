import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Subpage from './pages/Subpage'

export default function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <div className="logo"><img src="../src/data/cowboy.png" alt="Weird little dude, logo" style={{ height: '32px' }} /></div>
        <nav className="nav">
          <Link to="/">Home</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Subpage />} />
      </Routes>
    </BrowserRouter>
  )
}