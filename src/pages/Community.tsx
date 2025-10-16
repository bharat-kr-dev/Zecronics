import React, { useState, useEffect, type JSX } from 'react';
import { Users, MessageSquare, Send, Heart, MoreHorizontal, MessageCircle, Share, PlusCircle } from 'lucide-react';

interface CommunityOption {
  label: string;
  url: string;
  color: string;
  icon: JSX.Element;
}

interface Post {
  id: string;
  author: string;
  authorType: 'partner' | 'user';
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: Date;
  isLiked: boolean;
}

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'partners'>('feed');
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostText, setNewPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample community options
  const communityOptions: CommunityOption[] = [
    { 
      label: 'Join as Partner', 
      url: 'https://discord.com', 
      color: 'bg-indigo-600 hover:bg-indigo-500', 
      icon: <Users size={18} className="mr-2" /> 
    },
    { 
      label: 'Join as Responder', 
      url: 'https://t.me', 
      color: 'bg-blue-600 hover:bg-blue-500', 
      icon: <MessageSquare size={18} className="mr-2" /> 
    },
  ];

  // Sample initial posts
  useEffect(() => {
    const samplePosts: Post[] = [
      {
        id: '1',
        author: 'Natural Milk World',
        authorType: 'partner',
        avatar: '3.png',
        content: 'Excited to announce our new line of organic dairy products! Our commitment to sustainable farming practices continues to drive innovation.',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        likes: 42,
        comments: 8,
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
        isLiked: false,
      },
      {
        id: '2',
        author: 'Trivatoken',
        authorType: 'partner',
        avatar: '1.png',
        content: 'Our latest blockchain solution has launched! Secure, fast, and reliable transactions for all your business needs. #Blockchain #Innovation',
        likes: 28,
        comments: 5,
        timestamp: new Date(Date.now() - 86400000), // 24 hours ago
        isLiked: false,
      },
      {
        id: '3',
        author: 'John Doe',
        authorType: 'user',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        content: 'Just earned 500 Influence Coins by completing daily tasks! This platform is amazing for passive income.',
        likes: 17,
        comments: 3,
        timestamp: new Date(Date.now() - 172800000), // 48 hours ago
        isLiked: true,
      },
    ];
    
    setPosts(samplePosts);
  }, []);

  // Handle post submission
  const handleSubmitPost = () => {
    if (!newPostText.trim()) return;
    
    const newPost: Post = {
      id: Date.now().toString(),
      author: 'You',
      authorType: 'user',
      avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
      content: newPostText,
      image: selectedImage || undefined,
      likes: 0,
      comments: 0,
      timestamp: new Date(),
      isLiked: false,
    };
    
    setPosts([newPost, ...posts]);
    setNewPostText('');
    setSelectedImage(null);
  };

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle like on a post
  const toggleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 rounded-b-3xl shadow-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
          InfluenceX Community
        </h1>
        <p className="text-center text-gray-300 mb-6 max-w-2xl mx-auto">
          Connect with partners, share your achievements, and explore new opportunities in our growing ecosystem.
        </p>
        
        {/* Join Options */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {communityOptions.map((option) => (
            <a
              key={option.label}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${option.color} px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105 transform shadow-lg`}
            >
              {option.icon} {option.label}
            </a>
          ))}
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-800 mb-4 mt-4 px-4">
        <button
          onClick={() => setActiveTab('feed')}
          className={`flex items-center py-3 px-6 ${
            activeTab === 'feed' 
              ? 'border-b-2 border-blue-500 text-blue-400' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <MessageCircle size={20} className="mr-2" />
          Community Feed
        </button>
        <button
          onClick={() => setActiveTab('partners')}
          className={`flex items-center py-3 px-6 ${
            activeTab === 'partners' 
              ? 'border-b-2 border-blue-500 text-blue-400' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Users size={20} className="mr-2" />
          Partner Updates
        </button>
      </div>
      
      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-4 pb-20">
        {/* Post Creation */}
        <div className="bg-gray-800/80 rounded-xl p-4 mb-6 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/lego/1.jpg" 
                alt="Your Avatar" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0yMCA2TDkgMTdMNCAxMiIvPjwvc3ZnPg==';
                }}
              />
            </div>
            <div className="flex-1">
              <textarea 
                className="w-full bg-gray-700/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[100px]"
                placeholder="Share something with the community..."
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
              />
              
              {/* Image preview */}
              {selectedImage && (
                <div className="relative mt-2 rounded-lg overflow-hidden">
                  <img 
                    src={selectedImage} 
                    alt="Selected" 
                    className="max-h-60 rounded-lg"
                  />
                  <button 
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                    onClick={() => setSelectedImage(null)}
                  >
                    ✕
                  </button>
                </div>
              )}
              
              <div className="flex justify-between mt-3">
                <div className="flex space-x-2">
                  <label className="cursor-pointer bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageChange}
                    />
                    <PlusCircle size={20} className="text-blue-400" />
                  </label>
                </div>
                <button
                  onClick={handleSubmitPost}
                  disabled={!newPostText.trim()}
                  className={`bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full flex items-center ${!newPostText.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Send size={16} className="mr-2" /> Post
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Posts Feed */}
        <div className="space-y-6">
          {posts
            .filter(post => activeTab === 'feed' || (activeTab === 'partners' && post.authorType === 'partner'))
            .map(post => (
              <div key={post.id} className="bg-gray-800/80 rounded-xl p-4 shadow-lg transition-transform hover:translate-y-[-2px] border border-gray-700/50">
                {/* Post header */}
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-600">
                    <img 
                      src={post.avatar} 
                      alt={`${post.author}'s avatar`}
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0yMCA2TDkgMTdMNCAxMiIvPjwvc3ZnPg==';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-semibold">{post.author}</h3>
                      {post.authorType === 'partner' && (
                        <span className="ml-2 bg-blue-500 text-xs px-2 py-0.5 rounded-full">Partner</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">
                      {post.timestamp.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        day: 'numeric',
                        month: 'short'
                      })}
                    </p>
                  </div>
                  <button className="p-1 text-gray-400 hover:text-white">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
                
                {/* Post content */}
                <p className="mb-4 text-gray-200">{post.content}</p>
                
                {/* Post image (if any) */}
                {post.image && (
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Post" 
                      className="w-full h-auto max-h-96 object-cover" 
                      loading="lazy"
                    />
                  </div>
                )}
                
                {/* Post actions */}
                <div className="flex items-center pt-2 border-t border-gray-700">
                  <button 
                    className={`flex items-center gap-1 mr-4 p-1 ${post.isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                    onClick={() => toggleLike(post.id)}
                  >
                    <Heart size={18} className={post.isLiked ? 'fill-current' : ''} /> {post.likes}
                  </button>
                  <button className="flex items-center gap-1 mr-4 p-1 text-gray-400 hover:text-blue-500">
                    <MessageCircle size={18} /> {post.comments}
                  </button>
                  <button className="flex items-center gap-1 p-1 text-gray-400 hover:text-green-500">
                    <Share size={18} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Community;