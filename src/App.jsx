import React from 'react'
import Navbar   from './components/Navbar/Navbar'
import Hero     from './components/Hero/Hero'
import Services from './components/Services/Services'
import About    from './components/About/About'
import CTA      from './components/CTA/cta'
import Contact  from './components/Contact/Contact'
import Footer   from './components/Footer/Footer'
import WhatsApp from './components/whatsapp/whatsapp'
import './index.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <WhatsApp/>
    </>
  )
}

export default App