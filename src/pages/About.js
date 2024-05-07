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
        {/*<p className="biotext">
            Daily Fire Protection, LLC is a mid-sized Union Fire Sprinkler Contractor located in Boise, ID. Daily Fire Protection, LLC was started in 2019 by Christopher Daily with the goal of completing service and inspections on existing sprinkler systems in the Treasure Valley. In 2020 Christopher Daily brought in Paul Vaughn as a partner to help with the company and quickly expanded from the goal of service and inspection to include contract work and expanded from just servicing the Treasure Valley to being licensed in both Idaho and Oregon. Having built a strong team from the partnership outward, Daily Fire Protection, LLC is looking forward to continued growth, participation, and sponsorship within the communities we serve.
    </p>*/}
            <p className="biotext">
            Daily Fire Protection, LLC is a mid-sized Union Fire Sprinkler Contractor located in Boise, ID. The company was started in 2019 by Christopher Daily with the goal of completing service and inspections on existing sprinkler systems in the Treasure Valley. With a strong team behind it, Daily Fire Protection, LLC is looking forward to continued growth, participation, and sponsorship within the communities we serve.
            </p>
        </div>
        <h1 style={{marginBottom:"2rem"}} className="atitle">Meet the Team</h1>
        <div style={{display:"flex", justifyContent:"center"}}>
        <img style={{height:"35vw", maxHeight:"30rem", borderRadius:".5rem"}} src={people}/>
        </div>
        <div style={{marginBottom:"3rem"}} className="aboutsection">
            <div  className="personbiodiv">
            <h2>Chris Daily</h2>
            {/* <img className="personimgsmall"src={family}/> */}
            <p className="chrispaul">Christopher Daily, native of Idaho, has worked in the construction industry for 33 years. In 2007 he started working in the Fire Sprinkler Industry and found his calling. Christopher completed his apprenticeship in the industry in 2012 and has since worked on several projects that are mainstays here in the Treasure Valley (Micron and Amazon among others). One of the main things that Christopher loves about being a business owner in the Treasure Valley is getting out and getting to know and help in the community. “We are only as strong as our community” is Christopher’s motto.</p>
            </div>
            {/* <img className="personimg"src={family}/> */}
        </div>
        {/*<div style={{marginBottom:"3rem"}} className="aboutsection">*/}
            {/* <img className="personimg" src={family}/> */}
            {/*<div className="personbiodiv">*/}
            {/*<h2 className="abouttitle">Paul Vaughn</h2>*/}
            {/* <img className="personimgsmall" src={family}/> */}
            {/*<p className="chrispaul">Paul Vaughn started in Fire Sprinklers in 1999 and relocated to Idaho shortly after that. Paul learned quickly about Fire Sprinklers, starting with one the largest projects to date- a Walmart distribution center- and hasn’t looked back since. Having worked on many large-scale jobs, Paul’s experience, and expertise in all types of systems has been a great asset to Daily Fire Protection, LLC where he uses those skills to bid, and project manage jobs across Idaho and Oregon.</p>*/}
            {/*</div>*/}
        {/*</div>*/}
        </div>
    )}

export default About;
