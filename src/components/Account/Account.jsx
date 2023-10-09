/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react"; 
// import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "../../../context/AuthContext";
import Navbar from "../home/navbar/Navbar";
import { NavLink } from "react-router-dom";

AOS.init({
  duration: 1500,
});

const Account = () => {

    const { user, logOut } = useContext(AuthProvider)
    console.log(user)

    const HandleLogOut = () => {
      logOut()
      .then()
      .catch()
    }

  return (
    <>

      <div
        className="hero min-h-screen place-items-start -z-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/RgWMmN4/pexels-asia-culture-center-14551498.jpg)",
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
              Welcome, {user.displayName}!
            </h1>
          </div>
              <div className="text-left">
                  <h4>Email Address: {user.email}</h4>
                  <h4>Billing Info: {user?.Billing ? user.Billing : "Not added"}</h4>
                  <h4 className="text-center my-4"><NavLink to="/plans" className="underline">Your Events</NavLink></h4>
              </div>
              <div>
                <button className="border px-3 py-1"
                onClick={HandleLogOut}>Log Out</button>
              </div>
        </div>
        

      </div>

    </>
  );
};

export default Account;
