import React from 'react'
import './CTA.css'

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <div className="cta-left">
          <h2>
            Vamos construir algo
            <em> incrível</em> juntos?
          </h2>
        </div>
        <div className="cta-mid">
          <p>Fale connosco e descubra como podemos ajudar a transformar o seu projecto em sucesso.</p>
        </div>
        <div className="cta-right">
          <a href="#contact" className="cta-btn">
            FALE CONNOSCO
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA