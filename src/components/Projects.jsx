import React from 'react';
import Slider from 'react-slick';
import './Projects.css';

const projects = [
{
  title: 'Portfolio Website',
  description: 'Personal portfolio built using React and Vite.',
  link: 'https://github.com/muralivennapusa/portfolio'
},
{
  title: 'UniLang',
  description: 'Multilingual NLP system that answers user queries.',
  link: 'https://github.com/muralivennapusa/UniLang'
},
{
  title: 'Project Citizen',
  description: 'Cybercrime case classifier with citizen complaint support.',
  link: 'https://github.com/muralivennapusa/Cyber-Project-v2'
},
{
  title: 'Mirus',
  description: 'VirusTotal API-based link and file scanner.',
  link: 'https://github.com/muralivennapusa/Mirus'
},
{
  title: 'Manga Gari',
  description: 'Web scraper that extracts comics and converts to PDFs.',
  link: 'https://github.com/muralivennapusa/Manga-Gari'
},
{
  title: 'Project OnePiece',
  description: 'Scrapes episode summaries and converts them to audio.',
  link: 'https://github.com/muralivennapusa/Project-OnePiece'
},
{
  title: 'Project Emo',
  description: 'Emotion analyzer for rapid police situation insight.',
  link: '#'
},
{
  title: 'Fav Chars',
  description: 'Tribute site for all my favorite fictional characters.',
  link: 'https://fav-chars.vercel.app'
},


  // Add more projects here...
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <h2 className="projects-title">Works of Mine ...</h2>
      <Slider {...settings}>
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Take me to View</a>
          </div>
        ))}
      </Slider>
    </section>
  );
}
