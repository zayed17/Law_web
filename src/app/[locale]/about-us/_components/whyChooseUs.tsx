"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs2")

  const features = [
    { key: "feature1", number: "01" },
    { key: "feature2", number: "02" },
    { key: "feature3", number: "03" },
    { key: "feature4", number: "04" },
    { key: "feature5", number: "05" },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50" aria-labelledby="why-choose-us-heading">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-start mb-8 md:mb-12">
          <p className="text-amber-600 font-medium text-sm md:text-base mb-4 tracking-wide ">
            {t("sectionTitle")}
          </p>
          <h2
            id="why-choose-us-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight text-start max-w-7xl mx-auto "
          >
            {t("mainHeading")}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[740/635] w-full bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=635&width=740"
                alt={t("imageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            {/* Description Text */}
            <p className="text-gray-700 text-base md:text-lg font-serif leading-relaxed">{t("description")}</p>

            {/* Features List */}
            <div className="space-y-4 md:space-y-5">
              {features.map((feature) => (
                <div
                  key={feature.key}
                  className="flex items-center gap-4 p-3 bg-[#efedea] rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10  text-[#4b2524] rounded-full text-sm md:text-base font-semibold">
                      {feature.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-text-[#4b2524] font-semibold  text-sm md:text-base leading-relaxed">
                      {t(`features.${feature.key}`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
