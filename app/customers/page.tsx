// app/customers/page.tsx
"use client";

import { MotionConfig, motion, cubicBezier } from "framer-motion"; // ⬅️ add cubicBezier
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquareText, Globe2, UserRound, Hash } from "lucide-react";

/**
 * Customers — Favourite business products
 */

const EASE = cubicBezier(0.16, 1, 0.3, 1); // ⬅️ typed easing function
const fade = (y = 20, delay = 0) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  },
});

type BizItem = {
  title: string;
  copy: string;
  icon: React.ReactNode;
  bg: string;
  ring: string;
};

const ITEMS: BizItem[] = [
  {
    title: "My SMS API",
    copy:
      "Empower your organization to build and deliver marketing SMS while integrating and collaborating with our messaging API.",
    icon: <MessageSquareText className="h-4 w-4" />,
    bg: "bg-emerald-600 text-white",
    ring: "ring-emerald-900/20",
  },
  {
    title: "Enterprise Internet",
    copy:
      "Lightning-fast, secure and reliable enterprise internet connections for large institutions and organizations.",
    icon: <Globe2 className="h-4 w-4" />,
    bg: "bg-sky-600 text-white",
    ring: "ring-sky-900/20",
  },
  {
    title: "IVR",
    copy: "Customer service call centres made easy.",
    icon: <UserRound className="h-4 w-4" />,
    bg: "bg-green-600 text-white",
    ring: "ring-green-900/20",
  },
  {
    title: "USSD Short Codes",
    copy:
      "Strengthen customer relationships and reach your global audience with special short codes.",
    icon: <Hash className="h-4 w-4" />,
    bg: "bg-zinc-900 text-white",
    ring: "ring-zinc-800/40",
  },
];

export default function CustomersPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Heading */}
          <motion.h1
            variants={fade(10, 0)}
            initial="hidden"
            animate="show"
            className="text-center text-base font-semibold tracking-tight text-gray-900"
          >
            Our customers’ favourite business products
          </motion.h1>
          <motion.p
            variants={fade(10, 0.05)}
            initial="hidden"
            animate="show"
            className="mx-auto mt-2 max-w-3xl text-center text-sm text-gray-600"
          >
            Grow your business and engage your customers through SMS marketing,
            fully integrated into your business system.
          </motion.p>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fade(12, 0.06 * i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <BizCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </MotionConfig>
  );
}

/** Single business card */
function BizCard({ item }: { item: BizItem }) {
  return (
    <Card
      className={[
        "group relative h-full overflow-hidden rounded-2xl border-0 shadow-lg",
        "transition-transform will-change-transform hover:-translate-y-0.5",
        "ring-1", item.ring, item.bg,
      ].join(" ")}
    >
      <CardContent className="p-6">
        <div className="mb-4 inline-flex items-center justify-center rounded-md border border-white/50 bg-white/10 p-2">
          <span aria-hidden className="text-white">{item.icon}</span>
        </div>

        <h3 className="text-[15px] font-semibold leading-6">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/90">
          {item.copy}
        </p>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 translate-y-6 bg-white/0 opacity-0 blur-2xl transition-all duration-300 group-hover:translate-y-0 group-hover:bg-white/10 group-hover:opacity-100"
        />
      </CardContent>
    </Card>
  );
}
