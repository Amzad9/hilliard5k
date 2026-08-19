import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Trophy, Users } from "lucide-react";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "About | Hilliard Family Fun Run 5K",
  description: "Learn about the Hilliard Family Fun Run — a 5K and 1-Mile event for Central Ohio runners, walkers, seniors, and families.",
};

const values = [
  {
    title: "Made for Every Pace",
    body: "Experienced runners, casual walkers, seniors, strollers, and first-timers all fit naturally into this event. The only requirement is a willingness to join the fun.",
    icon: <Users className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Run With Purpose",
    body: "Proceeds are directed to a local Central Ohio non-profit, helping race day create a lasting benefit for the community.",
    icon: <Heart className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Every Finish Matters",
    body: "At the finish line, every participant gets a custom medal and a well-earned reason to celebrate.",
    icon: <Trophy className="h-5 w-5" strokeWidth={2.2} />,
  },
];

export default function AboutPage() {
  return (
    <PageShell
      activeLabel="About"
      hero={{
        eyebrow: "About the Race",
        title: (
          <>
            A Race That Welcomes
            <br />
            Everyone
          </>
        ),
        subtitle:
          "The Hilliard Family Fun Run brings Central Ohio runners, walkers, families, seniors, and first-timers together for a morning that feels energetic, welcoming, and community-minded.",
        imageUrl: "/new-image/autumn-group-run.png",
        imageClassName: "h-[600px]"
      }}
    >
      {/* Mission */}
      <section id="mission" className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-5xl">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              This race is designed to make movement feel accessible. It gives the community an easy way to show up, get active, and enjoy race day side by side.
            </p>
            <p className="mt-3 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Each entry helps support a local non-profit, so every step on course adds up to something meaningful beyond the event itself.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="https://www.ultrafit-usa.com/hilliard5k"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
              >
                Register Now
              </Link>
              <Link
                href="/event-details"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                View Event Details
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_18px_44px_rgba(0,0,0,0.30)] sm:min-h-[360px]">
              <Image
                src="/Pic101.jpg"
                alt="Hilliard Family Fun Run — race morning energy"
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            What This Race Stands For
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-xl font-black uppercase tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Event Info sections */}
      <section className="bg-[#1e252d] px-4 py-6 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#f3d27d]">The Setting</h2>
          <div className="mt-4">
            <p className="text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              The event is staged at the Hilliard Sports Complex across from the Wellness Fitness Center. The venue offers paved trails, simple parking, and a smooth arrival experience for families and runners alike.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-6 sm:px-8">
        <div className="container mx-auto">
          <h4 className="text-2xl font-black uppercase tracking-tight text-[#f3d27d]">Your Kind of Race</h4>
          <div className="mt-4">
            <p className="text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Two distances keep the event accessible for all fitness levels. The 5K is a
              chip-timed 3.1-mile course through the complex&apos;s paved trails — open to runners
              and walkers of all speeds. The 1-Mile Fun Run follows the newer trails nearby and
              is designed specifically for families, strollers, seniors, and anyone who wants a
              casual, enjoyable morning on their feet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-6 pb-10 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#f3d27d]">Come Out, Give Back</h2>
          <div className="mt-4">
            <p className="text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              At the end of race day, what lingers is more than a medal or a finish time — it&apos;s
              the feeling of being part of a community that shows up for each other. Bring your
              family, bring a friend, and make it a morning you&apos;ll want to repeat year after year.
              Proceeds support a local Central Ohio non-profit, so your participation has a
              positive impact that outlasts the race.
            </p>
          </div>
        </div>
      </section>

      {/* CTA + Image */}
      <section className="px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
        <div className="container mx-auto">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="flex lg:col-span-5">
              <div className="flex w-full flex-col rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">Ready?</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Let&apos;s make race day unforgettable.
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  Questions about registration, packet pickup, the course, or anything else?
                  We&apos;re happy to help before race morning.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/questions"
                    className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[220px] overflow-hidden rounded-[24px] border border-white/15 bg-black/40 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:min-h-[280px] lg:min-h-0">
                <Image
                  src="/new-image/race-team-group-generic.png"
                  alt="Hilliard Family Fun Run participants"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
