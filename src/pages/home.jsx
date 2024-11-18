import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoComponent from "../Components/video";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Configuração do ScrollTrigger
  useEffect(() => {
    gsap.to("#logo", {
      scale: 2, // Amplia para o dobro do tamanho original
      opacity: 0, // Desvanece a logo durante o scroll
      scrollTrigger: {
        trigger: "#logo", // Elemento a ser monitorado
        start: "top center", // Início da animação
        end: "bottom top", // Fim da animação
        scrub: true, // Sincroniza a animação com o scroll
        markers: false, // Adicione true para depurar
      },
    });


  }, []);

  return (
    <div className="bg-black">
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Imagem de fundo */}
        <img
          id="fundo"
          src="/src/assets/fundo.png"
          alt="Imagem de fundo"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Logo com zoom dinâmico */}
        <img
          id="logo"
          src="/src/assets/logo.png"
          alt="Logo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Centraliza a logo
            width: "50%", // Reduzido para melhorar o efeito de zoom
            height: "auto",
            transformOrigin: "center center", // Origem do zoom no centro
          }}
        />
      </section>

      <section id="teste" className="bg-black w-100">
        <div className="container mt-5 text-lg-center">
          <h1 className="text-primary" style={{fontSize: '50px'}}>Mais que um Jogo!</h1>
        </div>
        
        <div className="m-3 d-flex justify-content-between " >
          <div style={{maxWidth:'60%'}}>
            <img src="/src/assets/imgs/personagem.png" className="img-fluid w-100" alt="..."
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%)',
                      maskImage: 'linear-gradient(to top, transparent 0%, black 30%) ' ,
                      WebkitMaskComposite: 'destination-in',
                      maskComposite: 'intersect',
                    }}/>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
              <h1 className="text-center text-primary">Helton o Maior vilao de todos os tempos!</h1>
          </div>
        </div>
      </section>

      
      <VideoComponent/>

    </div>
  );
}
