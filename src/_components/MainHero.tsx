import { heroBg, HeroPersonImg, dummyImg } from "@/imports/images.imports";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MainHero = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center py-8"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="w-full md:w-[65%] text-center md:text-left space-y-6 md:space-y-8 lg:space-y-10">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans text-white font-semibold leading-tight">
            Comprehensive Legal Services for Companies —<br />
            Lawyers and Legal Consultants
          </h1>

          {/* Reviews */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 space-y-4 sm:space-y-0">
            {/* Review Images */}
            <div className="flex -space-x-3">
              <Image
                src={dummyImg}
                alt="Client 1"
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-white"
              />
              <Image
                src={dummyImg}
                alt="Client 2"
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-white"
              />
              <Image
                src={dummyImg}
                alt="Client 3"
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-white"
              />
            </div>

            {/* Review Text and Stars */}
            <div className="text-center sm:text-left">
              <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold">
                We have over 1000 satisfied clients
              </h3>
              <div className="flex justify-center sm:justify-start items-center mt-1">
                <div className="flex text-yellow-400 text-sm sm:text-base md:text-lg mr-2">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-400">★</span>
                </div>
                <span className="text-white text-xs sm:text-sm">4.5/5</span>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <button
            type="button"
            className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-2 sm:px-14 sm:py-3 rounded-md bg-Brown text-white group text-sm sm:text-base"
          >
            <span className="absolute inset-0 bg-[#c39f63] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out rounded-md z-0" />
            <span className="relative z-10 font-semibold text-lg flex items-center gap-2 transition duration-200">
              Contact Us <i className="ti ti-arrow-narrow-right" />
            </span>
          </button>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-3 sm:space-x-5 text-white items-center text-xs sm:text-sm">
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
              <FaFacebookF size={14} className="sm:w-4 sm:h-4" />
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="X">
              <FaXTwitter size={14} className="sm:w-4 sm:h-4" />
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
              <FaInstagram size={14} className="sm:w-4 sm:h-4" />
            </a>
            <span className="text-gray-400">|</span>

          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-[35%] flex justify-center">
          <div className="relative">
            {/* Responsive decorative squares */}
            <div className="hidden sm:block absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-5 md:-left-5 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-[#d4b172] z-0 " />
            <div className="hidden sm:block absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-[#d4b172] z-0 " />

            {/* Hero Image */}
            <Image
              src={HeroPersonImg}
              alt="Hero Person"
              className="w-48 h-auto sm:w-56 md:w-64 lg:w-80 xl:w-96 rounded-tr-[60px] rounded-bl-[60px] sm:rounded-tr-[80px] sm:rounded-bl-[80px] md:rounded-tr-[90px] md:rounded-bl-[90px] relative z-10 shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;