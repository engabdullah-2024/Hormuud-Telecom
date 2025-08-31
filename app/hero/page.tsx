// app/hero.tsx
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { MotionConfig, motion, AnimatePresence, cubicBezier } from "framer-motion"; // ⬅️ add cubicBezier
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Wifi,
  Phone,
  Mail,
  RadioTower,
  Globe2,
  Box,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * 3-slide Hero carousel + sections
 * Stack: Next.js + TypeScript + Tailwind + shadcn/ui + Framer Motion
 *
 * Replace /keydplus.png and /anfac.avif with your assets.
 */

// ⬅️ typed easing function (fixes TS error)
const EASE = cubicBezier(0.16, 1, 0.3, 1);

const fade = (y = 20, delay = 0) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE, delay } },
});

type Slide = {
  id: string;
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  cta: { label: string; href: string };
  chip?: string; // small pill near CTA
  image: { src: string; alt: string; pricePill?: string }; // right artwork
};

export default function Hero() {
  // ----- Slides data (3) -----
  const slides: Slide[] = useMemo(
    () => [
      {
        id: "keep-number",
        eyebrow: "Stay connected • No deactivation worry",
        title: (
          <>
            KEEP YOUR MOBILE
            <br />
            <span className="text-emerald-600">NUMBER ACTIVE</span>
          </>
        ),
        description: (
          <>
            Stay connected without worrying about deactivation or losing your number for{" "}
            <strong>2 years</strong>, just <strong>$12</strong>.
          </>
        ),
        cta: { label: "SUBSCRIBE NOW", href: "#subscribe" },
        chip: "$12 • 2 Years",
        image: { src: "/keydplus.png", alt: "KaydPlus SIM", pricePill: "$12" },
      },
      {
        id: "afordabable",
        eyebrow: "Afordable For You",
        title: <>Talk longer for less</>,
        description: (
          <>
            With <strong>80 minutes</strong> of calls from as little as <strong>$1</strong>, never
            leave a story untold when you opt for one of Hormuud’s local packages.
          </>
        ),
        cta: { label: "GET STARTED NOW", href: "#start" },
        chip: "$1 • 80 Minutes",
        image: { src: "/anfac.avif", alt: "Anfac package" },
      },
      {
        id: "evc-plus",
        eyebrow: "EVC Plus",
        title: (
          <>
            Send & receive money
            <br />
            <span className="text-emerald-600">securely</span>
          </>
        ),
        description: (
          <>
            One of Africa’s most secure mobile money platforms—fast transfers, bill payments and
            more, right on your phone.
          </>
        ),
        cta: { label: "OPEN EVC PLUS", href: "#evc" },
        chip: "Secure • Fast",
        image: { src: "/keydplus.png", alt: "EVC Plus" },
      },
    ],
    []
  );

  // ----- Carousel state -----
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goTo = useCallback(
    (next: number, dir: 1 | -1) => {
      const total = slides.length;
      const i = (next + total) % total;
      setDirection(dir);
      setIndex(i);
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    const t = setInterval(() => goTo(index + 1, 1), 8000);
    return () => clearInterval(t);
  }, [index, goTo]);

  const slide = slides[index];

  return (
    <MotionConfig reducedMotion="user">
      {/* ====== HERO (carousel of 3 slides) ====== */}
      <section
        className="relative overflow-hidden bg-white"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") next();
          if (e.key === "ArrowLeft") prev();
        }}
        aria-roledescription="carousel"
        aria-label="Featured offers"
      >
        {/* Prev/Next buttons */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between px-3 sm:px-6">
          <Button
            size="icon"
            variant="outline"
            className="pointer-events-auto h-9 w-9 rounded-full border-2 border-emerald-600/30 bg-white/90 shadow-md hover:bg-white"
            aria-label="Previous slide"
            onClick={prev}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="pointer-events-auto h-9 w-9 rounded-full border-2 border-emerald-600/30 bg-white/90 shadow-md hover:bg-white"
            aria-label="Next slide"
            onClick={next}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Top wave */}
        <svg
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-[520px] w-full"
          viewBox="0 0 1440 520"
          preserveAspectRatio="none"
        >
          <path
            d="M0,140 C240,60 480,60 720,120 C960,180 1200,220 1440,140 L1440,0 L0,0 Z"
            className="fill-emerald-600/10"
          />
        </svg>

        {/* Slide viewport */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative h-full">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={slide.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60, transition: { duration: 0.45, ease: EASE } }}
                className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24 lg:py-28"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${slides.length}`}
              >
                {/* Left: copy */}
                <div className="relative">
                  {slide.eyebrow && (
                    <motion.p
                      variants={fade(10, 0)}
                      initial="hidden"
                      animate="show"
                      className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800"
                    >
                      {slide.eyebrow}
                    </motion.p>
                  )}

                  <motion.h1
                    variants={fade(16, 0.05)}
                    initial="hidden"
                    animate="show"
                    className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    variants={fade(16, 0.1)}
                    initial="hidden"
                    animate="show"
                    className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    variants={fade(16, 0.18)}
                    initial="hidden"
                    animate="show"
                    className="mt-6 flex flex-wrap items-center gap-3"
                  >
                    <Button asChild className="h-11 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">
                      <Link href={slide.cta.href}>{slide.cta.label}</Link>
                    </Button>

                    {slide.chip && (
                      <div className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">
                        <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                          {slide.chip.split("•")[0]?.trim()}
                        </span>
                        {slide.chip.includes("•") && (
                          <>
                            <span className="text-gray-500">•</span>
                            <span>{slide.chip.split("•")[1]?.trim()}</span>
                          </>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Right: artwork */}
                <motion.div
                  variants={scaleIn(0.12)}
                  initial="hidden"
                  animate="show"
                  className="relative mx-auto aspect-square w-[88%] max-w-[520px] sm:w-[85%] md:w-full"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.25),transparent_60%)]"
                  />
                  <Card className="absolute inset-0 grid place-items-center overflow-hidden rounded-3xl border-0 shadow-2xl ring-1 ring-emerald-900/5">
                    <CardContent className="relative grid place-items-center p-0">
                      <Image
                        src={slide.image.src}
                        alt={slide.image.alt}
                        width={640}
                        height={640}
                        priority
                        className="h-auto w-[88%] object-contain"
                      />
                      {slide.image.pricePill && (
                        <div className="absolute bottom-6 right-6 rounded-full bg-gray-900 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                          {slide.image.pricePill}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="relative z-20 mx-auto -mt-4 flex max-w-7xl items-center justify-center gap-2 px-4 sm:-mt-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              className={[
                "h-2.5 rounded-full transition-all",
                i === index ? "w-6 bg-emerald-600" : "w-2.5 bg-emerald-200 hover:bg-emerald-300",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Bottom green wave */}
        <svg
          aria-hidden
          className="absolute inset-x-0 bottom-24 -z-10 hidden h-[220px] w-full md:block"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C280,220 520,220 760,180 C1000,140 1240,120 1440,160 L1440,220 L0,220 Z"
            className="fill-emerald-600"
          />
        </svg>

        {/* Feature cards (static under carousel) */}
        <div className="relative mx-auto -mt-6 max-w-7xl px-4 sm:px-6 md:-mt-10">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <Feature icon={<Wifi className="h-6 w-6" />} title="Fiber Internet" desc="Broadband for your home and office" delay={0} />
            <Feature icon={<Smartphone className="h-6 w-6" />} title="Mobile Internet" desc="The cheapest mobile internet in Africa" delay={0.05} />
            <Feature icon={<ShieldCheck className="h-6 w-6" />} title="Evc Plus" desc="One of Africa’s most secure mobile money platforms" delay={0.1} />
          </div>
        </div>

        <div className="h-10 md:h-16" />
      </section>

      {/* ====== ANFAC SECTION ====== */}
      <AnfacSection />

      {/* ====== FAVORITES GRID ====== */}
      <FavoritesGrid />
    </MotionConfig>
  );
}

/* ---------- Reusable Feature Card (hero) ---------- */
function Feature({
  icon,
  title,
  desc,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <motion.div variants={fade(14, delay)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
      <Card className="rounded-2xl border-0 shadow-lg ring-1 ring-black/5">
        <CardContent className="flex items-start gap-4 p-5">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
            {icon}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">{desc}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ---------- “Anfac Package” section ---------- */
function AnfacSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        {/* Left image */}
        <motion.div variants={scaleIn(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="mx-auto w-full max-w-[520px]">
          <Card className="overflow-hidden rounded-3xl border-0 shadow-xl ring-1 ring-black/5">
            <CardContent className="p-0">
              <Image src="/anfac.avif" alt="Anfac Package" width={760} height={560} className="h-auto w-full object-cover" priority />
            </CardContent>
          </Card>
        </motion.div>

        {/* Right copy */}
        <div>
          <motion.h2 variants={fade(10, 0.05)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Talk longer for less
          </motion.h2>
          <motion.p variants={fade(12, 0.1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
            With <strong>80 minutes</strong> of calls from as little as <strong>$1</strong>, never leave a story untold when you opt for one of Hormuud’s local packages.
          </motion.p>

          <motion.div variants={fade(12, 0.18)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="mt-6">
            <Button asChild className="h-11 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">
              <Link href="#start">GET STARTED NOW</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Favorites grid ---------- */
function FavoritesGrid() {
  const items = [
    { icon: <Phone className="h-5 w-5" />, label: "Voice Calls" },
    { icon: <Mail className="h-5 w-5" />, label: "SMS" },
    { icon: <ShieldCheck className="h-5 w-5" />, label: "EVC Plus" },
    { icon: <RadioTower className="h-5 w-5" />, label: "5G Internet" },
    { icon: <Wifi className="h-5 w-5" />, label: "Fiber Internet" },
    { icon: <Globe2 className="h-5 w-5" />, label: "Dalmar Roaming" },
    { icon: <Box className="h-5 w-5" />, label: "Anfac Packages" },
    { icon: <Sparkles className="h-5 w-5" />, label: "Anfac Plus" },
  ];

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h3 variants={fade(8, 0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="text-center text-sm font-semibold uppercase tracking-wide text-gray-800">
          Our customers’ favourite personal products
        </motion.h3>
        <motion.p variants={fade(10, 0.05)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-600">
          Here are some of our customers’ favorite personal products & services
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div key={it.label} variants={fade(12, 0.03 * i)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
              <Card className="rounded-2xl border border-gray-100 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <CardContent className="flex items-center gap-3 p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                    {it.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-800">{it.label}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
