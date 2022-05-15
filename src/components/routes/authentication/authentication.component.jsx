import SignUpForm from "../../sign-up-form/sign-up-form.component";
//import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
import{ /*signInWithGoogleRedirect, auth*/} from "../../../utils/firebase/firebase.utils"
import SignInForm from "../../sign-in-form/sign-in-form.component";
//import { async } from "@firebase/util";
import "./authentication.styles.scss"

const Authentication = () => {

    //useEffect(() => {
        // ES5 måten, siden ES6 ikke fungerte???
    //     async function hentDataFraEnRedirect(){
    //     const response = await getRedirectResult(auth);

    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }

    // } hentDataFraEnRedirect();
    // }, []);

    return(
        <div className="authentication-container">
            <SignInForm />
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
}

export default Authentication;