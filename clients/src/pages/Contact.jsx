import React from 'react';
import { FaWhatsapp, FaTelegram, FaFacebook, FaTimes } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Us</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col space-y-4">
          <a
            href="https://wa.me/1234567890"
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://t.me/yourusername"
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
          >
            <FaTelegram className="text-2xl" />
            <span>Telegram</span>
          </a>
          <a
            href="https://facebook.com/yourpage"
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
          >
            <FaFacebook className="text-2xl" />
            <span>Facebook</span>
          </a>
          <a
            href="https://yourplatform.com/yourusername"
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
          >
            <FaTimes className="text-2xl" />
            <span>X</span>
          </a>
        </div>
        <div className="mt-8 text-gray-600 dark:text-gray-300">
          <p><strong>Address:</strong> 198 West 21th Street, Suite 721 New York NY 10016</p>
          <p><strong>Phone:</strong> + 1235 2355 98</p>
          <p><strong>Email:</strong> info@yoursite.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
