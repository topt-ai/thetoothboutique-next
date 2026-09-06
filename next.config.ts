import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Hay un package-lock.json en el home del usuario; fijar la raíz evita que Turbopack lo tome.
  turbopack: { root: process.cwd() },
  poweredByHeader: false,
  // trailingSlash: false (default) redirige /ruta/ a /ruta con 308, igual que antes.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
        ],
      },
      {
        source: '/(.*)\\.(webp|png|jpg|svg)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  async redirects() {
    return [{ source: '/nosotros', destination: '/dra-melissa-renee', permanent: true }];
  },
};

export default nextConfig;
