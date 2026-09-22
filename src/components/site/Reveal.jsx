import { useReveal } from '@/hooks/useReveal';

// Wraps children in a scroll-triggered reveal. Respects reduced-motion (via the hook).
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...props }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}