import React from "react";
import shaded from "../images/shaded.png"
import logo from "../images/DFP_logo_cutout.png";
import phone from "../images/phone.png"

const Home = () => {
    return (
    <div style={{maxWidth:"1400px", margin:"auto"}}>
    <div style={{position:"relative",textAlign:"center", color:"white"}}>
        <h2 className="homephone"><img className="homeicon" src={phone}/> &nbsp;(208) 899-9837</h2>
        <img className="homeimg" src={shaded}/>
        <div className="headerdiv">
        <h1 className="homehead">DAILY FIRE PROTECTION</h1>
        <h2 className="hometitle">PROTECTING PROPERTY & SAVING LIVES</h2>
        <img src={logo} className="logo"/>
        </div>
    </div>
    <div className="protect" style={{marginTop:"0", marginBottom:"0"}}>
            <div className="protecttext">
            <h2 className="protecthead" style={{paddingBottom:"1.5vw"}}>Let us Protect your Assets!</h2>
            <p className="protectp">Daily Fire Protection-NW is a licensed and insured company available to meet your needs in Fire 
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
    </div>
    )}

export default Home;
