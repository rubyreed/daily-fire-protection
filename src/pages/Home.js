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
    {/* <div className="homespacer">
        <img className="spaceimg" src={hydrant}/>
        <img className="spaceimg" src={back}/>
        <img className="spaceimg" src={blueprint}/>
        <img className="spaceimg" src={pipes}/>
    </div> */}
    </>
    )}

export default Home;
