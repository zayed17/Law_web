"use client";

import { useTranslations } from "next-intl";

export default function AccountForms() {
  const t = useTranslations("account");

  return (
    <section>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 h-fit">
          <h2 className="md:text-2xl text-lg font-semibold mb-6">{t("loginTitle")}</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder={t("email")}
              className="w-full bg-LightCream rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-Brown"
            />
            <input
              type="password"
              placeholder={t("password")}
              className="w-full bg-LightCream rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-Brown"
            />
            <div className="flex items-center justify-between md:text-lg text-md">
              <a href="#">{t("forgotPassword")}</a>
              <label className="flex items-center md:text-lg text-md gap-2">
                <input type="checkbox" />
                <span>{t("rememberMe")}</span>
              </label>
            </div>
            <button
              type="submit"
              className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-md bg-Brown text-white group"
            >
              <span className="absolute inset-0 bg-[#c39f63] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out rounded-md z-0" />
              <span className="relative z-10 flex  md:text-lg text-md items-center gap-2 transition duration-200">
              {t("register")} <i className="ti ti-arrow-narrow-right" />
              </span>
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="md:text-2xl text-lg font-semibold mb-6">{t("registerTitle")}</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder={t("name")}
              className="w-full bg-LightCream rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-Brown"
            />
            <input
              type="email"
              placeholder={t("email")}
              className="w-full bg-LightCream rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-Brown"
            />
            <input
              type="password"
              placeholder={t("password")}
              className="w-full bg-LightCream rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-Brown"
            />
            <input
              type="password"
              placeholder={t("confirmPassword")}
              className="w-full bg-LightCream rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-Brown"
            />
            <button
              type="submit"
              className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-md bg-Brown text-white group"
            >
              <span className="absolute inset-0 bg-[#c39f63] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out rounded-md z-0" />
              <span className="relative z-10  md:text-lg text-md flex items-center gap-2 transition duration-200">
                {t("login")}<i className="ti ti-arrow-narrow-right" />
              </span>
            </button>
          </form>
          <p className="mt-4  md:text-lg text-md text-center">
            {t("haveAccount")}{" "}
            <a href="#" className="text-[#511f1f] font-medium">
              {t("loginLink")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
