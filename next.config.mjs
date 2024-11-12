/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatar.vercel.sh',
          port: '',
        },
      ],
      domains: ['res.cloudinary.com'], 
    },
  };
  
  export default nextConfig;
  