import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  tilt?: "tilt-1" | "tilt-2" | "tilt-3" | "tilt-4";
  tint?: string;
  className?: string;
};

export default function Card({ children, tilt, tint, className = "" }: CardProps) {
  return (
    <div
      className={`${tint ?? "bg-surface"} border border-line p-6 ${tilt ?? ""} ${className}`}
    >
      {children}
    </div>
  );
}
