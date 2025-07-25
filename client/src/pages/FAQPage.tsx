import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import GeneralQuestions from '../components/faq/GeneralQuestions';
import VisaQuestions from '../components/faq/VisaQuestions';
import PackageQuestions from '../components/faq/PackageQuestions';
import HealthQuestions from '../components/faq/HealthQuestions';
import HotelQuestions from '../components/faq/HotelQuestions';
import FoodQuestions from '../components/faq/FoodQuestions';

const FAQPage = () => {
  const location = useLocation();
  const [expandedCategory, setExpandedCategory] = useState('general');
  const categoryRefs = useRef({});

  useEffect(() => {
    if (location.hash) {
      const category = location.hash.slice(1);
      setExpandedCategory(category);
      scrollToCategory(category);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToCategory = (categoryId) => {
    setTimeout(() => {
      const element = categoryRefs.current[categoryId];
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const toggleCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
      scrollToCategory(categoryId);
    }
  };

  const categories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: 'M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4',
      component: <GeneralQuestions />
    },
    {
      id: 'visa',
      title: 'Visa & Entry Requirements',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
      component: <VisaQuestions />
    },
    {
      id: 'packages',
      title: 'Tour Packages',
      icon: 'M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9',
      component: <PackageQuestions />
    },
    {
      id: 'health',
      title: 'Health & Safety',
      icon: 'M19.428 15.428a2 2 0 0 0-1.022-.547l-2.387-.477a6 6 0 0 0-3.86.517l-.318.158a6 6 0 0 1-3.86.517L6.05 15.21a2 2 0 0 0-1.806.547M8 4h8l-1 1v5.172a2 2 0 0 0 .586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 0 0 9 10.172V5L8 4z',
      component: <HealthQuestions />
    },
    {
      id: 'hotels',
      title: 'Hotel Accommodations',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6',
      component: <HotelQuestions />
    },
    {
      id: 'food',
      title: 'Food & Dietary Needs',
      icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
      component: <FoodQuestions />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about traveling to Bhutan
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* FAQ Categories */}
          <div className="divide-y divide-gray-200">
            {categories.map((category) => (
              <div
                key={category.id}
                id={category.id}
                ref={el => categoryRefs.current[category.id] = el}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={expandedCategory === category.id}
                >
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-orange-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                    </svg>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {category.title}
                    </h2>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedCategory === category.id && (
                  <div className="px-6 pb-6">
                    {category.component}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
