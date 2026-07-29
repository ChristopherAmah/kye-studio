import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Overview from './pages/Overview'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Works from './pages/Works'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/home' element={<Home />} />
        <Route path='/works' element={<Works />} />

        {/* Option A: Render Overview directly on invalid route */}
        <Route path="*" element={<Overview />} />

        {/* Option B: If you prefer to redirect the actual URL back to '/' */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App