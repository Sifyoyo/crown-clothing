//import { signOut } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, /*signOutUser*/ } from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data.json"

//As the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})


export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const valueUser = {currentUser, setCurrentUser};


    useEffect (()=> {
        const unsubrscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }

            setCurrentUser(user);

        })

        return unsubrscribe
    }, [])

    return <UserContext.Provider value={valueUser} >{children}</UserContext.Provider>
}