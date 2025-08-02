import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: { domains: ["placehold.co"] },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
