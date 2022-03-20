import React from "react";
import { useNavigate } from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import logo from "../images/DFP_logo_cutout.png";
import {FireNavbar, FireNavLink} from "./Styles";

const NavBar = () => {

    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        navigate(eventKey);
    };
    return (
    <>
    <FireNavbar className = "navbar-dark" collapseOnSelect fixed="top" expand="md">
    <Navbar.Brand><img style={{height:"5rem", marginLeft:"2rem"}} src={logo}/></Navbar.Brand>
            <Navbar.Toggle style={{marginRight:"2rem"}} aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{width:"100%", display:"flex", justifyContent:"space-evenly"}} onSelect={handleSelect}>
                    <FireNavLink className="home" eventKey="/">HOME</FireNavLink>
                    <FireNavLink className="about" eventKey="/about">ABOUT</FireNavLink>
                    <FireNavLink className="services" eventKey="/services">SERVICES</FireNavLink>
                    <FireNavLink className="action" eventKey="/action">ACTION</FireNavLink>
                    <FireNavLink className="contact" eventKey="/contact">CONTACT</FireNavLink>
                </Nav>
            </Navbar.Collapse>
    </FireNavbar>
    </>
    )}

export default NavBar;
