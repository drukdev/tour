// pages/BhutanPage.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CultureSection from '../components/bhutan/CultureSection';
import HistorySection from '../components/bhutan/HistorySection';
import FestivalsSection from '../components/bhutan/FestivalsSection';
import GeographySection from '../components/bhutan/GeographySection';

const BhutanPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Discover Bhutan
      </h1>

      <div className="space-y-20">
        <CultureSection id="culture" />
        <HistorySection id="history" />
        <FestivalsSection id="festivals" />
        <GeographySection id="geography" />
      </div>
    </div>
  );
};

export default BhutanPage;
