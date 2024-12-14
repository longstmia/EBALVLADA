import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ShopsPage from './pages/ShopsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Роут для главной страницы */}
        <Route path="/" element={<HomePage />} />
        {/* Другие роуты */}
        <Route path="/shops" element={<ShopsPage />} />
      </Routes>
    </Router>
  );
}
