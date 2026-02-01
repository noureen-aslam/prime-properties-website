const builders = [
  'Prestige Group',
  'Brigade Group',
  'Sobha Limited',
  'Godrej Properties',
  'Puravankara',
  'Mahindra Lifespaces',
  'Embassy Group',
  'Salarpuria Sattva',
  'Shriram Properties',
  'Total Environment',
];

export default function BuilderMarquee() {
  return (
    <section id="builders" className="py-16 bg-black border-y border-zinc-800 overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Our <span className="text-amber-500">Tier-1 Builder</span> Partners
        </h2>
        <p className="text-gray-400">Trusted collaborations with India's leading developers</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex animate-scroll">
          {[...builders, ...builders].map((builder, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-8 py-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all"
            >
              <span className="text-xl font-semibold text-white whitespace-nowrap">
                {builder}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
