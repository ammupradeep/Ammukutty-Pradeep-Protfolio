import { facts } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section-eyebrow">About</p>
        <h2>A backend-leaning developer who ships.</h2>
        <div className="about-grid">
          <div>
            <p>
              For the last three-plus years I've been building things on the
              LAMP stack — mostly WordPress, WooCommerce and custom PHP — for
              clients who care about reliability over hype. My day-to-day is
              a mix of plugin development, theme customization, REST APIs,
              and fixing the kind of bugs that only surface in production.
            </p>
            <p>
              Outside of PHP, I write Python for automation and small
              data-processing scripts, and I picked up Java in college, so
              jumping into OOP-heavy codebases doesn't scare me.
            </p>
            <p>
              I also use AI tools (ChatGPT, Claude, Copilot, Cursor) every
              single day — for boilerplate, code review, debugging weird
              regex, and rubber-ducking architecture. It's part of how I
              ship.
            </p>
          </div>
          <aside className="about-card">
            <h3>Quick facts</h3>
            <dl>
              {facts.map(([k, v]) => (
                <FactRow key={k} k={k} v={v} />
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FactRow({ k, v }) {
  return (
    <>
      <dt>{k}</dt>
      <dd>{v}</dd>
    </>
  );
}
