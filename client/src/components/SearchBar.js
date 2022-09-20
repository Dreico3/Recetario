import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Buscar } from '../store/actions';
import { useNavigate } from "react-router-dom";
import { BuscarDietas } from '../store/actions';

import './css/searchBar.css'
export default function SearchBar() {
    let histori = useNavigate();
    const recetas = useSelector(state => state.recipes);
    const [res, setRes] = React.useState('');
    const [nom, setNom] = React.useState('');
    const dispatch = useDispatch();
    return (
        <form className='searchbar'
            onSubmit={e => {
                e.preventDefault()
                if (res === 'Diteas') {
                    dispatch(BuscarDietas(nom, recetas))
                } else {

                    dispatch(Buscar(nom))
                }
                histori('/search');
            }}>
            <div>
                <div className="searchbar-radio">
                    <span>Buscar por :</span>
                    <input defaultChecked type="radio" id="huey" name="drone" value="Nombre"
                        onChange={e => setRes(e.target.value)}
                    />
                    <label htmlFor="huey">Nombre</label>
                    <input type="radio" id="dewey" name="drone" value="Diteas"
                        onChange={e => setRes(e.target.value)}
                    />
                    <label htmlFor="dewey">Dietas</label>
                </div>
            </div>
            <input type="text"
            className="searchbar-input"
                name="receta"
                placeholder="receta..."
                autoComplete='off'
                onChange={e => {
                    setNom(e.target.value)
                }}
            />
            <input type="submit"
                value="buscar"
                className="searchbar-boton"
            />
        </form>
    )
}