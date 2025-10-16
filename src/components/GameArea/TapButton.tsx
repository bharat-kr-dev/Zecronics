import React from 'react';
import { useGame } from '../../context/GameContext';
import TapEffect from './TapEffect';
import {  Zap } from 'lucide-react';

interface TapButtonProps {}

const TapButton: React.FC<TapButtonProps> = () => {
  const { gameState, handleTap } = useGame();

  return (
    <div className="relative mb-8">
      <div
        onClick={handleTap}
        className="w-80 h-80 relative cursor-pointer flex items-center justify-center active:scale-95 transition-transform"
        style={{ userSelect: 'none' }}
      >
        {/* Outer glow */}
        <div className="absolute w-full h-full rounded-full bg-blue-500/20 blur-xl animate-pulse"></div>
        
        {/* Ripple on Tap */}
        <div className="absolute inset-0 rounded-full group-active:animate-ping bg-blue-400/10"></div>
        
        {/* Coin Button */}
        <div className="w-60 h-60 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.5)] active:scale-95 transition-transform overflow-hidden relative">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800 animate-slow-spin"></div>
          
          {/* Inner circular highlight */}
          <div className="absolute inset-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-4 border-blue-300/30 flex items-center justify-center">
            {/* IX Logo */}
            <div className="text-white font-bold text-5xl">IX</div>
            
            {/* Small energy bolt */}
            <div className="absolute top-1/4 right-1/4">
              <Zap className="text-blue-200 h-8 w-8" />
            </div>
          </div>
          
          {/* Top reflection */}
          <div className="absolute inset-x-10 top-0 h-1/4 bg-white/20 rounded-t-full"></div>
        </div>
        
        {/* Flash Effect */}
        <div className="absolute inset-0 rounded-full bg-blue-300/10 opacity-0 active:opacity-100 transition duration-300"></div>
      </div>
      
      {/* Floating +1 Effects */}
      {gameState.tapEffects?.map(effect => (
        <TapEffect key={effect.id} effect={effect} />
      ))}
      
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes slow-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TapButton;