import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import CompanyProfile from './pages/CompanyProfile.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
