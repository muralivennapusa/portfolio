import { Typewriter } from 'react-simple-typewriter';
import profile from '../assets/profile.jpg';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-fullscreen">
      <div className="about-inner">
        <img src={profile} alt="Profile" className="profile-banner-img" />
        <div className="about-text-content">
          {/* <h3>I'm</h3> */}
          <h1 className="name">Murali Vennapusa</h1>
          <h3 className="epithets">
            <Typewriter
              words={['Web Developer', 'Tech Enthusiast', 'Creative Coder', 'Expert-Level Typist']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          <p className="description">
            Living in the Internet where Several Stories are told and even more being written. 
          </p>
          {/* <p className="description">
            I code and script in python, Play High Resolution games that can probably burn a graphics card and read plenty of graphic novels, which is a sophesticated way of saying comics. 
          </p>
          <p className="description">  
            I'm intrigued by tech and everything to do with it and that's how I got here.            
          </p> */}
        </div>
      </div>
    </section>
  );
}
