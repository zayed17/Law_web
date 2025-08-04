import { dummyImg } from "@/imports/images.imports";
import { CheckCircle, Mail, Map, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CaseDetails = () => {
  const t = useTranslations();
  const infoItems = [
    t("caseInformation.lawyer"),
    t("caseInformation.clientName"),
    t("caseInformation.caseName"),
    t("caseInformation.category"),
    t("caseInformation.website"),
  ];
  const serviceKeys = ["item1", "item2", "item3", "item4", "item5", "item6"];

  const points = [
    "Achieving diversity in property ownership",
    "Many conflicting opinions about the vision document",
    "Delivering results to the workshop participants",
    "Although all business owners need to understand the industry",
    "Providing professional and certified services for your company",
  ];
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[65%]">
          <Image
            src={dummyImg}
            alt={t("caseDetails.imageAlt")}
            className="rounded-lg w-full max-h-[480px] object-cover"
          />

          <div className="space-y-4 py-6">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug md:leading-tight">
              {t("caseDetails.title")}
            </h1>
            <p className="font-josefin-sans leading-relaxed font-semibold  text-gray-700">
              {t("caseDetails.description1")}
            </p>
            <p className="font-josefin-sans leading-relaxed font-semibold  text-gray-700">
              {t("caseDetails.description2")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <Image
                key={i}
                src={dummyImg}
                alt={`Case Image ${i + 1}`}
                className="rounded-lg w-full max-h-[300px] object-cover"
              />
            ))}
          </div>

          <div className="space-y-4 py-6">
            <h3 className="text-lg md:text-2xl font-bold leading-snug md:leading-tight">
              {t("caseDetails.overviewTitle")}
            </h3>
            <p className="font-josefin-sans leading-relaxed font-semibold  text-gray-700">
              {t("caseDetails.overviewDescription")}
            </p>
          </div>
          <div className="space-y-4 ">
            {points.map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-base sm:text-lg "
              >
                <CheckCircle className="text-black min-w-5 min-h-5 mt-1" />
                <p >{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[35%] space-y-6">
          <div className="bg-[#f2f2f2] rounded-lg p-6">
            <h3 className="text-lg md:text-2xl font-bold leading-snug md:leading-tight">
              {t("caseInformation.title")}
            </h3>

            <div className="space-y-4 mt-5 font-josefin-sans">
              {infoItems.map((info, i) => (
                <h4
                  key={i}
                  className={`text-md md:text-xl font-bold leading-snug md:leading-tight ${
                    i < infoItems.length - 1
                      ? "border-b border-gray-300 pb-3"
                      : ""
                  }`}
                >
                  {info}
                </h4>
              ))}
            </div>
          </div>

          <div className="bg-[#f2f2f2] rounded-lg p-6">
            <h3 className="text-lg md:text-2xl font-bold leading-snug md:leading-tight">
              {t("services.title")}
            </h3>

            <div className="space-y-3 mt-4">
              {serviceKeys.map((key, i) => (
                <p
                  key={i}
                  className="p-3 bg-white rounded-lg font-josefin-sans font-semibold hover:text-white hover:bg-black transition duration-300"
                >
                  {t(`allservices.${key}`)}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-black text-white p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold">
              {t("helpBox.title")}
            </h3>

            <div className="space-y-5 mt-5">
              <div className="flex items-center gap-4">
                <div className="bg-[#1c2c2e] p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">
                    {t("helpBox.phone.label")}
                  </p>
                  <p className="text-sm">{t("helpBox.phone.number")}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#1c2c2e] p-3 rounded-full">
                  <Map className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">
                    {t("helpBox.address.label")}
                  </p>
                  <p className="text-sm">{t("helpBox.address.location")}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#1c2c2e] p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">
                    {t("helpBox.email.label")}
                  </p>
                  <p className="text-sm">{t("helpBox.email.address")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseDetails;
