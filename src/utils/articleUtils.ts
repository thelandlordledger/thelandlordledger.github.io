export function generateArticleUrl(article: { slug?: string; id: string; title: string }) {
  // Prefer slug if available, otherwise use id
  if (article.slug) {
    return `/article/${article.slug}`;
  }
  return `/article/${article.id}`;
}

export function generateCanonicalUrl(article: { slug?: string; id: string; title: string }) {
  const baseUrl = window.location.origin;
  return `${baseUrl}${generateArticleUrl(article)}`;
}

export function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim() // Remove leading/trailing spaces
    .substring(0, 60); // Limit length
}

export function formatArticleDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getReadingTime(content?: string): number {
  if (!content) return 5; // Default reading time
  
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function generateArticleDescription(article: { title: string; excerpt?: string; subtitle?: string; content?: string }): string {
  if (article.excerpt) return article.excerpt;
  if (article.subtitle) return article.subtitle;
  
  // Extract first paragraph from content if available
  if (article.content) {
    const firstParagraph = article.content
      .split('\n')
      .find(line => line.trim().length > 50);
    
    if (firstParagraph) {
      return firstParagraph.substring(0, 160) + '...';
    }
  }
  
  return `${article.title} - Expert analysis and insights from Landlord Ledger`;
}

export const shareUrls = {
  twitter: (url: string, title: string) => 
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  
  linkedin: (url: string) => 
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  
  facebook: (url: string) => 
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  
  email: (url: string, title: string, description?: string) => 
    `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description || title)}%0A%0A${encodeURIComponent(url)}`,
};