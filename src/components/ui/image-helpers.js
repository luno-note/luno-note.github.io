export const DEFAULT_TRANSFORM_WIDTH = 1024;

export const IMAGE_LOAD_MODE = {
  OPTIMIZED: 'optimized',
  ORIGINAL: 'original',
  FALLBACK: 'fallback',
};

export function splitImageProps(props = {}) {
  const wrapperProps = {};
  const imageProps = {};

  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith('data-')) {
      wrapperProps[key] = value;
    } else {
      imageProps[key] = value;
    }
  }

  return { wrapperProps, imageProps };
}

export function getImagePreviewClassName(className, currentClassName, baselineClassName) {
  const sourceClasses = new Set((className || '').split(/\s+/));
  const baselineClasses = new Set((baselineClassName || '').split(/\s+/));

  return (currentClassName || '')
    .split(/\s+/)
    .filter(
      (token) =>
        !['inline-block', 'relative'].includes(token) ||
        !baselineClasses.has(token) ||
        sourceClasses.has(token),
    )
    .join(' ');
}

export function parseWixMediaUrl() {
  return null;
}

export function buildTransformUrl({ baseUrl, filename }, { width, height, crop, quality }) {
  const safeWidth = Math.max(1, Math.round(width || DEFAULT_TRANSFORM_WIDTH));
  const safeHeight = height ? Math.max(1, Math.round(height)) : safeWidth;
  const suffix = filename?.match(/\.[a-z0-9]+$/i)?.[0] || '';

  return `${baseUrl || ''}?w=${safeWidth}&h=${safeHeight}${crop ? '&fit=crop' : ''}&q=${quality || 90}${suffix ? `&name=${encodeURIComponent(filename)}` : ''}`;
}

export function buildSrcSet(parsed, options) {
  return `${buildTransformUrl(parsed, options)} 1x`;
}

export function getOriginalImageUrl(src) {
  return src;
}

export function nextImageLoadMode(mode) {
  return mode === IMAGE_LOAD_MODE.OPTIMIZED ? IMAGE_LOAD_MODE.ORIGINAL : IMAGE_LOAD_MODE.FALLBACK;
}

