import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <main>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={12} md={9} lg={7} xl={6}>
              <Card className="border-0 bg-light text-center shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <p className="display-1 fw-bold text-primary mb-0">404</p>
                  <h1 className="h2 mb-3">Página no encontrada</h1>
                  <p className="text-secondary mb-4">
                    No encontramos la página que estás buscando. Puede que el
                    enlace esté incorrecto o que la página ya no exista.
                  </p>
                  <Button as={Link} to="/" variant="primary">
                    Volver al inicio
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Error404
