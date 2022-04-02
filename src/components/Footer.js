import React, {useState} from "react";
import map from "../images/map.png"
import facebook from "../images/facebook.png"
import phone from "../images/phone.png"
import email from "../images/email.png"
import marker from "../images/marker.png"
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import web from "../images/web.png"
import redweb from "../images/redweb.png"

const Footer = () => {
    const [over, setOver] = useState(false);

    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        navigate(eventKey);
    };
    return (
    <div className="footer" fixed="bottom" style={{minWidth:"550px"}}>
        <div className="footerbody">
        <div className="footerbio">
            <h4 style={{marginBottom:"1.5rem", fontWeight:"650"}}>DAILY FIRE PROTECTION</h4>
            <p style={{fontSize:"1.2rem"}}>Daily Fire Protection has been serving the Treasure Valley since 2019; focusing on honesty, integrity, and a better way to get things done.
                Contact us for your residential and commercial fire protection needs!
            </p>
        </div>
        <div className="footernavdiv">
            <h4 className="footernavtitle" style={{fontWeight:"650", marginRight:"0"}}>NAVIGATE</h4>
        <Nav className="footernav" onSelect={handleSelect}>
            <Nav.Link className="footerlink" eventKey="/" >HOME</Nav.Link>
            <Nav.Link className="footerlink" eventKey="/about" >ABOUT</Nav.Link>
            <Nav.Link className="footerlink" eventKey="/services" >SERVICES</Nav.Link>
            <Nav.Link className="footerlink" eventKey="/contact" >CONTACT</Nav.Link>
        </Nav>
        </div>
        <div className="footerinfo">
            <h4 style={{marginBottom:"1.5rem", fontWeight:"650"}}>GET IN TOUCH</h4>
        <div style={{display:"flex"}}>
            <img className="footerimg" src={facebook}/> &nbsp; &nbsp;
            <p>Follow us on Facebook</p>
            {/* add in link to facebook */}
        </div>
        <div style={{display:"flex"}}>
            <img className="footerimg" src={phone}/> &nbsp; &nbsp;
            <p>(208) 899-9837&nbsp; / &nbsp;(208) 339-0124</p>
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
            <p style={{margin:"0rem", padding:".5rem"}}>
                <a onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} target="_blank" className="ruby"href="https://ruby-reed-portfolio.netlify.app/">
                <img style={{height:"1.5rem", paddingRight:".5rem", paddingLeft:"0", paddingTop:"0", paddingBottom:".1rem"}} src={over ? redweb : web}/>2022 by Ruby Reed
                </a>
            </p>
        </div>
    </div>
    )}

export default Footer;
