import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

import { siteContact, siteNav } from "./siteConfig";

const socialIcons = {
  facebook_turkey_trot: Facebook,
  facebook_easterseals: Facebook,
  instagram_easterseals: Instagram,
  x: Twitter,
} as const;

export default function SiteFooter() {
  return (
    <footer className="mt-0 border-t border-white/10 bg-[#2a3138] px-3 pt-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-12">

          <div className="col-span-1 flex flex-col gap-0 sm:col-span-4">
            <div className="relative aspect-video overflow-hidden rounded-md bg-[#1a2027]">
            <video
  className="absolute inset-0 h-full w-full object-contain p-4"
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
          <div className="col-span-1 hidden sm:col-span-2 sm:block">
            <h4 className="text-xl font-black uppercase text-white">Address</h4>
            <p className="mt-2 text-lg leading-7 text-[#d7dee2] sm:text-xl sm:leading-8">
              {siteContact.addressLines[0]}
              <br />
              {siteContact.addressLines[1]}
              <br />
              {siteContact.addressLines[2]}
            </p>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <h4 className="text-xl font-black uppercase text-white">Links</h4>
            <ul className="mt-2 space-y-1 text-lg font-medium capitalize text-[#d7dee2] sm:text-md">
              {siteNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[#f0d07a]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <h4 className="text-xl font-black uppercase text-white">Contact</h4>
            <a
              href={`mailto:${siteContact.emailShowroom}`}
              className="mt-3 block text-sm text-[#d7dee2] transition hover:text-[#f0d07a] sm:text-lg"
            >
              {siteContact.emailShowroom}
            </a>
            <a
              href={siteContact.phoneHref}
              className="mt-2 block text-lg text-[#d7dee2] transition hover:text-[#f0d07a] sm:text-xl"
            >
              {siteContact.phone}
            </a>

            <h4 className="mt-4 text-xl font-black uppercase text-white">Address</h4>
            <p className="mt-2 text-lg leading-7 text-[#d7dee2] sm:text-xl sm:leading-8">
              {siteContact.addressLines[0]}
              <br />
              {siteContact.addressLines[1]}
              <br />
              {siteContact.addressLines[2]}
            </p>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <h4 className="text-xl font-black uppercase text-white">Follow Us</h4>
            <div className="mt-3 flex gap-2">
              {siteContact.socials.map(({ key, href, label }) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-[#ffffff] transition hover:bg-white/20"
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#131920] py-4 text-center text-sm font-semibold text-[#c7d1d6]">
        &copy; {new Date().getFullYear()} Hilliard Family Fun Run. All rights reserved.
      </div>
    </footer>
  );
}
