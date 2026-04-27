export function Logo({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[color:var(--gold)]"
      >
        <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <path
          d="M22 44 V22 h8 a6 6 0 0 1 0 12 h-8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="square"
          fill="none"
        />
        <path
          d="M36 44 V22 M36 30 l8 -8 M36 30 l8 14"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="square"
          fill="none"
        />
      </svg>
      <span
        className="mt-2 font-serif text-[color:var(--cream)] tracking-editorial"
        style={{ fontSize: size * 0.34 }}
      >
        pellikatha<span className="text-[color:var(--gold)]">.</span>films
      </span>
    </div>
  );
}
