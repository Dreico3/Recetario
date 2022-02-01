import React from "react";
import { useParams } from "react-router";
import RecetaCompleta from "../components/RecetaCompleta";
import { useSelector } from "react-redux";
import { busquedaId } from "../controller";
export default function InfoCard() {
    var { id } = useParams();
    var recetas = useSelector(state => state.recipes);
    var receta = busquedaId(recetas, id)
    return (
        <div >
            <RecetaCompleta receta={receta}/>
        </div>
    )
}