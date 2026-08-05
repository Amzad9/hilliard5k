"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { siteContact, siteNav } from "./siteConfig";

export default function SiteHeader({ activeLabel }: { activeLabel?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 px-0 pt-1 bg-[#000000]">
      <div className="w-full border-b border-white/10 bg-[#000000]">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-3 py-2 text-center sm:flex-row sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-white/80 sm:justify-start">
            <a href={siteContact.phoneHref} className="inline-flex items-center gap-2 transition hover:text-white">
              <Phone className="h-4 w-4 text-[#f0d07a]" strokeWidth={2.2} />
              <span>{siteContact.phone}</span>
            </a>
            <a
              href={`mailto:${siteContact.emailShowroom}`}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="h-4 w-4 text-[#f0d07a]" strokeWidth={2.2} />
              <span>{siteContact.emailShowroom}</span>
            </a>
            <a
              href={siteContact.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <MapPin className="h-4 w-4 text-[#f0d07a]" strokeWidth={2.2} />
              <span className="truncate max-w-[80vw] sm:max-w-none">{siteContact.addressLines.join(" ")}</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-end">
            <a
              href={siteContact.socials.find((s) => s.key === "instagram_easterseals")?.href ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (Hilliard 5K)"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              <Instagram className="h-4 w-4" strokeWidth={2.2} />
            </a>
            <a
              href={siteContact.socials.find((s) => s.key === "facebook_turkey_trot")?.href ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook (Hilliard 5K)"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              <Facebook className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-white/10 bg-[#11161d]">
        <div className="container mx-auto hidden items-center justify-center gap-2 px-3 py-2 text-center sm:flex sm:flex-row sm:gap-x-3 sm:gap-y-1">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <span className="rounded-full bg-[#f0d07a] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#11161d] sm:text-[11px]">
              Hilliard, Ohio
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white sm:text-[11px]">
              5K &amp; 1-Mile Fun Run
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between gap-4  px-3 py-1  sm:px-5">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center"
          aria-label="Hilliard Family Fun Run 5K"
        >
         <div className="flex gap-4 items-center">
  <div className="relative h-32 w-32 shrink-0">
    <Image
      src="/new-image/Hilliard 5K Family Fun Run.png"
      alt="Hilliard Family Fun Run 5K logo"
      fill
      className="object-contain"
      priority
    />
  </div>

  <div className="-ml-2 flex flex-col">
    <h1 className="md:text-[36px] text-[22px] font-extrabold leading-none">
      <span className="text-[#1F3B8F]">HILLIARD</span>{" "}
      <span className="text-[#18A84A]">5K</span>
    </h1>

    <h2 className="mt-1 md:text-[22px] text-[16px] text-center font-semibold leading-none tracking-wide text-[#00AEEF]">
      FAMILY FUN RUN
    </h2>
  </div>
</div>
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-3 text-white transition hover:bg-white/20 sm:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="h-5 w-5" strokeWidth={2.4} />
        </button>

        <nav className="hidden shrink-0 sm:block sm:w-auto" aria-label="Primary navigation">
          <div className="flex flex-wrap items-center justify-end gap-2 xl:gap-7 text-[10px] font-black uppercase tracking-[0.04em] text-white md:text-[11px] lg:gap-5 lg:text-[12px] xl:text-[13px]">
            {siteNav.map((item) => {
              const isActive = item.label === activeLabel;
              return (
                <li key={item.href} className="cursor-pointer list-none">
                  <Link
                    href={item.href}
                    className={[
                      "transition hover:text-[#f0d07a]",
                      isActive ? "text-[#f0d07a]" : "",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <Link
              href="https://www.ultrafit-usa.com/hilliard5k"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#1f7f56] bg-[#1c9a64] px-3 py-2 text-[10px] text-[#f7d96f] shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:brightness-110 md:px-4 md:text-[11px] lg:px-5 lg:text-[12px]"
            >
              Register Now
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={[
          "pointer-events-none fixed inset-0 z-40 bg-black/55 opacity-0 transition duration-300 sm:hidden",
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "",
        ].join(" ")}
        onClick={closeMenu}
        aria-hidden={!isMobileMenuOpen}
      />

      <div
        className={[
          "fixed right-0 top-0 z-50 h-full w-[84vw] max-w-sm border-l border-white/20 bg-[#1f252d] shadow-[-18px_0_45px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out sm:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex items-center justify-between border-b border-white/15 px-5 py-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-white">Menu</p>
          <button
            type="button"
            onClick={closeMenu}
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" strokeWidth={2.4} />
          </button>
        </div>

        <nav className="px-5 py-6" aria-label="Mobile navigation">
          <ul className="space-y-2 text-base font-black uppercase tracking-[0.12em] text-white">
            {siteNav.map((item) => {
              const isActive = item.label === activeLabel;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={[
                      "block rounded-2xl border border-white/20 bg-white/5 px-4 py-4 transition hover:border-[#f0d07a]/45 hover:text-[#f0d07a]",
                      isActive ? "border-[#f0d07a]/55 text-[#f0d07a]" : "",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="https://www.ultrafit-usa.com/hilliard5k"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block rounded-2xl border border-[#1f7f56] bg-[#1c9a64] px-4 py-4 text-[#f7d96f] transition hover:brightness-110"
              >
                Register Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      </header>
      <div aria-hidden className="h-[232px] sm:h-[172px]" />
    </>
  );
}
