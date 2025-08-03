import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ServiceBenefitsSection() {
  const t = useTranslations();

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 font-serif">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Main Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full aspect-[8/5] rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image
                src="/placeholder.svg"
                alt={t("service_benefits.image_alt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Benefits Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <header>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-6">
                {t("service_benefits.title")}
              </h2>
            </header>

            <div className="space-y-4 text-gray-700">
              <p className="text-base md:text-lg leading-relaxed font-josefin-sans">
                {t("service_benefits.description_1")}
              </p>
              
              <p className="text-base md:text-lg leading-relaxed font-josefin-sans">
                {t("service_benefits.description_2")}
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-lg p-6 md:p-8 lg:p-10">
          <header className="mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-josefin-sans">
              {t("service_benefits.values_title")}
            </h3>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg leading-relaxed m-0 font-josefin-sans">
              {t("service_benefits.values_description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}