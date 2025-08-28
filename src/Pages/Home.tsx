import Navbar from '../Layouts/Navbar'
import Header from '../Components/Header'
import AboutDAN from '../Components/AboutDAN'
import VideoPage from '../Components/VideoPage'
import Footer from '../Layouts/Footer'

const Home: React.FC = () => {

  return (
    // <SmoothScroll>
      <div className="font-josefin">
        <Navbar />
        <Header />
        <AboutDAN />
        <VideoPage />
        <Footer />
      </div>
      // <div className="font-montserrat min-h-screen">
      //   {/* === Fixed Navbar === */}
      //   <div className="fixed top-10 left-0 w-full z-50">
      //     <Navbar />
      //   </div>

      //   {/* === HERO Section with Video === */}
      //   <div className="relative min-h-screen w-full">
      //     {/* Background Video */}
      //     <video
      //       className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      //       src={Vid}
      //       autoPlay
      //       loop
      //       muted
      //       playsInline
      //     />
          
      //     {/* Dark Overlay */}
      //     <div className="absolute inset-0 bg-black opacity-70" />

      //     {/* Content over video */}
      //     <div className="relative z-10 pt-20"> {/* pt-20 = padding for fixed navbar */}
      //       <Header />
      //     </div>
      //   </div>

      //   {/* === BG IMAGE Section === */}
      //   <div
      //     className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      //     style={{ backgroundImage: `url(${Bg3})` }}
      //   >
      //     <div className="absolute inset-0 bg-black opacity-50" />
      //     <div className="relative z-10 py-20">
      //       <Dunar />
      //     </div>
      //   </div>

      //   {/* === Other Sections === */}
      //   <div className="relative z-10">
      //     <Events />
      //   </div>
      //   <div
      //     className="relative h-[40vh] w-full bg-cover bg-center bg-no-repeat"
      //     style={{ backgroundImage: `url(${Bg3})` }}
      //   >
      //     <div className="absolute inset-0 bg-black opacity-50" />
      //     <div className="relative z-10 py-20">
      //       <Sponsor />
      //     </div>
      //   </div>
      //   <div className="relative z-10">
      //     <Footer />
      //   </div>
      
      // </div>

    // </SmoothScroll>
  )
}

export default Home
