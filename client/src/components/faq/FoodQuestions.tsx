import { useState } from 'react';

const FoodQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What kind of food is served?",
      answer: "Meals feature Bhutanese cuisine (red rice, buckwheat dishes, ema datshi) and continental options. Most restaurants cater to tourist preferences."
    },
    {
      question: "Can dietary restrictions be accommodated?",
      answer: "Yes, we can arrange vegetarian, vegan, gluten-free, and other special diets. Please inform us during booking for proper arrangements."
    },
    {
      question: "Is the food very spicy?",
      answer: "Traditional Bhutanese food can be spicy, but most tourist restaurants moderate the heat. Always specify your spice preference when ordering."
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

export default FoodQuestions;
