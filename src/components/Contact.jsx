import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-100 ">
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-lg max-w-sm mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact us</h2>
        <p className="text-gray-600 text-center mb-4">
          Let's connect! Feel free to reach out.
        </p>

        <div className="flex space-x-6 mb-6">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-xl hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Mary-Gichana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-xl hover:text-gray-900 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:marygichana95@gmail.com"
            className="text-red-500 text-xl hover:text-red-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="w-full text-center text-gray-700">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaPhoneAlt className="text-green-500" />
            <span className="text-lg">+ 254 7 5879-4309</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FaMapMarkerAlt className="text-gray-700" />
            <span className="text-lg">Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
