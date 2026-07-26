import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Clock3, MapPin, ShieldCheck, Timer, Zap } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Race Day Guide | Hilliard Family Fun Run 5K",
  description: "Everything you need to know for a confident race morning at the Hilliard Family Fun Run — parking, start times, course tips, and more.",
};

const tips = [
  {
    title: "When should I arrive?",
    body: "Plan to arrive at least 30 minutes before your start time. This gives you plenty of time to park, warm up, find your start area, and get relaxed before the gun goes off.",
    icon: <Timer className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Where do I park?",
    body: "There is plenty of free parking within the Hilliard Sports Complex and surrounding areas. Follow on-site signage and volunteer direction for a safe arrival. Exercise caution in the lot.",
    icon: <MapPin className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "What should I bring?",
    body: "Bring your race bib (pinned to your shirt), comfortable running or walking attire appropriate for the weather, and your energy. Hydration is available on the course.",
    icon: <BadgeCheck className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Is there on-course support?",
    body: "Yes — trained volunteers are stationed throughout the course to guide participants, answer questions, and cheer you on. Follow event signage at all intersections.",
    icon: <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />,
  },
];

const timeline = [
  { time: "8:00 AM", label: "Parking & Arrival", detail: "Gates open. Find your parking spot and head to the start area." },
  { time: "8:30 AM", label: "Packet Pickup Closes", detail: "Race-morning packet pickup closes. Collect your bib early." },
  { time: "8:45 AM", label: "Warm-Up Time", detail: "Head to the start line. Do your warm-up stretches and find your pace group." },
  { time: "9:00 AM", label: "5K Start", detail: "The 5K run and walk begins on the paved trails of the Hilliard Sports Complex." },
  { time: "9:10 AM", label: "1-Mile Fun Run Start", detail: "Approx. start time. Walkers, seniors, strollers, and families take the trail." },
  { time: "After Finish", label: "Celebration", detail: "Collect your custom finisher medal and enjoy finish line food and beverage." },
];

export default function RaceDayGuidePage() {
  return (
    <PageShell
      activeLabel="Event Details"
      hero={{
        eyebrow: "Race Day Guide",
        title: (
          <>
            Arrive Calm.
            <br />
            Finish Strong.
          </>
        ),
        subtitle:
          "Your complete race morning playbook — from where to park to crossing the finish line at Hilliard Sports Complex.",
        imageUrl: "https://images.unsplash.com/photo-1616279969856-759f316a5ac1?auto=format&fit=crop&w=1600&q=80",
      }}
    >
      {/* Race Day Timeline */}
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            Race Morning Timeline
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Use this schedule to plan your race morning from the moment you arrive to your
            post-finish celebration.
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((item) => (
              <article
                key={item.time}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3d27d]">{item.time}</p>
                <h3 className="mt-2 text-lg font-black uppercase text-white">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-white/80 sm:text-base sm:leading-7">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Checklist + Directions */}
      <section className="px-4 pb-12 sm:px-8 sm:pb-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
              Race Day Checklist
            </h2>
            <ul className="mt-6 space-y-3 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              <li className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <span className="font-black text-white">Packet pickup:</span> Advance pickup recommended. Friends or family may collect your bib on your behalf.
              </li>
              <li className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <span className="font-black text-white">5K start time:</span> 9:00 AM — be at the start line warmed up and ready by 8:50 AM.
              </li>
              <li className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <span className="font-black text-white">1-Mile Fun Run:</span> Approx. 9:10 AM start. Walkers, strollers, and families line up together.
              </li>
              <li className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <span className="font-black text-white">Parking:</span> Free parking on site. Arrive early and follow volunteer directions.
              </li>
              <li className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <span className="font-black text-white">Course:</span> Fully paved trails throughout the Hilliard Sports Complex. Both events finish at the same location.
              </li>
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/questions"
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
              >
                Ask A Question
              </Link>
              <Link
                href="/event-details"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                Full Event Details
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                Location
              </p>
              <p className="mt-3 text-lg font-black text-white">{siteContact.addressLines[0]}</p>
              <p className="mt-2 text-base leading-7 text-white/80">
                {siteContact.addressLines[1]}
                <br />
                {siteContact.addressLines[2]}
              </p>
              <p className="mt-2 text-sm text-white/60">
                Located directly across from the new Wellness Fitness Center.
              </p>
              <a
                href={siteContact.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm font-black uppercase tracking-[0.14em] text-[#f3d27d] transition hover:brightness-110"
              >
                Open In Google Maps
              </a>
              <div className="mt-6 border-t border-white/10 pt-6 text-sm text-white/80">
                Race hotline:{" "}
                <a
                  href={siteContact.phoneHref}
                  className="font-semibold text-white underline decoration-white/25 underline-offset-4 transition hover:text-[#f3d27d]"
                >
                  {siteContact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Tips Grid */}
      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            Common Questions
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {tips.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-xl font-black uppercase tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
