// src/pages/PackagesPage.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CulturalTours from '../components/packages/CulturalTours';
import Trekking from '../components/packages/Trekking';
import FestivalTours from '../components/packages/FestivalTours';
import CustomTours from '../components/packages/CustomTours';

const PackagesPage = () => {
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bhutan Tour Packages</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience the magic of Bhutan with our carefully curated tours that showcase the country's rich culture, stunning landscapes, and unique traditions.
        </p>
      </div>

      <div className="space-y-16">
        <CulturalTours id="cultural" />
        <Trekking id="trekking" />
        <FestivalTours id="festival" />
        <CustomTours id="custom" />
      </div>
    </div>
  );
};

export default PackagesPage;
