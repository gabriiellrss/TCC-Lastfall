import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Est2 from "../Components/est2";
import Lastfall from "../Components/est3";


export default function PageLastfall() {
  
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
  
      .to('#logo', {
        duration: 0.3,
        scale: 30,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => {
          gsap.to('#logo', {
            duration: 1,
            opacity: 1,
            scale: 1,
            ease: "power2.inOut",
          });
        }
      });
    }, []);

  return ( 
    
    
    <div className="bg-black">
      <section
      id="section1"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          paddingTop:"100px"
        }}
      >   

        <div className="pt-5" >
        <img
          id="video"

          src="/fundo.png"
          alt="Imagem de fundo"
          style={{

            width: "100%",
            objectFit: "cover",
          }}
        />
          
        </div>

        <img
          id="logo"
          src="/logo.png"
          alt="Logo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", 
            width: "70%",
            height: "auto",
            zIndex: 5,
            transformOrigin: "center center", 
          }}
        />
      </section>



      <Est2/>

      <Lastfall/>
                  
      <div id="faleconosco" className=" d-flex justify-content-center ">
        <h1 style={{fontSize:'50px'}}>Fale conosco</h1>
      </div>
      <div className="container d-flex justify-content-center">
        <a href="https://wa.me/5511999999999" className="btn btn-success" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg> Enviar mensagem
        </a>
    </div>

    
      <footer className="bg-body-tertiary text-center text-lg-start mt-3">
          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2024 Copyright: Lastfall
          <p className="text-body" > Davi de Sousa, Felipe Duarte, Gabriel Rodrigo, Luiz Mateus e Miguel Antonio</p>
          </div>
      </footer>
    </div>

  );
}
