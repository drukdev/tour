import { useState } from 'react';

const GeneralQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What is the best time to visit Bhutan?",
      answer: "The best time to visit Bhutan is during spring (March to May) when the flowers are in bloom, and autumn (September to November) when the skies are clear and festivals are abundant."
    },
    {
      question: "Do I need a guide to travel in Bhutan?",
      answer: "Yes, Bhutan's tourism policy requires all foreign visitors to book through a licensed tour operator and be accompanied by a guide at all times during their stay."
    },
    {
      question: "What is the daily tariff for tourists?",
      answer: "The minimum daily package is $200-250 USD per person (depending on season), which includes accommodation, meals, transport, guide services, and entry fees."
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

export default GeneralQuestions;
