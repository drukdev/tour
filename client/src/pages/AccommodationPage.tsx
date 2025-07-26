import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Mountain, Star, Heart, MapPin, Users, Wifi, Car, Coffee, Utensils, Shield,
  Camera, Phone, Mail, Calendar, ChevronLeft, ChevronRight, ExternalLink,
  Bed, Bath, TreePine, Sun, Moon, Award, CheckCircle, ArrowRight, Home
} from 'lucide-react';

// Hotels & Resorts Component
const HotelsResortsDetail = ({ onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hotels = [
    {
      name: "Uma Paro by COMO",
      location: "Paro Valley",
      rating: 4.9,
      price: "$850",
      images: ["Mountain valley view", "Luxury suite", "Spa treatment", "Fine dining"],
      features: ["Himalayan Views", "COMO Shambhala Spa", "Private Balconies", "Butler Service"],
      description: "Perched on a forested ridge with panoramic views of Paro valley and the Himalayas beyond, Uma Paro offers 29 rooms including nine luxurious villas.",
      amenities: ["Airport Transfer", "Fine Dining", "Spa & Wellness", "Yoga Classes", "Cultural Tours", "Private Dining"]
    },
    {
      name: "Amankora Thimphu",
      location: "Thimphu",
      rating: 5.0,
      price: "$1,200",
      images: ["Traditional architecture", "Suite interior", "Mountain vista", "Cultural experience"],
      features: ["Traditional Design", "Private Suites", "Cultural Immersion", "Exclusive Access"],
      description: "Set in a blue pine forest on the upper reaches of the Motithang area, Amankora Thimphu provides a peaceful sanctuary.",
      amenities: ["Personal Butler", "Traditional Hot Stone Bath", "Meditation Sessions", "Private Tours", "Gourmet Cuisine", "Library"]
    },
    {
      name: "Taj Tashi",
      location: "Thimphu",
      rating: 4.8,
      price: "$450",
      images: ["Hotel exterior", "Deluxe room", "Restaurant", "City view"],
      features: ["City Center", "Modern Luxury", "Multiple Restaurants", "Business Center"],
      description: "A blend of contemporary luxury and traditional Bhutanese architecture in the heart of Thimphu.",
      amenities: ["Business Center", "Multiple Restaurants", "Fitness Center", "Conference Rooms", "City Tours", "Shopping Assistance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Accommodations
          </button>
          <h1 className="text-4xl font-bold text-gray-800">Luxury Hotels & Resorts</h1>
        </div>

        {/* Hotels Grid */}
        <div className="space-y-8">
          {hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Gallery */}
                <div className="relative h-80 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-lg font-semibold">
                    {hotel.images[currentImageIndex]} View
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
                    {hotel.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setCurrentImageIndex(imgIndex)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          imgIndex === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{hotel.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm">({hotel.rating}/5.0)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">{hotel.price}</div>
                      <div className="text-sm text-gray-500">per night</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{hotel.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {hotel.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Premium Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {hotel.amenities.map((amenity, amenityIndex) => (
                        <div key={amenityIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className="w-3 h-3 text-amber-400" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      Book Now
                    </button>
                    <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Traditional Farmstays Component
const TraditionalFarmstaysDetail = ({ onBack }) => {
  const farmstays = [
    {
      name: "Dewachen Farmstay",
      location: "Punakha Valley",
      rating: 4.9,
      price: "$120",
      host: "Pema & Tenzin Family",
      experience: "3 generations of farming",
      activities: ["Rice Farming", "Traditional Cooking", "Village Walk", "Archery", "Meditation", "Yak Herding"],
      meals: ["Organic Farm Vegetables", "Red Rice", "Yak Cheese", "Butter Tea", "Traditional Bhutanese Cuisine"],
      description: "Experience authentic Bhutanese rural life with the warm Dewachen family. Participate in daily farm activities and learn traditional ways of life that have been preserved for centuries."
    },
    {
      name: "Rinchenling Heritage Farm",
      location: "Thimphu Outskirts",
      rating: 4.8,
      price: "$95",
      host: "Karma & Dolma Family",
      experience: "Traditional weaving & farming",
      activities: ["Traditional Weaving", "Organic Farming", "Prayer Flag Making", "Local Market Visit", "Cultural Exchange", "Himalayan Hiking"],
      meals: ["Farm-to-Table Dining", "Homemade Cheese", "Traditional Breads", "Herbal Teas", "Seasonal Fruits"],
      description: "Stay with a family renowned for their traditional weaving skills. Learn about Bhutanese textiles while enjoying the peaceful countryside lifestyle."
    },
    {
      name: "Peaceful Valley Farmstay",
      location: "Paro Countryside",
      rating: 5.0,
      price: "$140",
      host: "Sonam & Choden Family",
      experience: "Apple farming & hospitality",
      activities: ["Apple Orchard Tours", "Traditional Dancing", "Monastery Visits", "Horseback Riding", "Cultural Storytelling", "Star Gazing"],
      meals: ["Apple-based Dishes", "Organic Vegetables", "Traditional Stews", "Homemade Dairy", "Local Delicacies"],
      description: "Nestled in apple orchards with stunning mountain views, this farmstay offers the perfect blend of agriculture, culture, and natural beauty."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Accommodations
          </button>
          <h1 className="text-4xl font-bold text-gray-800">Traditional Farmstays</h1>
        </div>

        {/* Farmstays Grid */}
        <div className="space-y-8">
          {farmstays.map((farmstay, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Image */}
                <div className="relative h-80 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white text-lg font-semibold">
                    Traditional {farmstay.location} View
                  </div>
                  <Heart className="absolute top-4 right-4 text-red-400 w-8 h-8" />
                </div>

                {/* Main Details */}
                <div className="p-6 lg:col-span-2">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{farmstay.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Home className="w-4 h-4" />
                        <span>Hosted by {farmstay.host}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{farmstay.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm">({farmstay.rating}/5.0)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">{farmstay.price}</div>
                      <div className="text-sm text-gray-500">per night (full board)</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{farmstay.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Activities */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Mountain className="w-5 h-5 text-green-600" />
                        Farm Activities
                      </h4>
                      <div className="space-y-2">
                        {farmstay.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span>{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meals */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-green-600" />
                        Farm-to-Table Meals
                      </h4>
                      <div className="space-y-2">
                        {farmstay.meals.map((meal, mealIndex) => (
                          <div key={mealIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <Coffee className="w-3 h-3 text-amber-500" />
                            <span>{meal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 text-green-800">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold">Family Expertise: {farmstay.experience}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      Book Farmstay Experience
                    </button>
                    <button className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300">
                      Meet the Family
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Luxury Lodges Component
const LuxuryLodgesDetail = ({ onBack }) => {
  const lodges = [
    {
      name: "Gangtey Lodge",
      location: "Phobjikha Valley",
      rating: 5.0,
      price: "$2,400",
      exclusivity: "Only 12 Suites",
      features: ["Black-necked Crane Sanctuary", "Private Helicopter Access", "Michelin-starred Chef", "Personal Butler"],
      experiences: ["Crane Valley Walks", "Private Monastery Tours", "Helicopter Sightseeing", "Wellness Treatments", "Astro-Tourism", "Photography Expeditions"],
      luxury: ["Private Spa Suite", "Heated Indoor Pool", "Wine Cellar", "Library & Lounge", "24/7 Butler Service", "Private Dining"],
      description: "An ultra-exclusive mountain retreat overlooking the pristine Phobjikha Valley, home to the rare black-necked cranes. This lodge redefines luxury in the Himalayas."
    },
    {
      name: "COMO Uma Punakha",
      location: "Punakha Valley",
      rating: 4.9,
      price: "$1,800",
      exclusivity: "Riverside Villas",
      features: ["Riverside Location", "Private Villa Terraces", "COMO Shambhala Spa", "Adventure Center"],
      experiences: ["White Water Rafting", "Temple Hikes", "Traditional Archery", "Spa Treatments", "Cultural Immersion", "Valley Cycling"],
      luxury: ["Villa Suites", "Infinity Pool", "Spa Pavilions", "Fine Dining Restaurant", "Adventure Concierge", "Private Terraces"],
      description: "Nestled beside the Mo Chhu river with dramatic valley views, this lodge offers adventure and relaxation in equal measure."
    },
    {
      name: "Zhiwa Ling Heritage",
      location: "Paro",
      rating: 4.8,
      price: "$1,400",
      exclusivity: "Traditional Palace Design",
      features: ["UNESCO Heritage Site", "Traditional Architecture", "Royal Treatment", "Cultural Center"],
      experiences: ["Tiger's Nest Monastery Trek", "Traditional Arts Classes", "Palace Tours", "Meditation Sessions", "Cultural Performances", "Heritage Walks"],
      luxury: ["Palace Suites", "Traditional Spa", "Royal Dining Hall", "Cultural Library", "Concierge Service", "Traditional Gardens"],
      description: "A heritage palace turned luxury lodge, offering guests the chance to live like Bhutanese royalty while exploring ancient traditions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Accommodations
          </button>
          <h1 className="text-4xl font-bold text-gray-800">Luxury Mountain Lodges</h1>
        </div>

        {/* Lodges Grid */}
        <div className="space-y-8">
          {lodges.map((lodge, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white text-lg font-semibold">
                    Exclusive {lodge.location} Lodge
                  </div>
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-amber-600 text-sm font-semibold">
                    {lodge.exclusivity}
                  </div>
                  <Mountain className="absolute top-4 right-4 text-white w-8 h-8" />
                </div>

                {/* Lodge Details */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{lodge.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{lodge.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm">({lodge.rating}/5.0)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-amber-600">{lodge.price}</div>
                      <div className="text-sm text-gray-500">per night (all-inclusive)</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{lodge.description}</p>

                  {/* Unique Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-600" />
                      Exclusive Features
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {lodge.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Luxury Amenities & Experiences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Luxury Amenities</h4>
                      <div className="space-y-2">
                        {lodge.luxury.slice(0, 4).map((amenity, amenityIndex) => (
                          <div key={amenityIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <Shield className="w-3 h-3 text-amber-500" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Exclusive Experiences</h4>
                      <div className="space-y-2">
                        {lodge.experiences.slice(0, 4).map((experience, expIndex) => (
                          <div key={expIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <Mountain className="w-3 h-3 text-amber-500" />
                            <span>{experience}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      Reserve Exclusive Stay
                    </button>
                    <button className="px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-300">
                      Virtual Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Budget Options Component
const BudgetOptionsDetail = ({ onBack }) => {
  const budgetOptions = [
    {
      name: "Thimphu Backpackers Hostel",
      location: "Central Thimphu",
      rating: 4.6,
      price: "$25",
      type: "Hostel",
      rooms: ["Dormitory Beds", "Private Rooms", "Female-only Dorms"],
      amenities: ["Free WiFi", "Shared Kitchen", "Laundry Service", "Common Area", "Travel Desk", "Luggage Storage"],
      included: ["Continental Breakfast", "City Map", "Travel Tips", "Local Recommendations"],
      description: "A vibrant backpacker hub in the heart of Thimphu, perfect for budget travelers wanting to explore Bhutan affordably while meeting fellow adventurers."
    },
    {
      name: "Paro Budget Inn",
      location: "Paro Town",
      rating: 4.4,
      price: "$45",
      type: "Guesthouse",
      rooms: ["Twin Rooms", "Double Rooms", "Triple Sharing"],
      amenities: ["Private Bathrooms", "Hot Water", "Room Service", "Garden Area", "Airport Pickup", "Tour Booking"],
      included: ["Local Breakfast", "Airport Transfer", "Wi-Fi", "Parking"],
      description: "Clean, comfortable accommodation near Paro Airport and main sights. Family-run guesthouse offering genuine Bhutanese hospitality at affordable prices."
    },
    {
      name: "Punakha Valley Lodge",
      location: "Punakha",
      rating: 4.7,
      price: "$65",
      type: "Budget Lodge",
      rooms: ["Standard Rooms", "Deluxe Rooms", "Family Rooms"],
      amenities: ["Restaurant", "Garden Views", "Hot Showers", "Heating", "Parking", "Tour Services"],
      included: ["Bhutanese Breakfast", "Valley Views", "Cultural Shows", "Local Guides"],
      description: "Affordable mountain lodge with stunning valley views. Offers comfort and authentic experiences without breaking the budget."
    },
    {
      name: "Meditation Retreat Center",
      location: "Thimphu Outskirts",
      rating: 4.8,
      price: "$35",
      type: "Retreat Center",
      rooms: ["Simple Rooms", "Shared Accommodations", "Meditation Cells"],
      amenities: ["Meditation Hall", "Vegetarian Meals", "Library", "Gardens", "Silence Zones", "Spiritual Guidance"],
      included: ["All Vegetarian Meals", "Meditation Sessions", "Dharma Talks", "Basic Amenities"],
      description: "A peaceful retreat offering spiritual accommodation for those seeking inner peace and Buddhist teachings in a serene mountain setting."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Accommodations
          </button>
          <h1 className="text-4xl font-bold text-gray-800">Budget-Friendly Options</h1>
        </div>

        {/* Budget Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {budgetOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-teal-600 text-sm font-semibold">
                  {option.type}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{option.name}</h3>
                  <div className="flex items-center gap-2 text-teal-100">
                    <MapPin className="w-4 h-4" />
                    <span>{option.location}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-right">
                  <div className="text-2xl font-bold text-white">{option.price}</div>
                  <div className="text-xs text-teal-100">per night</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">({option.rating}/5.0)</span>
                  <span className="text-teal-600 text-sm font-medium ml-2">Great Value</span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed text-sm">{option.description}</p>

                {/* Room Types */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Bed className="w-4 h-4 text-teal-600" />
                    Room Options
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {option.rooms.map((room, roomIndex) => (
                      <div key={roomIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-teal-500" />
                        <span>{room}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Amenities</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {option.amenities.map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <Wifi className="w-3 h-3 text-teal-500" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    What's Included
                  </h4>
                  <div className="space-y-1">
                    {option.included.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-2 py-1 rounded">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm">
                    Book Now
                  </button>
                  <button className="px-4 py-2 border border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300 text-sm">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Budget Travel Tips */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Budget Travel Tips for Bhutan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Best Booking Time</h3>
              <p className="text-sm text-gray-600">Book 2-3 months in advance for better rates and availability, especially during festival seasons.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Group Discounts</h3>
              <p className="text-sm text-gray-600">Travel with friends! Many budget accommodations offer group discounts for 4+ people.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Local Experiences</h3>
              <p className="text-sm text-gray-600">Stay in local guesthouses and farmstays for authentic experiences at lower costs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Request Component
const CustomRequestDetail = ({ onBack }) => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelers: '',
    dates: '',
    budget: '',
    preferences: '',
    specialRequests: ''
  });

  const services = [
    {
      id: 'honeymoon',
      title: 'Honeymoon Packages',
      icon: Heart,
      description: 'Romantic accommodations with special amenities',
      features: ['Private suites', 'Couple spa treatments', 'Romantic dinners', 'Scenic locations']
    },
    {
      id: 'family',
      title: 'Family-Friendly Stays',
      icon: Users,
      description: 'Child-friendly accommodations and activities',
      features: ['Family rooms', 'Kid-friendly meals', 'Cultural activities', 'Safe environments']
    },
    {
      id: 'adventure',
      title: 'Adventure Base Camps',
      icon: Mountain,
      description: 'Accommodations near trekking and adventure sites',
      features: ['Gear storage', 'Early breakfast', 'Guide services', 'Equipment rental']
    },
    {
      id: 'spiritual',
      title: 'Spiritual Retreats',
      icon: Sun,
      description: 'Meditation and spiritual focused accommodations',
      features: ['Meditation halls', 'Vegetarian meals', 'Quiet zones', 'Spiritual guidance']
    },
    {
      id: 'photography',
      title: 'Photography Tours',
      icon: Camera,
      description: 'Prime locations for photography enthusiasts',
      features: ['Scenic viewpoints', 'Golden hour access', 'Local insights', 'Equipment storage']
    },
    {
      id: 'wellness',
      title: 'Wellness Retreats',
      icon: Bath,
      description: 'Health and wellness focused stays',
      features: ['Spa treatments', 'Yoga sessions', 'Healthy cuisine', 'Detox programs']
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission
    alert('Custom request submitted! We\'ll contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Accommodations
          </button>
          <h1 className="text-4xl font-bold text-gray-800">Custom Accommodation Requests</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Services Selection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Your Experience Type</h2>
            <div className="space-y-4">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      selectedService === service.id ? 'ring-2 ring-indigo-500 bg-indigo-50' : ''
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        selectedService === service.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Request Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tell Us About Your Dream Stay</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={formData.travelers}
                    onChange={(e) => handleInputChange('travelers', e.target.value)}
                  >
                    <option value="">Select number</option>
                    <option value="1">1 Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3-4">3-4 Travelers</option>
                    <option value="5-8">5-8 Travelers</option>
                    <option value="9+">9+ Travelers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Dates</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., March 15-25, 2024"
                    value={formData.dates}
                    onChange={(e) => handleInputChange('dates', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range (per night)</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                >
                  <option value="">Select budget range</option>
                  <option value="under-100">Under $100</option>
                  <option value="100-300">$100 - $300</option>
                  <option value="300-600">$300 - $600</option>
                  <option value="600-1000">$600 - $1,000</option>
                  <option value="1000+">$1,000+</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Accommodation Preferences</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows="3"
                  placeholder="e.g., mountain views, traditional architecture, spa facilities..."
                  value={formData.preferences}
                  onChange={(e) => handleInputChange('preferences', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows="3"
                  placeholder="Any special requirements, dietary restrictions, accessibility needs, celebrations..."
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Submit Custom Request
              </button>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-indigo-800 mb-1">What Happens Next?</h4>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• Our specialists will review your request within 24 hours</li>
                      <li>• We'll create a personalized accommodation proposal</li>
                      <li>• You'll receive 3-5 tailored options matching your needs</li>
                      <li>• Free consultation and modifications until you're satisfied</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component with Navigation
const AccommodationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = location.hash.replace('#', '');

  // Determine initial view based on URL hash
  const getInitialView = () => {
    switch(hash) {
      case 'hotels': return 'hotels';
      case 'farmstays': return 'farmstays';
      case 'luxury': return 'lodges';
      case 'budget': return 'budget';
      case 'custom-query': return 'custom';
      default: return 'main';
    }
  };

  const [currentView, setCurrentView] = useState(getInitialView());

  // Update view when hash changes
  useEffect(() => {
    setCurrentView(getInitialView());
  }, [hash]);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'hotels':
        return <HotelsResortsDetail onBack={() => navigate('/accommodation')} />;
      case 'farmstays':
        return <TraditionalFarmstaysDetail onBack={() => navigate('/accommodation')} />;
      case 'lodges':
        return <LuxuryLodgesDetail onBack={() => navigate('/accommodation')} />;
      case 'budget':
        return <BudgetOptionsDetail onBack={() => navigate('/accommodation')} />;
      case 'custom':
        return <CustomRequestDetail onBack={() => navigate('/accommodation')} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
            <div className="max-w-4xl mx-auto text-center py-20">
              <h1 className="text-5xl font-bold text-gray-800 mb-8">Bhutan Accommodation Explorer</h1>
              <p className="text-xl text-gray-600 mb-12">Choose an accommodation type to explore detailed options</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <button
                  onClick={() => navigate('/accommodation#hotels')}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Hotels & Resorts</h3>
                  <p className="text-gray-600">Luxury accommodations</p>
                </button>

                <button
                  onClick={() => navigate('/accommodation#farmstays')}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Traditional Farmstays</h3>
                  <p className="text-gray-600">Authentic village life</p>
                </button>

                <button
                  onClick={() => navigate('/accommodation#luxury')}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Mountain className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Lodges</h3>
                  <p className="text-gray-600">Exclusive mountain retreats</p>
                </button>

                <button
                  onClick={() => navigate('/accommodation#budget')}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Budget Options</h3>
                  <p className="text-gray-600">Affordable comfort</p>
                </button>

                <button
                  onClick={() => navigate('/accommodation#custom-query')}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2"
                >
                  <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Requests</h3>
                  <p className="text-gray-600">Personalized experiences</p>
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return renderCurrentView();
};

export default AccommodationPage;
