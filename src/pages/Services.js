import React, {useState} from "react";
import pencil from "../images/pencil.png"
import toolbox from "../images/toolbox.gif"
import clipboard from "../images/clipboard.png"
import hydrant from "../images/Hydrant.png"
import design from "../images/designblueprint.png"
import paul2 from "../images/paul2.png"
import pipes from "../images/pipes.png"
import back from "../images/back.jpg"
import dusty from "../images/Dusty.jpg"
import tubing from "../images/tubing.jpg"
import bigred from "../images/bigred.jpg"
import amazon from "../images/amazon.jpg"
// import ImageModal1 from "../components/ImageModal1";
// import ImageModal2 from "../components/ImageModal2";
// import ImageModal3 from "../components/ImageModal3";
// import ImageModal4 from "../components/ImageModal4";
// import ImageModal5 from "../components/ImageModal5";
// import ImageModal6 from "../components/ImageModal6";

const Services = () => {

    // const [modalShow, setModalShow] = React.useState(false);
    // const [modalShowTwo, setModalShowTwo] = React.useState(false);
    // const [modalShowThree, setModalShowThree] = React.useState(false);
    // const [modalShowFour, setModalShowFour] = React.useState(false);
    // const [modalShowFive, setModalShowFive] = React.useState(false);
    // const [modalShowSix, setModalShowSix] = React.useState(false);

    return (
    <div style={{maxWidth:"1400px", margin:"auto"}}>
        <h1 className="atitle">Services</h1>
        <div className="servicesdiv">
            <div className="service serviceborder">
                <img className="serviceicon" src={design}/>
                <h2 className="servicehead"><img className="serviceimg1" style={{height:"2rem", marginRight:".5rem", marginBottom:".7rem"}} src={pencil}/>Design</h2>
                <p className="servicep">We work with engineers following strict standards for fire suppression,
                safety, and damage control in each facility.
                </p>
            </div>
            <div className="service serviceborder">
                <img className="serviceicon" style={{marginTop:"1rem"}} src={hydrant}/>
                <h2 className="servicehead"><img className="serviceimg2" style={{height:"2rem", paddingRight:".5rem", marginBottom:".7rem"}} src={toolbox}/>Installation</h2>
                <p className="servicep">We offer full installation, providing our clients with expert service while 
                    meeting specific code requirements.
                </p>
            </div>
            <div className="service">
                <img className="serviceicon"  style={{marginTop:"1rem"}} src={paul2}/>
                <h2 className="servicehead"><img className="serviceimg3" style={{height:"3rem", paddingRight:".5rem", paddingBottom:"1rem"}} src={clipboard}/>Inspection, Repair & Service</h2>
                <p className="servicep">In addition to design and installation we provide maintenance, evaluation, routine
                    inspection, testing, monitoring, repair and replacement.
                </p>
            </div>
        </div>
        <div className="infodiv">
            <h4 className="moreinfo">For more information on the services we offer, give us a call at (208) 899-9837.</h4>
        </div>
        <h1 className="atitle">See Us in Action</h1>
        <div>
            {/* <div className="actionpics" style={{marginBottom:"2rem"}}>
            <img onClick={() => setModalShow(true)} className="actionpic2" src={pipes}/>
            <img onClick={() => setModalShowTwo(true)} className="actionpic" src={tubing}/>
            <img onClick={() => setModalShowThree(true)} className="actionpic" src={amazon}/>
            <img onClick={() => setModalShowFour(true)} className="actionpic1" src={back}/>
            <img onClick={() => setModalShowFive(true)} className="actionpic" src={dusty}/>
            <img onClick={() => setModalShowSix(true)} className="actionpic" src={bigred}/>
            </div> */}
            <div className="actionpics" style={{marginBottom:"2rem"}}>
            <img className="actionpic2" src={pipes}/>
            <img className="actionpic" src={tubing}/>
            <img className="actionpic" src={amazon}/>
            <img className="actionpic1" src={back}/>
            <img className="actionpic" src={dusty}/>
            <img className="actionpic" src={bigred}/>
            </div>
        </div>
        {/* <ImageModal1
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        <ImageModal2
        show={modalShowTwo}
        onHide={() => setModalShowTwo(false)}
        />
        <ImageModal3
        show={modalShowThree}
        onHide={() => setModalShowThree(false)}
        />
        <ImageModal4
        show={modalShowFour}
        onHide={() => setModalShowFour(false)}
        />
        <ImageModal5
        show={modalShowFive}
        onHide={() => setModalShowFive(false)}
        />
        <ImageModal6
        show={modalShowSix}
        onHide={() => setModalShowSix(false)}
        /> */}
    </div>
    )}

export default Services;
