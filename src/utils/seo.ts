interface SEOData {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'article' | 'website';
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

export function generateStructuredData(data: SEOData) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": data.type === 'article' ? "Article" : "WebPage",
    "headline": data.title,
    "description": data.description,
    "url": data.url || window.location.href,
    "publisher": {
      "@type": "Organization",
      "name": "Landlord Ledger",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/lovable-uploads/3073533b-5f25-413c-962c-1e0463d705fd.png`
      }
    }
  };

  if (data.type === 'article') {
    Object.assign(structuredData, {
      "author": {
        "@type": "Person",
        "name": data.author || "Landlord Ledger Team"
      },
      "datePublished": data.publishedDate,
      "dateModified": data.modifiedDate || data.publishedDate,
      "image": data.image,
      "articleSection": data.category,
      "keywords": data.tags?.join(', ')
    });
  }

  return structuredData;
}

export function injectStructuredData(data: SEOData) {
  // Remove existing structured data
  const existingScript = document.getElementById('structured-data');
  if (existingScript) {
    existingScript.remove();
  }

  // Create new structured data script
  const script = document.createElement('script');
  script.id = 'structured-data';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(generateStructuredData(data));
  document.head.appendChild(script);
}

export function generateSitemap(articles: any[]) {
  const baseUrl = window.location.origin;
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/market-analysis</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/market-trends</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/key-deals</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/events</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

  articles.forEach(article => {
    const url = `${baseUrl}/article/${article.slug || article.id}`;
    const lastmod = new Date(article.updated_at).toISOString().split('T')[0];
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

export function downloadSitemap(articles: any[]) {
  const sitemap = generateSitemap(articles);
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}