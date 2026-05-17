import { useState, useEffect } from 'react';
import { navItems } from '../data.js';
import profileImg from '../assets/profile.svg';
// To use your real photo: place src/assets/profile.jpg and change the import above to './assets/profile.jpg'

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav container">
        <a href="#home" className="brand">
          <img src={profileImg} alt="Ammu Kutty" className="brand-avatar" />
          <span>Ammu Kutty</span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
