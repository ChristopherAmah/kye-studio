import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
const Home = () => {
  return (
    <div className='bg-black'>
     <Hero />
     <Navbar />
     <Intro />
    </div>
  )
}

export default Home