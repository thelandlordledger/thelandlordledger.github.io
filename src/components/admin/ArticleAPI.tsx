import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ArticleAPI = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const apiUrl = "https://jvporfbxxtgzxtjqtelz.supabase.co/functions/v1/create-article";

  const examplePayload = {
    title: "The Future of PropTech",
    subtitle: "How technology is transforming real estate",
    content: "Detailed analysis of emerging technologies in the real estate sector...",
    category: "Market Trends",
    image_url: "https://example.com/image.jpg",
    read_time: 7,
    metric_value: "+45%",
    published: true
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
  };

  const curlExample = `curl -X POST ${apiUrl} \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(examplePayload, null, 2)}'`;

  const jsExample = `const response = await fetch('${apiUrl}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(${JSON.stringify(examplePayload, null, 2)})
});

const result = await response.json();
console.log(result);`;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Article API Endpoint
          </CardTitle>
          <CardDescription>
            Create articles from external services using this REST API endpoint
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">API Endpoint</label>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary">POST</Badge>
              <code className="flex-1 bg-muted px-2 py-1 rounded text-sm">
                {apiUrl}
              </code>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(apiUrl, "API URL")}
              >
                <Copy className="h-4 w-4" />
                {copied === "API URL" ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Required Fields</label>
            <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside">
              <li><code>title</code> - Article title</li>
              <li><code>content</code> - Article content</li>
              <li><code>category</code> - One of: "Market Trends", "Key Deals", "Investment Strategy"</li>
            </ul>
          </div>

          <div>
            <label className="text-sm font-medium">Optional Fields</label>
            <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside">
              <li><code>subtitle</code> - Article subtitle</li>
              <li><code>image_url</code> - Featured image URL</li>
              <li><code>read_time</code> - Reading time in minutes</li>
              <li><code>metric_value</code> - Display metric (e.g., "+23.4%")</li>
              <li><code>slug</code> - Custom URL slug (auto-generated if not provided)</li>
              <li><code>published</code> - Boolean, defaults to false</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example Usage</CardTitle>
          <CardDescription>
            Here are examples of how to call the API from different environments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">cURL Example</label>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(curlExample, "cURL")}
              >
                <Copy className="h-4 w-4" />
                {copied === "cURL" ? "Copied!" : "Copy"}
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              {curlExample}
            </pre>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">JavaScript Example</label>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(jsExample, "JavaScript")}
              >
                <Copy className="h-4 w-4" />
                {copied === "JavaScript" ? "Copied!" : "Copy"}
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              {jsExample}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Response Format</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-green-600">Success Response (201)</label>
              <pre className="bg-muted p-4 rounded-lg text-sm mt-2">
{`{
  "success": true,
  "article": {
    "id": "uuid",
    "title": "Article Title",
    "slug": "article-title",
    "created_at": "2024-01-01T00:00:00Z",
    ...
  },
  "message": "Article created successfully"
}`}
              </pre>
            </div>

            <div>
              <label className="text-sm font-medium text-red-600">Error Response (400/500)</label>
              <pre className="bg-muted p-4 rounded-lg text-sm mt-2">
{`{
  "error": "Error message",
  "details": "Additional error details"
}`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};