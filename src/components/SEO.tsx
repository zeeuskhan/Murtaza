import React from 'react';

export const BusinessSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "e-Mitra Bhilwara",
    "image": "https://jansoochna.vercel.app/logo.png",
    "@id": "https://jansoochna.vercel.app/",
    "url": "https://jansoochna.vercel.app/",
    "telephone": "+916350489219",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhilwara",
      "addressLocality": "Bhilwara",
      "addressRegion": "Rajasthan",
      "postalCode": "311001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.3463,
      "longitude": 74.6364
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://wa.me/916350489219"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
