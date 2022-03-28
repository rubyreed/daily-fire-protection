import React from "react";
import pencil from "../images/pencil.png"
import toolbox from "../images/toolbox.gif"
import clipboard from "../images/clipboard.png"
import person from "../images/person.png"

const Services = () => {
    return (
    <div>
        <h1 className="servicetitle">Services</h1>
        <div className="servicesdiv">
            <div className="service serviceborder">
                <img className="serviceicon" src={pencil}/>
                <h2 className="servicehead">Design</h2>
                <p className="servicep">We work with engineers following strict standards for fire suppression,
                safety, and damage control in each facility.
                </p>
            </div>
            <div className="service serviceborder">
                <img className="serviceicon" src={toolbox}/>
                <h2 className="servicehead">Installation</h2>
                <p className="servicep">We offer full installation, providing our clients with expert service while 
                    meeting specific code requirements.
                </p>
            </div>
            <div className="service">
                <img className="serviceicon" src={clipboard}/>
                <h2 className="servicehead">Inspection, Repair & Service</h2>
                <p className="servicep">In addition to design and installation we provide maintenance, evaluation, routine
                    inspection, testing, monitoring, repair and replacement.
                </p>
            </div>
        </div>
        <div className="protect">
            <div className="protecttext">
            <h2 className="servicehead" style={{paddingBottom:"1.5vw"}}>Let us Protect your Assets!</h2>
            <p className="servicep">Daily Fire Protection-NW is a licensed and insured company available to meet your needs in Fire 
                Protection, From design to installation, we are here to provide service from start to finish.
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
        <h1 className="servicetitle">See Us in Action</h1>
        <div>
            <div style={{padding:"2rem",backgroundColor:"#454545", width:"100%", display:"flex", justifyContent:"space-evenly", marginBottom:"2rem"}}>
            <img src={person}/>
            <img src={person}/>
            <img src={person}/>
            <img src={person}/>
            </div>
        </div>
    </div>
    )}

export default Services;
