import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lyge Digital',
    short_name: 'Lyge',
    description: 'Solusi digital terbaik untuk UMKM di Indonesia',
    start_url: '/',
    display: 'standalone',
    background_color: '#EAEEFE',
    theme_color: '#7f6ee6',
    icons: [
      {
        src: '/logosaas.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logosaas.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
} 