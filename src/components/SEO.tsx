/**
 * SEO Component Implementation Requirements
 * 
 * Required Assets:
 * 1. Images:
 *    - /og-image.jpg (1200x630px) - Facebook/OG
 *    - /twitter-image.jpg (1200x600px) - Twitter
 *    - /linkedin-image.jpg (1200x627px) - LinkedIn
 *    - /favicon.ico (multi-size ico file)
 *    - /apple-touch-icon.png (180x180px)
 *    - /favicon-32x32.png
 *    - /favicon-16x16.png
 * 
 * 2. Configuration Files:
 *    - /site.webmanifest (PWA manifest)
 *    - /browserconfig.xml (IE11/Edge config)
 *    - /robots.txt
 *    - /sitemap.xml
 * 
 * 3. Dependencies:
 *    - react-helmet-async: For managing document head
 *    - schema-dts: For TypeScript Schema.org types
 * 
 * 4. Environment Variables Required:
 *    - NEXT_PUBLIC_SITE_URL: Base URL of the website
 *    - NEXT_PUBLIC_SITE_NAME: Name of the website
 *    - NEXT_PUBLIC_TWITTER_HANDLE: Twitter username
 *    - NEXT_PUBLIC_LINKEDIN_PROFILE: LinkedIn profile URL
 * 
 * Implementation Notes:
 * - All images should be optimized and served in WebP format with fallbacks
 * - Implement preconnect for external domains
 * - Add structured data for Organization and WebSite
 * - Include JSON-LD for rich snippets
 * - Implement dynamic meta tags based on page content
 * - Add comprehensive social media tags
 * - Include language and region tags
 * - Implement proper canonical URLs
 * - Add security headers
 */

import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  /** Language code (e.g., 'en-US') */
  lang?: string;
  /** Article publish date for blog posts */
  publishDate?: string;
  /** Author name for blog posts */
  author?: string;
  /** Additional structured data */
  structuredData?: object;
  /** Additional meta tags */
  additionalMetaTags?: Array<{ name: string; content: string }>;
}

export const SEO = ({
  title = 'IntelliSync Solutions - Innovative Technology Solutions',
  description = 'Transform your business with IntelliSync Solutions cutting-edge technology services. We specialize in AI, cloud computing, and custom software development.',
  keywords = 'IntelliSync Solutions, technology solutions, digital transformation, AI, cloud computing, software development',
  image = '/og-image.jpg',
  url = process.env.NEXT_PUBLIC_SITE_URL,
  type = 'website',
  lang = 'en-US',
  publishDate,
  author,
  structuredData,
  additionalMetaTags = [],
}: SEOProps) => {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'IntelliSync Solutions';
  const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@intellisync';
  
  // Base structured data for the organization
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: url,
    logo: `${url}/logo.png`,
    sameAs: [
      `https://twitter.com/${twitterHandle.replace('@', '')}`,
      process.env.NEXT_PUBLIC_LINKEDIN_PROFILE,
    ],
  };

  return (
    <Helmet>
      {/* Basic metadata */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Preconnect to required origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content={siteName} />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={image} />
      
      {/* Article specific meta tags */}
      {publishDate && <meta property="article:published_time" content={publishDate} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || baseStructuredData)}
      </script>
      
      {/* Additional meta tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
    </Helmet>
  );
};
