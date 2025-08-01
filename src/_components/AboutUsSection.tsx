import { AboutShape } from "@/imports/images.imports";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div className="flex">
      <div className="w-[50%]"></div>
      <div className="w-[50%] space-y-5 pr-5">
        <h3 className="text-[#d4b172] italic font-serif font-semibold text-2xl">
          About Us
        </h3>
        <h1 className="text-[#d4b172] text-4xl  font-semibold">
          Supportive lawyers for individuals facing criminal charges
        </h1>
        <p className="text-sm font-serif font-semibold ">
          In our office, we are committed to supporting justice and protecting
          our clients' rights. With a deep understanding of the legal system and
          years of courtroom experience, our lawyers provide personalized
          strategic counsel across a wide range of legal areas
        </p>
        <div className="rounded-lg bg-white flex flex-col md:flex-row overflow-hidden">
          <div className="w-[50%] flex justify-center">
            <Image
              src={AboutShape}
              alt="image"
              width={150}
              height={200}
              className="left-right-motion"
            />
          </div>

          <div className=" md:w-1/2 flex flex-col justify-center space-y-4 w-[50%] text-xl font-semibold font-sans">
            <div className="flex items-start space-x-2">
              <span className="text-[#d4b172]">✔</span>
              <p className="text-gray-700">Expert legal representation</p>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-[#d4b172]">✔</span>
              <p className="text-gray-700">Comprehensive legal solutions</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-[#d4b172]">✔</span>
              <p className="text-gray-700">Defending your freedom</p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-md bg-Brown text-white group"
        >
          <span className="absolute inset-0 bg-[#c39f63] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out rounded-md z-0" />
          <span className="relative z-10 flex items-center gap-2 transition duration-200">
            Learn More
            <i className="ti ti-arrow-narrow-right" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutUsSection;
