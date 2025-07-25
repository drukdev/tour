// src/components/packages/CustomTours.jsx
const CustomTours = ({ id }) => {
  const customOptions = [
    {
      name: "Photography Tour",
      icon: "📷",
      description: "Tailored for photographers with golden hour access to monuments"
    },
    {
      name: "Wellness Retreat",
      icon: "🧘",
      description: "Combine meditation, hot stone baths, and herbal therapies"
    },
    {
      name: "Birdwatching",
      icon: "🦜",
      description: "Spot rare Himalayan species with expert guides"
    },
    {
      name: "Family Adventure",
      icon: "👨‍👩‍👧‍👦",
      description: "Kid-friendly activities and accommodations"
    }
  ];

  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Customized Bhutan Experiences</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Create your perfect Bhutan itinerary with our customized tours. Whether you're interested in specialized activities, have specific interests, or need a unique travel pace, we'll design a journey that matches your preferences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {customOptions.map((option, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                <div className="text-3xl mb-2">{option.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">{option.name}</h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">How It Works:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-3">1</span>
                <div>
                  <h4 className="font-medium text-gray-900">Share Your Interests</h4>
                  <p className="text-gray-600 text-sm">Tell us your travel style, must-see places, and special requests</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-3">2</span>
                <div>
                  <h4 className="font-medium text-gray-900">Receive Draft Itinerary</h4>
                  <p className="text-gray-600 text-sm">Our experts create a personalized route with activity suggestions</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-3">3</span>
                <div>
                  <h4 className="font-medium text-gray-900">Finalize Details</h4>
                  <p className="text-gray-600 text-sm">Refine the itinerary until it's perfect for your group</p>
                </div>
              </li>
            </ol>

            <button className="mt-6 w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium">
              Request Custom Itinerary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomTours;
