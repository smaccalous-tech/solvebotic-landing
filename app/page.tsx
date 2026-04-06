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
    { quote: "We cut our support response time from 6 hours to under 2 seconds. Our team now only handles the truly complex stuff.", name: "Marcus T.", title: "Founder, DTC Supplement Brand", color: "linear-gradient(135deg, #4361EE, #818cf8)", initials: "MT" },
    { quote: "Setup took 8 minutes. Literally. It connected to Shopify and started handling order questions the same day.", name: "Priya K.", title: "Head of Ops, Home Goods Store", color: "linear-gradient(135deg, #0ea5e9, #00D4FF)", initials: "PK" },
    { quote: "I was skeptical about AI support, but the escalation logic is smart. Real issues get to us fast, noise gets handled automatically.", name: "Jordan M.", title: "CX Lead, Apparel Brand", color: "linear-gradient(135deg, #8b5cf6, #a78bfa)", initials: "JM" },
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
          --bg: #080B14; --bg2: #0C1020;
          --surface: rgba(255,255,255,0.035); --surface2: rgba(255,255,255,0.06);
          --border: rgba(255,255,255,0.07); --border2: rgba(255,255,255,0.12);
          --accent: #4361EE; --accent-dim: rgba(67,97,238,0.15); --accent-border: rgba(67,97,238,0.35);
          --text: #EEF2FF; --text2: #9BA8C0; --text3: #5A6480;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: 'Outfit', sans-serif; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        h1, h2, h3, h4 { font-family: 'Plus Jakarta Sans', sans-serif; }
        body::after {
          content: ''; position: fixed; inset: 0; z-index: 0;
          background-image: linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
          background-size: 72px 72px; pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
        }
        .content { position: relative; z-index: 1; }

        /* NAV */
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 0 52px; height: 66px; background: rgba(8,11,20,0.85); backdrop-filter: blur(24px); border-bottom: 1px solid var(--border); }
        .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .nav-logo img { height: 38px; object-fit: contain; }
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-links a { color: var(--text2); font-size: 14px; text-decoration: none; transition: color 0.2s; font-weight: 500; }
        .nav-links a:hover { color: #fff; }
        .nav-divider { width: 1px; height: 18px; background: var(--border2); }
        .btn-primary { background: #4361EE; color: #fff; font-family: 'Outfit', sans-serif; font-size: 13.5px; font-weight: 600; padding: 9px 20px; border-radius: 8px; text-decoration: none; border: none; cursor: pointer; transition: background 0.2s, transform 0.15s, box-shadow 0.2s; display: inline-flex; align-items: center; gap: 6px; letter-spacing: -0.01em; }
        .btn-primary:hover { background: #3451D1; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(67,97,238,0.35); }
        .btn-ghost { background: transparent; color: var(--text); font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 500; padding: 12px 28px; border-radius: 10px; text-decoration: none; border: 1px solid var(--border2); transition: border-color 0.2s, background 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.25); background: var(--surface2); }

        /* HERO */
        .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 130px 24px 80px; position: relative; }
        .hero-orb1 { position: absolute; top: -180px; left: 50%; transform: translateX(-50%); width: 900px; height: 700px; background: radial-gradient(ellipse, rgba(67,97,238,0.22) 0%, transparent 68%); pointer-events: none; z-index: 0; }
        .hero-orb2 { position: absolute; bottom: 0; right: -80px; width: 480px; height: 480px; background: radial-gradient(ellipse, rgba(0,212,255,0.1) 0%, transparent 70%); pointer-events: none; z-index: 0; }
        .hero-inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; width: 100%; }
        .badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(67,97,238,0.12); border: 1px solid rgba(67,97,238,0.35); color: #a5b4fc; font-size: 11.5px; font-weight: 600; padding: 5px 14px 5px 10px; border-radius: 100px; letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 32px; animation: fadeUp 0.6s ease both; }
        .badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #4361EE; box-shadow: 0 0 6px rgba(67,97,238,0.8); animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .hero h1 { font-size: clamp(42px, 6.5vw, 80px); font-weight: 800; line-height: 1.06; letter-spacing: -0.04em; margin-bottom: 24px; color: #fff; animation: fadeUp 0.6s 0.1s ease both; }
        .gradient-text { background: linear-gradient(115deg, #4361EE 10%, #00D4FF 90%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-sub { font-size: 17px; color: var(--text2); line-height: 1.75; max-width: 520px; margin: 0 auto 40px; animation: fadeUp 0.6s 0.2s ease both; }
        .hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; animation: fadeUp 0.6s 0.3s ease both; }
        .btn-large { font-size: 15px; font-weight: 600; padding: 14px 32px; border-radius: 10px; }
        .stats-wrap { animation: fadeUp 0.7s 0.45s ease both; margin-top: 56px; width: 100%; max-width: 680px; }
        .stats { display: flex; border: 1px solid var(--border); border-radius: 16px; overflow: hidden; background: rgba(255,255,255,0.025); backdrop-filter: blur(12px); }
        .stat { flex: 1; padding: 22px 16px; text-align: center; border-right: 1px solid var(--border); }
        .stat:last-child { border-right: none; }
        .stat-num { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 26px; font-weight: 800; color: #fff; letter-spacing: -0.03em; line-height: 1; }
        .stat-label { font-size: 12px; color: var(--text3); margin-top: 5px; }

        /* MOCKUP */
        .mockup-section { padding: 0 48px; display: flex; justify-content: center; margin-bottom: 32px; }
        .mockup-wrap { width: 100%; max-width: 900px; position: relative; }
        .mockup-fade-bottom { position: absolute; bottom: 0; left: 0; right: 0; height: 100px; background: linear-gradient(to bottom, transparent, var(--bg)); pointer-events: none; border-radius: 0 0 16px 16px; }
        .mockup-browser { background: #0d1117; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; overflow: hidden; box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05); }
        .mockup-bar { background: #161b22; padding: 10px 16px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .mockup-dot { width: 10px; height: 10px; border-radius: 50%; }
        .mockup-url { flex: 1; background: rgba(255,255,255,0.04); border-radius: 5px; padding: 4px 10px; font-size: 11px; color: var(--text3); font-family: monospace; margin: 0 12px; }
        .mockup-content { display: grid; grid-template-columns: 160px 1fr 180px; min-height: 300px; }
        .mockup-sidebar { background: #0d1117; border-right: 1px solid rgba(255,255,255,0.06); padding: 14px 10px; }
        .mockup-nav-item { padding: 6px 10px; border-radius: 6px; font-size: 11px; color: var(--text3); margin-bottom: 2px; display: flex; align-items: center; gap: 7px; }
        .mockup-nav-item.active { background: rgba(67,97,238,0.15); color: #a5b4fc; }
        .mockup-nav-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
        .mockup-main { padding: 14px; display: flex; flex-direction: column; gap: 10px; }
        .mockup-stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .mockup-stat-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 10px 12px; }
        .mockup-stat-label { font-size: 9px; color: var(--text3); margin-bottom: 4px; }
        .mockup-stat-val { font-size: 18px; font-weight: 700; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; }
        .mockup-table { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; overflow: hidden; }
        .mockup-table-header { display: grid; grid-template-columns: 1.5fr 2fr 1fr 0.8fr; padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .mockup-th { font-size: 9px; color: var(--text3); text-transform: uppercase; letter-spacing: 0.06em; }
        .mockup-row { display: grid; grid-template-columns: 1.5fr 2fr 1fr 0.8fr; padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.04); align-items: center; }
        .mockup-row:last-child { border-bottom: none; }
        .mockup-cell { font-size: 10px; color: var(--text2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .mockup-badge { display: inline-block; padding: 2px 7px; border-radius: 20px; font-size: 9px; font-weight: 600; }
        .mockup-right { background: rgba(255,255,255,0.015); border-left: 1px solid rgba(255,255,255,0.06); padding: 14px; display: flex; flex-direction: column; gap: 12px; }
        .mockup-panel-title { font-size: 9px; font-weight: 700; color: #4361EE; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .mockup-input { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 5px; padding: 6px 8px; font-size: 10px; color: var(--text3); margin-bottom: 5px; width: 100%; }
        .mockup-btn { background: #4361EE; border-radius: 5px; padding: 6px; font-size: 10px; color: #fff; text-align: center; font-weight: 600; }

        /* TICKER */
        .ticker-section { padding: 48px 0 56px; overflow: hidden; position: relative; }
        .ticker-label { text-align: center; font-size: 11px; font-weight: 600; color: var(--text3); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 24px; }
        .ticker-outer { position: relative; }
        .ticker-outer::before, .ticker-outer::after { content: ''; position: absolute; top: 0; bottom: 0; width: 120px; z-index: 2; pointer-events: none; }
        .ticker-outer::before { left: 0; background: linear-gradient(to right, var(--bg), transparent); }
        .ticker-outer::after { right: 0; background: linear-gradient(to left, var(--bg), transparent); }
        .ticker-track { display: flex; gap: 10px; animation: ticker 28s linear infinite; width: max-content; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-chip { background: var(--surface); border: 1px solid var(--border); border-radius: 9px; padding: 9px 16px; white-space: nowrap; font-size: 12.5px; color: var(--text2); font-weight: 500; display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .ticker-dot { width: 5px; height: 5px; border-radius: 50%; background: #22c55e; }

        /* SECTIONS */
        .section-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; color: var(--text3); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 16px; }
        .eyebrow-line { width: 20px; height: 1px; background: var(--text3); }
        .section-title { font-size: clamp(26px, 3.5vw, 42px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: #fff; margin-bottom: 12px; }
        .section-sub { font-size: 15px; color: var(--text2); line-height: 1.7; }

        /* PLATFORMS */
        .platforms { padding: 64px 48px; text-align: center; }
        .platform-grid { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 720px; margin: 32px auto 0; }
        .platform-chip { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 10px 18px; font-size: 13px; font-weight: 500; color: #b0bbd4; transition: all 0.2s; display: flex; align-items: center; gap: 8px; }
        .platform-chip:hover { border-color: var(--accent-border); background: var(--accent-dim); color: #c7d2fe; transform: translateY(-2px); }
        .platform-chip.live { border-color: var(--accent-border); color: #a5b4fc; background: var(--accent-dim); }
        .live-badge { font-size: 10px; font-weight: 700; color: #4ade80; background: rgba(74,222,128,0.12); border: 1px solid rgba(74,222,128,0.25); padding: 1px 7px; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.06em; }
        .soon-badge { font-size: 10px; font-weight: 600; color: var(--text3); background: rgba(255,255,255,0.05); border: 1px solid var(--border); padding: 1px 7px; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.04em; }

        /* HOW IT WORKS */
        .how-section { padding: 64px 48px; }
        .how-inner { max-width: 1080px; margin: 0 auto; }
        .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 48px; border: 1px solid var(--border); border-radius: 20px; overflow: hidden; background: var(--border); }
        .step { background: var(--bg2); padding: 36px 30px; position: relative; transition: background 0.3s; }
        .step:hover { background: rgba(12,16,32,0.95); }
        .step-num { font-size: 11px; font-weight: 700; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 22px; }
        .step-icon { width: 46px; height: 46px; border-radius: 11px; background: var(--accent-dim); border: 1px solid var(--accent-border); display: flex; align-items: center; justify-content: center; font-size: 21px; margin-bottom: 20px; }
        .step h3 { font-size: 17px; font-weight: 700; margin-bottom: 10px; color: #fff; letter-spacing: -0.02em; }
        .step p { font-size: 13.5px; color: var(--text2); line-height: 1.7; }

        /* FEATURES */
        .features-section { padding: 64px 48px; }
        .features-inner { max-width: 1080px; margin: 0 auto; }
        .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 48px; }
        .feature-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 26px; transition: all 0.3s; }
        .feature-card:hover { border-color: rgba(67,97,238,0.3); transform: translateY(-3px); background: rgba(255,255,255,0.045); }
        .feature-icon { width: 44px; height: 44px; border-radius: 10px; background: var(--accent-dim); border: 1px solid var(--accent-border); display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 16px; }
        .feature-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: #fff; letter-spacing: -0.02em; }
        .feature-card p { font-size: 13px; color: var(--text2); line-height: 1.65; }

        /* TESTIMONIALS */
        .testimonials-section { padding: 64px 48px; }
        .testimonials-inner { max-width: 1080px; margin: 0 auto; }
        .testimonial-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 48px; }
        .testimonial-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 26px; transition: all 0.3s; }
        .testimonial-card:hover { border-color: var(--border2); transform: translateY(-3px); }
        .stars { display: flex; gap: 3px; margin-bottom: 14px; }
        .star { color: #f59e0b; font-size: 13px; }
        .testimonial-card blockquote { font-size: 13.5px; color: var(--text2); line-height: 1.75; margin-bottom: 20px; }
        .testimonial-author { display: flex; align-items: center; gap: 10px; }
        .author-avatar { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; font-family: 'Plus Jakarta Sans', sans-serif; color: #fff; flex-shrink: 0; }
        .author-name { font-size: 12.5px; font-weight: 600; color: #fff; }
        .author-title { font-size: 11.5px; color: var(--text3); margin-top: 2px; }

        /* PRICING */
        .pricing-section { padding: 64px 48px; }
        .pricing-inner { max-width: 1080px; margin: 0 auto; text-align: center; }
        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 48px; text-align: left; }
        .pricing-card { background: var(--surface); border: 1px solid var(--border); border-radius: 18px; padding: 32px 26px; position: relative; transition: all 0.3s; }
        .pricing-card:hover { transform: translateY(-4px); }
        .pricing-card.featured { background: linear-gradient(145deg, rgba(67,97,238,0.16) 0%, rgba(0,212,255,0.05) 100%); border-color: rgba(67,97,238,0.45); }
        .popular-tag { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: linear-gradient(115deg, #4361EE, #00D4FF); color: #fff; font-size: 10px; font-weight: 700; padding: 4px 16px; border-radius: 100px; letter-spacing: 0.08em; white-space: nowrap; box-shadow: 0 4px 16px rgba(67,97,238,0.4); }
        .plan-name { font-size: 11px; font-weight: 700; color: var(--text3); margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.1em; }
        .plan-price { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 48px; font-weight: 800; line-height: 1; color: #fff; letter-spacing: -0.04em; }
        .plan-period { font-size: 14px; color: var(--text2); margin-left: 2px; }
        .plan-desc { font-size: 13px; color: var(--text2); margin: 16px 0 24px; line-height: 1.6; }
        .plan-divider { height: 1px; background: var(--border); margin-bottom: 20px; }
        .plan-features { display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
        .plan-feature { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #c5cedf; line-height: 1.4; }
        .check-box { width: 17px; height: 17px; border-radius: 5px; background: rgba(67,97,238,0.2); border: 1px solid rgba(67,97,238,0.35); display: flex; align-items: center; justify-content: center; font-size: 9px; color: #818cf8; flex-shrink: 0; margin-top: 1px; }
        .btn-plan { display: flex; align-items: center; justify-content: center; width: 100%; padding: 12px; border-radius: 9px; font-family: 'Outfit', sans-serif; font-size: 13.5px; font-weight: 600; text-decoration: none; transition: all 0.2s; cursor: pointer; border: none; }
        .btn-plan:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-plan-primary { background: #4361EE; color: #fff; box-shadow: 0 4px 20px rgba(67,97,238,0.3); }
        .btn-plan-ghost { background: transparent; color: var(--text2); border: 1px solid var(--border2); }

        /* CTA */
        .cta-section { margin: 32px 48px 80px; border-radius: 24px; padding: 80px 48px; text-align: center; position: relative; overflow: hidden; background: linear-gradient(145deg, rgba(67,97,238,0.2) 0%, rgba(0,212,255,0.06) 100%); border: 1px solid rgba(67,97,238,0.35); }
        .cta-glow { position: absolute; top: -80px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(67,97,238,0.3) 0%, transparent 70%); pointer-events: none; }
        .cta-section h2 { font-size: clamp(28px, 4vw, 50px); font-weight: 800; letter-spacing: -0.03em; margin-bottom: 14px; color: #fff; position: relative; z-index: 1; }
        .cta-section p { font-size: 15px; color: var(--text2); margin-bottom: 40px; position: relative; z-index: 1; max-width: 440px; margin-left: auto; margin-right: auto; line-height: 1.7; }
        .cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }
        .cta-note { margin-top: 18px; font-size: 12.5px; color: var(--text3); position: relative; z-index: 1; }

        /* FOOTER */
        footer { border-top: 1px solid var(--border); padding: 44px 52px 36px; }
        .footer-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 48px; margin-bottom: 40px; flex-wrap: wrap; }
        .footer-brand { max-width: 260px; }
        .footer-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; margin-bottom: 12px; }
        .footer-logo img { height: 36px; object-fit: contain; }
        .footer-tagline { font-size: 13px; color: var(--text3); line-height: 1.6; }
        .footer-cols { display: flex; gap: 56px; flex-wrap: wrap; }
        .footer-col h4 { font-size: 11px; font-weight: 700; color: var(--text2); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px; }
        .footer-col-links { display: flex; flex-direction: column; gap: 9px; }
        .footer-col-links a { font-size: 13px; color: var(--text3); text-decoration: none; transition: color 0.2s; }
        .footer-col-links a:hover { color: #fff; }
        .footer-bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding-top: 28px; border-top: 1px solid var(--border); }
        .footer-bottom p { font-size: 12px; color: var(--text3); }
        .footer-bottom-links { display: flex; gap: 20px; }
        .footer-bottom-links a { font-size: 12px; color: var(--text3); text-decoration: none; transition: color 0.2s; }
        .footer-bottom-links a:hover { color: var(--text2); }
      `}</style>

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
          <div className="hero-orb1" />
          <div className="hero-orb2" />
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

        {/* DASHBOARD MOCKUP — outside hero so it doesn't cause blank space */}
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
                        <div className="mockup-cell"><span className="mockup-badge" style={{ background: "rgba(67,97,238,0.15)", color: "#a5b4fc" }}>{row.intent}</span></div>
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
                      <div key={e} style={{ fontSize: 10, color: "#b91c1c", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{e}</div>
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
                    <div className="author-avatar" style={{ background: t.color }}>{t.initials}</div>
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