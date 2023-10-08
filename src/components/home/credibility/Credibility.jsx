/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
// import { NavLink } from 'react-router-dom';

AOS.init({ duration: 1500 });

const Credibility = () => {
  return (
    <>
      <div
        className="hero min-h-screen place-items-start -z-10 bg-fixed"
        style={{
          backgroundImage: `url(https://i.ibb.co/7R7zLzS/stem-list-EVgs-Ab-L51-Rk-unsplash.jpg)`,
        }}
      >
        <div
          className="hero-overlay bg-opacity-60 backdrop-blur-[2px] px-24 py-6  bg-gradient-to-t from-black/0 via-black/0
     to-black/50"
        ></div>
        <div
          className="hero-content text-center text-neutral-content z-20 mt-28 lg:mt-44 lg:ml-12 lg:px-24 lg:py-12 p-8"
          data-aos="fade-up"
        >
          <div className="max-w-4xl mx-auto static">
            <h1 className="mb-5 text-5xl font-bold">Why Us?</h1>
            <p className="mb-5">
              At Nexus Gatherings, we specialize in crafting memorable
              corporate experiences by offering tailored solutions designed to
              meet your unique needs. Our team's expertise ensures flawless
              execution, creative innovation, and attention to every detail,
              making your events truly exceptional and unforgettable.
            </p>
            <p className="flex justify-center lg:gap-10 mt-10 mb-24 lg:mb-56 flex-wrap">
                <img className="w-40"
                 src="https://i.ibb.co/0cYxh2Y/THE-BRAND-AWARDS-2019-removebg-preview.png" alt="" />
                <img className="w-40"
                src="https://i.ibb.co/Zz49GD9/THE-BRAND-AWARDS-2019-1-removebg-preview.png" alt="" />
                <img className="w-40"
                src="https://i.ibb.co/3yDTCJV/THE-BRAND-AWARDS-2019-2-removebg-preview.png" alt="" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credibility;
