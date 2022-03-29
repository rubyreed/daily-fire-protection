import React from "react";
import logo from "../images/DFP_logo_cutout.png"
import blueprintcopy from "../images/blueprint copy.png"
import blueprint2 from "../images/blueprint2.png"

const Home = () => {
    return (
    <div style={{position:"relative", textAlign:"center", color:"white"}}>
        <img className="homeimg" src={blueprint2}/>
        <div className="headerdiv">
        <h1 style={{fontSize:"max(8rem)", fontWeight:"900"}}>DAILY FIRE PROTECTION</h1>
        <h2 style={{fontSize:"max(4rem)"}}>Protecting Property & Saving Lives</h2>
        </div>
        {/* <div className="headerdiv">
        <h1 className="homehead">DAILY FIRE PROTECTION</h1>
        <h2 className="hometitle">Protecting Property & Saving Lives</h2>
        </div> */}
    </div>
    )}

export default Home;
