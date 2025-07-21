import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About WatchTime</h3>
            <p className="mb-4">
              Premium watch retailer offering the finest timepieces from renowned brands worldwide.
              Quality, authenticity, and exceptional service are our commitment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Information links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-white transition-colors duration-300">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition-colors duration-300">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Account links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">My Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="hover:text-white transition-colors duration-300">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-white transition-colors duration-300">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white transition-colors duration-300">
                  Wish List
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="hover:text-white transition-colors duration-300">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>134 Nam Kỳ Khởi Nghĩa, Phường Bến Nghé, Quận 1, TPHCM </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span>0366669999 </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span>contact@watchtime.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} WatchTime. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;