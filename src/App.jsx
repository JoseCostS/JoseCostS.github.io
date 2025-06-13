import React from "react";
import "./App.css";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
} from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="portfolio">
     <header className="portfolio-header">
      <img src="/logo.png" alt="Logo" className="logo-img" />
      <div className="social-icons">
    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://br.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
  </div>
</header>

    <section className="apresentacao">
  <h2>Olá, eu sou o José Dev 👨‍💻</h2>
  <p>
    Sou desenvolvedor apaixonado por tecnologia, com foco em criar soluções
    eficientes, modernas e impactantes. Confira abaixo algumas das minhas
    habilidades e projetos!
  </p>
</section>

  <main className="portfolio-main">
  <div className="top-section">
    <section className="profile-card">
      <h2>Programador</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <FaHtml5 />
          <span>HTML5</span>
        </div>
        <div className="skill-item">
          <FaCss3Alt />
          <span>CSS3</span>
        </div>
        <div className="skill-item">
          <FaJs />
          <span>JavaScript</span>
        </div>
        <div className="skill-item">
          <FaPython />
          <span>Python</span>
        </div>
        <div className="skill-item">
          <FaJava />
          <span>Java</span>
        </div>
      </div>
    </section>

    <section className="card habilidades">
      <h3>Habilidades</h3>
      <ul>
        <li>Sou bom em analisar e solucionar problemas complexos de forma lógica e eficiente.</li>
        <li>Crio algoritmos e otimizo processos para que o código seja claro e objetivo.</li>
        <li>Me adapto bem a novas tecnologias, sempre me mantenho atualizado.</li>
      </ul>
    </section>
  </div>

<section className="card projetos">
  <h3>Projetos</h3>
  <div className="project-gallery">
    <div className="project-card">
      <img src="/img/badesco.png" alt="Badesco" />
      <div className="project-info">
        <h4>Badesco</h4>
        <p>Um banco para transferências, recebimentos de dinheiro e outras funcionalidades.</p>
      </div>
    </div>

    <div className="project-card">
      <img src="/img/doogle.png" alt="Doogle" />
      <div className="project-info">
        <h4>Doogle</h4>
        <p>Site para pesquisar e navegar na web, com design minimalista.</p>
      </div>
    </div>

    <div className="project-card">
      <img src="/img/pobreflix.png" alt="PobreFlix" />
      <div className="project-info">
        <h4>PobreFlix</h4>
        <p>App de streaming com filmes e séries.</p>
      </div>
    </div>
  </div>
</section>



      </main>
      <footer className="portfolio-footer">
      <p>Entre em contato pelas minhas redes sociais!</p>
    </footer>
    </div>
    
  );
  
}
