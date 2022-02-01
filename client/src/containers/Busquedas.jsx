import React from "react";
import { useSelector } from "react-redux";
import Recipe from "../components/Recipe";
import './css/busqueda.css';
export default function Busquedas() {
    const busqueda = useSelector(state => state.busquedas);

    return (
        <div>
            <div className="page">

                {busqueda !== null ?
                    busqueda.map(b => (

                        <Recipe key={b.id} receta={b} />
                    )) :
                    <div className="no-encontrado">
                        <h1>No se realizaron busquedas...</h1>
                    </div>

                }
            </div>
        </div>
    )
}