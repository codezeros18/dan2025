import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import HeaderLayout from '../Layouts/Header'
import AboutUsDAN from '../ComponentAbout/AboutUsDAN'
import Division from '../Components/Division'

const About: React.FC = () => {

  return (
    // <SmoothScroll>
      <div className="font-josefin">
        <Navbar />
        <HeaderLayout variant="faq" />
        <AboutUsDAN />
        <Division />
        <Footer />
      </div>
    // </SmoothScroll>
  )
}

export default About
