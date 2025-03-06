'use client';

import { StructuredData } from './StructuredData';

interface LocalBusinessSchemaProps {
  name: string;
  image: string;
  telephone?: string;
  email?: string;
  url: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: string;
    longitude: string;
  };
  openingHours?: {
    days: string[];
    opens: string;
    closes: string;
  };
  priceRange?: string;
}

export const LocalBusinessSchema = ({
  name,
  image,
  telephone,
  email,
  url,
  address,
  geo,
  openingHours,
  priceRange
}: LocalBusinessSchemaProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': name,
    'image': image,
    'url': url,
    ...(telephone && { 'telephone': telephone }),
    ...(email && { 'email': email }),
    'address': {
      '@type': 'PostalAddress',
      ...(address.streetAddress && { 'streetAddress': address.streetAddress }),
      'addressLocality': address.addressLocality,
      'addressRegion': address.addressRegion,
      ...(address.postalCode && { 'postalCode': address.postalCode }),
      'addressCountry': address.addressCountry
    },
    ...(geo && {
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': geo.latitude,
        'longitude': geo.longitude
      }
    }),
    ...(openingHours && {
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': openingHours.days,
        'opens': openingHours.opens,
        'closes': openingHours.closes
      }
    }),
    ...(priceRange && { 'priceRange': priceRange })
  };

  return <StructuredData data={structuredData} id="local-business-schema" />;
}; 