const CultureSection = ({ id }) => {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/5">
            <img
              className="h-64 w-full md:h-full object-cover"
              src="/images/bhutan-culture.jpg"
              alt="Bhutanese culture"
            />
          </div>
          <div className="md:w-3/5 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Rich Cultural Heritage</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Bhutan's culture is deeply rooted in Tibetan Buddhism. The country has preserved its
              ancient traditions while carefully embracing modernization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                <h3 className="font-semibold text-orange-700 mb-2">Dress Code</h3>
                <p className="text-gray-700">
                  The traditional dress, gho for men and kira for women, is worn in government offices and schools.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                <h3 className="font-semibold text-orange-700 mb-2">Architecture</h3>
                <p className="text-gray-700">
                  Characterized by sloping roofs, intricate woodwork, and vibrant colors seen in dzongs and temples.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-orange-800">Cultural Preservation</h3>
                  <div className="mt-2 text-sm text-orange-700">
                    <p>
                      Bhutan maintains strict cultural policies including mandatory national dress in public places and preservation of traditional arts and crafts.
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

export default CultureSection;
