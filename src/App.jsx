import React from 'react';
import {  FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot, FaLinkedin } from "react-icons/fa6"
import { IoMail } from 'react-icons/io5';
import { IoLogoWhatsapp } from "react-icons/io";
import profile from '../src/assets/Profile.jpg';
import qrcode from '../src/assets/qrcode.png';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-8 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 sm:w-96 md:w-1/2">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <img 
            src={profile} 
            alt="Profile" 
            className="rounded-full w-48 h-48 mb-4 border-4 border-gray-300 shadow-md object-cover"
          />

          {/* Name */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">VELMURUGAN M</h1>
          <h1 className="text-lg font-semibold text-gray-500 mb-2">Founder and CEO</h1>

          {/* Social Links and Contact Info */}
          <div className="space-y-3 font-medium text-lg">
            {/* Email */}
            <div className="flex items-center  space-x-2">
              <IoMail className="text-red-600 " />
              <a href="mailto:hertzworkspvt@gmail.com" className="text-red-600 ">hertzworkspvt@gmail.com</a>
            </div>
            {/* Phone */}
            <div className="flex items-center  space-x-2">
              <FaPhoneAlt className="text-yellow-400 text-lg" />
              <a href="tel:+916383538529" className="text-yellow-400 ">+91 6383538529</a>
            </div>
            {/* Location */}
            <div className="flex items-center  space-x-2">
              <FaLocationDot className="text-green-600 text-lg" />
              <a
                href="https://maps.app.goo.gl/BX68gq2LQsymC1Cc9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600  text-sm"
              >
                BLOCK-C, IITM RESEARCH PARK,<br/> Kanagam,Tharamani, Chennai, TamilNadu-600113
              </a>
            </div>
            <div className="flex justify-center space-x-6 mb-4 mt-4">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/velmurugan-m-b00859217"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 "
            >
              <FaLinkedin className="text-3xl" />
            </a>
            {/* WhatsApp */}
            <a 
              href="https://wa.me/6383538529" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-500 hover:text-green-600"
            >
              <IoLogoWhatsapp className="text-3xl" />
            </a>
          </div>
          </div>

          {/* Map Embed */}
          <div className="mt-6">
            <img src={qrcode} alt='qrCode' className='max-h-56 max-w-56'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
