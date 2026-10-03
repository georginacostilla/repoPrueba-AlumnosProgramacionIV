import './App.css'
import Navbar from './components/Navbar.jsx'
import Saludo from './components/Saludo.jsx'
import Footer from './components/Footer.jsx'
import Rutas from './components/routes/Rutas.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Rutas />
      <Saludo nombreProfe="Georgina" apellidoProfe="Costilla" />
      <Footer />
    </>
  )
}

export default App
