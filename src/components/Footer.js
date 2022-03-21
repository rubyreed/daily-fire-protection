import React from "react";
import map from "../images/map.png"
import facebook from "../images/facebook.png"
import phone from "../images/phone.png"
import email from "../images/email.png"
// import marker from "../images/marker.png"
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Footer = () => {
    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        navigate(eventKey);
    };
    return (
    <div fixed="bottom" style={{backgroundColor:"#000000", width:"100%",  bottom:"0", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{paddingTop:"2rem",paddingRight:"2rem",paddingLeft:"2rem",color:"white",width: "25%",display:"flex", flexDirection:"column", alignItems:"center", borderRight:"3px solid white"}}>
            <h4 style={{marginBottom:"1rem"}}>DAILY FIRE PROTECTION</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis 
                 mattis aliquam faucibus purus in. </p>
        </div>
        <div style={{padding:"2rem",width:"25%", display:"flex", flexDirection:"column", alignItems:"center", borderRight:"3px solid white"}}> 
            <h4 style={{color:"white", marginBottom:"1rem"}}>LOCATION</h4>
            <img style={{height:"10rem"}} src={map}/>
            {/* <img style={{height:"2rem", width:"2rem", margin:".5rem"}} src={marker}/> */}
            <p style={{color:"white", marginTop:".5rem"}}>Add office address here</p>
        </div>
        <Nav onSelect={handleSelect} style={{width:"25%",display:"flex", flexDirection:"column", alignItems:"center", padding:"2rem", borderRight:"3px solid white"}}>
            <h4 style={{color:"white", marginBottom:"1rem"}}>NAVIGATE</h4>
            <Nav.Link className="footerlink" eventKey="/" style={{padding:".7rem"}}>HOME</Nav.Link>
            <Nav.Link className="footerlink" eventKey="/about" style={{padding:".7rem"}}>ABOUT</Nav.Link>
            <Nav.Link className="footerlink" eventKey="/services" style={{padding:".7rem"}}>SERVICES</Nav.Link>
            <Nav.Link className="footerlink" eventKey="/contact" style={{padding:".7rem"}}>CONTACT</Nav.Link>
        </Nav>
        <div style={{width:"25%",color:"white", padding:"2rem"}}>
            <h4 style={{marginBottom:"1.5rem"}}>GET IN TOUCH</h4>
        <div style={{display:"flex"}}>
            <img style={{height:"2rem"}} src={facebook}/> &nbsp; &nbsp;
            <p>Follow us on Facebook</p>
        </div>
        <div style={{display:"flex"}}>
            <img style={{height:"2rem"}} src={phone}/> &nbsp; &nbsp;
            <p>(208) 899-9837</p>
        </div>
        <div style={{display:"flex"}}>
            <img style={{height:"2rem"}} src={email}/> &nbsp; &nbsp;
            <p>admin@dailyfireprotection-nw.com</p>
        </div>
        </div>
        </div>
        <div style={{width: "100%", backgroundColor:"#757575",color:"white", display:"flex", justifyContent:"center", alignContent:"center"}}>
            <p style={{margin:"0rem", padding:".6rem"}}>Ⓒ 2022 by Ruby Reed</p>
        </div>
    </div>
    )}

export default Footer;
