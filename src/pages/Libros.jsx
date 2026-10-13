import { useEffect, useState } from 'react'
import axios from 'axios'
import { Alert, Card, Col, Container, Row, Spinner } from 'react-bootstrap'

const URL_API = import.meta.env.VITE_API_URL

const Libros = () => {
  const [libros, setLibros] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const obtenerLibros = async () => {
      

      try {
        const respuesta = await axios.get(`${URL_API}/search.json`, {
          params: { q: 'el principito', limit: 10 },
        })
        setLibros(respuesta.data.docs)
      } catch (errorSolicitud) {
        console.error('Error al cargar los libros:', errorSolicitud)
        setError('No se pudieron cargar los libros. Intentá nuevamente más tarde.')
      } finally {
        setCargando(false)
      }
    }

    obtenerLibros()
  }, [])

  return (
    <main>
      <Container className="py-5">
        <h1 className="mb-2">Libros</h1>
        <p className="text-secondary mb-4">
          Resultados para &quot;el principito&quot;, obtenidos con Axios y useEffect.
        </p>

        {cargando && (
          <div className="d-flex align-items-center gap-2" role="status">
            <Spinner animation="border" size="sm" />
            <span>Cargando libros...</span>
          </div>
        )}

        {!cargando && error && <Alert variant="danger">{error}</Alert>}

        {!cargando && !error && libros.length === 0 && (
          <Alert variant="info">No se encontraron libros.</Alert>
        )}

        {!cargando && !error && libros.length > 0 && (
          <Row className="g-3">
            {libros.map((libro) => (
              <Col key={libro.key} xs={12} md={6} lg={4}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <Card.Title as="h2" className="h5">
                      {libro.title}
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      Autor: {libro.author_name?.join(', ') || 'No disponible'}
                    </Card.Text>
                    <Card.Text className="text-secondary mb-0">
                      Año de publicación: {libro.first_publish_year || 'No disponible'}
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

export default Libros
