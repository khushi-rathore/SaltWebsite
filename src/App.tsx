import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import ContactForm from './components/ContactForm';
import SaltTypes from './components/SaltTypes';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-pink-600">MAATAPTI INDUSTRIES</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-pink-600">Home</a>
              <a href="#about" className="text-gray-600 hover:text-pink-600">About</a>
              <a href="#types" className="text-gray-600 hover:text-pink-600">Products</a>
              <a href="#contact" className="text-gray-600 hover:text-pink-600">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-pink-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-pink-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-pink-600">About</a>
              <a href="#types" className="block px-3 py-2 text-gray-600 hover:text-pink-600">Products</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-pink-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div 
          className="relative h-[90vh] bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url("https://i.shgcdn.com/f8cc830d-74f2-4aa1-a6da-593d19f4454f/-/format/auto/-/preview/3000x3000/-/quality/lighter/")',
            backgroundPosition: '50% 40%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
                <h1 className="text-6xl md:text-7xl font-bold text-pink-400 mb-3 drop-shadow-lg">MAATAPTI</h1>
                <h2 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">Industries</h2>
              </div>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-md max-w-2xl mx-auto">
                Premium Himalayan Salt Products for Health-Conscious Consumers
              </p>
              <a 
                href="#types" 
                className="inline-flex items-center bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Products <ChevronDown className="ml-2 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Global Quality Standards</h3>
              <p className="text-gray-600 mb-6">
                We are committed to providing our customers with the highest quality Rock Salt, Pink Himalayan Salt, and Black Salt. 
                Our products are certified and tested to ensure they meet international quality standards.
              </p>
              <p className="text-gray-600 mb-6">
                Our Pink Himalayan Salt Products are in high demand among health-conscious consumers and are increasingly
                used in gourmet cooking and spa treatments.
              </p>
              <p className="text-gray-600">
                We believe that our Pink Himalayan Salt Products have great potential in the global market, and we're dedicated
                to expanding our reach while maintaining the highest quality standards.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-pink-200 rounded-lg transform -rotate-3"></div>
              <img
                src="https://i.dawn.com/primary/2023/05/645fff778d595.jpg"
                alt="Pink Himalayan Salt"
                className="relative rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="types" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <SaltTypes />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-pink-600" />
                  <span>Maataptiindustries@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-pink-600" />
                  <span>+91 90390 09055</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-pink-600" />
                  <span>Gram - Parsodi Khurd At Post Betul Bazar, Betul (MP) - 460004</span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Our Commitment</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ High-quality product guarantee</li>
                  <li>✓ Product replacement for any defects</li>
                  <li>✓ International quality standards</li>
                  <li>✓ Dedicated customer support</li>
                </ul>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MAATAPTI INDUSTRIES</h3>
              <p className="text-gray-400">
                Leading manufacturer and exporter of premium Pink Himalayan Salt and Black Salt products.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-pink-400">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-pink-400">About</a></li>
                <li><a href="#types" className="text-gray-400 hover:text-pink-400">Products</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-pink-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <p className="text-gray-400 mb-4">
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
              <p className="text-gray-400">
                Customer Care: +91 90390 09055
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Maatapti Industries. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;