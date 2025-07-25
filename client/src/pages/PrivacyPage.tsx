const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            How we protect and use your personal information
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Data Collection Purpose
                </h2>
                <p>
                  We collect only necessary information for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Bhutan visa processing (passport details, arrival/departure dates)</li>
                  <li>Tour arrangement (dietary requirements, emergency contacts)</li>
                  <li>Compliance with Bhutanese tourism regulations</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Information Sharing
                </h2>
                <p>
                  Your data is shared exclusively with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Tourism Council of Bhutan (mandatory for visa approval)</li>
                  <li>Licensed Bhutanese service providers (hotels, guides, transport)</li>
                  <li>No third-party marketing or international transfers</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  GDPR & Bhutanese Law
                </h2>
                <p>
                  We comply with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Bhutan's <strong>Information, Communication and Media Act 2018</strong></li>
                  <li>Right to request data deletion after trip completion</li>
                  <li>Encrypted storage of sensitive documents</li>
                </ul>
              </section>
            </div>
          </div>

          <div className="bg-orange-50 px-6 py-4 border-t border-orange-100">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-gray-700 mb-2 sm:mb-0">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium text-sm"
              >
                Contact our Data Protection Officer
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
