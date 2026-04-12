import React from 'react'
import './Contact.css'

const Contact = () => {
  const [result, setResult] = React.useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('A enviar...')

    const formData = new FormData(event.target)
    formData.append('access_key', 'e59d05e2-3b93-4fcb-bb7d-80ced5e317e1')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('✓ Mensagem enviada com sucesso!')
      event.target.reset()
    } else {
      setResult('Erro ao enviar. Tente novamente.')
    }
  }

  return (
    <div className="cWrap" id="contact">

      {/* LEFT */}
      <div className="cLeft">
        <div className="cOrb cOrb1" />
        <div className="cOrb cOrb2" />

        <div className="cLeftInner">
          <div>
            <div className="cTag">Contacto</div>
            <h2>Vamos criar<br />algo <em>juntos</em></h2>
            <p className="cLeftDesc">
              Conectamos o seu negócio a soluções financeiras, tecnologia e
              relações estratégicas que impulsionam crescimento real no mercado
              angolano.
            </p>
          </div>

          <div className="cContacts">
            <div className="cContact">
              <div className="cContactIcon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="cContactInfo">
                <span className="cContactLabel">Email</span>
                <span className="cContactValue">kumbuconexoescomercial@gmail.com</span>
              </div>
            </div>

            <div className="cContact">
              <div className="cContactIcon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.1 2.18 2 2 0 012.09 0h3a2 2 0 012 1.72c.198.96.52 1.874.96 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.94.44 1.854.76 2.81.96A2 2 0 0122 14.92z"/>
                </svg>
              </div>
              <div className="cContactInfo">
                <span className="cContactLabel">Telefone</span>
                <span className="cContactValue">+244 934 030 551</span>
              </div>
            </div>

            <div className="cContact">
              <div className="cContactIcon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8 2 4 5 4 9c0 5.25 8 13 8 13s8-7.75 8-13c0-4-4-7-8-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </div>
              <div className="cContactInfo">
                <span className="cContactLabel">Localização</span>
                <span className="cContactValue">Luanda, Angola</span>
              </div>
            </div>

            <div className="cCopy">
              © 2026MaisKumbu . Todos os direitos reservados
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
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
            <button type="submit" className="cSubmit">
              Enviar mensagem
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            {result && <div className="cResult">{result}</div>}
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact