/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthProvider = createContext()

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    // Services data
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);

      // User Registration 
      const registerUser = (email, password) => {
        setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
            }

        // User Login with Email & Pass
        const loginUser = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
        }
 
        // User Login With Google

        const googleSignIn = () => { 
            setLoading(true)
        const provider = new GoogleAuthProvider;
         return signInWithPopup(auth, provider)}

         // Log Out

         const logOut = () => {
            setLoading(true)
           return signOut(auth)
         }


        // OnAuthStateChanged
        useEffect( () => {
            const unSub = onAuthStateChanged(auth, (user) => {
                setLoading(false)
                setUser(user)
            });
            return () => {
                unSub()
            }
        } , [])


      const value = {services, registerUser, loginUser, loading, user, googleSignIn, logOut}

    return (
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;