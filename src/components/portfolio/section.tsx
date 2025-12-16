import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn("font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl", className)}>
      {children}
    </h2>
  );
}

type SectionDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export function SectionDescription({ children, className }: SectionDescriptionProps) {
    return (
        <p className={cn("max-w-3xl mx-auto text-lg text-muted-foreground", className)}>
            {children}
        </p>
    );
}
