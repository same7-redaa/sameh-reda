import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl?: string;
    lang?: 'en' | 'ar';
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = "Sameh Reda, Web Developer, Frontend Developer, Full Stack Developer, React, Sameh Reda Portfolio, سامح رضا, مطور ويب",
    canonicalUrl = "https://samehreda.com",
    lang = 'en'
}) => {
    const siteTitle = "Sameh Reda | Professional Web Developer";
    const fullTitle = title === "Home" ? siteTitle : `${title} | Sameh Reda`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Sameh Reda" />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/og-image.jpg" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="/og-image.jpg" />

            <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />

            {/* Schema.org Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Sameh Reda",
                    "alternateName": "سامح رضا",
                    "url": "https://samehreda.com",
                    "image": "https://samehreda.com/assets/avatar.jpg",
                    "sameAs": [
                        "https://www.facebook.com/SAME7.REDAA",
                        "https://twitter.com/samehreda",
                        "https://github.com/samehreda",
                        "https://www.linkedin.com/in/samehreda"
                    ],
                    "jobTitle": "Web Developer",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Freelance"
                    },
                    "description": description
                })}
            </script>
        </Helmet>
    );
};
