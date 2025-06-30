import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="social-icons">
        <a href="https://github.com/muralivennapusa" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/vennapusa-murali" target="_blank"><FaLinkedin /></a>
        <a href="https://twitter.com/muralireddyon" target="_blank"><FaTwitter /></a>
      </div>
      <h4><u>P.S:</u>  GGs</h4>
      <p>from Murali Vennapusa</p>
    </footer>
  );
}
