import React from "react";
import Recipe from '../components/Recipe';
import './css/page.css'

export default function Page({num, recetas}){
    const [recipes, setRecipes] = React.useState([]);
    React.useEffect(() => {
        let auxlist = [];
        let fin = num * 8;
        for (let i = fin - 8; i < fin; i++) {
            if(recetas[i]){
                auxlist.push(recetas[i])
            }
        }
        setRecipes(auxlist);
    }, [num,recetas])
    
    return(
        <div className="page">
            {recipes.map(r=><Recipe receta={r} key={r.id}/> )}
        </div>
    )
}