import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Swag | Hilliard Family Fun Run 5K",
  description: "See the race-day swag at the Hilliard Family Fun Run — custom race shirt, finisher medal, and finish line food.",
};

const swagItems = [
  {
    title: "Custom Race Shirt",
    body: "Every registered participant receives a great-looking shirt featuring the official Hilliard Family Fun Run colorful logo. Included with your registration while supplies last — another reason to sign up early.",
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=900&fit=crop&h=700",
  },
  {
    title: "Custom Finisher Medal",
    body: "Push through the finish line and you&apos;ll earn a custom medal with ribbon — crafted specifically for the Hilliard Family Fun Run. Whether it was your first race or your fifteenth, you earned it.",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Finish Line Food & Drinks",
    body: "You just ran a race — now it&apos;s time to celebrate. Food and beverages are waiting for every finisher at the line. Enjoy the moment, refuel, and share it with the people who cheered you on.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
  },
];

export default function SwagPage() {
  return (
    <PageShell
      activeLabel="Swag"
      hero={{
        eyebrow: "Race Day Swag",
        title: "Train For It. Earn It. Wear It.",
        subtitle: "Every participant gets a custom race shirt. Every finisher earns a medal with ribbon and finish line food. Here&apos;s what&apos;s waiting for you.",
        imageUrl: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80",
      }}
    >
      {/* Swag Cards */}
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

      {/* What You Get summary */}
      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-12">
        <div className="container mx-auto">
          <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">Registration Includes</p>
            <h2 className="mt-2 text-3xl font-black uppercase leading-none text-[#f3d27d] sm:text-4xl">
              Everything You Need To Celebrate
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              From the moment you register, you&apos;re part of the Hilliard Family Fun Run community.
              Your entry includes a colorful race shirt, a custom finisher medal with ribbon, and
              access to finish line refreshments — regardless of whether you ran the 5K or the
              1-Mile Fun Run. Every finisher gets the full experience.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Colorful race shirt", note: "All registered participants" },
                { label: "Custom finisher medal + ribbon", note: "All finishers" },
                { label: "Finish line food & drinks", note: "Post-race celebration" },
              ].map((i) => (
                <li
                  key={i.label}
                  className="rounded-2xl border border-white/15 bg-[#1e252d] px-4 py-4"
                >
                  <p className="font-black text-white">{i.label}</p>
                  <p className="mt-1 text-sm text-white/60">{i.note}</p>
                </li>
              ))}
            </ul>
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

      {/* Results reminder */}
      <section className="px-4 py-10 sm:px-8 sm:py-12">
        <div className="container mx-auto">
          <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">After The Race</p>
            <h2 className="mt-2 text-3xl font-black uppercase leading-none text-[#f3d27d] sm:text-4xl">
              Finish Times Posted Online
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              All 5K finish times will be recorded and posted online following the race at{" "}
              <a
                href="https://www.ultrafitusa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#f3d27d] transition hover:brightness-110"
              >
                www.ultrafitusa.com
              </a>
              . Check back after race day to find your official chip time, compare with friends,
              and start training for next year.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
