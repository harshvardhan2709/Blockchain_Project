// src/components/Sidebar.tsx - Fixed navbar overlap issue
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  FolderOpen, 
  Settings, 
  LogOut
} from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems: NavigationItem[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: Home },
  { id: 'profile', label: 'Company Profile', path: '/profile', icon: User },
  { id: 'projects', label: 'Projects', path: '/projects', icon: FolderOpen },
  { id: 'settings', label: 'Settings', path: '/settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("🚪 We logged out");
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : -280,
          transition: { type: 'spring', damping: 25, stiffness: 200 }
        }}
        className={`
          fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 z-40 shadow-xl
          lg:static lg:top-0 lg:h-full lg:shadow-none lg:z-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Navigation - Added top padding to account for navbar on desktop */}
          <nav className="flex-1 px-4 py-6 space-y-2 lg:pt-6">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={`relative flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => window.innerWidth < 1024 && onToggle()}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-emerald-600 rounded-r-full"
                      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    />
                  )}
                  
                  <Icon className={`w-5 h-5 transition-colors ${
                    isActive ? 'text-green-600' : 'text-gray-400 group-hover:text-gray-600'
                  }`} />
                  
                  <span className="font-medium">{item.label}</span>
                  
                  {item.badge && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center"
                    >
                      {item.badge}
                    </motion.span>
                  )}
                </NavLink>
              );
            })}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="relative flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group text-gray-600 hover:bg-red-50 hover:text-red-600 w-full text-left"
            >
              <LogOut className="w-5 h-5 transition-colors text-gray-400 group-hover:text-red-500" />
              <span className="font-medium">Logout</span>
            </button>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">CC</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Company Admin</p>
                <p className="text-xs text-gray-500 truncate">Powered by Climekare</p>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
