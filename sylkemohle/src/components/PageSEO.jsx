import { useEffect } from "react";
import { DEFAULT_SEO, LOCAL_BUSINESS, SITE_NAME, SITE_URL } from "../config/site";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
  document.getElementById(id)?.remove();
}

function buildLocalBusinessSchema() {
  const { openingHours, ...business } = LOCAL_BUSINESS;
  return {
    "@context": "https://schema.org",
    "@type": "Optician",
    name: business.name,
    image: DEFAULT_SEO.image,
    url: SITE_URL,
    telephone: business.telephone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.locality,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
    openingHoursSpecification: openingHours.map(({ dayOfWeek, opens, closes }) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek,
      opens,
      closes,
    })),
    priceRange: "R$$",
    areaServed: {
      "@type": "City",
      name: "Piet Retief",
    },
  };
}

function buildServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description.join(" "),
    provider: {
      "@type": "Optician",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Piet Retief",
    },
    offers: {
      "@type": "Offer",
      price: service.price.replace(/[^\d.]/g, "") || undefined,
      priceCurrency: "ZAR",
    },
  };
}

export default function PageSEO({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  path = "/",
  image = DEFAULT_SEO.image,
  imageAlt = DEFAULT_SEO.imageAlt,
  service = null,
  includeLocalBusiness = false,
}) {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertLink("canonical", canonicalUrl);

    const ogTags = {
      "og:title": title,
      "og:description": description,
      "og:url": canonicalUrl,
      "og:type": service ? "website" : "website",
      "og:site_name": SITE_NAME,
      "og:image": image,
      "og:image:alt": imageAlt,
      "og:locale": "en_ZA",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      upsertMeta(`meta[property="${property}"]`, { property, content });
    });

    const twitterTags = {
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
      "twitter:image:alt": imageAlt,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      upsertMeta(`meta[name="${name}"]`, { name, content });
    });

    if (includeLocalBusiness) {
      upsertJsonLd("local-business-schema", buildLocalBusinessSchema());
    } else {
      removeJsonLd("local-business-schema");
    }

    if (service) {
      upsertJsonLd("service-schema", buildServiceSchema(service));
    } else {
      removeJsonLd("service-schema");
    }
  }, [title, description, canonicalUrl, image, imageAlt, service, includeLocalBusiness]);

  return null;
}
