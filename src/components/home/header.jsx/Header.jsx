import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import { useRef } from "react";

const Header = () => {

    const headerDiv = useRef()

    // const bgImg = async () => {
    //     let res = await fetch("https://i.ibb.co/K9NS966/headway-F2-KRf-Qf-Cqw-unsplash.jpg")
    //     console.log(res.url)
    //     return res.url
    // }

    // bgImg()
    // headerDiv.current.style.backgroundImage = `url(${bgImg})`

  return (
    <div
    className="hero place-items-start min-h-screen bg-fixed -z-10"
    ref={headerDiv}
    style={{
      backgroundImage:
    `url(https://i.ibb.co/K9NS966/headway-F2-KRf-Qf-Cqw-unsplash.jpg)` ,
    }}
    >
    <div className="hero-overlay bg-opacity-60 backdrop-blur-[0.75px]"></div>
      <div className="z-30 w-full p-6 lg:py-8">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Header;
