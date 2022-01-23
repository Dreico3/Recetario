import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Recipe from '../components/Recipe';

export default function Recipes(){
    const recetas = useSelector(state=>state.recipes);
    return(
        <div>
            {console.log(recetas)}
            {recetas.map(r=><Recipe receta={r} key={r.id}/>)}
        </div>
    )
}