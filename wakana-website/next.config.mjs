/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/gemini-prod-us-west1-409903-assets/**',
      },
    ],
  },
};

export default nextConfig;