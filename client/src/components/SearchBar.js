import React from 'react';
import { useDispatch } from 'react-redux';
import { Buscar } from '../store/actions';
import { useNavigate } from "react-router-dom";

import './css/searchBar.css'
export default function SearchBar() {
    let histori = useNavigate();
    const [nom, setNom] = React.useState('');
    const dispatch = useDispatch();
    return (
        <form className='busqueda'
            onSubmit={e => {
                e.preventDefault()
                dispatch(Buscar(nom))
                histori('/search');
            }}>

            <input type="text"
                name="receta"
                placeholder="receta..."
                autoComplete='off'
                onChange={e=>{
                    setNom(e.target.value)
                }}
            />
            <input type="submit"
                value="buscar"
            />
        </form>
    )
}