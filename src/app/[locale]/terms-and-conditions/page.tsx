import FadeInOnScroll from "@/_components/FadeInOnScroll";
import { useTranslations } from "next-intl";

export default function TermsAndConditionsPage() {
  const t = useTranslations('terms');

  return (
    <section className="py-12 bg-white">
      <FadeInOnScroll delay={0.2}>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {t('section1Title')}

          </h2>
          <p className="text-base leading-relaxed text-gray-700">
          {t('section1Content')}
          </p>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.2}>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {t('section2Title')}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
          {t('section2Content')}
          </p>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.2}>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {t('section3Title')}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
          {t('section3Content')}
          </p>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.2}>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {t('section4Title')}
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
          {t('section4Content')}c
          </p>
        </div>
      </FadeInOnScroll>

    </section>
  );
}
