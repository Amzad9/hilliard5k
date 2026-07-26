import type { Metadata } from "next";
import Link from "next/link";
import { Car, Clock3, MapPin, ParkingCircle } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Race Map | Hilliard Family Fun Run 5K",
  description: "Directions and location for the Hilliard Family Fun Run at Hilliard Sports Complex, 5001 Scioto Darby Rd, Hilliard OH.",
};

const tips = [
  {
    title: "Free Parking On Site",
    body: "Plenty of free parking is available at and around the Hilliard Sports Complex. Arrive early on race morning to secure a convenient spot before the lot fills up.",
    icon: <ParkingCircle className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Arrive Early",
    body: "Plan to arrive at least 30 minutes before your wave. That gives you time to park, warm up, collect your packet if needed, and make it to the start line relaxed.",
    icon: <Clock3 className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Follow Race Signage",
    body: "Event volunteers and race signage are placed throughout the complex and the surrounding roads. Follow their direction for safe, smooth traffic flow and race day navigation.",
    icon: <Car className="h-5 w-5" strokeWidth={2.2} />,
  },
];

export default function MapsPage() {
  return (
    <PageShell
      activeLabel="Race Map"
      hero={{
        eyebrow: "Race Map & Directions",
        title: (
          <>
            Find the Complex.
            <br />
            Arrive With Confidence.
          </>
        ),
        subtitle:
          "The Hilliard Sports Complex is easy to find and has plenty of parking. Here&apos;s everything you need to get there on race day.",
        imageUrl: "https://images.unsplash.com/photo-1616279969856-759f316a5ac1?auto=format&fit=crop&w=1600&q=80",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          {/* Address + Tips */}
          <div className="lg:col-span-5">
            <div className="rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
              <div className="flex items-start gap-3">
                <span className="rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                  <MapPin className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                    Race Venue Address
                  </p>
                  <p className="mt-3 text-lg font-black text-white">{siteContact.addressLines[0]}</p>
                  <p className="mt-2 text-base leading-7 text-white/80">
                    {siteContact.addressLines[1]}
                    <br />
                    {siteContact.addressLines[2]}
                  </p>
                  <p className="mt-2 text-sm text-white/65">
                    Located directly across from the new Wellness Fitness Center on Scioto Darby Rd.
                  </p>
                  <a
                    href={siteContact.directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex text-sm font-black uppercase tracking-[0.14em] text-[#f3d27d] transition hover:brightness-110"
                  >
                    Open In Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6">
              {tips.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
                >
                  <span className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/event-details"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                Event Details
              </Link>
              <Link
                href="/questions"
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[24px] border border-white/15 bg-white/5 shadow-[0_18px_44px_rgba(0,0,0,0.30)]">
              <div className="flex flex-col gap-2 border-b border-white/10 px-6 py-5 sm:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                  Interactive Map
                </p>
                <p className="text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                  Tap and zoom to plan your drive. The Hilliard Sports Complex is conveniently located
                  off Scioto Darby Rd in Hilliard, Ohio.
                </p>
              </div>

              <div className="h-[340px] w-full sm:h-[420px] lg:h-[520px]">
                <iframe
                  title="Hilliard Sports Complex location map"
                  src="https://www.google.com/maps?q=5001+Scioto+Darby+Rd,+Hilliard,+OH+43026&z=15&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
