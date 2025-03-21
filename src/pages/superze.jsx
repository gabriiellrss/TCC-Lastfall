import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollReveal from "../Components/ScrollReveal";
import TiltedCard from "../Components/TiltedCard";
import Orb from "../Components/Orb";


const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SuperZe.zip"; // Caminho do arquivo
    link.download = "SuperZe.zip"; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  
  gsap.registerPlugin(ScrollTrigger);

  function SuperZeGamePage() {
    const heroRef = useRef(null);
    const gameplayRef = useRef(null);
    const characterRef = useRef(null);
    const downloadRef = useRef(null);
    const homeBack = useRef()
    const homeBackDiv = useRef()
    const homeLogo = useRef()
  
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
  
        const tl = gsap.timeline();
  
        tl.to('#section1', {
          duration: 0.3,
          opacity: 0,
          visibility: 'hidden',
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to('#section1', {
              visibility: 'visible',
              duration: 1,
              opacity: 1,
              scale: 1,
              ease: "power2.inOut",
            });
          }
        })
    
        .to("#logo", {
            duration: 0.5,
            y: 25,
            opacity: 0,
            ease: "power2.out",
            onComplete: () => {
              gsap.to("#logo", {
                duration: 1,
                opacity: 1,
                y: 0, // Corrigido de translateY para y
                ease: "power2.inOut",
                onComplete: () => {
                  gsap.to("#logo", {
                    y: 25, // Ajuste fino para o efeito de flutuação
                    repeat: -1,
                    yoyo: true,
                    duration: 1,
                    ease: "power1.inOut",
                  });
                }
              });
            }
          });
          
      }, []);
  
    return (
      <section >
        <section
            id="section1"
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
              }}
            >   

              <div ref={homeBackDiv}>
              <video
                id="video2"
                ref={homeBack}
                alt="Imagem de fundo"
                autoPlay 
                loop 
                muted
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              >
                <source src="/superZe-video.mp4" type="video/mp4" />
              </video>

              </div>

              <img
                id="logo"
                src="\SuperZe-IV\SVG\Prancheta 5logoVetor.svg"
                ref={homeLogo}
                alt="Logo"
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", 
                  width: "50%",
                  height: "auto",
                  zIndex: 5,
                  transformOrigin: "center center", 
                }}
              />
        </section>

        <div className="w-75 m-auto">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              Está preparado para enfrentar o maior inimigo do sistema? Venha conosco!
            </ScrollReveal>
        </div>

        <div className="w-75 m-auto d-flex justify-content-center align-items-center">
            <TiltedCard
              imageSrc="https://th.bing.com/th/id/OIP.g4I4pjbjXi9VVhjFXNaDQQHaGi?rs=1&pid=ImgDetMain"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="The Weeknd - After Hours"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
              overlayContent={
                <p className="tilted-card-demo-text">
                  Kendrick Lamar - GNX
                </p>
              }
            />

            <div style={{ width: "50%", height: "600px", position: "relative" }}>
              <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
              <p
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white", // Ajuste conforme o fundo
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Ouvir música
              </p>
            </div>

  
        </div>

  
        <section ref={gameplayRef} id="jogabilidade" className="container my-5">
          <div className="row g-4">
            <div className="col-md-6 bg-secondary text-white p-4 rounded">
              <h3>⚡ SISTEMA DE COMBATE</h3>
              <ul>
                <li>► DRIVE PUNCH - Alternativa de ataque</li>
                <li>► DRIVE STRETCH - Habilidade especial</li>
                <li>► PEN DRIVE - Arma principal</li>
              </ul>
            </div>
            <div className="col-md-6 bg-danger bg-opacity-25 text-white p-4 rounded">
              <h3>👾 INIMIGOS</h3>
              <div className="border p-3 mb-3 border-danger rounded">
                <h4>TROJAN HORSE</h4>
                <p>Discreto e perigoso, abre portas para invasões</p>
              </div>
              <div className="border p-3 border-danger rounded">
                <h4>RANSOMWARE</h4>
                <p>Criptografa dados e exige resgate</p>
              </div>
            </div>
          </div>
        </section>
  
        <section ref={characterRef} id="personagem" className="container text-center my-5 p-4 bg-secondary text-white rounded">
          <h2>SUPER ZÉ</h2>
          <p>A última esperança do sistema</p>
          <img src="spze.png" alt="Super Zé" className="img-fluid rounded shadow-lg border border-success" style={{ maxWidth: "400px" }} />
        </section>
  
        <section ref={downloadRef} id="download" className="text-center py-5 bg-dark text-white">
          <h2>BAIXE AGORA</h2>
          <button onClick={() => handleDownload()} className="btn btn-success btn-lg">DOWNLOAD GRATUITO</button>
        </section>
      </section>
    );
  }

export default SuperZeGamePage;
