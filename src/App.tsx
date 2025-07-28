import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CompanyProfile from './pages/CompanyProfile';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';
import Profile from './pages/CompanyProfile';
import Projects from './pages/Projects'; 



const AppContent = () => {
  const location = useLocation();
  const hideForRoutes = ['/login'];
  const hideUI = hideForRoutes.includes(location.pathname);

  return (
    <>
      {!hideUI && <Navbar />}
      <div className={`flex ${!hideUI ? 'pt-20' : ''}`}>
        {!hideUI && <Sidebar />}
        <div className={`${!hideUI ? 'ml-64 p-6 w-full' : 'w-full'}`}>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="*" element={<LoginPage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
