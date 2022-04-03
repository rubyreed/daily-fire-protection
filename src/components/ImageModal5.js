import React from "react";
import {Modal} from "react-bootstrap";
import dusty from "../images/Dusty.jpg"


function ImageModal5(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{border:"none"}} closeButton>
        </Modal.Header>
        <Modal.Body style={{display:"flex", justifyContent:"center"}} closeButton>
            <img style={{height:"21rem", borderRadius:".2rem", margin:".5rem"}} src={dusty}/>
        </Modal.Body>
      </Modal>
    );
  }

  export default ImageModal5;