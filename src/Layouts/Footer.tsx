import React from 'react';
import logo from '../assets/logo.webp';
import logo1 from '../assets/logo3.png';
import { FaInstagram,FaEnvelope } from "react-icons/fa";

import MP1 from '../assets/mediapartner/MP1.webp'
import MP2 from '../assets/mediapartner/MP2.webp'
import MP3 from '../assets/mediapartner/MP3.webp'
import MP4 from '../assets/mediapartner/MP4.webp'
import MP5 from '../assets/mediapartner/MP5.webp'
import MP6 from '../assets/mediapartner/MP6.webp'
import MP7 from '../assets/mediapartner/MP7.webp'
import MP8 from '../assets/mediapartner/MP8.webp'
import MP9 from '../assets/mediapartner/MP9.webp'
import MP10 from '../assets/mediapartner/MP10.webp'
import MP11 from '../assets/mediapartner/MP11.webp'
import MP12 from '../assets/mediapartner/MP12.webp'
import MP13 from '../assets/mediapartner/MP13.webp'
import MP14 from '../assets/mediapartner/MP14.webp'
import MP15 from '../assets/mediapartner/MP15.webp'
import MP16 from '../assets/mediapartner/MP16.webp'
import MP17 from '../assets/mediapartner/MP17.webp'
import MP18 from '../assets/mediapartner/MP18.webp'
import MP19 from '../assets/mediapartner/MP19.webp'
import MP20 from '../assets/mediapartner/MP20.webp'
import MP21 from '../assets/mediapartner/MP21.webp'
import MP22 from '../assets/mediapartner/MP22.webp'



const Footer: React.FC = () => {
  const partnerLogos = [
    MP1, MP2, MP3, MP4, MP5, MP6, MP7, MP8, MP9, MP10, MP11, MP12, MP13, MP14, MP15, MP16, MP17, MP18, MP19, MP20, MP21, MP22
  ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 py-12">
      {/* Mobile: Logos side by side */}
      <div className="flex items-center justify-center space-x-4 md:hidden">
        <img src={logo} alt="Logo 1" className="h-24 w-auto" />
        <img src={logo1} alt="Logo 2" className="h-24 w-auto" />
      </div>

      {/* Mobile: Address & Social Icons */}
      <div className="md:hidden flex flex-col items-center space-y-6 mt-10 px-4">
        <h4 className="text-lg font-semibold mb-2">Contact & Address</h4>
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
      <div className="hidden md:grid grid-cols-3 items-center w-full max-w-xxl px-10">
        {/* Left Logo */}
        <div className="flex justify-start">
          <img src={logo} alt="Logo 1" className="h-28 w-auto" />
        </div>

        {/* Centered Address and Social Icons */}
        <div className="flex flex-col items-center space-y-6">
          <h4 className="text-lg font-semibold mb-2">Contact & Address</h4>
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


      {/* Media Partner Show */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mt-6">
          <span className="inline-block text-4xl md:text-5xl px-6 py-2 mt-10 mb-5 font-black text-orange-400 [text-shadow:_2px_2px_0_rgb(255_255_2225),_4px_4px_0_rgb(234_88_12)]">
            Media Partner
          </span>
        </div>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-8 px-4">
          {partnerLogos.map((src, idx) => (
            <img key={idx} src={src} alt={`Media Partner ${idx + 1}`} className="h-16 md:h-20 object-contain" loading="lazy" />
          ))}
        </div>
        <br />
        <p className="text-[13px] mt-6">© 2025 DUTA ANTI NARKOBA UMN All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
