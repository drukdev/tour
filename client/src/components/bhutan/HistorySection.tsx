const HistorySection = ({ id }) => {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/5 relative">
            <img
              className="h-64 w-full md:h-full object-cover"
              src="/images/bhutan-history.jpg"
              alt="Punakha Dzong historical fortress"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span className="text-white text-sm font-medium">Punakha Dzong - 17th Century</span>
            </div>
          </div>

          <div className="md:w-3/5 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Bhutan's Rich History</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Bhutan's history dates back to the 7th century when Buddhism was first introduced. The country was unified in 1616 by Zhabdrung Ngawang Namgyal, who established the dual system of spiritual and temporal governance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-semibold text-orange-800">1616 AD</h3>
                <p className="text-orange-700 text-sm">
                  Unification under Zhabdrung Ngawang Namgyal
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-semibold text-orange-800">1907</h3>
                <p className="text-orange-700 text-sm">
                  Establishment of Wangchuck dynasty
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <svg className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900">First democratic elections held in 2008</h4>
                  <p className="text-sm text-gray-600">Transitioned from absolute monarchy to constitutional monarchy</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900">Never colonized, maintaining sovereignty</h4>
                  <p className="text-sm text-gray-600">One of few countries never conquered by foreign powers</p>
                </div>
              </div>
            </div>

            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Explore Historical Sites
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
