import React, { useState } from 'react';
import {
  Activity,
  Boxes,
  Cpu,
  CreditCard,
  GitFork,
  Layers,
  Lock,
  MousePointerClick,
  PhoneCall,
  SlidersHorizontal,
  Truck,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    id: 'f1',
    icon: Zap,
    tag: 'Conversion',
    title: 'One-page express checkout',
    body: 'Product, customer details, delivery zone and payment sit on a single screen. No cart hop, no reload, no gateway redirect.',
    wide: true
  },
  {
    id: 'f2',
    icon: SlidersHorizontal,
    tag: 'Control',
    title: 'Field manager',
    body: 'Rename, reorder, hide or add any billing and shipping field with a toggle — including drag-and-drop custom fields.'
  },
  {
    id: 'f3',
    icon: PhoneCall,
    tag: 'Recovery',
    title: 'Incomplete order capture',
    body: 'Names and phone numbers are saved as they type, so abandoned buyers become a callable lead list.'
  },
  {
    id: 'f4',
    icon: GitFork,
    tag: 'Funnels',
    title: 'Multi-step funnel builder',
    body: 'Design campaign-specific paths: landing → checkout → order bump → thank-you page, without PHP.'
  },
  {
    id: 'f5',
    icon: Truck,
    tag: 'COD',
    title: 'Inside / outside city rates',
    body: 'Area-based delivery charges baked into checkout, with COD instructions and phone confirmation rules.',
    wide: true
  },
  {
    id: 'f6',
    icon: Lock,
    tag: 'Security',
    title: 'Fraud protection',
    body: 'IP rate limiting, phone validation and order-frequency rules cut fake and duplicate COD orders.'
  },
  {
    id: 'f7',
    icon: Activity,
    tag: 'Tracking',
    title: 'Meta pixel events',
    body: 'PageView, ViewContent, AddToCart, InitiateCheckout and Purchase fire with accurate cart totals.'
  },
  {
    id: 'f8',
    icon: Cpu,
    tag: 'Architecture',
    title: 'HPOS + AJAX ready',
    body: 'Runs on WooCommerce custom order tables with zero-flicker cart recalculation.'
  },
  {
    id: 'f9',
    icon: CreditCard,
    tag: 'Payments',
    title: 'bKash, Nagad & Rocket',
    body: 'Manual MFS transfer flows with transaction-ID capture, alongside standard gateway support.'
  },
  {
    id: 'f10',
    icon: Boxes,
    tag: 'Builder',
    title: '20 Elementor widgets',
    body: 'A dedicated FlowCart panel in Elementor: checkout, combo builder, countdowns, trust badges and more.'
  },
  {
    id: 'f11',
    icon: Layers,
    tag: 'Merchandising',
    title: 'Bundles & order bumps',
    body: 'Offer add-ons and combos with a single checkbox right above the place-order button.'
  },
  {
    id: 'f12',
    icon: MousePointerClick,
    tag: 'UX',
    title: 'Mobile-first inputs',
    body: 'Large touch targets, numeric keypads and one-thumb payment switching for social traffic.'
  }
];

export const Features: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="features" className="relative overflow-hidden bg-ink py-20 text-paper sm:py-28">
      <div className="grid-lines absolute inset-0 opacity-[0.12]" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-lime/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-lime/70">
              What&apos;s inside
            </p>
            <h2 className="max-w-xl font-display text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-[2.9rem]">
              Twelve features doing the
              <span className="font-serif italic text-lime"> heavy lifting.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-paper/45">
            Everything ships inside the plugin. No add-on packs, no upsell tier,
            no extra subscription.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const open = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActive(open ? null : f.id)}
                style={{ ['--reveal-delay' as string]: `${(i % 3) * 70}ms` }}
                data-reveal
                className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                  open
                    ? 'border-lime/70 bg-lime/[0.07]'
                    : 'border-ink-line bg-ink-soft/60 hover:border-paper/25'
                } ${f.wide ? 'sm:col-span-1' : ''}`}
              >
                <div className="mb-4 flex items-start justify-between">
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-lg border transition-colors ${
                      open
                        ? 'border-lime/60 bg-lime text-ink'
                        : 'border-ink-line bg-ink text-lime'
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/30">
                    {f.tag}
                  </span>
                </div>

                <h3 className="font-display text-[15px] font-semibold leading-snug text-paper">
                  {f.title}
                </h3>
                <p
                  className={`mt-2 text-[12px] leading-relaxed text-paper/50 transition-all ${
                    open ? 'opacity-100' : 'line-clamp-2 opacity-80'
                  }`}
                >
                  {f.body}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.14em] text-lime/60">
                  {open ? '− close' : '+ details'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
