import React from 'react';
import Header from './Header'; 
import Navigation from '../Navigation/Navigation'; 

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <Header />
      <div className="flex-1 overflow-y-auto">{children}</div>
      <Navigation />
    </div>
  );
};

export default MainLayout;
