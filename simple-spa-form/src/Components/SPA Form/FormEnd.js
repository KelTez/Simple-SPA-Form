import React from 'react';
import '../../styles/Form.css';
import '../../styles/SPA.css';
import { Link } from 'react-router-dom';


function FormEnd(){
    
    return(
        <div className='pt-5'>
            <h2>Thank you for submitting the form!</h2>
            <h3> Click the button below if you wish to submit another form!</h3>
            <Link to="/Form">
                <button type="button">Click to submit a new form!</button>
            </Link>
        </div>
    );
}

export default FormEnd;