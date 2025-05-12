import Navbar from '../Layouts/Navbar'
import Events from '../Components/EventSlider'
import Footer from '../Layouts/Footer'
import Bg3 from '../assets/back2.webp'
import { useScrollToHash } from '../Components/useScrollToHash'

const Home: React.FC = () => {
  useScrollToHash()

  return (
    // <SmoothScroll>
      <div className="font-montserrat min-h-screen">
        <div
          className="relative min-h-screen w-full pb-40 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Bg3})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10">
            <Navbar />
            <Events />
          </div>
        </div>

        <Footer />
      </div>
    // </SmoothScroll>
  )
}

export default Home