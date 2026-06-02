import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult('')

    const fd = new FormData(e.target)
    fd.append('access_key', 'e59d05e2-3b93-4fcb-bb7d-80ced5e317e1')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      })
      const data = await response.json()

      if (data.success) {
        setResult('✓ Mensagem enviada com sucesso!')
        e.target.reset()
      } else {
        setResult('Erro ao enviar. Tente novamente.')
      }
    } catch {
      setResult('Algo correu mal. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="cWrap" id="contact">
      <div className="cLeft">
        <div className="cOrb cOrb1" />
        <div className="cOrb cOrb2" />
        <div className="cLeftInner">
          <div>
            <div className="cTag">Contacto</div>
            <h2>Vamos criar<br />algo <em>juntos</em></h2>
            <p className="cLeftDesc">
              Estamos prontos para transformar o seu projecto numa história de sucesso.
            </p>
          </div>
          <div className="cContacts">
            {[
              { label: 'Email',       value: 'maiskumbo51@gmail.com',           icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6' },
              { label: 'Telefone',    value: '+244 934 030 551',                 icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.1 2.18 2 2 0 012.09 0h3a2 2 0 012 1.72c.198.96.52 1.874.96 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.94.44 1.854.76 2.81.96A2 2 0 0122 14.92z' },
              { label: 'Localização', value: 'Rua das Acácias, nº 123, Luanda',  icon: 'M12 2C8 2 4 5 4 9c0 5.25 8 13 8 13s8-7.75 8-13c0-4-4-7-8-7zM12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z' },
            ].map((c, i) => (
              <div className="cContact" key={i}>
                <div className="cContactIcon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={c.icon} />
                  </svg>
                </div>
                <div className="cContactInfo">
                  <span className="cContactLabel">{c.label}</span>
                  <span className="cContactValue">{c.value}</span>
                </div>
              </div>
            ))}
            <div className="cCopy">© 2026 Mais Kumbu. Todos os direitos reservados.</div>
          </div>
        </div>
      </div>

      <div className="cRight">
        <h3>Envie uma mensagem</h3>
        <p>Responderemos em menos de 24 horas.</p>
        <form className="cForm" onSubmit={onSubmit}>
          <div className="cRow">
            <div className="cField">
              <input type="text" name="nome" placeholder=" " required />
              <label>Nome</label>
            </div>
            <div className="cField">
              <input type="tel" name="phone" placeholder=" " required />
              <label>Telefone</label>
            </div>
          </div>
          <div className="cField cFieldArea">
            <textarea name="message" rows="6" placeholder=" " required />
            <label>Mensagem</label>
          </div>
          <div className="cSubmitWrap">
            <button type="submit" className="cSubmit" disabled={loading}>
              {loading ? 'A enviar...' : 'Enviar mensagem'}
              {!loading && (
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              )}
            </button>
            {result && <div className="cResult">{result}</div>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact