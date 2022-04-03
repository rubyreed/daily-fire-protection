import React from "react";
import {Modal} from "react-bootstrap";
import tubing from "../images/tubing.jpg"


function ImageModal2(props) {
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
            <img style={{height:"38rem", borderRadius:".2rem", margin:".5rem"}} src={tubing}/>
        </Modal.Body>
      </Modal>
    );
  }

  export default ImageModal2;