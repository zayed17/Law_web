"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

export default function PricingSection() {
  const t = useTranslations("pricing");

  const plans = [
    {
      id: "premium",
      name: t("plans.premium.name"),
      price: "$455",
      period: t("plans.premium.period"),
      description: t("plans.premium.description"),
      features: [
        t("features.dangerousVehicleAccidents"),
        t("features.truckAccidents"),
        t("features.majorAccidentCollisions"),
        t("features.educationalConsultations"),
        t("features.businessConsultations"),
      ],
      buttonText: t("subscribeNow"),
      isPremium: true,
    },
    {
      id: "standard",
      name: t("plans.standard.name"),
      price: "$355",
      period: t("plans.standard.period"),
      description: t("plans.standard.description"),
      features: [
        t("features.dangerousVehicleAccidents"),
        t("features.truckAccidents"),
        t("features.majorAccidentCollisions"),
        t("features.educationalConsultations"),
        t("features.businessConsultations"),
      ],
      buttonText: t("subscribeNow"),
      isPremium: false,
    },
    {
      id: "basic",
      name: t("plans.basic.name"),
      price: "$255",
      period: t("plans.basic.period"),
      description: t("plans.basic.description"),
      features: [
        t("features.dangerousVehicleAccidents"),
        t("features.truckAccidents"),
        t("features.majorAccidentCollisions"),
        t("features.educationalConsultations"),
        t("features.businessConsultations"),
      ],
      buttonText: t("subscribeNow"),
      isPremium: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-32 px-4 font-serif" style={{ backgroundImage: `url(/images/pricing-shape.png)` ,backgroundRepeat:"no-repeat"}} >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-8 leading-relaxed">
            {t("title")}
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-[#dddddd] rounded-lg text-center relative transition-transform duration-1000 hover:-translate-y-4 cursor-pointer`}
            >
              <div className="border-b-2 p-6 rounded-2xl border-[#4b2524]">
                {/* Plan Name */}
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-sm font-josefin-sans mb-6 leading-relaxed px-2">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-[#4b2524]">
                    {plan.price}
                  </span>
                  <span className="text-sm font-josefin-sans mr-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="my-8 text-right mx-5">
                {plan.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start mb-3"
                  >
                    <Check className="h-4 w-4 text-[#4b2524] mx-2 flex-shrink-0" />
                    <span className="text-sm font-josefin-sans ml-3">
                      {feature}
                    </span>
                  </div>
                ))}
              {/* Button */}
              <button
                className={`w-2/4 py-3 my-8 ml-5 px-5 rounded hover:cursor-pointer justify-start flex text-sm font-medium transition-colors hover:bg-[#4b2524] hover:text-white duration-500 bg-white`}
              >
                {plan.buttonText}
                { <span className="ml-2">→</span>}
              </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
