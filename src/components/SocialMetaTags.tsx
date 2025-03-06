'use client';

import Head from 'next/head';

interface SocialMetaTagsProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  type?: string;
}

export const SocialMetaTags = ({
  title,
  description,
  url,
  imageUrl = 'https://www.lyge.dev/logosaas.png',
  type = 'website',
}: SocialMetaTagsProps) => {
  return (
    <Head>
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="Lyge Digital" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
    </Head>
  );
}; 