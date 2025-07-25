import { useState } from 'react';

const HotelQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What types of accommodations are available?",
      answer: "Options range from 3-star hotels to luxury 5-star properties and traditional Bhutanese lodges. All are government-approved and meet strict standards."
    },
    {
      question: "Can I choose my hotel?",
      answer: "Yes, we offer different hotel categories (standard, superior, luxury) and can accommodate specific property requests when possible."
    },
    {
      question: "Are hotels comfortable during winter?",
      answer: "All hotels have heating, but temperatures can drop significantly. We recommend thermal wear and confirm all selected hotels have adequate winter heating."
    }
  ];

  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="flex justify-between items-center w-full text-left font-medium text-gray-700 hover:text-orange-600 focus:outline-none"
            aria-expanded={activeIndex === index}
          >
            <span className="text-lg">{item.question}</span>
            <span className="text-orange-500 text-xl font-bold">
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>
          {activeIndex === index && (
            <div className="mt-3 pl-2 text-gray-600 border-l-4 border-orange-300 animate-fadeIn">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HotelQuestions;
