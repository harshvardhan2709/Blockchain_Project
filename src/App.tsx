// src/App.tsx - Fixed layout to prevent navbar overlap
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import CompanyProfile from './pages/CompanyProfile';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Auto-open sidebar on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  if (isLoginPage) {
    return <LoginPage />;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Navbar - Fixed at top */}
      <Navbar onSidebarToggle={toggleSidebar} />
      
      {/* Main Content Area - Below navbar */}
      <div className="flex flex-1 pt-16 overflow-hidden">
        {/* Sidebar Container */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 flex-shrink-0 lg:w-64`}>
          <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-3 lg:p-4 max-w-7xl mx-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<CompanyProfile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Navigate replace to="/dashboard" />} />
              <Route path="*" element={<Navigate replace to="/dashboard" />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
