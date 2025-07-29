// src/components/Navbar.tsx - Move notifications and user menu to right corner
import React, { useState } from 'react';
import { Menu, Bell, Search, User, Leaf } from 'lucide-react';

interface NavbarProps {
  onSidebarToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 shadow-md z-50 border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Left Section - Logo and Menu */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onSidebarToggle}
            className="lg:hidden p-2 hover:bg-gray-100 transition-colors rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-green-600">Climekare</h1>
              <p className="text-xs text-gray-500 -mt-1">Carbon Credits Platform</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-green-600">Climekare</h1>
            </div>
          </div>
        </div>



        {/* Right Section - Moved to absolute right corner */}
        <div className="flex items-center space-x-3">

          {/* Notifications - Positioned at right */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu - At far right corner */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden lg:block text-sm font-medium text-gray-700">Admin</span>
            </button>

            {/* User Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">Company Admin</p>
                  <p className="text-xs text-gray-500">admin@company.com</p>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Profile Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Help & Support
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
