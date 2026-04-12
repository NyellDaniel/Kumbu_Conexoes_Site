import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'
import angulo_direito from '../../assets/imgs/angulo-direito.png'

const WORDS = [
  'que gera conexões.',
  'que transforma negócios.',
  'que conecta líderes.',
]

export const Hero = () => {
  const canvasRef = useRef(null)
  const [typed, setTyped] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // TYPEWRITER
  useEffect(() => {
    const word = WORDS[wordIndex]
    let timeout

    if (!deleting) {
      if (typed.length < word.length) {
        timeout = setTimeout(() => setTyped(word.slice(0, typed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(() => setTyped(word.slice(0, typed.length - 1)), 45)
      } else {
        setDeleting(false)
        setWordIndex((prev) => (prev + 1) % WORDS.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [typed, deleting, wordIndex])

  // PARTÍCULAS
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      o: Math.random() * 0.45 + 0.1,
    }))

    const draw = () => {
      const W = canvas.width
      const H = canvas.height

      ctx.clearRect(0, 0, W, H)

      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.o})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255,255,255,${0.07 * (1 - dist / 120)})`
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
    <div className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-text">
        <div className="hero-badge">Soluções de alto valor</div>

        <h1>
          Inteligência Financeira <br />
          <span className="typed-wrap">
            {typed}
            <span className="cursor" />
          </span>
        </h1>

        <p>
          Conectamos empresas, investidores e líderes através de soluções financeiras,
          tecnologia e uma rede estratégica de alto valor.
        </p>

        {/* ✅ CORREÇÃO AQUI */}
        <a
          href="https://www.instagram.com/kumbuconexoes?igsh=aGwzejdpeTd3Mnpi&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explorar mais
          <img src={angulo_direito} alt="" className="cetamais" />
        </a>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot" />
        <span>Scroll</span>
      </div>
    </div>
  )
}