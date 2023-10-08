import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "../../../context/AuthContext";
import Navbar from "../home/navbar/Navbar";

AOS.init({
  duration: 1500,
});

const ServicesRoute = () => {

    const { services } = useContext(AuthProvider)

  return (
    <>

      <div
        className="hero min-h-screen place-items-start -z-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/2FWcDcp/pexels-asia-culture-center-18366246.jpg)",
        }}
      >
        <div
          className="hero-overlay bg-opacity-60 bg-gradient-to-t from-black/0 via-black/0 mix-blend-normal
     to-black/20 backdrop-blur-[2px]"
        ></div>
         <div className="z-30 w-full p-6 lg:py-8">
          <Navbar></Navbar>
        </div>
        <div className="hero-content text-center mx-auto w-11/12
         text-neutral-content z-20 mt-28 lg:mt-44 lg:ml-12 lg:px-24 lg:py-12 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
              Our Sevices
            </h1>
            <p>
              Tailored, curated, designed & implemented- all per your
              requirements. <br />
              With our team of marketing & design experts, we are able to build
              state-of-the-art events that leave a lasting impression on our
              clients & their guests.
            </p>

            <div className="mt-12 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service) => (
                <NavLink key={service.id} to={`/services/${service.id}`}>
                  <div className="flex flex-col justify-center w-full lg:w-60 rounded-sm shadow-lg backdrop-blur-sm pb-6">
                    <img
                      className="h-40 w-60 mx-auto rounded-t-sm"
                      src={service.image}
                      alt=""
                    />
                    <p className="my-3">{service.title}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default ServicesRoute;