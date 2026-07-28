import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Flag, Footprints } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Race Events | Hilliard Family Fun Run 5K",
  description: "Choose the distance that fits your day — a timed 5K or a relaxed 1-Mile Family Fun Run.",
};

const distances = [
  {
    icon: <Flag className="h-5 w-5" strokeWidth={2.2} />,
    title: "5K Run & Walk",
    distance: "3.1 Miles",
    startTime: "9:00 AM",
    price: "$45",
    body: "The signature event for runners and walkers who want a steady race-day challenge on paved trails.",
    features: [
      "Chip-timed finish",
      "Finish results posted online after the race",
      "Custom finisher medal with ribbon",
      "Race shirt included",
    ],
  },
  {
    icon: <Footprints className="h-5 w-5" strokeWidth={2.2} />,
    title: "1-Mile Family Fun Run",
    distance: "1 Mile",
    startTime: "Approx. 9:10 AM",
    price: "$40",
    body: "A more relaxed one-mile route for families, walkers, strollers, seniors, and first-time participants.",
    features: [
      "Non-competitive, casual pace",
      "Strollers and seniors welcome",
      "Custom finisher medal with ribbon",
      "Race shirt included",
    ],
  },
];

export default function RaceEventsPage() {
  return (
    <PageShell
      activeLabel="Event Details"
      hero={{
        eyebrow: "Race Distances",
        title: "One Morning. Two Ways To Join.",
        subtitle: "Whether you are aiming for a fast time or a casual walk with friends, there is a distance that fits.",
        imageUrl: "/new-image/race-park-crowd.png",
      }}
    >
      {/* Distance Cards */}
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-2">
          {distances.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] sm:p-8"
            >
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                {item.icon}
              </span>
              <h2 className="mt-5 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                {item.title}
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#f3d27d]">
                  {item.distance}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white/75">
                  Start: {item.startTime}
                </span>
                <span className="rounded-full border border-[#1f7f56] bg-[#1c9a64]/20 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#6be8a7]">
                  {item.price}
                </span>
              </div>
              <p className="mt-4 flex-1 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                {item.body}
              </p>
              <ul className="mt-5 space-y-2">
                {item.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/80 sm:text-base">
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#f3d27d]" strokeWidth={2.2} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="https://www.ultrafit-usa.com/hilliard5k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f7f56] bg-[#1c9a64] px-7 py-3 text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:text-base"
                >
                  Sign Up Now
                  <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Combined Event Info */}
      <section className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="container mx-auto">
          <div className="grid gap-6 rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:grid-cols-12 lg:p-8">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                About The Race
              </p>
              <h2 className="mt-3 text-3xl font-black leading-[0.95] tracking-tight text-[#f3d27d] sm:text-4xl lg:text-5xl">
                Hilliard Family Fun Run
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                The Hilliard Family Fun Run takes place at the Hilliard Sports Complex across from the Wellness Fitness Center. It is a community-focused morning of movement for runners, walkers, families, and first-timers.
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  "Both distances start and finish at the Hilliard Sports Complex",
                  "Free parking is available on site, and early arrival makes the morning easier",
                  "Race proceeds support a local Central Ohio non-profit",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-4"
                  >
                    <span className="mt-0.5 h-2 w-2 shrink-0 translate-y-[6px] rounded-full bg-[#f3d27d]" />
                    <p className="text-base leading-7 text-white/90">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="https://www.ultrafit-usa.com/hilliard5k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f7f56] bg-[#1c9a64] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:px-8 sm:text-base"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                </Link>
                <a
                  href={siteContact.phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.10)] transition hover:bg-white/15 sm:w-fit sm:px-8 sm:text-base"
                >
                  Call {siteContact.phone}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/5 p-5 shadow-inner lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                Quick Facts
              </p>
              <div className="mt-4 space-y-4 text-base leading-7 text-white/90">
                <p>
                  <span className="font-black text-white">5K entry fee:</span> $45 (price increases August 1st)
                </p>
                <p>
                  <span className="font-black text-white">1-Mile Fun Run:</span> $40 (price increases August 1st)
                </p>
                <p>
                  <span className="font-black text-white">Start times:</span> 5K at 9:00 AM · Fun Run approx. 9:10 AM
                </p>
                <p>
                  <span className="font-black text-white">Location:</span> Hilliard Sports Complex, 5001 Scioto Darby Rd, Hilliard, OH 43026
                </p>
                <p>
                  <span className="font-black text-white">Perks:</span> Race shirt, finisher medal, finish line food and beverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
