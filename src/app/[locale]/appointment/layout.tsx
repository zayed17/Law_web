import HeroSection from "@/_components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule your appointment with our experts at your convenience.",
  keywords: ["appointment", "booking", "consultation", "schedule", "meeting"],
};

export default function AppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroSection/>
      {children}
    </>
  );
}
