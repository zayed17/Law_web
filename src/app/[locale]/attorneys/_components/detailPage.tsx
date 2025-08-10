import React from "react";
import { useTranslations } from "next-intl";
import { Phone, MapPin, Mail } from "lucide-react";
import Image from "next/image";

const ProfileDetail = ({ isRTL = true }) => {
  const t = useTranslations("profile");
  console.log();

  return (
    <div
      className={`max-w-7xl mx-auto rounded-lg font-josefin-sans p-8 bg-[#f3f3f3] ${isRTL ? "rtl" : "ltr"}`}
    >
      <div
        className={`flex ${
          isRTL ? "flex-row-reverse" : "flex-row-reverse"
        } gap-12 items-start`}
      >
        {/* Content Section */}
        <div className={`flex-1 ${isRTL ? "text-start" : "text-start"}`}>
          {/* Name and Role */}
          <div className="flex justify-between items-center">
            <div className="mb-6">
              <h1 className="text-3xl font-bold  mb-2">
                {t("name")}
              </h1>
              <p className="text-lg">{t("role")}</p>
            </div>

            {/* Share Section */}
            <div
              className={`flex items-center gap-3 mb-8 ${
                isRTL ? "justify-start" : "justify-start"
              }`}
            >
              <span className="text-gray-700 font-medium">
                {t("shareLabel")}:
              </span>
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50">
                  <svg
                    className="w-5 h-5 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50">
                  <svg
                    className="w-5 h-5 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50">
                  <svg
                    className="w-5 h-5 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50">
                  <svg
                    className="w-5 h-5 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold  mb-3">
              {t("aboutTitle")}
            </h2>
            <p className="text-gray-700 font-josefin-sans leading-relaxed">{t("aboutText")}</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div
              className={`flex items-center gap-3 ${
                isRTL ? "justify-start" : "justify-start"
              }`}
            >
              <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-gray-700" />
              </div>
              <div className=" items-center gap-2">
                <div className="font-semibold ">
                  {t("phoneLabel")}:
                </div>
                <div className="text-gray-700">{t("phoneValue")}</div>
              </div>
            </div>

            <div
              className={`flex items-center gap-3 ${
                isRTL ? "justify-start" : "justify-start"
              }`}
            >
              <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gray-700" />
              </div>
              <div className=" items-center gap-2">
                <div className="font-semibold ">
                  {t("addressLabel")}:
                </div>
                <div className="text-gray-700">{t("addressValue")}</div>
              </div>
            </div>

            <div
              className={`flex items-center gap-3 ${
                isRTL ? "justify-start" : "justify-start"
              }`}
            >
              <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-gray-700" />
              </div>
              <div className="items-center gap-2">
                <div className="font-semibold ">
                  {t("emailLabel")}:
                </div>
                <div className="text-gray-700">{t("emailValue")}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="w-80 h-[445px] bg-gray-300 rounded-xl overflow-hidden flex items-center justify-center">
            <Image  src={"https://law-web-om.vercel.app/assets/images/lowyer/attorneys-details-image.jpg"} alt="l" width={1000} className="h-[445px]" height={1000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
