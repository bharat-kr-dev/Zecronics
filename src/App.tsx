import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Header from './components/Header/Header';
import GameArea from './components/GameArea/GameArea';
import UpgradesTab from './components/Upgrades/UpgradesTab';
import StatsTab from './components/Stats/StatsTab';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import CryptoDashboardPage from './pages/CryptoDashboard';

// Income Pages
import DirectIncomePage from './pages/DirectIncomePage';
import LevelIncomePage from './pages/LevelIncomePage';
import ROIIncomePage from './pages/ROIIncomePage';
import BonusIncomePage from './pages/BonusIncomePage';
import TotalIncomePage from './pages/TotalIncomePage';
import Partner from './pages/Partner';
import Community from './pages/Community';
import Profile from './pages/ Profile'; 

interface MainLayoutProps {
  children: React.ReactNode;
}

// Main Layout that includes header and navigation for all pages
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden flex flex-col">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        <Header />
      </div>
      
      {/* Main Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </div>
      
      {/* Fixed Navigation */}
      <div className="flex-shrink-0">
        <Navigation />
      </div>
      
      <style>{`
        @keyframes tapEffect {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-60px) scale(1.2);
          }
        }
        .safe-area-pb {
          padding-bottom: env(safe-area-inset-bottom);
        }
        /* Custom scrollbar for main content */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #6366f1);
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #4f46e5);
        }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <GameProvider>
      <Router>
        <Routes>
          {/* Main Game UI */}
          <Route path="/" element={
            <MainLayout>
              <GameArea />
            </MainLayout>
          } />
          
          {/* Partner & Community Pages */}
          <Route path="/partner" element={
            <MainLayout>
              <Partner />
            </MainLayout>
          } />
          
          {/* Alias route for partners (plural) */}
          <Route path="/partners" element={<Navigate to="/partner" replace />} />
          
          <Route path="/community" element={
            <MainLayout>
              <Community />
            </MainLayout>
          } />
          
          {/* Profile Page - New */}
          <Route path="/profile" element={
            <MainLayout>
              <Profile />
            </MainLayout>
          } />
          
          {/* Investment Pages */}
          <Route path="/investment" element={
           
              <HomePage />
           
          } />
          
          <Route path="/investment/dashboard" element={
           
              <CryptoDashboardPage />
           
          } />
          
          {/* Income Report Routes */}
          <Route path="/investment/income/direct" element={
          
              <DirectIncomePage />
         
          } />
          
          <Route path="/investment/income/level" element={
           
              <LevelIncomePage />
           
          } />
          
          <Route path="/investment/income/roi" element={
          
              <ROIIncomePage />
           
          } />
          
          <Route path="/investment/income/bonus" element={
           
              <BonusIncomePage />
           
          } />
          
          <Route path="/investment/income/total" element={
              <TotalIncomePage />
           
          } />
          
          {/* Redirect for upgrades and stats */}
          <Route path="/upgrades" element={
            <MainLayout>
              <UpgradesTab />
            </MainLayout>
          } />
          
          <Route path="/stats" element={
            <MainLayout>
              <StatsTab />
            </MainLayout>
          } />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;