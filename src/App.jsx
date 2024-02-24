import { useState } from 'react'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import PassGen from './components/PassGen.jsx'
import Page2 from './components/Page2.jsx'
import Page3 from './components/Page3.jsx'
import Footer from './components/Footer.jsx'

function App() {
  

  return (
    <>
    <div className=' flex h-[100vh] '>
    <Navbar/>
    <Background/>
    <PassGen/>
    </div>    
    <Page2/>   
    <Page3/>
    <Footer/>
    </>
  )
}

export default App
