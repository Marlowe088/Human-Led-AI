/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Preserve the original site's slugs so no existing links break
      { source: '/refund-policy', destination: '/cookie-policy', permanent: true },
      { source: '/a-more-human-led-way-to-approach-ai', destination: '/letters', permanent: true },
    ];
  },
};

export default nextConfig;
