import { useEffect } from 'react';

interface ArticleMetaProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  publishedDate?: string;
  author?: string;
  category?: string;
}

export function ArticleMeta({ 
  title, 
  description, 
  image, 
  url, 
  publishedDate, 
  author,
  category 
}: ArticleMetaProps) {
  useEffect(() => {
    // Set document title
    document.title = `${title} | Landlord Ledger`;
    
    // Remove existing meta tags that we'll be updating
    const tagsToRemove = [
      'meta[property^="og:"]',
      'meta[name^="twitter:"]',
      'meta[name="description"]',
      'meta[name="author"]',
      'meta[property="article:"]',
      'link[rel="canonical"]'
    ];
    
    tagsToRemove.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });

    // Create and add new meta tags
    const metaTags = [
      // Basic meta
      { name: 'description', content: description || title },
      { name: 'author', content: author || 'Landlord Ledger' },
      
      // Open Graph tags
      { property: 'og:title', content: title },
      { property: 'og:description', content: description || title },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: url || window.location.href },
      { property: 'og:site_name', content: 'Landlord Ledger' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@landlordledger' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description || title },
      
      // Article specific tags
      ...(publishedDate ? [{ property: 'article:published_time', content: publishedDate }] : []),
      ...(author ? [{ property: 'article:author', content: author }] : []),
      ...(category ? [{ property: 'article:section', content: category }] : []),
    ];

    // Add image tags if image exists
    if (image) {
      metaTags.push(
        { property: 'og:image', content: image },
        { property: 'og:image:alt', content: title },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:image', content: image },
        { name: 'twitter:image:alt', content: title }
      );
    }

    // Create and append meta tags
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if ('name' in tag) meta.name = tag.name;
      if ('property' in tag) meta.setAttribute('property', tag.property);
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Add canonical link
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = url || window.location.href;
    document.head.appendChild(canonical);

    // Cleanup function to remove tags when component unmounts
    return () => {
      tagsToRemove.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.remove());
      });
      
      // Reset title
      document.title = 'Landlord Ledger';
    };
  }, [title, description, image, url, publishedDate, author, category]);

  return null; // This component doesn't render anything
}