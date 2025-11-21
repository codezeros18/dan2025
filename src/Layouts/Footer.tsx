import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo/logo6.webp";
import logo2 from "../assets/logo/logo3.webp";

const FooterLight: React.FC = () => {
  return (
    <footer className="relative w-full py-20 px-8 bg-gradient-to-b from-[#FFFFFF] via-[#F3F6FF] to-[#E7EDFF] overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-20">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">

          {/* Left Logo */}
          <img src={logo} className="w-28 md:w-32" />

          {/* Center Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Contact & Address
            </h4>

            <p className="text-sm text-gray-600 leading-relaxed">
              Universitas Multimedia Nusantara <br />
              Jl. Scientia Boulevard, Gading Serpong <br />
              Tangerang, Banten 15811, Indonesia
            </p>

            <div className="flex justify-center gap-6 text-xl mt-5 text-gray-600">
              <a
                href="https://www.instagram.com/dutaantinarkoba.umn/"
                className="hover:text-black transition"
              >
                <FaInstagram />
              </a>
              <a href="mailto:dutaantinarkoba@umn.ac.id" className="hover:text-black transition">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Logo */}
          <img src={logo2} className="w-28 md:w-32" />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/10 my-6"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-600">
          © 2025 DUTA ANTI NARKOBA UMN — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterLight;
