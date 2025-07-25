// src/components/packages/CulturalTours.jsx
const CulturalTours = ({ id }) => {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              className="h-64 w-full md:h-full object-cover"
              src="/images/cultural-tour.jpg"
              alt="Cultural tour in Bhutan"
            />
          </div>
          <div className="md:w-2/3 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v3.5a2.5 2.5 0 005 0V7m0 5.5a2.5 2.5 0 01-5 0V21m9-16v3.5a2.5 2.5 0 01-5 0V5m0 5.5a2.5 2.5 0 01-5 0V21" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cultural Immersion Tour</h2>
            </div>

            <p className="text-gray-600 mb-4">
              Our 7-day cultural tour takes you through Bhutan's most sacred monasteries, traditional villages, and historic dzongs. Experience authentic Bhutanese hospitality with farmhouse stays and cultural performances.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Highlights:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Visit Tiger's Nest Monastery</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Traditional hot stone bath experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Archery demonstration and lesson</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Details:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">Easy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Season:</span>
                    <span className="font-medium">March-June, Sept-Nov</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium">
              View Full Itinerary & Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalTours;
