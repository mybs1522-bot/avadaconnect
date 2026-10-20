import Link from "next/link";
import React from "react";

import { BuiltBy } from "@/components/built-by";
import { USER } from "@/data/user";

export function Footer() {
  return (
    <footer className="screen-line-before border-x border-grid py-8 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] md:pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 text-xs text-muted-foreground">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-2">
          <span className="font-mono">
            © {new Date().getFullYear()} {USER.displayName}. All rights reserved.
          </span>
          <span className="hidden sm:inline text-border">•</span>
          <BuiltBy pill />
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <Link
            href="/refund-policy"
            className="transition-colors hover:text-foreground underline underline-offset-4"
          >
            Refund Policy
          </Link>
          <span>•</span>
          <a
            href="mailto:support@avada.space"
            className="transition-colors hover:text-foreground"
          >
            support@avada.space
          </a>
        </div>
      </div>
    </footer>
  );
}
