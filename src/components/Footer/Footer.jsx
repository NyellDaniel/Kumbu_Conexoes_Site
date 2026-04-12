import React, { useEffect, useRef } from 'react'
import './Footer.css'

const Footer = () => {
  const canvasRef = useRef(null)

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

    const pts = Array.from({ length: 40 }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * 300,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r:  Math.random() * 1.2 + 0.3,
      o:  Math.random() * 0.4 + 0.05,
    }))

    const draw = () => {
      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)

      pts.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(33,46,160,${p.o})`
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
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(33,46,160,${0.06 * (1 - d / 130)})`
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
    <div className="footer">
      <canvas ref={canvasRef} className="fCanvas" />

      <div className="fTop">
        <div className="fBrand">
          <div className="fLogo">Mais<span>Kumbu</span></div>
          <p>Conectamos empresas, investidores e líderes através de soluções financeiras, tecnologia e uma rede estratégica de alto valor.</p>
          <div className="fSocials">
            <div className="fSocial">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <div className="fSocial">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div className="fSocial">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="fCol">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#about">Sobre nós</a></li>
            <li><a href="#diferenciais">Diferenciais</a></li>
            <li><a href="#areas">Áreas de atuação</a></li>
            <li><a href="#summit">Summit Kumbu</a></li>
          </ul>
        </div>

        <div className="fCol">
          <h4>Serviços</h4>
          <ul>
            <li><a href="#servicos">Consultoria Financeira</a></li>
            <li><a href="#servicos">Tecnologia</a></li>
            <li><a href="#servicos">Advisory</a></li>
            <li><a href="#servicos">Capacitação</a></li>
          </ul>
        </div>

        <div className="fCol">
          <h4>Contacto</h4>
          <ul>
            <li><a href="mailto:kumbuconexoescomercial@gmail.com">kumbuconexoescomercial@gmail.com</a></li>
            <li><a href="tel:+244934030551">+244 934 030 551</a></li>
            <li><a>Luanda, Angola</a></li>
          </ul>
        </div>
      </div>

      <div className="fBottom">
        <div className="fCopy">© 2026 Kumbu Conexões. Todos os direitos reservados.</div>
        <div className="fStatus">
          <span className="fPulse" />
          Online — a responder em 24h
        </div>
        <ul className="fBottomLinks">
          <li><a href="#">Termos de Serviço</a></li>
          <li><a href="#">Política de Privacidade</a></li>
        </ul>
        <div className="fLocation">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8 2 4 5 4 9c0 5.25 8 13 8 13s8-7.75 8-13c0-4-4-7-8-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          Luanda, Angola
        </div>
      </div>
    </div>
  )
}

export default Footer