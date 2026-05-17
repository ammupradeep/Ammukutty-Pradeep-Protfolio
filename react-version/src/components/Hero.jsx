import { Link } from 'react-router-dom';
import { stats } from '../data.js';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Well, hi there.</p>
          <h1>
            I'm <span className="accent">Ammukutty Pradeep</span>.
          </h1>
          <p className="lead">
            I'm a PHP &amp; WordPress developer with <strong>3+ years</strong> of
            hands-on experience shipping plugins, custom themes, and
            WooCommerce stores. I also write Python and Java, and I lean
            heavily on AI platforms to move faster every day.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">See my work</Link>
            <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
          </div>
          <ul className="hero-stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image-frame">
            <img src={profileImg} alt="Portrait of Ammukutty Pradeep" />
          </div>
          <div className="floating-chip chip-1">PHP</div>
          <div className="floating-chip chip-2">WordPress</div>
          <div className="floating-chip chip-3">Python</div>
          <div className="floating-chip chip-4">Java</div>
        </div>
      </div>
    </section>
  );
}
