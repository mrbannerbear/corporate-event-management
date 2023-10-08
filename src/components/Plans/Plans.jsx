/* eslint-disable react/no-unescaped-entities */
// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import { AuthProvider } from "../../../context/AuthContext";
import Navbar from "../home/navbar/Navbar";

AOS.init({
  duration: 1500,
});

const Plans = () => {

    // const { services } = useContext(AuthProvider)

  return (
    <>

      <div
        className="hero min-h-screen place-items-start -z-10 bg-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/JQXDrcG/pexels-asia-culture-center-14382536.jpg)",
        }}
      >
        <div
          className="hero-overlay bg-opacity-60 bg-gradient-to-t from-black/0 via-black/0 mix-blend-normal
     to-black/20 backdrop-blur-[6px]"
        ></div>

         <div className="z-30 w-full p-6 lg:py-8">
          <Navbar></Navbar>
        </div>

        <div className="hero-content text-center mx-auto w-11/12 flex flex-col
         text-neutral-content z-20 mt-28 lg:mt-44 lg:ml-12 lg:px-24 lg:py-12 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
              Plans
            </h1>
          </div>

        </div>
        

      </div>

    </>
  );
};

export default Plans;
