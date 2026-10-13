import { useEffect, useState } from 'react'
import axios from 'axios'
import { Alert, Card, Col, Container, Row, Spinner } from 'react-bootstrap'

const URL_PUBLICACIONES = import.meta.env.VITE_URL_PUBLICACIONES

const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const respuesta = await axios.get(URL_PUBLICACIONES)
        setPublicaciones(respuesta.data.slice(0, 10))
      } catch (errorSolicitud) {
        console.error('Error al cargar las publicaciones:', errorSolicitud)
        setError('No se pudieron cargar las publicaciones. Intentá nuevamente más tarde.')
      } finally {
        setCargando(false)
      }
    }

    obtenerPublicaciones()
  }, [])

  return (
    <main>
      <Container className="py-5">
        <h1 className="mb-2">Publicaciones</h1>
        <p className="text-secondary mb-4">
          Ejemplo de consumo de una API con Axios y useEffect.
        </p>

        {cargando && (
          <div className="d-flex align-items-center gap-2" role="status">
            <Spinner animation="border" size="sm" />
            <span>Cargando publicaciones...</span>
          </div>
        )}

        {!cargando && error && <Alert variant="danger">{error}</Alert>}

        {!cargando && !error && (
          <Row className="g-3">
            {publicaciones.map((publicacion) => (
              <Col key={publicacion.id} xs={12} md={6} lg={4}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <Card.Title as="h2" className="h5 text-capitalize">
                      {publicacion.title}
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      {publicacion.body}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </main>
  )
}

export default Publicaciones
