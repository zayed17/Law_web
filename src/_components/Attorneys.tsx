"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { advocateImg } from "@/imports/images.imports";
import Image from "next/image";
import {
  FaGavel,
  FaBook,
  FaBalanceScale,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const lawAreas = [
  {
    name: "John Doe",
    role: "Senior Advocate",
    icon: <FaGavel className="text-black w-6 h-6 md:w-8 md:h-8" />,
    image: advocateImg,
    socialIcons: [FaFacebook, FaTwitter, FaLinkedin],
  },
  {
    name: "Jane Smith",
    role: "Legal Advisor",
    icon: <FaBook className="text-black w-6 h-6 md:w-8 md:h-8" />,
    image: advocateImg,
    socialIcons: [FaFacebook, FaTwitter, FaLinkedin],
  },
  {
    name: "Alex Johnson",
    role: "Business Lawyer",
    icon: <FaBalanceScale className="text-black w-6 h-6 md:w-8 md:h-8" />,
    image: advocateImg,
    socialIcons: [FaFacebook, FaTwitter, FaLinkedin],
  },
  {
    name: "Emma Wilson",
    role: "Legal Consultant",
    icon: <FaBook className="text-black w-6 h-6 md:w-8 md:h-8" />,
    image: advocateImg,
    socialIcons: [FaFacebook, FaTwitter, FaLinkedin],
  },
  {
    name: "Alex Johnson",
    role: "Business Lawyer",
    icon: <FaBalanceScale className="text-black w-6 h-6 md:w-8 md:h-8" />,
    image: advocateImg,
    socialIcons: [FaFacebook, FaTwitter, FaLinkedin],
  },
  {
    name: "Emma Wilson",
    role: "Legal Consultant",
    icon: <FaBook className="text-black w-6 h-6 md:w-8 md:h-8" />,
    image: advocateImg,
    socialIcons: [FaFacebook, FaTwitter, FaLinkedin],
  },
];

const Attorneys = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-12 mx-auto relative px-4 md:px-10">
      <div className="flex items-center justify-between mb-6 relative">
        <div>
          <h3 className="text-[#d4b172] text-sm md:text-base uppercase tracking-widest font-medium">
            Our Attorneys
          </h3>
          <h1 className="text-2xl text-[#d4b172] md:text-4xl font-bold mt-2 leading-snug md:leading-tight">
            20+ years of legal excellence and defending clients
          </h1>
        </div>

        {/* Prev/Next Buttons */}
        <div className="hidden md:flex space-x-3 absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-[#d4b172] hover:bg-DarkGreen rounded-full text-white w-10 h-10 flex items-center justify-center shadow-lg"
            aria-label="Previous attorney"
          >
            ←
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-[#d4b172] hover:bg-DarkGreen rounded-full text-white w-10 h-10 flex items-center justify-center shadow-lg"
            aria-label="Next attorney"
          >
            →
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 25 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="pb-6"
      >
        {lawAreas.map((area, idx) => (
          <SwiperSlide key={idx}>
            <div className="rounded-xl overflow-hidden bg-white shadow-md group relative max-w-[350px] mx-auto">
              <div className="relative w-full">
                <Image
                  src={area.image}
                  alt={`${area.name} photo`}
                  width={500}
                  height={250}
                  className="
                    w-full 
                    object-cover 
                    object-top 
                    rounded-t-xl 
                    h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]
                  "
                />

                <div className="absolute bottom-5 left-[-60px] group-hover:left-4 flex flex-col gap-2 transition-all duration-500">
                  {area.socialIcons.map((Icon, iconIdx) => (
                    <div
                      key={iconIdx}
                      className="border border-[#d4b172] p-2 rounded-md shadow hover:bg-[#c39f63] transition"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Name & Role */}
              <div className="bg-DarkGreen text-center py-6 flex flex-col items-center justify-center space-y-1">
                <h3 className="md:text-xl text-base font-bold text-white px-2">
                  {area.name}
                </h3>
                <p className="md:text-lg text-base font-semibold font-sans text-gray-400 px-2">
                  {area.role}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Attorneys;
