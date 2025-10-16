import React from 'react';
import { Zap } from 'lucide-react';

interface EnergyBarProps {
  energy: number;
  maxEnergy: number;
}

const EnergyBar: React.FC<EnergyBarProps> = ({ energy, maxEnergy }) => {
  const percentage = (energy / maxEnergy) * 100;
  
  return (
    <div className="bg-gray-800/70 rounded-xl p-3 backdrop-blur-sm border border-blue-500/20 shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <Zap size={18} className="text-blue-400" />
          <span className="text-sm font-semibold text-white">Energy</span>
        </div>
        <span className="text-sm text-white">{energy.toFixed(0)}/{maxEnergy}</span>
      </div>
      
      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden shadow-inner">
        <div
          className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 h-full rounded-full transition-all duration-300 shadow-lg"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default EnergyBar;