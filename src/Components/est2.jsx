import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

function Est2() {
  const sectionsRefs = useRef([]);

  useEffect(() => {
    sectionsRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: index % 2 === 0 ? 100 : -100 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true, 
            toggleActions: "play none none none",
          },
        }
      );
    });
  
    gsap.utils.toArray(".parallax").forEach((element) => {
      gsap.fromTo(
        element,
        { y: 100, opacity: 0.5 },
        {
          y: -100,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            scrub: 1,
          },
        }
      );
    });
  
    gsap.fromTo(
      ".card",
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2, 
        scrollTrigger: {
          trigger: ".card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  

  return (
    <>
      <div
        className="bg-dark text-white text-center py-5"
        id="home"
        ref={(el) => (sectionsRefs.current[0] = el)}
      >
        <Container>
          <h1 className="font-monospace">Bem-vindo ao <a className="font-custom text-decoration-none text-white p-0 m-0">Lastfall</a></h1>
          <p>Uma aventura que vai mudar sua vida.</p>
          <Button variant="primary" size="lg" href="#trailer">
            Assista ao Trailer
          </Button>
        </Container>
      </div>

    
      <section
        id="about"
        className="py-5"
        ref={(el) => (sectionsRefs.current[1] = el)}
      >
        <Container>
          <Row>
            <Col md={6}>
              <h2>Sobre o Jogo</h2>
              <p>
                <a href="" className="font-custom">Lastfall</a> é um RPG de ação ambientado em um mundo vasto e
                repleto de mistérios. Explore masmorras, derrote inimigos
                poderosos e descubra a história épica por trás desse universo.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="https://via.placeholder.com/500x300"
                alt="Imagem do jogo"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="about"
        className="py-5"
        ref={(el) => (sectionsRefs.current[1] = el)}
      >
        <Container id="quemsomos" className="my-5" >
            <Row>
              <Col>
                <Card className="shadow-sm bg-black border-0">
                  <Card.Body>
                    <Card.Title className="text-center fs-1">Quem Somos</Card.Title>
                    <Card.Text className="text-center">
                      Somos uma equipe talentosa da ETEC, unida pela paixão e pela criatividade no desenvolvimento de jogos.
                      Nosso objetivo é criar um jogo envolvente e inovador que possa se destacar e alcançar sucesso no futuro.
                      Nosso projeto atual é mais do que apenas um jogo; é uma experiência única que mistura narrativa intrigante,
                      jogabilidade desafiadora e um universo imersivo. Estamos dedicados a cada detalhe, desde a concepção inicial
                      até a finalização, sempre focados em proporcionar a melhor experiência possível para os jogadores.
                      Acreditamos no poder do trabalho em equipe e na soma das habilidades individuais de cada membro. Juntos,
                      superamos desafios técnicos e narrativos, sempre buscando soluções criativas e eficientes. Estamos
                      comprometidos em aprender, evoluir e transformar nossas ideias em realidade.
                      Nosso sonho é ver nosso jogo ganhar vida e conquistar fãs ao redor do mundo. Sabemos que com dedicação,
                      inovação e paixão, podemos alcançar esse objetivo. Este é apenas o começo de uma jornada que pode levar
                      nosso projeto a ser um grande sucesso na indústria de jogos.
                      Venha conosco nesta aventura e veja como a nossa equipe da ETEC pode fazer a diferença.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>
      </section>



      <section
        id="about"
        className="py-5"
        ref={(el) => (sectionsRefs.current[1] = el)}
      >
        <Container>
          <Row>

            <Col md={6}>
              <img
                src="https://via.placeholder.com/500x300"
                alt="Imagem do jogo"
                className="img-fluid rounded"
              />
            </Col>

            <Col md={6}>
              <h2 >Sinopse</h2>
              <p>
                <a href="" className="font-custom">Lastfall</a> é um RPG de ação ambientado em um mundo vasto e
                repleto de mistérios. Explore masmorras, derrote inimigos
                poderosos e descubra a história épica por trás desse universo.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="features"
        className="bg-black py-5 "
        ref={(el) => (sectionsRefs.current[2] = el)}
      >
        <h1 className="text-center pb-3">Caracteristicas</h1>
            <Container className="d-flex gap-3 justify-content-center">
              <div className="card" style={{width: '18rem'}}>
                <img src="./src/assets/citygreen.png" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div className="card" style={{width: '18rem'}}>
                <img src="./src/assets/citygreen.png" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div className="card" style={{width: '18rem'}}>
                <img src="./src/assets/citygreen.png" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div className="card" style={{width: '18rem'}}>
                <img src="./src/assets/citygreen.png" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </Container>

      </section>
        
      <section
        id="characters"
        className="py-5"
        ref={(el) => (sectionsRefs.current[3] = el)}
      >
        <Container>
          <Row>
            <Col md={6}>
              <img
                src="public/person/Helton-2.png"
                alt="Imagem do jogo"
                className="img-fluid rounded gradiant w-100 img-hover"
              />
            </Col>

            <Col md={6} className="d-flex align-items-center">
            <div>
              <h2>Helton</h2>
              <p>
                <a href="" className="font-custom">Lastfall</a> é um RPG de ação ambientado em um mundo vasto e
                repleto de mistérios. Explore masmorras, derrote inimigos
                poderosos e descubra a história épica por trás desse universo.
              </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>

            <Col md={6} className="d-flex align-items-center">
            <div>
              <h2>Jeff</h2>
              <p>
                <a href="" className="font-custom">Lastfall</a> é um RPG de ação ambientado em um mundo vasto e
                repleto de mistérios. Explore masmorras, derrote inimigos
                poderosos e descubra a história épica por trás desse universo.
              </p>
              </div>
            </Col>

            <Col md={6}>
              <img
                src="public/person/jeff.png"
                alt="Imagem do jogo"
                className="img-fluid rounded gradiant w-100 img-jeff-hover"
              />
            </Col>

          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={6}>
              <img
                src="public/person/kleber.png"
                alt="Imagem do jogo"
                className="img-fluid rounded gradiant w-100 img-kleber-hover"
              />
            </Col>

            <Col md={6} className="d-flex align-items-center">
            <div>
              <h2>Kleber</h2>
              <p>
                <a href="" className="font-custom">Lastfall</a> é um RPG de ação ambientado em um mundo vasto e
                repleto de mistérios. Explore masmorras, derrote inimigos
                poderosos e descubra a história épica por trás desse universo.
              </p>
              </div>
            </Col>
          </Row>
        </Container>

      </section>


      <section
        id="trailer"
        className="py-5"
        ref={(el) => (sectionsRefs.current[5] = el)}
      >
        <Container>
          <h2 className="text-center mb-4">Trailer do Jogo</h2>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Trailer do Jogo"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Est2;
