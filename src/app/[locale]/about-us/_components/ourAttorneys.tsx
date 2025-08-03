"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface Attorney {
  id: string
  titleKey: string
  nameKey: string
  image: string
}

export default function OurAttorneys() {
  const t = useTranslations("ourAttorneys")

  const attorneys: Attorney[] = [
    {
      id: "ceo",
      titleKey: "ceo.title",
      nameKey: "ceo.name",
      image: "/placeholder.svg?height=860&width=860",
    },
    {
      id: "criminal",
      titleKey: "criminal.title",
      nameKey: "criminal.name",
      image: "/placeholder.svg?height=860&width=860",
    },
    {
      id: "chief",
      titleKey: "chief.title",
      nameKey: "chief.name",
      image: "/placeholder.svg?height=860&width=860",
    },
    {
      id: "assistant",
      titleKey: "assistant.title",
      nameKey: "assistant.name",
      image: "/placeholder.svg?height=860&width=860",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white" aria-labelledby="our-attorneys-heading">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 id="our-attorneys-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("sectionTitle")}
          </h2>
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {attorneys.map((attorney) => (
            <div
              key={attorney.id}
              className="group bg-white rounded-2xl border border-gray-200 p-4 md:p-6 hover:border-black transition-all duration-300 hover:-translate-y-1"
            >
              {/* Attorney Image */}
              <div className="relative aspect-square w-full mb-4 md:mb-6 overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={attorney.image || "/placeholder.svg"}
                  alt={t(`${attorney.titleKey}`) + " - " + t(`${attorney.nameKey}`)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Attorney Info */}
              <div className="space-y-2 mb-4">
                <h3 className="text font-semibold font-josefin-sans text-[#4b2524] leading-tight">{t(attorney.titleKey)}</h3>
                <p className="text-base md:text-lg font-serif font-semibold">{t(attorney.nameKey)}</p>
              </div>

              {/* Arrow Button */}
              <div className="flex justify-end">
                <button
                  className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  aria-label={`View ${t(attorney.titleKey)} profile`}
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
