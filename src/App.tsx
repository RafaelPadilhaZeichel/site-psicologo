import { useState, useEffect } from 'react'
import { MessageCircle, Brain, Users, Target, Menu, X, Camera } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
        }
      })
    }, { threshold: 0.15 })

    const hiddenElements = document.querySelectorAll('.reveal')
    hiddenElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="navbar">
        <div className="nav-content">
          <span className="logo">Dr. Joubert Gomes</span>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#sobre" onClick={closeMenu}>Sobre Mim</a>
            <a href="#servicos" onClick={closeMenu}>Atendimentos</a>
            <a href="#faq" onClick={closeMenu}>Dúvidas</a>
            <a href="#contactos" onClick={closeMenu}>Contactos</a>
          </nav>
        </div>
      </header>

      <main className="container main-content">
        {/* Nova Secção Hero (Ampla e com Gradiente) */}
        <section id="inicio" className="hero reveal">
          <div className="hero-content">
            <h1>Como posso ajudar na sua melhoria?</h1>
            <h2>Joubert Gomes de Souza</h2>
            <p className="subtitle">Psicólogo Clínico | CRP 16/11386 - ES</p>
            <button className="btn-primary" onClick={() => window.open('https://wa.me/5527996522157', '_blank')}>
              <MessageCircle size={20} />
              Agendar Consulta pelo WhatsApp
            </button>
          </div>
        </section>

        <section id="sobre" className="section-card reveal">
          <div className="sobre-grid">
            <div className="sobre-texto">
              <h2>Sobre Mim</h2>
              <p className="destaque">Especialista em Análise do Comportamento Aplicada (ABA), Terapia Cognitivo Comportamental (TCC) e Neuropsicologia.</p>
              
              <div className="abordagem">
                <h3>Como funciona a minha abordagem?</h3>
                <p>Trabalho com a Terapia Analítico Comportamental e TCC. A nossa abordagem procura analisar os seus pensamentos para verificar como o ambiente interfere nas emoções. Isso ajuda a desenvolver ferramentas práticas para enfrentar inseguranças, ansiedade, falta de motivação, e ganhar mais compromisso com os seus objetivos.</p>
              </div>
            </div>
            <div className="sobre-imagem-container">
              <div className="foto-placeholder">
                <span>Espaço para a<br/>Foto Profissional<br/><small>(Tamanho ideal: 800x1000px)</small></span>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section-card reveal">
          <h2>Atendimentos</h2>
          <div className="grid-servicos">
            <div className="card">
              <Users className="card-icon" size={32} />
              <h3>Público</h3>
              <p>Adultos, adolescentes e casais.</p>
            </div>
            <div className="card">
              <Brain className="card-icon" size={32} />
              <h3>Especialidades</h3>
              <p>Ansiedade, Autismo, TDAH, depressão e dependência química.</p>
            </div>
            <div className="card">
              <Target className="card-icon" size={32} />
              <h3>Modalidades</h3>
              <p>Presencial (Vila Velha - ES) e Online (Google Meet).</p>
            </div>
          </div>
        </section>

        <section id="faq" className="section-card reveal">
          <h2>Dúvidas Frequentes</h2>
          <div className="faq-container">
            <details>
              <summary>Qual o valor das sessões?</summary>
              <p>Os valores são alinhados durante o nosso primeiro contacto, de acordo com a modalidade e frequência recomendada.</p>
            </details>
            <details>
              <summary>Oferece descontos?</summary>
              <p>As flexibilizações de honorários podem ser conversadas de forma transparente no momento do agendamento.</p>
            </details>
            <details>
              <summary>Qual a sua especialidade e experiência?</summary>
              <p>Sou especialista em ABA, TCC e Neuropsicologia, com ampla experiência no tratamento de ansiedade, TDAH, autismo e depressão.</p>
            </details>
            <details>
              <summary>Atende online?</summary>
              <p>Sim! Os atendimentos online são realizados através do Google Meet para pacientes de qualquer localização.</p>
            </details>
            <details>
              <summary>Trabalha com planos de saúde?</summary>
              <p>Os atendimentos são na modalidade particular, mas emito recibo para que possa solicitar o reembolso ao seu plano de saúde.</p>
            </details>
          </div>
        </section>

        <section id="contactos" className="section-card reveal">
          <h2>Contactos e Localização</h2>
          <p><strong>WhatsApp Comercial:</strong> (27) 99652-2157</p>
          <p><strong>Atendimento Presencial:</strong> Vila Velha, ES</p>
          
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.53235659223!2d-40.370505118742714!3d-20.35467362035313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81639d1b0d2d3%3A0xc3f8c8d8b9e6e0a8!2sVila%20Velha%2C%20ES!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="300" 
              style={{border: 0, borderRadius: '8px', marginTop: '1.5rem'}} 
              allowFullScreen={false} 
              loading="lazy">
            </iframe>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://www.instagram.com/psijoubertgomes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Camera size={28} />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Joubert Gomes de Souza. Todos os direitos reservados.</p>
          <p>Psicólogo Clínico | CRP 16/11386 - ES</p>
          <p>Design e Desenvolvimento por Rafael Padilha</p>
        </div>
      </footer>

      <a 
        href="https://wa.me/5527996522157" 
        className="whatsapp-float"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar pelo WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  )
}

export default App