import React from "react";
import {Modal} from "react-bootstrap";
import back from "../images/back.jpg"


function ImageModal4(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{border:"none"}} closeButton>
        </Modal.Header>
        <Modal.Body style={{display:"flex", justifyContent:"center"}} closeButton>
            <img style={{width:"38vw", borderRadius:".2rem", margin:".5rem"}} src={back}/>
        </Modal.Body>
      </Modal>
    );
  }

  export default ImageModal4;