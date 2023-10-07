import Navbar from "../navbar/Navbar";

const Banner = () => {
  return (
    <>
      <div
        className="hero place-items-start min-h-[150vh] bg-fixed -z-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/K9NS966/headway-F2-KRf-Qf-Cqw-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 backdrop-blur-[0.75px]"></div>
        <div className="z-30 w-full p-6 sticky top-0">
          <Navbar></Navbar>
        </div>
        <div className="z-30 text-left text-neutral-content mt-24 lg:px-24 lg:py-12 p-6">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">For Events That Matter</h1>
            <p className="mb-5 text-sm lg:text-base">
              Seamless, memorable experiences that elevate your brand and foster
              meaningful connections.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
