import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Error404 from "../../pages/Error404";
import Contacto from "../../pages/Contacto";
import Login from "../../pages/Login";

const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default Rutas