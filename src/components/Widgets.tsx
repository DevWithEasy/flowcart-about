import React, { useMemo, useState } from 'react';
import {
  Bell,
  Boxes,
  Check,
  CheckCircle2,
  Clock,
  CreditCard,
  Headphones,
  Images,
  LayoutGrid,
  MessageCircle,
  MousePointerClick,
  Package,
  Receipt,
  RotateCw,
  Ruler,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Tags,
  X,
  Zap
} from 'lucide-react';
import { CATEGORIES, ELEMENTOR_WIDGETS, WIDGET_COUNT, WidgetItem } from '../data/widgets';

const ICONS: Record<string, React.ElementType> = {
  CreditCard,
  Zap,
  MousePointerClick,
  LayoutGrid,
  Package,
  ShoppingBag,
  Tags,
  Sparkles,
  SlidersHorizontal,
  Bell,
  Clock,
  RotateCw,
  CheckCircle2,
  Images,
  Ruler,
  Headphones,
  Receipt,
  ShieldCheck,
  Boxes,
  MessageCircle
};

export const Widgets: React.FC = () => {
  const [cat, setCat] = useState<string>('all');
  const [active, setActive] = useState<WidgetItem | null>(null);

  const list = useMemo(
    () => ELEMENTOR_WIDGETS.filter((w) => cat === 'all' || w.category === cat),
    [cat]
  );

  return (
    <section id="widgets" className="relative bg-paper-2/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between" data-reveal>
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
              Elementor · {WIDGET_COUNT} widgets included
            </p>
            <h2 className="max-w-lg font-display text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[2.9rem]">
              Drag in a widget.
              <span className="block font-serif italic text-moss">Ship a funnel.</span>
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-ink/60">
              Every widget lives under the <span className="font-medium text-ink">FlowCart</span>{' '}
              category in Elementor and is wired to WooCommerce actions — no
              shortcode maths required.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 rounded-full border border-ink/12 bg-white p-1.5">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`rounded-full px-3.5 py-1.5 text-[11.5px] font-medium transition-all ${
                  cat === c.id
                    ? 'bg-ink text-paper'
                    : 'text-ink/55 hover:text-ink'
                }`}
              >
                {c.label}
                {c.id === 'all' && (
                  <span className="ml-1.5 font-mono text-[9px] text-lime">{WIDGET_COUNT}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div key={cat} className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((w, i) => {
            const Icon = ICONS[w.elementorIcon] ?? Package;
            return (
              <button
                key={w.id}
                onClick={() => setActive(w)}
                style={{ animationDelay: `${i * 35}ms` }}
                className="rise group relative flex flex-col items-start rounded-xl border border-ink/12 bg-white p-3.5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-hard"
              >
                <span className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-paper-2 text-ink/70 transition-colors group-hover:bg-lime group-hover:text-ink">
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <span className="text-[12.5px] font-semibold leading-tight text-ink">
                  {w.name}
                </span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-wider text-ink/35">
                  {w.category}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[9px] font-medium uppercase tracking-wider text-ink/0 transition-colors group-hover:text-clay">
                  View specs →
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* spec sheet modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/70 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="rise w-full max-w-md overflow-hidden rounded-2xl border border-ink bg-paper shadow-soft"
          >
            <div className="flex items-start justify-between border-b border-ink/10 bg-white px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime">
                  {React.createElement(ICONS[active.elementorIcon] ?? Package, {
                    className: 'h-5 w-5 text-ink'
                  })}
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">
                    FlowCart widget
                  </p>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {active.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                className="grid h-8 w-8 place-items-center rounded-full border border-ink/12 text-ink/50 hover:bg-paper-2"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4 px-5 py-5">
              <p className="text-[13px] leading-relaxed text-ink/65">{active.description}</p>

              <div>
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">
                  Capabilities
                </p>
                <ul className="space-y-1.5">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12.5px] text-ink/70">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-moss" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-dashed border-ink/20 bg-white px-3 py-2.5 font-mono text-[10px] text-ink/55">
                registry&nbsp;→&nbsp;
                <span className="font-medium text-moss">
                  flowcart_{active.id.replace(/-/g, '_')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
