"use client"

import { useTranslations } from "next-intl"
import { Check, Scale } from "lucide-react"

export default function LawyerSection() {
  const t = useTranslations()

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 w-full h-full">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gray-400"
              style={{
                left: `${i * 2}%`,
                height: "100%",
                transform: `translateX(${Math.sin(i * 0.5) * 20}px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Image and Stats */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="relative bg-gray-300 rounded-lg overflow-hidden aspect-[7/9] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-4xl font-light">
                700 × 900
              </div>

              {/* Circular Logo */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Scale className="w-8 h-8 text-amber-700" />
                  </div>
                  <div className="text-xs font-semibold text-gray-800 leading-tight">
                    <div>Lawyer</div>
                    <div>For</div>
                    <div>You</div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute bottom-8 left-8 bg-gray-900 text-white p-6 rounded-lg shadow-xl max-w-xs">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">{t("stats.expertRepresentation")}</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Subtitle */}
            <div className="text-amber-600 font-medium text-lg lg:text-xl">{t("subtitle")}</div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              {t("mainHeading")}
            </h1>

            {/* Description */}
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed max-w-2xl">{t("description")}</p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                t("features.expertRepresentation"),
                t("features.comprehensiveSolutions"),
                t("features.defendingFreedom"),
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="text-gray-800 text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t("cta.learnMore")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
