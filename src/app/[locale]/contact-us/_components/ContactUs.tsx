"use client";

import { dummyImg } from "@/imports/images.imports";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section>
      <div className="bg-LightCream mx-auto rounded-lg">
        <div className="grid md:grid-cols-2 ">
          <div className="col-span-2 mx-auto px-6 pt-10 md:px-10 md:pt-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
              Have questions? Get in touch with us!
            </h2>
          </div>

          <div className="md:col-span-2 md:flex  md:px-10 md:pb-10 md:pt-0">
            <div className="bg-white flex-1 p-6 md:p-11 rounded-lg ">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-LightCream rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-Brown"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-LightCream rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-Brown"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-LightCream rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-Brown"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-LightCream rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-Brown"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-LightCream rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-Brown"
                />
                <button
                  type="submit"
                  className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-md bg-Brown text-white group"
                >
                  <span className="absolute inset-0 bg-[#c39f63] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out rounded-md z-0" />
                  <span className="relative z-10 flex items-center gap-2 transition duration-200">
                    Send Now <i className="ti ti-arrow-narrow-right" />
                  </span>
                </button>
              </form>
            </div>

            <div className="relative h-[300px] md:h-auto flex-1 rounded-lg overflow-hidden">
              <Image
                src={dummyImg}
                alt="Contact"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
