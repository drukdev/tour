import { useState } from 'react';

const PackageQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What's included in the standard package?",
      answer: "All packages include: 3-star accommodation, all meals, licensed guide, private transportation, entry fees to monuments/museums, and government royalty/taxes."
    },
    {
      question: "Can I customize my itinerary?",
      answer: "Absolutely! While we offer set itineraries, we can fully customize your trip based on your interests, preferred pace, and special requests."
    },
    {
      question: "Are flights to Bhutan included?",
      answer: "International flights are not included, but we can assist with booking flights on Druk Air or Bhutan Airlines if requested."
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

export default PackageQuestions;
