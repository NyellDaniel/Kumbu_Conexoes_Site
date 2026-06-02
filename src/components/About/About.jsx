import React, { useEffect, useRef } from 'react'
import './About.css'
import team_img from '../../assets/imgs/team-km.png'

const features = [
  { label: 'Metodologia comprovada',      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Equipa especializada',         icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Foco em resultados',           icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: 'Compromisso e transparência',  icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07' },
]

const About = () => {
  const cardRef   = useRef(null)
  const innerRef  = useRef(null)
  const animRef   = useRef(null)
  const stateRef  = useRef({ rx: 0, ry: 0, targetRx: 0, targetRy: 0, auto: true, t: 0 })

  useEffect(() => {
    const card  = cardRef.current
    const inner = innerRef.current
    if (!card || !inner) return

    const s = stateRef.current

    // MOUSE MOVE — tilt manual
    const onMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x    = e.clientX - rect.left
      const y    = e.clientY - rect.top
      const cx   = rect.width  / 2
      const cy   = rect.height / 2
      s.targetRy =  ((x - cx) / cx) * 14
      s.targetRx = -((y - cy) / cy) * 10
      s.auto     = false
    }

    const onLeave = () => {
      s.targetRx = 0
      s.targetRy = 0
      s.auto     = true
    }

    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)

    // ANIMATION LOOP
    const loop = () => {
      s.t += 0.012

      if (s.auto) {
        // rotação 3D automática suave
        s.targetRx = Math.sin(s.t * 0.7) * 8
        s.targetRy = Math.sin(s.t) * 12
      }

      // lerp suave
      s.rx += (s.targetRx - s.rx) * 0.06
      s.ry += (s.targetRy - s.ry) * 0.06

      // parallax da imagem dentro do card
      const imgOffX = s.ry * 1.8
      const imgOffY = s.rx * 1.8
      const scale   = 1.08 + Math.abs(Math.sin(s.t * 0.5)) * 0.04

      card.style.transform =
        `perspective(900px) rotateX(${s.rx.toFixed(3)}deg) rotateY(${s.ry.toFixed(3)}deg)`

      inner.style.transform =
        `scale(${scale.toFixed(4)}) translate(${imgOffX.toFixed(2)}px, ${imgOffY.toFixed(2)}px)`

      animRef.current = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      cancelAnimationFrame(animRef.current)
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="about" id="about">
      <div className="about-inner">

        {/* LEFT */}
        <div className="about-left">
          <div className="about-img-wrap">

            <div className="about-card-3d" ref={cardRef}>
              {/* BRILHO REFLEXO */}
              <div className="about-glare" />
              {/* IMAGEM com parallax */}
              <img
                src={team_img}
                alt="Equipa Mais Kumbu"
                className="about-img"
                ref={innerRef}
              />
              {/* OVERLAY GRADIENTE */}
              <div className="about-img-overlay" />
            </div>

            {/* DECORAÇÕES */}
            <div className="about-deco-ring" />
            <div className="about-deco-dot" />

            <div className="about-badge">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
              <div>
                <strong>+03</strong>
                <span>Projectos entregues com sucesso</span>
                <span> em menos de 2 anos</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="section-tag">Quem Somos</div>
          <h2>
            Especialistas em gestão de projectos
            que fazem a <em>diferença.</em>
          </h2>
          <p>
            A Mais Kumbu é uma consultoria que transforma desafios em oportunidades
            através de uma gestão de projectos eficiente e orientada a resultados.
          </p>
          <p>
            Com uma abordagem inovadora e centrada em resultados, transformamos
            desafios em oportunidades de crescimento real para as empresas.
          </p>

          <div className="about-features">
            {features.map((f, i) => (
              <div className="about-feature" key={i}>
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon}/>
                  </svg>
                </div>
                <span>{f.label}</span>
              </div>
            ))}
          </div>

          <a href="#services" className="btn-primary-dark">
            Saber mais sobre nós
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default About