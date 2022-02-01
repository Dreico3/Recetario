import React from "react";
import { getFoodLevel, getPasos } from "../controller";
import './css/recetaCompleta.css'
export default function RecetaCompleta({ receta }) {

    let ida = receta.id.toString();
    let pasos = [];
    if (receta.analyzedInstructions.length !== 0) {
        if (ida.length < 10) {
            pasos = getPasos(receta.analyzedInstructions[0].steps)
        } else {
            pasos = receta.analyzedInstructions;
        }
    }
    return (
        <div className="fondo">
            <div className="imagen">
                <img
                    src={receta.image}
                    alt="creo q no tenemos imagen de la receta"
                />
                <div>
                    <h2>{receta.title}</h2>
                    <h4>Resumen</h4>
                    <p dangerouslySetInnerHTML={{ __html: receta.summary }} />
                    <span>Nombre del creador: {receta.sourceName}</span>
                    <br/>
                    <b>Puntuacion de la receta {receta.healthScore}</b>
                    <br/>
                    <b>Nivel de la receta: {getFoodLevel(receta.healthScore)}</b>
                </div>
            </div>

            <div className="paso">
                <h1>Pasos</h1>
                {pasos.length !== 0 ? pasos.map((p, i) => {
                    return (
                        <div key={i}>
                           <h3>Paso {i + 1}</h3> 
                            <p dangerouslySetInnerHTML={{ __html: p }} >

                            </p>
                        </div>
                    )

                }) : <section className="no-encontrado">
                    <h1>Al parecer esta receta no tiene pasos</h1>
                </section>}
            </div>
        </div>
    )
}