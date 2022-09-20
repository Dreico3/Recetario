import React from "react";
import { NavLink, Link } from 'react-router-dom';
import './css/rutas.css'
export default function Rutas() {

    return (
        <div className="rutas">
                <Link to='/recipes' className="ruta">
                    Recetas
                </Link>
                <Link to='/search' className="ruta">
                    Busquedas
                </Link>
                <Link to='/form' className="ruta">
                    Registro
                </Link>
        </div>
    )
}