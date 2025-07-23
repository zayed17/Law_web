import HeroSection from "@/_components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Legal Practices",
  description: "Explore the areas of law we specialize in — from corporate to criminal law.",
  keywords: ["legal practice", "law services", "attorney specialties", "practice areas", "legal firm"],
};

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroSection />
      {children}
    </>
  );
}
