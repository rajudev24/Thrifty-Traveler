import { GoogleAuthProvider, getAuth, signInWithPopup,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
            .finally(()=>{setLoading(false)});
    }
    const logOut = ()=>{
        setLoading(true);
        signOut(auth)
        .then (()=>{
            setUser({});
        })
        .finally(()=>{setLoading(false)})

    }

    // Obserber

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth, (user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({});
            }
            setLoading(false);
        });
        return ()=> unsubscribe;
    },[])

    return{
        user,
        loading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;