import React from 'react'
import './Services.css'

const services = [
  {
    title: 'Planeamento',
    desc: 'Definimos estratégias, recursos e cronogramas inteligentes para o sucesso do projecto.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    title: 'Execução',
    desc: 'Transformamos planos em acções com foco e eficiência operacional.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Acompanhamento',
    desc: 'Monitorizamos, medimos e ajustamos para garantir os melhores resultados.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Entrega de Valor',
    desc: 'Geramos impacto real e impulsionamos o crescimento sustentável da sua empresa.',
    icon: 'M5 3l14 9-14 9V3z',
  },
]

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-inner">

        <div className="services-head">
          <div className="services-head-left">
            <div className="section-tag-light">O Que Fazemos</div>
            <h2>
              Soluções completas para cada
              etapa do seu <em>projecto.</em>
            </h2>
            <p>Combinamos estratégia, pessoas e processos para entregar resultados consistentes.</p>
            <a href="#contact" className="btn-primary-dark">
              Ver Serviços
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div className="services-cards">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon}/>
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-arrow">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services