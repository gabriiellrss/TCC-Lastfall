import { useEffect } from "react";
import "./PageSuperZe.css";

export default function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });

    const video = document.querySelector("video");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
  }, []);

  return (
    <div id="superze-page">

        <section id="jogabilidade" className="gameplay-section">
            <div className="game-feature">
                <h3 className="font-custom2 font-SuperZe">⚡ SISTEMA DE COMBATE</h3>
                <ul>
                    <li>► DRIVE PUNCH - Alternativa de ataque</li>
                    <li>► DRIVE STRETCH - Habilidade especial</li>
                    <li>► PEN DRIVE - Arma principal</li>
                </ul>
            </div>

            <div class="enemies-showcase">
                <h3 className="font-custom2 font-SuperZe">👾 INIMIGOS</h3>
                <div className="enemy-card">
                    <h4 >TROJAN HORSE</h4>
                    <p>Discreto e perigoso, abre portas para invasões</p>
                </div>
                <div class="enemy-card">
                    <h4>RANSOMWARE</h4>
                    <p>Criptografa dados e exige resgate</p>
                </div>
            </div>
        </section>

        <section id="personagem" className="character-card">
            <img src="spze.png" alt="Super Zé"/>
            <div>
                <h2>SUPER ZÉ</h2>
                <p>A última esperança do sistema</p>

            </div>
        </section>

        <section id="download" className="download-section">
            <h2 className="font-custom2 font-SuperZe-download">BAIXE AGORA</h2>
            <div className="requirements">
                <p>Requisitos Mínimos:</p>
                <p>Windows 10/11 | 4GB RAM | 2GB VRAM</p>
            </div>
            <a href="/SuperZe.zip" class="download-btn">DOWNLOAD GRATUITO</a>
        </section>
    </div>
  );
}
