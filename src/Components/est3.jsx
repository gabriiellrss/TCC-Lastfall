import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

function Lastfall() {
  const introRef = useRef(null);
  const gameplayRef = useRef(null);
  const storyRef = useRef(null);
  const charactersRef = useRef(null);
  const trailerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      gameplayRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: gameplayRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      storyRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      charactersRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: charactersRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      trailerRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: trailerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <Container id="intro" className="my-5" ref={introRef}>
        <Row className="text-center">
          <Col>
            <h1>Lastfall</h1>
            <p>
              Em um futuro pós-apocalíptico, a Terra foi devastada por um cataclismo global. A humanidade luta pela
              sobrevivência enquanto as cidades caem em ruínas. Você, o último herói de uma civilização esquecida,
              terá de enfrentar perigos inomináveis para restaurar a esperança.
            </p>
            <Button variant="primary" size="lg" href="#gameplay">
              Explore o Mundo
            </Button>
          </Col>
        </Row>
      </Container>

      <Container id="gameplay" className="my-5" ref={gameplayRef}>
        <Row>
          <Col md={6}>
            <h2>Jogabilidade</h2>
            <p>
              Em *Lastfall*, você irá explorar vastos ambientes destruídos, enfrentando criaturas mutantes e
              facções hostis. A jogabilidade mistura combate intenso, exploração e resolução de puzzles, com a
              possibilidade de personalizar sua personagem.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Gameplay"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        </Row>
      </Container>

      <Container id="story" className="my-5" ref={storyRef}>
        <Row>
          <Col>
            <h2>A História</h2>
            <p>
              *Lastfall* conta a história de um mundo destruído por um cataclismo global. Como o último sobrevivente
              da ordem antiga, você será chamado a desvendar os mistérios do fim do mundo. Em uma jornada cheia de
              escolhas difíceis e personagens inesquecíveis, você terá de decidir o destino da Terra.
            </p>
          </Col>
        </Row>
      </Container>

      <Container id="characters" className="my-5" ref={charactersRef}>
        <Row className="text-center">
          <Col md={4}>
            <Card className="shadow-lg mb-4">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x200"
                alt="Personagem 1"
              />
              <Card.Body>
                <Card.Title>O Último Herói</Card.Title>
                <Card.Text>
                  O protagonista, um herói com um passado sombrio, que busca redenção ao enfrentar os horrores do novo mundo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg mb-4">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x200"
                alt="Personagem 2"
              />
              <Card.Body>
                <Card.Title>Aliada Inesperada</Card.Title>
                <Card.Text>
                  Uma misteriosa mulher com habilidades sobrenaturais que pode ser a chave para reverter o apocalipse.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg mb-4">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x200"
                alt="Personagem 3"
              />
              <Card.Body>
                <Card.Title>O Vilão Impiedoso</Card.Title>
                <Card.Text>
                  O líder de uma facção militarizada, determinado a reconstruir o mundo com mãos de ferro.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container id="trailer" className="my-5" ref={trailerRef}>
        <Row className="text-center">
          <Col>
            <h2>Assista ao Trailer</h2>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/your-video-id"
                title="Trailer de Lastfall"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Pronto para jogar?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Prepare-se para uma aventura épica em *Lastfall*. Em breve, disponível para todas as plataformas.</p>
          </Modal.Body>
          <Modal.Footer className="gap-3">
            <Button variant="secondary" href="/download">Baixar agora</Button>
            <Button variant="primary" href="/trailer">Assista ao Trailer</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Container>
    </>
  );
}

export default Lastfall;
