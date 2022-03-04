import React from "react";
import logo from '../img/logo2.png'
import { Link } from 'react-router-dom';
export default function Logo() {

    return (
        <Link to='/'>
            <img
                src={logo}
                alt="Alex? are you..??"
                height="60px"
            />

        </Link>
    )
}