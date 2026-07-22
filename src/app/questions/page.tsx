import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Questions | Hilliard Family Fun Run 5K",
  description: "Get answers about registration, packet pickup, and race-day questions for the Hilliard Family Fun Run.",
};

const faq = [
  {
    question: "Can I register online?",
    answer: "Yes. Registration is available at www.ultrafit-usa.com/hilliard5k. Click any Register button on this site to go directly to the registration page.",
  },
  {
    question: "What events are available?",
    answer: "We offer a timed 5K run/walk (9:00 AM) and a 1-Mile Family Fun Run (approx. 9:10 AM). Both start and finish at the Hilliard Sports Complex.",
  },
  {
    question: "What are the entry fees?",
    answer: "The 5K is $45 and the 1-Mile Fun Run is $40. Prices increase after August 1st, so register early.",
  },
  {
    question: "Who can participate in the 1-Mile Fun Run?",
    answer: "The 1-Mile Fun Run is for anyone who enjoys a more casual distance — walkers, seniors, strollers, and families are all welcome.",
  },
  {
    question: "Can someone else pick up my packet?",
    answer: "Yes. A friend or family member may pick up your race packet if you cannot attend. See our Packet Pickup page for full proxy details.",
  },
  {
    question: "Where will race results be posted?",
    answer: "All finish times will be recorded and posted online at www.ultrafitusa.com following the race.",
  },
  {
    question: "Where is parking?",
    answer: "There is plenty of parking at and around the Hilliard Sports Complex. Please exercise caution when you arrive.",
  },
];

export default function QuestionsPage() {
  return (
    <PageShell
      activeLabel="Questions"
      hero={{
        eyebrow: "Questions",
        title: "We\u2019re Here To Help",
        subtitle: "Need help with registration, packet pickup, or race-day details? Reach out to our race hotline.",
        imageUrl: "/question.jpg",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          <a
            href={siteContact.phoneHref}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <Phone className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Race Hotline</h2>
            <p className="mt-2 text-white/85">{siteContact.phone}</p>
            <p className="mt-1 text-sm text-white/60">For any questions, please call us directly.</p>
          </a>
          <a
            href={`mailto:${siteContact.emailShowroom}`}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <Mail className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Email Us</h2>
            <p className="mt-2 text-white/85">{siteContact.emailShowroom}</p>
          </a>
          <Link
            href="/event-details"
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <MessageCircle className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Event Info</h2>
            <p className="mt-2 text-white/85">See race distances, start times, course maps, and registration links.</p>
          </Link>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">FAQ</h3>
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
