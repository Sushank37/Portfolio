/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['example.com'], // Add domains for external images if needed
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Required for static export
}

module.exports = nextConfig
