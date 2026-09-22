import * as React from 'react';

export function useResponsiveImage() {
  const wrapperRef = React.useRef(null);
  const imgRef = React.useRef(null);

  return {
    wrapperRef,
    imgRef,
    loaded: true,
    options: null,
    handleLoad: () => undefined,
  };
}

