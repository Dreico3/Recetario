import React from "react";

export default function RecetaCompleta({ receta }) {
    console.log("esto es los paso?'")
    console.log(receta.analyzedInstructions);
    console.log("arriva de ti");

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
                <p>
                    {receta.summary}
                </p>
            </div>
            <div>
                {receta.analyzedInstructions!==undefined? receta.analyzedInstructions.map((p,i)=>{
                    return(
                        <p key={i}>{p}</p>
                    )

                }):<h4>no tiene pasos</h4>}
            </div>
        </div>
    )
}