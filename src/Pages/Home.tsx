import Navbar from '../Layouts/Navbar'
import Header from '../Components/Header'
import Events from '../Components/Events'
import Footer from '../Layouts/Footer'
import Dunar from '../Components/Dunar'
import Bg3 from '../assets/back2.webp'
import Vid from '../assets/vid1.mp4'

const Home: React.FC = () => {

  return (
    // <SmoothScroll>
      <div className="font-montserrat min-h-screen">
        <div className="relative min-h-screen w-full pb-40">
          <video
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src={Vid} // Replace with the actual path to your video
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black opacity-70" />
          <div className="relative z-10">
            <Navbar />
            <Header />
          </div>
        </div>
        <div
          className="relative min-h-screen w-full pb-40 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Bg3})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10">
            <Dunar />
          </div>
        </div>
        <Events />
        <Footer />
      </div>
    // </SmoothScroll>
  )
}

export default Home
