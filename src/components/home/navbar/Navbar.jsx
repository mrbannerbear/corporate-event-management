import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const routes = [
    {
      id: 0,
      path: "/",
      name: "Home"
    },
    {
      id: 1,
      path: "/about",
      name: "About",
    },
    {
      id: 2,
      path: "/services",
      name: "Services",
    },
    {
      id: 3,
      path: "/account",
      name: "Account",
    },
    {
      id: 4,
      path: "/plans",
      name: "Plans",
    },
  ];

  const [open, setOpen] = useState(true)
  const HandleDrawer = () => {
    setOpen(!open)
  }

  const openClass = open ? "block" : "hidden"

  return (
    <>
      <nav className="navbar items-center bg-transparent text-white lg:px-24 lg:py-6">
        
        <div className="navbar-start">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl focus:ring-0">
            <img
              className="w-28 lg:w-32 relative -top-8 lg:-top-10"
              src="https://i.ibb.co/G0C6Lkk/N-2-removebg-preview.png"
              alt=""
            />
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {routes.map((route) => (
              <NavLink key={route.id} to={route.path}>
                <li>{route.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex">
          <NavLink>
            <button className="border-white border-[1.5px] px-3 py-1 rounded-sm">
              Log In
            </button>
          </NavLink>
        </div>

        {/* Dropdown for smaller screens */}
        
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-left">
            <button onClick={HandleDrawer}
             tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className={` ${openClass}
              menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#1E252D] backdrop-blur-sm rounded-box z-50`}
            >
              {routes.map((route) => (
                <li key={route.id}>
                  <NavLink to={route.path}>{route.name}</NavLink>
                </li>
              ))}
              <li>
                <a className="bg-transparent">
                  <button> Log In</button>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
