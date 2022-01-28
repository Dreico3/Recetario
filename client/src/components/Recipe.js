import React from "react";
import './css/recipe.css'
import { Link } from "react-router-dom";
import { getDiets } from "../controller";
export default function Recipe({ receta }) {
    var dietas = getDiets(receta);
    return (
        <div className="containe">
            <Link to={`/recipes/${receta.id}`} style={{ textDecoration: 'none', color: 'black' }}>

                <div className="card-containe">
                    <div className="heade">
                        <p>
                            <img
                                src={receta.image}
                                alt="Alex? are you..??"
                                height="200px"
                            />
                        </p>
                        <h1>{receta.title}</h1>

                    </div>
                    <div className="descriptio">
                        {/* <p dangerouslySetInnerHTML={{ __html: receta.summary }}></p> */}
                        <div className="diet">
                            <h5>tipos de dieta</h5>
                            {
                                dietas.map((d,i)=><p key={i}>{d}</p>)
                            }
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    )
}