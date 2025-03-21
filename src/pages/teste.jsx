import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Teste() {
    return (
        <div className="bg-dark text-light">
            {/* Hero Section */}
            <section className="py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="display-4 fw-bold mb-4">SuperZe</h1>
                            <p className="lead mb-4">Embarque em uma aventura épica neste jogo de plataforma cheio de ação e desafios!</p>
                            <Button variant="primary" size="lg" className="me-3">Jogar Agora</Button>
                            <Button variant="outline-light" size="lg">Saiba Mais</Button>
                        </Col>
                        <Col md={6}>
                            <div className="bg-primary p-5 rounded-3">
                                <h3 className="text-center">Preview do Jogo</h3>
                                <div className="bg-dark p-3 rounded-2 text-center">
                                    <p className="mb-0">Área do Game Preview</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Features Section */}
            <section className="py-5 bg-black">
                <Container>
                    <h2 className="text-center mb-5">Recursos do Jogo</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card bg="dark" text="light" className="h-100">
                                <Card.Body>
                                    <Card.Title>Mundos Únicos</Card.Title>
                                    <Card.Text>Explore diferentes mundos cheios de mistérios e desafios únicos.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card bg="dark" text="light" className="h-100">
                                <Card.Body>
                                    <Card.Title>Poderes Especiais</Card.Title>
                                    <Card.Text>Desbloqueie e domine poderes incríveis para superar obstáculos.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card bg="dark" text="light" className="h-100">
                                <Card.Body>
                                    <Card.Title>Multiplayer</Card.Title>
                                    <Card.Text>Jogue com amigos em modo cooperativo ou competitivo.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Call to Action */}
            <section className="py-5">
                <Container className="text-center">
                    <h2 className="mb-4">Pronto para Aventura?</h2>
                    <p className="lead mb-4">Junte-se a milhares de jogadores e comece sua jornada hoje!</p>
                    <Button variant="primary" size="lg">Download Agora</Button>
                </Container>
            </section>
        </div>
    );
}

export default Teste;
