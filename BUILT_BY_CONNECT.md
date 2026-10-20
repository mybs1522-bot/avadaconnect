# 🔗 "Built by Connect" Standard Implementation Specification

> **Standard Component & Placement Guide**  
> Use this guide across every architect, portfolio, and tenant deployment to ensure a consistent, micro-sized, high-impact "Built by Connect" attribution across both light and dark themes.

---

## 1. Design & Aesthetic Standards

| Parameter | Specification |
| :--- | :--- |
| **Visual Style** | Minimalist micro-pill badge or inline text badge |
| **Pill Border & Bg** | `border border-border/60 bg-muted/40 dark:bg-muted/20 px-2.5 py-0.5 rounded-full` |
| **Label Typography** | `text-[10px] font-semibold tracking-wider uppercase text-muted-foreground/80 font-sans` |
| **Logo Render Height** | `h-3.5` (14px) with auto width (`w-auto object-contain`) |
| **Original Asset Ratio** | 3:1 aspect ratio (1024 × 341 transparent RGBA PNG) |
| **Theme Switching** | Instant zero-flicker CSS utility classes: `dark:hidden` (light) & `hidden dark:block` (dark) |
| **Interactive State** | Subtle hover brightening: `hover:border-border hover:bg-muted/70` |

---

## 2. Asset Files & Locations

Place the two transparent PNG logo assets in every project's `public/images/` directory:

| Mode | Local Path | Remote CDN / Git Raw Fallback |
| :--- | :--- | :--- |
| **Light Mode** (Blue Icon + Black Text) | `/public/images/connect-logo-light.png` | `https://raw.githubusercontent.com/mybs1522-bot/avadaconnect/main/public/images/connect-logo-light.png` |
| **Dark Mode** (Blue Icon + White Text) | `/public/images/connect-logo-dark.png` | `https://raw.githubusercontent.com/mybs1522-bot/avadaconnect/main/public/images/connect-logo-dark.png` |

### Quick Download Command (for new projects)

```bash
# Inside project root:
mkdir -p public/images
curl -sL "https://raw.githubusercontent.com/mybs1522-bot/avadaconnect/main/public/images/connect-logo-light.png" -o public/images/connect-logo-light.png
curl -sL "https://raw.githubusercontent.com/mybs1522-bot/avadaconnect/main/public/images/connect-logo-dark.png" -o public/images/connect-logo-dark.png
```

---

## 3. The Reusable Component

Create `src/components/built-by.tsx`:

```tsx
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
```

---

## 4. Standard Placements

### A. Main Website Footer (`src/components/footer.tsx`)
Place inside the copyright cluster so it wraps neatly across all mobile and desktop screens:

```tsx
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
```

### B. Admin Panel Footer (`src/app/admin/layout.tsx`)
Render at the bottom of the admin dashboard container:

```tsx
<footer className="w-full border-t border-border/40 py-4 flex items-center justify-center">
  <BuiltBy pill className="opacity-80 hover:opacity-100" />
</footer>
```

---

## 5. Playbook Integration for Future Onboardings

Add the following step to your **Architect Onboarding Playbook** (`master-arch`):

```markdown
### Step X: Connect Brand Attribution
1. Ensure `public/images/connect-logo-light.png` and `public/images/connect-logo-dark.png` exist.
2. Ensure `src/components/built-by.tsx` is created.
3. Import and render `<BuiltBy pill />` in `src/components/footer.tsx` beside the copyright text.
4. Render `<BuiltBy pill />` in `src/app/admin/layout.tsx` inside the admin footer.
```
