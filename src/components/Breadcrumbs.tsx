'use client';

import Link from 'next/link';
import { StructuredData } from './StructuredData';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  // Prepare structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `https://www.lyge.dev${item.href === '/' ? '' : item.href}`
    }))
  };

  return (
    <>
      <StructuredData data={structuredData} id="breadcrumb-schema" />
      <nav aria-label="Breadcrumb" className={`py-3 ${className}`}>
        <ol className="flex flex-wrap items-center text-sm">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-500">/</span>}
              {item.isCurrent ? (
                <span className="font-medium text-indigo-600" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-gray-600 hover:text-indigo-600"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}; 