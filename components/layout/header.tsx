import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { NAV_LINKS, SITE_SHORT_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="relative h-20 w-20 shrink-0">
          <Image
            src="/assets/logos/jsc-nice-marine-transparent.png"
            alt={SITE_SHORT_NAME}
            fill
            priority
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
