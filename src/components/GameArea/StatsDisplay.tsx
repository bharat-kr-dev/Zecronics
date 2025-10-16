import React from 'react';
import { useGame } from '../../context/GameContext';
import { TrendingUp, Zap } from 'lucide-react';

interface StatsDisplayProps {}

const StatsDisplay: React.FC<StatsDisplayProps> = () => {
  const { gameState } = useGame();
  
  return (
    <div className="text-center space-y-4">
      {/* Tap Power Card */}
      <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-2xl p-5 backdrop-blur-md border border-blue-500/20 inline-block shadow-lg -mt-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Zap size={24} className="text-blue-300" />
          <p className="text-xl text-white font-medium">Earn Power</p>
        </div>
        <p className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
          +{gameState.pointsPerTap}
        </p>
      </div>
      
      {/* Auto Mining Card (if available) */}
      {gameState.autoPointsPerSecond > 0 && (
        <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-2xl p-4 backdrop-blur-md border border-indigo-500/30 inline-block shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-1">
            <TrendingUp size={20} className="text-indigo-300" />
            <p className="text-sm text-indigo-300 font-medium">Passive Earnings</p>
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
            +{gameState.autoPointsPerSecond}/sec
          </p>
        </div>
      )}
      
      {/* Progress Stats - Small cards in a row (optional) */}
      <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto mt-2">
        {/* Total Earnings */}
        <div className="bg-gray-800/60 rounded-xl p-3 backdrop-blur-sm border border-gray-700">
          <p className="text-xs text-gray-400 mb-1">Total Earned</p>
          <p className="text-lg font-bold text-blue-300">
            {gameState.totalPoints ? gameState.totalPoints.toLocaleString() : '0'}
          </p>
        </div>
        
        {/* Level */}
        <div className="bg-gray-800/60 rounded-xl p-3 backdrop-blur-sm border border-gray-700">
          <p className="text-xs text-gray-400 mb-1">Level Progress</p>
          <p className="text-lg font-bold text-indigo-300">
            {gameState.level}
            <span className="text-sm text-gray-500 ml-1">/ 100</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;