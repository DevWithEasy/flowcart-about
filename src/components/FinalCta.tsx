import React from 'react';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';

interface FinalCtaProps {
  onDownload: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onDownload }) => (
  <section className="relative overflow-hidden bg-lime">
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.16]"
      style={{
        backgroundImage:
          'radial-gradient(#0b0b0d 1.2px, transparent 1.2px)',
        backgroundSize: '20px 20px'
      }}
    />
    <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
        <div data-reveal>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
            Ready when you are
          </p>
          <h2 className="max-w-2xl font-display text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.035em] text-ink sm:text-[3.4rem]">
            Stop losing orders
            <span className="block font-serif italic">to a checkout form.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row" data-reveal>
          <button
            onClick={onDownload}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
          >
            Download FlowCart free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="https://github.com/DevWithEasy/flowcart-about"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/30 px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink/5"
          >
            <Github className="h-4 w-4" />
            View source
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="mt-14 grid gap-3 border-t border-ink/20 pt-6 sm:grid-cols-3">
        {[
          ['20', 'Elementor widgets'],
          ['0৳', 'no licence fee'],
          ['1', 'page to checkout']
        ].map(([k, v]) => (
          <div key={v} className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold text-ink">{k}</span>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/50">
              {v}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
