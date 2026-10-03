import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <main>
        <Container className="py-5">
          <Row className="align-items-center justify-content-center text-center py-5">
            <Col xs={12} md={10} lg={8}>
              <p className="text-primary fw-semibold mb-2">ComisionX</p>
              <h1 className="display-5 fw-bold mb-3">
                Bienvenidos a nuestro espacio
              </h1>
              <p className="lead text-secondary mb-4">
                Inicia sesión para continuar o ponte en contacto con nosotros si
                necesitas ayuda.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Button as={Link} to="/login" variant="primary">
                  Iniciar sesión
                </Button>
                <Button as={Link} to="/contacto" variant="outline-primary">
                  Contacto
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Home
