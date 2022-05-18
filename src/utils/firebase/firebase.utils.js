import {initializeApp} from "firebase/app";
import {
    getAuth, 
    //signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDb4GtGabfdmM7MDRgHovYOcxX4GRkQOx0",
    authDomain: "crwn-clothing-db-practice.firebaseapp.com",
    projectId: "crwn-clothing-db-practice",
    storageBucket: "crwn-clothing-db-practice.appspot.com",
    messagingSenderId: "869145811319",
    appId: "1:869145811319:web:ec4b6700faa80f1cf42972"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, addionalInformation = {}) => {
    if(!userAuth) return;

    //Mark: Email and Password Fix: missing uid
    const getUid= (authobject) => {

        if(!authobject.uid){
            const {displayName, email, uid} = authobject.user;
            return {displayName, email, uid}
        }
        else{
            const {displayName,email ,uid} = authobject;
            return {displayName,email ,uid}
        }
        
    }

    const userDocRef = doc(db, "users", getUid(userAuth).uid)

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        
        //Mark: Create user with email and password: had to deconstruct "userAuth" further
        if(!userAuth.uid){
            
            const {displayName, email} = userAuth.user;
   
            const createdAT = new Date();
    
    
            try {
                await setDoc(userDocRef, {displayName, email, createdAT, ...addionalInformation});
            } catch (error){
                console.log("Erorr creating the user", error.message);
            }

        }
        
        //Yihua: Create use with google log in if use doesnt exists in the database
        else{
            const {displayName, email} = userAuth;
    
            const createdAT = new Date();


            try {
                await setDoc(userDocRef, {displayName, email, createdAT, ...addionalInformation});
            } catch (error){
                console.log("Erorr creating the user", error.message);
            }
        }
    }

    //If user data does not exists
    //create / set the document with the data from userauth in my collection

    //If user data exists

    //return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);