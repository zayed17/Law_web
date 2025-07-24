import HeroSection from "@/_components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any inquiries, support, or feedback.",
  keywords: ["contact", "support", "inquiries", "help", "customer service"],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroSection />
      {children}
    </>
  );
}
