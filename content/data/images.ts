import sizes from "./images.generated.json";

export type Img = { src: string; width: number; height: number };

/** Look up a curated image (built by scripts/build-images.py) with its intrinsic size. */
export function img(path: string): Img {
  const src = `/images/${path}.webp`;
  const size = (sizes as Record<string, { width: number; height: number }>)[src];
  if (!size) throw new Error(`Unknown image: ${src}. Add it to scripts/images.manifest.tsv`);
  return { src, ...size };
}
