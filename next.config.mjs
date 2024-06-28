/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      ppr: 'incremental', //allows to adopt PPR for specific routes
    },
  };
   
//module.exports = nextConfig;

export default nextConfig;
