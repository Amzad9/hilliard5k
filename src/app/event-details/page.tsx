import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Flag, MapPin, ShieldCheck, Trophy, Waves } from "lucide-react";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Event Details | Hilliard Family Fun Run 5K",
  description: "Race details for the Hilliard Family Fun Run — 5K and 1-Mile Fun Run at Hilliard Sports Complex.",
};

const distances = [
  {
    title: "5K Race",
    miles: "3.1 miles",
    startTime: "9:00 AM",
    body: "A chip-timed 5K on the fully paved trail system that winds through the Hilliard Sports Complex. Open to runners and walkers of all paces. Results posted at ultrafitusa.com after the event.",
  },
  {
    title: "1-Mile Family Fun Run",
    miles: "1 mile",
    startTime: "Approx. 9:10 AM",
    body: "A relaxed, non-competitive one-mile loop on the newer trails surrounding the complex. Designed for families, walkers, seniors, strollers, and first-timers — all are welcome.",
  },
];

const eventFlow = [
  {
    title: "Park & Arrive",
    body: "Free parking is available at the Hilliard Sports Complex. Arrive early — gates fill up fast. Follow on-site signage and volunteers for a smooth entry.",
    icon: <Flag className="h-4 w-4" />,
  },
  {
    title: "On-Course Support",
    body: "Volunteers are stationed throughout both courses. They&apos;ll guide you, cheer you on, and point you in the right direction at every turn.",
    icon: <Waves className="h-4 w-4" />,
  },
  {
    title: "Finish Line Celebration",
    body: "Cross the finish line to collect your custom finisher medal with ribbon. Finish line food and beverages are ready and waiting for you.",
    icon: <Trophy className="h-4 w-4" />,
  },
];

const raceDayGuidelines = [
  "Runners and walkers of all ages and experience levels are welcome.",
  "Follow event volunteers and posted race-day signage at all times.",
  "Strollers and seniors are welcome on the 1-Mile Fun Run course.",
  "Exercise caution when entering and exiting the parking area.",
  "Only the registered runner may race with their assigned bib.",
];

export default function EventDetailsPage() {
  return (
    <PageShell
      activeLabel="Event Details"
      hero={{
        eyebrow: "Event Details",
        title: "Pick Your Distance",
        subtitle: "Two courses. One great venue. Whether you're racing the clock or racing for fun — there's a perfect option for you.",
        imageUrl: "https://images.unsplash.com/photo-1616279969856-759f316a5ac1?auto=format&fit=crop&w=1600&q=80",
      }}
    >
      {/* Distance cards */}
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
          <p className="text-base uppercase tracking-[0.08em] text-white/90 sm:text-xl">
            Start &amp; finish — Hilliard Sports Complex (directly across from the Wellness Fitness Center)
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {distances.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-[#1e252d] p-5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                  {item.title} ({item.miles})
                </h2>
                <p className="mt-1 text-2xl font-black uppercase text-white sm:text-2xl">
                  Start at {item.startTime}
                </p>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  {item.body}
                </p>
                <div className="mt-4">
                  <Link
                    href="https://www.ultrafit-usa.com/hilliard5k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-[#1f7f56] bg-[#1c9a64] px-6 py-3 text-center text-lg font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110"
                  >
                    Register Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Race at a glance */}
      <section className="px-4 pb-12 sm:px-8 sm:pb-12">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            Race At A Glance
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <CalendarDays className="h-4 w-4" /> Date
              </p>
              <p className="mt-2 text-lg text-white">Summer / Fall 2026 (TBA)</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <MapPin className="h-4 w-4" /> Location
              </p>
              <p className="mt-2 text-lg text-white">Hilliard Sports Complex, 5001 Scioto Darby Rd, Hilliard OH</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <Trophy className="h-4 w-4" /> Entry Fee
              </p>
              <p className="mt-2 text-lg text-white">5K $45 · Fun Run $40 — prices increase August 1st</p>
            </div>
          </div>

          <div className="mt-7">
            <Link
              href="https://www.ultrafit-usa.com/hilliard5k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:text-base"
            >
              Click Here To Register
              <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
            </Link>
          </div>
        </div>
      </section>

      {/* Event flow */}
      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-8">
        <div className="container mx-auto">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            How Race Morning Works
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            From parking to podium, here&apos;s what to expect on race day at the Hilliard Sports Complex.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {eventFlow.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#f3d27d]">
                  {item.icon}
                  Race Day
                </p>
                <h4 className="mt-3 text-xl font-black uppercase tracking-tight text-white">{item.title}</h4>
                <p className="mt-2 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Course + Rules */}
      <section className="px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-8">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8 lg:col-span-7">
            <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
              The Course
            </h3>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Both events run on the fully paved trail system winding through the Hilliard Sports
              Complex and surrounding area — smooth, accessible, and well-marked.
            </p>
            <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              The 5K covers 3.1 miles of paved trail. The 1-Mile Fun Run uses the newer trails
              that loop around the sports complex — flat, accessible, and perfect for strollers,
              seniors, and casual walkers going at their own pace.
            </p>
            <div className="mt-5">
              <Link
                href="/maps"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
              >
                View Race Map
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8 lg:col-span-5">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">Rules &amp; Safety</h3>
            <ul className="mt-4 space-y-3">
              {raceDayGuidelines.map((rule) => (
                <li
                  key={rule}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 sm:text-base"
                >
                  {rule}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-white/85">
              <ShieldCheck className="h-4 w-4 text-[#f3d27d]" />
              Follow volunteer direction and official signage throughout race morning.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
