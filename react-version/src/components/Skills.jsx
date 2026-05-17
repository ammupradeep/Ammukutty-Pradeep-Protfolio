import { skills } from '../data.js';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-eyebrow">Skills</p>
        <h2>What I work with.</h2>
        <div className="skill-grid">
          {skills.map((s) => (
            <article key={s.name} className="skill-card">
              <h3>{s.name}</h3>
              <p>{s.blurb}</p>
              <div className="bar"><span style={{ width: `${s.level}%` }} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
