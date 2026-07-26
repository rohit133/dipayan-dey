import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeadingProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
};

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("type-eyebrow", className)}>
      {children}
    </p>
  );
}

export function HeroTitle({ children, className, as: Tag = "h1" }: HeadingProps) {
  return <Tag className={cn("type-hero", className)}>{children}</Tag>;
}

export function SectionTitle({ children, className, as: Tag = "h2" }: HeadingProps) {
  return <Tag className={cn("type-section-title", className)}>{children}</Tag>;
}

export function CardTitle({ children, className, as: Tag = "h3" }: HeadingProps) {
  return <Tag className={cn("type-card-title", className)}>{children}</Tag>;
}

export function Subheading({ children, className, as: Tag = "h4" }: HeadingProps) {
  return <Tag className={cn("type-subheading", className)}>{children}</Tag>;
}

export function Lead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("type-lead", className)}>{children}</p>;
}

export function BodyText({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("type-body", className)}>{children}</p>;
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  compact?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  compact = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Eyebrow
        className={cn(
          "inline-flex items-center gap-2",
          align === "center" && "justify-center"
        )}
      >
        {align === "left" ? (
          <span className="h-px w-6 bg-orange-500/50" aria-hidden />
        ) : null}
        {eyebrow}
      </Eyebrow>
      <SectionTitle className={cn("mt-4", compact && "mt-3")}>{title}</SectionTitle>
      {description ? (
        <Lead className={cn("mt-3 max-w-2xl text-white/65", compact && "mt-2")}>{description}</Lead>
      ) : null}
    </div>
  );
}
