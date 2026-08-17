import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Questions | Hilliard Family Fun Run 5K",
  description: "Answers to common questions about the Hilliard Family Fun Run — registration, packet pickup, race day, and everything in between.",
};

const faq = [
  {
    question: "How do I register?",
    answer: "Registration is available online at www.ultrafit-usa.com/hilliard5k. Any Register Now button on the site will take you straight to the signup page.",
  },
  {
    question: "What race distances are available?",
    answer: "There are two choices: a chip-timed 5K starting at 9:00 AM and a 1-Mile Family Fun Run starting around 9:10 AM. Both begin and end at Hilliard Sports Complex.",
  },
  {
    question: "What are the entry fees?",
    answer: "Entry Fee 5K — $50/ 1-Mile Fun Run — $45. Rates increase after October 1st, so early registration is the best value.",
  },
  {
    question: "Who can participate in the 1-Mile Fun Run?",
    answer: "Anyone can join the 1-Mile Fun Run. It is built for walkers, seniors, strollers, families, and first-timers who want a more relaxed morning.",
  },
  {
    question: "Can someone else pick up my packet?",
    answer: "Yes. Someone else may pick up your packet for you as long as they know your full name and registered event.",
  },
  {
    question: "Where will race results be posted?",
    answer: "5K finish times are recorded and posted online after the event at www.ultrafitusa.com.",
  },
  {
    question: "Where do I park?",
    answer: "Free parking is available around the Hilliard Sports Complex. Arriving early helps you avoid the busiest part of race morning.",
  },
  {
    question: "What do I receive when I register?",
    answer: "Every registered participant receives a race shirt, and every finisher gets a custom medal with ribbon. Finish-line food and drinks are part of the celebration too.",
  },
  {
    question: "Is the course accessible for strollers?",
    answer: "Yes. The 1-Mile Fun Run follows the newer paved trails around the sports complex and works well for strollers, seniors, and slower-paced participants.",
  },
  {
    question: "Are entries refundable?",
    answer: "Entries are non-refundable, and bib transfers are not allowed. Reach out if you have a question about your registration.",
  },
];

export default function QuestionsPage() {
  return (
    <PageShell
      activeLabel="Questions"
      hero={{
        eyebrow: "Questions",
        title: "We\u2019re Happy To Help",
        subtitle: "Browse the most common questions below, or reach out by phone or email if you need a quick answer before race day.",
        imageUrl: "/new-image/questions-info-booth.png",
        imageClassName: "h-[600px]",
      }}
    >
      {/* Contact methods */}
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          <a
            href={siteContact.phoneHref}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <Phone className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Race Hotline</h2>
            <p className="mt-2 text-white/85">{siteContact.phone}</p>
            <p className="mt-1 text-sm text-white/60">
              Reach out for help with registration, packet pickup, race-day logistics, or anything else on your mind.
            </p>
          </a>
          <a
            href={`mailto:${siteContact.emailShowroom}`}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <Mail className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Email Us</h2>
            <p className="mt-2 text-white/85">{siteContact.emailShowroom}</p>
            <p className="mt-1 text-sm text-white/60">
              Send us an email anytime and we will get back to you as soon as we can.
            </p>
          </a>
          <Link
            href="/event-details"
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <MessageCircle className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Event Info</h2>
            <p className="mt-2 text-white/85">
              Open the event details page for distances, timing, course notes, pricing, and signup links.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            Frequently Asked Questions
          </h3>
          <p className="mt-3 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Can&apos;t find your answer below? Call us at{" "}
            <a href={siteContact.phoneHref} className="font-semibold text-[#f3d27d] hover:brightness-110 transition">
              {siteContact.phone}
            </a>.
          </p>
          <div className="mt-6 grid gap-4">
            {faq.map((item) => (
              <article key={item.question} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <h4 className="text-lg font-black text-white sm:text-xl">{item.question}</h4>
                <p className="mt-2 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
