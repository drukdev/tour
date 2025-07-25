const GeographySection = ({ id }) => {
  const geographicFeatures = [
    {
      title: "Elevation Range",
      value: "100m to 7,570m",
      description: "From subtropical plains to Himalayan peaks"
    },
    {
      title: "Forest Coverage",
      value: "71% of land",
      description: "Constitution mandates 60% forest cover forever"
    },
    {
      title: "Protected Areas",
      value: "51.44% of territory",
      description: "National parks and wildlife sanctuaries"
    }
  ];

  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-2/5">
            <img
              className="h-64 w-full md:h-full object-cover"
              src="/images/bhutan-geography.jpg"
              alt="Himalayan landscape of Bhutan"
            />
          </div>

          <div className="md:w-3/5 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Bhutan's Diverse Geography</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Nestled in the eastern Himalayas, Bhutan's terrain varies dramatically from subtropical plains in the south to sub-alpine Himalayan heights in the north. The country is renowned for its pristine environment and commitment to environmental conservation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {geographicFeatures.map((feature, index) => (
                <div key={index} className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                  <h3 className="text-sm font-medium text-orange-800 mb-1">{feature.title}</h3>
                  <p className="text-2xl font-semibold text-orange-600">{feature.value}</p>
                  <p className="text-sm text-orange-700 mt-2">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Geographic Regions:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full mr-3">1</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Southern Foothills</h4>
                    <p className="text-sm text-gray-600">Subtropical climate with dense forests, home to wildlife like elephants and tigers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full mr-3">2</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Central Valleys</h4>
                    <p className="text-sm text-gray-600">Temperate zones where most towns and agriculture are concentrated</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full mr-3">3</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Northern Highlands</h4>
                    <p className="text-sm text-gray-600">Alpine region with snow-capped peaks exceeding 7,000 meters</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              View Trekking Maps
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
