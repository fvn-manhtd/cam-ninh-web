"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { CheckIcon } from "@/components/ui/Icons";

export type ServicePanel = {
  id: string;
  name: string;
  intro: string;
  points: string[];
  photos: { src: string; width: number; height: number; label: string }[];
};

/** Six service areas as tabs. Every panel is in the server HTML; only the active one is shown. */
export function ServiceTabs({ panels, label }: { panels: ServicePanel[]; label: string }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (active + step + panels.length) % panels.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[19rem_1fr] lg:gap-12">
      <div
        role="tablist"
        aria-label={label}
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t-2 lg:border-ink lg:p-0"
      >
        {panels.map((panel, index) => {
          const selected = index === active;
          return (
            <button
              key={panel.id}
              ref={(el) => { tabs.current[index] = el; }}
              type="button"
              role="tab"
              id={`tab-${panel.id}`}
              aria-selected={selected}
              aria-controls={`panel-${panel.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`shrink-0 rounded-md border-2 px-4 py-2.5 text-left font-semibold transition-colors lg:rounded-none lg:border-0 lg:border-b lg:border-l-[6px] lg:border-b-line lg:py-4 ${
                selected
                  ? "border-brand bg-brand text-ink lg:border-l-ink"
                  : "border-line bg-white text-steel hover:text-ink lg:border-l-transparent lg:hover:bg-brand-soft"
              }`}
            >
              {panel.name}
            </button>
          );
        })}
      </div>

      {panels.map((panel, index) => (
        <div
          key={panel.id}
          role="tabpanel"
          id={`panel-${panel.id}`}
          aria-labelledby={`tab-${panel.id}`}
          hidden={index !== active}
          tabIndex={0}
          className="lg:col-start-2"
        >
          <h3 className="font-display text-3xl font-semibold md:text-4xl">{panel.name}</h3>
          <p className="mt-3 max-w-2xl text-lg">{panel.intro}</p>
          <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {panel.points.map((point) => (
              <li key={point} className="flex gap-2.5">
                <CheckIcon className="mt-1.5 h-4 w-4 shrink-0 text-brand-deep" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {panel.photos.map((photo) => (
              <li key={photo.src} className="overflow-hidden rounded-xl border-2 border-brand bg-brand">
                <img
                  src={photo.src}
                  alt=""
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  className="aspect-[4/3] w-full bg-white object-cover"
                />
                <p className="px-3 py-2 text-center text-sm font-semibold text-ink">{photo.label}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
