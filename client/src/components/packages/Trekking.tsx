// src/components/packages/Trekking.jsx
const Trekking = ({ id }) => {
  const treks = [
    {
      name: "Druk Path Trek",
      duration: "6 days",
      difficulty: "Moderate",
      maxAltitude: "4,200m",
      highlight: "Stunning mountain lakes and rhododendron forests"
    },
    {
      name: "Snowman Trek",
      duration: "25 days",
      difficulty: "Challenging",
      maxAltitude: "5,320m",
      highlight: "One of the world's most difficult treks"
    },
    {
      name: "Bumdra Trek",
      duration: "2 days",
      difficulty: "Easy",
      maxAltitude: "3,800m",
      highlight: "Camping above the clouds with monastery views"
    }
  ];

  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Bhutan Trekking Adventures</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Bhutan offers some of the most spectacular trekking routes in the Himalayas, with breathtaking mountain views, pristine forests, and encounters with remote villages. Our treks are designed with responsible tourism practices and supported by experienced guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {treks.map((trek, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gray-100 p-4">
                  <h3 className="text-xl font-bold text-gray-900">{trek.name}</h3>
                  <p className="text-orange-600 font-medium">{trek.duration}</p>
                </div>
                <div className="p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">{trek.difficulty}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Max Altitude:</span>
                    <span className="font-medium">{trek.maxAltitude}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">{trek.highlight}</p>
                  <button className="mt-4 w-full py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-orange-800">Trekking Essentials</h3>
                <div className="mt-2 text-sm text-orange-700">
                  <p>
                    All treks include permits, meals, camping equipment, and guide services. You only need to bring personal gear. We recommend good hiking boots and layered clothing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trekking;
