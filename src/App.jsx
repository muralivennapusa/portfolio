import { useState, useEffect } from 'react';
import TopNavbar from './components/TopNavbar';
import About from './components/About';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Footer from './components/Footer';
import AOS from 'aos';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);



  return (
    <div className="app">
      <TopNavbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <About /> {/* Fullscreen on its own */}
      <Projects />
      <div className="main-content">
      </div>
        <Socials />
        <Footer />
    </div>
  );
}

export default App;