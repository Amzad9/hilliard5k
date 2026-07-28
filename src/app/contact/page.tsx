import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Contact | Hilliard Family Fun Run 5K",
  description: "Contact the Hilliard Family Fun Run team for registration help, packet pickup, and race-day information.",
};

const contactOptions = [
  {
    title: "Race Hotline",
    body: "Call our team for help with registration, race morning timing, or general event questions.",
    value: siteContact.phone,
    href: siteContact.phoneHref,
    icon: <Phone className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Email Us",
    body: "Email us if you need help with packet pickup, registration, race information, or anything else related to the event.",
    value: siteContact.emailShowroom,
    href: `mailto:${siteContact.emailShowroom}`,
    icon: <Mail className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Sponsorship & Volunteering",
    body: "If you want to help as a sponsor or volunteer, send us a message and we will point you in the right direction.",
    value: siteContact.emailOperations,
    href: `mailto:${siteContact.emailOperations}`,
    icon: <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />,
  },
];

export default function ContactPage() {
  return (
    <PageShell
      activeLabel="Questions"
      hero={{
        eyebrow: "Contact Us",
        title: (
          <>
            Questions?
            <br />
            We&apos;re Here.
          </>
        ),
        subtitle:
          "Reach out by phone or email if you need help with registration, packet pickup, race-day logistics, or general event questions.",
        imageUrl: "/new-image/race-medal-handoff.png",
      }}
    >
      {/* Quick CTA Row */}
      <section className="px-4 py-8 sm:px-8 sm:py-10">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={siteContact.phoneHref}
              className="inline-flex w-full items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-7 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-auto sm:px-8 sm:text-base"
            >
              Call {siteContact.phone}
            </a>
            <a
              href={`mailto:${siteContact.emailShowroom}`}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-auto sm:px-8 sm:text-base"
            >
              Email Us
            </a>
            <Link
              href="/event-details"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
            >
              Event Details
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contactOptions.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-white/15 bg-[#1e252d] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.35)] transition hover:brightness-110"
              >
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                  {item.icon}
                </span>
                <h2 className="mt-4 text-2xl font-black uppercase leading-tight tracking-tight text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                  {item.body}
                </p>
                <p className="mt-5 break-words whitespace-normal text-sm font-black uppercase tracking-[0.16em] text-[#f3d27d]">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Location + Schedule */}
      <section className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="container mx-auto">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:col-span-7 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                Before You Arrive
              </p>
              <h2 className="mt-3 text-3xl font-black leading-[0.95] tracking-tight text-[#f3d27d] sm:text-4xl lg:text-5xl">
                Race-Day Basics
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                Advance packet pickup is recommended to avoid race-morning lines. If you&apos;re unable
                to attend pickup, a friend or family member can collect your bib on your behalf —
                just share your full name and registered event with them.
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  "5K begins at 9:00 AM — plan to be near the start area a little before that",
                  "The 1-Mile Fun Run starts around 9:10 AM and is a great fit for walkers and strollers",
                  "Venue: Hilliard Sports Complex, 5001 Scioto Darby Rd, Hilliard, OH 43026",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-4"
                  >
                    <span className="mt-0.5 h-2 w-2 shrink-0 translate-y-[6px] rounded-full bg-[#f3d27d]" />
                    <p className="text-base leading-7 text-white/90">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${siteContact.emailShowroom}`}
                  className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:px-8 sm:text-base"
                >
                  Send Email
                </a>
                <Link
                  href="/event-details"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:px-8 sm:text-base"
                >
                  See Event Details
                </Link>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
                <div className="flex items-start gap-3">
                  <span className="rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                    <MapPin className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                      Race Venue
                    </p>
                    <p className="mt-3 text-lg font-black text-white">{siteContact.addressLines[0]}</p>
                    <p className="mt-2 text-base leading-7 text-white/80">
                      {siteContact.addressLines[1]}
                      <br />
                      {siteContact.addressLines[2]}
                    </p>
                    <p className="mt-1 text-sm text-white/60">
                      The venue is located directly across from the Wellness Fitness Center.
                    </p>
                    <a
                      href={siteContact.directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.14em] text-[#f3d27d] transition hover:brightness-110"
                    >
                      Open Directions
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
                <div className="flex items-start gap-3">
                  <span className="rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                    <Clock3 className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div className="w-full">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                      Race Schedule
                    </p>
                    <div className="mt-4 space-y-3">
                      {siteContact.businessHours.map((item) => (
                        <div
                          key={item}
                          className="flex flex-col gap-1 border-b border-white/10 pb-3 text-sm text-white/80 last:border-b-0 last:pb-0"
                        >
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
