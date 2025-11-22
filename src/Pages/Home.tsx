import Navbar from "../Layouts/Navbar";
import Header from "../ComponentHome/Header";
import AboutDANFinal from "../ComponentHome/AboutDAN";
import VideoPage from "../ComponentHome/VideoPage";
import MediaPartner from "../Components/MediaPartner";
import Sponsor from "../Components/Sponsor";
import Footer from "../Layouts/Footer";

const Home: React.FC = () => {
  return (
    <div className="font-josefin overflow-x-hidden relative">

      <Navbar />
      <Header />
      <AboutDANFinal />
      <VideoPage />
      <Sponsor />
      <MediaPartner />
      <Footer />

    </div>
  );
};

export default Home;
