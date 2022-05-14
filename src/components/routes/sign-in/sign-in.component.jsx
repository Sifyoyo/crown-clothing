import SignUpForm from "../../sign-up-form/sign-up-form.component";
import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
import{ signInWithGoogleRedirect ,signInWithGooglePopup, createUserDocumentFromAuth, auth} from "../../../utils/firebase/firebase.utils"
//import { async } from "@firebase/util";


const SignIn = () => {

    //useEffect(() => {
        // ES5 måten, siden ES6 ikke fungerte???
    //     async function hentDataFraEnRedirect(){
    //     const response = await getRedirectResult(auth);

    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }

    // } hentDataFraEnRedirect();
    // }, []);

    const  logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        const userDocRef = await createUserDocumentFromAuth(user);

        console.log(user);
    }


    return(
        <div>
            <h1>sign in dawg</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
}

export default SignIn;