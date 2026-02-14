'use client';

import React from 'react';

// Minimal line icons to match the UI style in the mock screenshots
const IconTag = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M20 13l-7 7a2 2 0 0 1-2.83 0L3 12V4h8l9 9z" />
    <path d="M7.5 7.5h.01" />
  </svg>
);

const IconTotal = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M12 21a9 9 0 1 0-9-9" />
    <path d="M3 12a9 9 0 0 0 9 9" />
    <path d="M9.5 10.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5S13.4 13 12 13" />
    <path d="M12 16h0" />
  </svg>
);

const IconBars = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="M8 19v-8" />
    <path d="M12 19v-12" />
    <path d="M16 19v-5" />
  </svg>
);

const IconClock = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v6l4 2" />
  </svg>
);

/**
 * MarginHQ landing page hero (full-screen).
 * Source of truth: /mock.txt
 */

const LogoMark = ({ className = 'h-6 w-6' }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="50%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="22" fill="rgba(255,255,255,0.06)" />
    <text
      x="50"
      y="50"
      dominantBaseline="central"
      textAnchor="middle"
      fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
      fontWeight="700"
      fontSize="62"
      fill="url(#logoGrad)"
    >
      M
    </text>
  </svg>
);

const FaviconMark = ({ className = 'h-6 w-6' }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="50%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <text
      x="50"
      y="50"
      dominantBaseline="central"
      textAnchor="middle"
      fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
      fontWeight="700"
      fontSize="90"
      fill="url(#favGrad)"
    >
      M
    </text>
  </svg>
);

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const ROADMAP_ITEMS = [
  'Global multi-market sourcing',
  'Currency-aware margin modeling',
  'Workflow automation & alerts',
  'Pricing intelligence',
  'Cross posting reselling & storefront'

] as const;

