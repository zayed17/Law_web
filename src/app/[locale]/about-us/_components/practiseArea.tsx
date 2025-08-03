"use client"

import type React from "react"

import { useTranslations } from "next-intl"
import { useRef, useState } from "react"
import { Scale, Target, Building2, Network } from "lucide-react"

interface PracticeArea {
  id: string
  icon: React.ComponentType<{ className?: string }>
  titleKey: string
  descriptionKey: string
  learnMoreKey: string
}

export default function PracticeArea() {
  const t = useTranslations("practiceArea")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const practiceAreas: PracticeArea[] = [
    {
      id: "criminal",
      icon: Scale,
      titleKey: "criminal.title",
      descriptionKey: "criminal.description",
      learnMoreKey: "learnMore",
    },
    {
      id: "family",
      icon: Target,
      titleKey: "family.title",
      descriptionKey: "family.description",
      learnMoreKey: "learnMore",
    },
    {
      id: "realEstate",
      icon: Building2,
      titleKey: "realEstate.title",
      descriptionKey: "realEstate.description",
      learnMoreKey: "learnMore",
    },
    {
      id: "business",
      icon: Network,
      titleKey: "business.title",
      descriptionKey: "business.description",
      learnMoreKey: "learnMore",
    },
    {
      id: "corporate",
      icon: Building2,
      titleKey: "corporate.title",
      descriptionKey: "corporate.description",
      learnMoreKey: "learnMore",
    },
    {
      id: "immigration",
      icon: Target,
      titleKey: "immigration.title",
      descriptionKey: "immigration.description",
      learnMoreKey: "learnMore",
    },
  ]

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#f1f0ed] px-0" aria-labelledby="practice-area-heading">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 id="practice-area-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {t("sectionTitle")}
        </h2>
      </div>

      {/* Scrollable Container - Full Width */}
      <div className="relative w-full pl-[9%]">
        <div
          ref={scrollContainerRef}
          className={`flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 pl-4 md:pl-6 lg:pl-8 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {practiceAreas.map((area) => {
            const IconComponent = area.icon
            return (
              <div
                key={area.id}
                className="flex-shrink-0 w-72 md:w-80 lg:w-96 bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 select-none"
              >
                {/* Icon */}
                <div className="flex mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-50 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-amber-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-start space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{t(area.titleKey)}</h3>
                  <p className="text-base md:text-lg font-josefin-sans leading-relaxed min-h-[3rem]">
                    {t(area.descriptionKey)}
                  </p>
                  <button className="inline-flex items-center font-josefin-sans underline hover:text-amber-600 font-medium transition-colors duration-200 group">
                    {t(area.learnMoreKey)}
                  </button>
                </div>
              </div>
            )
          })}
          {/* Add some right padding to the last item */}
          <div className="flex-shrink-0 w-4 md:w-6 lg:w-8"></div>
        </div>
      </div>
    </section>
  )
}
