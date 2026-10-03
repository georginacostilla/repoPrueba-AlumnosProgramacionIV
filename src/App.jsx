import './App.css'
import Navbar from './components/Navbar.jsx'
import Saludo from './components/Saludo.jsx'
import Footer from './components/Footer.jsx'
import Rutas from './components/routes/Rutas.jsx'
import Contador from './components/Contador.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Rutas />
      <Saludo nombreProfe="Georgina" apellidoProfe="Costilla" />
      <Contador />
      <Footer />
    </>
  )
}

export default App
