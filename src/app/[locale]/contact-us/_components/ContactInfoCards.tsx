"use client";

import { FadeInDirectionOnScroll } from "@/_components/FadeInOnScroll";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactInfoCards() {
  const t = useTranslations("contact");

  const contactDetails = [
    {
      title: t("addressLabel") + ":",
      values: [t("address")],
      icon: (
        <MapPin className="md:w-10 md:h-10 w-6 h-6 text-black  group-hover:text-white" />
      ),
    },
    {
      title: t("emailLabel") + ":",
      values: [t("email"), t("email")],
      icon: (
        <Mail className="md:w-10 md:h-10 w-6 h-6 text-black  group-hover:text-white" />
      ),
    },
    {
      title: t("phoneLabel") + ":",
      values: [t("phone"), t("phone")],
      icon: (
        <Phone className="md:w-10 md:h-10 w-6 h-6 text-black group-hover:text-white" />
      ),
    },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-6 items-center justify-center">
      {contactDetails.map((item, index) => (
        <div
          key={index}
          className="flex group transition-all duration-500 ease-in-out transform hover:-translate-y-2 items-center justify-between w-full rounded-xl px-6 py-6 shadow-sm bg-[#efedea] border-b-4 border-[#3e1d1b] hover:border-[#d4b172]"
        >
          <div>
            <h4 className="text-lg md:text-2xl font-bold mb-1">{item.title}</h4>
            {item.values.map((val, idx) => (
              <p key={idx} className="text-gray-700 text-md md:text-xl">
                {val}
              </p>
            ))}
          </div>
          <div className="bg-white group-hover:bg-[#d4b172] p-5 md:p-6 rounded-full ml-4 transition-colors duration-500 ease-in-out">
            {item.icon}
          </div>
        </div>
      ))}
    </section>
  );
}
