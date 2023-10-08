/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

const Login = () => {
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
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  name="name"
                  className="input input-bordered rounded-sm"
                  required
                />
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered rounded-sm"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3 w-full">
                <button className="rounded-sm border-[1.5px] w-max mx-auto border-black/50 px-3 py-1">Login</button>
              </div>
              <div className="text-center text-sm">
                <small>Don't have an account? <NavLink to="/registration" className="underline">Register for free.</NavLink></small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
