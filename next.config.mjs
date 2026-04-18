/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "/**",
      },
    ],
    domains: [
      "localhost",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "graph.facebook.com",
      "res.cloudinary.com",
      "cdn.pixabay.com",
      "images.pexels.com",
    ],
  },
};

export default nextConfig;
