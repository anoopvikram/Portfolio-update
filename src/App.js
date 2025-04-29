import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Intro from "./pages/Intro"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import Loading from './components/Loading';
import { useEffect,useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  //Loading screen

  useEffect(() => {
    const imagesToPreload = [
      "/assets/artist.png",
      "/assets/bg.png",
      "/assets/cafe.png",
      "/assets/coder.png",
      "/assets/coder-Copy.png",
      "/assets/intro-bg.png",
      "/assets/moveit.png",
      "/assets/movie.png",
      "/assets/phone-bg.jng",
      "/assets/proj-bg.png",
      "/assets/proj-bg-phone.png",
      "/assets/tindog.png",
    ];
    

    let loadedCount = 0;
    let timerDone = false;

    const checkIfDone = () => {
      if (timerDone && loadedCount === imagesToPreload.length) {
        setLoading(false);
        console.log("All images loaded & timer done.");
      }
    };

    // Preload images
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        checkIfDone();
      };
      img.onerror = () => {
        console.error(`Failed to load: ${src}`);
        loadedCount++;
        checkIfDone();
      };
    });

    // Timer for 3 seconds
    const timer = setTimeout(() => {
      timerDone = true;
      // If no images or all loaded already, hide loading
      if (loadedCount === imagesToPreload.length) {
        setLoading(false);
        console.log(loadedCount);
      }
    }, 1800);

    // Clean up if component unmounts
    return () => clearTimeout(timer);
  }, []);

return (
  <>
    {loading ? (
      <Loading />
    ) : (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/intro" element={<Intro/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
