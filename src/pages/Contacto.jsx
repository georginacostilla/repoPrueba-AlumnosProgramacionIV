import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Contacto = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <main>
        <Container fluid className="min-vh-100 d-flex align-items-center bg-info-subtle py-5">
          <Row className="w-100 g-0 justify-content-center align-items-center">
            <Col xs={12} sm={10} md={8} lg={7} xl={6}>
              <Card className="border-0 rounded-4 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <div className="mb-4 text-center">
                    <h1 className="h2 mb-2">Contacto</h1>
                    <p className="text-secondary mb-0">
                      ¿Tienes alguna consulta? Completa el formulario y cuéntanos
                      cómo podemos ayudarte.
                    </p>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="contactName">
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Tu nombre"
                            autoComplete="name"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="contactEmail">
                          <Form.Label>Correo electrónico</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="nombre@ejemplo.com"
                            autoComplete="email"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4" controlId="contactMessage">
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Escribe tu mensaje..."
                        required
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button type="submit" variant="primary">
                        Enviar mensaje
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Contacto
