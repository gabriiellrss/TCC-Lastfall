import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger);

function Est2() {
  const sectionsRefs = useRef([]);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const homePage = useRef()



  useEffect(() => {
    if(isMobile && homePage.current){
      homePage.current.classList.add('moblieActive')
    }
  },[isMobile])

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
        { y: 5, opacity: 0.5 },
        {
          y: -5,
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
    <div ref={homePage}>
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
                <a href="" className="font-custom">Lastfall</a> Embarque em uma jornada assombrosa neste RPG de ação, ambientado em um mundo vasto e sombrio, onde o desconhecido espreita a cada esquina. Adentre um laboratório destruído, explore uma cidade desolada e enfrente inimigos terríveis enquanto desvende os segredos sombrios que moldam esse universo macabro. A cada passo, descubra os mistérios ocultos de uma corporação sinistra e suas ações nefastas, enquanto segue o rastro das intenções sombrias de Helton. No clímax, a verdade se revelará dentro da empresa onde tudo começou. Será você capaz de enfrentar o terror e emergir com a verdade?
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
        ref={(el) => (sectionsRefs.current[2] = el)}
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
        ref={(el) => (sectionsRefs.current[3] = el)}
      >
        <Container>
          <Row>

            <Col md={6} >
              <img
                src="https://via.placeholder.com/500x300"
                alt="Imagem do jogo"
                className="img-fluid rounded"
              />
            </Col>

            <Col md={6} className="overflow-hidden">
              <h2 >Sinopse</h2>
              <p className="overflow-y-scroll pe-3" style={{height: "20rem"}}>
                <a href="" className="font-custom">Lastfall</a> se passa em 2100 em um mundo destopico onde por causa dos impactos dao aquecimento global o planeta se tornou difente, ele fcou mais quente e seu ar não é mas o mesmo, com isso aumentou as pessoas que sofrem de doenças relacionadas com o ar, vendo isso uma empresa que se chama Umbrella corps foi criado por helton para forncecer medicamentos com preços mais baratos e equipamentos tecnologicos mais baratos para hospitais para ajudar a população, mas atrás dos panos a empresa é totalmente diferente, mas para conseguir fazer esse medicamentos a empresa aposta em pesquisar geleiras para assim pegar bacterias antigas e fazer medicamentos mas baratos e melhores com isso cleber e mais 49 cientistas foram até o polo sul para pesquisar novas bacterias para desenvolver mais medicamentos, contratos pela Umbrella, mas quando cleber tinha achado uma nova especie de bacteria uma das gelerias se deslocaram e um pedaço acabou caindo em cima dele e depois ele acorda em um laboratório destruido e começa sua jornda para sair de lá e descobir como ele foi parar lá e ele percebe que não é mais o mesmo. reescreva isso mas não mude muita coisa
                  Lastfall se passa em 2100 em um mundo distópico onde, devido aos impactos do aquecimento global, o planeta se transformou drasticamente. A temperatura aumentou, e a qualidade do ar se deteriorou, resultando em um crescimento alarmante de doenças respiratórias. Em resposta, a empresa Umbrella Corps foi criada por Helton para fornecer medicamentos e equipamentos tecnológicos a preços acessíveis para hospitais, ajudando a população. No entanto, por trás dessa fachada benevolente, a empresa tem intenções sombrias.
                  Para produzir esses medicamentos, a Umbrella Corps aposta em pesquisas nas geleiras para extrair bactérias antigas que possam ser usadas para criar medicamentos mais eficazes e baratos. Cleber, junto com outros 49 cientistas, foi enviado ao Polo Sul para coletar essas bactérias, sob contrato da Umbrella.
                  Durante a expedição, Cleber descobriu uma nova espécie de bactéria. Porém, um deslocamento de gelo fez com que um pedaço caísse sobre ele. Quando Cleber acorda, encontra-se em um laboratório destruído. Ele começa sua jornada para escapar, desvendando como foi parar ali e descobrindo que algo dentro dele mudou.

              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="features"
        className="bg-black py-5"
        ref={(el) => (sectionsRefs.current[4] = el)}
      >
        <h1 className="text-center text-white pb-3">Características</h1>

        <Container
          className="d-flex flex-wrap gap-3 justify-content-center"
        >
          <div className="card" style={{ width: '18rem' }}>
            <img src="/citygreen.png" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', minWidth: '250px' }}>
            <img src="/citygreen.png" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', minWidth: '250px' }}>
            <img src="/citygreen.png" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', minWidth: '250px' }}>
            <img src="/citygreen.png" className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </Container>
      </section>

      {
        isMobile ? (
      <section
        id="characters"
        className="py-5"
        ref={(el) => (sectionsRefs.current[5] = el)}
      >
        <Container className="py-4 text-center">
          <h2 className="text-white fs-1">Personangens</h2>
        </Container>

        <Container className="mb-5">
          <Row>
            <Col md={6}>
              <img
                src="/person/Helton-2.png"
                alt="Imagem do jogo"
                className="img-fluid rounded gradiant w-100 img-hover"
              />
            </Col>

            <Col md={6} className="d-flex align-items-center">
            <div>
              <h2 className="fs-3 text-center">Helton</h2>
              <p className="text-center">
                Helton, um bilionário empresário da influente família Draven, que ganhou renome por sua grande carreira no ramo da tecnologia, agora expandiu sua empresa para o setor médico. Fundador da Umbrella Corps, ele pretende demonstrar que visa "o bem das pessoas". No entanto, Helton também tem seus próprios motivos ocultos. Será que esses motivos justificam seus erros e atos maléficos?
              </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mb-5">
          <Row>
            <Col md={6}>
              <img
                src="/person/jeff.png"
                alt="Imagem do jogo"
                className="img-fluid rounded gradiant w-100 img-jeff-hover"
              />
            </Col>

            <Col md={6} className="d-flex align-items-center">
            <div>
              <h2 className="fs-3 text-center">Jeff</h2>
              <p className="text-center">
                Jeff, mais conhecido como Jeffrey Collins, é um cientista brilhante e um dos principais braços direitos de Helton no laboratório. Ele foi um dos primeiros a iniciar o projeto de medicamentos da Umbrella Corps. No entanto, ao longo do tempo, algumas de suas atitudes mudaram, lançando uma sombra sobre seu futuro. Como será que ele está atualmente?
              </p>
              </div>
            </Col>


          </Row>
        </Container>

        <Container className="mb-5">
          <Row>
            <Col md={6}>
              <img
                src="/person/kleber.png"
                alt="Imagem do jogo"
                className="img-fluid rounded gradiant w-100 img-kleber-hover"
              />
            </Col>

            <Col md={6} className="d-flex align-items-center">
            <div>
              <h2 className="fs-3 text-center">Kleber</h2>
              <p className="text-center">
                Cleber Fernandes, um talentoso cientista ainda sem grande renome no mundo científico, estava em busca de oportunidades para melhorar sua situação financeira. Quando recebeu um convite da Umbrella para participar de uma pesquisa no Polo Sul, ele aceitou sem hesitar. No entanto, ele não poderia imaginar que essa decisão transformaria sua vida de maneira irreversível, levando-o a situações e ações que jamais pensou que teria que enfrentar.
              </p>
              </div>
            </Col>
          </Row>
        </Container>

      </section>
          
      ) : (
        <section
          id="characters"
          className="py-5"
          ref={(el) => (sectionsRefs.current[5] = el)}
        >
          <Container className="py-4 text-center">
            <h2 className="text-white fs-1">Personangens</h2>
          </Container>
          <Container>
            <Row>
              <Col md={6}>
                <img
                  src="/person/Helton-2.png"
                  alt="Imagem do jogo"
                  className="img-fluid rounded gradiant w-100 img-hover"
                />
              </Col>
  
              <Col md={6} className="d-flex align-items-center">
              <div>
                <h2>Helton</h2>
                <p>
                  <a href="" className="font-custom">Lastfall</a> Helton, um bilionário empresário da influente família Draven, que ganhou renome por sua grande carreira no ramo da tecnologia, agora expandiu sua empresa para o setor médico. Fundador da Umbrella Corps, ele pretende demonstrar que visa "o bem das pessoas". No entanto, Helton também tem seus próprios motivos ocultos. Será que esses motivos justificam seus erros e atos maléficos?
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
                  Jeff, mais conhecido como Jeffrey Collins, é um cientista brilhante e um dos principais braços direitos de Helton no laboratório. Ele foi um dos primeiros a iniciar o projeto de medicamentos da Umbrella Corps. No entanto, ao longo do tempo, algumas de suas atitudes mudaram, lançando uma sombra sobre seu futuro. Como será que ele está atualmente?
                </p>
                </div>
              </Col>
  
              <Col md={6}>
                <img
                  src="/person/jeff.png"
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
                  src="/person/kleber.png"
                  alt="Imagem do jogo"
                  className="img-fluid rounded gradiant w-100 img-kleber-hover"
                />
              </Col>
  
              <Col md={6} className="d-flex align-items-center">
              <div>
                <h2>Kleber</h2>
                <p>
                  Cleber Fernandes, um talentoso cientista ainda sem grande renome no mundo científico, estava em busca de oportunidades para melhorar sua situação financeira. Quando recebeu um convite da Umbrella para participar de uma pesquisa no Polo Sul, ele aceitou sem hesitar. No entanto, ele não poderia imaginar que essa decisão transformaria sua vida de maneira irreversível, levando-o a situações e ações que jamais pensou que teria que enfrentar.
                </p>
                </div>
              </Col>
            </Row>
          </Container>
  
        </section>
      ) 
    }


      <section
        id="trailer"
        className="py-5"
        ref={(el) => (sectionsRefs.current[6] = el)}
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
    </div>
  );
}

export default Est2;