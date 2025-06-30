import React from 'react';
import Slider from 'react-slick';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Vite.',
    link: 'https://github.com/muralivennapusa/portfolio'
  },
  {
    title: 'UniLang',
    description: 'Multilingual NLP that addresses queries.',
    link: 'https://github.com/muralivennapusa/UniLang'
  },
  {
    title: 'Project Citizen',
    description: 'Cybercrime Case classifier that can be accessed by citizens and complaint registration.',
    link: 'https://github.com/muralivennapusa/Cyber-Project-v2'
  },
  {
    title: 'Mirus',
    description: 'Virus Total API powered link and file analyzer.',
    link: 'https://github.com/muralivennapusa/Mirus'
  },
  {
    title: 'Manga Gari',
    description: 'Web Scraping Program to scrape graphic novels or comics from websites and make PDFs.',
    link: 'https://github.com/muralivennapusa/Manga-Gari'
  },
  {
    title: 'Project OnePiece',
    description: 'Web Scraping program to extract episode summary and make it into an audio to listen on the go.',
    link: 'https://github.com/muralivennapusa/Project-OnePiece'
  },
  {
    title: 'Project Emo',
    description: 'Emotion analyzer for quick situation assessment for police department.',
    link: '#'
  },
  {
    title: 'Fav Chars',
    description: 'Tribute page to all my Favourite Fictitonal Characters.',
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
