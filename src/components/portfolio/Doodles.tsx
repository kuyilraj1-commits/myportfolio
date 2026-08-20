export function FaceBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="3" />
      <path
        d="M22 40c2-16 13-24 28-24s26 8 28 24c1 8-3 10-6 6-4-5-9-3-12-7-4 5-11 6-16 3-3 4-8 3-11 7-3 4-11 0-11-9Z"
        fill="currentColor"
      />
      <circle cx="37" cy="52" r="4" fill="currentColor" />
      <circle cx="63" cy="52" r="4" fill="currentColor" />
      <path
        d="M35 66c5 4 10 5 15 5s10-1 15-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 56v8M40 76c3 3 7 4 10 4s7-1 10-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CurvedArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true">
      <path
        d="M8 4c-6 18 2 34 20 42 16 7 40 6 60 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M4 20 8 4l13 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkles({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 48" className={className} aria-hidden="true">
      <path
        d="M28 4 33 19 48 24 33 29 28 44 23 29 8 24 23 19Z"
        fill="currentColor"
      />
      <path d="M86 8 91 22 105 24 91 26 86 40 81 26 67 24 81 22Z" fill="currentColor" />
      <g fill="currentColor">
        <circle cx="140" cy="16" r="7" />
        <circle cx="130" cy="30" r="7" />
        <circle cx="150" cy="30" r="7" />
        <rect x="138" y="28" width="4" height="14" />
      </g>
    </svg>
  );
}
