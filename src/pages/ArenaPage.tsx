import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X as CloseIcon, Bell, Wallet } from 'lucide-react';
import Sidebar from '@/components/layout/Sidebar';
import Overview from '@/components/arena/Overview';
import AgentProfiles from '@/components/arena/AgentProfiles';
import Leaderboard from '@/components/arena/Leaderboard';
import ArenaConfig from '@/components/arena/ArenaConfig';

const SECTION_TITLES: Record<string, string> = {
  overview: 'Arena Overview',
  agents: 'Agent Profiles',
  leaderboard: 'Season Leaderboard',
  config: 'Arena Configuration',
};

export default function ArenaPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Desktop Sidebar */}
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Mobile Top Nav */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-cream border-b border-dark/10">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-dark"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <CloseIcon size={22} /> : <Menu size={22} />}
            </button>
            <Link to="/" className="flex items-center gap-2">
              <img src="https://i.imgur.com/ySOycOf.png" alt="The Pantheon" className="h-7" />
              <span className="text-dark text-xs font-semibold tracking-[0.15em] uppercase">
                Pantheon
              </span>
            </Link>
          </div>
          {/* Placeholder: Connect Wallet */}
          <button className="border border-dark/20 text-dark/60 px-3 py-1.5 text-[10px] tracking-wider uppercase rounded flex items-center gap-1.5">
            <Wallet size={12} />
            Connect
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="bg-cream border-t border-dark/10 px-4 py-4 space-y-2">
            {Object.entries(SECTION_TITLES).map(([id, label]) => (
              <button
                key={id}
                onClick={() => handleNavigate(id)}
                className={`block w-full text-left px-3 py-2 text-sm tracking-wide uppercase rounded transition-colors ${
                  activeSection === id
                    ? 'text-dark bg-dark/5 font-medium'
                    : 'text-dark/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="lg:ml-60">
        {/* Top Bar (desktop) */}
        <div className="hidden lg:flex items-center justify-between px-8 h-16 border-b border-dark/10 bg-cream sticky top-0 z-30">
          <h1 className="text-sm font-semibold text-dark tracking-[0.15em] uppercase">
            {SECTION_TITLES[activeSection]}
          </h1>
          <div className="flex items-center gap-4">
            {/* Placeholder: Notification bell */}
            <button className="text-dark/30 hover:text-dark/60 transition-colors" aria-label="Notifications">
              <Bell size={18} />
            </button>
            {/* Placeholder: Connect Wallet */}
            <button className="border border-dark/20 text-dark/60 px-4 py-2 text-xs tracking-wider uppercase rounded flex items-center gap-2 hover:border-dark/40 transition-colors">
              <Wallet size={14} />
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-6 lg:px-8 py-8 pt-20 lg:pt-8">
          {activeSection === 'overview' && <Overview />}
          {activeSection === 'agents' && <AgentProfiles />}
          {activeSection === 'leaderboard' && <Leaderboard />}
          {activeSection === 'config' && <ArenaConfig />}
        </div>
      </div>
    </div>
  );
}
