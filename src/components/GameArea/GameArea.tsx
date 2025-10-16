import React from 'react';
import TapButton from './TapButton';
import StatsDisplay from './StatsDisplay';

const GameArea: React.FC = () => {
  return (
    <div className="min-h-full p-6 relative bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 text-white">
      {/* Background Effects - Modern Digital Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blue aura left */}
        <div className="absolute top-24 left-16 w-36 h-36 bg-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Indigo aura right */}
        <div className="absolute bottom-24 right-16 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Glowing energy behind center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Digital particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-indigo-400 rounded-full animate-ping animation-delay-700"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping animation-delay-1500"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping animation-delay-2000"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-6">
        {/* Coin tap button */}
        <div className="flex-shrink-0">
          <TapButton />
        </div>
        
        {/* Stats panel styled */}
        <div className="w-full max-w-md flex-shrink-0">
          <StatsDisplay />
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style>{`
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </div>
  );
};

export default GameArea;