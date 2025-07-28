// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // at top


const Sidebar: React.FC = () => {
  const navigate = useNavigate(); 
  return (
    <aside className="w-64 bg-white h-screen shadow-md fixed top-16 left-0 hidden md:block">
      <div className="p-6">
        <h2 className="text-lg font-bold text-green-700 mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4 text-gray-700">
          <Link to="/profile" className="hover:text-green-600">Company Profile</Link>
          <Link to="/projects" className="hover:text-green-600">Projects</Link>
          <button onClick={() => { console.log("🚪 We logged out");
    navigate('/login');
  }}
  className="text-left hover:text-green-600"
>
  Logout
</button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
