import React from 'react'
import './Partners.css'

// Substitui pelos teus logos reais em src/assets/imgs/partners/
const LOGOS = [
  { src: '/src/assets/imgs/partners/1.jpg', alt: 'Parceiro 1' },
  { src: '/src/assets/imgs/partners/2.jpg', alt: 'Parceiro 3' },
  { src: '/src/assets/imgs/partners/3.jpg', alt: 'Parceiro 4' },
  { src: '/src/assets/imgs/partners/4.jpg', alt: 'Parceiro 5' },
  { src: '/src/assets/imgs/partners/5.jpg', alt: 'Parceiro 6' },
  { src: '/src/assets/imgs/partners/6.jpg', alt: 'Parceiro 7' },
  { src: '/src/assets/imgs/partners/7.jpg', alt: 'Parceiro 8' },
  { src: '/src/assets/imgs/partners/8.jpg', alt: 'Parceiro 9' },
  { src: '/src/assets/imgs/partners/9.jpg', alt: 'Parceiro 10' },
  { src: '/src/assets/imgs/partners/10.jpg', alt: 'Parceiro 11' },
  { src: '/src/assets/imgs/partners/11.jpg', alt: 'Parceiro 12' },
  { src: '/src/assets/imgs/partners/12.jpg', alt: 'Parceiro 13' },
   { src: '/src/assets/imgs/partners/13.PNG', alt: 'Parceiro 14' },
  { src: '/src/assets/imgs/partners/14.PNG', alt: 'Parceiro 15' },
  { src: '/src/assets/imgs/partners/15.jpg', alt: 'Parceiro 16' },
  { src: '/src/assets/imgs/partners/20.jpg', alt: 'Parceiro 17' },

  { src: '/src/assets/imgs/partners/gest.jpg', alt: 'Parceiro 18' },
  { src: '/src/assets/imgs/partners/kp.jpg', alt: 'Parceiro 19' },
  
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