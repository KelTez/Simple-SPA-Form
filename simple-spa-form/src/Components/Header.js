import React from 'react';
import Navbar from 'react-bootstrap';
import brand from '/imgs/brand.png';
import '/styles/Header.css';
import '/styles/SPA.css';

function Header(){
    return(
        <Navbar id="nav-color" className="navigation" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand href="/"><img src={brand}></img></Navbar.Brand>
        <div id="prototype-div"><p id="prototype-text">PROTOTYPE</p></div>
        </Navbar>
    );
}
 
export default Header;