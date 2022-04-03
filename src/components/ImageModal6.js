import React from "react";
import {Modal} from "react-bootstrap";
import bigred from "../images/bigred.jpg"


function ImageModal6(props) {
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
            <img style={{height:"38rem", borderRadius:".2rem", margin:".5rem"}} src={bigred}/>
        </Modal.Body>
      </Modal>
    );
  }

  export default ImageModal6;