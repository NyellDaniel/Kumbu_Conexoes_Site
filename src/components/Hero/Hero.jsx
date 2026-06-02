import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'

const WORDS = ['resultados.', 'impacto.', 'crescimento.']

const CARDS = [
  { label: 'O nosso propósito', text: 'Gerir projectos com excelência para criar impacto real e gerar valor duradouro.', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: '#2db54b' },
  { label: 'A nossa missão', text: 'Transformar desafios em oportunidades através de uma gestão de projectos eficiente e orientada a resultados.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: '#f5a623' },
  { label: 'A nossa visão', text: 'Ser a referência em consultoria estratégica em Angola, reconhecida pelo impacto real que geramos nas empresas.', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z', color: '#5b6ef5' },
  { label: 'Os nossos valores', text: 'Compromisso, transparência, inovação e foco em resultados — os pilares que guiam cada projecto que gerimos.', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', color: '#2db54b' },
]

const HeroCardSlider = () => {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const autoRef = useRef(null)
  const isAnimating = useRef(false)

  const goTo = (idx) => {
    if (isAnimating.current || idx === current) return
    isAnimating.current = true
    setVisible(false)
    setTimeout(() => {
      setCurrent(idx)
      setVisible(true)
      setTimeout(() => { isAnimating.current = false }, 600)
    }, 450)
  }

  const next = () => goTo((current + 1) % CARDS.length)

  useEffect(() => {
    autoRef.current = setInterval(next, 5000)
    return () => clearInterval(autoRef.current)
  }, [current])

  const card = CARDS[current]
  const colorRgb = { '#2db54b': '45,181,75', '#f5a623': '245,166,35', '#5b6ef5': '91,110,245' }

  return (
    <div className="hcs-wrap">
      <div className={`hero-card hcs-card ${visible ? 'hcs-in' : 'hcs-out'}`}>
        <div className="hero-card-top-line" style={{ background: `linear-gradient(to right, ${card.color}, #f5a623)` }} />
        <div className="hcs-icon" style={{ background: `rgba(${colorRgb[card.color] || '45,181,75'},0.12)` }}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: card.color }}>
            <path d={card.icon}/>
          </svg>
        </div>
        <p className="hero-card-label">{card.label}</p>
        <p className="hero-card-text">{card.text}</p>
        <div className="hcs-dots">
          {CARDS.map((_, i) => (
            <button key={i} className={`hcs-dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} style={i === current ? { background: card.color, width: '20px' } : {}} />
          ))}
        </div>
        <button className="hero-card-btn" onClick={next}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

const Hero = () => {
  const canvasRef               = useRef(null)
  const [typed, setTyped]       = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  // TYPEWRITER
  useEffect(() => {
    const word = WORDS[wordIdx]
    let t
    if (!deleting) {
      if (typed.length < word.length) {
        t = setTimeout(() => setTyped(word.slice(0, typed.length + 1)), 80)
      } else {
        t = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (typed.length > 0) {
        t = setTimeout(() => setTyped(word.slice(0, typed.length - 1)), 45)
      } else {
        setDeleting(false)
        setWordIdx(i => (i + 1) % WORDS.length)
      }
    }
    return () => clearTimeout(t)
  }, [typed, deleting, wordIdx])

  // PARTÍCULAS
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 55 }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight,
      r:  Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      o:  Math.random() * 0.35 + 0.05,
    }))

    const draw = () => {
      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(45,181,75,${p.o})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(45,181,75,${0.08 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="hero-dot" />
            Gestão de Projectos & Consultoria Estratégica
          </div>

          <h1>
            Transformamos<br />
            ideias em<br />
            <span className="hero-typed">
              {typed}
              <span className="hero-cursor" />
            </span>
          </h1>

          <p>
            Planeamos, executamos e gerimos projectos com eficiência
            para impulsionar o crescimento da sua empresa.
          </p>

          <div className="hero-btns">
            <a href="#services" className="btn-primary">
              Nossos Serviços
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <button className="btn-ghost" onClick={() => setVideoOpen(true)}>
              <span className="btn-play">
                <svg viewBox="0 0 24 24" fill="white" width="12" height="12">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </span>
              Resultados da KCS
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <div>
                <strong>+10</strong>
                <span>projectos entregues</span>
              </div>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <div>
                <strong>+50</strong>
                <span>clientes satisfeitos</span>
              </div>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div>
                <strong>+02</strong>
                <span>anos de experiência</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <HeroCardSlider />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot" />
        <span>Scroll</span>
      </div>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div className="video-modal" onClick={() => setVideoOpen(false)}>
          <div className="video-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setVideoOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <video src="/src/assets/Videos/kcs.MOV" controls autoPlay className="video-modal-player" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero