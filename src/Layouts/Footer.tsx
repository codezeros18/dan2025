import React from 'react';
import logo from '../assets/logo.webp';
import logo1 from '../assets/logo3.png';
import { FaInstagram,FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-white py-16 min-h-[300px] flex flex-col items-center text-center space-y-8 h-auto font-poppins">
      {/* Mobile: Logos side by side */}
      <div className="flex items-center justify-center space-x-4 md:hidden">
        <img src={logo} alt="Logo 1" className="h-24 w-auto" />
        <img src={logo1} alt="Logo 2" className="h-24 w-auto" />
      </div>

      {/* Mobile: Address & Social Icons */}
      <div className="md:hidden flex flex-col items-center space-y-6">
        <p className="text-gray-600 text-sm text-center">
          Universitas Multimedia Nusantara <br />
          Jl. Scientia Boulevard, Gading Serpong <br />
          Tangerang, Banten 15811, Indonesia
        </p>
        {/* Social Icons */}
        <div className="flex space-x-6 text-xl text-gray-700">
          <a href="https://www.instagram.com/dutaantinarkoba.umn/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition-all duration-300" />
          </a>
          <a href="mailto:dutaantinarkoba@umn.ac.id">
            <FaEnvelope className="hover:text-red-500 transition-all duration-300" />
          </a>
        </div>
      </div>

      {/* Desktop: Grid layout for larger screens */}
      <div className="hidden md:grid grid-cols-3 items-center w-full max-w-6xl px-10">
        {/* Left Logo */}
        <div className="flex justify-start">
          <img src={logo} alt="Logo 1" className="h-28 w-auto" />
        </div>

        {/* Centered Address and Social Icons */}
        <div className="flex flex-col items-center space-y-6">
          <p className="text-gray-600 text-sm text-center">
            Universitas Multimedia Nusantara <br />
            Jl. Scientia Boulevard, Gading Serpong <br />
            Tangerang, Banten 15811, Indonesia
          </p>
          {/* Social Icons */}
          <div className="flex space-x-6 text-xl text-gray-700">
            <a href="https://www.instagram.com/dutaantinarkoba.umn/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition-all duration-300" />
            </a>
            <a href="mailto:dutaantinarkoba@umn.ac.id">
              <FaEnvelope className="hover:text-red-500 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex justify-end">
          <img src={logo1} alt="Logo 2" className="h-28 w-auto" />
        </div>
      </div>

      {/* Copyright (always visible) */}
      <p className="text-[12px] mt-6">© 2025 DUTA ANTI NARKOBA UMN All Rights Reserved</p>
    </div>
  );
};

export default Footer;
