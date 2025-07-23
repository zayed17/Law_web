"use client";

import { dummyImg } from "@/imports/images.imports";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AppointmentForm() {
    const t = useTranslations("appointment");

  return (
    <section>
      <div className=" mx-auto ">
        <div className=" md:flex  md:px-10 md:pb-10 md:pt-0">
          <div className="bg-black w-full md:w-1/2 p-6 md:p-11 rounded-r-lg ">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
            {t("title")}
            </h2>
            <form className="space-y-4 md:space-y-7">
              <input
                type="text"
                placeholder={t("name")}
                className="w-full bg-LightCream rounded-lg p-4 "
              />
              <input
                type="email"
                placeholder={t("email")}
                className="w-full bg-LightCream rounded-lg p-4 "
              />
              <input
                type="tel"
                placeholder={t("phone")}
                className="w-full bg-LightCream rounded-lg p-4 "
              />
              <input
                type="text"
                placeholder={t("subject")}
                className="w-full bg-LightCream rounded-lg p-4 "
              />
              <textarea
                rows={4}
                placeholder={t("message")}
                className="w-full bg-LightCream rounded-lg p-4 "
              />
              <button
                type="submit"
                className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-md bg-Brown text-white group"
              >
                <span className="absolute inset-0 bg-[#c39f63] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out rounded-md z-0" />
                <span className="relative z-10 flex items-center gap-2 transition duration-200">
                {t("button")} <i className="ti ti-arrow-narrow-right" />
                </span>
              </button>
            </form>
          </div>

          <div className="relative w-full md:w-1/2 h-[300px] md:h-auto flex-1 rounded-lg overflow-hidden">
            <Image src={dummyImg} alt={t("imageAlt")} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
