import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Company Info */}
        <div>
        <Link to={'/'} className="font-bold mb-5 flex items-center md:text-xl"> <img className="w-6 md:w-10" src="/advantages-of-ecommerce-shopping-cart.png" alt="" />Sh<span className='text-red-600 md:text-3xl'>o</span>pSph<span className='text-red-600 md:text-3xl'>e</span>re</Link>
          <p className="text-sm">
            Providing high-quality products to meet your needs. Our mission is
            to deliver the best service with the highest standards.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">1234 Street Name, City, State, 12345</p>
          <p className="text-sm">Email: info@yourwebsite.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="/service1"
                className="hover:text-gray-300 transition-colors"
              >
                Product Management
              </a>
            </li>
            <li>
              <a
                href="/service2"
                className="hover:text-gray-300 transition-colors"
              >
                Custom Solutions
              </a>
            </li>
            <li>
              <a
                href="/service3"
                className="hover:text-gray-300 transition-colors"
              >
                Consulting
              </a>
            </li>
            <li>
              <a
                href="/service4"
                className="hover:text-gray-300 transition-colors"
              >
                Customer Support
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              to={"https://facebook.com"}
              className="hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook></FaFacebook>
            </Link>
            <Link
              to={"https://twitter.com"}
              className="hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter></FaTwitter>
            </Link>
            <Link
            to={"https://instagram.com"}
              className="hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram></FaInstagram>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} ShopSphere. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
