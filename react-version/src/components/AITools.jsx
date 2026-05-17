import { aiSteps } from '../data.js';

export default function AITools() {
  return (
    <section id="ai-tools" className="section ai-tools">
      <div className="container">
        <p className="section-eyebrow">AI Workflow</p>
        <h2>How AI fits into my day.</h2>
        <p className="lead-sm">
          I treat AI tools the same way I treat my IDE — they're part of the
          workbench, not the work. Here's roughly how it breaks down.
        </p>
        <div className="ai-grid">
          {aiSteps.map((s) => (
            <div key={s.num} className="ai-card">
              <span className="ai-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
