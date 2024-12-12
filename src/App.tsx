import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Роут для главной страницы */}
        <Route path="/" element={<HomePage />} />
        {/* Другие роуты */}
      </Routes>
    </Router>
  );
}
