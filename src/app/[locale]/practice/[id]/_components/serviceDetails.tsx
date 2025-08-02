import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  key: string;
  href?: string;
}

export default function ServicesSection() {
  const t = useTranslations();

  const services: ServiceItem[] = [
    { key: "healthcare_policy", href: "/services/healthcare" },
    { key: "personal_injury", href: "/services/personal-injury" },
    { key: "commercial_law", href: "/services/commercial" },
    { key: "criminal_law", href: "/services/criminal" },
    { key: "artificial_intelligence", href: "/services/ai" },
    { key: "corporate_governance", href: "/services/corporate" },
  ];

  return (
    <section 
      className="w-full py-8 md:py-12 lg:py-16 bg-gray-50 font-serif"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 md:col-span-8">
            <div className="relative w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://placehold.co/600x400"
                alt={t("services.image_alt")}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Services List Section */}
          <div className="order-1 lg:order-2 space-y-6 col-span-full md:col-span-4 bg-[#f2f2f2] p-6 rounded-lg shadow-md">
            <header>
              <h2 
                id="services-heading"
                className="text-2xl md:text-3xl lg:text-2xl font-semibold text-gray-900 mb-6 md:mb-8"
              >
                {t("services.title")}
              </h2>
            </header>

            <nav aria-label={t("services.nav_label")}>
              <ul className="space-y-3 md:space-y-4">
                {services.map((service) => (
                  <li key={service.key}>
                    <a
                      href={service.href || "#"}
                      className="group flex items-center justify-between p-4 md:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                      aria-describedby={`${service.key}-description`}
                    >
                      <span 
                        className="text-base  font-medium  flex-1"
                        id={`${service.key}-description`}
                      >
                        {t(`services.items.${service.key}`)}
                      </span>
                      <ArrowRight 
                        className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200 rtl:rotate-180" 
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}