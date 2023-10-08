/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword } from "firebase/auth";
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

        // OnAuthStateChanged
        useEffect( () => {
            
        } , [])


      const value = {services, registerUser, loading, user}

    return (
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;