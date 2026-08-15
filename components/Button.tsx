import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 h-12 px-6 border border-line font-body font-semibold text-sm uppercase tracking-wide";
  const style =
    variant === "solid"
      ? "bg-lime text-ink hover:bg-yellow"
      : "bg-surface text-ink hover:bg-paper";
  const classes = `${base} ${style} ${className}`;

  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
