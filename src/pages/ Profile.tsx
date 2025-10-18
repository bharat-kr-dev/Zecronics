import  { useState } from 'react';
import { User, Trophy,Award, Clock, Coins, TrendingUp, Star, ChevronRight, Activity, Send, Medal, CreditCard, Gift, Shield, Target, List, Check } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const user = {
    name: 'Alex Johnson',
    username: 'alex_crypto',
    level: 5,
    joined: 'Oct 2023',
    coins: 12450,
    earnings: '$245.80',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  };

  // Mock stats data
  const stats = [
    { id: 'tasks', icon: <Check size={18} />, label: 'Tasks Completed', value: '24/30' },
    { id: 'earnings', icon: <Coins size={18} />, label: 'Total Earnings', value: '$245.80' },
    { id: 'level', icon: <Award size={18} />, label: 'Current Level', value: '5' },
    { id: 'streak', icon: <Activity size={18} />, label: 'Daily Streak', value: '16 days' },
  ];

  // Mock achievements
  const achievements = [
    { id: 1, icon: <Medal size={20} />, title: 'First Steps', description: 'Complete your first 5 tasks', completed: true },
    { id: 2, icon: <TrendingUp size={20} />, title: 'On The Rise', description: 'Reach level 5', completed: true },
    { id: 3, icon: <Shield size={20} />, title: 'Verified User', description: 'Verify your account', completed: true },
    { id: 4, icon: <CreditCard size={20} />, title: 'First Withdrawal', description: 'Make your first withdrawal', completed: true },
    { id: 5, icon: <Gift size={20} />, title: 'Referral Master', description: 'Invite 10 friends', completed: false },
    { id: 6, icon: <Star size={20} />, title: 'Premium Member', description: 'Subscribe to premium plan', completed: false },
  ];

  // Mock tasks
  const tasks = [
    { id: 1, title: 'Daily Login', reward: '100 coins', completed: true },
    { id: 2, title: 'Share on Social Media', reward: '200 coins', completed: false },
    { id: 3, title: 'Watch 5 Videos', reward: '150 coins', completed: true },
    { id: 4, title: 'Invite a Friend', reward: '300 coins', completed: false },
    { id: 5, title: 'Complete Survey', reward: '250 coins', completed: false },
    { id: 6, title: 'Visit Partner Page', reward: '50 coins', completed: true },
  ];

  // Tabs data
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <User size={16} /> },
    { id: 'tasks', label: 'Tasks', icon: <List size={16} /> },
    { id: 'achievements', label: 'Achievements', icon: <Award size={16} /> },
    { id: 'earnings', label: 'Earnings', icon: <Coins size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 sm:p-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl shadow-xl mb-8 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+';
                  }}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-indigo-900">
                <Check size={14} className="text-white" />
              </div>
            </div>
            
            {/* User Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-indigo-200 mb-2">@{user.username}</p>
              
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-2">
                <div className="flex items-center bg-indigo-950/50 px-3 py-1 rounded-full text-sm">
                  <Award size={14} className="text-yellow-400 mr-1" />
                  <span>Level {user.level}</span>
                </div>
                
                <div className="flex items-center bg-indigo-950/50 px-3 py-1 rounded-full text-sm">
                  <Clock size={14} className="text-blue-400 mr-1" />
                  <span>Joined {user.joined}</span>
                </div>
                
                <div className="flex items-center bg-indigo-950/50 px-3 py-1 rounded-full text-sm">
                  <Coins size={14} className="text-yellow-400 mr-1" />
                  <span>{user.coins.toLocaleString()} coins</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div>
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 px-4 py-2 rounded-xl text-white font-medium transition-colors duration-300 flex items-center">
                <Send size={16} className="mr-2" /> Share Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="bg-gray-800/50 rounded-xl mb-6 backdrop-blur-sm p-1">
        <div className="flex overflow-x-auto hide-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white' 
                  : 'hover:bg-gray-700/50 text-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="mb-16">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(stat => (
                <div key={stat.id} className="bg-gray-800/60 rounded-2xl p-4 backdrop-blur-sm border border-gray-700/50">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                      {stat.icon}
                    </div>
                    <span className="text-gray-300 text-sm">{stat.label}</span>
                  </div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
            
            {/* Next Level Progress */}
            <div className="bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border border-gray-700/50">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Level Progress</h3>
                <span className="text-purple-400 text-sm font-medium">Level {user.level} → {user.level + 1}</span>
              </div>
              
              <div className="w-full bg-gray-700 h-3 rounded-full mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                  style={{ width: '65%' }}
                ></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">8,125 / 12,500 XP</span>
                <span className="text-indigo-400">4,375 XP needed</span>
              </div>
            </div>
            
            {/* Recent Achievements */}
            <div className="bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border border-gray-700/50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Recent Achievements</h3>
                <button 
                  onClick={() => setActiveTab('achievements')}
                  className="text-purple-400 text-sm flex items-center"
                >
                  View All <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="space-y-3">
                {achievements.filter(a => a.completed).slice(0, 3).map(achievement => (
                  <div key={achievement.id} className="flex items-center p-3 bg-gray-800/80 rounded-xl">
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-2 rounded-lg mr-3">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{achievement.title}</h4>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                        Completed
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Daily Tasks */}
            <div className="bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border border-gray-700/50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Daily Tasks</h3>
                <button 
                  onClick={() => setActiveTab('tasks')}
                  className="text-purple-400 text-sm flex items-center"
                >
                  View All <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="space-y-3">
                {tasks.slice(0, 3).map(task => (
                  <div key={task.id} className="flex items-center p-3 bg-gray-800/80 rounded-xl">
                    <div className={`p-2 rounded-lg mr-3 ${task.completed ? 'bg-green-500/20' : 'bg-indigo-900/50'}`}>
                      {task.completed ? 
                        <Check size={18} className="text-green-500" /> : 
                        <Target size={18} className="text-indigo-400" />
                      }
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{task.title}</h4>
                      <p className="text-sm text-yellow-400">{task.reward}</p>
                    </div>
                    <div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        task.completed 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-indigo-500/20 text-indigo-400'
                      }`}>
                        {task.completed ? 'Completed' : 'Pending'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="space-y-4 animate-fade-in">
            <div className="bg-indigo-900/30 rounded-xl p-4 backdrop-blur-sm border border-indigo-800/30">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-800 rounded-lg mr-3">
                  <Activity size={18} className="text-indigo-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Daily Tasks Progress</h3>
                  <div className="w-full bg-gray-800 h-2.5 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      style={{ width: `${(tasks.filter(t => t.completed).length / tasks.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-3 text-xl font-bold text-white">
                  {tasks.filter(t => t.completed).length}/{tasks.length}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-lg font-semibold mb-4">Available Tasks</h3>
              
              <div className="space-y-3">
                {tasks.map(task => (
                  <div key={task.id} className="flex items-center p-3 bg-gray-800/80 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className={`p-2 rounded-lg mr-3 ${task.completed ? 'bg-green-500/20' : 'bg-indigo-900/50'}`}>
                      {task.completed ? 
                        <Check size={18} className="text-green-500" /> : 
                        <Target size={18} className="text-indigo-400" />
                      }
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{task.title}</h4>
                      <p className="text-sm text-yellow-400">{task.reward}</p>
                    </div>
                    <div>
                      {task.completed ? (
                        <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">Completed</span>
                      ) : (
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1 rounded-full">
                          Complete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-5 animate-fade-in">
            <div className="bg-indigo-900/30 rounded-xl p-4 backdrop-blur-sm border border-indigo-800/30">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-800 rounded-lg mr-3">
                  <Trophy size={18} className="text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Achievements Progress</h3>
                  <div className="w-full bg-gray-800 h-2.5 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"
                      style={{ width: `${(achievements.filter(a => a.completed).length / achievements.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-3 text-xl font-bold text-white">
                  {achievements.filter(a => a.completed).length}/{achievements.length}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map(achievement => (
                <div 
                  key={achievement.id} 
                  className={`bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border ${
                    achievement.completed 
                      ? 'border-purple-500/30 hover:border-purple-500/50' 
                      : 'border-gray-700/50 hover:border-gray-600/50'
                  } transition-colors`}
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-xl mr-4 ${
                      achievement.completed 
                        ? 'bg-gradient-to-br from-purple-500 to-indigo-500' 
                        : 'bg-gray-700'
                    }`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{achievement.title}</h4>
                      <p className="text-gray-400 mb-3">{achievement.description}</p>
                      <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                        achievement.completed 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-700 text-gray-400'
                      }`}>
                        {achievement.completed ? 'Completed' : 'Locked'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Earnings Tab */}
        {activeTab === 'earnings' && (
          <div className="space-y-5 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-sm text-gray-400 mb-1">Total Earnings</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">${user.earnings}</span>
                  <span className="ml-2 text-green-500 text-sm">+$24.50 this week</span>
                </div>
              </div>
              
              <div className="bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-sm text-gray-400 mb-1">Available Balance</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">$45.20</span>
                  <button className="ml-auto bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1 rounded-lg">
                    Withdraw
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-sm text-gray-400 mb-1">Coin Balance</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">{user.coins.toLocaleString()}</span>
                  <span className="ml-2 text-yellow-500 text-sm">
                    <Coins size={14} className="inline mr-1" />
                    Coins
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="pb-3 text-left text-sm font-medium text-gray-400">Date</th>
                      <th className="pb-3 text-left text-sm font-medium text-gray-400">Type</th>
                      <th className="pb-3 text-left text-sm font-medium text-gray-400">Description</th>
                      <th className="pb-3 text-right text-sm font-medium text-gray-400">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-sm">Oct 15, 2025</td>
                      <td className="py-3">
                        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                          Task Reward
                        </span>
                      </td>
                      <td className="py-3 text-sm">Completed daily tasks</td>
                      <td className="py-3 text-right text-green-500">+$5.00</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-sm">Oct 12, 2025</td>
                      <td className="py-3">
                        <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full">
                          Referral
                        </span>
                      </td>
                      <td className="py-3 text-sm">Friend signup bonus</td>
                      <td className="py-3 text-right text-green-500">+$15.00</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-sm">Oct 10, 2025</td>
                      <td className="py-3">
                        <span className="bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full">
                          Achievement
                        </span>
                      </td>
                      <td className="py-3 text-sm">Level 5 milestone</td>
                      <td className="py-3 text-right text-green-500">+$10.00</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-sm">Oct 5, 2025</td>
                      <td className="py-3">
                        <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full">
                          Withdrawal
                        </span>
                      </td>
                      <td className="py-3 text-sm">PayPal transfer</td>
                      <td className="py-3 text-right text-red-500">-$25.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Profile;