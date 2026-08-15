import type { ReactNode } from "react";

export default function Ribbon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-yellow border-y border-line px-5 py-2 -rotate-1 font-eyebrow text-[13px] uppercase">
      {children}
    </span>
  );
}
