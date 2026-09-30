import './App.css'
import Navbar from './components/Navbar.jsx'
import Saludo from './components/Saludo.jsx'
import Footer from './components/Footer.jsx'
import Alumnos from './components/Alumnos.jsx'
import Rutas from './components/routes/Rutas.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Rutas />
      <Saludo nombre2="Lucas" apellido2="Garcia" />
      <Saludo nombre2="Maria" apellido2="Lopez" />
      <Saludo nombre2="Juan" apellido2="Perez" />
      <Alumnos nombreyApellido="Lucas Gonzalez" edadAlumno={24} />
      <Footer />
    </>
  )
}

export default App
