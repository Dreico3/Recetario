import React from 'react';
import './css/searchBar.css'
export default function SearchBar() {

    return (
        <form className='busqueda'
            onSubmit={e => {
                e.preventDefault()
                alert('homa mundo')
            }}>

            <input type="text"
                name="receta"
                placeholder="receta..."
                autoComplete='off'
            />
            <input type="submit"
                value="buscar"
            />
        </form>
    )
}