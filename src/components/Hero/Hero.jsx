import React from 'react'
import './Hero.css'
import angulo_direito from '../../assets/imgs/angulo-direito.png'

export const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Conectamos capital e network</h1>
            <p>Somos uma plataforma que une o universo das finanças a uma rede 
                estratégica de relacionamentos de alto valor. Aqui, cada conexão é 
                pensada para gerar impacto real aproximando investidores, empreendedores 
                e executivos que buscam crescer com inteligência.</p>
                <button className='btn'>Explore more<img src={angulo_direito} alt=''className='cetamais'/></button>
        </div>
    
    </div>
  )
}
