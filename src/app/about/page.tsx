import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Heart, Trophy } from "lucide-react";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "About | Hilliard Family Fun Run 5K",
  description: "Learn about the Hilliard Family Fun Run — a 5K and 1-Mile event for Central Ohio runners, walkers, seniors, and families.",
};

const values = [
  {
    title: "Everyone Welcome",
    body: "From avid runners to first-timers, walkers, seniors, and strollers — there is something for everyone both young and old.",
    icon: <Users className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Give Back",
    body: "Proceeds from the race benefit a local Central Ohio non-profit organization, making every step count.",
    icon: <Heart className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Celebrate Every Finish",
    body: "Every finisher receives a custom finish medal with ribbon. Your effort deserves to be recognized.",
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
            The Hilliard Family Fun Run:<br />
            A Morning for Everyone
          </>
        ),
        subtitle:
          "Attention Central Ohio running and walking enthusiasts. Join hundreds of like-minded individuals lacing up for a morning of fun and exercise.",
        imageUrl: "/finishline.jpg",
      }}
    >
      <section id="mission" className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-5xl">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              The Hilliard Family Fun Run brings together Central Ohio runners and walkers of all
              experience levels for a morning of fun and exercise. Whether you&apos;re an avid runner
              or someone who just wants to get started, we have something for everyone — young and
              old, including seniors and first-timers.
            </p>
            <p className="mt-3 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Best of all, proceeds benefit a local non-profit organization, making every mile you
              run a step toward a better community.
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
                src="/event.jpg"
                alt="Hilliard Family Fun Run race day"
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            What We Stand For
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

      <section className="bg-[#1e252d] px-4 py-4 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#f3d27d]">The Event</h2>
          <div className="mt-4">
            <p className="text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              The Hilliard Family Fun Run is an annual event that welcomes runners and walkers of
              all ages and experience levels. Staged at the Hilliard Sports Complex, directly across
              from the new Wellness Fitness Center, the event features two distances to suit every
              participant — a timed 5K and a casual 1-Mile Fun Run.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-4 sm:px-8">
        <div className="container mx-auto">
          <h4 className="text-2xl font-black uppercase tracking-tight text-[#f3d27d]">For Every Participant</h4>
          <div className="mt-4">
            <p className="text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Participants are encouraged to come out, meet new friends, and most importantly have
              fun. Whether you&apos;re challenging yourself physically or simply enjoying the
              community atmosphere, the event offers something for everyone. Walkers, seniors,
              strollers, and first-timers are all welcome.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-4 pb-10 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#f3d27d]">Community Spirit</h2>
          <div className="mt-4">
            <p className="text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              This event is open to all, making it easy to bring your family and friends along.
              It&apos;s an opportunity to create lasting memories and embrace the spirit of community
              that makes the Hilliard Family Fun Run so special — and to give back to a local
              non-profit organization in the process.
            </p>
          </div>
        </div>
      </section>

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
                  Questions about registration, packet pickup, or the race course? We&apos;re here to help.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/questions"
                    className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
                  >
                    Back To Home
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[220px] overflow-hidden rounded-[24px] border border-white/15 bg-black/40 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:min-h-[280px] lg:min-h-0">
                <Image
                  src="/photo.png"
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
