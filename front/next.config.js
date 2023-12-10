/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const withNextIntl = require("next-intl/plugin")("./src/i18n/i18n.ts");

module.exports = withNextIntl(nextConfig);
