import React, { useState } from 'react';
import fallbackImage from '@/assets/real-estate-fallback.jpg';

interface FallbackImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  className = "",
  onLoad,
  onError,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  // Use fallback image if no src provided or if there was an error
  const imageSrc = !src || hasError ? fallbackImage : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
    />
  );
};