import React, { useEffect, useRef } from 'react'
import './Footer.css'
import logo from '../../assets/imgs/logo.png'

const Footer = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 300,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.2 + 0.3,
      o: Math.random() * 0.3 + 0.05,
    }))

    const draw = () => {
      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(45,181,75,${p.o})`; ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx*dx + dy*dy)
          if (d < 130) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(45,181,75,${0.05*(1-d/130)})`; ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <footer className="footer">
      <canvas ref={canvasRef} className="fCanvas" />
      <div className="fTop">
        <div className="fBrand">
          <img src={logo} alt="Mais Kumbu" className="fLogo" />
          <p>A Mais Kumbu é uma empresa de gestão de projectos e consultoria estratégica comprometida com resultados e impacto positivo.</p>
          <div className="fSocials">
            {['M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
              'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
              'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'].map((d, i) => (
              <div className="fSocial" key={i}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={d}/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        {[
          { title: 'Navegação', links: ['Início','Sobre Nós','Serviços','Projectos','Metodologia','Blog','Contactos'] },
          { title: 'Serviços',  links: ['Gestão de Projectos','Consultoria Estratégica','Gestão Financeira','Transformação Digital','Gestão de Eventos','Capacitação Profissional'] },
          { title: 'Contactos', links: ['+244 934 030 551','maiskumbo51@gmail.com','Rua das Acácias, nº 123, Luanda, Angola'] },
        ].map((col, i) => (
          <div className="fCol" key={i}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l, j) => <li key={j}><a href="#">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="fBottom">
        <div className="fCopy">© 2024 Mais Kumbu. Todos os direitos reservados.</div>
        <ul className="fBottomLinks">
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Termos de Uso</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer