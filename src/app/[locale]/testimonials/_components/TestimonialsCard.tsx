"use client";

import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TestimonialsPage() {
  const t = useTranslations();

  const testimonials = t.raw("testimonials") as {
    name: string;
    role: string;
    message: string;
    rating: number;
  }[];
  return (
    <section>
      <div className="grid  gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#faf8f7] rounded-3xl p-6 flex flex-col justify-between h-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm font-medium">
                Img
              </div>
              <div>
                <h3 className="text-lg md:text-2xl  font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="md:text-md text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>

            <p className="text-gray-800  text-sm md:text-md leading-relaxed mb-6">
              {testimonial.message}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-9.983z" />
              </svg>

              <div className="flex gap-1" dir="ltr">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
