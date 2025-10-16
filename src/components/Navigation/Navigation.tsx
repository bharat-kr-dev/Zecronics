import React, { type JSX } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wallet, Search, Handshake, Users } from 'lucide-react';

interface NavigationTab {
  id: string;
  label: string;
  icon: JSX.Element;
  to: string;
}

const Navigation: React.FC = () => {
  const location = useLocation();
  
  // Get active tab based on current path
  const getActiveTab = (): string => {
    const path = location.pathname;
    if (path === '/') return 'earn';
    if (path === '/market' || path === '/discover') return 'discover';
    if (path.includes('/partner')) return 'partner';
    if (path.includes('/community')) return 'community';
    return 'earn';
  };
  
  const activeTab = getActiveTab();
  
  const tabs: NavigationTab[] = [
    { 
      id: 'earn', 
      label: 'Earn', 
      icon: <Wallet size={24} className="stroke-current" />, 
      to: '/' 
    },
    { 
      id: 'discover', 
      label: 'Discover', 
      icon: <Search size={24} className="stroke-current" />, 
      to: '/market' 
    },
    { 
      id: 'partner', 
      label: 'Partners', 
      icon: <Handshake size={24} className="stroke-current" />, 
      to: '/partner' 
    },
    { 
      id: 'community', 
      label: 'Community', 
      icon: <Users size={24} className="stroke-current" />, 
      to: '/community' 
    },
  ];

  return (
    <div className="bg-gray-900/95 backdrop-blur-xl border-t border-blue-500/20 safe-area-pb shadow-2xl relative">
      {/* Animated glow effect */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 animate-pulse"></div>
      
      <div className="flex justify-around p-2 sm:p-3">
        {tabs.map(tab => (
          <Link
            key={tab.id}
            to={tab.to}
            className={`flex flex-col items-center space-y-1 p-2 sm:p-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-blue-500/30 to-indigo-500/30 border border-blue-500/50 shadow-lg shadow-blue-500/20 animate-glow-active'
                : tab.id === 'partner'
                ? 'hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-blue-500/20 hover:border-indigo-500/30 hover:shadow-indigo-500/20 border border-transparent'
                : tab.id === 'discover' 
                ? 'hover:bg-gradient-to-r hover:from-green-500/20 hover:to-blue-500/20 hover:border-green-500/30 hover:shadow-green-500/20 border border-transparent'
                : 'hover:bg-white/5 border border-transparent hover:border-white/10'
            }`}
          >
            <div className={`${activeTab === tab.id ? 'text-blue-300 animate-pulse' : 'text-gray-400 group-hover:text-white'}`}>
              {tab.icon}
            </div>
            <span className={`text-xs font-semibold transition-colors ${
              activeTab === tab.id
                ? 'text-blue-300'
                : tab.id === 'partner'
                ? 'text-indigo-300 hover:text-indigo-200'
                : tab.id === 'discover'
                ? 'text-green-300 hover:text-green-200'
                : 'text-gray-400 hover:text-white'
            }`}>
              {tab.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes glow-active {
          0%, 100% {
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
            filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.5));
          }
          50% {
            box-shadow: 0 15px 35px rgba(59, 130, 246, 0.5);
            filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.8));
          }
        }
        @media (max-width: 640px) {
          .safe-area-pb { padding-bottom: env(safe-area-inset-bottom); }
        }
      `}</style>
    </div>
  );
};

export default Navigation;