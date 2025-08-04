import { useTranslations } from "next-intl";
import Image from "next/image";
import { Phone, MapPin, Mail, Check } from "lucide-react";

interface ServiceFeature {
  key: string;
}

interface RelatedService {
  key: string;
  href?: string;
}

export default function LawDetails() {
  const t = useTranslations();

  const serviceFeatures: ServiceFeature[] = [
    { key: "legal_expertise" },
    { key: "business_solutions" },
    { key: "cost_effective" },
    { key: "international_trade" },
    { key: "quality_standards" },
    { key: "corporate_compliance" },
    { key: "permits_licenses" },
    { key: "corporate_representation" },
    { key: "nonprofit_companies" },
    { key: "corporate_social_responsibility" },
    { key: "healthcare_policy" },
    { key: "personal_injury_law" },
  ];

  const relatedServices: RelatedService[] = [
    { key: "criminal_law", href: "/services/criminal-law" },
    { key: "commercial_law", href: "/services/commercial-law" },
    { key: "personal_injury_law", href: "/services/personal-injury" },
  ];

  const contactInfo = {
    phone: "+123 456 7890",
    address: "طريق الشروق لاين استراليا 3016",
    email: "hello@aicubes.co",
  };

  return (
    <div className="w-full pb-10  bg-gray-50 font-josefin-sans">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8 ">
            {/* Header */}
            <header className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pl-14 text-gray-900">
                {t("commercial_law.title")}
              </h1>

              <div className="prose prose-lg text-gray-700 max-w-[60rem] mx-auto pb-10">
                <p className="leading-relaxed font-josefin-sans">
                  {t("commercial_law.description_1")}
                </p>
                <p className="leading-relaxed font-josefin-sans">
                  {t("commercial_law.description_2")}
                </p>
              </div>
            </header>

            {/* Service Features */}
            <section aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {t("commercial_law.features_title")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {serviceFeatures.map((feature) => (
                  <div
                    key={feature.key}
                    className="flex items-start space-x-3 rtl:space-x-reverse p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">
                      {t(`commercial_law.features.${feature.key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Related Services */}
            <section
              className="bg-[#f2f2f2] rounded-lg shadow-sm p-6"
              aria-labelledby="related-services-heading"
            >
              <h3
                id="related-services-heading"
                className="text-xl font-bold text-gray-900 mb-4"
              >
                {t("commercial_law.related_services")}
              </h3>

              <nav>
                <ul className="space-y-3 ">
                  {relatedServices.map((service) => (
                    <li key={service.key}>
                      <a
                        href={service.href || "#"}
                        className="flex items-center justify-between p-3 rounded-md bg-white hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <span className="text-gray-700 group-hover:text-gray-900">
                          {t(`commercial_law.services.${service.key}`)}
                        </span>
                        <span className="text-gray-400 group-hover:text-gray-600 text-sm rtl:mr-auto ltr:ml-auto">
                          {t(`commercial_law.services.${service.key}_en`)}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>

            {/* Contact Information */}
            <section
              className="bg-gray-900 text-white rounded-lg shadow-lg p-6"
              aria-labelledby="contact-heading"
            >
              <h3 id="contact-heading" className="text-xl font-bold mb-6">
                {t("commercial_law.need_help")}
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t("commercial_law.contact.phone")}
                    </h4>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t("commercial_law.contact.address")}
                    </h4>
                    <p className="text-gray-300">{contactInfo.address}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t("commercial_law.contact.email")}
                    </h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
