import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
      
    </Routes>
    <Footer />
    </>
  )
}

export default App
