import React from "react";
import { getPasos } from "../controller";

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
        <div>
            <div>
                <img
                    src={receta.image}
                    alt="creo q no tenemos imagen de la receta"
                />
            </div>

            <div>
                resumen
                <p dangerouslySetInnerHTML={{ __html: receta.summary }}>
                </p>
            </div>

            <div>
                <h1>Pasos</h1>
                {pasos.length !== 0 ? pasos.map((p, i) => {
                    return (
                        <div key={i}>
                            paso {i+1}
                            <p dangerouslySetInnerHTML={{ __html: p }} >

                            </p>
                        </div>
                    )

                }) : <h4>no tiene pasos</h4>}
            </div>
        </div>
    )
}