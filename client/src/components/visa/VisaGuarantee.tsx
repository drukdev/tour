const VisaGuarantee = ({ id }) => {
  const guarantees = [
    {
      icon: (
        <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "100% Approval Rate",
      description: "We've never had a visa rejection for complete applications"
    },
    {
      icon: (
        <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fast Processing",
      description: "Average 3-day turnaround for standard applications"
    },
    {
      icon: (
        <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Full Refund",
      description: "If visa is denied, we refund all payments (minus bank fees)"
    }
  ];

  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-2/5">
            <img
              className="h-64 w-full md:h-full object-cover"
              src="/images/bhutan-visa.jpg"
              alt="Bhutan visa stamp"
            />
          </div>

          <div className="md:w-3/5 p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Visa Guarantee</h2>
            </div>

            <p className="text-gray-600 mb-8">
              When you book your Bhutan trip with us, you benefit from our comprehensive visa support and guarantees:
            </p>

            <div className="space-y-6 mb-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    {guarantee.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{guarantee.title}</h3>
                    <p className="text-gray-600">{guarantee.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Visa Fees:</h4>
              <div className="flex justify-between">
                <span className="text-gray-600">Tourism Visa Fee:</span>
                <span className="font-medium">$40 USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sustainable Development Fee:</span>
                <span className="font-medium">$100 USD/night</span>
              </div>
              <div className="mt-2 text-sm text-green-700">
                <p>All visa and SDF fees are included in your tour package price.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaGuarantee;
