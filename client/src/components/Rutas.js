import React from "react";
import { NavLink, Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import style from './css/rutas.module.css'
export default function Rutas() {

    return (
        <Nav className="me-auto">
            <Nav.Link>
                <Link to='/recipes' className={style.ruta}>
                    Recetas
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/search' className={style.ruta}>
                    Busquedas
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/form' className={style.ruta}>
                    Registro
                </Link>
            </Nav.Link>
        </Nav>
    )
}