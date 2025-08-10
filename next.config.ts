import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: { domains: ["placehold.co","law-web-om.vercel.app"] },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
