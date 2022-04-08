import React, {useState} from "react";
import { Button, Container, Form } from "react-bootstrap";
import phone from "../images/phone.png"
import email from "../images/email.png"
import facebook from "../images/facebook.png"
import grayfacebook from "../images/grayfacebook.png"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/ef47e920-b6a1-11ec-b4fe-2b9cbf782176";

const Contact = () => {
  const [over, setOver] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    if (submitted) {
      return (
        <Container style={{marginTop:"6%",marginBottom:"15%", color:"#424242", padding:"4rem", maxWidth:"1440px",display:"flex",textAlign:"center",flexDirection:"column"}}>
          <h1 className="atitle">Thank you!</h1>
          <p style={{color:"white", fontSize:"1rem"}}>We'll be in touch soon.</p>
        </Container>
      );
    }
    return (
        <div style={{display:"flex", justifyContent:"center", margin:"auto", maxWidth:"1440px"}}>
        <Container style={{ marginRight:"2rem", marginLeft:"2rem", marginBottom:"3rem"}}>
            <h1 className="atitle">
                Get in Touch
            </h1>
            <div className="contactdiv" style={{marginTop:"2rem"}}>
              <div className="connect connectborder">
                <img className="connectimg" src={phone}/>
                <h4 className="connecttext">(208) 899-9837 &nbsp;/ &nbsp;(208) 339-0124</h4>
              </div>
              <div className="connect connectborder">
                <img className="connectimg" src={email}/>
                <h4 className="connecttext">admin@dailyfireprotection-nw.com</h4>
                </div>
              <div className="connect">
              <a onMouseOver={() => setOver(true)} className="connecttext fbhover" style={{color:"white", textDecoration:"none"}} onMouseOut={() => setOver(false)} href="https://www.facebook.com/Daily-Fire-Protection-NW-101597795858201/" target="_blank">
                <img className="connectimg" src={over ? grayfacebook : facebook}/>Connect with us on Facebook</a>
                </div>
            </div>
            <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
            style={{backgroundColor:"#424242", padding:"2rem", borderRadius:".5rem", marginTop:"2rem"}}
            >
              <h1 className="message">Send us a Message</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
              <label className="contactlabel">
                Name:
              </label>
              <br/>
              <Form.Control 
                type="text"
                placeholder="Name*"
                name="name"
                required
                />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <label className="contactlabel">
                  Email:
                </label>
                <br/>
                <Form.Control 
                type="email" 
                placeholder="Email*"
                name="email"
                required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicSubject">
                <label className="contactlabel">
                  Subject:
                </label>
                <br/>
                <Form.Control 
                type="subject" 
                placeholder="Subject*"
                name="subject"
                required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlID="formTextArea">
            <label className="contactlabel">Message:</label>
            <br/>
            <Form.Control placeholder="Message*" as="textarea" rows={5} name="message" required/>
          </Form.Group>
    
          <Form.Group>
            <Button
            type="submit"
            style={{backgroundColor:"black", border:"none", marginBottom:"2rem", padding:"1rem"}}
            >
              Submit
            </Button>
          </Form.Group>
        </form>
    </Container>
          </div>
        )
    }
export default Contact;
