import Image from "next/image";
import { LawImage, TwoSide } from "@/imports/images.imports";

const SubscriberBar = () => {
  return (
    <section>
      <div className="relative bg-[#001415] rounded-xl  py-24 px-6 md:px-16 ">
        {/* <div className="absolute top-1/2 left-0 -translate-y-1/2 z-0 w-64 h-64 md:w-96 md:h-96 ">
  <Image
    src={TwoSide}
    alt="Left Center Image"
    className="object-contain w-full h-full"
  />
</div> */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-48 md:w-64 hidden md:block">
          <Image
            src={LawImage}
            alt="Center Image"
            className="object-contain w-full h-full opacity-60"
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row w-full md:w-1/2 max-w-xl rounded-md overflow-hidden bg-transparent gap-2 md:gap-0">
            <button className="group bg-Brown relative text-white px-8 py-4 font-semibold rounded-l-md md:rounded-l-md md:rounded-r-none overflow-hidden">
              <span className="absolute inset-0 bg-[#c39f63] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out z-0" />
              <span className="relative z-10">Subscribe</span>
            </button>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-4 py-4 border md:border-t md:border-b md:border-r   border-gray-400 md:border-l-0 text-white placeholder-white focus:outline-none rounded md:rounded-r-md md:rounded-l-none"
            />
          </div>

          <h2 className="text-white text-2xl md:text-4xl font-bold text-center md:text-left">
            Subscribe to our newsletter
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SubscriberBar;
