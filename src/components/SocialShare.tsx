import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  Share2, 
  Copy, 
  Twitter, 
  Linkedin, 
  Facebook,
  Mail,
  Link as LinkIcon
} from 'lucide-react';

interface SocialShareProps {
  title: string;
  url?: string;
  description?: string;
  className?: string;
}

export function SocialShare({ title, url, description, className }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const shareUrl = url || window.location.href;
  const shareText = description || title;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(shareText);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to your clipboard.",
      });
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      toast({
        title: "Link copied!",
        description: "Article link has been copied to your clipboard.",
      });
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or share failed
        console.log('Share cancelled or failed');
      }
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleNativeShare}
          className={className}
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share Article
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Share this article</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Copy Link */}
          <div className="flex items-center gap-2">
            <Input 
              value={shareUrl} 
              readOnly 
              className="flex-1" 
            />
            <Button 
              variant="outline" 
              size="icon"
              onClick={copyToClipboard}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Social Media Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.open(shareLinks.twitter, '_blank', 'noopener,noreferrer')}
            >
              <Twitter className="h-4 w-4 mr-2 text-blue-500" />
              Twitter
            </Button>
            
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.open(shareLinks.linkedin, '_blank', 'noopener,noreferrer')}
            >
              <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
              LinkedIn
            </Button>
            
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.open(shareLinks.facebook, '_blank', 'noopener,noreferrer')}
            >
              <Facebook className="h-4 w-4 mr-2 text-blue-600" />
              Facebook
            </Button>
            
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.open(shareLinks.email, '_blank', 'noopener,noreferrer')}
            >
              <Mail className="h-4 w-4 mr-2 text-gray-600" />
              Email
            </Button>
          </div>
          
          {/* Alternative copy button */}
          <Button 
            variant="ghost" 
            className="w-full"
            onClick={copyToClipboard}
          >
            <LinkIcon className="h-4 w-4 mr-2" />
            Copy Link
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}