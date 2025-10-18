import React from 'react';
import { useGame } from '../../context/GameContext'; 
import { formatNumber, calculateLevelProgress } from '../../utils/formatters';
import EnergyBar from './EnergyBar';
import { Zap } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { gameState } = useGame();
  const levelProgress = calculateLevelProgress(gameState.points);
  const location = useLocation();
  
  // Check if we're on the home/earn page
  const isEarnPage = location.pathname === '/' || location.pathname === '/earn';

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 p-3 shadow-2xl">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        {/* Mobile Layout - Optimized */}
        <div className="block sm:hidden">
          {/* Single Row Layout */}
          <div className="flex items-center justify-between mb-3">
            {/* Left - Points */}
            <div className="flex items-center space-x-2">
              <span className="text-blue-400 animate-bounce">
                <Zap size={20} className="stroke-current" />
              </span>
              <span className="text-lg font-bold text-white bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {formatNumber(gameState.points)}
              </span>
            </div>

            {/* Right - Logo + Title + Level */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full overflow-hidden shadow-lg border border-blue-500/30 bg-blue-900 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IX</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{gameState.level}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold text-white bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  InfluenceX
                </span>
                <span className="text-xs text-blue-300">Level {gameState.level}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden border border-blue-500/30">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-1000"
                style={{ width: `${levelProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Redesigned */}
        <div className="hidden sm:block">
          <div className="flex items-center justify-between mb-6">
            {/* Left - Logo + Title */}
            <div className="flex items-center space-x-4 animate-float">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-800 to-indigo-900 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">IX</span>
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-sm font-bold text-white">{gameState.level}</span>
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  InfluenceX
                </h1>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-blue-300 animate-pulse">Level {gameState.level}</span>
                  <div className="w-24 h-2 bg-gray-700/50 rounded-full overflow-hidden border border-blue-500/30">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-1000 animate-pulse"
                      style={{ width: `${levelProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Points Only */}
            <div className="text-right animate-glow">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-900/50 rounded-full border border-blue-500/30 animate-bounce">
                  <Zap size={24} className="text-blue-300" />
                </div>
                <span className="text-4xl font-bold text-white bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {formatNumber(gameState.points)}
                </span>
              </div>
              <p className="text-sm text-blue-300 animate-pulse">Influence Coins</p>
            </div>
          </div>
        </div>

        {/* Energy Bar - Only show on Earn page */}
        {isEarnPage && (
          <EnergyBar energy={gameState.energy} maxEnergy={gameState.maxEnergy} />
        )}
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.4)); }
          50% { filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.8)); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;