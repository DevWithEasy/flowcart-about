import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: 'What exactly is FlowCart?',
    a: 'A WordPress plugin for WooCommerce that replaces the multi-step cart and checkout with a single-page express checkout, plus funnel tools, incomplete-order capture, fraud rules and 20 Elementor widgets.'
  },
  {
    q: 'Does it work with my existing WooCommerce store?',
    a: 'Yes. FlowCart uses standard WooCommerce products, shipping zones, tax rules, coupons, order emails and payment gateways. Nothing in the WooCommerce core tables is modified.'
  },
  {
    q: 'Which WooCommerce versions are supported?',
    a: 'WooCommerce 7.5 through 9.x, including stores using High-Performance Order Storage (HPOS) custom order tables.'
  },
  {
    q: 'Is Elementor required?',
    a: 'No. The checkout works on its own. If you do use Elementor (free or Pro), all 20 FlowCart widgets appear in their own panel and can be dropped into any page.'
  },
  {
    q: 'Does it support Cash on Delivery and bKash / Nagad?',
    a: 'COD is first-class: area-based delivery charges, custom instructions and phone confirmation. bKash, Nagad and Rocket manual-transfer flows include transaction-ID capture alongside standard gateways.'
  },
  {
    q: 'What happens to abandoned checkouts?',
    a: 'Names and phone numbers are stored the moment they are typed. You get a lead log you can call, export or follow up on — even when the order never completes.'
  },
  {
    q: 'How is fraud handled?',
    a: 'IP rate limiting, phone-number validation, duplicate detection and order-frequency rules block the fake COD orders that eat courier costs.'
  },
  {
    q: 'Is it really free?',
    a: 'Yes — the entire plugin, all 20 widgets, unlimited websites, no licence key and no credit card. Updates and documentation are free too.'
  },
  {
    q: 'Where does my customer data go?',
    a: 'Nowhere. FlowCart runs entirely on your own server and does not send order or customer data to third-party services.'
  }
];

export const Faq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink py-20 text-paper sm:py-28">
      <div className="grid-lines absolute inset-0 opacity-[0.1]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div data-reveal>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-lime/70">
              FAQ
            </p>
            <h2 className="font-display text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-[2.7rem]">
              Questions,
              <span className="block font-serif italic text-lime">answered.</span>
            </h2>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-paper/45">
              Still unsure? Every answer below reflects what actually ships in
              the plugin today.
            </p>
          </div>

          <div className="divide-y divide-ink-line" data-reveal style={{ ['--reveal-delay' as string]: '100ms' }}>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 py-4 text-left"
                  >
                    <span className="font-mono text-[10px] text-paper/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`flex-1 text-[14px] font-medium transition-colors ${
                        isOpen ? 'text-lime' : 'text-paper/80'
                      }`}
                    >
                      {f.q}
                    </span>
                    <Plus
                      className={`h-4 w-4 shrink-0 text-paper/40 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 text-lime' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <p className="overflow-hidden pl-8 pr-8 text-[12.5px] leading-relaxed text-paper/55">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
