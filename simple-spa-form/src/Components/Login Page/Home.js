import React from 'react';
import {  useOktaAuth } from '@okta/okta-react';
import './../../styles/Home.css';


function Home() {
    const { oktaAuth, authState } = useOktaAuth();
    return (
        authState.isAuthenticated ? window.location.href = '/Form' :
        <div id="home">
         <h3 className='text-center text-light home-text'>
              Welcome to my Single Page App Form Project! Styling was not the focus of the project :(:(:(. 
              Anyway, click Sign In up top to get started!
              <br/> Use account: <b>Email:</b>macabessa1234@gmail.com, <b>Pass:</b> S1mpleSPAForm
            </h3>
        </div>
    );
}

export default Home;