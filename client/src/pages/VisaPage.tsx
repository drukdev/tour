// src/pages/VisaPage.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VisaRequirements from '../components/visa/VisaRequirements';
import VisaApplication from '../components/visa/VisaApplication';
import VisaGuarantee from '../components/visa/VisaGuarantee';

const VisaPage = () => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bhutan Visa Information</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about obtaining a visa for Bhutan, including requirements, application process, and our guarantee.
        </p>
      </div>

      <div className="space-y-16">
        <VisaRequirements id="requirements" />
        <VisaApplication id="application" />
        <VisaGuarantee id="guarantee" />
      </div>
    </div>
  );
};

export default VisaPage;
