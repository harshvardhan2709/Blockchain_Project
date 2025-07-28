// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-green-700 mb-4">
        Empowering Climate Action
      </h1>
      <p className="text-gray-700 text-lg md:text-xl max-w-2xl mb-6">
        Climatrixs is a carbon credit monitoring & tokenization platform that helps organizations track, verify, and fractionalize CO₂ reductions — on-chain.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-green-600 text-white font-medium rounded-xl shadow hover:bg-green-700 transition"
        >
          Get Started
        </Link>
        <Link
          to="/profile"
          className="px-6 py-3 bg-white text-green-700 border border-green-600 font-medium rounded-xl shadow hover:bg-green-50 transition"
        >
          Company Dashboard
        </Link>
      </div>

      <div className="mt-16 max-w-4xl text-gray-600 text-sm">
        <p>
          Monitor, verify, and tokenize your environmental impact using decentralized technology.
        </p>
        <p>
          Powered by Polygon | ERC-1155 | IPFS | Node.js | React
        </p>
      </div>
    </div>
  );
};

export default Home;
