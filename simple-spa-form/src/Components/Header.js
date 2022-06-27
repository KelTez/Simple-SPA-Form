import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Header() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => { await oktaAuth.signInWithRedirect(); window.location.href = "/Form"; }
  const logout = async () => { await oktaAuth.signOut(); window.location.href = "/"; }

  const loginBtn = authState.isAuthenticated
    ? <span onClick={ logout } id='login'>Logout</span>
    : <span onClick={ login } id='login'>Sign In</span>;

  return (

    <>

      <header>     
        <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <a class='navbar-brand' href='https://github.com/KelTez/Simple-SPA-Form' target='_blank' rel='noreferrer'>SPA FORM</a>
          <div class="container-fluid">  
            <div class="collapse navbar-collapse" >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">{loginBtn}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
    </>


  
  );
}

export default Header;

