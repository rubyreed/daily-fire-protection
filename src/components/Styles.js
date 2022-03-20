import styled from "styled-components";
import {Navbar, Nav} from "react-bootstrap";

export const DarkGrey = "#424242";
export const LightGrey = "#757575"; 
export const Red = "#FF0000";

//in Navbar
export const FireNavbar = styled(Navbar)`
  background-color: ${Red} !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
  rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
  rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  padding:0rem !important;
`;

export const FireNavLink = styled(Nav.Link)`
    color: white !important;
    font-size: 1.3rem;
    font-weight:900;
    &:hover {
        color: #000000 !important;
        font-weight: 900;
      }
`;