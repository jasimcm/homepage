import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  tilt?: "tilt-1" | "tilt-2" | "tilt-3" | "tilt-4";
  tint?: string;
  padding?: string;
  className?: string;
};

export default function Card({
  children,
  tilt,
  tint,
  padding = "p-6",
  className = "",
}: CardProps) {
  return (
    <div
      className={`${tint ?? "bg-surface"} border border-line ${padding} ${tilt ?? ""} ${className}`}
    >
      {children}
    </div>
  );
}
