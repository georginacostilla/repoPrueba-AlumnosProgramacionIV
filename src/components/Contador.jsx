// Uso de useState y useEffect para crear un contador

import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Contador = () => {
  const [contador, setContador] = useState(0)

  // Actualizar el título de la pestaña cuando cambia el contador
  useEffect(() => {
    document.title = `Contador: ${contador}`
  }, [contador])

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={7} lg={5}>
          <Card className="border-0 rounded-4 shadow-sm text-center">
            <Card.Body className="p-4 p-md-5">
              <Card.Title as="h2" className="mb-2">
                Este es un ejemplo de un contador utilizando: <strong>useState</strong>
              </Card.Title>
              <Card.Text className="text-secondary mb-4">
                Trabajo práctico nro. 7 - Comisión X
              </Card.Text>

              <p className="display-3 fw-bold text-primary mb-4" aria-live="polite">
                {contador}
              </p>

              <div className="d-flex justify-content-center gap-2">
                <Button
                  variant="outline-primary"
                  onClick={() => setContador((valorActual) => valorActual - 1)}
                >
                  Decrementar
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setContador((valorActual) => valorActual + 1)}
                >
                  Incrementar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Contador