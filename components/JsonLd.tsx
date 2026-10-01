import { categories, featuredProducts, site, siteUrl } from "@/lib/site";

// Structured data (schema.org) agar Google memahami profil perusahaan.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: site.name,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/opengraph-image.jpg`,
        description: site.description,
        slogan: site.tagline,
        foundingDate: String(site.foundingYear),
        email: site.email,
        areaServed: { "@type": "Country", name: "Indonesia" },
        knowsAbout: [
          "Electrical spare parts",
          "Suku cadang kelistrikan otomotif",
          "Pertambangan",
          "Kehutanan",
          "Oil & Gas",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: site.email,
          areaServed: "ID",
          availableLanguage: ["id", "en"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Produk Lourdes Autoparts",
          itemListElement: [
            ...featuredProducts.map((p) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: p.name,
                description: p.desc,
              },
            })),
            ...categories.map((c) => ({
              "@type": "OfferCatalog",
              name: c,
            })),
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        inLanguage: "id-ID",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
