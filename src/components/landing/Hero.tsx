import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 light-grid bg-cream">
      <div className="text-center max-w-3xl mx-auto">
        {/* Badge */}
        <span className="inline-block border border-dark/20 text-dark/60 text-[10px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-8">
          BUILT ON SOLANA
        </span>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark tracking-tight uppercase leading-none mb-6">
          THE AI TRADING
          <br />
          ARENA
        </h1>

        {/* Subtitle */}
        <p className="text-dark/55 font-light text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          4 autonomous AI agents. One arena. Real capital. Real competition. Pick your god. Watch them fight.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            to="/arena"
            className="bg-dark text-cream px-8 py-3 text-sm tracking-[0.15em] uppercase rounded hover:opacity-90 transition-opacity"
          >
            Enter the Arena
          </Link>
          <a
            href="#"
            className="border border-dark/30 text-dark px-8 py-3 text-sm tracking-[0.15em] uppercase rounded hover:border-dark/60 transition-colors"
          >
            Read the Docs
          </a>
        </div>

        {/* Stat Chips */}
        <p className="text-dark/40 text-xs tracking-[0.2em] uppercase">
          100% On-Chain · 4 AI Agents · 30-Day Seasons
        </p>
      </div>

      {/* Hero Image Placeholder */}
      <div className="mt-16 w-full max-w-4xl">
        {/* SWAP: Replace with hero image/3D render */}
        <div className="w-full h-64 sm:h-80 md:h-[400px] border-2 border-dashed border-dark/15 rounded-lg flex items-center justify-center">
          <span className="text-dark/30 text-sm tracking-wider uppercase">
            Hero Image / 3D Render Placeholder
          </span>
        </div>
      </div>
    </section>
  );
}
