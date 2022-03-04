import React from "react";
import Logo from '../components/Logo';
import SearchBar from "../components/SearchBar";
import Rutas from '../components/Rutas';
import { Navbar, Container, Nav } from 'react-bootstrap';


export default function NavBar() {

    return (
        <div className="caja">

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Logo />
                    <Rutas />
                    <SearchBar />
                </Container>
            </Navbar>
        </div>
    )
}