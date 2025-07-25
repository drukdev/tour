const HelicopterServices = ({ id }) => {
  const services = [
    {
      name: "Scenic Flights",
      description: "Aerial tours of Himalayan peaks, valleys, and monasteries",
      duration: "30-90 min"
    },
    {
      name: "Medical Evacuation",
      description: "Emergency transport to hospitals in Bhutan or neighboring countries",
      duration: "As needed"
    },
    {
      name: "VIP Charter",
      description: "Private transfers for special groups or officials",
      duration: "Custom"
    },
    {
      name: "Remote Access",
      description: "Transport to hard-to-reach trekking start points",
      duration: "Varies"
    }
  ];

  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="md:flex">
          <div className="md:w-2/5">
            <img
              className="h-64 w-full md:h-full object-cover"
              src="/images/bhutan-helicopter.jpg"
              alt="Helicopter in Bhutan"
            />
          </div>

          <div className="md:w-3/5 p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Helicopter Services</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Bhutan offers limited helicopter services for special purposes. These services are operated by the Royal Bhutan Helicopter Services and require special permissions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {services.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-50">
                  <h3 className="font-bold text-orange-700 mb-1">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-2">Booking Information:</h4>
              <ul className="list-disc list-inside text-orange-700 space-y-1">
                <li>Available only through licensed tour operators</li>
                <li>Subject to weather and government approval</li>
                <li>Medical evacuation requires doctor's certification</li>
                <li>Minimum 72 hours notice for scenic flights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelicopterServices;
