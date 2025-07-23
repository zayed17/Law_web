import Image from "next/image";
import { leftImg, rightImg, centerImg } from "@/imports/images.imports";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#f4f1ee] overflow-hidden">
      {/* Decorative Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Left Image */}
        <div className="absolute -top-20 left-0 w-[180px] md:w-[280px] lg:w-[320px]">
          <Image
            src={leftImg}
            alt="Left decoration"
            width={320}
            height={320}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Center Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <Image
            src={centerImg}
            alt="Center decoration"
            width={300}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Right Image */}
        <div className="absolute right-0 -bottom-20 w-[150px] md:w-[220px] lg:w-[260px]">
          <Image
            src={rightImg}
            alt="Right decoration"
            width={260}
            height={260}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-[300px] md:h-[400px] text-center ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          <span className="text-black/50">/</span>{" "}
          <span className="text-[#c39f63] font-semibold">Home</span>{" "}
          <span className="text-black/70">Terms & Conditions</span>
        </p>
      </div>
    </section>
  );
}
