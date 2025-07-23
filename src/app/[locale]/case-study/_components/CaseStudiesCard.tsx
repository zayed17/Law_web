"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { dummyImg } from "@/imports/images.imports";

export default function CaseStudiesCard({
  caseStudies,
}: {
  caseStudies: { title: string; description: string }[];
}) {
  return (
    <section>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((caseItem, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <Image
              src={dummyImg}
              alt={caseItem.title}
              width={600}
              height={400}
              className="w-full h-[500px] object-cover"
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-t from-[rgba(0,20,21,0.9)] via-[rgba(0,20,21,0.6)] to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 className="text-md md:text-2xl font-semibold mb-2 text-[#c39f63]">
                {caseItem.title}
              </h3>
              <p className="text-sm md:text-lg font-bold">
                {caseItem.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
