import React from "react";
import {Container} from "react-bootstrap";

const Submitted = () => {
    return (
        <Container style={{marginTop:"6%",marginBottom:"15%", color:"#424242", padding:"4rem", maxWidth:"1440px",display:"flex",textAlign:"center",flexDirection:"column"}}>
          <h1 className="atitle">Your form has been submitted!</h1>
          <p style={{color:"white", fontSize:"1rem"}}>You may close this window now.</p>
        </Container>
    )
}

export default Submitted;