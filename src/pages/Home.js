import React from "react";
import shaded from "../images/shaded.png"
import logo from "../images/DFP_logo_cutout.png";
import blueprint from "../images/blueprint.jpg"
import hydrant from "../images/Hydrant.png"
import pipes from "../images/pipes.png"
import back from "../images/back.jpg"
import fire from "../images/fire.jpeg"

const Home = () => {
    return (
        <>
    <div style={{position:"relative", textAlign:"center", color:"white"}}>
        <img className="homeimg" src={shaded}/>
        <div className="headerdiv">
        <h1 className="homehead">DAILY FIRE PROTECTION</h1>
        <h2 className="hometitle">PROTECTING PROPERTY & SAVING LIVES</h2>
        <img src={logo} style={{height:"10vw"}}/>
        </div>
    </div>
    <div className="protect" style={{marginTop:"0", marginBottom:"0"}}>
            <div className="protecttext">
            <h2 className="servicehead" style={{paddingBottom:"1.5vw"}}>Let us Protect your Assets!</h2>
            <p className="servicep">Daily Fire Protection-NW is a licensed and insured company available to meet your needs in Fire 
                Protection. From design to installation, we are here to provide service from start to finish.
            </p>
            </div>
            <ul className="protectlist">
                <li>Installation</li>
                <li>Fire Suppression</li>
                <li>Sprinklers</li>
                <li>Inspections</li>
                <li>Fire Alarm Systems</li>
                <li>Alarm Monitoring</li>
                <li>Service and Repair</li>
                <li>Corrosion Management</li>
            </ul>
        </div>
    {/* <div className="homespacer">
        <img className="spaceimg" src={hydrant}/>
        <img className="spaceimg" src={back}/>
        <img className="spaceimg" src={blueprint}/>
        <img className="spaceimg" src={pipes}/>
    </div> */}
    {/* <div style={{backgroundColor:"#424242"}}>
        <p style={{margin:"0", color:"white", padding:"1rem", fontWeight:"650", textAlign:"center", fontSize:"2vw"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim 
        suspendisse in est ante in.</p>
    </div> */}
    </>
    )}

export default Home;
