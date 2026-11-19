import React from 'react';
import { ShoppingCart } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      ['Why FlowCart', '#why'],
      ['Features', '#features'],
      ['Widgets', '#widgets'],
      ['Pricing', '#pricing']
    ]
  },
  {
    title: 'Setup',
    links: [
      ['How it works', '#how'],
      ['FAQ', '#faq'],
      ['Requirements', '#how']
    ]
  },
  {
    title: 'Legal',
    links: [
      ['GPL licence', '#pricing'],
      ['Privacy', '#pricing'],
      ['Refunds', '#pricing']
    ]
  }
];

export const Footer: React.FC = () => (
  <footer className="border-t border-ink-line bg-ink text-paper">
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime text-ink">
              <ShoppingCart className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">FlowCart</span>
          </div>
          <p className="mt-4 max-w-xs text-[12px] leading-relaxed text-paper/45">
            One-page express checkout and funnel toolkit for WooCommerce. Built
            for COD-heavy stores in Bangladesh and beyond. Free forever.
          </p>
          <p className="mt-5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-paper/25">
            WooCommerce 7.5–9.x · Elementor · HPOS
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-paper/35">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[12px] text-paper/55 transition-colors hover:text-lime"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-line pt-6 sm:flex-row sm:items-center">
        <p className="text-[10.5px] text-paper/35">
          © {new Date().getFullYear()} FlowCart. WordPress and WooCommerce are
          trademarks of their respective owners.
        </p>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-paper/25">
          v2.4 · made for merchants
        </p>
      </div>
    </div>
  </footer>
);
