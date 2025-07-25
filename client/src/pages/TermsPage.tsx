const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The terms governing your Bhutan travel experience
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Bhutan Travel Regulations
                </h2>
                <p>
                  All bookings through Bhutan Travel Agent comply with the Tourism Council of Bhutan's regulations:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Minimum daily tariff of $200-250 USD (seasonal)</li>
                  <li>Mandatory booking through licensed Bhutanese operators</li>
                  <li>Visa processed only after full payment confirmation</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Booking & Payments
                </h2>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="mb-3">
                    <strong className="text-orange-600">Deposit:</strong> 50% non-refundable deposit required to initiate visa processing.
                  </p>
                  <p className="mb-3">
                    <strong className="text-orange-600">Balance:</strong> Due 30 days before arrival. Payments in USD only.
                  </p>
                  <p>
                    <strong className="text-orange-600">Cancellation:</strong> 75% refund if cancelled 60+ days prior. No refund within 30 days.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Sustainable Tourism Policy
                </h2>
                <p>
                  By booking with us, you agree to follow Bhutan's High Value, Low Impact tourism principles:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Respect cultural sites (remove shoes in temples, no photography where prohibited)</li>
                  <li>Environmental responsibility (plastic-free trekking, waste management)</li>
                  <li>Support of local communities through our included sustainability fee</li>
                </ul>
              </section>
            </div>
          </div>

          <div className="bg-gray-100 px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 mb-2 sm:mb-0">
                <strong>Note:</strong> These terms are subject to change per Tourism Council of Bhutan regulations.
              </p>
              <p className="text-xs text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
