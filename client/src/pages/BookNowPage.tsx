import { useState, useEffect } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: '2',
    interests: [],
    message: ''
  });

  const interests = [
    'Cultural Heritage', 'Trekking & Hiking', 'Monasteries', 'Local Cuisine',
    'Photography', 'Wildlife', 'Festivals', 'Wellness & Meditation'
  ];

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-95">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Plan Your Journey</h2>
        <p className="text-gray-600">Tell us about your dream Bhutan experience</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
              placeholder="Your full name"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData(prev => ({...prev, guests: e.target.value}))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
            >
              {[1,2,3,4,5,6,7,8].map(num => (
                <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Dates</label>
          <input
            type="text"
            value={formData.dates}
            onChange={(e) => setFormData(prev => ({...prev, dates: e.target.value}))}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
            placeholder="e.g., March 15-25, 2025"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">What interests you most?</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {interests.map(interest => (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestToggle(interest)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  formData.interests.includes(interest)
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300 resize-none"
            placeholder="Tell us more about your ideal Bhutan experience..."
          />
        </div>

        <button
          type="button"
          onClick={() => alert('Enquiry submitted! We will contact you within 24 hours.')}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Send My Enquiry
        </button>
      </div>
    </div>
  );
};

const ChatAgent = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Tashi Delek! Welcome to Bhutan Mindbreak. I'm here to help you plan your perfect Bhutan adventure. What would you like to know?", sender: 'bot', time: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "Best time to visit?",
    "Tour packages",
    "Visa requirements",
    "Cultural experiences",
    "Trekking options"
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      time: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your question! Our travel experts will provide you with detailed information about your Bhutan journey. Let me connect you with a specialist who can help you with personalized recommendations.",
        sender: 'bot',
        time: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickReply = (reply) => {
    setInputText(reply);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm bg-opacity-95">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Bhutan Travel Assistant</h3>
            <p className="text-sm text-orange-100">Online • Ready to help</p>
          </div>
        </div>
      </div>

      <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white shadow-md border'
              } transform hover:scale-[1.02] transition-all duration-200`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-orange-100' : 'text-gray-500'
              }`}>
                {message.time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white shadow-md border px-4 py-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex flex-wrap gap-2 mb-4">
          {quickReplies.map(reply => (
            <button
              key={reply}
              onClick={() => handleQuickReply(reply)}
              className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors duration-200"
            >
              {reply}
            </button>
          ))}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
          />
          <button
            onClick={handleSendMessage}
            className="bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 transition-colors duration-200 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const BookNowPage = () => {
  const [activeTab, setActiveTab] = useState('form');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactOptions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      main: "+975 2 334455",
      sub: "Mon-Fri, 9am-6pm Bhutan Time",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      main: "bookings@bhutanmindbreak.com",
      sub: "Response within 24 hours",
      color: "from-green-500 to-green-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "WhatsApp",
      main: "+975 17128730",
      sub: "Fast responses, any time",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-orange-600 to-transparent opacity-30"
          style={{transform: `translateY(${scrollY * 0.5}px)`}}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100">
              Start Your Bhutan Journey
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-orange-50">
              Discover the Last Shangri-La. Let's craft your perfect Bhutan experience with personalized service and unforgettable moments.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Travel Experts Online</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm font-medium">5-Star Rated Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <button
              onClick={() => setActiveTab('form')}
              className={`flex-1 py-6 px-4 text-center font-semibold text-lg transition-all duration-300 relative ${
                activeTab === 'form'
                  ? 'text-orange-600'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className={`p-2 rounded-full transition-all duration-300 ${
                  activeTab === 'form' ? 'bg-orange-100' : 'bg-gray-100'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>Booking Enquiry</span>
              </div>
              {activeTab === 'form' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-full"></div>
              )}
            </button>

            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-6 px-4 text-center font-semibold text-lg transition-all duration-300 relative ${
                activeTab === 'chat'
                  ? 'text-orange-600'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className={`p-2 rounded-full transition-all duration-300 relative ${
                  activeTab === 'chat' ? 'bg-orange-100' : 'bg-gray-100'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {activeTab === 'chat' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  )}
                </div>
                <span>Live Chat Assistant</span>
              </div>
              {activeTab === 'chat' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-full"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="transform transition-all duration-500 ease-in-out">
          {activeTab === 'form' ? <BookingForm /> : <ChatAgent />}
        </div>

        {/* Contact Options */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Ways to Connect</h2>
            <p className="text-gray-600 text-lg">Choose your preferred way to reach our travel experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <div
                key={option.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`h-2 bg-gradient-to-r ${option.color}`}></div>
                <div className="p-8 text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-lg font-semibold text-gray-800 mb-2">{option.main}</p>
                  <p className="text-sm text-gray-600">{option.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Bhutan Mindbreak?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "Award Winning", desc: "Top-rated Bhutan tour operator" },
              { icon: "🌟", title: "Expert Guides", desc: "Local certified professionals" },
              { icon: "🔒", title: "Secure Booking", desc: "Safe & protected payments" },
              { icon: "💝", title: "Personalized", desc: "Tailored to your preferences" }
            ].map((item, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowPage;
