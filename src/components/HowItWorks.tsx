import React, { useState } from 'react';
import { ArrowRight, Check, GripVertical, PhoneCall, ShieldAlert, Sliders } from 'lucide-react';

const STEPS = [
  {
    n: '01',
    title: 'Install the zip',
    copy: 'Upload FlowCart from the WordPress plugin screen and activate. It hooks into your existing WooCommerce store — no migration.',
    meta: 'under 2 minutes'
  },
  {
    n: '02',
    title: 'Arrange the checkout',
    copy: 'Toggle the fields you need, set inside / outside city delivery rates, and pick which Elementor widgets to expose.',
    meta: 'no code'
  },
  {
    n: '03',
    title: 'Publish and take orders',
    copy: 'Every completed order — and every captured lead — lands in your normal WooCommerce orders table, HPOS included.',
    meta: 'HPOS + AJAX'
  }
];

export const HowItWorks: React.FC = () => {
  const [step, setStep] = useState(0);

  return (
    <section id="how" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div data-reveal>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
              Setup
            </p>
            <h2 className="font-display text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[2.9rem]">
              Live on your store
              <span className="block font-serif italic text-clay">before lunch.</span>
            </h2>

            <div className="mt-8 space-y-2">
              {STEPS.map((s, i) => {
                const on = step === i;
                return (
                  <button
                    key={s.n}
                    onClick={() => setStep(i)}
                    className={`w-full rounded-xl border p-4 text-left transition-all ${
                      on
                        ? 'border-ink bg-ink text-paper shadow-hard'
                        : 'border-ink/12 bg-white/60 hover:border-ink/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-[10px] ${on ? 'text-lime' : 'text-ink/35'}`}
                      >
                        {s.n}
                      </span>
                      <span className="text-[13.5px] font-semibold">{s.title}</span>
                      <span
                        className={`ml-auto font-mono text-[9px] uppercase tracking-wider ${
                          on ? 'text-paper/45' : 'text-ink/35'
                        }`}
                      >
                        {s.meta}
                      </span>
                    </div>
                    {on && (
                      <p className="mt-2 pl-8 text-[12px] leading-relaxed text-paper/60">
                        {s.copy}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* admin mock */}
          <div className="relative" data-reveal style={{ ['--reveal-delay' as string]: '100ms' }}>
            <div className="overflow-hidden rounded-2xl border border-ink bg-white shadow-soft">
              <div className="flex items-center justify-between border-b border-ink/10 bg-paper-2/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-ink font-mono text-[10px] text-lime">
                    W
                  </span>
                  <span className="text-[12px] font-semibold text-ink">
                    FlowCart settings
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-moss/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-moss">
                  <span className="h-1.5 w-1.5 rounded-full bg-moss" /> active
                </span>
              </div>

              <div className="grid gap-4 p-4 sm:grid-cols-2">
                <div className="rounded-xl border border-ink/10 bg-paper/60 p-3.5">
                  <p className="mb-2.5 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
                    <Sliders className="h-3 w-3" /> checkout fields
                  </p>
                  {['Full name', 'Mobile number', 'Delivery address', 'Email address'].map(
                    (f, i) => (
                      <div
                        key={f}
                        className="mb-1.5 flex items-center gap-2 rounded-lg border border-ink/10 bg-white px-2.5 py-2"
                      >
                        <GripVertical className="h-3 w-3 text-ink/20" />
                        <span className="text-[11.5px] text-ink/75">{f}</span>
                        <span
                          className={`ml-auto font-mono text-[8.5px] uppercase tracking-wider ${
                            i === 3 ? 'text-ink/30' : 'text-moss'
                          }`}
                        >
                          {i === 3 ? 'off' : 'on'}
                        </span>
                        <span
                          className={`h-3.5 w-6 rounded-full p-0.5 ${
                            i === 3 ? 'bg-ink/15' : 'bg-moss'
                          }`}
                        >
                          <span
                            className={`block h-2.5 w-2.5 rounded-full bg-white transition-transform ${
                              i === 3 ? '' : 'translate-x-2.5'
                            }`}
                          />
                        </span>
                      </div>
                    )
                  )}
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl border border-ink/10 bg-ink p-3.5 text-paper">
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/40">
                      delivery rates
                    </p>
                    {[
                      ['Inside city', '৳60'],
                      ['Outside city', '৳120']
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="mb-1.5 flex items-center justify-between rounded-lg border border-ink-line bg-ink-soft px-2.5 py-2"
                      >
                        <span className="text-[11.5px] text-paper/70">{k}</span>
                        <span className="font-mono text-[11px] text-lime">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-ink/10 bg-paper/60 p-3.5">
                    <p className="mb-2 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
                      <PhoneCall className="h-3 w-3" /> lead log
                    </p>
                    <div className="rounded-lg border border-ink/10 bg-white px-2.5 py-2">
                      <p className="text-[11.5px] font-medium text-ink/80">Naimur R.</p>
                      <p className="font-mono text-[10px] text-ink/45">01819-445566 · 8m ago</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-clay/25 bg-clay/8 px-3 py-2.5">
                    <ShieldAlert className="h-3.5 w-3.5 shrink-0 text-clay" />
                    <p className="text-[10.5px] leading-snug text-ink/65">
                      Fraud filter blocked 3 duplicate COD orders today
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-ink/10 bg-paper-2/50 px-4 py-3">
                <span className="font-mono text-[9px] uppercase tracking-wider text-ink/40">
                  FlowCart v2.4 · HPOS compatible
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-moss">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} /> saved
                </span>
              </div>
            </div>

            <a
              href="#pricing"
              className="group absolute -bottom-5 right-4 inline-flex items-center gap-2 rounded-full border border-ink bg-lime px-4 py-2 text-[11.5px] font-semibold text-ink shadow-hard transition-transform hover:-translate-y-0.5"
            >
              Get the plugin
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
