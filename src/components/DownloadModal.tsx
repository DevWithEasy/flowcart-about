import React, { useState } from 'react';
import { Check, Download, ShieldCheck, X } from 'lucide-react';

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
}

const STEPS = [
  'Download the flowcart-plugin-v2.4.zip archive.',
  'In WordPress go to Plugins → Add New → Upload Plugin.',
  'Choose the zip, click Install Now, then Activate.',
  'Open FlowCart in the admin menu and pick your checkout fields.'
];

export const DownloadModal: React.FC<DownloadModalProps> = ({ open, onClose }) => {
  const [started, setStarted] = useState(false);

  if (!open) return null;

  const download = () => {
    setStarted(true);
    const blob = new Blob(
      [
        '/* FlowCart WordPress Plugin — v2.4 Free Edition */\n/* Full package available from the FlowCart repository. */\n'
      ],
      { type: 'application/zip' }
    );
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'flowcart-plugin-v2.4.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-ink/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rise w-full max-w-lg overflow-hidden rounded-2xl border border-ink bg-paper shadow-soft"
      >
        <div className="flex items-start justify-between border-b border-ink/10 bg-white px-5 py-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/40">
              Free edition · v2.4
            </p>
            <h3 className="font-display text-lg font-semibold text-ink">
              {started ? 'You’re downloading FlowCart' : 'Get FlowCart free'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full border border-ink/12 text-ink/50 hover:bg-paper-2"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-5 py-5">
          {!started ? (
            <>
              <p className="text-[13px] leading-relaxed text-ink/65">
                All 20 Elementor widgets, the one-page checkout engine, lead
                capture and fraud rules — unlimited websites, zero cost.
              </p>
              <ol className="mt-4 space-y-2">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex items-start gap-2.5 text-[12px] text-ink/70">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ink font-mono text-[9px] text-lime">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <button
                onClick={download}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download flowcart-plugin-v2.4.zip
              </button>
            </>
          ) : (
            <>
              <div className="flex items-start gap-3 rounded-xl border border-moss/20 bg-moss/8 px-4 py-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" strokeWidth={3} />
                <p className="text-[12.5px] leading-relaxed text-ink/70">
                  <span className="font-semibold text-ink">flowcart-plugin-v2.4.zip</span>{' '}
                  is on its way. Check your downloads folder.
                </p>
              </div>
              <ol className="mt-4 space-y-2">
                {STEPS.slice(1).map((s, i) => (
                  <li key={s} className="flex items-start gap-2.5 text-[12px] text-ink/70">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ink/10 font-mono text-[9px] text-ink/60">
                      {i + 2}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <button
                onClick={onClose}
                className="mt-5 w-full rounded-xl border border-ink/20 py-3 text-sm font-semibold text-ink hover:bg-paper-2"
              >
                Got it
              </button>
            </>
          )}

          <p className="mt-4 flex items-center justify-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-ink/35">
            <ShieldCheck className="h-3 w-3" />
            GPL · no telemetry · self-hosted
          </p>
        </div>
      </div>
    </div>
  );
};
