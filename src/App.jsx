import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Overview from './pages/Overview'
import Home from './pages/Home'
import Footer from './pages/Footer'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Overview />} />
      <Route path='/home' element={<Home />} />
      
    </Routes>
    <Footer />
    </>
  )
}

export default App
