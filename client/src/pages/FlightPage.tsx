// src/pages/FlightPage.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DrukairInfo from '../components/flight/DrukairInfo';
import FlightSchedule from '../components/flight/FlightSchedule';
import HelicopterServices from '../components/flight/HelicopterServices';

const FlightPage = () => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Flight Information</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Essential flight information for traveling to and within Bhutan, including Drukair details, schedules, and helicopter services.
        </p>
      </div>

      <div className="space-y-16">
        <DrukairInfo id="info" />
        <FlightSchedule id="schedule" />
        <HelicopterServices id="helicopter" />
      </div>
    </div>
  );
};

export default FlightPage;
