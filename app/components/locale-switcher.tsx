"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale, locales } from "@/i18n.config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  console.log(pathName)
  return (
    <div className="flex gap-2 font-light">
      {locales.map((locale: Locale) =>
        <span key={locale} className={pathName.split("/")[1] === locale ? 'font-semibold underline underline-offset-2 decoration-cp2-500 decoration-2' : ''}>
          <Link href={redirectedPathName(locale)}>{locale}</Link>
        </span>
      )}
    </div>
  );
}