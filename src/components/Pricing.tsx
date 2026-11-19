import React from 'react';
import { ArrowRight, Check, Download } from 'lucide-react';
import { SITE } from '../data/site';

const INCLUDED = [
  'One-page express checkout engine',
  'Checkout field manager + custom fields',
  'All 20 Elementor widgets unlocked',
  'Incomplete order tracking & lead log',
  'Fraud protection rules',
  'Meta pixel event tracking',
  'COD + bKash / Nagad / Rocket flows',
  'HPOS & AJAX synced',
  'Unlimited personal, client or commercial stores',
  'Free updates & documentation'
];

interface PricingProps {
  onDownload: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onDownload }) => (
  <section id="pricing" className="relative overflow-hidden bg-paper-2/70 py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mb-12 text-center" data-reveal>
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
          Pricing
        </p>
        <h2 className="mx-auto max-w-2xl font-display text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[2.9rem]">
          One price. And that price is
          <span className="font-serif italic text-moss"> nothing.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-ink/60">
          No licence keys, no &quot;pro&quot; tier holding widgets hostage, no
          credit card. Download the zip and it&apos;s yours.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-4 lg:grid-cols-[1.15fr_0.85fr]" data-reveal>
        {/* ticket */}
        <div className="relative overflow-hidden rounded-3xl border border-ink bg-white shadow-hard">
          <div className="flex items-center justify-between border-b border-dashed border-ink/20 bg-lime px-6 py-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/55">
                FlowCart · lifetime pass
              </p>
              <p className="font-display text-lg font-semibold text-ink">
                Free edition
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-3xl font-semibold leading-none text-ink">৳0</p>
              <p className="font-mono text-[9px] uppercase tracking-wider text-ink/55">
                forever
              </p>
            </div>
          </div>

          <div className="px-6 py-6">
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {INCLUDED.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-moss" strokeWidth={3} />
                  <span className="text-[12px] leading-snug text-ink/70">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={SITE.pluginDownloadUrl}
              download={SITE.pluginFileName}
              onClick={onDownload}
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download {SITE.pluginFileName}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-3 text-center font-mono text-[9.5px] uppercase tracking-wider text-ink/40">
              GPL · zip install · no telemetry
            </p>
            <a
              href={SITE.releasesUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-center font-mono text-[9.5px] uppercase tracking-wider text-moss/70 underline decoration-dotted underline-offset-2 hover:text-moss"
            >
              all releases on GitHub
            </a>
          </div>
        </div>

        {/* side notes */}
        <div className="grid gap-4">
          {[
            {
              k: 'Unlimited stores',
              v: 'Use it on your own shop, client sites and staging servers — no domain counting.'
            },
            {
              k: 'No locked widgets',
              v: 'Every widget listed on this page ships in the free zip. Nothing is upsold later.'
            },
            {
              k: 'Open GPL licence',
              v: 'Fork it, inspect it, extend it. Your store data never leaves your server.'
            }
          ].map((n) => (
            <div
              key={n.k}
              className="rounded-2xl border border-ink/12 bg-white/70 px-5 py-4 transition-colors hover:border-ink/30"
            >
              <p className="font-display text-[14px] font-semibold text-ink">{n.k}</p>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink/55">{n.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
