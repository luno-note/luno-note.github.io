export default function SectionHeading({ eyebrow, title, desc, align = 'left', className = '' }) {
  return (
    <div className={align === 'center' ? `mx-auto max-w-2xl text-center ${className}` : `max-w-2xl ${className}`}>
      <div
        className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="luno-display mt-5 text-3xl text-foreground sm:text-4xl md:text-[2.6rem]">{title}</h2>
      {desc && <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{desc}</p>}
    </div>
  );
}