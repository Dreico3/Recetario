import React from "react";
import { useSelector } from "react-redux";
export default function RecipeDescription(){
    const dietas = useSelector(state=>state.dietas);
    return(
        <div>
            aqui etan las descripciones de las recetas
            {dietas.map(d=>(
                <div>
                    <h3>{d.nombre}</h3>
                    <p>{d.descripcion}</p>
                </div>
            ))}
        </div>
    )
}