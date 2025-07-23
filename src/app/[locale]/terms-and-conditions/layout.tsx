import HeroSection from "@/_components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the terms and conditions for using our services and website.",
  keywords: ["terms", "conditions", "user agreement", "legal", "policy"],
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <HeroSection />
      {children}
    </>
  );
}
