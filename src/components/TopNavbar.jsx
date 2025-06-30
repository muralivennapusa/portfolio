import './TopNavbar.css';

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
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
          <span className="slider round"></span>
        </label>
          <span className="theme-label">{darkMode ? '  🌙 Dark    ' : '  🌙 Dark    '}</span>
      </div>
    </header>
  );
}
