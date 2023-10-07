import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthProvider } from "../../../context/AuthContext";
import Navbar from "../home/navbar/Navbar";

const EachService = () => {
  const { services } = useContext(AuthProvider);
  const paramsService = useParams();

  const uniqueService = services.find(
    (uniqueService) => uniqueService.id == paramsService.id
  );

//   console.log(uniqueService.id, services, paramsService.id);

  return (
    <>
      <div
        className="hero min-h-screen place-items-start -z-10"
        style={{
          backgroundImage: `url(${uniqueService.image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 backdrop-blur-[2px]"></div>
        <div className="z-30 w-full p-6 lg:py-8">
          <Navbar></Navbar>
        </div>
        <div className="hero-content text-center text-neutral-content z-20 mt-28 lg:mt-44 lg:ml-12 lg:px-24 lg:py-12 p-8">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold">{uniqueService.title}</h1>
            <p className="mb-5">{uniqueService.description}</p>
            <p className="flex gap-5 justify-center">
              <button className="border-white border-[1.5px] px-3 py-1 rounded-sm">
                Book Now
              </button>
              <button className="border-white border-[1.5px] px-3 py-1 rounded-sm">
                Contact Us
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachService;
