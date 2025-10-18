import React, { useState } from 'react';
import { Building2, ExternalLink, Globe, Send, Award, Search, Filter, CheckCircle2, X } from 'lucide-react';

interface Partner {
  name: string;
  url: string;
  logo: string;
  description: string;
  category?: string;
}

const partners: Partner[] = [
  { 
    name: 'Natural Milk World', 
    url: 'https://www.naturalmilkproducts.com', 
    logo: '3.png', 
    description: 'Leading natural dairy products with sustainable farming practices and ethical sourcing.',
    category: 'Food & Agriculture'
  },
  { 
    name: 'Xrpocean', 
    url: 'https://www.xrpocean.com', 
    logo: '4.png', 
    description: 'Innovative ocean-based technologies for a better tomorrow, focusing on sustainability.',
    category: 'Technology'
  },
  { 
    name: 'Trivatoken', 
    url: 'https://trivatoken.ai', 
    logo: '1.png', 
    description: 'Next-gen AI-powered blockchain solutions for secure transactions and digital assets.',
    category: 'Blockchain'
  },
  { 
    name: 'InfluenceX', 
    url: 'https://zecronics.vercel.app/investment', 
    logo: '2.png', 
    description: 'Global influencer platform connecting opportunities worldwide through digital engagement.',
    category: 'Marketing'
  },
];

const Partner: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    website: '',
    category: '',
    description: '',
  });
  
  // Extract unique categories
  const categories = Array.from(new Set(partners.map(partner => partner.category).filter(Boolean) as string[]));
  
  // Filter partners based on search and category
  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !activeCategory || partner.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Toggle modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Submitted form data:', formData);
    // Here you would typically send the data to an API
    alert('Thank you for your application! We will review it and get back to you soon.');
    setShowModal(false);
    // Reset form
    setFormData({
      companyName: '',
      email: '',
      website: '',
      category: '',
      description: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 sm:p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 rounded-b-3xl shadow-xl mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
          Partner Network
        </h1>
        <p className="text-center text-gray-300 mb-6 max-w-2xl mx-auto">
          Collaborate with industry leaders in our ecosystem. Explore partnership opportunities and join our global network of innovators.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <a
            href="#explore-deals"
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105 transform shadow-lg"
          >
            <Award size={20} className="mr-2" /> Explore Partner Deals
          </a>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-gray-800/50 rounded-2xl p-4 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700/50 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex-1 flex items-center overflow-x-auto md:justify-end gap-2 py-1">
              <Filter size={18} className="text-gray-400 mr-1 flex-shrink-0" />
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
                  activeCategory === null 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All
              </button>
              
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
                    activeCategory === category 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Partners Grid */}
      <div className="max-w-6xl mx-auto mb-12">
        {filteredPartners.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPartners.map((partner) => (
              <div 
                key={partner.name} 
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] transform animate-fadeIn border border-gray-700/50 group"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJ1aWxkaW5nLTIiPjxwYXRoIGQ9Ik02IDIyVjZhNCA0IDAgMCAxIDQtNGg0YTQgNCAwIDAgMSA0IDR2MTZaIi8+PHBhdGggZD0iTTYgMTJINFY4YTIgMiAwIDAgMSAyLTJoMCIvPjxwYXRoIGQ9Ik0xOCAxMmgydjRhMiAyIDAgMCAxLTIgMmgwIi8+PHBhdGggZD0iTTEwIDhhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTIiLz48cGF0aCBkPSJNMTAgMTRhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwLTJoLTIiLz48cGF0aCBkPSJNNiAxNnYyIi8+PHBhdGggZD0iTTE4IDE2djIiLz48L3N2Zz4=';
                      }}
                    />
                  </div>
                  
                  {partner.category && (
                    <span className="absolute top-3 right-3 bg-blue-600/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {partner.category}
                    </span>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">{partner.name}</h2>
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  
                  <div className="flex space-x-2">
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center"
                    >
                      <ExternalLink size={16} className="mr-2" /> Visit
                    </a>
                    
                    <a
                      href={`/community?partner=${encodeURIComponent(partner.name)}`}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center"
                    >
                      <Send size={16} className="mr-2" /> Connect
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-800/30 rounded-2xl">
            <p className="text-gray-400 mb-2">No partners match your search criteria</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveCategory(null);
              }} 
              className="text-blue-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      {/* Become a Partner Button (moved to bottom of the page) */}
      <div className="max-w-4xl mx-auto mb-16 flex justify-center">
        <button 
          onClick={toggleModal}
          className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105 transform shadow-lg"
        >
          <Building2 size={20} className="mr-2" /> Become a Partner
        </button>
      </div>
      
      {/* Partner Application Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-r from-blue-900/90 to-indigo-900/90 rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="flex justify-between items-center p-6 border-b border-blue-500/30">
              <div className="flex items-center">
                <Building2 size={24} className="text-blue-400 mr-3" />
                <h2 className="text-xl font-bold text-white">Partner Application</h2>
              </div>
              <button 
                onClick={toggleModal}
                className="bg-gray-800/50 hover:bg-gray-700 rounded-full p-2 transition-colors"
              >
                <X size={20} className="text-gray-300" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="mb-6 text-gray-300">
                Join our growing ecosystem of partners and connect with thousands of users. Showcase your products, services and offers to a highly engaged community.
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-1 text-sm">Company Name</label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1 text-sm">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="contact@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1 text-sm">Website</label>
                  <div className="flex">
                    <div className="bg-gray-800 rounded-l-xl flex items-center px-3 border-r border-gray-600">
                      <Globe size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="url" 
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="flex-1 bg-gray-700/50 rounded-r-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://yourcompany.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1 text-sm">Category</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a category</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Food & Agriculture">Food & Agriculture</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1 text-sm">Tell us about your company</label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[100px]"
                    placeholder="Describe your company, products or services"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1 text-sm">Logo</label>
                  <div className="border-2 border-dashed border-blue-500/30 rounded-xl p-6 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <input 
                        type="file" 
                        className="hidden" 
                        id="company-logo" 
                        accept="image/*"
                      />
                      <label 
                        htmlFor="company-logo" 
                        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-white font-medium transition-colors duration-300 flex items-center justify-center cursor-pointer"
                      >
                        Choose File
                      </label>
                    </div>
                    <p className="text-gray-400 text-sm">Recommended size: 400x400px, max 2MB</p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send size={18} className="mr-2" /> Submit Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Partner;