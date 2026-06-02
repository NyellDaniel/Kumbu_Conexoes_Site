import React from 'react'
import Navbar   from './components/Navbar/Navbar'
import Hero     from './components/Hero/Hero'
import Services from './components/Services/Services'
import About    from './components/About/About'
import Cta from './components/CTA/cta.jsx'
import WhatsApp from './components/whatsapp/whatsapp.jsx'
import Contact  from './components/Contact/Contact'
import Footer   from './components/Footer/Footer'

import './index.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Cta />
      <Contact />
      <Footer />
      <WhatsApp/>
    </>
  )
}

export default App