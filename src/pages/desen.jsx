import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import MenuLastfall from "../Components/menu-lastfall";

function DevProgress() {
  const introRef = useRef(null);
  const progressRef = useRef(null);
  const teamRef = useRef(null);
  const galleryRef = useRef(null);
  const nextStepsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      progressRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: progressRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      teamRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      galleryRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      nextStepsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: nextStepsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div> 

      <Container id="intro" style={{paddingTop: "5rem"}} ref={introRef}>
        <Row>
          <Col>
            <h1>Desenvolvimento do Jogo: Lastfall</h1>
            <p>
              "Lastfall" está em constante evolução. Estamos criando um jogo de ação e aventura ambientado em um mundo
              pós-apocalíptico. A jornada do desenvolvimento envolve desafios técnicos e criativos, e estamos empolgados
              em compartilhar os progressos com você.
            </p>
          </Col>
        </Row>
      </Container>

      <Container id="progress" className="my-5" ref={progressRef}>
        <Row>
          <Col>
            <h2>Progresso do Desenvolvimento</h2>
            <p>
              O desenvolvimento de "Lastfall" segue em ritmo acelerado. As principais etapas incluem:
              <ul>
                <li>Planejamento do enredo e do mundo</li>
                <li>Desenvolvimento de mecânicas de combate</li>
                <li>Criação de personagens e ambientes</li>
                <li>Testes e otimização do jogo</li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>

      {/*<Container id="team" className="my-5" ref={teamRef}>
        <Row>
          <Col>
            <h2>A Equipe de Desenvolvimento</h2>
            <p>
              Nossa equipe é composta por profissionais dedicados que estão trabalhando arduamente para dar vida ao jogo.
              Cada membro tem uma especialidade única, e juntos estamos criando uma experiência inesquecível.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="shadow-lg mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" alt="Membro 1" />
              <Card.Body>
                <Card.Title>João Silva</Card.Title>
                <Card.Text>Designer de Jogo - Responsável pela mecânica de combate e jogabilidade.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" alt="Membro 2" />
              <Card.Body>
                <Card.Title>Maria Oliveira</Card.Title>
                <Card.Text>Artista 3D - Criadora de modelos e animações dos personagens.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" alt="Membro 3" />
              <Card.Body>
                <Card.Title>Carlos Souza</Card.Title>
                <Card.Text>Programador - Responsável pela implementação das mecânicas e engine do jogo.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container id="gallery" className="my-5" ref={galleryRef}>
        <Row>
          <Col>
            <h2>Galeria de Imagens</h2>
            <p>Veja algumas imagens do processo de desenvolvimento de "Lastfall".</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image src="/images/image.jpeg" thumbnail style={{overflow: 'hidden', objectFit: 'cover', aspectRatio: '16/9' }}/>
          </Col>
          <Col md={4}>
            <Image src="https://via.placeholder.com/500x300" thumbnail />
          </Col>
          <Col md={4}>
            <Image src="https://via.placeholder.com/500x300" thumbnail />
          </Col>
        </Row>
      </Container>*/}

      <Container id="next-steps" className="my-5" ref={nextStepsRef}>
        <Row>
          <Col>
            <h2>Próximos Passos</h2>
            <p>
              A próxima fase do desenvolvimento de *Lastfall* incluirá:
              <ul>
                <li>Integração de novos níveis e mapas</li>
                <li>Testes de jogabilidade para melhorar a experiência do usuário</li>
                <li>Otimização para plataformas de próxima geração</li>
              </ul>
              Estamos animados com o futuro do projeto e mal podemos esperar para compartilhar mais com todos!
            </p>
            {/*
            <Button variant="primary" href="/subscribe">
              Assine para Atualizações
            </Button>
            */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DevProgress;
