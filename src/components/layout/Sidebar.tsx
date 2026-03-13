import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, Trophy, Settings, ArrowLeft } from 'lucide-react';
import { LINKS } from '@/config/agents';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'agents', label: 'Agents', icon: Users },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  { id: 'config', label: 'Settings & Config', icon: Settings },
];

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col w-60 fixed left-0 top-0 bottom-0 dark-grid z-40">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-light-text/10">
        <Link to="/" className="flex items-center gap-3">
          <img src="https://i.imgur.com/ySOycOf.png" alt="The Pantheon" className="h-8 invert" />
          <span className="text-light-text text-xs font-semibold tracking-[0.2em] uppercase">
            THE PANTHEON
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm tracking-wide transition-all ${
                isActive
                  ? 'text-light-text bg-light-text/8 border-l-[3px] border-light-text'
                  : 'text-light-text/40 hover:text-light-text/70 border-l-[3px] border-transparent'
              }`}
            >
              <Icon size={18} />
              <span className="uppercase">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-6 py-5 border-t border-light-text/10 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse-dot" />
          <span className="text-light-text/50 text-xs uppercase tracking-wider">
            Season 1 — Pre-Season
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-light-text/40 hover:text-light-text/70 text-xs transition-colors"
          >
            <ArrowLeft size={14} />
            Home
          </Link>
          <a
            href={LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-text/40 hover:text-light-text/70 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
