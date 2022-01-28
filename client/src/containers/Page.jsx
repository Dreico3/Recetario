import React from "react";
import Recipe from '../components/Recipe';
import './css/page.css'

import { useSelector, useDispatch } from "react-redux";
import { ordenarAZ, ordenarZA } from "../store/actions";

export default function Page({ num, recetas }) {
    const [recipes, setRecipes] = React.useState([]);
    var order = useSelector(state => state.order);

    const dispatch = useDispatch();

    React.useEffect(() => {
        let auxlist = [];
        let fin = num * 8;
        for (let i = fin - 8; i < fin; i++) {
            if (recetas[i]) {
                auxlist.push(recetas[i])
            }
        }
        setRecipes(auxlist);
    }, [num, recetas, order])
 //nos falta el selector multiple ...!!!!!
    return (
        <div className="page">
            <div>
                <p>
                    <label for="dwarfs">Selecciona los leñadores que te gusten:</label>
                    <select name="drawfs" id="drawfs">
                        <option>gruñón@woodworkers.com</option>
                        <option>feliz@woodworkers.com</option>
                        <option>dormilón@woodworkers.com</option>
                        <option>tímido@woodworkers.com</option>
                        <option>estornudo@woodworkers.com</option>
                        <option>tontín@woodworkers.com</option>
                        <option>doc@woodworkers.com</option>
                    </select>
                </p>
                <button onClick={e => dispatch(ordenarAZ(recetas))}>oredernar AZ</button>
                <button onClick={e => dispatch(ordenarZA(recetas))} >oredernar ZA</button>
            </div>
            {recipes.map(r => <Recipe receta={r} key={r.id} />)}
        </div>
    )
}