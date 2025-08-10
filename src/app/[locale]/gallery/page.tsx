import { useTranslations } from "next-intl";
import GalleryGrid from "./_components/gallery";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 space-y-8 sm:space-y-10 md:space-y-12 bg-white">
      <GalleryGrid />
    </div>
  );
}
