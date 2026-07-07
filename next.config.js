/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local placeholder art is SVG; allow Next to serve it through next/image.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
