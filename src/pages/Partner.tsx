import React from 'react';

interface Partner {
  name: string;
  url: string;
  logo: string; // now mandatory for image
  description: string;
}

const partners: Partner[] = [
  { name: 'Natural Milk World', url: 'https://www.naturalmilkproducts.com', logo: '3.png', description: 'Leading natural dairy products with sustainable farming.' },
  { name: 'Xrpocean', url: 'https://www.xrpocean.com', logo: '4.png', description: 'Innovative ocean-based technologies for a better tomorrow.' },
  { name: 'Trivatoken', url: 'https://trivatoken.ai', logo: '1.png', description: 'Next-gen AI-powered blockchain solutions for secure transactions.' },
  { name: 'Zycronex', url: 'https://zecronics.vercel.app/investment', logo: '2.png', description: 'Global investment platform connecting opportunities worldwide.' },
];

const Partner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 animate-pulse">Our Partners</h1>
      <p className="text-center text-gray-300 mb-8 max-w-xl mx-auto">
        We collaborate with industry leaders to bring innovation, sustainability, and excellence to our projects. Explore our partners below!
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner) => (
          <div key={partner.name} className="bg-gray-800/70 rounded-2xl p-4 flex flex-col items-center justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform animate-fadeIn">
            <img src={partner.logo} alt={partner.name} className="w-full h-40 object-cover rounded-xl mb-4 shadow-md" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center">{partner.name}</h2>
            <p className="text-gray-300 text-sm text-center mb-4">{partner.description}</p>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 w-full text-center"
            >
              Join Now
            </a>
          </div>
        ))}
      </div>

      {/* Custom animation */}
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

export default Partner;
