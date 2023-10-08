import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "../../../../context/AuthContext";

AOS.init({
  duration: 1500,
});

const ServicesHome = () => {

    const { services } = useContext(AuthProvider)

  return (
    <>

      <div
        className="hero min-h-[120vh] bg-fixed -z-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/qYBQBVB/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg)",
        }}
      >
        <div
          className="hero-overlay bg-opacity-60 bg-gradient-to-t from-black/0 via-black/0 mix-blend-normal
     to-black/20 backdrop-blur-[0.75px]"
        ></div>
        <div className="hero-content text-center text-neutral-content z-50">
          <div className="max-w-3xl py-24 lg:py-56">
            <h1 className="text-4xl font-bold mb-6" data-aos="fade-out">
              Our Sevices
            </h1>
            <p data-aos="fade-out">
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

export default ServicesHome;
