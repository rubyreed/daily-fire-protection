import React from "react";
import {Modal} from "react-bootstrap";
import pipes from "../images/pipes.png"


function ImageModal1(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{border:"none"}} closeButton>
        </Modal.Header>
        <Modal.Body style={{display:"flex", justifyContent:"center"}} closeButton>
            <img style={{width:"30rem", borderRadius:".2rem", margin:".5rem"}} src={pipes}/>
        </Modal.Body>
      </Modal>
    );
  }

  export default ImageModal1;