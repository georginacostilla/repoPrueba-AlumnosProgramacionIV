// Chicos recuerden que esto es lo que se conoce como desestructuración de los componentes 
// de react-bootstrap, para que puedan ver como se hace y lo apliquen en sus proyectos.

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <main>
        <Container fluid className="min-vh-100 d-flex align-items-center bg-info-subtle py-5">
          <Row className="justify-content-center w-100">
            <Col xs={12} sm={10} md={7} lg={5} xl={4}>
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body className="p-4 p-md-5">
                  <h1 className="h3 mb-2 text-center">Iniciar sesión</h1>
                  <p className="text-secondary mb-4 text-center">
                    Ingresa tus datos para continuar
                  </p>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="loginEmail">
                      <Form.Label>Correo electrónico</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="nombre@ejemplo.com"
                        autoComplete="email"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Tu contraseña"
                        autoComplete="current-password"
                        required
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                      <Button className="w-50" variant="primary" type="submit">
                        Ingresar
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

export default Login
