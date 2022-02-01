import React from "react";
import Recipe from '../components/Recipe';
import './css/page.css'

import { useSelector, useDispatch } from "react-redux";
import { ordenarAZ, ordenarPuntuacionA, ordenarPuntuacionD, ordenarZA } from "../store/actions";

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
    return (
        <div className="page">
            <div className="orden">
                <button onClick={e => dispatch(ordenarAZ(recetas))}>oredernar A-Z</button>
                <button onClick={e => dispatch(ordenarZA(recetas))} >oredernar Z-A</button>
                <button onClick={e=>dispatch(ordenarPuntuacionD(recipes))}>ordenar por puntuacion decendente</button>
                <button onClick={e=>dispatch(ordenarPuntuacionA(recipes))}>ordenar por puntuacion acendente</button>
            </div>
            {recipes.map(r => <Recipe receta={r} key={r.id} />)}
        </div>
    )
}