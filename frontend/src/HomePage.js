import React from "react";
import ContactForm from './components/ContactForm';
import NewsletterForm from './components/NewsletterForm';
import howdyLogo from './howdy.png';

import { 
  AlignJustify, 
  X, 
  MapPin, 
  Battery, 
  CreditCard, 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  Repeat, 
  Clock, 
  Shield, 
  Map, 
  Phone, 
  Mail, 
  Building,
  Calendar
} from "lucide-react";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  return (
    <div className="bg-white text-gray-700 min-h-screen font-sans">
      {/* Navigation - Fixed and Modern */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Logo and brand name */}
              <div className="flex items-center">
              <img src={howdyLogo} alt="HowdyPower Logo" className="h-10 w-10 mr-2" />
              <h1 className="text-2xl font-bold text-blue-500">Howdy<span className="font-extrabold text-yellow-400">Power</span></h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#how-it-works" className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200">
                  How It Works
                </a>
                <a href="#features" className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200">
                  Features
                </a>
                <a href="#contact" className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200">
                  Contact
                </a>
                <a href="#" className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200">
                  Download App
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-blue-500 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium bg-blue-500 text-white rounded-md mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Refined Design with Subtle Gradients */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 text-center relative z-10">
            {/* Centered content */}
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
                  <Zap className="w-10 h-10 text-yellow-400" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-800">
                Power <span className="relative inline-block px-2">
                  <span className="relative z-10">On-The-Go</span>
                  <span className="absolute bottom-0 left-0 right-0 h-4 bg-yellow-400 opacity-20 rounded"></span>
                </span>, Wherever You Are
              </h2>
              
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-600">
                Never run out of battery again. Rent a power bank in seconds and return it anywhere. Always charged, always ready.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <a href="#how-it-works" className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Now
                </a>
                <a href="#locations" className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Locations
                </a>
              </div>
              
              {/* Feature badges with refined styling */}
              <div className="flex flex-wrap justify-center mt-16 gap-4">
                <div className="bg-white shadow-sm rounded-lg px-5 py-3 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                    <CreditCard className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="font-medium text-gray-700">Easy Rentals</span>
                </div>
                
                <div className="bg-white shadow-sm rounded-lg px-5 py-3 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                    <Repeat className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="font-medium text-gray-700">Multiple Locations</span>
                </div>
                
                <div className="bg-white shadow-sm rounded-lg px-5 py-3 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="font-medium text-gray-700">24/7 Availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements - More Subtle */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full border-4 border-blue-200 opacity-30"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full border-4 border-blue-200 opacity-30"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-yellow-400 opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-yellow-400 opacity-10"></div>
          
          <div className="absolute top-20 right-10 flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-300 opacity-40"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300 opacity-40"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300 opacity-40"></div>
          </div>
          
          <div className="absolute bottom-20 left-10 flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-blue-300 opacity-40"></div>
            <div className="w-3 h-3 rounded-full bg-blue-300 opacity-40"></div>
            <div className="w-3 h-3 rounded-full bg-blue-300 opacity-40"></div>
          </div>
        </div>
      </header>

      {/* Stats Section - Refined */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl bg-blue-50 shadow-sm">
              <div className="flex justify-center mb-3">
                <MapPin className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-4xl font-bold text-blue-500">50+</p>
              <p className="text-gray-600 mt-1">Locations</p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50 shadow-sm">
              <div className="flex justify-center mb-3">
                <Battery className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-4xl font-bold text-blue-500">400+</p>
              <p className="text-gray-600 mt-1">Power Banks</p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50 shadow-sm">
              <div className="flex justify-center mb-3">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-4xl font-bold text-blue-500">99%</p>
              <p className="text-gray-600 mt-1">Uptime</p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50 shadow-sm">
              <div className="flex justify-center mb-3">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-4xl font-bold text-blue-500">24/7</p>
              <p className="text-gray-600 mt-1">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Refined */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              <span className="text-blue-500">How</span> It Works
            </h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-6 relative">
                <MapPin className="w-6 h-6" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</div>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Find a Station</h4>
              <p className="text-gray-600">
                Locate the nearest HowdyPower station using our mobile app or just look for our signature blue kiosks.
              </p>
              <div className="absolute top-24 right-0 hidden md:block">
                <ChevronRight className="w-8 h-8 text-blue-200" />
              </div>
            </div>
            
            <div className="relative flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-6 relative">
                <CreditCard className="w-6 h-6" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</div>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Rent Instantly</h4>
              <p className="text-gray-600">
                Swipe your card at the kiosk or use our app to unlock a fully charged power bank in seconds.
              </p>
              <div className="absolute top-24 right-0 hidden md:block">
                <ChevronRight className="w-8 h-8 text-blue-200" />
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-6 relative">
                <Repeat className="w-6 h-6" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</div>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Return Anywhere</h4>
              <p className="text-gray-600">
                Return your power bank to any HowdyPower station when you're done. Only pay for the time you use it.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-200">
              Learn more about our process
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section - Refined */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              <span className="text-blue-500">Key</span> Features
            </h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-500 mb-6 shadow-sm">
                <CreditCard className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Multiple Ways to Rent</h4>
              <p className="text-gray-600">
                Use your credit card directly at the kiosk or rent through our mobile app with just a few taps.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-500 mb-6 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Return Anywhere</h4>
              <p className="text-gray-600">
                Drop off your power bank at any HowdyPower location. Our app helps you find the nearest station.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-500 mb-6 shadow-sm">
                <Battery className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Always Charged</h4>
              <p className="text-gray-600">
                Our smart system ensures you always receive the power bank with the highest charge level.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-500 mb-6 shadow-sm">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Flexible Pricing</h4>
              <p className="text-gray-600">
                Only pay for the time you actually use the power bank. No hidden fees or long-term commitments.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-500 mb-6 shadow-sm">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Secure Payments</h4>
              <p className="text-gray-600">
                All transactions are secured by Stripe payment processing, ensuring your payment information is safe.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-500 mb-6 shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Real-Time Tracking</h4>
              <p className="text-gray-600">
                Monitor your rental duration and manage returns through our intuitive mobile app interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Refined */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              <span className="text-blue-500">What</span> People Say
            </h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-100 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-100 rounded-full"></div>
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "HowdyPower saved my day during SXSW! My phone was dying and I found a kiosk right when I needed it. Super convenient."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full mr-3 flex items-center justify-center text-blue-500 font-bold">
                  ST
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Sarah T.</h5>
                  <p className="text-sm text-gray-500">Austin, TX</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-100 rounded-full"></div>
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "As a business traveler, HowdyPower has been a game-changer. I don't have to carry bulky chargers anymore or hunt for outlets."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full mr-3 flex items-center justify-center text-blue-500 font-bold">
                  MR
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Michael R.</h5>
                  <p className="text-sm text-gray-500">Houston, TX</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-100 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-100 rounded-full"></div>
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The ability to pick up and drop off at different locations is brilliant. Perfect for a day exploring the city."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full mr-3 flex items-center justify-center text-blue-500 font-bold">
                  JL
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Jessica L.</h5>
                  <p className="text-sm text-gray-500">Dallas, TX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Refined */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 text-gray-800 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="absolute left-0 top-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute -left-10 top-10 w-40 h-40 rounded-full bg-blue-300"></div>
            <div className="absolute right-20 bottom-10 w-60 h-60 rounded-full bg-blue-300"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 relative text-gray-800">Ready to Never Run Out of Power Again?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Download our app to locate the nearest power bank station and enjoy seamless rentals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200 inline-flex items-center justify-center shadow-sm">
              <Battery className="w-6 h-6 mr-2" />
              Download App
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-500 rounded-full font-semibold hover:bg-white hover:border-blue-500 transition-colors duration-200 shadow-sm">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Refined */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              <span className="text-blue-500">Contact</span> Us
            </h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Interested in learning more about HowdyPower or bringing our service to your location? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold mb-6 text-gray-800">Send us a message</h4>
              <ContactForm />
            </div>
            
            {/* Contact Info Section */}
            <div>
              <div className="bg-blue-50 p-8 rounded-xl shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-700">Email</p>
                      <a href="mailto:info@howdypower.com" className="text-blue-500 hover:underline">info@howdypower.com</a>
                    </div>
                  </div>
                  {/* <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-700">Phone</p>
                      <a href="tel:+15125551234" className="text-blue-500 hover:underline">(512) 555-1234</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-700">Headquarters</p>
                      <p className="text-gray-600">100 Congress Ave, Suite 200<br />Austin, TX 78701</p>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-6 text-gray-800">Office Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 hover:bg-white rounded-md transition-colors duration-200">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                      <p className="text-gray-600">Monday - Friday</p>
                    </div>
                    <p className="font-medium text-gray-700">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center p-2 hover:bg-white rounded-md transition-colors duration-200">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                      <p className="text-gray-600">Saturday</p>
                    </div>
                    <p className="font-medium text-gray-700">10:00 AM - 4:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center p-2 hover:bg-white rounded-md transition-colors duration-200">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                      <p className="text-gray-600">Sunday</p>
                    </div>
                    <p className="font-medium text-gray-700">Closed</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-blue-100">
                    <p className="text-gray-600 text-sm flex items-center">
                      <Clock className="w-4 h-4 text-blue-500 mr-2" />
                      Note: Power bank kiosks are available 24/7 at all locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Refined */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              <span className="text-blue-500">Frequently</span> Asked Questions
            </h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How much does it cost to rent a power bank?",
                answer: "Rental prices start at $1.99 for the first hour and $0.99 for each additional hour, with a maximum daily cap of $9.99. Prices may vary slightly by location."
              },
              {
                question: "What if I don't return the power bank?",
                answer: "If a power bank isn't returned within 10 hours, the full deposit amount ($30) will be charged to your card. We always recommend returning the power bank to avoid this charge."
              },
              {
                question: "Can I return the power bank to any location?",
                answer: "Yes! You can return your HowdyPower power bank to any of our kiosk locations regardless of where you rented it from. Our app can help you find the nearest return location."
              },
              {
                question: "What type of connectors do the power banks have?",
                answer: "Our power banks come with built-in USB-C, Lightning, and Micro-USB cables, so they're compatible with virtually all smartphones and tablets."
              },
              {
                question: "How long does the battery last?",
                answer: "Our 10,000 mAh power banks can typically charge a modern smartphone 2-3 times before needing to be recharged."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contact" className="text-blue-500 font-semibold hover:text-blue-600 inline-flex items-center transition-colors duration-200">
              Have more questions? Contact us
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter - Refined */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 p-10 rounded-2xl shadow-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Stay Updated with HowdyPower</h3>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for updates on new locations, promotions, and power bank technology.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Refined */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/36/36" alt="HowdyPower Logo" className="h-8 w-8 mr-2" />
                <h4 className="text-2xl font-bold text-blue-300">Howdy<span className="font-extrabold text-yellow-400">Power</span></h4>
              </div>
              <p className="text-gray-300 mb-6">
                Keeping you charged wherever you go. Power bank rentals made simple.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-lg mb-4 text-blue-200">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">How It Works</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">FAQs</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Download App</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-lg mb-4 text-blue-200">Legal</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Rental Agreement</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-lg mb-4 text-blue-200">Contact Us</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-300 mr-2 mt-0.5" />
                  <span className="text-gray-300">100 Congress Ave, Austin, TX</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-300 mr-2 mt-0.5" />
                  <span className="text-gray-300">(512) 555-1234</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-300 mr-2 mt-0.5" />
                  <span className="text-gray-300">info@howdypower.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} HowdyPower. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                Designed with <span className="text-yellow-400">♥</span> in Texas
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;