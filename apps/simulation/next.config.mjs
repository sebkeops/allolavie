/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Images servies en local depuis /public/simulation (cf. lot 0).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
