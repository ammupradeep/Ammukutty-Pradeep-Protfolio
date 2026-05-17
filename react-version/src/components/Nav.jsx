import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data.js';
import profileImg from '../assets/profile.svg';
// Swap to './assets/profile.jpg' once you've dropped your photo in.

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <nav className="nav container">
        <NavLink to="/" end className="brand">
          <img src={profileImg} alt="Ammu Kutty" className="brand-avatar" />
          <span>Ammu Kutty</span>
        </NavLink>
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
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.end}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {n.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
