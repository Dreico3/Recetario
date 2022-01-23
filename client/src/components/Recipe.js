import React from "react";
import './css/recipe.css'
export default function Recipe({ receta }) {
    return (
        <div className="containe">
            <div className="card-containe">
                <div className="heade">
                    <a href=" #">
                        <img
                            src={receta.image}
                            alt="Alex? are you..??"
                            height="200px"
                        />
                    </a>
                    <h1>{receta.title}</h1>

                </div>
                <div className="descriptio">
                    <p>
                        {receta.summary}
                        
                    </p>
                
            
                    <div className="diet">
                        <a href=" #" className="fab fa-facebock">logo</a>
                        <a href=" #" className="fab fa-instagram">logo</a>
                        <a href=" #" className="fab fa-facebock-f">logo</a>
                    </div>
                </div>

            </div>
        </div>
    )
}