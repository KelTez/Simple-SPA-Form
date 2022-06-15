import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

function Header() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => { await oktaAuth.signInWithRedirect(); window.location.href = "/Form"; }
  const logout = async () => { await oktaAuth.signOut(); window.location.href = "/"; }

  const loginBtn = authState.isAuthenticated
    ? <button onClick={ logout } id='login-btn'>Logout</button>
    : <button onClick={ login } id='login-btn'>Sign In</button>;

  return (
    <div className='header'>
      <header>
        <div id='login-btn-div'>{loginBtn}</div>
        <div id='header-spa-form-txt-div'><p className='spa-txt'>SPA FORM</p></div>
        
      </header>
    </div>
  );
}

export default Header;