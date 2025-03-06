'use client';

import Script from 'next/script';

interface StructuredDataProps {
  data: Record<string, any>;
  id: string;
}

export const StructuredData = ({ data, id }: StructuredDataProps) => {
  return (
    <Script id={id} type="application/ld+json">
      {JSON.stringify(data)}
    </Script>
  );
}; 