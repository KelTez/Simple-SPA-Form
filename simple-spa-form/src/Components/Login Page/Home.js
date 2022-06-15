import React from 'react';
import {  useOktaAuth } from '@okta/okta-react';


function Home() {
    const { oktaAuth, authState } = useOktaAuth();
    return (
        authState.isAuthenticated ? window.location.href = '/Form' :
        <div className="home">
        <h1>Login to get started!</h1>   
        </div>
    );
}

export default Home;