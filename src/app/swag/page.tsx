import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Swag | Hilliard Family Fun Run 5K",
  description: "See the race-day swag at the Hilliard Family Fun Run — custom shirt, finisher medal, and finish line food.",
};

const swagItems = [
  {
    title: "Custom Race Shirt",
    body: "All participants will be issued a great looking shirt featuring a colorful logo. Included with registration while supplies last.",
    image: "/TTshirt.jpg",
  },
  {
    title: "Custom Finisher Medal",
    body: "Each finisher will receive a custom finish medal with ribbon — a keepsake to celebrate your effort on race day.",
    image: "/Medal.png",
  },
  {
    title: "Finish Line Food & Beverage",
    body: "Finish line food and beverage will be waiting for your arrival. Celebrate your finish with the community!",
    image: "/finishline.jpg",
  },
];

export default function SwagPage() {
  return (
    <PageShell
      activeLabel="Swag"
      hero={{
        eyebrow: "Swag",
        title: "Run It. Earn It.",
        subtitle: "Every participant receives a custom shirt, and every finisher earns a custom medal with ribbon plus finish line food.",
        imageUrl: "/run.jpg",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          {swagItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
            >
              <div className="relative w-full border-b border-white/10 bg-black/20 min-h-96 md:min-h-190">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain md:object-cover opacity-80"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">Race Results</p>
            <h2 className="mt-2 text-3xl font-black uppercase leading-none text-[#f3d27d] sm:text-4xl">
              All Finish Times Posted Online
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              All finish times will be recorded and posted online following the race at{" "}
              <a
                href="https://www.ultrafitusa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#f3d27d] transition hover:brightness-110"
              >
                www.ultrafitusa.com
              </a>
              . Check back after race day to find your official time.
            </p>
            <div className="mt-6">
              <Link
                href="https://www.ultrafit-usa.com/hilliard5k"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-sm font-black uppercase tracking-wide text-[#f7d96f] transition hover:brightness-110 sm:text-base"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
