import './Saludo.css'

const nombre = 'Georg'
const apellido = 'Gonzalez'
const materias = ['Matematica', 'Fisica', 'Quimica', 'Historia', 'Lengua']

const Saludo = ({ nombre2, apellido2 }) => {
  return (
    <section className="saludo-card">
      <div className="saludo-header">
        <span className="saludo-badge">Bienvenida</span>
        <h2>Bienvenido a mi primer proyecto de React</h2>
      </div>

      <p className="saludo-texto">
        Hola, {nombre} {apellido}!
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
        Hola {nombre2} {apellido2}!
      </p>
    </section>
  )
}

export default Saludo