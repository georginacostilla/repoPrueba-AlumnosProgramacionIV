import { Col, Container, Image, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <main>
        <Container className="py-5">
          <Row className="align-items-center justify-content-center g-5 py-5">
            <Col xs={12} md={6} className="text-center text-md-start">
              <p className="text-primary fw-semibold mb-2">ComisionX</p>
              <h1 className="display-5 fw-bold mb-3">
                Bienvenidos a nuestro espacio de trabajo y aprendizaje en React
              </h1>
              <p className="lead text-secondary mb-4">
                Programación IV UTN-FRT
              </p>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <Image
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm1obHl2YnFvbDliZG8yYjJ6YjEwa3c5Z3Y0bHY0dWl0YzEwMTNwYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iIqmM5tTjmpOB9mpbn/giphy.gif"
                alt="Animación de bienvenida"
                fluid
                rounded
                className="shadow-sm"
              />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Home
