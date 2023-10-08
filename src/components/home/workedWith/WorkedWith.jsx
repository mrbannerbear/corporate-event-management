/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
// import { NavLink } from 'react-router-dom';

AOS.init({ duration: 1500 });

const WorkedWith = () => {
  return (
    <>
      <div
        className="hero min-h-screen place-items-start -z-10 bg-fixed"
        style={{
          backgroundImage: `url(https://i.ibb.co/Q9y6Z91/asia-culturecenter-COWf-5-Zt-Z6w-unsplash.jpg)`,
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
            <h1 className="text-5xl font-bold mb-12 lg:mb-24">We've Worked With</h1>
            <p className="flex justify-center lg:gap-10 mt-10 flex-wrap">
                <img className="w-40"
                src="/public/assets/national-geographic-channel.svg" alt="" />
                <img className="w-40"
                src="/public/assets/forbes-2.svg" alt="" />
                <img className="w-40"
                src="/public/assets/tesla-9.svg" alt="" />
                <img className="w-40"
                src="/public/assets/apple-11.svg" alt="" />
                <img className="w-40"
                src="/public/assets/burberry-wordmark-1.svg" alt="" />
                <img className="w-40"
                src="/public/assets/emirates-group-logo.svg" alt="" />
            </p>
            <p className="text-end mb-24 lg:mb-56 text-xl mt-12">...And More</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkedWith;
