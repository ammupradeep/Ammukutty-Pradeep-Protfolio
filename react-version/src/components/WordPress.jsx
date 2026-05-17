const bullets = [
  'Custom plugin development from scratch',
  'WooCommerce checkout, cart & coupon customizations',
  'Theme development & child themes',
  'REST API endpoints & third-party integrations',
  'Performance tuning, caching, security hardening',
  'Multilingual setups (WPML / Polylang)'
];

export default function WordPress() {
  return (
    <section id="wordpress" className="section wp">
      <div className="container wp-grid">
        <div>
          <p className="section-eyebrow">WordPress &amp; WooCommerce</p>
          <h2>Where I spend most of my time.</h2>
          <p>
            WordPress runs ~40% of the web for a reason — it's flexible,
            extensible, and battle-tested. I build inside it the way the
            platform intends: hooks, filters, the Settings API, custom post
            types, and clean plugin architecture that survives WP updates.
          </p>
          <ul className="check-list">
            {bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
        <div className="wp-callout">
          <h3>Currently building</h3>
          <p>
            A <strong>Smart Coupons</strong> plugin for WooCommerce —
            rule-based discounts, BOGO logic, URL-triggered coupons, and a
            clean admin UI built on the WP Settings API.
          </p>
          <span className="tag">PHP · WooCommerce · MySQL</span>
        </div>
      </div>
    </section>
  );
}
