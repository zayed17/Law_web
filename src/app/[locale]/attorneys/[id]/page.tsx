import { useTranslations } from "next-intl";
import ProfileDetail from "../_components/detailPage";
import ContactForm from "../_components/form";

export default function page({params}:any) {
  console.log(params?.locale);
  
  const t = useTranslations();

  return (
    <div className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 space-y-8 sm:space-y-10 md:space-y-12 bg-white">
      <ProfileDetail isRTL={params?.locale == "en"} />
      <ContactForm isRTL={params?.locale == "en"} />
    </div>
  );
}
