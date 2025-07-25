// src/components/packages/FestivalTours.jsx
const FestivalTours = ({ id }) => {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-2/5">
            <img
              className="h-64 w-full md:h-full object-cover"
              src="/images/festival-tour.jpg"
              alt="Bhutanese festival"
            />
          </div>

          <div className="md:w-3/5 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Festival Tours</h2>
            </div>

            <p className="text-gray-600 mb-4">
              Experience Bhutan's vibrant religious festivals (Tshechus) featuring colorful mask dances, traditional music, and sacred rituals. Our festival tours are timed to coincide with major events and include expert commentary on the significance of each performance.
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Featured Festivals:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full mr-3">1</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Paro Tshechu (March/April)</h4>
                    <p className="text-sm text-gray-600">Witness the unfurling of the sacred Thangka at Paro Dzong</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full mr-3">2</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Thimphu Tshechu (September)</h4>
                    <p className="text-sm text-gray-600">The largest festival with elaborate mask dances</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full mr-3">3</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Punakha Drubchen (February)</h4>
                    <p className="text-sm text-gray-600">Historical reenactment of 17th century battles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Booking Note</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Festival dates follow the lunar calendar and vary each year. Book at least 6 months in advance as accommodations fill quickly during major festivals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalTours;
