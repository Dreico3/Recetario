import React from "react";
import { useSelector } from "react-redux";
import Recipe from "../components/Recipe";
export default function Busquedas(){
    const busqueda = useSelector(state=>state.busquedas);

    return(
        <div>

            {busqueda!==null?
                busqueda.map(b=>(
                    
                    <Recipe key={b.id} receta={b}/>
                )):<h3>No realizaste una busqueda</h3>
            }
        </div>
    )
}