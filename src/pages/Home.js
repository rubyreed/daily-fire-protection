import React from "react";
import shaded from "../images/shaded.png"
import logo from "../images/DFP_logo_cutout.png";
import whitelogo from "../images/DFP_logo.png";

const Home = () => {
    return (
    <div style={{position:"relative", textAlign:"center", color:"white"}}>
        <img className="homeimg" src={shaded}/>
        <div className="headerdiv">
        <h1 className="homehead">DAILY FIRE PROTECTION</h1>
        <h2 className="hometitle">PROTECTING PROPERTY & SAVING LIVES</h2>
        <img src={logo} style={{height:"10vw"}}/>
        </div>
    </div>
    )}

export default Home;
