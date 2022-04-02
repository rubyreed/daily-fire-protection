import React from "react";
import pencil from "../images/pencil.png"
import toolbox from "../images/toolbox.gif"
import clipboard from "../images/clipboard.png"
import hydrant from "../images/Hydrant.png"
import pipes from "../images/pipes.png"
import back from "../images/back.jpg"
import blueprint from "../images/blueprint.jpg"

const Services = () => {
    return (
    <div style={{minWidth:"550px"}}>
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
        <div className="infodiv">
            <h4 className="moreinfo">For more information on the services we offer, give us a call at (208) 899-9837 or (208) 339-0124</h4>
        </div>
        <h1 className="servicetitle">See Us in Action</h1>
        <div>
            <div className="actionpics" style={{marginBottom:"2rem"}}>
            <img className="actionpic" src={hydrant}/>
            <img className="actionpic" src={pipes}/>
            <img className="actionpic" src={blueprint}/>
            <img className="actionpic" src={back}/>
            </div>
        </div>
    </div>
    )}

export default Services;
