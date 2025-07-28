
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import CompanyProfile from './pages/CompanyProfile.tsx';
import Navbar from './components/Navbar';
import Home from './pages/Home.tsx';
import Profile from './pages/CompanyProfile.tsx';
import Login from './pages/LoginPage.tsx';

function App() {
  return (
        <Router>
      <Navbar />
      <div className="pt-20 px-4"> {/* padding to prevent overlap due to fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LoginPage />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
