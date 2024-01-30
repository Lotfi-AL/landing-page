/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/landing-page",
    images: { unoptimized: true },
    experimental: { images: { unoptimized: true } },
};

export default nextConfig;
