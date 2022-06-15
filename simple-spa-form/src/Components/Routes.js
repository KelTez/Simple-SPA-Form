import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Route, useHistory } from "react-router-dom";
import FormPage from './SPA Form/FormPage';
import FormEnd from './SPA Form/FormEnd';
import Home from './Login Page/Home';
import Header from './Header';
import React from 'react';

const SPARoutes = () => {

    /* OKTA */
    const history = useHistory();

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    const oktaAuth = new OktaAuth({
        issuer: 'https://dev-16222280.okta.com/oauth2/default',
        clientId: '0oa5bws9tcZgzF6Im5d7',
        redirectUri: window.location.origin + '/callback'
    });

    return (
        <div>
            <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
                <Header/>
                <Route path="/" exact component={Home} />  
                <SecureRoute path="/Form" exact={true} component={FormPage} />       
                <Route path="/Thankyou" exact component={FormEnd} />
                <Route path='/callback' component={LoginCallback}/>
            </Security>
        </div>       
    );
}

export default SPARoutes;