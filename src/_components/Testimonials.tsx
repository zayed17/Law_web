"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { dummyImg, quoteLeft, quoteRight } from "@/imports/images.imports";
import Image from "next/image";
import AnimatedOnScroll from "./AnimatedElement";
import ScrollFade from "./ScrollFade";

const testimonials = [
  {
    name: "Mohammad Adhil",
    text: "Thanks to Legal M lawyers, my business contracts are now clear, enforceable and protect my interests. Their attention to detail and professionalism exceeded my expectations. I will definitely use their services for all my future legal needs.",
    role: "Lawyer",
    photo: dummyImg,
  },
  {
    name: "Sarah Ali",
    text: "Their legal support was professional and clear. From the first consultation to the final resolution, they guided me with confidence. I felt supported throughout the entire legal process and appreciated their honest and timely communication.",
    role: "Business Owner",
    photo: dummyImg,
  },
  {
    name: "Mohammed K.",
    text: "Truly outstanding experience! The Legal M team made sure every step was transparent and easy to understand. They handled my case with dedication and kept me informed at every stage. I couldn't have asked for a better legal partner.",
    role: "Startup Founder",
    photo: dummyImg,
  },
];

const Testimonials = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="group relative ">
      <div className="flex flex-col items-center text-center mx-auto">
      <AnimatedOnScroll direction="left">

        <h3 className="text-[#d4b172] text-sm md:text-base uppercase tracking-widest font-medium">
          Our Testimonials
        </h3>
        <h1 className="text-[#d4b172] text-2xl md:text-4xl font-semibold mt-2 leading-snug md:leading-tight">
          Success starts with meaningful
        </h1>
        </AnimatedOnScroll>

      </div>

      <div className="relative">
        <Image
          src={quoteLeft}
          alt="Decorative Left"
          className="absolute bottom-0 left-0 w-20 md:w-36 lg:max-w-48 z-0"
        />

        <Image
          src={quoteRight}
          alt="Decorative Right"
          className="absolute  right-0 w-16 md:w-24 lg:max-w-28 z-0"
        />
      <ScrollFade delay={0.4}>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="rounded-xl px-2"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 md:p-8">
                <p className="text-base md:text-3xl font-semibold text-start mb-4 font-josefin-sans leading-relaxed text-gray-800">
                  {item.text}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 mt-6">
                  <div className="flex-shrink-0 mb-3 sm:mb-0">
                    <Image
                      src={item.photo}
                      alt={`${item.name} photo`}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border border-[#d4b172] p-1"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <h4 className="font-semibold text-lg md:text-xl text-[#333]">
                      {item.name}
                    </h4>
                    <h5 className="text-sm font-medium text-[#d4b172]">
                      {item.role}
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </ScrollFade>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-[#d4b172] hover:bg-DarkGreen rounded-full text-white w-10 h-10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg"
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 bg-[#d4b172] hover:bg-DarkGreen rounded-full text-white w-10 h-10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
