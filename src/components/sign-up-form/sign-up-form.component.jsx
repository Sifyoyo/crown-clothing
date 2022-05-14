import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;



    const handleSubmit = async (event) => {
        event.preventDefault();


        const {name, email, password, confirmPassword} = formFields;
        
        //check password match
        if(password !== confirmPassword){
            console.log("password is not equal");
        }

     
        const {user} = createAuthUserWithEmailAndPassword(email, password);
        console.log();
    
        //authenticate user with email n password
        //create user doc when returned
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };
    

    return (

        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>

                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email}/>

                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password}/>

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <button type="submit">Sign up</button>

            </form>
        </div>
    )
}

export default SignUpForm;