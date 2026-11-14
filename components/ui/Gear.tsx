/** The gear from the Cam Ninh logo, used as a large watermark like the profile's back cover. */
export function Gear({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="none" stroke="currentColor">
      <circle cx="100" cy="100" r="84" strokeWidth="22" strokeDasharray="33 33" transform="rotate(-11 100 100)" />
      <circle cx="100" cy="100" r="66" strokeWidth="18" />
      <circle cx="100" cy="100" r="44" strokeWidth="5" />
    </svg>
  );
}
