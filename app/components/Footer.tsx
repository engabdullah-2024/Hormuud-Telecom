// app/_components/Footer.tsx
"use client";

import { MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const EASE: number[] = [0.16, 1, 0.3, 1];
const fade = (y = 16, delay = 0) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});

export default function Footer() {
  return (
    <MotionConfig reducedMotion="user">
      <footer className="relative bg-[#1d1d1d] text-zinc-300">
        {/* top */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 md:grid-cols-12">
          {/* Brand */}
          <motion.div
            variants={fade(10, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="md:col-span-3"
          >
            <Link href="/" className="inline-flex items-center gap-3">
              {/* Replace with your logo asset */}
              <Image
                src="/Hormuud.svg"
                alt="Hormuud Telecom"
                width={160}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={fade(10, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="md:col-span-9"
          >
            <h3 className="text-sm font-semibold text-white">
              Subscribe to our Newsletter
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Get all the latest information, Sales and Offers.
            </p>

            <form
              className="mt-4 flex max-w-xl items-center gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Email address here..."
                className="h-10 rounded-lg border-zinc-600 bg-[#232323] text-sm text-zinc-200 placeholder:text-zinc-500 focus-visible:ring-emerald-500"
                aria-label="Email address"
              />
              <Button
                type="submit"
                className="h-10 rounded-lg bg-emerald-600 px-4 text-xs font-semibold text-white hover:bg-emerald-700"
              >
                SUBSCRIBE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* links */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 py-6 md:grid-cols-12">
            {/* Contact */}
            <motion.div
              variants={fade(10, 0.02)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="md:col-span-3"
            >
              <h4 className="text-sm font-semibold text-white">Contact Info</h4>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase text-zinc-500">Phone:</dt>
                  <dd className="mt-1">
                    call Free 141 <span className="font-semibold">657950</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase text-zinc-500">Email:</dt>
                  <dd className="mt-1">support@hormuud.com</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase text-zinc-500">Address:</dt>
                  <dd className="mt-1 leading-6">
                    Hormuud Tower, Airport Road, Waberi, Mogadishu,
                    <br />
                    Somalia
                  </dd>
                </div>
              </dl>
            </motion.div>

            {/* Corporate */}
            <FooterCol
              title="Corporate"
              items={[
                ["About Us", "#"],
                ["Press Release", "#"],
                ["Social Responsibilities", "#"],
                ["Customer Service", "#"],
                ["Terms & Condition", "#"],
              ]}
              className="md:col-span-3"
              delay={0.04}
            />

            {/* Personal */}
            <FooterCol
              title="Personal"
              items={[
                ["Prepaid", "#"],
                ["PostPaid", "#"],
                ["Anfac Plus", "#"],
                ["ADSL Plus", "#"],
                ["Offers", "#"],
              ]}
              className="md:col-span-3"
              delay={0.06}
            />

            {/* Business */}
            <FooterCol
              title="Business"
              items={[
                ["Mysms", "#"],
                ["Messaging Api", "#"],
                ["Enterprise Internet", "#"],
                ["IVR(Call Center)", "#"],
                ["USSD Shortcodes", "#"],
              ]}
              className="md:col-span-3"
              delay={0.08}
            />
          </div>

          <div className="border-t border-white/10" />

          {/* bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
            <p className="text-xs text-zinc-400">
              Hormuud.com © {new Date().getFullYear()} All Rights Reserved.
            </p>

            <div className="flex items-center gap-3">
              <Social href="#" label="Facebook">
                <Facebook className="h-4 w-4" />
              </Social>
              <Social href="#" label="Twitter">
                <Twitter className="h-4 w-4" />
              </Social>
              <Social href="#" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Social>
              <Social href="#" label="Instagram">
                <Instagram className="h-4 w-4" />
              </Social>
            </div>
          </div>
        </div>

        {/* Floating chat button (optional, matches screenshot mood) */}
        <button
          aria-label="Chat with us"
          className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-emerald-700"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-white" />
          Chat with us
        </button>
      </footer>
    </MotionConfig>
  );
}

function FooterCol({
  title,
  items,
  className,
  delay = 0,
}: {
  title: string;
  items: [string, string][];
  className?: string;
  delay?: number;
}) {
  return (
    <motion.nav
      variants={fade(10, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
    >
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-zinc-300 transition hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/5 text-zinc-200 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </Link>
  );
}
