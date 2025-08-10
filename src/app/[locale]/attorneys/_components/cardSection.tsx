"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

interface TeamMember {
  image: string;
  roleKey: string; // translation key
  nameKey: string; // translation key
}

export const teamMembers: TeamMember[] = [
  { image: "/images/member1.png", roleKey: "chiefJustice", nameKey: "williamThomas" },
  { image: "/images/member2.png", roleKey: "criminalLawyer", nameKey: "oliverSamanta" },
  { image: "/images/member3.png", roleKey: "ceoFounder", nameKey: "benjaminThomas" },
  { image: "/images/member4.png", roleKey: "assistantLawyer", nameKey: "ameliaSmith" },
  { image: "/images/member5.png", roleKey: "corporateLawyer", nameKey: "davidJohnson" },
  { image: "/images/member6.png", roleKey: "legalAdvisor", nameKey: "sophiaBrown" },
];

export function TeamSection() {
  const t = useTranslations();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = teamMembers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Team Cards */}
      <section className="grid gap-6 font-serif sm:grid-cols-2 lg:grid-cols-3 md:max-w-7xl mx-auto">
        {currentItems.map((member, idx) => (
          <div
            key={idx}
            className="border rounded-xl overflow-hidden flex flex-col p-6 bg-white hover:border-Brown transition"
          >
            <div className="bg-gray-200 aspect-square flex items-center rounded-xl justify-center">
              <Image
                src={member.image}
                alt={t(member.nameKey)}
                width={860}
                height={860}
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="text-gray-600 font-josefin-sans">{t(member.roleKey)}</p>
                <p className="font-bold text-lg font-josefin-sans">{t(member.nameKey)}</p>
              </div>
              <button className="bg-black text-white p-3 rounded-full hover:opacity-80 transition">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-8 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          ←
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-10 h-10 rounded-full ${
              currentPage === i + 1
                ? "bg-[#4B0E0E] text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
}
