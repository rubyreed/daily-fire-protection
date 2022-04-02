import React, {useState} from "react";
import { Button, Container, Form } from "react-bootstrap";
import phone from "../images/phone.png"
import email from "../images/email.png"
import facebook from "../images/facebook.png"

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    if (submitted) {
      return (
        <Container style={{ minWidth:"12rem", marginLeft: "15vw", marginRight: "15vw",marginTop: "2rem", borderRadius:".3rem",padding:"4rem",display:"flex",textAlign:"center",flexDirection:"column"}}>
          <h1 style={{color:"white"}}>Thank you!</h1>
          <p style={{color:"white"}}>We'll be in touch soon.</p>
        </Container>
      );
    }
    return (
        <div style={{display:"flex", justifyContent:"center", minWidth:"550px"}}>
        <Container style={{ marginRight:"2rem", marginLeft:"2rem", marginBottom:"3rem"}}>
            <h1 className="servicetitle">
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
                <img className="connectimg" src={facebook}/>
                <h4 className="connecttext">Connect with us on Facebook</h4>
                </div>
            </div>
            <form
            // action={FORM_ENDPOINT}
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
                required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlID="formTextArea">
            <label className="contactlabel">Message:</label>
            <br/>
            <Form.Control placeholder="Message*" as="textarea" rows={5} required/>
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
