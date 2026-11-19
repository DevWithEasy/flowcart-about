import React from 'react';
import { ArrowDownRight, ArrowUpRight, Minus, Plus } from 'lucide-react';

const PROBLEMS = [
  {
    n: '01',
    title: 'Five steps before payment',
    body: 'Cart → shipping calculator → login wall → billing form → gateway. Every hop is a chance to lose the buyer.'
  },
  {
    n: '02',
    title: 'Fields nobody needs',
    body: 'Postcode, company, country code. On a phone, every extra field costs you completions.'
  },
  {
    n: '03',
    title: 'Abandoned orders vanish',
    body: 'Someone types a phone number, hesitates, leaves. Default WooCommerce keeps no trace of them.'
  },
  {
    n: '04',
    title: 'Pixels miss the sale',
    body: 'Redirects and multi-step pages break Meta events, so your ads optimise on bad purchase data.'
  }
];

const FIXES = [
  'Product, details, delivery and payment on one screen',
  'Only the fields you actually need — toggle the rest off',
  'Phone number captured while they type, kept as a lead',
  'PageView → InitiateCheckout → Purchase fired cleanly'
];

export const ProblemSolution: React.FC = () => (
  <section id="why" className="relative bg-paper py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* left header */}
        <div data-reveal>
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            The Funnel Leak
          </p>
          <h2 className="font-display text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[2.9rem]">
            Most stores don&apos;t have a traffic problem.
            <span className="mt-2 block font-serif italic text-clay">
              They have a checkout problem.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/60">
            WooCommerce ships a checkout built for catalogues, not for
            campaign-driven sales. FlowCart rebuilds that path around the one
            thing that matters: a finished order.
          </p>

          <div className="mt-9 inline-flex items-end gap-4 rounded-xl border border-ink bg-white px-5 py-4 shadow-hard">
            <span className="font-display text-4xl font-semibold leading-none text-ink">
              70%
            </span>
            <span className="max-w-[9rem] text-[11px] leading-snug text-ink/55">
              of shoppers abandon a multi-step checkout before paying
            </span>
          </div>
        </div>

        {/* right: before / after */}
        <div className="space-y-4" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
          <div className="rounded-2xl border border-ink/12 bg-paper-2/70 p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                Default WooCommerce
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-ink/8 px-2 py-0.5 text-[10px] font-medium text-ink/50">
                <Minus className="h-3 w-3" /> friction
              </span>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {PROBLEMS.map((p) => (
                <li
                  key={p.n}
                  className="rounded-xl border border-ink/10 bg-white/60 px-3.5 py-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-clay">{p.n}</span>
                    <span className="text-[13px] font-semibold text-ink/85">
                      {p.title}
                    </span>
                    <ArrowDownRight className="ml-auto h-3.5 w-3.5 text-clay/70" />
                  </div>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink/50">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-ink bg-ink p-5 text-paper sm:p-6">
            <div className="grid-lines absolute inset-0 opacity-[0.15]" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">
                  With FlowCart
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-lime px-2 py-0.5 text-[10px] font-semibold text-ink">
                  <Plus className="h-3 w-3 stroke-[3]" /> conversion
                </span>
              </div>
              <ul className="space-y-2.5">
                {FIXES.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-xl border border-ink-line bg-ink-soft/70 px-3.5 py-3"
                  >
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
                    <span className="text-[12.5px] leading-relaxed text-paper/80">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
