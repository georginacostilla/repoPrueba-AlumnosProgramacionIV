import './Saludo.css'

const nombre = 'Eugenia'
const apellido = 'Nuñez'
const materias = ['Programación', 'Bases de datos', 'Matemáticas', 'Gestión de Desarrollo de Software']

const Saludo = ({ nombreProfe, apellidoProfe }) => {
  return (
    <section className="saludo-card">
      <div className="saludo-header">
        <span className="saludo-badge">Bienvenida</span>
        <h2>En este componente estoy practicando <strong>Props y Map</strong></h2>
      </div>

      <p className="saludo-texto">
        Dirección a cargo de: {nombre} {apellido}
      </p>

      <div className="saludo-materias">
        <p>Mis materias son:</p>
        <ul>
          {materias.map((materia, index) => (
            <li key={index}>{materia}</li>
          ))}
        </ul>
      </div>

      <p className="saludo-personalizado">
        Profesora: {nombreProfe} {apellidoProfe}
      </p>
    </section>
  )
}

export default Saludo