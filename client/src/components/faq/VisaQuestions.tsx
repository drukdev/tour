import { useState } from 'react';

const VisaQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "Do I need a visa to visit Bhutan?",
      answer: "Yes, all foreign nationals (except Indian citizens) require a visa. Your tour operator will process the visa after you've paid for your trip in full."
    },
    {
      question: "How much does the Bhutan visa cost?",
      answer: "The visa fee is $40 USD, which is included in your daily tariff package. There are no additional visa processing fees."
    },
    {
      question: "How long does it take to get a Bhutan visa?",
      answer: "Typically 5-7 working days after full payment is received. During peak seasons, allow up to 10 working days for processing."
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

export default VisaQuestions;
