export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Ammu Kutty Pradeep — Built with React + Vite.</p>
        <a href="#home" className="to-top">Back to top ↑</a>
      </div>
    </footer>
  );
}
