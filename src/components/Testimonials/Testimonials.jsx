import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="vS" id="testimonials">

      <div className="vHeader">
        <div>
          <div className="vBadge">Porque nos escolher</div>
          <h2>As nossas vantagens</h2>
        </div>
        <p>O que nos torna únicos e insubstituíveis no mercado angolano de hoje.</p>
      </div>

      <div className="vGrid">

        <div className="vCard featured">
          <div>
            <div className="vNum">01</div>
            <div className="vIcon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 2 4 5 4 9c0 5.25 8 13 8 13s8-7.75 8-13c0-4-4-7-8-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <h3>Expertise Local Profunda</h3>
            <p>
              Conhecemos de forma prática as nuances do ambiente de negócios em Angola, 
              incluindo regulamentações fiscais, contexto operacional 
              e dinâmicas do mercado em Luanda.

A nossa experiência local permite antecipar riscos, identificar oportunidades 
e estruturar soluções adaptadas à realidade do país, garantindo decisões mais 
seguras e eficazes para empresas e investidores.
              </p> </div>
          <span className="vTag">Mercado angolano</span>
        </div>

        <div className="vCard">
          <div className="vNum">02</div>
          <div className="vIcon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </div>
          <h3>Hibridização Estratégica</h3>
          <p>Educação, operação, tecnologia e advisory num único ecossistema integrado.</p>
          <span className="vTag">Ecossistema único</span>
        </div>

        <div className="vCard">
          <div className="vNum">03</div>
          <div className="vIcon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="7" r="3"/>
              <circle cx="15" cy="7" r="3"/>
              <path d="M3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6"/>
            </svg>
          </div>
          <h3>Rede de Contactos Ativa</h3>
          <p>Acesso a líderes, investidores e tomadores de decisão através do Summit Kumbu.</p>
          <span className="vTag">Líderes & decisores</span>
        </div>

        <div className="vCard">
          <div className="vNum">04</div>
          <div className="vIcon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <h3>Execução com Credibilidade</h3>
          <p>Soluções estruturadas com foco em resultados sustentáveis no mercado angolano.</p>
          <span className="vTag">Resultados reais</span>
        </div>

      </div>

      <div className="vStats">
        <div className="vStat">
          <strong>+<span>10</span></strong>
          <small>Empresas apoiadas</small>
        </div>
        <div className="vStatDivider" />
        <div className="vStat">
          <strong>+<span>3</span></strong>
          <small>Anos de experiência</small>
        </div>
        <div className="vStatDivider" />
        <div className="vStat">
          <strong>+<span>20</span></strong>
          <small>Líderes na rede</small>
        </div>
        <div className="vStatDivider" />
        <div className="vStat">
          <strong><span>4</span></strong>
          <small>Áreas de atuação</small>
        </div>
      </div>

    </div>
  )
}

export default Testimonials