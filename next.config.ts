import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  output: 'standalone',
};

export default nextConfig;
