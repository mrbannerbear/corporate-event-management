/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const { user, loading } = useContext(AuthProvider)
    const location = useLocation()

    if(loading){
        return   <div
        className="hero place-items-center min-h-screen bg-fixed -z-10"
        style={{
        //   backgroundImage:
        // `url(https://i.ibb.co/K9NS966/headway-F2-KRf-Qf-Cqw-unsplash.jpg)` ,
        backgroundColor: "white"
        }}
        >
        {/* <div className="hero-overlay bg-opacity-60 backdrop-blur-[0.75px]  bg-blue-400"></div> */}
                <div className="z-50 text-3xl font-semibold text-gray-400">
                    LOADING
                <span className="loading loading-dots loading-lg z-50"></span>
                </div>
        </div>
    }
    if(user){return children}
      return  <Navigate state={location.pathname} to="/login"></Navigate>
    

};

export default PrivateRoutes;