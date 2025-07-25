import { useState } from 'react';

const HealthQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "Do I need any vaccinations for Bhutan?",
      answer: "No specific vaccinations are required, but Hepatitis A, Typhoid, and routine vaccines are recommended. Consult your doctor 4-6 weeks before travel."
    },
    {
      question: "Is altitude sickness a concern in Bhutan?",
      answer: "Some areas (like Paro and Thimphu) are at moderate altitude (2,200-2,800m). Acclimatize gradually, stay hydrated, and inform your guide of any symptoms."
    },
    {
      question: "What medical facilities are available?",
      answer: "Thimphu has good hospitals, but facilities in rural areas are basic. Travel insurance with medical evacuation coverage is mandatory for all visitors."
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

export default HealthQuestions;
