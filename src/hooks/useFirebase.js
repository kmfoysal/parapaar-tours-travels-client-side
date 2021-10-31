import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebaseInit";

firebaseAuthentication();

const useFirebase = () =>{

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth()

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result =>{
        //     console.log(result.user);
        //     setUser(result.user);
        // })
        // .catch(error =>{
        //     setError(error.message);
        // })
        
        }

        const logOut = ()=>{
       
            signOut(auth)
            .then(() => {
                setUser({});
              }).catch((error) => {
                setError(error);
              });
    
        }    
    
            useEffect(()=>{
                onAuthStateChanged(auth, user=>{
                    if(user){
                        setUser(user);
                    }
                    else{
                        setUser({});
                    }
                    setLoading(false);
                })
            },[])

    return {user, error, signInWithGoogle, logOut, loading }

}

export default useFirebase;
