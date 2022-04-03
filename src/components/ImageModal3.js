import React from "react";
import {Modal} from "react-bootstrap";
import amazon from "../images/amazon.jpg"


function ImageModal3(props) {
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
            <img style={{width:"30rem", borderRadius:".2rem", margin:".5rem"}} src={amazon}/>
        </Modal.Body>
      </Modal>
    );
  }

  export default ImageModal3;