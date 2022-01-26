import React from "react";
import {useSelector } from "react-redux";
import Page from "./Page";

import './css/recipes.css'

export default function Recipes(){
    const recetas = useSelector(state=>state.recipes);

    let num = 0;
    const [numero, setNumero] = React.useState(1);

    const Caja = () => {
        var contador = 8;
        return (() => {
            contador++;
            if (contador >= 8) {
                contador = 0;
                return true;
            }
            return false;
        })
    }

    let a = Caja();

    return(
        <div>
            <div className='botones'>
                {recetas.map(p => {
                    if (a()) {
                        num++;
                        return (
                            <input className='' key={num} type='button' value={num} onClick={(e) => setNumero(e.target.value)} />
                        )
                    }
                    return true;
                })}

            </div>
            <Page num={numero} recetas={recetas}/>
        </div>
    )
}