// app/plans/page.tsx
"use client";

import { MotionConfig, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";

type Feature = { label: string; included: boolean };
type Plan = {
  name: string;            // small ribbon name (e.g., ADSL PACKAGE)
  price: number;           // numeric price
  unit?: string;           // e.g., "/package"
  features: Feature[];
  bestDeal?: boolean;      // adds the green top ribbon
};

const EASE: number[] = [0.16, 1, 0.3, 1];
const fade = (y = 18, delay = 0) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});

const TOP_ROW: Plan[] = [
  {
    name: "ADSL PACKAGE",
    price: 25,
    unit: "/package",
    features: [
      { label: "Dedicated CPE", included: true },
      { label: "20Mbps", included: true },
      { label: "Static IP", included: false },
      { label: "Valid for 30 Days", included: true },
      { label: "Super Speed", included: true },
    ],
  },
  {
    name: "Best deal",
    price: 30,
    unit: "/package",
    bestDeal: true,
    features: [
      { label: "Dedicated CPE", included: true },
      { label: "30Mbps", included: true },
      { label: "Static IP", included: false },
      { label: "Valid for 30 Days", included: true },
      { label: "Super Speed", included: true },
    ],
  },
  {
    name: "ADSL PACKAGE",
    price: 50,
    unit: "/package",
    features: [
      { label: "Dedicated CPE", included: true },
      { label: "50Mbps", included: true },
      { label: "Static IP", included: true },
      { label: "Valid for 30 Days", included: true },
      { label: "Super Speed", included: true },
    ],
  },
];

const BOTTOM: Plan = {
  name: "ADSL PACKAGE",
  price: 90,
  unit: "/package",
  features: [
    { label: "Dedicated CPE", included: true },
    { label: "100Mbps", included: true },
    { label: "Static IP", included: true },
    { label: "Priority Support", included: true },
    { label: "Valid for 30 Days", included: true },
    { label: "Super Speed", included: true },
  ],
};

export default function PlansPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Heading */}
          <motion.h1
            variants={fade(6, 0)}
            initial="hidden"
            animate="show"
            className="text-center text-sm font-semibold tracking-tight text-gray-900"
          >
            Choose The Best FTTH Plan For You
          </motion.h1>
          <motion.p
            variants={fade(6, 0.05)}
            initial="hidden"
            animate="show"
            className="mx-auto mt-2 max-w-2xl text-center text-xs sm:text-sm text-gray-600"
          >
            Subscribe your favorite bundle and enjoy high-speed 5G Internet
          </motion.p>

          {/* Top row (3 cards) */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOP_ROW.map((plan, i) => (
              <motion.div
                key={plan.price}
                variants={fade(14, 0.06 * i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </div>

          {/* Bottom single card, centered */}
          <motion.div
            variants={fade(14, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto mt-5 max-w-sm"
          >
            <PricingCard plan={BOTTOM} />
          </motion.div>
        </div>
      </main>
    </MotionConfig>
  );
}

/* ---------- Card ---------- */
function PricingCard({ plan }: { plan: Plan }) {
  return (
    <Card className="relative h-full overflow-hidden rounded-2xl border border-emerald-50 bg-white shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-0.5">
      {/* Best deal ribbon (full-width) */}
      {plan.bestDeal && (
        <div className="absolute inset-x-0 top-0 z-10 grid h-9 place-items-center rounded-t-2xl bg-emerald-600 text-xs font-semibold uppercase tracking-wide text-white">
          Best deal
        </div>
      )}

      <CardContent className={`p-0 ${plan.bestDeal ? "pt-9" : ""}`}>
        {/* Price header */}
        <div className="flex flex-col items-center gap-2 px-6 pb-6 pt-8">
          <span className="text-[11px] font-medium tracking-wider text-gray-500">
            {plan.name}
          </span>
          <div className="flex items-end gap-1">
            <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
            <span className="pb-1 text-xs text-gray-500">{plan.unit ?? ""}</span>
          </div>
          <Button
            className="mt-3 h-9 rounded-full bg-emerald-600 px-5 text-xs text-white hover:bg-emerald-700"
            size="sm"
          >
            RECHARGE NOW
          </Button>
        </div>

        {/* green divider like the design */}
        <div className="h-[3px] w-full bg-emerald-600/90" />

        {/* Features */}
        <ul className="space-y-3 px-6 py-6 text-sm">
          {plan.features.map((f) => (
            <li key={f.label} className="flex items-start gap-3">
              {f.included ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
              ) : (
                <Circle className="mt-0.5 h-4 w-4 flex-none text-gray-300" />
              )}
              <span
                className={`leading-6 ${
                  f.included ? "text-gray-700" : "text-gray-400 line-through"
                }`}
              >
                {f.label}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
