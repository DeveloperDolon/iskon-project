import MyContainer from "@/components/MyContainer";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const page = () => {
  return (
    <>
      <div className="bg-[#007991] h-48 rounded-br-full"></div>

      <MyContainer className="">
        <div className="grid md:grid-cols-2 grid-cols-1 md:my-24 my-20">
          <div>
            <h2 className="md:text-4xl font-secoundryFont text-3xl font-bold border-b-4 border-black border-dashed  w-fit pr-9 pb-1">
              Contact Us
            </h2>

            <p className="md:text-xl text-lg font-semibold py-1 mt-6">
              ISKCON Youth Forum
            </p>
            <p className="md:text-xl text-lg font-semibold py-1">
              Notun Bazar,Barisal.
            </p>
            <p className="md:text-xl text-lg font-semibold py-1">
              Barisal, Bangladesh.
            </p>
            <p className="md:text-xl text-lg font-semibold py-1">
              Contact- +880 1973397430
            </p>
            <div className="flex gap-10 mt-6 items-center">
              <p className="md:text-2xl text-xl font-bold text-[#007991]">
                Keep In Touch
              </p>

              <div className="flex gap-4 md:text-2xl text-xl">
                <button className="hover:opacity-70 transition-all duration-300">
                  <FaFacebook />
                </button>
                <button className="hover:opacity-70 transition-all duration-300">
                  <IoLogoWhatsapp />
                </button>
                <button className="hover:opacity-70 transition-all duration-300">
                  <AiFillInstagram />
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-2xl px-10 py-7 flex flex-col justify-center">
            <h3 className="font-bold md:text-3xl text-2xl text-[#007991]">
              Have Questions?
            </h3>

            <p className="md:text-xl text-lg font-semibold mt-10">
              Mail us at: dolonr718@gmail.com
            </p>
          </div>
        </div>
      </MyContainer>
    </>
  );
};

export default page;
