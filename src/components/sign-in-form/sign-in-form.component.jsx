import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import{signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils"
import Button from "../button/button.component";
import "./sign-in-form.styles.scss"


const defaultFormFields = {
    email: "",
    password: ""
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Mark My version of signing inn with email and password
        // signInWithEmailAndPassword(getAuth(), email, password).then((userInfoObj) => {
        //     const user = userInfoObj.user;
        //     console.log(user);
        // }).catch((error) => {
        //     console.log(error.messsage)
        // })
        try{
            const user = await signInAuthUserWithEmailAndPassword(email,password)
            resetFormFields();
        }catch(error){
            switch(error.code){
                case "auth/wrong.password":
                    alert("Incorrect password");
                    break;
                case "auth/user-not-found":
                    alert("Cannot find any user with this email");
                    break;
                default:
                    console.log(error);
            }
        }
        
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});

        console.log(formFields);
    };
    
    const logGoogleUser = async () => {
        await signInWithGooglePopup();
        
    }


    return (

        <div className="sign-up-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                
                <div className="buttons-container">
                <Button type="submit">Sign in</Button>
                <Button type="button" buttonType="google" onClick={logGoogleUser}>Google sign in</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SignInForm;

