import { aboutUsImg } from "@/imports/images.imports";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedElement from "./AnimatedElement";

const WhyChooseUs = () => {
  const t = useTranslations("whyChooseUs");

  const listItemClass =
    "bg-LightCream rounded-4xl text-Brown font-josefin-sans w-fit p-4 text-lg";

  return (
    <section className="bg-LightCream py-6 md:py-14">
      <div className="bg-white w-full p-6 md:p-14 mx-auto rounded-2xl">
        <h3 className="text-[#d4b172] text-sm md:text-base uppercase tracking-widest font-medium">
          {t("sectionTitle")}
        </h3>
        <h1 className="text-2xl md:text-4xl font-bold mt-2 leading-snug md:leading-tight">
          {t("heading")}
        </h1>

        <div className="flex flex-col-reverse md:flex-row gap-8 mt-8 ">

          <div className="md:w-[50%] space-y-6">

            <p className="font-josefin-sans leading-relaxed font-semibold text-lg text-gray-700">
              {t("paragraph")}
            </p>

            <div className="space-y-4">
              {[0, 1, 2, 3, 4].map((index) => (
                <h3 key={index} className={listItemClass}>
                  {t(`points.${index}`)}
                </h3>
              ))}
            </div>
          </div>


          <div className="md:w-[50%] flex justify-center">

            <Image
              src={aboutUsImg}
              alt="About Us"
              className="w-full h-[400px] sm:h-[500px] md:h-[700px]  object-cover"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
