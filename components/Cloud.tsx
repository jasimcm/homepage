export default function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M50 80 C29 80 20 68 20 55 C20 40 33 30 47 32 C50 15 68 5 85 10 C95 2 115 2 125 12 C140 8 158 18 158 35 C172 37 180 50 178 62 C176 75 162 82 148 80 Z" />
    </svg>
  );
}
