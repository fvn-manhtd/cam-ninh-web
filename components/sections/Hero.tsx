import type { Dictionary } from "@/content/dictionaries";
import { img } from "@/content/data/images";

const tiles = ["hero/team-switchgear", "hero/cctv-jetty-install", "hero/control-room", "hero/sat-scs-desk"];

/** Opening block: the profile cover's diamond photo mosaic, rebuilt with Cam Ninh's own site photos. */
export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section id="home" className="hex-bg relative overflow-hidden bg-mist">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-24 lg:pt-20">
        <div>
          <h1 className="font-display text-[2.6rem] font-bold leading-[1.05] text-ink sm:text-6xl xl:text-7xl">
            {dict.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-steel">{dict.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">{dict.ctaQuote}</a>
            <a href="#service" className="btn btn-outline">{dict.ctaServices}</a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
          <div className="absolute inset-[6%] translate-x-[9%] translate-y-[6%] rotate-45 bg-brand" aria-hidden="true" />
          <div className="absolute inset-[14.6%] grid rotate-45 grid-cols-2 gap-2.5 sm:gap-3.5">
            {tiles.map((path, index) => {
              const image = img(path);
              return (
                <div key={path} className="hero-tile overflow-hidden bg-line outline outline-4 outline-white">
                  <img
                    src={image.src}
                    alt={dict.photoAlt[index]}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full -rotate-45 scale-[1.45] object-cover"
                    fetchPriority={index === 0 ? "high" : undefined}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <dl className="relative border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4">
          {dict.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse border-line py-6 pr-4 md:border-l md:pl-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-sm font-medium text-steel">{stat.label}</dt>
              <dd className="font-display text-5xl font-bold tabular-nums text-brand-deep">
                {stat.plain ? stat.value : <span data-countup={stat.value}>{stat.value}</span>}
              </dd>
            </div>
          ))}
        </div>
      </dl>
    </section>
  );
}
