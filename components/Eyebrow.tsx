import type { ReactNode } from "react";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-eyebrow text-[13px] uppercase tracking-[0.03em] text-ink-soft mb-4">
      {children}
    </p>
  );
}
