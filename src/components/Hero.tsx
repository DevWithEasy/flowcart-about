import React, { useState } from 'react';
import { ArrowRight, Check, Zap } from 'lucide-react';

const LOGOS = [
  'WooCommerce',
  'Elementor',
  'bKash',
  'Nagad',
  'WordPress',
  'HPOS',
  'Meta Pixel',
  'Rocket'
];

const CheckoutCard = () => {
  const [inside, setInside] = useState(true);
  const [cod, setCod] = useState(true);
  const total = 2200 + (inside ? 60 : 120);

  return (
    <div className="relative w-full">
      {/* torn note */}
      <div className="absolute -left-4 -top-5 z-20 rotate-[-6deg] rounded-sm bg-lime px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-ink shadow-hard">
        1-page · live
      </div>

      <div className="overflow-hidden rounded-[22px] border border-ink-line bg-ink-soft shadow-soft">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-ink-line px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-clay/80" />
            <span className="h-2 w-2 rounded-full bg-paper/25" />
            <span className="h-2 w-2 rounded-full bg-lime/80" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/35">
            checkout / express
          </span>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          {/* product */}
          <div className="flex items-center gap-3.5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-ink-line bg-ink text-2xl">
              🎒
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-paper">
                Premium Leather Backpack
              </p>
              <p className="text-xs text-paper/45">Size L · Qty 1</p>
            </div>
            <span className="ml-auto font-display text-lg text-lime">৳2,200</span>
          </div>

          {/* fields */}
          <div className="grid gap-2.5">
            <div className="rounded-lg border border-ink-line bg-ink px-3 py-2.5">
              <p className="font-mono text-[9px] uppercase tracking-wider text-paper/35">
                Full name
              </p>
              <p className="text-[13px] text-paper/85">Tanvir Ahmed</p>
            </div>
            <div className="rounded-lg border border-ink-line bg-ink px-3 py-2.5">
              <p className="font-mono text-[9px] uppercase tracking-wider text-paper/35">
                Mobile · lead captured
              </p>
              <p className="text-[13px] text-paper/85">01712-345678</p>
            </div>
          </div>

          {/* delivery toggle */}
          <div>
            <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-paper/35">
              Delivery zone (COD)
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Inside Dhaka', value: '৳60', on: inside },
                { label: 'Outside Dhaka', value: '৳120', on: !inside }
              ].map((opt, i) => {
                const active = opt.on;
                return (
                  <button
                    key={opt.label}
                    onClick={() => setInside(i === 0)}
                    className={`rounded-lg border px-3 py-2 text-left transition-all ${
                      active
                        ? 'border-lime bg-lime/10'
                        : 'border-ink-line bg-ink hover:border-paper/25'
                    }`}
                  >
                    <span className="block text-[11px] font-medium text-paper/85">
                      {opt.label}
                    </span>
                    <span
                      className={`font-mono text-[10px] ${active ? 'text-lime' : 'text-paper/40'}`}
                    >
                      {opt.value}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* payment */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setCod(true)}
              className={`rounded-lg border px-3 py-2 text-[11px] font-medium transition-all ${
                cod ? 'border-lime bg-lime text-ink' : 'border-ink-line text-paper/70'
              }`}
            >
              Cash on Delivery
            </button>
            <button
              onClick={() => setCod(false)}
              className={`rounded-lg border px-3 py-2 text-[11px] font-medium transition-all ${
                !cod ? 'border-lime bg-lime text-ink' : 'border-ink-line text-paper/70'
              }`}
            >
              bKash / Nagad
            </button>
          </div>

          {/* total */}
          <div className="flex items-end justify-between border-t border-dashed border-ink-line pt-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-paper/40">
              Total payable
            </span>
            <span className="font-display text-2xl font-semibold text-paper">
              ৳{total.toLocaleString()}
            </span>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">
            <Check className="h-4 w-4" strokeWidth={3} />
            Place order
          </button>
        </div>
      </div>

      {/* floating badges */}
      <div className="absolute -right-3 top-24 z-20 hidden rotate-[5deg] rounded-sm border border-ink-line bg-paper px-3 py-2 shadow-hard sm:block">
        <p className="font-mono text-[9px] uppercase tracking-wider text-ink/50">Pixel</p>
        <p className="text-xs font-semibold text-ink">Purchase ✓ fired</p>
      </div>
      <div className="absolute -bottom-6 -left-6 z-20 hidden -rotate-[3deg] items-center gap-2 rounded-full border border-ink bg-paper px-3 py-1.5 shadow-hard-lime sm:flex">
        <Zap className="h-3.5 w-3.5 fill-clay text-clay" />
        <span className="text-[11px] font-semibold text-ink">9s average checkout</span>
      </div>
    </div>
  );
};

interface HeroProps {
  onDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownload }) => {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      <div className="dot-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-lime/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-56 -left-32 h-[26rem] w-[26rem] rounded-full bg-clay/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* ── copy ── */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-soft/80 px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60">
                v2.4 · free forever
              </span>
            </div>

            <h1 className="font-display text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.03em] text-paper sm:text-6xl lg:text-[4.15rem]">
              Your checkout
              <br />
              is leaking
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 font-serif italic text-lime">money.</span>
                <svg
                  aria-hidden
                  viewBox="0 0 220 14"
                  className="absolute -bottom-2 left-0 h-3 w-full text-lime/45"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C40 3 90 2 130 5s60 5 88 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-paper/60 sm:text-base">
              FlowCart collapses WooCommerce&apos;s five-step checkout into one
              fast page — built for Cash on Delivery, bKash and Nagad sellers who
              cannot afford a single dropped order.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={onDownload}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Download free — 0৳
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#how"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-line px-6 py-3.5 text-sm font-medium text-paper/80 transition-colors hover:border-paper/40 hover:text-paper"
              >
                See how it works
              </a>
            </div>

            <dl className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink-line pt-6">
              {[
                { k: '20', v: 'Elementor widgets' },
                { k: '1', v: 'page checkout' },
                { k: '0৳', v: 'no license, ever' }
              ].map((s) => (
                <div key={s.v} className="flex items-baseline gap-2">
                  <dt className="font-display text-2xl font-semibold text-paper">{s.k}</dt>
                  <dd className="text-[11px] uppercase tracking-wider text-paper/40">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ── visual ── */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <CheckoutCard />
          </div>
        </div>
      </div>

      {/* logo marquee */}
      <div className="relative border-t border-ink-line bg-ink py-5">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track items-center gap-12 pr-12">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="whitespace-nowrap font-display text-sm font-medium tracking-tight text-paper/25"
              >
                {logo}
                <span className="ml-12 text-lime/40">✳</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
