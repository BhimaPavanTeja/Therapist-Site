import React from "react";
import { MapPin, Phone, Mail, Clock, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-12 rounded-t-lg">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Name & Title */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Dr. Serena Blake, PsyD
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              Clinical Psychologist
            </p>
            <p className="text-gray-400 leading-relaxed">
              Providing compassionate, evidence-based psychological care to help you achieve lasting positive change and well-being.
            </p>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-4 text-white">
              Contact Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    1287 Maplewood Drive<br />
                    Los Angeles, CA 90026
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+13235550192" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  (323) 555-0192
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:serena@blakepsychology.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  serena@blakepsychology.com
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold mb-4 text-white">
              Office Hours
            </h4>
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* In-Person Sessions */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <h5 className="font-semibold text-white">In-Person Sessions</h5>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p><span className="font-medium">Tuesday:</span> 10 AM – 6 PM</p>
                  <p><span className="font-medium">Thursday:</span> 10 AM – 6 PM</p>
                </div>
              </div>

              {/* Virtual Sessions */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Video className="w-5 h-5 text-blue-400" />
                  <h5 className="font-semibold text-white">Virtual via Zoom</h5>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p><span className="font-medium">Monday:</span> 1 PM – 5 PM</p>
                  <p><span className="font-medium">Wednesday:</span> 1 PM – 5 PM</p>
                  <p><span className="font-medium">Friday:</span> 1 PM – 5 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div>
              <h5 className="font-semibold text-white mb-3">Services</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Anxiety & Stress Management</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Relationship Counseling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Trauma Recovery</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-3">Information</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors duration-200">About Dr. Blake</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-3">Get Started</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#consultation" className="hover:text-white transition-colors duration-200">Free Consultation</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors duration-200">Book Appointment</a></li>
                <li><a href="#emergency" className="hover:text-white transition-colors duration-200">Crisis Resources</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-900 border border-red-700 rounded-lg p-4 mb-8">
          <h5 className="font-semibold text-white mb-2 flex items-center">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
            Crisis & Emergency Information
          </h5>
          <p className="text-red-100 text-sm">
            If you are experiencing a mental health emergency, please call 911 or go to your nearest emergency room. 
            For crisis support, contact the 988 Suicide & Crisis Lifeline at 988 or text &quot;HELLO&quot; to 741741.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Dr. Serena Blake, PsyD. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#hipaa" className="hover:text-white transition-colors duration-200">HIPAA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}