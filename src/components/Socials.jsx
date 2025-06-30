import './Socials.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Socials() {
  return (
    <section id="socials" className="socials-section" data-aos="fade-up">
      <h2 className="socials-title">Trails of Me ...</h2>
      <div className="socials-grid">
        <a
          href="https://github.com/muralivennapusa"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <FaGithub className="social-icon" />
          <h3>GitHub</h3>
          <p>Check out my open source projects and contributions</p>
        </a>

        <a
          href="https://linkedin.com/in/vennapusa-murali"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <FaLinkedin className="social-icon" />
          <h3>LinkedIn</h3>
          <p>Connect with me professionally and explore my work experience</p>
        </a>

        <a
          href="https://twitter.com/muralireddyon"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <FaXTwitter className="social-icon" />
          <h3>X (Twitter)</h3>
          <p>Follow me for random banter and hobbies</p>
        </a>
      </div>
    </section>
  );
}
