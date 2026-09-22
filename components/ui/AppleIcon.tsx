// The Apple logo, used on App Store download links. Inline rather than from
// lucide-react, whose `Apple` icon is a piece of fruit, not the brand mark.
export function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.365 1.43c0 1.14-.42 2.21-1.18 3.03-.9.99-2.05 1.57-3.1 1.48a3.3 3.3 0 0 1-.02-.38c0-1.1.48-2.25 1.24-3.05.79-.85 2.05-1.47 3.05-1.51.01.14.01.29.01.43ZM20.7 17.02c-.5 1.16-.74 1.68-1.39 2.7-.9 1.43-2.18 3.2-3.76 3.22-1.4.01-1.76-.92-3.67-.91-1.9.01-2.3.93-3.7.91-1.58-.02-2.79-1.62-3.7-3.04C1.94 15.9 1.67 11.2 3.24 8.7c1.11-1.77 2.87-2.8 4.52-2.8 1.68 0 2.74.93 4.13.93 1.35 0 2.17-.93 4.12-.93 1.47 0 3.03.81 4.14 2.2-3.64 2-3.05 7.22.55 8.92Z" />
    </svg>
  );
}
