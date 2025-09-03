import { useEffect } from "react";
import "./AboutUs.css";
const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | Gadget Heaven";
  }, []);
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto mt-6">
      <div className="  about_us_digital_data_container px-[10px] lg:px-[30px] py-[50px] lg:py-[200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl lg:text-3xl mb-4 font-bold">
              Empowering Your Digital World
            </h2>
            <p className="text-[18px]">
              Empowering Your Digital World Innovative Electronics, Unmatched
              Quality – Your Trusted Tech Partner
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 items-center my-8">
        <div>
          <h2 className="text-3xl font-bold">Next-Gen Tech, Today</h2>
          <p className="mt-6 mb-4">
            Nam tempor finibus lorem, nec varius arcu convallis sed. Nunc id
            orci a neque vehicula malesuada. Donec vehicula libero vel leo
            convallis, nec tincidunt felis tincidunt. Maecenas euismod tristique
            leo, vel malesuada ligula malesuada sed. Donec eget libero id leo
            congue venenatis.
          </p>
          <button className="px-4 py-2 rounded-lg bg-[#9538e2] text-white border-2 border-[#9538e2] hover:bg-white hover:text-[#9538e2] duration-500 c cursor-pointer font-bold">
            Know More
          </button>
        </div>
        <div className="border-l-[10px] border-l-[#9538e2] border-b-[10px] border-b-[#9538e2] rounded-tl-lg rounded-br-lg">
          <img
            className="w-full rounded-tr-lg"
            src="https://i.ibb.co.com/MkVNp67q/014-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 items-center my-8">
        <div className="border-l-[10px] border-l-[#9538e2] border-b-[10px] border-b-[#9538e2] rounded-tl-lg rounded-br-lg">
          <img
            className="w-full rounded-tr-lg"
            src="https://wpthemes.themehunk.com/electronics-megamarket/wp-content/uploads/sites/346/2025/03/525-1.jpg"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Next-Gen Tech, Today</h2>
          <p className="mt-6 mb-4">
            Nam tempor finibus lorem, nec varius arcu convallis sed. Nunc id
            orci a neque vehicula malesuada. Donec vehicula libero vel leo
            convallis, nec tincidunt felis tincidunt. Maecenas euismod tristique
            leo, vel malesuada ligula malesuada sed. Donec eget libero id leo
            congue venenatis.
          </p>
          <button className="px-4 py-2 rounded-lg bg-[#9538e2] text-white border-2 border-[#9538e2] hover:bg-white hover:text-[#9538e2] duration-500 c cursor-pointer font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
