export default function Logo({ className = '', showWord = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/luno-logo-square.png"
        alt="Luno logo"
        className="h-[30px] w-[30px] shrink-0 rounded-xl object-cover"
      />
      {showWord && (
        <span className="font-brand tracking-tight text-foreground text-[1.2rem] leading-none">
          Luno
        </span>
      )}
    </span>
  );
}