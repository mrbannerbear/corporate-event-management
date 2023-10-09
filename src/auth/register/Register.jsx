/* eslint-disable no-unused-vars */
import { useContext,  } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
  const [registered, setRegistered] = useState(false);
  const { registerUser, googleSignIn } = useContext(AuthProvider);
  const navigate = useNavigate()
  const location = useLocation()

  const HandleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.name.value;
    const url = e.target.url.value;
    const password = e.target.password.value;

         if(password.length < 6){
         return toast.error("Your password should have at least six characters")
         }
         if(!/.*[A-Z].*/.test(password)){
         return toast.error("Your password should have at least six characters")
         }
         if(!/.*[^a-zA-Z0-9\s].*/.test(password)){
            return toast.error("Your password must include a special character")
         }

    // console.log(email, username, url, password);
    registerUser(email, password)
      .then((res) => {
        console.log(res);
         toast("Account created successfully");
        setRegistered(true);
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: url,
        })
          .then((res) =>{ console.log(res);
            navigate(location?.state ? location.state : "/")})
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const HandleGoogleAuth = () => {
    googleSignIn()
    .then( res =>
        {
            console.log(res);
            toast("Account created successfully");
            navigate(location?.state ? location.state : "/")
        }
    )
    .catch()
  }

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://i.ibb.co/K9NS966/headway-F2-KRf-Qf-Cqw-unsplash.jpg)`,
        }}
      >
        <div
          className="hero-overlay bg-opacity-60 bg-gradient-to-t from-black/0 via-black/0 mix-blend-normal
     to-black/20 backdrop-blur-[2px]"
        ></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card rounded-sm w-full shadow-2xl bg-neutral-300/60">
            <div className="card-body w-full lg:w-[320px]">


              <form onSubmit={HandleRegistration}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    name="name"
                    className="input input-bordered rounded-sm bg-white/80 text-black"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Image URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="url"
                    name="url"
                    className="input input-bordered rounded-sm bg-white/80 text-black"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered rounded-sm bg-white/80 text-black"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered rounded-sm bg-white/80 text-black"
                    required
                  />
                </div>

                <div className="form-control mt-3 w-full">
                  <button className="rounded-sm border-[1.5px] w-max mx-auto border-black/50 px-3 py-1 text-black">
                    Register
                  </button>
                </div>
              </form>

              <div className="text-center text-sm text-black">
                <small>
                  Already have an account?{" "}
                  <NavLink to="/login" className="underline">
                    Login Here
                  </NavLink>
                </small>
              </div>

              <div className="text-center text-black">
                <h3>
                  <small>Or, sign up with</small>:
                </h3>
                <div className="flex justify-center pt-3 pb-6">
                  <button onClick={HandleGoogleAuth}
                    className="border-[1.5px] border-black/50 text-black/50 rounded-sm flex justify-center gap-[6px] items-center
                        px-3 py-1"
                  >
                    <FcGoogle className="text-xl"></FcGoogle>
                    <span>Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" reverseOrder={false}></Toaster>
    </>
  );
};

export default Register;
