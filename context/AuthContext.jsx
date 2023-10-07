/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useEffect, useState } from "react";

export const AuthProvider = createContext()

const AuthContext = ({children}) => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);


      const value = {services}

    return (
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;