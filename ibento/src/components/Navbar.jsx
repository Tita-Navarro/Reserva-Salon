import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <Link to="/inicio"><span>Inicio </span></Link>
            <Link to="/nosotros"><span>Nosotros </span></Link>
            <Link to="/contacto"><span>Contacto </span></Link>
            <Link to="/inicio_de_sesion"><span>Inicio de sesión </span></Link>
            <Link to="/registro"><span>Registro</span></Link>

        </div>
    )
}

export default Navbar;