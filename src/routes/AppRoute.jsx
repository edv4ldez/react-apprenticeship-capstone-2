import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../pages/Home/Home.page';
import Navbar from '../components/Navbar/Navbar.component';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/react-apprenticeship-capstone-2" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />;
      </Routes>
    </Router>
  );
};
