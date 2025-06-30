import './TopNavbar.css';
import { Moon, Sun } from 'lucide-react';

export default function TopNavbar({ darkMode, toggleDarkMode }) {
  return (
    <header className="top-navbar">
      <div className="nav-left">
        <a href="#" className="logo">Murali Vennapusa</a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#socials">Socials</a>
        </nav>
      </div>

      <div className="theme-toggle">
        <button onClick={toggleDarkMode} className="theme-icon-btn" aria-label="Toggle Theme">
          {darkMode ? <Moon size={22} /> : <Sun size={22} />}
        </button>
      </div>
    </header>
  );
}
