import React from 'react'
import './About.css'
import about_img from '../../assets/imgs/Novo Projeto.png'
import play_icon from '../../assets/icones/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={about_img} alt='Kumbu Conexões' className='about-img' />
        <img
          src={play_icon}
          alt='Reproduzir vídeo'
          className='play-icon'
          onClick={() => { setPlayState(true) }}
        />
      </div>

      <div className="about-right">
        <h3>SOBRE A KUMBU CONEXÕES</h3>
        <h2>Inteligência financeira que cria relações estratégicas</h2>

        <p>
          O sucesso financeiro nasce da união entre processos rigorosos e uma
          rede de contactos sólida.
        </p>

        <p>
          Somos uma empresa angolana focada em transformar a saúde financeira
          e a eficiência operacional de negócios e profissionais.
        </p>

        <p>
          Atuamos como parceiros estratégicos, oferecendo capacitação
          intelectual, gestão técnica e tecnológica completa para empresas que
          pretendem crescer com estrutura, credibilidade e visão de futuro.
        </p>
      </div>
    </div>
  )
}

export default About