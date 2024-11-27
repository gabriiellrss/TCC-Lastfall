import { Container, Row, Col, Card } from 'react-bootstrap';

function Esp() {
  return (
    <div>

      <Container id='sinopse' className="my-5">
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-success">Sinopse</Card.Title>
                <Card.Text>
                  No ano de 2100, o aquecimento global transformou a Terra, causando desastres naturais e
                  submersão de cidades. Cleber, um cientista, e sua equipe são enviados ao Polo Sul para
                  investigar formas de mitigar as mudanças climáticas. Após uma tragédia, Cleber acorda em um
                  local estranho e destruído, cheio de criaturas monstruosas. Descobre que a corporação Umbrella
                  está realizando experimentos antiéticos com bactérias ancestrais, causando mutações. Cleber, agora
                  com habilidades aprimoradas, tenta sobreviver e entender a extensão das mudanças em seu corpo enquanto
                  enfrenta horrores e desvenda segredos sombrios.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container id='quemsomos' className="my-5">
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-success">Quem Somos</Card.Title>
                <Card.Text>
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

    </div>
  );
}

export default Esp;
