import Image from "next/image";
import type { ReactNode } from "react";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type PageShellProps = {
  activeLabel?: string;
  hero?: {
    eyebrow?: string;
    title: ReactNode;
    subtitle?: ReactNode;
    imageUrl?: string;
    /** Shown on the right side of the hero (not used as background). */
    logoUrl?: string;
    logoAlt?: string;
    /** When set, plays behind the hero gradient (use imageUrl as optional poster). */
    videoUrl?: string;
  };
  children: ReactNode;
};

export default function PageShell({ activeLabel, hero, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[#000000] text-[#f1f4f6]">
      <div className="pb-0">
        <SiteHeader activeLabel={activeLabel} />

        {hero ? (
          <section
            className={[
              "relative overflow-hidden px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16",
              hero.videoUrl ? "bg-[#000000]" : hero.imageUrl ? "bg-cover bg-center" : "bg-[#000000]",
            ].join(" ")}
            style={
              hero.videoUrl
                ? undefined
                : hero.imageUrl
                  ? { backgroundImage: `url('${hero.imageUrl}')` }
                  : undefined
            }
          >
            {hero.videoUrl ? (
              <video
                className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster={hero.imageUrl}
                aria-hidden
              >
                <source src={hero.videoUrl} type="video/mp4" />
              </video>
            ) : null}
            <div className="absolute inset-0 z-1 bg-linear-to-r from-[#171b22]/60 via-[#1c232b]/70 to-[#1c232b]/20" />

            <div className="container relative z-10 mx-auto">
              <div
                className={
                  hero.logoUrl
                    ? "grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12"
                    : undefined
                }
              >
                <div className="relative max-w-5xl">
                  {hero.eyebrow ? (
                    <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white sm:text-sm">
                      {hero.eyebrow}
                    </p>
                  ) : null}

                  <h1 className="mt-5 text-4xl md:text-5xl font-black uppercase leading-[0.92] tracking-[-0.02em] text-[#f3d27d]">
                    {hero.title}
                  </h1>

                  {hero.subtitle ? (
                    <div className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                      {hero.subtitle}
                    </div>
                  ) : null}
                </div>

                {hero.logoUrl ? (
                  <div className="relative mx-auto h-44 w-44 shrink-0 sm:h-52 sm:w-52 lg:mx-0 lg:h-64 lg:w-64">
                    <Image
                      src={hero.logoUrl}
                      alt={hero.logoAlt ?? ""}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        {children}

        <SiteFooter />
      </div>
    </main>
  );
}

