import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar'
import { Hero } from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from "./components/Title/Title";
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from '/src/components/VideoPlayer/VideoPlayer';

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>

      <div className="container">

        <Title 
          subTitle='O QUE FAZEMOS' 
          title='Nossas Áreas de Atuação'
        />
        <Programs/>

        <About setPlayState={setPlayState}/>

        <Title 
          subTitle='ECOSSISTEMA' 
          title='Conectando Pessoas e Negócios'
        />
        <Campus/>

        
        <Testimonials/>

        <Title 
          subTitle='CONTACTO' 
          title='Vamos falar sobre o seu negócio'
        />
        <Contact/>

        <Footer/>

      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App