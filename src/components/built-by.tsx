import Image from "next/image";
import React from "react";

import { cn } from "@/lib/cn";

interface BuiltByProps {
  className?: string;
  pill?: boolean;
}

export function BuiltBy({ className, pill = true }: BuiltByProps) {
  if (pill) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 dark:bg-muted/20 px-2.5 py-0.5 shadow-xs transition-colors hover:border-border hover:bg-muted/70",
          className
        )}
      >
        <span className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground/80 font-sans select-none">
          Built by
        </span>
        <div className="inline-flex items-center">
          <Image
            src="/images/connect-logo-light.png"
            alt="Connect"
            width={72}
            height={24}
            className="h-3.5 w-auto object-contain dark:hidden"
            priority
          />
          <Image
            src="/images/connect-logo-dark.png"
            alt="Connect"
            width={72}
            height={24}
            className="hidden h-3.5 w-auto object-contain dark:block"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("inline-flex items-center gap-1.5 font-sans", className)}>
      <span className="text-[10px] font-medium tracking-wider uppercase text-muted-foreground/75 select-none">
        Built by
      </span>
      <div className="inline-flex items-center">
        <Image
          src="/images/connect-logo-light.png"
          alt="Connect"
          width={72}
          height={24}
          className="h-3.5 w-auto object-contain dark:hidden"
          priority
        />
        <Image
          src="/images/connect-logo-dark.png"
          alt="Connect"
          width={72}
          height={24}
          className="hidden h-3.5 w-auto object-contain dark:block"
          priority
        />
      </div>
    </div>
  );
}
