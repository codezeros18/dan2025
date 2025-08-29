import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import HeaderLayout from '../Layouts/Header'
import { useScrollToHash } from '../Components/useScrollToHash'
import Event from '../Components/Event'

const Home: React.FC = () => {
  useScrollToHash()

  return (
    // <SmoothScroll>
<div className="font-josefin">
        <Navbar />
        <HeaderLayout variant="countdown" />
        <Event />
        <Footer />
      </div>
    // </SmoothScroll>
  )
}

export default Home