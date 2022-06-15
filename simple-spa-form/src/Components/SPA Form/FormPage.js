import React, { useState } from 'react';
import '../../styles/Form.css';
import '../../styles/SPA.css';
import api from '../../api';
//MERN project

function FormPage(){
    
    /* HANDLING SUBMIT BUTTON PRESS */
    const handleSubmit= (e) => {
        e.preventDefault();
        const data = {"fName":fname, "lName":lname, "product":product, "pNumber":pnumber,
        "email":email, "ease":ease, "comfort":comfort, "recommend":recommend};

        api.addUserDetail(data).then(res => {
            window.location.href = "/Thankyou";
        })
    }
    
    /* FORM STATES */
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [product, setProduct] = useState();
    const [pnumber, setPnumber] = useState();
    const [email, setEmail] = useState();
    const [ease, setEase] = useState();
    const [comfort, setComfort] = useState();
    const [recommend, setRecommend] = useState();
    /*MIGHT SPLIT THE PARTS INTO MULTIPLE COMPONENTS? OR A COMPONENT WHERE I CAN ADD LIKE PARTS*/
    return(
       <div>
           <form onSubmit={e => {handleSubmit(e)}}>
            <ul>
                <li>
                    <label for='fname'>First Name</label>
                    <div>
                        <input type='text' data-component='fname' required
                        name='fname' autocomplete='given-name' id='fname'
                        onChange={e => setFname(e.target.value)} value={fname}
                        />
                    </div>
                    <label for='lname'>Last Name</label>
                    <div>
                        <input type='text' data-component='lname' required
                        name='lname' autocomplete='family-name' id='lname'
                        onChange={e => setLname(e.target.value)} value={lname}  
                        />
                    </div>
                </li>
                <li>
                    <label for='product'>Product</label>
                    <div>
                        <input type='text' name='product' id='product' required
                        data-component='product'
                        onChange={e => setProduct(e.target.value)} value={product}     
                        />
                    </div>
                </li>
                <li>
                    <label for='pnumber'>Phone Number</label>
                    <div>
                        <input type='text' autocomplete='tel'
                        pattern='^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$' 
                        data-component='pnumber' name='pnumber' required
                        title='Please enter valid phone number' id='pnumber'
                        onChange={e => setPnumber(e.target.value)} value={pnumber} 
                        />
                    </div>
                </li>
                <li>
                    <label for='email'>Email</label>
                    <div>
                        <input type='text'  pattern='^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$' 
                        data-component='email' name='email' autocomplete='email'
                        title="Please enter valid email address" id='email' required
                        onChange={e => setEmail(e.target.value)} value={email} 
                        />
                    </div>
                </li>
                <li>
                    <label for='ease'>What would you rate the ease of use of the product, from 1-5?</label>
                    <div>
                        <input type='number'  min='1' max='5' required
                        data-component='ease' name='ease' id='ease'
                        onChange={e => setEase(e.target.value)} value={ease}
                        />
                    </div>
                </li>
                <li>
                    <label for='comfort'>What would you rate the comfort of the product, from 1-5?</label>
                    <div>
                        <input type='number'  min='1' max='5' required
                        data-component='comfort' name='comfort' id='comfort'
                        onChange={e => setComfort(e.target.value)} value={comfort}
                        />
                    </div>
                </li>
                <li>
                    <label for='recommend'>How likely would you recommend the product?</label>
                    <div onChange={e => setRecommend(e.target.value)}>
                        <input type="radio" id="vlikely" name="recommend" value="Very Likely" required/>
                        <label for="vlikely">Very Likely</label><br/>
                        <input type="radio" id="likely" name="recommend" value="Likely"/>
                        <label for="likely">Likely</label><br/>
                        <input type="radio" id="no-opinion" name="recommend" value="No Opinion"/>
                        <label for="no-opinion">No Opinion</label><br/>
                        <input type="radio" id="ulikely" name="recommend" value="Unlikely"/>
                        <label for="ulikely">Unlikely</label><br/>
                        <input type="radio" id="vulikely" name="recommend" value="Very Unlikely"/>
                        <label for="vulikely">Very Unlikely</label><br/>
                    </div>
                </li>
            </ul>
            <input type="submit" value="Submit"/>
           </form>
       </div>
    );
}
 
export default FormPage;