import React from 'react';

const communityOptions = [
  { label: 'Join as Partner', url: 'https://discord.com', color: 'bg-indigo-600 hover:bg-indigo-500' },
  { label: 'Join as Responder', url: 'https://t.me', color: 'bg-blue-600 hover:bg-blue-500' },
  { label: 'Follow on Twitter', url: 'https://twitter.com', color: 'bg-sky-500 hover:bg-sky-400' },
];

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 sm:p-6 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 animate-pulse">Join Our Community</h1>
      <p className="text-center text-gray-300 mb-6 max-w-xl">
        Be part of an innovative ecosystem where creators, investors, and tech enthusiasts come together. 
        Connect, collaborate, and make an impact with like-minded people.
      </p>

      {/* Story Section */}
      <div className="bg-gray-800/70 p-6 rounded-2xl shadow-lg mb-8 max-w-3xl text-center animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-300 text-sm sm:text-base">
          We are building a collaborative platform where ideas transform into real projects. 
          Join us as a partner to showcase your solutions or as a responder to participate in exciting initiatives.
        </p>
      </div>

      {/* Community Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        {communityOptions.map((option) => (
          <a
            key={option.label}
            href={option.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${option.color} px-6 py-3 rounded-full text-white font-semibold transition-colors w-full text-center hover:scale-105 transform`}
          >
            {option.label}
          </a>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Community;
