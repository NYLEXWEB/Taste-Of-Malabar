import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tasteofmalabarcaterers.com"),
  title: "Taste of Malabar Caterers | Best Wedding Catering Services in Kannur, Kerala",
  description: "Taste of Malabar is the best catering company in Kannur, Kerala. We specialize in wedding catering Kannur, traditional Kerala Sadya catering, birthday parties, and corporate events across Thalassery, Payyanur, Taliparamba, Iritty, and Mattannur. We offer affordable, low-cost catering packages with serving staff. FSSAI Licensed.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Catering services in Kannur",
    "Catering company Kannur",
    "Best catering in Kannur",
    "Catering Kannur Kerala",
    "Wedding catering Kannur",
    "Birthday party catering Kannur",
    "Corporate catering Kannur",
    "Reception catering Kannur",
    "Engagement function catering Kannur",
    "Sadya catering Kannur",
    "Onam sadya catering Kannur",
    "Catering services in Thalassery",
    "Catering in Payyanur",
    "Catering Taliparamba",
    "Catering Iritty",
    "Catering Mattannur",
    "Catering Kuthuparamba",
    "Catering Payyambalam",
    "Catering Sreekandapuram",
    "North Kerala catering services",
    "Affordable catering Kannur",
    "Home catering Kannur",
    "Bulk food catering Kannur",
    "Veg catering Kannur",
    "Non-veg catering Kannur",
    "Kerala style catering Kannur",
    "Catering with serving staff Kannur",
    "Online catering booking Kannur",
    "Best catering service near Kannur",
    "Catering for 500 people in Kannur",
    "Cheap wedding catering in Kannur",
    "Catering services near me Kannur",
    "Traditional Kerala catering Kannur",
    "Muslim wedding catering Kannur",
    "Hindu wedding catering Kannur",
    "Cheap catering services in Kannur",
    "Low cost catering Kannur",
    "Budget catering Kannur",
    "Catering at low price Kannur",
    "Economical catering services Kannur",
    "Best price catering Kannur",
    "Catering within budget Kannur",
    "Low budget wedding catering Kannur",
    "Reasonable catering Kannur",
    "Best Caterers in Kannur",
    "Wedding Caterers in Kannur",
    "Top Caterers in Kannur",
    "Best Wedding Caterers Kerala",
    "Malabar Catering Services",
    "Event Management Company Kannur",
    "Best Event Management Company in Kannur",
    "Wedding Event Management Kannur",
    "Luxury Wedding Catering Kerala",
    "Christian Wedding Catering Kannur",
    "Kerala Wedding Catering",
    "Housewarming Catering Kannur",
    "Biriyani Catering Kannur",
    "Traditional Malabar Food Catering",
    "Premium Catering Services Kerala",
    "Best Food Catering Service Near Me",
    "Catering and Event Management Near Me",
    "Wedding Catering Near Me",
    "Best Caterers Near Me",
    "Event Management Near Me",
    "Kerala Caterers",
    "Kannur Caterers",
    "Malabar Wedding Catering",
    "Wedding Food Service Kerala",
    "Luxury Event Management Kerala"
  ],
  authors: [{ name: "Taste of Malabar" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://tasteofmalabarcaterers.com",
    title: "Taste of Malabar Caterers | Best Wedding Catering Services in Kannur, Kerala",
    description: "Taste of Malabar is the best catering company in Kannur, Kerala. Specializing in wedding catering, traditional Kerala Sadya, and budget-friendly events in Thalassery, Payyanur, and Iritty.",
    siteName: "Taste of Malabar",
    images: [
      {
        url: "/gallery/best-caterers-in-kannur-buffet.jpg",
        width: 768,
        height: 1024,
        alt: "Taste of Malabar Premium Buffet Setup in Kannur"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Taste of Malabar Caterers | Best Wedding Catering Services in Kannur, Kerala",
    description: "Taste of Malabar is the best catering company in Kannur, Kerala. Providing high-quality wedding catering, Kerala Sadya, and live counters.",
    images: ["/gallery/best-caterers-in-kannur-buffet.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Taste of Malabar Caterers & Event Management Group",
      "image": "https://tasteofmalabarcaterers.com/logo.png",
      "@id": "https://tasteofmalabarcaterers.com/#localbusiness",
      "url": "https://tasteofmalabarcaterers.com",
      "telephone": "+916238599197",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Manjapalam",
        "addressLocality": "Kannur",
        "addressRegion": "Kerala",
        "postalCode": "670001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.8762,
        "longitude": 75.3738
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.youtube.com/@TasteofMalabarCaterersKannur",
        "https://www.instagram.com/taste_of_malabar_caterers/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Taste of Malabar Caterers & Event Management Group",
      "url": "https://tasteofmalabarcaterers.com",
      "logo": "https://tasteofmalabarcaterers.com/logo.png",
      "sameAs": [
        "https://www.youtube.com/@TasteofMalabarCaterersKannur",
        "https://www.instagram.com/taste_of_malabar_caterers/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which are the primary service areas of Taste of Malabar Caterers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Taste of Malabar is a Kannur and Thalassery-based catering company, but we provide our premium catering and event management services all over Kerala and Karnataka, including major areas like Taliparamba, Payyanur, Mattannur, Iritty, Koothuparamba, Kasaragod, Kozhikode, and Wayanad."
          }
        },
        {
          "@type": "Question",
          "name": "Do you specialize in community-specific wedding catering in Kannur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we are highly experienced in delivering authentic community-specific feasts, including traditional Muslim Wedding Catering, Hindu Wedding Feasts (including Poorna Sadya on banana leaf), and Christian Wedding Receptions with rich stews and meat roasts."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide complete event management and stage decoration services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, along with exceptional catering, we offer comprehensive event management, wedding planning, stage decoration, light and sound setups, and guest hosting services all over Kannur and nearby districts in Kerala."
          }
        },
        {
          "@type": "Question",
          "name": "What is your FSSAI certification status and food safety policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Taste of Malabar is fully FSSAI Licensed. We maintain strict safety and hygiene practices across our hot kitchens and transit logistics, using food-grade refrigerated vans and fresh, high-quality ingredients sourced from certified local vendors."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer affordable wedding catering or low budget event catering in Kannur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Taste of Malabar offers cheap wedding catering, low cost catering, and reasonable budget event packages in Kannur, Thalassery, and nearby localities. We organize customizable non-veg and veg menus with serving staff to ensure your event stays within budget."
          }
        },
        {
          "@type": "Question",
          "name": "Can we hire Taste of Malabar for home catering or bulk food catering in Thalassery and Payyanur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We specialize in home catering and bulk food catering for birthday parties, housewarming ceremonies, and corporate events in Thalassery, Payyanur, Taliparamba, Iritty, Sreekandapuram, and across North Kerala."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Catering and Event Management Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Taste of Malabar Caterers & Event Management Group"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Kannur" },
        { "@type": "AdministrativeArea", "name": "Thalassery" },
        { "@type": "AdministrativeArea", "name": "Payyanur" },
        { "@type": "AdministrativeArea", "name": "Taliparamba" },
        { "@type": "AdministrativeArea", "name": "Iritty" },
        { "@type": "AdministrativeArea", "name": "Mattannur" },
        { "@type": "AdministrativeArea", "name": "Kozhikode" },
        { "@type": "AdministrativeArea", "name": "Kasaragod" },
        { "@type": "AdministrativeArea", "name": "Wayanad" },
        { "@type": "AdministrativeArea", "name": "Kerala" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catering and Event Management Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wedding Catering Services in Kannur",
              "description": "Premium wedding catering, reception catering, and engagement function catering in Kannur and Thalassery. Includes Muslim wedding catering and Hindu wedding feasts."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Traditional Kerala Sadya & Onam Sadya Catering",
              "description": "Authentic vegetarian Kerala Sadya catering served on banana leaf, perfect for weddings, Onam celebrations, and housewarmings."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate Event & Birthday Party Catering",
              "description": "Professional corporate catering and birthday party catering packages in Kannur. Custom buffet packages with experienced serving staff."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Affordable Home Catering & Bulk Food Catering",
              "description": "Low budget home catering, cheap wedding catering packages, and bulk food delivery services in Payyanur, Iritty, and Taliparamba."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Live Cooking Counter Stations",
              "description": "Live food counter setups including Appam stations, claypot grills, parotta counters, and mocktails for active guest entertainment."
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tasteofmalabarcaterers.com"
        }
      ]
    }
  ];

  return (
    <html
      lang="en"
      className={`h-full scroll-smooth ${outfit.variable} ${cormorant.variable}`}
    >
      <head>
        {schemas.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
