import './Alumno.css'

const materias = ['Matematica', 'Fisica', 'Quimica', 'Historia', 'Lengua']

const Alumnos = ({ nombreyApellido, edadAlumno }) => {
  return (
    <section className="alumno-card">
      <div className="alumno-header">
        <span className="alumno-badge">Alumno</span>
        <h2>Alumnos</h2>
      </div>

      <div className="alumno-info">
        <p>
          <strong>Nombre:</strong> {nombreyApellido}
        </p>
        <p>
          <strong>Edad:</strong> {edadAlumno}
        </p>
      </div>

      <div className="alumno-materias">
        <h3>Materias por cursar</h3>
        <ul>
          {materias.map((materia, index) => (
            <li key={index}>{materia}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Alumnos