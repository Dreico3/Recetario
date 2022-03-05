import React from "react";
import Logo from '../components/Logo';
import SearchBar from "../components/SearchBar";
import Rutas from '../components/Rutas';
import { Navbar, Container, Nav } from 'react-bootstrap';


export default function NavBar() {

    return (
        <div className="caja">

            <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark" >
                <Container>
                    <Logo />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav>
                            <Rutas />
                        </Nav>
                    </Navbar.Collapse>
                    <SearchBar />
                </Container>
            </Navbar>
        </div>
    )
}