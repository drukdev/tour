const VisaApplication = ({ id }) => {
  const steps = [
    {
      step: 1,
      title: "Book Your Tour",
      description: "Confirm your itinerary and make payment"
    },
    {
      step: 2,
      title: "Submit Documents",
      description: "Provide passport copy and other required documents"
    },
    {
      step: 3,
      title: "We Apply",
      description: "We submit your visa application to the Tourism Council"
    },
    {
      step: 4,
      title: "Receive Visa",
      description: "We send you the visa clearance letter (required for boarding)"
    },
    {
      step: 5,
      title: "Get Visa Stamp",
      description: "Final visa stamped in passport upon arrival in Bhutan"
    }
  ];

  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Visa Application Process</h2>
          </div>

          <p className="text-gray-600 mb-8">
            The Bhutan visa process is straightforward when you book with us. Here's how it works:
          </p>

          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>

            <div className="space-y-8">
              {steps.map((stepItem) => (
                <div key={stepItem.step} className="relative flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 font-bold text-xl mb-4 md:mb-0">
                    {stepItem.step}
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-lg font-semibold text-gray-900">{stepItem.title}</h3>
                    <p className="text-gray-600 mt-1">{stepItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Processing Time</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    Standard processing takes 5-7 working days. For urgent applications (3-4 days), an additional fee of $50 applies.
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

export default VisaApplication;
