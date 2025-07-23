import HeroSection from "@/_components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore real-life legal case studies that highlight our expertise and success stories.",
  keywords: ["case studies", "legal success", "law firm cases", "legal battles", "real cases"],
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroSection/>
      {children}
    </>
  );
}
