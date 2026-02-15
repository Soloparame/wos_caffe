"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

type ImageWithFallbackProps = Omit<ImageProps, "src"> & {
  src: ImageProps["src"] | Array<ImageProps["src"]>;
  fallbackClassName?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  fallbackClassName = "bg-cream-dark",
  ...props
}: ImageWithFallbackProps) {
  const sources = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);

  if (error || !sources[index]) {
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
      src={sources[index]}
      alt={alt}
      onError={() => {
        if (index < sources.length - 1) {
          setIndex(index + 1);
        } else {
          setError(true);
        }
      }}
      {...props}
    />
  );
}
