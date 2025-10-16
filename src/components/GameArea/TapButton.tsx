import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import TapEffect from './TapEffect';

interface TapButtonProps {}

const TapButton: React.FC<TapButtonProps> = () => {
  const { gameState, handleTap } = useGame();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleTap(e);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // Reset animation after 300ms
  };
  
  return (
    <div className="relative mb-8">
      <div
        onClick={handleClick}
        className="relative cursor-pointer flex items-center justify-center"
        style={{ userSelect: 'none' }}
      >
        {/* Coin Image with Professional Animation */}
        <div className={`relative ${isAnimating ? 'animate-coin-click' : 'animate-coin-float'}`}>
          <img 
            src="/zynk.jpeg" 
            alt="ZYN Coin" 
            className="w-60 h-60 rounded-full object-cover"
          />
        </div>
      </div>
      
      {/* Floating +1 Effects */}
      {gameState.tapEffects?.map(effect => (
        <TapEffect key={effect.id} effect={effect} />
      ))}
      
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes coinFloat {
          0%, 100% { transform: translateY(0) rotate(0); }
          25% { transform: translateY(-5px) rotate(1deg); }
          50% { transform: translateY(0) rotate(0); }
          75% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes coinClick {
          0% { transform: scale(1); }
          50% { transform: scale(0.92); }
          100% { transform: scale(1); }
        }
        
        .animate-coin-float {
          animation: coinFloat 6s ease-in-out infinite;
        }
        
        .animate-coin-click {
          animation: coinClick 300ms ease-out;
        }
      `}</style>
    </div>
  );
};

export default TapButton;