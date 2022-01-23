import React from "react";
import Logo from '../components/Logo'
import SearchBar from "../components/SearchBar";
import Rutas from '../components/Rutas'
import './css/navBar.css'
export default function NavBar() {
    return (
        <div className="caja">
            <Rutas/>
            <Logo/>
            <SearchBar/>
        </div>
    )
}