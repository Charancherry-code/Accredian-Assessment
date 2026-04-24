export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Accredian Enterprise",
    "url": "https://enterprise.accredian.com",
    "description": "Enterprise learning solutions for data science, AI, and analytics",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "enterprise@accredian.com"
    }
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
