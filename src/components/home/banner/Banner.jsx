/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { NavLink } from 'react-router-dom';


AOS.init(
  {duration: 1500}
);

const Banner = () => {

  return (
    <>
        <div className="z-20 text-left text-neutral-content mt-28 lg:mt-44 lg:ml-12 lg:px-24 lg:py-12 p-8 static">
          <div className="max-w-md" data-aos="fade-right">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Redefining Corporate Events for a New Era</h1>
            <p className="mb-5 text-sm lg:text-base">
              Seamless, memorable experiences that elevate your brand and foster
              meaningful connections.
            </p>
          </div>

          <div className="lg:my-56 text-center py-24" data-aos="fade-out">
            <h1  className="mb-5 text-3xl lg:text-5xl font-bold">Crafting Memorable Corporate Experiences</h1>
            <p  className="mb-5 text-sm lg:text-base">At Nexus Gatherings,
              we're more than just event managers; 
              we're your partners in crafting extraordinary corporate experiences that 
              leave your guests inspired and your stakeholders impressed.</p>

          <NavLink  to="/about">
            <button id='learnBtn'
            className='hover:border-b hover:border-[1.5]'>Learn More About Us</button>
          </NavLink>
            </div>
        </div>

    </>
  );
};

export default Banner;
