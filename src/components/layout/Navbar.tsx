import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X as CloseIcon } from 'lucide-react';
import { LINKS } from '@/config/agents';

const NAV_ITEMS = [
  { label: 'Arena', href: '#arena' },
  { label: 'Agents', href: '#agents' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Tokenomics', href: '#tokenomics' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-dark/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* SWAP: Replace with logo image — <img src="/logo.png" alt="The Pantheon" className="h-9" /> */}
          <img src="https://i.imgur.com/ySOycOf.png" alt="The Pantheon" className="h-9" />
          <span className="text-dark font-semibold text-sm tracking-[0.2em] uppercase hidden sm:inline">
            THE PANTHEON
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-dark/60 hover:text-dark text-sm tracking-wide uppercase transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark/60 hover:text-dark transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <Link
            to="/arena"
            className="bg-dark text-cream px-5 py-2 text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
          >
            Launch App
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-dark"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-dark/10 px-6 py-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-dark/70 hover:text-dark text-sm tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/arena"
            className="block bg-dark text-cream px-5 py-2.5 text-sm tracking-wide uppercase rounded text-center"
          >
            Launch App
          </Link>
        </div>
      )}
    </nav>
  );
}
