import { projects } from '../data.js';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section-eyebrow">Selected work</p>
        <h2>Things I've shipped.</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <div className="project-tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="project-stack">{p.stack}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
