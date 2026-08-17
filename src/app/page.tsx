import Image from "next/image";
import Link from "next/link";

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#2a3138,#1a2027_50%,#161b22)] text-[#f1f4f6]">
      <div className="">
        <SiteHeader activeLabel="Home" />

        {/* ── HERO ── */}
        <section
          id="home"
          className="relative overflow-hidden px-4 bg-[#1e252d] pt-18 pb-8"
        >
          <div className="container mx-auto">
            <div className="relative z-10 grid gap-6 lg:grid-cols-2 lg:items-center">
              <div className="max-w-7xl">
                <h1 className="text-4xl md:text-4xl font-black uppercase leading-[0.92] text-[#00a2e7]">
                HILLIARD 5K AND FUN RUN.
                </h1>
                <p className="mt-3 text-2xl font-semibold text-[#f3d27d] sm:text-4xl">
                November 1st, 9am (Hilliard Ohio)
                </p>
              
                <p className="mt-5 max-w-4xl text-lg leading-9 text-white/95 sm:text-2xl sm:leading-[1.3]">
                  Central Ohio runners, walkers, families, seniors, and first-time participants are all welcome. Come for the movement, the atmosphere, and the chance to support a local cause.
                </p>
                <div className="mt-7">
                  <Link
                    href="https://www.ultrafit-usa.com/hilliard5k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-[#1f7f56] bg-[#1c9a64] px-10 py-4 text-md md:text-xl font-black uppercase tracking-[0.05em] text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110"
                  >
                    Register Now
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl">
                <div className="relative mt-5 aspect-video w-full overflow-hidden  rounded-3xl border border-white/15 bg-[#1e252d]">
                <video
  className="absolute inset-0 h-full w-full object-contain p-0"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src="/new-image/Hilliard 5K - Family Fun Run Animation (1) (1).mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
                 
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3-CARD OVERVIEW ── */}
        <section id="overview" className="mt-4 bg-[#212831]">
          <div className="container mx-auto grid gap-4 px-4 py-8 md:grid-cols-3">
            {[
              {
                title: "5K Run / Walk",
                body: "A straightforward 3.1-mile paved route for runners and walkers who want a clear, well-marked challenge.",
              },
              {
                title: "1-Mile Fun Run",
                body: "A low-pressure one-mile option for strollers, seniors, kids, and anyone who wants a lighter race morning.",
              },
              {
                title: "Community Impact",
                body: "Every registration helps a local non-profit and turns race day into something bigger than the course.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/12 bg-white/5 p-4">
                <h3 className="text-2xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-2 text-xl leading-8 text-white/90">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── ABOUT THE RACE ── */}
        <section id="about" className="mt-4 bg-[#1d232b] px-4 py-10 sm:px-8">
          <div className="container mx-auto">
            <div className="rounded-[28px] border border-white/15 bg-white/5 p-6 sm:p-10">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
                    Start &amp; Finish
                  </p>
                  <h2 className="mt-2 text-3xl font-black uppercase leading-none text-[#f3d27d] sm:text-4xl">
                    Hilliard Sports Complex
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
                    Everything unfolds at the Hilliard Sports Complex, directly across from the Wellness Fitness Center. It is an easy-to-navigate venue with room for participants, families, and supporters.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/90">
                  <span className="h-2 w-2 rounded-full bg-[#1c9a64]" aria-hidden />
                  Free Parking On Site
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <article className="rounded-3xl border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">9:00 AM</p>
                  <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                    5K Run &amp; Walk
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg">
                    Competitive runners and casual walkers alike take the 3.1-mile paved trail
                    course. Chip-timed results are posted online after the event. Whether you&apos;re
                    setting a PR or just getting your steps in, this race has a place for you.
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/maps"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
                    >
                      View Race Map
                    </Link>
                  </div>
                </article>

                <article className="rounded-3xl border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                    Approx. 9:10 AM
                  </p>
                  <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                    1-Mile Family Fun Run
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg">
                    This shorter route keeps the morning relaxed and is ideal for walkers, families, strollers, seniors, and first-time participants.
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/event-details"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
                    >
                      Event Details
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ── SWAG & FINISHER PERKS ── */}
        <section id="swag" className="mt-5 bg-[#1d232b] px-4 py-8 sm:px-8">
          <div className="container mx-auto">
            <div className="rounded-[28px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.30)] sm:p-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/75">
                    Every Finisher
                  </p>
                  <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#f3d27d] sm:text-4xl lg:text-5xl">
                    Swag &amp; Finisher Rewards
                  </h2>
                  <p className="mt-4 max-w-5xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                    Cross the finish line and you&apos;ve earned it. Every registered participant
                    gets a colorful race shirt. Every finisher takes home a custom medal with ribbon.
                    And fresh finish line food and beverages will be waiting the moment you cross.
                  </p>
                  <p className="mt-4 max-w-5xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
  Enjoy a professionally organized race experience with clearly marked routes, on-course hydration stations, enthusiastic volunteers, and accurate chip timing to help you perform your best.
</p>

<p className="mt-4 max-w-5xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
  Whether you're aiming for a personal best, running alongside friends, or taking on your very first marathon, you'll be part of an inspiring community that celebrates every runner from the starting line to the finish.
</p>
                </div>

                <div className="relative overflow-hidden rounded-3xl  bg-[#1e252d] shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
                  <div className="relative aspect-18/10 w-full">
                    {/* <Image
                      src="/new-image/race-finish-ribbon.png"
                      alt="Runners celebrating at the finish line"
                      fill
                      className="object-cover"
                    /> */}
                     <video
  className="absolute inset-0 h-full w-full object-contain p-0"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src="/new-image/Hilliard 5K - Family Fun Run Animation (1) (1).mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
                  </div>
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-2 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-[#f3d27d]" aria-hidden />
                    <span className="text-xs font-black uppercase tracking-[0.12em] text-[#f0d07a]">
                      Finisher Perks
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {[
                  {
                    title: "Race Shirt",
                    body: "All registered participants receive a colorful event shirt featuring the official Hilliard Family Fun Run logo — a simple keepsake from race day.",
                  },
                  {
                    title: "Finisher Medal",
                    body: "A custom finish medal with ribbon awaits every finisher. You trained for it, earned it, and now get to wear it with pride.",
                  },
                  {
                    title: "Finish Line Food",
                    body: "Finish-line food and drinks are served after the race. Refuel, celebrate, and replay the best moments with your crew.",
                  },
                ].map((item) => (
                  <article key={item.title} className="rounded-3xl border border-white/15 bg-[#1e252d] p-6">
                    <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED EVENT DETAILS ── */}
        <section id="details" className="mt-5 bg-[#1d232b] px-4 py-6 sm:px-8">
          <div className="container mx-auto grid items-center gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="md:text-4xl font-black uppercase leading-none text-[#f3d27d] text-2xl">
                At-A-Glance Event Info
              </h2>
              <ul className="mt-5 space-y-4 text-xl leading-tight text-white/95 sm:text-xl">
                <li>
                  <span className="font-semibold">Entry Fee:</span> 5K — $50/ 1-Mile Fun Run — $45.
                  Prices increase October 1st. register early to lock in the lower rate.
                </li>
                <li>
                  <span className="font-semibold">Race morning schedule:</span> 5K starts at 9:00 AM,
                  1-Mile Fun Run starts approx. 9:10 AM. Arrive by 8:45 AM to warm up.
                </li>
                <li>
                  <span className="font-semibold">Location:</span> Hilliard Sports Complex,
                  5001 Scioto Darby Rd, Hilliard, OH 43026. Free parking available.
                </li>
                <li>
                  <span className="font-semibold">Race Hotline:</span>{" "}
                  <a href="tel:+16143325205" className="text-[#f3d27d] hover:brightness-110 transition">
                    (614) 332-5205
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#1e252d] shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
              <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
                {/* <Image
                  src="/new-image/race-crowd-finish.png"
                  alt="Hilliard Sports Complex race venue"
                  fill
                  className="object-cover"
                /> */}
                 <video
  className="absolute inset-0 h-full w-full object-contain p-0"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src="/new-image/Hilliard 5K - Family Fun Run Animation (1) (1).mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION ── */}
        <section id="about-race" className="mt-0 bg-[#1e252d] px-4 py-6 sm:px-8 sm:py-12">
          <div className="container mx-auto grid gap-6 lg:grid-cols-[0.5fr_1fr]">
            <div className="relative min-h-[250px] overflow-hidden rounded-3xl ">
            <video
  className="absolute inset-0 h-full w-full object-contain p-0"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src="/new-image/Hilliard 5K - Family Fun Run Animation (1) (1).mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
            </div>
            <div>
              <h3 className="md:text-4xl font-black uppercase leading-none text-[#f3d27d] text-2xl">
                Why People Love This Race
              </h3>
              <p className="mt-4 max-w-6xl text-xl leading-8 text-white/95 sm:text-xl sm:leading-[1.3]">
              Welcome to the first annual Hilliard 5K and Family Fun Run. We hope to start a local tradition that brings Central Ohio residents together year after year.
              </p>
              <p className="mt-3 max-w-6xl text-xl leading-8 text-white/95 sm:text-xl sm:leading-[1.3]">
              Designed for both competitive runners as well as the more casual runner or walker looking for a fun and friendly venue. Our Family Fun Run (or walk) is the perfect distance for those who enjoy the outdoors, clean air, meeting new people and lacing up the sneakers. Seniors…………..this is for you!
              </p>
             
              <div className="mt-6">
                <Link
                  href="https://www.ultrafit-usa.com/hilliard5k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-xl font-black uppercase tracking-[0.05em] text-[#f7d96f] transition hover:brightness-110"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── RACE RESULTS / HOTLINE CTA ── */}
        <section id="results" className="mt-4 bg-[#212831] px-4 py-8 sm:px-8">
          <div className="container mx-auto grid gap-4 md:grid-cols-3">
            {[
              {
                eyebrow: "Race Results",
                title: "Results Posted Online",
                body: "Finish times are recorded and posted online after the event. Check your result, compare notes, and share it with friends.",
              },
              {
                eyebrow: "Packet Pickup",
                title: "Advance Pickup Available",
                body: "Pick up your race packet before race day to keep race morning simple. A friend or family member can also collect on your behalf.",
              },
              {
                eyebrow: "Race Hotline",
                title: "(614) 332-5205",
                body: "Questions about registration, timing, or race-day logistics? Our hotline is ready to help.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/60">{item.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-black uppercase text-[#f3d27d]">{item.title}</h3>
                <p className="mt-2 text-lg leading-7 text-white/90">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── REGISTER CTA ── */}
        <section id="register" className="mt-4 bg-[#1d232b] px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/60">
              Prices increase October 1st — secure your spot today
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-none text-[#f3d27d] sm:text-5xl">
              Ready To Run?
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Join hundreds of Central Ohio runners and walkers at the 2026 Hilliard Family Fun Run.
              5K — $50 &nbsp;|&nbsp; 1-Mile Fun Run — $45.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://www.ultrafit-usa.com/hilliard5k"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#1f7f56] bg-[#1c9a64] px-10 py-4 text-lg font-black uppercase tracking-[0.05em] text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110"
              >
                Register Now
              </Link>
              <Link
                href="/event-details"
                className="inline-flex rounded-full border border-white/20 bg-white/10 px-10 py-4 text-lg font-black uppercase tracking-[0.05em] text-white transition hover:bg-white/15"
              >
                Event Details
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
