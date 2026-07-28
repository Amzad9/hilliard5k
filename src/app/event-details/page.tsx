import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Flag, MapPin, ShieldCheck, Trophy, Waves } from "lucide-react";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Event Details | Hilliard Family Fun Run 5K",
  description: "Race details for the Hilliard Family Fun Run — a two-distance event at Hilliard Sports Complex built for runners, walkers, and families.",
};

const distances = [
  {
    title: "5K Race",
    miles: "3.1 miles",
    startTime: "9:00 AM",
    body: "A timed 5K on the paved trail network at Hilliard Sports Complex. It gives runners and walkers a steady, well-marked route with a clean finish.",
  },
  {
    title: "1-Mile Family Fun Run",
    miles: "1 mile",
    startTime: "Approx. 9:10 AM",
    body: "A casual one-mile option on the newer trails around the complex, ideal for families, walkers, seniors, strollers, and first-time participants.",
  },
];

const eventFlow = [
  {
    title: "Park & Settle In",
    body: "Free parking is available on site, and arriving a little early makes race morning much easier. Volunteers and signs will help guide you to the right area.",
    icon: <Flag className="h-4 w-4" />,
  },
  {
    title: "Course Support",
    body: "Volunteers are stationed throughout both courses. They&apos;ll guide you, cheer you on, and keep the route easy to follow.",
    icon: <Waves className="h-4 w-4" />,
  },
  {
    title: "Finish Line Moment",
    body: "When you finish, you will be greeted with a custom medal, refreshments, and a well-earned moment to celebrate.",
    icon: <Trophy className="h-4 w-4" />,
  },
];

const raceDayGuidelines = [
  "Everyone is welcome — from experienced runners to first-time walkers.",
  "Please follow volunteers and course signage so the event stays safe and smooth for everyone.",
  "The 1-Mile Fun Run is a great fit for strollers, seniors, and anyone moving at a more relaxed pace.",
  "Please move carefully in the parking area and watch for vehicles and pedestrians around you.",
  "Bibs are tied to the registered runner and should not be transferred.",
];

export default function EventDetailsPage() {
  return (
    <PageShell
      activeLabel="Event Details"
      hero={{
        eyebrow: "Event Details",
        title: "Pick Your Distance",
        subtitle: "Two courses make it easy to choose the kind of race morning you want — fast and focused, or relaxed and family-friendly.",
        imageUrl: "/new-image/race-park-crowd.png",
      }}
    >
      {/* Distance cards */}
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
          <p className="text-base uppercase tracking-[0.08em] text-white/90 sm:text-xl">
            Start and finish are both located at the Hilliard Sports Complex across from the Wellness Fitness Center.
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
            Race Snapshot
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <CalendarDays className="h-4 w-4" /> Date
              </p>
              <p className="mt-2 text-lg text-white">2026 race date to be announced</p>
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
              <p className="mt-2 text-lg text-white">5K entry is $45 and the 1-Mile Fun Run is $40; prices increase after August 1st.</p>
            </div>
          </div>

          <div className="mt-7">
            <Link
              href="https://www.ultrafit-usa.com/hilliard5k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:text-base"
            >
              Register Now
              <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
            </Link>
          </div>
        </div>
      </section>

      {/* Event flow */}
      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-8">
        <div className="container mx-auto">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            Race Morning Flow
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            From parking to the finish line, here is what to expect on race day at the Hilliard Sports Complex.
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
              Course Overview
            </h3>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Both routes use the paved trail network around the complex, giving you a smooth, well-marked path from start to finish.
            </p>
            <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              The 5K covers the full 3.1-mile course, while the 1-Mile Fun Run uses the newer loop around the sports complex. Both routes are paved and easy to follow.
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
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">Rules &amp; Courtesy</h3>
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
              Stay aware of volunteers, signage, and nearby participants throughout race morning.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
