import React from 'react'


    const AboutUs = () => {
        return (
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Revolutionizing Healthcare Data Management
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Empowering patients with secure, transparent, and accessible health records through blockchain technology.
                </p>
              </div>
      
              {/* Mission Section */}
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  <p className="text-lg text-gray-600">
                    At HealthSuraksha, we're committed to transforming healthcare data management by putting control back in the hands of patients. Our blockchain-based platform ensures your medical history is secure, accessible, and entirely under your control.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-1">✓</span>
                      <span>Decentralized data storage ensuring maximum security</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-1">✓</span>
                      <span>Complete patient control over medical record access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-1">✓</span>
                      <span>Seamless integration with healthcare providers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-1">✓</span>
                      <span>Tamper-proof record management</span>
                    </li>
                  </ul>
                </div>
              </div>
      
              {/* Values Section */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Security First</h3>
                  <p className="text-gray-600">
                    Using advanced blockchain technology to ensure your medical data remains private and secure.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Interoperability</h3>
                  <p className="text-gray-600">
                    Seamlessly connecting different healthcare systems and providers for comprehensive care.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Control</h3>
                  <p className="text-gray-600">
                    Giving you complete authority over who can access your medical records and when.
                  </p>
                </div>
              </div>
      
              {/* Vision Section */}
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We envision a future where healthcare data management is seamless, secure, and patient-centric. Through blockchain technology, we're building a healthcare ecosystem that promotes transparency, trust, and improved patient outcomes.
                </p>
                <a 
                  href="https://docs.polygon.technology/tools/"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn More About The Technology We Use
                </a>
              </div>
            </div>
          </div>
        );
      }


export default AboutUs