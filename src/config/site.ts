import { USER } from "@/data/user";

function getSiteUrl(): string {
  const envUrl = process.env.APP_URL?.trim();
  // Ensure envUrl is not a placeholder with brackets or invalid URL syntax
  if (envUrl && !envUrl.includes("<") && !envUrl.includes(">")) {
    try {
      const candidate = envUrl.startsWith("http://") || envUrl.startsWith("https://")
        ? envUrl
        : `https://${envUrl}`;
      const parsed = new URL(candidate);
      return parsed.origin;
    } catch {
      // Ignore invalid URL
    }
  }

  // Fallback to Vercel production or deployment URL automatically provided by Vercel
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProd && !vercelProd.includes("<")) {
    return `https://${vercelProd}`;
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl && !vercelUrl.includes("<")) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}

export const SITE_INFO = {
  name: USER.displayName,
  url: getSiteUrl(),
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const SOURCE_CODE_GITHUB_URL = "";

export const VIETNAM_HOLIDAYS = [
  "2026-01-26", // Republic Day
  "2026-08-15", // Independence Day
  "2026-10-02", // Gandhi Jayanti
  "2026-11-08", // Diwali
];
