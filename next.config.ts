import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "creolab-design.com" }],
        destination: "https://creolab-design.hr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.creolab-design.com" }],
        destination: "https://creolab-design.hr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.creolab-design.hr" }],
        destination: "https://creolab-design.hr/:path*",
        permanent: true,
      },
      { source: "/", destination: "/hr", permanent: true },
    ];
  },
};

export default nextConfig;
