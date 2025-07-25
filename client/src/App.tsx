import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BookNowPage from './pages/BookNowPage';
import BhutanPage from './pages/BhutanPage';
import PackagesPage from './pages/PackagesPage';
import FlightPage from './pages/FlightPage';
import VisaPage from './pages/VisaPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import AccommodationPage from './pages/AccommodationPage';  // New import

const LayoutWrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main routes with layout */}
        <Route element={<LayoutWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="book-now" element={<BookNowPage />} />
          <Route path="bhutan" element={<BhutanPage />} />
          <Route path="accommodation" element={<AccommodationPage />} />  {/* New route */}
          <Route path="packages" element={<PackagesPage />} />
          <Route path="flight" element={<FlightPage />} />
          <Route path="visa" element={<VisaPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Example of route without layout */}
        {/* <Route path="admin" element={<AdminPanel />} /> */}

        {/* 404 fallback */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
