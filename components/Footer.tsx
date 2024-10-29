import React from "react";
import { Mail, Phone, MapPin, CreditCard, Gift, Truck } from "lucide-react";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaPaypal,
  FaCcVisa,
} from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Pixelmart</h3>
            <p className="text-sm mb-4">
              Your one-stop destination for quality products and exceptional
              service.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="w-5 h-5 hover:text-white cursor-pointer" />
              <FaXTwitter className="w-5 h-5 hover:text-white cursor-pointer" />
              <FaInstagram className="w-5 h-5 hover:text-white cursor-pointer" />
              <FaYoutube className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Contact",
                "FAQ",
                "Terms & Conditions",
                "Privacy Policy",
                "Returns",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">123 Store Street, City, Country</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+1 234 567 8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span className="text-sm">support@shopname.com</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Why Choose Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5" />
                <span className="text-sm">Secure Payments</span>
              </div>
              <div className="flex items-center space-x-3">
                <Gift className="w-5 h-5" />
                <span className="text-sm">Loyalty Rewards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 Pixelmart. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <FaCcVisa size={50} />
              <FaCcMastercard size={50} />
              <FaPaypal size={50} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
