import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CoursesCatalogPage from './pages/CoursesCatalogPage';
import CourseDetailPage from './pages/CourseDetailPage';
import EnrollmentPage from './components/EnrollmentPage';
import AdminPanel from './components/AdminPanel';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesCatalogPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/enroll" element={<EnrollmentPage />} />
      </Routes>
    </Router>
  );
}
