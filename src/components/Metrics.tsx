import React from 'react';
import { ArrowUpRight, Clock, Radio, ShieldCheck } from 'lucide-react';

const METRICS = [
  {
    icon: Clock,
    value: '9s',
    label: 'average time to complete checkout',
    note: 'vs ~48s on default WooCommerce'
  },
  {
    icon: Radio,
    value: '100%',
    label: 'of typed phone numbers captured',
    note: 'leads saved before the order ends'
  },
  {
    icon: ShieldCheck,
    value: '3×',
    label: 'fewer fake COD orders',
    note: 'IP + phone + frequency rules'
  }
];

export const Metrics: React.FC = () => (
  <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mb-10 flex items-center justify-between gap-6 border-b border-ink/10 pb-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
          By the numbers
        </p>
        <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-ink/30 sm:block">
          measured on real FlowCart stores
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
        {METRICS.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={m.value}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              className="group border-ink/10 sm:border-r sm:pr-6 sm:last:border-r-0"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5 text-clay" />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-3 font-display text-[3rem] font-semibold leading-none tracking-[-0.04em] text-ink sm:text-[3.4rem]">
                {m.value}
              </p>
              <p className="mt-3 max-w-[15rem] text-[12.5px] leading-snug text-ink/65">
                {m.label}
              </p>
              <p className="mt-1.5 inline-flex items-center gap-1 font-mono text-[9.5px] uppercase tracking-wider text-ink/35">
                <ArrowUpRight className="h-3 w-3" />
                {m.note}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
