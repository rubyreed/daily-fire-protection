import React from "react";
import map from "../images/map.png"
import facebook from "../images/facebook.png"
import phone from "../images/phone.png"
import email from "../images/email.png"
import marker from "../images/marker.png"
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import web from "../images/whiteweb.png"

const Footer = () => {
    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        navigate(eventKey);
    };
    return (
    <div className="footer" fixed="bottom" style={{minWidth:"550px"}}>
        <div className="footerbody">
        <div className="footerbio">
            <h4 style={{marginBottom:"1rem"}}>DAILY FIRE PROTECTION</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis 
                 mattis aliquam faucibus purus in. </p>
        </div>
        <div className="footernavdiv">
            <h4 className="footernavtitle">NAVIGATE</h4>
        <Nav className="footernav" onSelect={handleSelect}>
            <Nav.Link className="footerlink" eventKey="/" >HOME</Nav.Link>
            <Nav.Link className="footerlink" eventKey="/about" >ABOUT</Nav.Link>
            <Nav.Link className="footerlink" eventKey="/services" >SERVICES</Nav.Link>
            <Nav.Link className="footerlink" eventKey="/contact" >CONTACT</Nav.Link>
        </Nav>
        </div>
        <div className="footerinfo">
            <h4 style={{marginBottom:"1.5rem"}}>GET IN TOUCH</h4>
        <div style={{display:"flex"}}>
            <img className="footerimg" src={facebook}/> &nbsp; &nbsp;
            <p>Follow us on Facebook</p>
            {/* add in link to facebook */}
        </div>
        <div style={{display:"flex"}}>
            <img className="footerimg" src={phone}/> &nbsp; &nbsp;
            <p>(208) 899-9837</p>
        </div>
        <div style={{display:"flex"}}>
            <img className="footerimg" src={email}/> &nbsp; &nbsp;
            <p>admin@dailyfireprotection-nw.com</p>
        </div>
        <div style={{display:"flex"}}>
            <img className="footerimg" src={marker}/> &nbsp; &nbsp;
            <p>2399 South Orchard St. Suite 104 Boise, ID 83705</p>
        </div>
        </div>
        </div>
        <div className="footercopyright">
            <p style={{margin:"0rem", padding:".6rem"}}><img style={{height:"1.5rem", paddingRight:".5rem"}} src={web}/>2022 by Ruby Reed</p>
        </div>
    </div>
    )}

export default Footer;
