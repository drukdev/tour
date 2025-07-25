const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
        Contact Bhutan Travel Agent
      </h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Reach us through traditional and digital means
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Full Name*</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="As required for Bhutan visa"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Email*</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Your Inquiry*</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Include travel dates and interests"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
            >
              Submit (Bhutan Time: {new Date().toLocaleTimeString('en-BT')})
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Offices</h2>
            <address className="not-italic">
              <p className="flex items-start mb-3">
                <svg className="h-5 w-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  <strong>Thimphu Headquarters</strong><br/>
                  Norzin Lam, Clock Tower Square<br/>
                  Bhutan (GMT+6)
                </span>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Direct Contacts</h3>
            <p className="flex items-center mb-2">
              <svg className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +975-2-334455 (Office)
            </p>
            <p className="flex items-center">
              <svg className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@bhutantravelagent.bt
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Emergency Support</h3>
            <p className="text-sm text-gray-600">
              For travelers currently in Bhutan:<br/>
              <span className="font-medium">+975-1711-2233 (24/7)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
