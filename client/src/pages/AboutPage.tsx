import { useEffect, useState } from 'react';
import { Mountain, Heart, Users, Star, MapPin, Camera, Compass, Award, Phone, Mail, Calendar, Globe } from 'lucide-react';

// OurStory Component
const OurStory = ({ id }) => (
  <section id={id} className="relative">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl transform rotate-3"></div>
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop"
          alt="Bhutan Monastery"
          className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
        />
        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
          <div className="flex items-center space-x-2">
            <Award className="w-6 h-6 text-yellow-500" />
            <span className="font-semibold text-gray-800">15+ Years Experience</span>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full">
          <Heart className="w-5 h-5 text-red-500 mr-2" />
          <span className="text-sm font-medium text-gray-700">Our Story</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Born from a Deep Love for the
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Last Shangri-La</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Bhutan Mind Break was founded by passionate locals who wanted to share the authentic magic of our kingdom with the world. We believe that travel should transform both the visitor and the visited.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our journey began in 2008 when our founder, a former monk turned cultural ambassador, realized that most visitors were only seeing the surface of Bhutan's incredible depth. We created Bhutan Mind Break to offer something different—journeys that touch the soul and reveal the true essence of the Land of the Thunder Dragon.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-xl">
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Happy Travelers</div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            Sustainable Tourism
          </div>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            Cultural Preservation
          </div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Community Impact
          </div>
        </div>
      </div>
    </div>
  </section>
);

