import {
  criminalLawImg,
  injuryLawImg,
  educationLawImg,
  businessLawImg,
} from "@/imports/images.imports";
import Image from "next/image";
import React from "react";
import { FaGavel, FaBook, FaBalanceScale } from "react-icons/fa";

const lawAreas = [
  {
    title: "Business Law",
    icon: (
      <FaBalanceScale className="text-black transition duration-700 group-hover:text-white w-6 h-6 md:w-8 md:h-8" />
    ),
    image: businessLawImg,
  },

  {
    title: "Education Law",
    icon: (
      <FaBook className="text-black transition duration-700 group-hover:text-white w-6 h-6 md:w-8 md:h-8" />
    ),
    image: educationLawImg,
  },
  {
    title: "Personal Injury Law",
    icon: (
      <FaGavel className="text-black transition duration-700 group-hover:text-white w-6 h-6 md:w-8 md:h-8" />
    ),
    image: injuryLawImg,
  },
  {
    title: "Criminal Law",
    icon: (
      <FaGavel className="text-black transition duration-700 group-hover:text-white w-6 h-6 md:w-8 md:h-8" />
    ),
    image: criminalLawImg,
  },
];

const PracticeArea = () => {
  return (
    <section>
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto">
        <h3 className="text-[#d4b172] text-sm uppercase tracking-widest font-medium">
          Practice Area
        </h3>
        <h1 className="text-[#d4b172] text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
          Professional legal services from <br /> experienced lawyers
        </h1>
      </div>

      {/* Law Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {lawAreas.map((area, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden transition duration-700 group hover:-translate-y-2 bg-white shadow"
          >
            <div className="relative">
              <Image
                src={area.image}
                alt={area.title}
                width={860}
                height={600}
                className="w-full h-60 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white group-hover:bg-[#c39f63] transition duration-700 rounded-xl p-3">
                {area.icon}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg md:text-2xl  font-bold">{area.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button
          type="button"
          className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-Brown text-white group text-sm sm:text-base font-semibold"
        >
          <span className="absolute inset-0 bg-[#c39f63] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out rounded-md z-0" />
          <span className="relative z-10 flex items-center gap-2 transition duration-200">
            View All Practices <i className="ti ti-arrow-narrow-right" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default PracticeArea;
