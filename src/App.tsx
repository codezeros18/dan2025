import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Proker from './Pages/Proker';
import ScrollToTop from './Components/ScrollToTop';
import { useState, useEffect } from 'react';
import Loader from './Components/LoadingScreen'; // import loader component
import CinematicBG from './Components/CinematicBG';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // adjust duration if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Router>
          <ScrollToTop />
                <CinematicBG /> {/* GLOBAL */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/proker" element={<Proker />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
