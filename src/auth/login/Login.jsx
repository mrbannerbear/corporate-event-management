/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { loginUser, googleSignIn, user } = useContext(AuthProvider);
  console.log(user);

  const navigate = useNavigate();
  const location = useLocation();

  const HandleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        console.log(res);
        toast("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {console.log(err.code);
    toast.error("Invalid email or password. Please try again.")});
  };

  const HandleGoogleAuth = () => {
    googleSignIn()
    .then(res => {
        console.log(res);
        toast("Login successful")
        navigate(location?.state ? location.state : "/");
    })
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
            <form className="card-body text-black" onSubmit={HandleLogin}>
              <div className="form-control">
                <label className="label ">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-black">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3 w-full">
                <button className="rounded-sm border-[1.5px] w-max mx-auto border-black/50 px-3 py-1">
                  Login
                </button>
              </div>
              <div className="text-center text-sm">
                <small>
                  Don't have an account?{" "}
                  <NavLink to="/registration" className="underline">
                    Register for free.
                  </NavLink>
                </small>
              </div>
            </form>
            <div className="text-center text-black">
              <h3>
                <small>Or, login with</small>:
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
      <Toaster position="bottom-center" reverseOrder={false}
      ></Toaster>
    </>
  );
};

export default Login;
