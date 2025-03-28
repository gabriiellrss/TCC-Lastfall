import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollReveal from "../Components/ScrollReveal";
import TiltedCard from "../Components/TiltedCard";
import Orb from "../Components/Orb";
import PageSuperZe from "./PageSuperZe";


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
    
        .to("#logo2", {
            duration: 0.5,
            y: 25,
            opacity: 0,
            ease: "power2.out",
            onComplete: () => {
              gsap.to("#logo2", {
                duration: 1,
                opacity: 1,
                y: 0, // Corrigido de translateY para y
                ease: "power2.inOut",
                onComplete: () => {
                  gsap.to("#logo2", {
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
                id="logo2"
                src="/SuperZe-IV/4x/Prancheta 5logoPng4x.png"
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
              Esta preparado para enfrentar o maior inimigo do sistema? Venha jogar com a gente!
            </ScrollReveal>
        </div>

        <PageSuperZe/>

      </section>
    );
  }

export default SuperZeGamePage;
