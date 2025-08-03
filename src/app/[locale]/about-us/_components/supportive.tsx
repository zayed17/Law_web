"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { Scale, Check } from "lucide-react"

export default function SupportiveLawyers() {
  const t = useTranslations("supportiveLawyers")

  const features = [
    { key: "feature1", icon: Check },
    { key: "feature2", icon: Check },
    { key: "feature3", icon: Check },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white" aria-labelledby="supportive-lawyers-heading">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Image with Overlays */}
          <div className="relative order-2 lg:order-1">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="lines" patternUnits="userSpaceOnUse" width="2" height="100">
                      <line x1="1" y1="0" x2="1" y2="100" stroke="#d1d5db" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#lines)" />
                </svg>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative aspect-[700/900] w-full bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=900&width=700"
                alt={t("imageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />

              {/* Circular Logo Badge */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12">
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                  {/* Circular Text */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                      </defs>
                      <text className="text-[8px] md:text-[6px] fill-gray-700 font-medium">
                        <textPath href="#circle" startOffset="0%">
                          {t("circularText")}
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  {/* Center Icon */}
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Scale className="w-4 h-4 md:w-5 md:h-5 text-amber-700" />
                  </div>
                </div>
              </div>

              {/* Statistics Overlay */}
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 shadow-xl">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{t("statisticNumber")}</div>
                  <div className="text-sm md:text-base text-gray-300">{t("statisticLabel")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            {/* Header */}
            <div>
              <p className="text-amber-600 font-medium text-sm md:text-base font-josefin-sans mb-4 tracking-wide">{t("sectionTitle")}</p>
              <h2
                id="supportive-lawyers-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
                {t("mainHeading")}
              </h2>
              <p className="text-base md:text-lg font-josefin-sans leading-relaxed">{t("description")}</p>
            </div>

            {/* Features List */}
            <div className="space-y-4 md:space-y-5 p-5 bg-[#f1f0ed] rounded-lg">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.key} className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 md:w-7 md:h-7 bg-amber-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-amber-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium text-base md:text-lg">{t(`features.${feature.key}`)}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-amber-900 hover:bg-amber-800 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2">
                {t("learnMore")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
