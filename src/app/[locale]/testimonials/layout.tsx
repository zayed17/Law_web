import HeroSection from "@/_components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "See what our clients have to say about our services.",
  keywords: ["testimonials", "client feedback", "reviews", "customer experience"],
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroSection />
      {children}
    </>
  );
}
