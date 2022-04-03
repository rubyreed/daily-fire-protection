import React from "react";
import pencil from "../images/pencil.png"
import toolbox from "../images/toolbox.gif"
import clipboard from "../images/clipboard.png"
import hydrant from "../images/Hydrant.png"
import pipes from "../images/pipes.png"
import back from "../images/back.jpg"
import design from "../images/designblueprint.png"
import paul2 from "../images/paul2.png"
import dusty from "../images/Dusty.jpg"
import tubing from "../images/tubing.jpg"
import bigred from "../images/bigred.jpg"
import amazon from "../images/amazon.jpg"

const Services = () => {
    return (
    <div style={{minWidth:"550px"}}>
        <h1 className="servicetitle">Services</h1>
        <div className="servicesdiv">
            <div className="service serviceborder">
                <img className="serviceicon" src={design}/>
                <h2 className="servicehead"><img style={{height:"2rem", marginRight:".5rem", marginBottom:".7rem"}} src={pencil}/>Design</h2>
                <p className="servicep">We work with engineers following strict standards for fire suppression,
                safety, and damage control in each facility.
                </p>
            </div>
            <div className="service serviceborder">
                <img className="serviceicon" style={{marginTop:"1rem"}} src={hydrant}/>
                <h2 className="servicehead"><img style={{height:"2rem", paddingRight:".5rem", marginBottom:".7rem"}} src={toolbox}/>Installation</h2>
                <p className="servicep">We offer full installation, providing our clients with expert service while 
                    meeting specific code requirements.
                </p>
            </div>
            <div className="service">
                <img className="serviceicon"  style={{marginTop:"1rem"}} src={paul2}/>
                <h2 className="servicehead"><img style={{height:"3rem", paddingRight:".5rem", paddingBottom:"1rem"}} src={clipboard}/>Inspection, Repair & Service</h2>
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
            <img className="actionpic2" src={pipes}/>
            {/* <img className="actionpic" src={blueprint}/> */}
            <img className="actionpic" src={tubing}/>
            <img className="actionpic" src={amazon}/>
            <img className="actionpic1" src={back}/>
            <img className="actionpic" src={dusty}/>
            <img className="actionpic" src={bigred}/>
            </div>
        </div>
    </div>
    )}

export default Services;
