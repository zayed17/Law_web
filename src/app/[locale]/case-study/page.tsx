
import { getTranslations } from "next-intl/server";
import CaseStudiesCard from "./_components/CaseStudiesCard";

export default async function HomePage() {
    const t = await getTranslations('caseStudies');
    const caseStudies = t.raw('items') as Array<{
      title: string;
      description: string;
    }>;
  return (
    <div className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 space-y-8 sm:space-y-10 md:space-y-12 bg-white">

<CaseStudiesCard caseStudies={caseStudies} />    </div>
  );
}
