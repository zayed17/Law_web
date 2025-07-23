import HeroSection from "@/_components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions and get the support you need.",
  keywords: ["FAQ", "questions", "support", "help", "answers"],
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroSection />
      {children}
    </>
  );
}
