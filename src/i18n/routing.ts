import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "so"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/": {
      en: "/",
      so: "/",
    },
    "/fun_facts": {
      en: "/fun_facts",
      so: "/xaqiiqo_madadaalo_leh",
    },
    "/somali_wisdom": {
      en: "/somali_wisdom",
      so: "/ximadaha_somaliyeed",
    },
    "/global_wisdom": {
      en: "/global_wisdom",
      so: "/xikmadaha_calamka",
    },
    "/stories": {
      en: "/stories",
      so: "/sheekoyin",
    },
  },
});
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
