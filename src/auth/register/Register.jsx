import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "../../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

const Register = () => {

    const { registerUser } = useContext(AuthProvider)
    const HandleRegistration = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const username = e.target.name.value;
        const url = e.target.url.value;
        const password = e.target.password.value;

        console.log(email, username, url, password)
        registerUser(email, password)
        .then(
            res => {
                console.log(res);
                updateProfile(auth.currentUser, {
                    displayName: username,
                    photoURL: url
                })
                .then(res => console.log(res))
                 .catch(err => console.log(err));
            }
        )
        .catch(
            err => console.log(err)
        )
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


            <form className="card-body w-full lg:w-[320px]"
            onSubmit={HandleRegistration}>

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
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="url"
                  placeholder="url"
                  name="url"
                  className="input input-bordered rounded-sm"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  name="password"
                  className="input input-bordered rounded-sm"
                  required
                />
              </div>
              <div className="form-control mt-3 w-full">
                <button className="rounded-sm border-[1.5px] w-max mx-auto border-black/50 px-3 py-1">Register</button>
              </div>
              <div className="text-center text-sm">
                <small>Already have an account? <NavLink to="/login" className="underline">Login Here</NavLink></small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
