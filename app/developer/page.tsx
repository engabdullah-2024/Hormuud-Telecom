// app/developer/page.tsx
"use client";

import { MotionConfig, motion, cubicBezier } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Code2,
  Database,
  Server,
  Cpu,
  Globe,
  Github,
  Mail,
  MapPin,
} from "lucide-react";

/** Typed easing (fixes TS errors, keeps design) */
const EASE = cubicBezier(0.16, 1, 0.3, 1);

const fade = (y = 18, delay = 0) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE, delay } },
});

export default function DeveloperPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-white">
        {/* ===== Hero ===== */}
        <section className="relative overflow-hidden">
          {/* subtle top wave */}
          <svg
            aria-hidden
            className="absolute inset-x-0 top-0 -z-10 h-[420px] w-full"
            viewBox="0 0 1440 420"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 C240,40 480,40 720,90 C960,140 1200,170 1440,120 L1440,0 L0,0 Z"
              className="fill-emerald-600/10"
            />
          </svg>

          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:py-24">
            {/* Left: copy */}
            <div>
              <motion.p
                variants={fade(10, 0)}
                initial="hidden"
                animate="show"
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800"
              >
                Available for freelance • Remote/On-site
              </motion.p>

              <motion.h1
                variants={fade(14, 0.05)}
                initial="hidden"
                animate="show"
                className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
              >
                Eng Abdalla
                <br />
                <span className="text-emerald-600">Full-stack Developer</span>
              </motion.h1>

              <motion.p
                variants={fade(14, 0.1)}
                initial="hidden"
                animate="show"
                className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base"
              >
                I build fast, accessible web apps with{" "}
                <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
                <strong>Node.js</strong>. I care about clean architecture,
                delightful UX, and measurable impact.
              </motion.p>

              <motion.div
                variants={fade(14, 0.18)}
                initial="hidden"
                animate="show"
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <Button asChild className="h-11 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">
                  <Link href="mailto:abdalla@example.com">HIRE ME</Link>
                </Button>
                <Button asChild variant="outline" className="h-11 rounded-xl border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  <Link href="/abdalla.pdf" target="_blank" rel="noopener noreferrer">
                    DOWNLOAD CV <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Tech chips */}
              <motion.ul
                variants={fade(14, 0.24)}
                initial="hidden"
                animate="show"
                className="mt-6 flex flex-wrap gap-2"
              >
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "PostgreSQL",
                  "Prisma",
                  "Tailwind",
                  "shadcn/ui",
                  "Docker",
                  "AWS",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-emerald-600/20 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800"
                  >
                    {t}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Right: image */}
            <motion.div
              variants={scaleIn(0.1)}
              initial="hidden"
              animate="show"
              className="relative mx-auto aspect-square w-[88%] max-w-[520px] sm:w-[85%] md:w-full"
            >
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.25),transparent_60%)]"
              />
              <Card className="absolute inset-0 overflow-hidden rounded-3xl border-0 shadow-2xl ring-1 ring-emerald-900/5">
                <CardContent className="p-0">
                  <Image
                    src="/eng.jpg" // replace with your real image
                    alt="Eng Abdalla — Full-stack Developer"
                    width={800}
                    height={800}
                    priority
                    className="h-full w-full object-cover"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ===== Skills / Focus ===== */}
        <section className="bg-white pb-12 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.h2
              variants={fade(10, 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="text-center text-sm font-semibold uppercase tracking-wide text-gray-800"
            >
              What I do
            </motion.h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <SkillCard
                icon={<Code2 className="h-6 w-6" />}
                title="Frontend Engineering"
                points={["Next.js App Router", "Type-safe UI", "Accessibility & Motion"]}
                delay={0}
              />
              <SkillCard
                icon={<Server className="h-6 w-6" />}
                title="Backend & APIs"
                points={["Node.js / tRPC / REST", "Auth, RBAC, Caching", "Prisma, PostgreSQL"]}
                delay={0.05}
              />
              <SkillCard
                icon={<Database className="h-6 w-6" />}
                title="DevOps & Quality"
                points={["Docker, CI/CD", "Testing (Vitest/Playwright)", "Observability"]}
                delay={0.1}
              />
            </div>
          </div>
        </section>

        {/* ===== Featured Projects ===== */}
        <section className="bg-white pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.h2
              variants={fade(10, 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="text-center text-sm font-semibold uppercase tracking-wide text-gray-800"
            >
              Selected Work
            </motion.h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <ProjectCard
                title="Telecom Billing Dashboard"
                desc="Role-based analytics dashboard with live usage metrics, invoice exports, and EVC Plus integration."
                tags={["Next.js", "tRPC", "Prisma", "shadcn/ui"]}
                delay={0}
              />
              <ProjectCard
                title="FTTH Plans Storefront"
                desc="Plan browsing, checkout flows, and admin CMS with granular permissions and audit logs."
                tags={["Next.js", "PostgreSQL", "Stripe", "Zod"]}
                delay={0.05}
              />
              <ProjectCard
                title="Messaging API Portal"
                desc="Developer portal for SMS/MMS APIs, API keys, per-app quotas, and usage reports."
                tags={["Node.js", "OpenAPI", "Redis", "Docker"]}
                delay={0.1}
              />
            </div>
          </div>
        </section>

        {/* ===== Contact strip ===== */}
        <section className="bg-white pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Card className="rounded-2xl border-0 shadow-lg ring-1 ring-black/5">
              <CardContent className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
                <div className="flex flex-col items-center gap-2 sm:flex-row">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <Cpu className="h-4 w-4" />
                    Eng Abdalla
                  </span>
                  <span className="hidden text-zinc-400 sm:inline">•</span>
                  <span className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="h-4 w-4 text-emerald-600" /> Mogadishu, Somalia
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button asChild variant="outline" className="rounded-xl">
                    <Link href="mailto:enga95311@gmail.com">
                      <Mail className="mr-2 h-4 w-4" /> Email
                    </Link>
                  </Button>
                  <Button asChild className="rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">
                    <Link href="https://github.com/engabdullah-2024" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="rounded-xl">
                    <Link href="https://eng-abdalla-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" /> Portfolio
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}

/* ===== Small components ===== */

function SkillCard({
  icon,
  title,
  points,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  points: string[];
  delay?: number;
}) {
  return (
    <motion.div variants={fade(12, delay)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
      <Card className="rounded-2xl border-0 shadow-lg ring-1 ring-black/5">
        <CardContent className="p-5">
          <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
            {icon}
          </div>
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
            {points.map((p) => (
              <li key={p} className="leading-relaxed">{p}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
  delay = 0,
}: {
  title: string;
  desc: string;
  tags: string[];
  delay?: number;
}) {
  return (
    <motion.div variants={fade(12, delay)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
      <Card className="group relative h-full overflow-hidden rounded-2xl border-0 shadow-lg ring-1 ring-black/5 transition-transform hover:-translate-y-0.5">
        <CardContent className="p-6">
          <h3 className="text-[15px] font-semibold leading-6 text-gray-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-md border border-emerald-600/20 bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                {t}
              </span>
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-10 translate-y-6 bg-emerald-100/0 opacity-0 blur-2xl transition-all duration-300 group-hover:translate-y-0 group-hover:bg-emerald-100/30 group-hover:opacity-100"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}
