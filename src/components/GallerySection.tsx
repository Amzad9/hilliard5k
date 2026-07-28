"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryImages = [
  {
    src: "/new-image/race-start-crowd.png",
    alt: "Hilliard Family Fun Run — runners on the paved course",
  },
  {
    src: "/new-image/race-coastal-runners.png",
    alt: "Hilliard Family Fun Run — trail running along the route",
  },
  {
    src: "/new-image/race-crowd-finish.png",
    alt: "Hilliard Family Fun Run — runners gathering at the start",
  },
  {
    src: "/new-image/race-cheer-signs.png",
    alt: "Hilliard Family Fun Run — kids and families at the fun run",
  },
  {
    src: "/new-image/race-finish-ribbon.png",
    alt: "Hilliard Family Fun Run — finisher medals on display",
  },
  {
    src: "/new-image/race-friends-pack.png",
    alt: "Hilliard Family Fun Run — family running together on race day",
  },
];

type GallerySectionProps = {
  ctaHref?: string;
  ctaLabel?: string;
  fullWidth?: boolean;
  showHeader?: boolean;
};

export default function GallerySection({
  ctaHref = "/case-studies",
  ctaLabel = "Open Race Day Guide",
  fullWidth = false,
  showHeader = true,
}: GallerySectionProps) {
  return (
    <section className="bg-linear-to-b from-[#151b22] to-[#0f141a] px-4 py-10 sm:px-8 sm:py-14">
      <div className={fullWidth ? "mx-auto w-full max-w-[1600px]" : "container mx-auto"}>
        {showHeader ? (
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
              Event Gallery
            </p>
            <h2 className="mt-3 text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
              Race Day Highlights
            </h2>
            <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
              Race-day moments featuring runners, walkers, families, and the friendly energy that makes the Hilliard Family Fun Run stand out.
            </p>
          </div>
        ) : null}

        <div className="relative mt-10 rounded-[24px] border border-[#495867] bg-[#141a21] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-6">
          <button className="gallery-swiper-prev absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/12 bg-black/45 p-3 text-white transition hover:bg-black/65 md:inline-flex">
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <button className="gallery-swiper-next absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/12 bg-black/45 p-3 text-white transition hover:bg-black/65 md:inline-flex">
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".gallery-swiper-prev",
              nextEl: ".gallery-swiper-next",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="gallery-swiper"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.src}>
                <article className="overflow-hidden rounded-[22px] border border-white/10 bg-[#202831] shadow-[0_12px_28px_rgba(0,0,0,0.28)]">
                  <div className="relative h-72">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full border border-[#f06a74] bg-linear-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#ffffff] shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 sm:px-8 sm:text-base"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