// OurTeam Component
const OurTeam = ({ id }) => {
  const team = [
    {
      name: "Tenzin Norbu",
      role: "Founder & Cultural Guide",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Born in Thimphu, Tenzin has been sharing Bhutan's stories for over 15 years. Former monk with deep knowledge of Buddhist philosophy and Bhutanese traditions.",
      specialties: ["Cultural Tours", "Monastery Visits", "Philosophy Sessions"]
    },
    {
      name: "Pema Choden",
      role: "Adventure Specialist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      bio: "Expert trekking guide who knows every hidden trail in the Himalayas. Certified in wilderness first aid and high-altitude trekking.",
      specialties: ["Himalayan Treks", "Adventure Tours", "Wildlife Spotting"]
    },
    {
      name: "Karma Wangchuk",
      role: "Spiritual Journey Guide",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "Former monk who brings deep spiritual insight to every journey. Specializes in meditation retreats and spiritual awakening experiences.",
      specialties: ["Meditation Retreats", "Spiritual Tours", "Mindfulness Training"]
    },
    {
      name: "Sonam Dorji",
      role: "Photography Guide",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
      bio: "Award-winning photographer who captures the soul of Bhutan. Helps travelers document their journey with professional techniques.",
      specialties: ["Photography Tours", "Landscape Shots", "Cultural Documentation"]
    }
  ];

  return (
    <section id={id} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full mb-4">
          <Users className="w-5 h-5 text-blue-500 mr-2" />
          <span className="text-sm font-medium text-gray-700">Meet Our Team</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Bhutanese Family</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Local experts who don't just show you Bhutan—they help you feel it, understand it, and fall in love with it.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="group">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-white shadow-lg"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Local Expert
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
              <p className="text-blue-600 text-center font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-center text-sm mb-4">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.specialties.map((specialty, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = ({ id }) => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      country: "Australia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      text: "Bhutan changed my perspective on life. The team at Bhutan Mind Break didn't just show us temples—they showed us a way of being. The meditation sessions with Karma were life-changing.",
      rating: 5,
      trip: "Cultural Immersion Tour",
      duration: "10 days"
    },
    {
      name: "Marcus Weber",
      country: "Germany",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      text: "The Tiger's Nest trek was incredible, but what made it special was understanding its spiritual significance through our guide's eyes. Pema's knowledge of the terrain was exceptional.",
      rating: 5,
      trip: "Himalayan Trek",
      duration: "14 days"
    },
    {
      name: "Yuki Tanaka",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
      text: "I've traveled to 50+ countries, but Bhutan's happiness philosophy and this team's genuine warmth was truly unique. Every day brought new insights into mindful living.",
      rating: 5,
      trip: "Happiness & Wellness Journey",
      duration: "7 days"
    },
    {
      name: "David Thompson",
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "The photography guidance from Sonam helped me capture not just beautiful images, but the essence of Bhutan. My portfolio has never looked better!",
      rating: 5,
      trip: "Photography Expedition",
      duration: "12 days"
    },
    {
      name: "Maria Santos",
      country: "Brazil",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      text: "As a solo female traveler, I felt completely safe and welcomed. The cultural exchanges with local families were the highlight of my journey.",
      rating: 5,
      trip: "Solo Cultural Discovery",
      duration: "8 days"
    },
    {
      name: "Robert Kim",
      country: "South Korea",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      text: "The sustainable tourism approach really impressed me. Knowing that my visit contributed positively to local communities made the experience even more meaningful.",
      rating: 5,
      trip: "Eco-Cultural Tour",
      duration: "9 days"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id={id} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5 rounded-3xl"></div>
      <div className="relative z-10 p-8 lg:p-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-4 shadow-md">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">What Travelers Say</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories from the Heart</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from travelers who discovered more than they expected in the Land of the Thunder Dragon.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 mb-6 italic leading-relaxed font-light">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-500">{testimonials[currentTestimonial].country} • {testimonials[currentTestimonial].trip}</div>
                <div className="text-sm text-blue-600">{testimonials[currentTestimonial].duration}</div>
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.country} • {testimonial.duration}</div>
                  <div className="text-xs text-blue-600">{testimonial.trip}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main AboutPage Component
const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    { icon: Mountain, text: "Himalayan Adventures", color: "text-blue-600" },
    { icon: Heart, text: "Happiness Philosophy", color: "text-red-500" },
    { icon: Camera, text: "Cultural Immersion", color: "text-green-600" },
    { icon: Compass, text: "Spiritual Journeys", color: "text-purple-600" }
  ];

  const stats = [
    { number: "500+", label: "Happy Travelers", icon: Users },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Destinations", icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Discover the Last Shangri-La</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Bhutan Mind Break</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              We don't just take you to Bhutan—we invite you into our world. Experience the kingdom where
              <span className="text-yellow-300 font-semibold"> Gross National Happiness </span>
              matters more than GDP, and every journey becomes a transformation.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <highlight.icon className={`w-8 h-8 ${highlight.color} mx-auto mb-2`} />
                  <p className="text-sm font-medium">{highlight.text}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span>Carbon Neutral Tourism</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                <span>Sustainable Travel Pioneer</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                <span>Authentic Local Experiences</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{stat.number}</div>
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          <OurStory id="story" />
          <OurTeam id="team" />
          <Testimonials id="testimonials" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Bhutan Mind Break?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another tour operator—we're your gateway to authentic Bhutan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Local Expertise",
                description: "Born and raised in Bhutan, our guides share insider knowledge you won't find in guidebooks."
              },
              {
                icon: Heart,
                title: "Sustainable Tourism",
                description: "Every journey supports local communities and preserves Bhutan's pristine environment."
              },
              {
                icon: Star,
                title: "Personalized Experiences",
                description: "Custom itineraries designed around your interests, pace, and spiritual journey goals."
              },
              {
                icon: Users,
                title: "Small Group Focus",
                description: "Intimate group sizes ensure personal attention and authentic cultural exchanges."
              },
              {
                icon: Calendar,
                title: "Year-Round Adventures",
                description: "Expertly planned trips for every season, from spring festivals to autumn harvests."
              },
              {
                icon: Award,
                title: "Award-Winning Service",
                description: "Recognized for excellence in sustainable tourism and cultural preservation."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-xl p-3 w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">Ready for Your Bhutan Adventure?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Let us craft a journey that will change how you see the world—and yourself.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Plan Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Our Team
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@bhutanmindbreak.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+975 17 123 456</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
