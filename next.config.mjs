/** @type {import('next').NextConfig} */
/** @type {import('tailwindcss').Config} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: ["pixabay.com", "cdn.pixabay.com"], // ✅ allow Pixabay images
  },
};

export default nextConfig;
