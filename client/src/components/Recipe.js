import React from "react";
import './css/recipe.css'
import { Link } from "react-router-dom";
export default function Recipe({ receta }) {

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
                        <p dangerouslySetInnerHTML={{ __html: receta.summary }}>

                        </p>

                        <div className="diet">
                            {/* <a href=" #" className="fab fa-facebock">logo</a>
                            <a href=" #" className="fab fa-instagram">logo</a>
                            <a href=" #" className="fab fa-facebock-f">logo</a> */}
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    )
}