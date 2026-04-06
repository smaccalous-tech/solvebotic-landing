export default function Home() {
  const arrow = '\u2192';
  const dash = '\u2014';
  const dot = '\u00B7';
  const copy = '\u00A9';
  const star = '\u2605';
  const check = '\u2713';
  const lq = '\u201C';
  const rq = '\u201D';

  const stats = [
    { num: "< 2s", label: "Avg. response time" },
    { num: "7+", label: "Platforms" },
    { num: "95%", label: "Auto-resolution" },
    { num: "24/7", label: "Always on" },
  ];

  const platforms = [
    { name: "Shopify", live: true },
    { name: "WooCommerce", live: false },
    { name: "ClickBank", live: false },
    { name: "Digistore24", live: false },
    { name: "Konnektive", live: false },
    { name: "BuyGoods", live: false },
    { name: "CartPanda", live: false },
  ];

  const steps = [
    { num: "Step 01", icon: "🔌", title: "Connect your store", desc: "Link your Shopify (or any supported platform) in one click. No code, no installs, no waiting." },
    { num: "Step 02", icon: "🤖", title: "AI handles support", desc: "Customers get instant, accurate answers to order questions, status updates, and tracking automatically." },
    { num: "Step 03", icon: "🎯", title: "You stay in control", desc: "Complex issues are escalated to your team with full context attached. You only see what needs a human." },
  ];

  const features = [
    { icon: "🤖", title: "AI Classification", desc: "Gemini AI reads every request, classifies it by intent and confidence, and routes it instantly." },
    { icon: "📦", title: "Order Lookup", desc: "Customers self-serve order status and tracking without ever contacting your team." },
    { icon: "⚡", title: "Smart Escalation", desc: "Refunds, damage claims, and edge cases are escalated automatically with full conversation context." },
    { icon: "🔌", title: "Multi-Platform", desc: "One unified dashboard for Shopify, WooCommerce, ClickBank, and every platform you sell on." },
    { icon: "📊", title: "Live Dashboard", desc: "Monitor requests, escalations, intent breakdowns, and resolution rates in real time." },
    { icon: "💬", title: "Embeddable Widget", desc: "A sleek floating chat widget lives directly on your store. Fully branded, fully yours." },
  ];

  const testimonials = [
    {
      quote: "We cut our support response time from 6 hours to under 2 seconds. Our team now only handles the truly complex stuff.",
      name: "Marcus T.", title: "Founder, DTC Supplement Brand",
      color: "linear-gradient(135deg, #1B3A8C, #4361EE)", initials: "MT",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "Setup took 8 minutes. Literally. It connected to Shopify and started handling order questions the same day.",
      name: "Priya K.", title: "Head of Ops, Home Goods Store",
      color: "linear-gradient(135deg, #0077CC, #00AAFF)", initials: "PK",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "I was skeptical about AI support, but the escalation logic is smart. Real issues get to us fast, noise gets handled automatically.",
      name: "Jordan M.", title: "CX Lead, Apparel Brand",
      color: "linear-gradient(135deg, #1B3A8C, #00AAFF)", initials: "JM",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    },
  ];

  const plans = [
    { name: "Starter", price: "$49", period: "/mo", desc: "Perfect for small stores just getting started with AI support.", features: ["1 brand", "500 AI responses/mo", "Order lookup", "Email escalation", "Dashboard access"], cta: "Get Started", href: "https://app.solvebotic.com/onboarding", featured: false },
    { name: "Pro", price: "$99", period: "/mo", desc: "For growing brands that need more volume and platform flexibility.", features: ["3 brands", "2,000 AI responses/mo", "All platforms", "Priority escalation", "Real-time dashboard", "Shopify sync"], cta: "Get Started", href: "https://app.solvebotic.com/onboarding", featured: true },
    { name: "Enterprise", price: "Custom", period: "", desc: "For large operations that need custom solutions and dedicated support.", features: ["Unlimited brands", "Unlimited responses", "All platforms", "Dedicated support", "Custom integrations", "SLA guarantee"], cta: "Contact Us", href: "mailto:support@solvebotic.com", featured: false },
  ];

  const tickerItems = [
    "Order status handled automatically", "Zero missed support tickets", "Shopify-native integration",
    "Refund requests auto-escalated", "24/7 AI coverage", "Instant responses at scale",
    "Multi-platform in one dashboard", "No dev team required",
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #060A18;
          --bg2: #0A1020;
          --bg3: #0D1428;
          --surface: rgba(255,255,255,0.04);
          --surface2: rgba(255,255,255,0.07);
          --border: rgba(0,170,255,0.12);
          --border2: rgba(0,170,255,0.25);
          --accent: #0077CC;
          --accent2: #00AAFF;
          --accent-dark: #1B3A8C;
          --accent-dim: rgba(0,119,204,0.15);
          --accent-border: rgba(0,170,255,0.3);
          --text: #E8F4FF;
          --text2: #8BA8C8;
          --text3: #4A6480;
          --glow: rgba(0,170,255,0.4);
        }
        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }
        h1, h2, h3, h4 { font-family: 'Plus Jakarta Sans', sans-serif; }
        .content { position: relative; z-index: 1; }

        /* ── CIRCUIT BACKGROUND ── */
        .circuit-bg {
          position: fixed; inset: 0; z-index: 0;
          pointer-events: none; overflow: hidden;
        }
        .circuit-svg {
          width: 100%; height: 100%;
          opacity: 0.18;
        }
        .circuit-line {
          fill: none;
          stroke: #00AAFF;
          stroke-width: 1;
        }
        .circuit-node {
          fill: #00AAFF;
        }
        .pulse-dot {
          fill: #00AAFF;
          filter: drop-shadow(0 0 4px #00AAFF);
        }

        /* Animated current pulses along circuit paths */
        @keyframes flow1 { 0% { offset-distance: 0%; opacity: 0; } 5% { opacity: 1; } 95% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
        @keyframes flow2 { 0% { offset-distance: 0%; opacity: 0; } 5% { opacity: 1; } 95% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
        @keyframes flow3 { 0% { offset-distance: 0%; opacity: 0; } 5% { opacity: 1; } 95% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
        @keyframes nodePulse { 0%,100% { r: 3; opacity: 0.6; } 50% { r: 5; opacity: 1; } }
        @keyframes glowPulse { 0%,100% { opacity: 0.15; } 50% { opacity: 0.35; } }

        .circuit-pulse-1 {
          offset-path: path('M 100 80 L 300 80 L 300 200 L 500 200 L 500 80 L 700 80');
          offset-rotate: 0deg;
          animation: flow1 4s ease-in-out infinite;
          animation-delay: 0s;
        }
        .circuit-pulse-2 {
          offset-path: path('M 200 300 L 400 300 L 400 180 L 600 180 L 600 300 L 800 300 L 800 150');
          offset-rotate: 0deg;
          animation: flow2 5s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .circuit-pulse-3 {
          offset-path: path('M 50 500 L 250 500 L 250 380 L 450 380 L 450 500 L 650 500 L 650 380 L 900 380');
          offset-rotate: 0deg;
          animation: flow3 6s ease-in-out infinite;
          animation-delay: 0.8s;
        }
        .circuit-pulse-4 {
          offset-path: path('M 150 650 L 350 650 L 350 550 L 550 550 L 550 650 L 750 650');
          offset-rotate: 0deg;
          animation: flow1 4.5s ease-in-out infinite;
          animation-delay: 2.2s;
        }
        .circuit-pulse-5 {
          offset-path: path('M 0 750 L 200 750 L 200 620 L 400 620 L 400 750 L 600 750 L 600 620 L 850 620');
          offset-rotate: 0deg;
          animation: flow2 7s ease-in-out infinite;
          animation-delay: 3s;
        }
        .circuit-node-anim { animation: nodePulse 3s ease-in-out infinite; }
        .circuit-glow { animation: glowPulse 4s ease-in-out infinite; }

        /* ── NAV ── */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 52px; height: 66px;
          background: rgba(6,10,24,0.88);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo { display: flex; align-items: center; text-decoration: none; }
        .nav-logo img { height: 42px; object-fit: contain; }
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-links a { color: var(--text2); font-size: 14px; text-decoration: none; transition: color 0.2s; font-weight: 500; }
        .nav-links a:hover { color: #fff; }
        .nav-divider { width: 1px; height: 18px; background: var(--border2); }
        .btn-primary {
          background: linear-gradient(135deg, #0077CC, #00AAFF);
          color: #fff; font-family: 'Outfit', sans-serif;
          font-size: 13.5px; font-weight: 600;
          padding: 9px 20px; border-radius: 8px;
          text-decoration: none; border: none; cursor: pointer;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          display: inline-flex; align-items: center; gap: 6px;
          box-shadow: 0 4px 20px rgba(0,170,255,0.25);
        }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 28px rgba(0,170,255,0.4); }
        .btn-ghost {
          background: transparent; color: var(--text);
          font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 500;
          padding: 12px 28px; border-radius: 10px;
          text-decoration: none; border: 1px solid var(--border2);
          transition: border-color 0.2s, background 0.2s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-ghost:hover { border-color: var(--accent2); background: rgba(0,170,255,0.07); }

        /* ── HERO ── */
        .hero {
          min-height: 100vh; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; padding: 130px 24px 48px;
          position: relative;
        }
        .hero-glow {
          position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
          width: 1000px; height: 700px;
          background: radial-gradient(ellipse, rgba(0,119,204,0.2) 0%, rgba(27,58,140,0.1) 40%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .hero-inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; width: 100%; }
        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(0,119,204,0.15);
          border: 1px solid rgba(0,170,255,0.4);
          color: #7DD3FC; font-size: 11.5px; font-weight: 600;
          padding: 5px 14px 5px 10px; border-radius: 100px;
          letter-spacing: 0.07em; text-transform: uppercase;
          margin-bottom: 28px; animation: fadeUp 0.6s ease both;
        }
        .badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #00AAFF; box-shadow: 0 0 8px #00AAFF;
          animation: pulse 2s infinite;
        }
        @keyframes pulse { 0%,100% { opacity:1; box-shadow: 0 0 8px #00AAFF; } 50% { opacity:0.5; box-shadow: 0 0 16px #00AAFF; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .hero h1 {
          font-size: clamp(42px, 6.5vw, 82px);
          font-weight: 800; line-height: 1.06; letter-spacing: -0.04em;
          margin-bottom: 22px; color: #fff;
          animation: fadeUp 0.6s 0.1s ease both;
        }
        .gradient-text {
          background: linear-gradient(115deg, #0077CC 0%, #00AAFF 50%, #7DD3FC 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hero-sub {
          font-size: 17px; color: var(--text2); line-height: 1.75;
          max-width: 520px; margin: 0 auto 36px;
          animation: fadeUp 0.6s 0.2s ease both;
        }
        .hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; animation: fadeUp 0.6s 0.3s ease both; }
        .btn-large { font-size: 15px; font-weight: 600; padding: 14px 32px; border-radius: 10px; }
        .stats-wrap { animation: fadeUp 0.7s 0.45s ease both; margin-top: 48px; width: 100%; max-width: 700px; }
        .stats {
          display: flex; border: 1px solid var(--border2);
          border-radius: 16px; overflow: hidden;
          background: rgba(0,119,204,0.06); backdrop-filter: blur(12px);
        }
        .stat { flex: 1; padding: 22px 16px; text-align: center; border-right: 1px solid var(--border); }
        .stat:last-child { border-right: none; }
        .stat-num { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 26px; font-weight: 800; color: #fff; letter-spacing: -0.03em; line-height: 1; }
        .stat-label { font-size: 12px; color: var(--text3); margin-top: 5px; }

        /* ── MOCKUP ── */
        .mockup-section { padding: 40px 48px 0; display: flex; justify-content: center; }
        .mockup-wrap { width: 100%; max-width: 920px; position: relative; }
        .mockup-fade-bottom { position: absolute; bottom: 0; left: 0; right: 0; height: 80px; background: linear-gradient(to bottom, transparent, var(--bg)); pointer-events: none; border-radius: 0 0 12px 12px; }
        .mockup-browser {
          background: #080F20; border: 1px solid rgba(0,170,255,0.2);
          border-radius: 12px; overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,119,204,0.1), 0 0 0 1px rgba(0,170,255,0.08);
        }
        .mockup-bar { background: #0D1830; padding: 10px 16px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(0,170,255,0.1); }
        .mockup-dot { width: 10px; height: 10px; border-radius: 50%; }
        .mockup-url { flex: 1; background: rgba(0,170,255,0.06); border-radius: 5px; padding: 4px 10px; font-size: 11px; color: var(--text3); font-family: monospace; margin: 0 12px; }
        .mockup-content { display: grid; grid-template-columns: 160px 1fr 180px; min-height: 280px; }
        .mockup-sidebar { background: #080F20; border-right: 1px solid rgba(0,170,255,0.08); padding: 14px 10px; }
        .mockup-nav-item { padding: 6px 10px; border-radius: 6px; font-size: 11px; color: var(--text3); margin-bottom: 2px; display: flex; align-items: center; gap: 7px; }
        .mockup-nav-item.active { background: rgba(0,119,204,0.2); color: #7DD3FC; }
        .mockup-nav-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
        .mockup-main { padding: 14px; display: flex; flex-direction: column; gap: 10px; }
        .mockup-stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .mockup-stat-card { background: rgba(0,119,204,0.08); border: 1px solid rgba(0,170,255,0.1); border-radius: 8px; padding: 10px 12px; }
        .mockup-stat-label { font-size: 9px; color: var(--text3); margin-bottom: 4px; }
        .mockup-stat-val { font-size: 18px; font-weight: 700; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; }
        .mockup-table { background: rgba(0,119,204,0.04); border: 1px solid rgba(0,170,255,0.08); border-radius: 8px; overflow: hidden; }
        .mockup-table-header { display: grid; grid-template-columns: 1.5fr 2fr 1fr 0.8fr; padding: 8px 12px; border-bottom: 1px solid rgba(0,170,255,0.08); }
        .mockup-th { font-size: 9px; color: var(--text3); text-transform: uppercase; letter-spacing: 0.06em; }
        .mockup-row { display: grid; grid-template-columns: 1.5fr 2fr 1fr 0.8fr; padding: 8px 12px; border-bottom: 1px solid rgba(0,170,255,0.05); align-items: center; }
        .mockup-row:last-child { border-bottom: none; }
        .mockup-cell { font-size: 10px; color: var(--text2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .mockup-badge { display: inline-block; padding: 2px 7px; border-radius: 20px; font-size: 9px; font-weight: 600; }
        .mockup-right { background: rgba(0,119,204,0.04); border-left: 1px solid rgba(0,170,255,0.08); padding: 14px; display: flex; flex-direction: column; gap: 12px; }
        .mockup-panel-title { font-size: 9px; font-weight: 700; color: #00AAFF; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .mockup-input { background: rgba(0,170,255,0.06); border: 1px solid rgba(0,170,255,0.12); border-radius: 5px; padding: 6px 8px; font-size: 10px; color: var(--text3); margin-bottom: 5px; width: 100%; }
        .mockup-btn { background: linear-gradient(135deg, #0077CC, #00AAFF); border-radius: 5px; padding: 6px; font-size: 10px; color: #fff; text-align: center; font-weight: 600; }

        /* ── TICKER ── */
        .ticker-section { padding: 40px 0 48px; overflow: hidden; position: relative; }
        .ticker-label { text-align: center; font-size: 11px; font-weight: 600; color: var(--text3); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 20px; }
        .ticker-outer { position: relative; }
        .ticker-outer::before, .ticker-outer::after { content: ''; position: absolute; top: 0; bottom: 0; width: 120px; z-index: 2; pointer-events: none; }
        .ticker-outer::before { left: 0; background: linear-gradient(to right, var(--bg), transparent); }
        .ticker-outer::after { right: 0; background: linear-gradient(to left, var(--bg), transparent); }
        .ticker-track { display: flex; gap: 10px; animation: ticker 28s linear infinite; width: max-content; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-chip { background: rgba(0,119,204,0.08); border: 1px solid rgba(0,170,255,0.15); border-radius: 9px; padding: 9px 16px; white-space: nowrap; font-size: 12.5px; color: var(--text2); font-weight: 500; display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .ticker-dot { width: 5px; height: 5px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 6px #22c55e; }

        /* ── SECTION COMMON ── */
        .section-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; color: var(--text3); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 16px; }
        .eyebrow-line { width: 20px; height: 1px; background: var(--accent2); opacity: 0.5; }
        .section-title { font-size: clamp(26px, 3.5vw, 42px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: #fff; margin-bottom: 12px; }
        .section-sub { font-size: 15px; color: var(--text2); line-height: 1.7; }

        /* ── PHOTO BAND ── */
        .photo-band { padding: 48px 0; overflow: hidden; }
        .photo-band-inner { display: flex; gap: 16px; padding: 0 48px; }
        .photo-card {
          flex: 1; min-width: 0; border-radius: 16px; overflow: hidden;
          position: relative; height: 200px;
          border: 1px solid var(--border);
        }
        .photo-card img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: opacity 0.3s; }
        .photo-card:hover img { opacity: 0.9; }
        .photo-card-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 12px 16px;
          background: linear-gradient(to top, rgba(6,10,24,0.95), transparent);
          font-size: 12px; font-weight: 600; color: var(--text2);
          letter-spacing: 0.04em;
        }
        .photo-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,119,204,0.2), transparent);
        }

        /* ── PLATFORMS ── */
        .platforms { padding: 56px 48px; text-align: center; }
        .platform-grid { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 720px; margin: 28px auto 0; }
        .platform-chip { background: rgba(0,119,204,0.08); border: 1px solid rgba(0,170,255,0.15); border-radius: 10px; padding: 10px 18px; font-size: 13px; font-weight: 500; color: #8BBFD4; transition: all 0.2s; display: flex; align-items: center; gap: 8px; }
        .platform-chip:hover { border-color: rgba(0,170,255,0.4); background: rgba(0,119,204,0.15); color: #BAE6FD; transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,119,204,0.2); }
        .platform-chip.live { border-color: rgba(0,170,255,0.35); color: #7DD3FC; background: rgba(0,119,204,0.12); }
        .live-badge { font-size: 10px; font-weight: 700; color: #4ade80; background: rgba(74,222,128,0.12); border: 1px solid rgba(74,222,128,0.3); padding: 1px 7px; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.06em; }
        .soon-badge { font-size: 10px; font-weight: 600; color: var(--text3); background: rgba(255,255,255,0.04); border: 1px solid rgba(0,170,255,0.1); padding: 1px 7px; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.04em; }

        /* ── HOW IT WORKS ── */
        .how-section { padding: 56px 48px; }
        .how-inner { max-width: 1080px; margin: 0 auto; }
        .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 40px; border: 1px solid var(--border2); border-radius: 20px; overflow: hidden; background: var(--border); }
        .step { background: var(--bg2); padding: 36px 30px; position: relative; transition: background 0.3s; }
        .step::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, rgba(0,170,255,0.5), transparent); opacity: 0; transition: opacity 0.3s; }
        .step:hover { background: rgba(0,119,204,0.06); }
        .step:hover::before { opacity: 1; }
        .step-num { font-size: 11px; font-weight: 700; color: var(--accent2); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 20px; }
        .step-icon { width: 46px; height: 46px; border-radius: 11px; background: rgba(0,119,204,0.15); border: 1px solid rgba(0,170,255,0.25); display: flex; align-items: center; justify-content: center; font-size: 21px; margin-bottom: 18px; }
        .step h3 { font-size: 17px; font-weight: 700; margin-bottom: 10px; color: #fff; letter-spacing: -0.02em; }
        .step p { font-size: 13.5px; color: var(--text2); line-height: 1.7; }

        /* ── FEATURES ── */
        .features-section { padding: 56px 48px; }
        .features-inner { max-width: 1080px; margin: 0 auto; }
        .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 40px; }
        .feature-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 26px; transition: all 0.3s; position: relative; overflow: hidden; }
        .feature-card::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,170,255,0.4), transparent); opacity: 0; transition: opacity 0.3s; }
        .feature-card:hover { border-color: rgba(0,170,255,0.3); transform: translateY(-3px); background: rgba(0,119,204,0.07); box-shadow: 0 8px 32px rgba(0,119,204,0.15); }
        .feature-card:hover::after { opacity: 1; }
        .feature-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(0,119,204,0.15); border: 1px solid rgba(0,170,255,0.25); display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 16px; }
        .feature-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: #fff; letter-spacing: -0.02em; }
        .feature-card p { font-size: 13px; color: var(--text2); line-height: 1.65; }

        /* ── TESTIMONIALS ── */
        .testimonials-section { padding: 56px 48px; }
        .testimonials-inner { max-width: 1080px; margin: 0 auto; }
        .testimonial-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 40px; }
        .testimonial-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 26px; transition: all 0.3s; }
        .testimonial-card:hover { border-color: var(--border2); transform: translateY(-3px); box-shadow: 0 8px 32px rgba(0,119,204,0.12); }
        .stars { display: flex; gap: 3px; margin-bottom: 14px; }
        .star { color: #F59E0B; font-size: 13px; }
        .testimonial-card blockquote { font-size: 13.5px; color: var(--text2); line-height: 1.75; margin-bottom: 20px; }
        .testimonial-author { display: flex; align-items: center; gap: 10px; }
        .author-avatar { width: 38px; height: 38px; border-radius: 50%; overflow: hidden; flex-shrink: 0; border: 2px solid rgba(0,170,255,0.25); }
        .author-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .author-name { font-size: 12.5px; font-weight: 600; color: #fff; }
        .author-title { font-size: 11.5px; color: var(--text3); margin-top: 2px; }

        /* ── PRICING ── */
        .pricing-section { padding: 56px 48px; }
        .pricing-inner { max-width: 1080px; margin: 0 auto; text-align: center; }
        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 40px; text-align: left; }
        .pricing-card { background: var(--surface); border: 1px solid var(--border); border-radius: 18px; padding: 32px 26px; position: relative; transition: all 0.3s; }
        .pricing-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,119,204,0.15); }
        .pricing-card.featured { background: linear-gradient(145deg, rgba(0,119,204,0.18) 0%, rgba(0,170,255,0.06) 100%); border-color: rgba(0,170,255,0.4); box-shadow: 0 0 40px rgba(0,119,204,0.12); }
        .popular-tag { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: linear-gradient(115deg, #0077CC, #00AAFF); color: #fff; font-size: 10px; font-weight: 700; padding: 4px 16px; border-radius: 100px; letter-spacing: 0.08em; white-space: nowrap; box-shadow: 0 4px 16px rgba(0,170,255,0.4); }
        .plan-name { font-size: 11px; font-weight: 700; color: var(--text3); margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.1em; }
        .plan-price { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 48px; font-weight: 800; line-height: 1; color: #fff; letter-spacing: -0.04em; }
        .plan-period { font-size: 14px; color: var(--text2); margin-left: 2px; }
        .plan-desc { font-size: 13px; color: var(--text2); margin: 16px 0 24px; line-height: 1.6; }
        .plan-divider { height: 1px; background: var(--border); margin-bottom: 20px; }
        .plan-features { display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
        .plan-feature { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #BAE6FD; line-height: 1.4; }
        .check-box { width: 17px; height: 17px; border-radius: 5px; background: rgba(0,119,204,0.2); border: 1px solid rgba(0,170,255,0.3); display: flex; align-items: center; justify-content: center; font-size: 9px; color: #7DD3FC; flex-shrink: 0; margin-top: 1px; }
        .btn-plan { display: flex; align-items: center; justify-content: center; width: 100%; padding: 12px; border-radius: 9px; font-family: 'Outfit', sans-serif; font-size: 13.5px; font-weight: 600; text-decoration: none; transition: all 0.2s; cursor: pointer; border: none; }
        .btn-plan:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-plan-primary { background: linear-gradient(135deg, #0077CC, #00AAFF); color: #fff; box-shadow: 0 4px 20px rgba(0,170,255,0.3); }
        .btn-plan-ghost { background: transparent; color: var(--text2); border: 1px solid var(--border2); }

        /* ── CTA ── */
        .cta-section { margin: 32px 48px 72px; border-radius: 24px; padding: 80px 48px; text-align: center; position: relative; overflow: hidden; background: linear-gradient(145deg, rgba(0,119,204,0.22) 0%, rgba(27,58,140,0.12) 100%); border: 1px solid rgba(0,170,255,0.3); }
        .cta-glow { position: absolute; top: -80px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(0,119,204,0.35) 0%, transparent 70%); pointer-events: none; }
        .cta-section h2 { font-size: clamp(28px, 4vw, 50px); font-weight: 800; letter-spacing: -0.03em; margin-bottom: 14px; color: #fff; position: relative; z-index: 1; }
        .cta-section p { font-size: 15px; color: var(--text2); margin-bottom: 40px; position: relative; z-index: 1; max-width: 440px; margin-left: auto; margin-right: auto; line-height: 1.7; }
        .cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }
        .cta-note { margin-top: 18px; font-size: 12.5px; color: var(--text3); position: relative; z-index: 1; }

        /* ── FOOTER ── */
        footer { border-top: 1px solid var(--border); padding: 44px 52px 36px; }
        .footer-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 48px; margin-bottom: 40px; flex-wrap: wrap; }
        .footer-brand { max-width: 260px; }
        .footer-logo { display: flex; align-items: center; text-decoration: none; margin-bottom: 12px; }
        .footer-logo img { height: 40px; object-fit: contain; }
        .footer-tagline { font-size: 13px; color: var(--text3); line-height: 1.6; }
        .footer-cols { display: flex; gap: 56px; flex-wrap: wrap; }
        .footer-col h4 { font-size: 11px; font-weight: 700; color: var(--text2); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px; }
        .footer-col-links { display: flex; flex-direction: column; gap: 9px; }
        .footer-col-links a { font-size: 13px; color: var(--text3); text-decoration: none; transition: color 0.2s; }
        .footer-col-links a:hover { color: var(--accent2); }
        .footer-bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding-top: 28px; border-top: 1px solid var(--border); }
        .footer-bottom p { font-size: 12px; color: var(--text3); }
        .footer-bottom-links { display: flex; gap: 20px; }
        .footer-bottom-links a { font-size: 12px; color: var(--text3); text-decoration: none; transition: color 0.2s; }
        .footer-bottom-links a:hover { color: var(--text2); }
      `}</style>

      {/* ANIMATED CIRCUIT BACKGROUND */}
      <div className="circuit-bg">
        <svg className="circuit-svg" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="strongGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Circuit trace lines */}
          <path className="circuit-line" d="M 100 80 L 300 80 L 300 200 L 500 200 L 500 80 L 700 80 L 700 160 L 900 160" />
          <path className="circuit-line" d="M 200 300 L 400 300 L 400 180 L 600 180 L 600 300 L 800 300 L 800 150 L 1000 150" />
          <path className="circuit-line" d="M 50 500 L 250 500 L 250 380 L 450 380 L 450 500 L 650 500 L 650 380 L 900 380 L 900 500 L 1100 500" />
          <path className="circuit-line" d="M 150 650 L 350 650 L 350 550 L 550 550 L 550 650 L 750 650 L 750 550 L 950 550" />
          <path className="circuit-line" d="M 0 750 L 200 750 L 200 620 L 400 620 L 400 750 L 600 750 L 600 620 L 850 620 L 850 750 L 1100 750" />
          <path className="circuit-line" d="M 1000 80 L 1200 80 L 1200 300 L 1100 300 L 1100 450 L 1300 450 L 1300 600 L 1200 600 L 1200 800" />
          <path className="circuit-line" d="M 50 200 L 50 400 L 150 400 L 150 600 L 50 600 L 50 800" />
          <path className="circuit-line" d="M 700 400 L 700 550 L 850 550 L 850 700 L 1000 700 L 1000 850" />

          {/* Horizontal connector traces */}
          <path className="circuit-line" strokeOpacity="0.5" d="M 0 120 L 100 120" />
          <path className="circuit-line" strokeOpacity="0.5" d="M 900 200 L 1000 200 L 1000 80" />
          <path className="circuit-line" strokeOpacity="0.5" d="M 1100 300 L 1200 300" />
          <path className="circuit-line" strokeOpacity="0.5" d="M 950 550 L 1050 550 L 1050 450" />

          {/* Circuit nodes (junction dots) */}
          {[
            [300, 80], [500, 80], [700, 80], [300, 200], [500, 200],
            [400, 300], [600, 300], [800, 300], [400, 180], [600, 180],
            [250, 500], [450, 500], [650, 500], [250, 380], [450, 380], [650, 380], [900, 380],
            [350, 650], [550, 650], [750, 650], [350, 550], [550, 550],
            [200, 750], [400, 750], [600, 750], [200, 620], [400, 620], [600, 620], [850, 620],
            [1200, 300], [1100, 450], [1300, 450], [1200, 600],
            [50, 400], [150, 400], [150, 600],
            [700, 550], [850, 550], [850, 700], [1000, 700],
          ].map(([x, y], i) => (
            <circle
              key={i}
              className="circuit-node circuit-node-anim"
              cx={x} cy={y} r={3}
              style={{ animationDelay: `${(i * 0.3) % 3}s` }}
            />
          ))}

          {/* Glow overlay rectangles for atmosphere */}
          <rect className="circuit-glow" x="0" y="0" width="400" height="300" fill="url(#radialGlow1)" />

          {/* Moving pulse dots along paths */}
          <circle className="pulse-dot circuit-pulse-1" r="4" filter="url(#strongGlow)" />
          <circle className="pulse-dot circuit-pulse-2" r="4" filter="url(#strongGlow)" />
          <circle className="pulse-dot circuit-pulse-3" r="4" filter="url(#strongGlow)" />
          <circle className="pulse-dot circuit-pulse-4" r="4" filter="url(#strongGlow)" />
          <circle className="pulse-dot circuit-pulse-5" r="4" filter="url(#strongGlow)" />

          {/* Second wave of pulses with different timing */}
          <circle className="pulse-dot" r="3" filter="url(#glow)"
            style={{
              offsetPath: "path('M 100 80 L 300 80 L 300 200 L 500 200 L 500 80 L 700 80 L 700 160 L 900 160')",
              animation: "flow1 4s ease-in-out infinite",
              animationDelay: "2s",
              fill: "#7DD3FC",
            } as React.CSSProperties}
          />
          <circle className="pulse-dot" r="3" filter="url(#glow)"
            style={{
              offsetPath: "path('M 50 500 L 250 500 L 250 380 L 450 380 L 450 500 L 650 500 L 650 380 L 900 380 L 900 500 L 1100 500')",
              animation: "flow3 6s ease-in-out infinite",
              animationDelay: "3.5s",
              fill: "#BAE6FD",
            } as React.CSSProperties}
          />
        </svg>
      </div>

      <div className="content">

        {/* NAV */}
        <nav>
          <a href="/" className="nav-logo">
            <img src="/logo.png" alt="SolveBotic" />
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#platforms">Platforms</a>
            <a href="#pricing">Pricing</a>
            <a href="mailto:support@solvebotic.com">Contact</a>
            <div className="nav-divider" />
            <a href="https://app.solvebotic.com/auth/login">Login</a>
            <a href="https://app.solvebotic.com/onboarding" className="btn-primary">Get Started {arrow}</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-inner">
            <div className="badge"><div className="badge-dot" />AI-Powered Customer Support</div>
            <h1>Handle Every<br />Support Request.<br /><span className="gradient-text">Automatically.</span></h1>
            <p className="hero-sub">SolveBotic uses AI to instantly respond to post-purchase questions, look up orders, and escalate issues {dash} across every platform you sell on.</p>
            <div className="hero-btns">
              <a href="https://app.solvebotic.com/onboarding" className="btn-primary btn-large">Get Started Free {arrow}</a>
              <a href="#how-it-works" className="btn-ghost btn-large">See how it works</a>
            </div>
            <div className="stats-wrap">
              <div className="stats">
                {stats.map(s => (
                  <div key={s.label} className="stat">
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DASHBOARD MOCKUP */}
        <div className="mockup-section">
          <div className="mockup-wrap">
            <div className="mockup-browser">
              <div className="mockup-bar">
                <div className="mockup-dot" style={{ background: "#ff5f57" }} />
                <div className="mockup-dot" style={{ background: "#febc2e" }} />
                <div className="mockup-dot" style={{ background: "#28c840" }} />
                <div className="mockup-url">app.solvebotic.com/dashboard</div>
              </div>
              <div className="mockup-content">
                <div className="mockup-sidebar">
                  {[
                    { label: "Dashboard", active: true },
                    { label: "Requests", active: false },
                    { label: "Escalations", active: false },
                    { label: "Order lookup", active: false },
                    { label: "Settings", active: false },
                  ].map(item => (
                    <div key={item.label} className={`mockup-nav-item ${item.active ? "active" : ""}`}>
                      <div className="mockup-nav-dot" />
                      {item.label}
                    </div>
                  ))}
                </div>
                <div className="mockup-main">
                  <div className="mockup-stats-row">
                    {[
                      { label: "Total requests", val: "124" },
                      { label: "Escalated", val: "8" },
                      { label: "Resolved", val: "112" },
                      { label: "Top intent", val: "Order" },
                    ].map(s => (
                      <div key={s.label} className="mockup-stat-card">
                        <div className="mockup-stat-label">{s.label}</div>
                        <div className="mockup-stat-val">{s.val}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mockup-table">
                    <div className="mockup-table-header">
                      {["Customer", "Message", "Intent", "Status"].map(h => (
                        <div key={h} className="mockup-th">{h}</div>
                      ))}
                    </div>
                    {[
                      { email: "jane@email.com", msg: "Where is my order #1042?", intent: "Order lookup", status: "resolved", sc: "#15803d", sb: "rgba(21,128,61,0.15)" },
                      { email: "mike@email.com", msg: "I want a refund please", intent: "Refund", status: "escalated", sc: "#b91c1c", sb: "rgba(185,28,28,0.15)" },
                      { email: "sara@email.com", msg: "Package not delivered yet", intent: "Order status", status: "resolved", sc: "#15803d", sb: "rgba(21,128,61,0.15)" },
                      { email: "tom@email.com", msg: "Wrong item received", intent: "Wrong item", status: "escalated", sc: "#b91c1c", sb: "rgba(185,28,28,0.15)" },
                    ].map((row, i) => (
                      <div key={i} className="mockup-row">
                        <div className="mockup-cell">{row.email}</div>
                        <div className="mockup-cell">{row.msg}</div>
                        <div className="mockup-cell"><span className="mockup-badge" style={{ background: "rgba(0,119,204,0.2)", color: "#7DD3FC" }}>{row.intent}</span></div>
                        <div className="mockup-cell"><span className="mockup-badge" style={{ background: row.sb, color: row.sc }}>{row.status}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mockup-right">
                  <div>
                    <div className="mockup-panel-title">Order lookup</div>
                    <div className="mockup-input">Order number</div>
                    <div className="mockup-input">Customer email</div>
                    <div className="mockup-btn">Look up order</div>
                  </div>
                  <div>
                    <div className="mockup-panel-title">Escalations</div>
                    {["Refund request", "Wrong item"].map(e => (
                      <div key={e} style={{ fontSize: 10, color: "#b91c1c", padding: "5px 0", borderBottom: "1px solid rgba(0,170,255,0.06)" }}>{e}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mockup-fade-bottom" />
          </div>
        </div>

        {/* TICKER */}
        <div className="ticker-section">
          <div className="ticker-label">Trusted by ecommerce brands</div>
          <div className="ticker-outer">
            <div className="ticker-track">
              {[...tickerItems, ...tickerItems].map((text, i) => (
                <div key={i} className="ticker-chip"><div className="ticker-dot" />{text}</div>
              ))}
            </div>
          </div>
        </div>

        {/* PHOTO BAND */}
        <div className="photo-band">
          <div className="photo-band-inner">
            {[
              { url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop", label: "Ecommerce at scale" },
              { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop", label: "Fast order fulfillment" },
              { url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=300&fit=crop", label: "Customer support teams" },
              { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop", label: "Real-time analytics" },
            ].map((p, i) => (
              <div key={i} className="photo-card">
                <img src={p.url} alt={p.label} />
                <div className="photo-card-overlay" />
                <div className="photo-card-label">{p.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PLATFORMS */}
        <section id="platforms" className="platforms">
          <div className="section-eyebrow"><div className="eyebrow-line" />Integrations<div className="eyebrow-line" /></div>
          <h2 className="section-title">Works where you sell.</h2>
          <p className="section-sub" style={{ maxWidth: 460, margin: "0 auto" }}>One dashboard. Every platform. Connect your store in minutes {dash} no code required.</p>
          <div className="platform-grid">
            {platforms.map(p => (
              <div key={p.name} className={`platform-chip ${p.live ? "live" : ""}`}>
                {p.name}
                {p.live ? <span className="live-badge">Live</span> : <span className="soon-badge">Soon</span>}
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="how-section">
          <div className="how-inner">
            <div className="section-eyebrow"><div className="eyebrow-line" />How it works<div className="eyebrow-line" /></div>
            <h2 className="section-title">Up and running in minutes.</h2>
            <p className="section-sub">No complex setup. No dev team required.</p>
            <div className="steps">
              {steps.map(s => (
                <div key={s.num} className="step">
                  <div className="step-num">{s.num}</div>
                  <div className="step-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="features-section">
          <div className="features-inner">
            <div className="section-eyebrow"><div className="eyebrow-line" />Features<div className="eyebrow-line" /></div>
            <h2 className="section-title">Everything you need<br />to scale support.</h2>
            <p className="section-sub">Built for ecommerce brands that want to grow without growing their support team.</p>
            <div className="feature-grid">
              {features.map(f => (
                <div key={f.title} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials-section">
          <div className="testimonials-inner">
            <div className="section-eyebrow"><div className="eyebrow-line" />What brands say<div className="eyebrow-line" /></div>
            <h2 className="section-title">Support on autopilot.<br />Brands love it.</h2>
            <div className="testimonial-grid">
              {testimonials.map(t => (
                <div key={t.name} className="testimonial-card">
                  <div className="stars">{[0, 1, 2, 3, 4].map(i => <span key={i} className="star">{star}</span>)}</div>
                  <blockquote>{lq}{t.quote}{rq}</blockquote>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src={t.img} alt={t.name} />
                    </div>
                    <div>
                      <div className="author-name">{t.name}</div>
                      <div className="author-title">{t.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="pricing-section">
          <div className="pricing-inner">
            <div className="section-eyebrow"><div className="eyebrow-line" />Pricing<div className="eyebrow-line" /></div>
            <h2 className="section-title">Simple, transparent pricing.</h2>
            <p className="section-sub">No setup fees. No hidden costs. Cancel anytime.</p>
            <div className="pricing-grid">
              {plans.map(plan => (
                <div key={plan.name} className={`pricing-card ${plan.featured ? "featured" : ""}`}>
                  {plan.featured && <div className="popular-tag">Most Popular</div>}
                  <div className="plan-name">{plan.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                    <span className="plan-price">{plan.price}</span>
                    <span className="plan-period">{plan.period}</span>
                  </div>
                  <p className="plan-desc">{plan.desc}</p>
                  <div className="plan-divider" />
                  <div className="plan-features">
                    {plan.features.map(f => (
                      <div key={f} className="plan-feature">
                        <span className="check-box">{check}</span>{f}
                      </div>
                    ))}
                  </div>
                  <a href={plan.href} className={`btn-plan ${plan.featured ? "btn-plan-primary" : "btn-plan-ghost"}`}>
                    {plan.cta} {arrow}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-section">
          <div className="cta-glow" />
          <h2>Ready to automate<br />your support?</h2>
          <p>Join brands already using SolveBotic to handle customer support {dash} faster, smarter, and around the clock.</p>
          <div className="cta-btns">
            <a href="https://app.solvebotic.com/onboarding" className="btn-primary btn-large">Get Started Free {arrow}</a>
            <a href="https://app.solvebotic.com/auth/login" className="btn-ghost btn-large">Login to dashboard</a>
          </div>
          <p className="cta-note">No credit card required {dot} Free to start {dot} Cancel anytime</p>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                <img src="/logo.png" alt="SolveBotic" />
              </a>
              <p className="footer-tagline">AI-powered customer support for ecommerce brands. Handle every request, automatically.</p>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <h4>Product</h4>
                <div className="footer-col-links">
                  <a href="#features">Features</a>
                  <a href="#platforms">Platforms</a>
                  <a href="#pricing">Pricing</a>
                  <a href="#how-it-works">How it works</a>
                </div>
              </div>
              <div className="footer-col">
                <h4>Account</h4>
                <div className="footer-col-links">
                  <a href="https://app.solvebotic.com/auth/login">Login</a>
                  <a href="https://app.solvebotic.com/onboarding">Get Started</a>
                </div>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <div className="footer-col-links">
                  <a href="mailto:support@solvebotic.com">Contact</a>
                  <a href="mailto:support@solvebotic.com">Support</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{copy} 2026 SolveBotic. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}