import MainHero from "@/_components/MainHero";
import PracticeArea from "@/_components/PracticeArea";
import AboutUsSection from "@/_components/AboutUsSection";
import Testimonials from "@/_components/Testimonials";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Attorneys from "@/_components/Attorneys";
import Heritage from "@/_components/Heritage";
import SubscriberBar from "@/_components/SubscriberBar";

export default function Home() {
  return (
    <>
      <MainHero />
      <div className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 space-y-8 sm:space-y-10 md:space-y-12 bg-LightCream">
        <PracticeArea />
        <AboutUsSection />
        <Testimonials />
        <WhyChooseUs />
        <Attorneys />
        <Heritage />
        <SubscriberBar />
      </div>
    </>
  );
}
