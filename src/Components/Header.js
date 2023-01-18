import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav, NavLink} from "react-bootstrap";
import './Header.css';

export default function Header() {

    return (
        // <div className="header">
        //     <NavLink to="/home">Home</NavLink>
        //     <NavLink to="/about">About</NavLink>
        //     <NavLink to="/projects">Projects</NavLink>
        //     <NavLink to="/contact">Contact</NavLink>
        // </div>
        <div >
            <Navbar collapseOnSelect expand="sm"  variant="light" className="header1">
            <Navbar.Brand>Derek Walz</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav activeKey={window.location.pathname} variant="pills">
                    <NavLink /*eventKey="link-1"*/ as={Link} to="/" >Home</NavLink>
                    <NavLink  /*eventKey="link-2"*/ as={Link} to="/projects" >Projects</NavLink>
                    <NavLink  /*eventKey="link-3"*/ as={Link} to="/contact" >Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        
    );
}