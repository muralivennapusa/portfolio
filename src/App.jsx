import { useState, useEffect } from 'react';
import TopNavbar from './components/TopNavbar';
import About from './components/About';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Footer from './components/Footer';
import Starfield from './components/Starfield';
import AOS from 'aos';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className="app">
      <Starfield darkMode={darkMode} />
      <TopNavbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <About />
      <Projects />
      <Socials />
      <Footer />
    </div>
  );
}



export default App;
