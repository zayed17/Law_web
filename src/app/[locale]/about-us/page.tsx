import { useTranslations } from 'next-intl';
import SupportiveLawyersSection from './_components/supportive';
import WhyChooseUsSection from './_components/whyChooseUs';
import OurAttorneys from './_components/ourAttorneys';
import PracticeAreas from './_components/practiseArea';
import Testimonials from './_components/testimonial';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="">
      <SupportiveLawyersSection />
      <WhyChooseUsSection />
      <OurAttorneys />
      <PracticeAreas />
      <Testimonials />
    </div>
  );
}
