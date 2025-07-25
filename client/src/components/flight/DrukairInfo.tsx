const DrukairInfo = ({ id }) => {
  const features = [
    {
      title: "Fleet",
      description: "Modern Airbus A319 aircraft with 114 seats (8 business class, 106 economy)"
    },
    {
      title: "Baggage Allowance",
      description: "30kg checked + 7kg hand luggage (economy), 40kg + 14kg (business)"
    },
    {
      title: "In-flight Service",
      description: "Complimentary meals and beverages featuring Bhutanese cuisine"
    },
    {
      title: "Check-in",
      description: "Online check-in available 48 hours before departure"
    }
  ];

  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="md:flex">
          <div className="md:w-2/5 bg-orange-600 p-8 flex flex-col justify-center">
            <div className="text-center">
              <img
                src="/images/drukair-logo-white.png"
                alt="Drukair Royal Bhutan Airlines"
                className="h-16 mx-auto mb-6"
              />
              <h2 className="text-2xl font-bold text-white mb-4">Drukair Royal Bhutan Airlines</h2>
              <p className="text-orange-100 mb-6">
                The national flag carrier of Bhutan, connecting the kingdom to the world.
              </p>
              <a
                href="https://www.drukair.com.bt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-white text-orange-600 rounded-md font-medium hover:bg-orange-50 transition"
              >
                Official Website
              </a>
            </div>
          </div>

          <div className="md:w-3/5 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Essential Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors bg-gray-50">
                  <h4 className="font-semibold text-orange-700 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-2">Important Notice:</h4>
              <p className="text-orange-700">
                All international visitors must book through a licensed Bhutanese tour operator. Flight tickets are issued only after tour payment is confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrukairInfo;
