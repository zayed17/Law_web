"use client"

import { useTranslations } from "next-intl"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: string
  textKey: string
  authorNameKey: string
  authorTitleKey: string
  authorImage: string
}

export default function Testimonials() {
  const t = useTranslations("testimonials2")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const testimonials: Testimonial[] = [
    {
      id: "testimonial1",
      textKey: "testimonial1.text",
      authorNameKey: "testimonial1.authorName",
      authorTitleKey: "testimonial1.authorTitle",
      authorImage: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "testimonial2",
      textKey: "testimonial2.text",
      authorNameKey: "testimonial2.authorName",
      authorTitleKey: "testimonial2.authorTitle",
      authorImage: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "testimonial3",
      textKey: "testimonial3.text",
      authorNameKey: "testimonial3.authorName",
      authorTitleKey: "testimonial3.authorTitle",
      authorImage: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "testimonial4",
      textKey: "testimonial4.text",
      authorNameKey: "testimonial4.authorName",
      authorTitleKey: "testimonial4.authorTitle",
      authorImage: "/placeholder.svg?height=100&width=100",
    },
  ]

  const nextTestimonial = useCallback(() => {
    setIsTransitioning(true)
    setDirection("right")
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setIsTransitioning(true)
    setDirection("left")
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }, [testimonials.length])

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextTestimonial])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 ">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="text-amber-600  font-josefin-sans font-medium  text-sm md:text-xl mb-4 tracking-wide">
            {t("sectionTitle")}
          </p>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            {t("mainHeading")}
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="mx-12 md:mx-16 lg:mx-20">
            <div
              className={`bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16 transition-all duration-300 ${
                isTransitioning
                  ? direction === "right"
                    ? "opacity-0 transform translate-x-8"
                    : "opacity-0 transform -translate-x-8"
                  : "opacity-100 transform translate-x-0"
              }`}
            >
              {/* Testimonial Text */}
              <div className="text-right mb-8 md:mb-12">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-josefin-sans leading-relaxed font-medium">
                  {t(currentTestimonial.textKey)}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-end space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-amber-200">
                    <Image
                      src={currentTestimonial.authorImage || "/placeholder.svg"}
                      alt={t(currentTestimonial.authorNameKey)}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                    {t(currentTestimonial.authorNameKey)}
                  </h3>
                  <p className="text-base md:text-lg font-josefin-sans">{t(currentTestimonial.authorTitleKey)}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
