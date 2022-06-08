import React from 'react';
import Navbar from 'react-bootstrap';
import copyright from '/imgs/brand.png';
import '/styles/Footer.css';
import '/styles/SPA.css';

function Footer(){
    return(
        <Navbar id="nav-color" className="navigation" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand href="/"><img src={copyright}></img></Navbar.Brand>
        <div id="prototype-div"><p id="prototype-text">PROTOTYPE</p></div>
        </Navbar>
    );
}
 
export default Footer;