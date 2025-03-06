'use client';

import { StructuredData } from './StructuredData';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export const FAQSchema = ({ items }: FAQSchemaProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': items.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };

  return <StructuredData data={structuredData} id="faq-schema" />;
}; 