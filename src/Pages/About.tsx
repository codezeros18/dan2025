// src/Pages/About.tsx
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import HeaderLayout from "../Layouts/Header";

import AboutWrapper from "../Components/AboutWrapper";
import AboutUsDAN from "../ComponentAbout/AboutUsDAN";
import Division from "../Components/Division";

const About: React.FC = () => {
  return (
    <div className="font-josefin">
      <Navbar />
      <HeaderLayout variant="faq" />

      {/* Cinematic background ONLY inside AboutWrapper */}
      <AboutWrapper>
        <AboutUsDAN />
        <Division />
      </AboutWrapper>

      <Footer />
    </div>
  );
};

export default About;
