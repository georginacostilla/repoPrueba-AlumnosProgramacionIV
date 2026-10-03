import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
    <Navbar expand="lg" bg="info-subtle" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="py-0">
          <Image
            src="/utn-logo.png"
            alt="Universidad Tecnológica Nacional"
            height={38}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
            <Button
              as={Link}
              to="/login"
              variant="primary"
              className="mt-2 mt-lg-0 ms-lg-2 fw-semibold"
            >
              Iniciar sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar