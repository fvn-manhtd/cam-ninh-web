"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryItem = { src: string; width: number; height: number; caption: string };

type Labels = { open: string; close: string; prev: string; next: string };

/** Captioned image grid in the profile's orange frames; a tile opens the full image in a dialog. */
export function Gallery({ items, labels, columns }: { items: GalleryItem[]; labels: Labels; columns: "photos" | "documents" }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState<number | null>(null);

  const move = useCallback(
    (step: number) => setCurrent((index) => (index === null ? index : (index + step + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (current !== null && !el.open) el.showModal();
    if (current === null && el.open) el.close();
  }, [current]);

  const item = current === null ? null : items[current];
  const grid = columns === "photos" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-2 md:grid-cols-4";
  const ratio = columns === "photos" ? "aspect-[4/3] object-cover" : "aspect-[3/4] object-contain p-2";

  return (
    <>
      <ul className={`grid gap-4 ${grid}`}>
        {items.map((entry, index) => (
          <li key={entry.src}>
            <button
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`${labels.open}: ${entry.caption}`}
              className="group block w-full overflow-hidden rounded-xl border-2 border-brand bg-brand text-left"
            >
              <img
                src={entry.src}
                alt=""
                width={entry.width}
                height={entry.height}
                loading="lazy"
                className={`w-full bg-white transition-opacity group-hover:opacity-85 ${ratio}`}
              />
              <span className="block px-3 py-2 text-center text-sm font-semibold text-ink">{entry.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setCurrent(null)}
        onClick={(event) => event.target === dialog.current && setCurrent(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") move(1);
          if (event.key === "ArrowLeft") move(-1);
        }}
        className="m-auto max-h-[94vh] w-[min(94vw,72rem)] bg-transparent p-0 text-white"
      >
        {item ? (
          <figure className="flex flex-col items-center">
            <img src={item.src} alt={item.caption} width={item.width} height={item.height} className="max-h-[78vh] w-auto rounded-lg bg-white object-contain" />
            <figcaption className="mt-3 text-center text-lg font-semibold">{item.caption}</figcaption>
            <div className="mt-3 flex gap-3">
              <button type="button" className="btn bg-white text-ink hover:bg-brand" onClick={() => move(-1)} aria-label={labels.prev}>‹</button>
              <button type="button" className="btn bg-white text-ink hover:bg-brand" onClick={() => setCurrent(null)} autoFocus>{labels.close}</button>
              <button type="button" className="btn bg-white text-ink hover:bg-brand" onClick={() => move(1)} aria-label={labels.next}>›</button>
            </div>
          </figure>
        ) : null}
      </dialog>
    </>
  );
}
