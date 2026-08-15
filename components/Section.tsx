import type { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-12 max-sm:py-[34px] ${className}`}>
      <div className="max-w-[1128px] mx-auto px-6 max-sm:px-4">{children}</div>
    </section>
  );
}
