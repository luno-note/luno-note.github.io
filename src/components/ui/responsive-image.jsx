import * as React from 'react';
import { cn } from '../../lib/utils';

export const ResponsiveImage = React.forwardRef(
  ({ src, alt = '', className, style, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn('block max-w-full', className)}
        style={style}
        {...props}
      />
    );
  },
);

ResponsiveImage.displayName = 'ResponsiveImage';
