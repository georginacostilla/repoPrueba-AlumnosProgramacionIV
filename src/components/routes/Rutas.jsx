import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Error404 from "../../pages/Error404";
import Contacto from "../../pages/Contacto";
import Login from "../../pages/Login";
import Libros from "../../pages/Libros";
import Publicaciones from "../../pages/Publicaciones";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/libros" element={<Libros />} />
      <Route path="/publicaciones" element={<Publicaciones />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default Rutas