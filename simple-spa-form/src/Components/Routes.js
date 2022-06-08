import FormPage from './SPA Form/FormPage';
import LoginPage from './Login Page/LoginPage'; /*Test Form first, then remove it and test login page*/ 

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
//Switch not found?
function Routes(){ 

    const [authState, setAuthState] = useState(0);
    const setState = (x) => {setAuthState(x)};

    return (
        <Router>
            <div>
                <FormPage></FormPage>
            </div>
        </Router>
    );
};

export default Routes;