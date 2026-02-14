"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

type ImageWithFallbackProps = ImageProps & {
  fallbackClassName?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  fallbackClassName = "bg-cream-dark",
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center ${fallbackClassName}`}
        aria-hidden
      >
        <span className="font-sans text-sm text-coffee-muted">Image</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
}
