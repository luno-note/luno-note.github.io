import * as React from "react";

const FALLBACK_IMAGE_URL = 'https://placehold.co/1200x800?text=Image';

const Image = React.forwardRef(({ src, alt = '', onError, ...props }, ref) => {
  const imageSrc = src || FALLBACK_IMAGE_URL;

  return (
    <img
      ref={ref}
      src={imageSrc}
      alt={alt}
      onError={(event) => {
        if (event.currentTarget.src !== FALLBACK_IMAGE_URL) {
          event.currentTarget.src = FALLBACK_IMAGE_URL;
        }
        onError?.(event);
      }}
      {...props}
    />
  );
});

Image.displayName = 'Image';

export { Image };
