import React, {useState} from "react";
import facebook from "../images/facebook.png"
import phone from "../images/phone.png"
import email from "../images/email.png"
import marker from "../images/marker.png"
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import web from "../images/web.png"
import redweb from "../images/redweb.png"
import grayfacebook from "../images/grayfacebook.png"
import graymarker from "../images/graymarker.png"

const Footer = () => {
    const [over, setOver] = useState(false);
    const [overTwo, setOverTwo] = useState(false);
    const [overThree, setOverThree] = useState(false);

    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        navigate(eventKey);
    };
    return (
    <div style={{maxWidth:"2840px"}} className="footer" fixed="bottom">
        <div className="footerbody">
        <div className="footerbio">
            <h4 className="footerhead">DAILY FIRE PROTECTION</h4>
            <p className="footerp">Daily Fire Protection has been serving the Treasure Valley since 2019; focusing on honesty, integrity, and a better way to get things done.
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
            <h4 className="footerhead">GET IN TOUCH</h4>
        <div style={{display:"flex"}}>
            <a onMouseOver={() => setOverTwo(true)} onMouseOut={() => setOverTwo(false)} className="facebooklink footertouch" href="https://www.facebook.com/Daily-Fire-Protection-NW-101597795858201/" target="_blank">
            <img className="footerimg" src={overTwo ? grayfacebook : facebook}/> &nbsp; &nbsp;Follow us on Facebook</a>
        </div>
        <div style={{display:"flex"}}>
            <img className="footerimg" src={phone}/> &nbsp; &nbsp;
            <p className="footertouch">(208) 899-9837</p>
        </div>
        <div style={{display:"flex"}}>
            <img className="footerimg" src={email}/> &nbsp; &nbsp;
            <p className="footertouch">admin@dailyfireprotection-nw.com</p>
        </div>
        <div style={{display:"flex"}}>
            <a onMouseOver={() => setOverThree(true)} onMouseOut={() => setOverThree(false)} className="facebooklink footertouch" href="https://www.google.com/maps/place/22912+Cirrus+Vw+Ct,+Caldwell,+ID+83607/@43.6344525,-116.8525321,17z/data=!3m1!4b1!4m5!3m4!1s0x54afcbd8d92f99b7:0xb7d82b607f09407d!8m2!3d43.6344525!4d-116.8503381" target="_blank">
            <img style={{marginBottom:".5rem"}} className="footerimg" src={overThree ? graymarker : marker}/> &nbsp; &nbsp;22912 Cirrus View Ct, Caldwell, ID 83607</a>
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
