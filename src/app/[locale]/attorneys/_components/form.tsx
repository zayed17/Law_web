"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowLeft } from "lucide-react";

const ContactForm = ({ isRTL = true }) => {
  const t = useTranslations("contact2");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className={`${!isRTL ? "text-right" : "text-left"} mb-8 mx-auto max-w-7xl py-10`} >
        <h2 className="font-bold text-2xl font-serif mb-3">{t("aboutAt")}</h2>
        <p className="font-josefin-sans">{t("aboutDecAt")}</p>
      </div>
      <div
        className={`max-w-7xl rounded-lg mx-auto p-8 font-josefin-sans bg-[#f3f3f3] ${
          !isRTL ? "rtl" : "ltr"
        }`}
      >
        <div className={`${!isRTL ? "text-right" : "text-left"} mb-8`}>
          <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
        </div>

        <div className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className={`block text-sm font-medium text-gray-700 mb-2 ${
                  !isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("nameLabel")}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent ${
                  !isRTL ? "text-right" : "text-left"
                }`}
                placeholder={t("namePlaceholder")}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium text-gray-700 mb-2 ${
                  !isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("emailLabel")}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent ${
                  !isRTL ? "text-right" : "text-left"
                }`}
                placeholder={t("emailPlaceholder")}
              />
            </div>
          </div>

          {/* Phone and Subject Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className={`block text-sm font-medium text-gray-700 mb-2 ${
                  !isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("phoneLabel")}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent ${
                  !isRTL ? "text-right" : "text-left"
                }`}
                placeholder={t("phonePlaceholder")}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium text-gray-700 mb-2 ${
                  !isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("subjectLabel")}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent ${
                  !isRTL ? "text-right" : "text-left"
                }`}
                placeholder={t("subjectPlaceholder")}
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              className={`block text-sm font-medium text-gray-700 mb-2 ${
                !isRTL ? "text-right" : "text-left"
              }`}
            >
              {t("messageLabel")}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={8}
              className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none ${
                !isRTL ? "text-right" : "text-left"
              }`}
              placeholder={t("messagePlaceholder")}
            />
          </div>

          {/* Submit Button */}
          <div className={`flex ${!isRTL ? "justify-start" : "justify-end"}`}>
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-3 px-8 py-3 bg-Brown text-white font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
            >
              <span>{t("submitButton")}</span>
              {!isRTL ? (
                <ArrowLeft className="w-5 h-5" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
