import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

function Header() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => { await oktaAuth.signInWithRedirect(); window.location.href = "/Form"; }
  const logout = async () => { await oktaAuth.signOut(); window.location.href = "/"; }

  const loginBtn = authState.isAuthenticated
    ? <button onClick={ logout }>Logout</button>
    : <button onClick={ login }>Sign In</button>;

  return (
    <header>
      <div>SPA Form</div>
      {loginBtn}
    </header>
  );
}

export default Header;