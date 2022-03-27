import React from "react";
import person from "../images/person.png"
import people from "../images/people.jpg"

const About = () => {
    return (
        <div className="about">
            <h1 style={{marginBottom:"3rem"}} className="title">About Us</h1>
        <div className="facts">
            <h2 className="fact">Est. 2019</h2>
            <h2 className="fact">Ada County, Canyon County & Surrounding Areas</h2>
            <h2 className="fact">24 Hour Service</h2>
            <h2 className="fact">Family-Oriented, Ethical Business Practices</h2>
        </div>
        <div className="bio">
            <p style={{margin:0,textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim 
                suspendisse in est ante in. Vel turpis nunc eget lorem dolor sed viverra ipsum. 
                Odio facilisis mauris sit amet massa vitae. Malesuada proin libero nunc consequat interdum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor sed viverra ipsum. 
                Odio facilisis mauris sit amet massa vitae. Malesuada proin libero nunc consequat interdum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <h1 className="title">Meet the Team</h1>
        <div style={{display:"flex", justifyContent:"center"}}>
        <img style={{height:"30vw", borderRadius:".5rem"}} src={people}/>
        </div>
        <div className="aboutsection">
            <div  className="personbiodiv">
            <h2 style={{fontWeight:"900", marginBottom:"2rem"}}>Chris</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim 
                suspendisse in est ante in. Vel turpis nunc eget lorem dolor sed viverra ipsum. 
                Odio facilisis mauris sit amet massa vitae. Malesuada proin libero nunc consequat interdum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <img className="personimg"src={people}/>
        </div>
        <div style={{marginBottom:"5rem"}} className="aboutsection">
            <img className="personimg" src={people}/>
            <div className="personbiodiv">
            <h2 style={{fontWeight:"900", marginBottom:"2rem"}}>Paul</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
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
