import React from 'react'
import './Partners.css'

// Substitui pelos teus logos reais em src/assets/imgs/partners/
const LOGOS = [
  { src: '/imgs/partners/1.JPG',   alt: 'Parceiro 1' },
  { src: '/imgs/partners/2.JPG',   alt: 'Parceiro 2' },
  { src: '/imgs/partners/3.JPG',   alt: 'Parceiro 3' },
  { src: '/imgs/partners/4.JPG',   alt: 'Parceiro 4' },
  { src: '/imgs/partners/5.JPG',   alt: 'Parceiro 5' },
  { src: '/imgs/partners/6.JPG',   alt: 'Parceiro 6' },
  { src: '/imgs/partners/7.JPG',   alt: 'Parceiro 7' },
  { src: '/imgs/partners/8.JPG',   alt: 'Parceiro 8' },
  { src: '/imgs/partners/9.JPG',   alt: 'Parceiro 9' },
  { src: '/imgs/partners/10.JPG',  alt: 'Parceiro 10' },
  { src: '/imgs/partners/11.jpg',  alt: 'Parceiro 11' },
  { src: '/imgs/partners/12.JPG',  alt: 'Parceiro 12' },
  { src: '/imgs/partners/13.PNG',  alt: 'Parceiro 13' },
  { src: '/imgs/partners/14.PNG',  alt: 'Parceiro 14' },
  { src: '/imgs/partners/15.JPG',  alt: 'Parceiro 15' },
  { src: '/imgs/partners/20.JPG',  alt: 'Parceiro 16' },
  { src: '/imgs/partners/gest.JPG', alt: 'Parceiro 17' },
  { src: '/imgs/partners/kp.JPG',   alt: 'Parceiro 18' },
]

const Partners = () => {
  // duplica para o loop infinito ser contínuo
  const items = [...LOGOS, ...LOGOS]

  return (
    <section className="partners">
      <div className="partners-header">
        <div className="partners-line" />
        <span className="partners-label">Parceiros & Clientes</span>
        <div className="partners-line" />
      </div>

      <div className="partners-track-wrap">
        {/* máscara fade nas bordas */}
        <div className="partners-fade-left" />
        <div className="partners-fade-right" />

        <div className="partners-track">
          {items.map((logo, i) => (
            <div className="partners-item" key={i}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners