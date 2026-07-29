import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Notanartist from '../components/Notanartist'
const Home = () => {
  return (
    <div className='bg-black'>
     <Hero />
     <Navbar />
     <Intro />
     <Notanartist />
    </div>
  )
}

export default Home