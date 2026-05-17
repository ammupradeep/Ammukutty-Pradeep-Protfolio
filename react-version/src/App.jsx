import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import WordPress from './components/WordPress.jsx';
import AITools from './components/AITools.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll('.section, .hero-text, .hero-image-wrap')
      .forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <WordPress />
        <AITools />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
