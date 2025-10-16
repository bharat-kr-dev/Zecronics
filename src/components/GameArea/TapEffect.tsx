import React from 'react';

// Define the TapEffect type if it's not already defined elsewhere
export interface TapEffectType {
  id: number;
  x: number;
  y: number;
  points: number;
}

interface TapEffectProps {
  effect: TapEffectType;
}

const TapEffect: React.FC<TapEffectProps> = ({ effect }) => {
  return (
    <div
      className="absolute text-blue-400 font-bold text-3xl pointer-events-none z-20"
      style={{
        left: effect.x - 15,
        top: effect.y - 15,
        animation: 'tapEffect 1s ease-out forwards',
        textShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
      }}
    >
      +{effect.points}
    </div>
  );
};

export default TapEffect;