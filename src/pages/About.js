import React from "react";
import people from "../images/people.jpg"
import family from "../images/family.png"

const About = () => {
    return (
        <div  style={{maxWidth:"1400px", margin:"auto"}} className="about">
            <h1 style={{marginBottom:"2rem"}} className="atitle">About Us</h1>
        <div className="facts">
            <h2 className="fact1">Est. 2019</h2>
            <h2 className="fact2">Ada County, Canyon County, Eastern Oregon & More</h2>
            <h2 className="fact3">24 Hour Service</h2>
            <h2 className="fact4">Family-Oriented, Ethical Business Practices</h2>
        </div>
        <div className="bio">
            <p className="biotext">
                Our company takes pride in a business that runs on ethical business practices and honesty. Partners Chris Daily
                 and Paul Vaughn have a collective 39 years of experience in the fire protection industry. Together they strive to run a family owned
                 business that provides quality work that meets industry safety standards.  
            </p>
        </div>
        <h1 style={{marginBottom:"2rem"}} className="atitle">Meet the Team</h1>
        <div style={{display:"flex", justifyContent:"center"}}>
        <img style={{height:"35vw", maxHeight:"30rem", borderRadius:".5rem"}} src={people}/>
        </div>
        <div className="aboutsection">
            <div  className="personbiodiv">
            <h2>Chris Daily</h2>
            <img className="personimgsmall"src={family}/>
            <p className="chrispaul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim 
                suspendisse in est ante in. Vel turpis nunc eget lorem dolor sed viverra ipsum. 
                Odio facilisis mauris sit amet massa vitae. Malesuada proin libero nunc consequat interdum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <img className="personimg"src={family}/>
        </div>
        <div style={{marginBottom:"3rem"}} className="aboutsection">
            <img className="personimg" src={family}/>
            <div className="personbiodiv">
            <h2 className="abouttitle">Paul Vaughn</h2>
            <img className="personimgsmall" src={family}/>
            <p className="chrispaul">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim 
                suspendisse in est ante in. Vel turpis nunc eget lorem dolor sed viverra ipsum. 
                Odio facilisis mauris sit amet massa vitae. Malesuada proin libero nunc consequat interdum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        </div>
    )}

export default About;
