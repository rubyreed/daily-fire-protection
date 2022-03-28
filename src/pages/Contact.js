import React, {useState} from "react";
import { Button, Container, Form } from "react-bootstrap";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    if (submitted) {
      return (
        <Container style={{ minWidth:"12rem", marginLeft: "15vw", marginRight: "15vw",marginTop: "10vw", borderRadius:".3rem",padding:"4rem",display:"flex",textAlign:"center",flexDirection:"column"}}>
          <h1 style={{color:"white"}}>Thank you!</h1>
          <p style={{color:"white"}}>We'll be in touch soon.</p>
        </Container>
      );
    }
    return (
        <div style={{display:"flex", justifyContent:"center", minWidth:"550px"}}>
        <Container style={{marginBottom:"5rem", margin:"2rem"}} className="contactcontainer">
            <h1 className="servicetitle">
                Contact Us
            </h1>
            <form
            // action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
            >
    
            <Form.Group className="mb-3" controlId="formBasicName">
              <label style={{color:"white"}}>
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
                <label style={{color:"white"}}>
                  Email:
                </label>
                <br/>
                <Form.Control 
                type="email" 
                placeholder="Email*"
                required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicSubject">
                <label style={{color:"white"}}>
                  Subject:
                </label>
                <br/>
                <Form.Control 
                type="subject" 
                placeholder="Subject*"
                required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlID="formTextArea">
            <label style={{color:"white"}}>Message:</label>
            <br/>
            <Form.Control placeholder="Message*" as="textarea" rows={5} required/>
          </Form.Group>
    
          <Form.Group>
            <Button
            type="submit"
            style={{backgroundColor:"black", border:"none"}}
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
