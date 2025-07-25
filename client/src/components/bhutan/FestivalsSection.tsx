const FestivalsSection = ({ id }) => {
  const festivals = [
    {
      name: "Paro Tshechu",
      month: "March/April",
      highlight: "Unfolding of the Thangka",
      image: "/images/paro-tshechu.jpg"
    },
    {
      name: "Thimphu Tshechu",
      month: "September/October",
      highlight: "Masked Cham Dances",
      image: "/images/thimphu-tshechu.jpg"
    },
    {
      name: "Punakha Drubchen",
      month: "February",
      highlight: "Reenactment of 17th Century Battle",
      image: "/images/punakha-drubchen.jpg"
    }
  ];

  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Vibrant Festivals of Bhutan</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Bhutanese festivals, known as Tshechus, are colorful religious events where communities gather to witness sacred mask dances, receive blessings, and celebrate their spiritual heritage. These festivals commemorate Guru Rinpoche's deeds and are held according to the lunar calendar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {festivals.map((festival, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  className="h-48 w-full object-cover"
                  src={festival.image}
                  alt={festival.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{festival.name}</h3>
                  <div className="flex items-center text-orange-300 text-sm mb-2">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {festival.month}
                  </div>
                  <p className="text-orange-100 text-sm">{festival.highlight}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-orange-800">Festival Etiquette</h3>
                <div className="mt-2 text-sm text-orange-700">
                  <p>
                    Dress modestly, remove shoes before entering temples, and avoid pointing at performers. Photography may be restricted during certain rituals.
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

export default FestivalsSection;
