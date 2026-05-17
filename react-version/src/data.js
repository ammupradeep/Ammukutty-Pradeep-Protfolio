export const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/wordpress', label: 'WordPress' },
  { to: '/ai-workflow', label: 'AI Workflow' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' }
];

export const stats = [
  { value: '3+', label: 'Years building with PHP' },
  { value: '20+', label: 'WordPress & WooCommerce sites' },
  { value: 'AI', label: 'Assisted dev workflow' }
];

export const skills = [
  { name: 'PHP & WordPress', level: 92, blurb: 'Custom plugins, themes, hooks, REST API, WP-CLI, WooCommerce extensions.' },
  { name: 'MySQL & Databases', level: 80, blurb: 'Schema design, query optimization, custom tables for plugins.' },
  { name: 'Python', level: 72, blurb: 'Automation scripts, scraping, small Flask APIs, data wrangling.' },
  { name: 'Java', level: 65, blurb: 'OOP fundamentals, college projects, comfortable reading Java codebases.' },
  { name: 'JavaScript', level: 70, blurb: 'Vanilla JS, jQuery for WP, dipping into React for modern UIs.' },
  { name: 'AI Tooling', level: 88, blurb: 'Daily use of ChatGPT, Claude, Cursor & Copilot for shipping faster.' }
];

export const aiSteps = [
  { num: '01', title: 'Boilerplate & scaffolding', body: "Plugin headers, settings pages, REST routes — anything I've written ten times." },
  { num: '02', title: 'Debugging & rubber-ducking', body: 'Pasting in stack traces, weird WP behavior, or asking "why is this hook running twice?"' },
  { num: '03', title: 'Code review', body: 'A second pair of eyes on every PR — naming, security, edge cases.' },
  { num: '04', title: 'Learning faster', body: 'Picking up new APIs, libraries and patterns without losing a day to docs.' }
];

export const projects = [
  {
    tag: 'WordPress · WooCommerce',
    title: 'Smart Coupons for WooCommerce',
    desc: 'Rule-based coupon engine — BOGO, cart-condition, URL-triggered discounts, with a clean admin UI.',
    stack: 'PHP · MySQL · WP Settings API'
  },
  {
    tag: 'WordPress Plugin',
    title: 'Custom Booking System',
    desc: 'Appointment booking plugin with availability rules, email confirmations and admin calendar.',
    stack: 'PHP · jQuery · MySQL'
  },
  {
    tag: 'Python',
    title: 'Content Automation Script',
    desc: 'Pulls structured data from multiple sources and pushes formatted content into WP via REST.',
    stack: 'Python · WP REST API'
  },
  {
    tag: 'Theme Development',
    title: 'Custom Business Theme',
    desc: 'Built-from-scratch theme with ACF-powered blocks, optimized for Core Web Vitals.',
    stack: 'PHP · ACF · SCSS'
  }
];

export const facts = [
  ['Role', 'PHP / WordPress Developer'],
  ['Experience', '3+ years'],
  ['Core stack', 'PHP, WordPress, WooCommerce, MySQL'],
  ['Also writes', 'Python, Java, JavaScript'],
  ['AI tooling', 'ChatGPT, Claude, Cursor, Copilot'],
  ['Open to', 'Remote & full-time roles']
];
