import React from 'react';
import { ArrowUpRight, ShoppingCart } from 'lucide-react';
import { SITE } from '../data/site';

interface NavbarProps {
  onDownload: () => void;
}

const LINKS = [
  { label: 'Why FlowCart', href: '#why' },
  { label: 'Widgets', href: '#widgets' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' }
];

export const Navbar: React.FC<NavbarProps> = ({ onDownload }) => {
  const [open, setOpen] = React.useState(false);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/60 bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime text-ink">
            <ShoppingCart className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-paper">
            FlowCart
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="text-[13px] font-medium text-paper/60 transition-colors hover:text-lime"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onDownload}
            data-download-cta
            className="group inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-[13px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Get it free
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-line text-paper/70 md:hidden"
          >
            <span className="text-lg leading-none">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-line bg-ink px-5 pb-5 pt-2 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="block border-b border-ink-line/60 py-3 text-sm text-paper/70"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
