import React, {Component} from "react";
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'


class Header extends Component {
    render() {
        return(
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/login">Logowanie</Nav.Link>
                    <Nav.Link href="/register">Rejestracja</Nav.Link>
                    <Nav.Link href="/about">O autorze</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}export default Header;