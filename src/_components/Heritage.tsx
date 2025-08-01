import { appointmentImg } from "@/imports/images.imports";
import { CreditCard, Star, DollarSign, Headphones } from "lucide-react";
import Image from "next/image";


const Heritage = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[800px] z-0 pointer-events-none">
        <Image
          src={appointmentImg}
          alt="Appointment Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content over image */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mb-12">
          {/* 1st item */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="bg-[#253637] rounded-full p-4 md:p-6 flex-shrink-0">
              <CreditCard className="w-7 h-7 md:w-9 md:h-9 text-white" />
            </div>
            <div>
              <div className="text-white text-[16px] md:text-lg font-medium">Pay Online</div>
              <div className="text-white text-xl sm:text-2xl font-bold leading-tight">Pay Online</div>
            </div>
          </div>

          {/* 2nd item */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="bg-[#253637] rounded-full p-4 md:p-6 flex-shrink-0">
              <Star className="w-7 h-7 md:w-9 md:h-9 text-white" />
            </div>
            <div>
              <div className="text-white text-[16px] md:text-lg font-medium">Get Free Evaluation</div>
              <div className="text-white text-xl sm:text-2xl font-bold leading-tight">Get Free</div>
              <div className="text-white text-xl sm:text-2xl font-bold leading-tight">Evaluation</div>
            </div>
          </div>

          {/* 3rd item */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="bg-[#253637] rounded-full p-4 md:p-6 flex-shrink-0">
              <DollarSign className="w-7 h-7 md:w-9 md:h-9 text-white" />
            </div>
            <div>
              <div className="text-white text-[16px] md:text-lg font-medium">Book Now</div>
              <div className="text-white text-xl sm:text-2xl font-bold leading-tight">Appointment</div>
            </div>
          </div>

          {/* 4th item */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="bg-[#253637] rounded-full p-4 md:p-6 flex-shrink-0">
              <Headphones className="w-7 h-7 md:w-9 md:h-9 text-white" />
            </div>
            <div>
              <div className="text-white text-[16px] md:text-lg font-medium">Support</div>
              <div className="text-white text-xl sm:text-2xl font-bold leading-tight">24/7 Hours</div>
            </div>
          </div>
        </div>



        {/* YouTube Video */}

        <div className="relative w-full mt-16 mx-auto rounded-lg overflow-hidden shadow-lg">
          <div
            className="relative"
            style={{
              width: "100%",
              paddingBottom: "56.25%", // 16:9 aspect ratio
            }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/H4x8UEKP3ls"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

      </div>

      {/* Heritage Title Section */}
      <div className="py-14 px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-[#d4b172] text-sm md:text-base uppercase tracking-widest font-medium">
          Our Heritage
        </h3>
        <h1 className="text-2xl text-[#d4b172] md:text-4xl font-bold mt-2 leading-snug md:leading-tight">
          We honor our heritage and shape our future
        </h1>
      </div>

      {/* Timeline Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 text-start">
          <h1 className="text-Brown text-4xl md:text-5xl font-bold">1970</h1>
          <h3 className="text-xl md:text-2xl font-semibold">Founded in Hawaii</h3>
          <p className="text-base md:text-lg font-josefin-sans">
            Nisi eaque culpa accusantium tortor malisada belintiski.
          </p>
        </div>
        <div className="space-y-3 text-start">
          <h1 className="text-Brown text-4xl md:text-5xl font-bold">1990</h1>
          <h3 className="text-xl md:text-2xl font-semibold">Office of the Year</h3>
          <p className="text-base md:text-lg font-josefin-sans">
            Consequuntur dolore alias lorem belintiski hic voluptate.
          </p>
        </div>
        <div className="space-y-3 text-start">
          <h1 className="text-Brown text-4xl md:text-5xl font-bold">1960</h1>
          <h3 className="text-xl md:text-2xl font-semibold">New Office Opening</h3>
          <p className="text-base md:text-lg font-josefin-sans">
            Praesentium minus voluptatum neque felis belintiski commodo.
          </p>
        </div>
        <div className="space-y-3 text-start">
          <h1 className="text-Brown text-4xl md:text-5xl font-bold">2005</h1>
          <h3 className="text-xl md:text-2xl font-semibold">Best Office Award</h3>
          <p className="text-base md:text-lg font-josefin-sans">
            Reprehenderit eum cursus tellus belintiski gravida tempor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
