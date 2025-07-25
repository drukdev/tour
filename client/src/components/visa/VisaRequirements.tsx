const VisaRequirements = ({ id }) => {
  const requirements = [
    {
      title: "Passport Validity",
      description: "Must be valid for at least 6 months after your planned departure from Bhutan"
    },
    {
      title: "Tour Payment",
      description: "Full payment must be made before visa processing"
    },
    {
      title: "Travel Insurance",
      description: "Minimum coverage of $50,000 for medical expenses"
    },
    {
      title: "Photographs",
      description: "Two recent passport-sized color photos"
    }
  ];

  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/5 bg-green-800 p-8 flex flex-col justify-center">
            <div className="text-center">
              <svg className="h-16 w-16 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-2xl font-bold text-white mb-4">Visa Requirements</h2>
              <p className="text-green-200">
                All tourists must obtain a visa before arriving in Bhutan
              </p>
            </div>
          </div>

          <div className="md:w-3/5 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Essential Requirements</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {requirements.map((requirement, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 p-1 rounded-full mr-3">
                      <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{requirement.title}</h4>
                      <p className="text-gray-600">{requirement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Important Notice:</h4>
              <p className="text-green-700">
                Visa applications must be submitted through a licensed Bhutanese tour operator at least 30 days before travel. We handle all visa processing for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaRequirements;
