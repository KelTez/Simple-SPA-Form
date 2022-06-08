import React from 'react';
import '../../styles/Form.css';
import '../../styles/SPA.css';
import {useNavigate} from "react-router-dom";

function FormEnd(){
    
    let navigate = useNavigate(); 
    const backToStart = () =>{navigate('/');}
    
    return(
        <div>
            <h2>Thank you for submitting the form!</h2>
            <h3> Click the button below if you wish to submit another form!</h3>
            <button onClick={backToStart}>Click to submit a new form!</button>
        </div>
    );
}

export default FormEnd