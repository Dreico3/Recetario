import React from "react";
import { NavLink } from 'react-router-dom';
import './css/rutas.css'
export default function Rutas() {

    return (
        <div className='mid'>
            <NavLink className={(data) => data.isActive ? 'active' : 'desactive'} to='/recipes'> Recetas </NavLink>
            <NavLink className={(data) => data.isActive ? 'active' : 'desactive'} to='/search'>Busquedas</NavLink>
            <NavLink className={(data) => data.isActive ? 'active' : 'desactive'} to='/form'> Registro</NavLink>
        </div>
    )
}