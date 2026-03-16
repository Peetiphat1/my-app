import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'preview.redd.it',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.recommend.my',
      },
      { hostname: 'thumbs.dreamstime.com' },
      { hostname: 'images.ctfassets.net' },
      { hostname: 'cdn.shopify.com' },
      { hostname: 'www.laskasas.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' 
      },
      new URL('https://avatars.githubusercontent.com/u/**?v=4'),
    ],
  },

};

export default nextConfig;
