import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section not-found">
      <div className="container contact-inner" style={{ textAlign: 'center' }}>
        <p className="section-eyebrow">404</p>
        <h2>Page not found.</h2>
        <p>That route doesn't exist on this site.</p>
        <Link to="/" className="btn btn-primary big">Back to home</Link>
      </div>
    </section>
  );
}