type RoadmapItem = (typeof ROADMAP_ITEMS)[number];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_40%,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_500px_at_70%_20%,rgba(56,189,248,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_30%_85%,rgba(16,185,129,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      </div>

      {/* Nav */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button
            onClick={() => scrollToId('top')}
            className="group flex items-center gap-3 rounded-xl px-2 py-1 text-left transition hover:bg-white/5"
            aria-label="Go to top"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <LogoMark className="h-7 w-7 opacity-90" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">MarginHQ</div>
            </div>
          </button>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <button onClick={() => scrollToId('preview')} className="hover:text-white">
              Preview
            </button>
            <button onClick={() => scrollToId('features')} className="hover:text-white">
              Features
            </button>
            <button onClick={() => scrollToId('how')} className="hover:text-white">
              How it works
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button className="px-3 py-2 text-sm text-white/60 transition hover:text-white">
              Coming Soon
            </button>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      {/* HERO (full screen) */}
      <main id="top" className="relative">
        <section className="relative flex min-h-screen items-center justify-center px-5 pt-28">
          <div className="mx-auto w-full max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/55">
              DECISION INTELLIGENCE FOR MODERN TRADE
            </p>

            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
              Know your margin.
              <br />
              Before you commit.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
              MarginHQ is the decision layer for modern trade — helping operators, commerce teams, and
              high-throughput buyers identify underpriced supply, model margin, and execute confidently across
              fragmented marketplaces.
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/45">
              Built for operators today. Designed for global commerce tomorrow.
            </p>

            <div className="mt-9 flex items-center justify-center">
              <button
                onClick={() => scrollToId('preview')}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 shadow-sm shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white/8 hover:border-white/25"
              >
                Learn more
                <span className="inline-block translate-y-[1px] text-white/60 transition group-hover:translate-y-[3px]">
                  ↓
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Preview section */}
        <section id="preview" className="relative mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left: marketing preview copy */}
            <div className="p-1">
              <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Buy smarter.
                <br />
                Sell with confidence.
              </h2>

              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/60 sm:text-base">
                Discover underpriced supply, quantify real margin, and act with confidence - before capital is committed.
              </p>

              {/* Moved from hero: mini proof / stats */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { k: 'Time saved', v: '~60m/day' },
                  { k: 'Lower risk', v: 'Intelligent scoring' },
                  { k: 'Faster turnover', v: 'Move inventory faster' },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/20 px-4 py-4 text-left shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:border-white/15"
                  >
                    <div className="text-xs text-white/55">{s.k}</div>
                    <div className="mt-1 text-sm font-semibold text-white/85">{s.v}</div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-white/45">MVP starts with eBay. Multi-market sourcing follows.</p>
            </div>

            {/* Right: deals preview list (minimal) */}
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-black/10 p-3 sm:p-5 shadow-xl shadow-black/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Top deals</div>
                  <div className="mt-1 text-xs text-white/50">A quick glance at what MarginHQ surfaces</div>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  {
                    title: 'iPhone 14 Pro 128GB — Unlocked',
                    total: '£455',
                    profit: '£120',
                    meta: '2h 14m',
                    score: '94',
                  },
                  {
                    title: 'MacBook Air M1 — 16GB / 512GB',
                    total: '£610',
                    profit: '£150',
                    meta: 'Buy now',
                    score: '91',
                  },
                  {
                    title: 'Garmin Fenix 7 — Excellent',
                    total: '£290',
                    profit: '£70',
                    meta: '4h 02m',
                    score: '88',
                  },
                  {
                    title: 'iPad Pro 11" — 128GB (Wi-Fi)',
                    total: '£520',
                    profit: '£95',
                    meta: '3h 08m',
                    score: '86',
                  },
                  {
                    title: 'AirPods Max — Space Grey',
                    total: '£310',
                    profit: '£80',
                    meta: 'Buy now',
                    score: '84',
                  },
                ].map((d) => (
                  <div key={d.title} className="rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4">
                    <div className="flex items-center justify-between gap-2 sm:gap-4">
                      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                        <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black/15">
                            <span className="text-white/70">
                              <IconTag className="h-5 w-5" />
                            </span>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold text-white/90">{d.title}</div>
                          <div className="mt-1 flex flex-wrap items-center gap-x-2 sm:gap-x-4 gap-y-1 text-xs text-white/55">
                            <span className="inline-flex items-center gap-2">
                              <span className="text-white/45">
                                <IconTotal className="h-4 w-4" />
                              </span>
                              Total {d.total}
                            </span>
                            <span className="inline-flex items-center gap-2">
                              <span className="text-white/45">
                                <IconBars className="h-4 w-4" />
                              </span>
                              Est. profit {d.profit}
                            </span>
                            <span className="inline-flex items-center gap-2">
                              <span className="text-white/45">
                                <IconClock className="h-4 w-4" />
                              </span>
                              {d.meta}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/80">
                        {d.score}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs text-white/45">
                Built for quick decisions — keep the feed calm, the signal strong.
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="relative mx-auto max-w-6xl px-5 py-24">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm shadow-black/20">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Operator-grade infrastructure
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">
                  MarginHQ creates a single operational surface for sourcing — fewer tabs, fewer guesses, and fewer decision bottlenecks.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Profiles become your sourcing system',
                  desc: 'Encode your mandate (supply, price bands, condition rules, exclusions) into repeatable profiles.',
                  accent: 'from-indigo-500/25 via-indigo-500/10 to-transparent',
                  dot: 'bg-indigo-400',
                  glyph: '⌕',
                  glyphSize: 'text-3xl',
                },
                {
                  title: 'Continuous discovery',
                  desc: 'Automated scans surface underpriced supply aligned to your profile logic — globally extensible.',
                  accent: 'from-sky-500/25 via-sky-500/10 to-transparent',
                  dot: 'bg-sky-400',
                  glyph: '≋',
                  glyphSize: 'text-3xl',
                },
                {
                  title: 'Opportunity scoring',
                  desc: 'Criteria-native scoring across margin, demand, risk, and execution constraints.',
                  accent: 'from-violet-500/25 via-violet-500/10 to-transparent',
                  dot: 'bg-violet-400',
                  glyph: '◎',
                  glyphSize: 'text-2xl',
                },
                {
                  title: 'Margin modeling',
                  desc: 'Fee-aware, currency-ready margin estimates before you commit capital.',
                  accent: 'from-emerald-500/25 via-emerald-500/10 to-transparent',
                  dot: 'bg-emerald-400',
                  glyph: '£',
                  glyphSize: 'text-2xl',
                },
                {
                  title: 'Market refresh',
                  desc: "Keep pricing, availability, and signals current — so decisions aren't made on stale markets.",
                  accent: 'from-cyan-500/25 via-cyan-500/10 to-transparent',
                  dot: 'bg-cyan-400',
                  glyph: '⟲',
                  glyphSize: 'text-3xl',
                },
                {
                  title: 'Operator-grade workspace',
                  desc: 'A calm surface for decisions — designed for throughput, accountability, and scale.',
                  accent: 'from-teal-500/25 via-teal-500/10 to-transparent',
                  dot: 'bg-teal-400',
                  glyph: '▣',
                  glyphSize: 'text-2xl',
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-black/15 p-6 shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/6"
                >
                  <div className={'pointer-events-none absolute inset-0 bg-gradient-to-br ' + f.accent} />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                      <span className={f.glyphSize + ' font-semibold text-white/80'}>{f.glyph}</span>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-white/90">{f.title}</div>
                      <div className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</div>
                    </div>
                  </div>

                  <div className="relative mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="relative mx-auto max-w-6xl px-5 py-24">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm shadow-black/20">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">How it works</h2>
              <p className="mt-2 text-sm text-white/60">Three steps to consistent sourcing.</p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: 'Define your mandate',
                  desc: 'Encode sourcing logic: supply, pricing, constraints, and exclusions.',
                },
                {
                  title: 'MarginHQ scans and scores',
                  desc: 'Automated discovery surfaces supply and scores opportunity against your criteria.',
                },
                {
                  title: 'Commit with margin clarity',
                  desc: 'See true profit and execution context — then act with confidence.',
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-black/15 p-6 shadow-sm shadow-black/20"
                >
                  <div>
                    <div className="text-sm font-semibold text-white/90">{s.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
              {/* Left: Not a deal scraper */}
              <div className="p-1">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  Not another feed. A decision system.
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">
                  Feeds show listings. MarginHQ produces decisions.
                  <br />
                  Modern trade doesn&apos;t scale on intuition — it scales on structured margin intelligence.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    'Explainable decisions',
                    'Risk flags & guardrails',
                    'Execution-ready context',
                    'Decision history',
                    'Team-ready workflows',
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-indigo-400/20">
                        <span className="text-xs font-semibold text-indigo-200">✓</span>
                      </div>
                      <div className="text-sm text-white/75">{t}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Roadmap */}
              <div className="rounded-3xl border border-white/10 bg-black/10 p-7">
                <div className="text-sm font-semibold text-white/90">Roadmap (high level)</div>

                <div className="mt-5 space-y-3">
                  {ROADMAP_ITEMS.map((item: RoadmapItem) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <div className="text-sm text-white/80">{item}</div>
                      <div className="text-xs text-white/55">Planned</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY NOW */}
        <section id="why" className="relative mx-auto max-w-6xl px-5 py-24">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-lg shadow-black/20 backdrop-blur-sm md:p-10">
            {/* Top block */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Why now?</h2>
              <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-white/55">
                Recommerce is scaling globally while the buying environment gets more complex.
                Fragmentation increases opportunity — and increases mistakes.
              </p>
            </div>

            {/* Bottom block */}
            <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
              {/* Left: Market Shift */}
              <div className="space-y-3">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  Market Shift
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-2xl font-semibold text-white/90">$186B → $1.04T</span>
                  <span className="text-sm text-white/45">17.2% CAGR</span>
                </div>
                <div className="text-sm leading-relaxed text-white/50">
                  Global second-hand market growth (2024–2035)
                </div>
              </div>

              {/* Right: Operator Reality */}
              <div className="space-y-3">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  Operator Reality
                </div>
                <div className="text-sm leading-relaxed text-white/65">
                  Mispricing happens in the gaps between marketplaces.
                </div>
                <div className="text-sm leading-relaxed text-white/65">
                  To capture it reliably, teams need consistent evaluation and execution workflows.
                </div>
                <div className="text-sm leading-relaxed text-white/65">
                  Trade is becoming an operational system.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative mx-auto max-w-6xl px-5 py-16">
          {/* Footer */}
          <div className="mt-6 border-t border-white/10 pt-8">
            <div className="flex items-center justify-between">
              <div />
              <div className="text-sm font-semibold tracking-tight text-white/80">MarginHQ</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
