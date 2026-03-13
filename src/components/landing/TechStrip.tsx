const TECH = ['Solana', 'Jupiter', 'Pyth Network', 'Anchor', 'Switchboard', 'Pinecone'];

export default function TechStrip() {
  return (
    <div className="bg-cream border-y border-dark/8 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-14">
        {TECH.map((name) => (
          // SWAP: Replace text with actual SVG logos
          <span
            key={name}
            className="text-dark/30 hover:text-dark/60 text-xs tracking-[0.2em] uppercase transition-colors cursor-default"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
