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
    { name: "WooCommerce", live: true },
    { name: "ClickBank", live: false },
    { name: "Digistore24", live: false },
    { name: "Konnektive", live: false },
    { name: "BuyGoods", live: false },
  ];

  const steps = [
    { num: "Step 01", icon: "🔌", title: "Connect your store", desc: "Link your Shopify or WooCommerce store in minutes. No code, no developers, no waiting. Your orders are imported automatically." },
    { num: "Step 02", icon: "🤖", title: "AI resolves support instantly", desc: "Customers get instant answers 24/7 — order tracking, status updates, refund requests, cancellations. No wait times, no tickets piling up." },
    { num: "Step 03", icon: "🎯", title: "You only handle what matters", desc: "Complex issues are escalated to you with full conversation context attached. You stay in control without drowning in routine questions." },
  ];

  const features = [
    { icon: "🤖", title: "AI Classification", desc: "Gemini AI reads every message, classifies intent with a confidence score, and routes it instantly — no manual triaging needed." },
    { icon: "📦", title: "Instant Order Lookup", desc: "Customers self-serve order status and tracking in real time without ever needing to contact your team." },
    { icon: "⚡", title: "Smart Escalation", desc: "Refunds, damaged items, and edge cases are escalated automatically with full conversation context so you never start from scratch." },
    { icon: "🔌", title: "Multi-Platform", desc: "One unified dashboard for Shopify, WooCommerce, and every platform you sell on. No switching between tools." },
    { icon: "📊", title: "Live Dashboard", desc: "Monitor every request, escalation, and resolution in real time. Filter by intent, platform, and status at a glance." },
    { icon: "💬", title: "Embeddable Widget", desc: "A sleek floating chat widget that lives directly on your store. Fully branded, fully yours, live in minutes." },
  ];

  const testimonials = [
    {
      quote: "We cut support response time from 6 hours to under 2 seconds. Our team now only handles truly complex issues — everything else is resolved automatically.",
      name: "Marcus T.", title: "Founder, DTC Supplement Brand",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "Setup took 8 minutes. It connected to Shopify and started answering order questions the same day. I didn't have to do anything after that.",
      name: "Priya K.", title: "Head of Operations, Home Goods Store",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "The escalation logic is genuinely smart. Real issues reach us fast, routine noise gets handled automatically. It's exactly what we needed.",
      name: "Jordan M.", title: "CX Lead, Apparel Brand",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    },
  ];

  const plans = [
    {
      name: "Starter", price: "$49", period: "/mo",
      desc: "Perfect for small stores ready to automate support.",
      features: ["1 brand", "Unlimited AI responses", "Order lookup", "Email escalation", "Dashboard access", "14-day free trial"],
      cta: "Start Free Trial", href: "https://app.solvebotic.com/onboarding", featured: false,
      badge: null,
    },
    {
      name: "Growth", price: "$99", period: "/mo",
      desc: "For growing brands that need more volume and platform flexibility.",
      features: ["3 brands", "Unlimited AI responses", "All platforms", "Priority escalation", "Slack notifications", "Real-time dashboard", "14-day free trial"],
      cta: "Start Free Trial", href: "https://app.solvebotic.com/onboarding", featured: true,
      badge: "Most Popular",
    },
    {
      name: "Scale", price: "$199", period: "/mo",
      desc: "For established brands running high support volume across multiple channels.",
      features: ["Unlimited brands", "Unlimited AI responses", "All platforms", "Dedicated escalation inbox", "Advanced analytics", "Priority support", "14-day free trial"],
      cta: "Start Free Trial", href: "https://app.solvebotic.com/onboarding", featured: false,
      badge: null,
    },
    {
      name: "Enterprise", price: "Custom", period: "",
      desc: "For large operations that need custom solutions and dedicated support.",
      features: ["Unlimited brands", "Unlimited AI responses", "All platforms", "Dedicated account manager", "Custom integrations", "SLA guarantee", "White-glove onboarding"],
      cta: "Contact Us", href: "mailto:support@solvebotic.com", featured: false,
      badge: null,
    },
  ];

  const tickerItems = [
    "Unlimited AI responses on every plan", "Zero missed support tickets", "Shopify native integration",
    "Refund requests auto-escalated", "24/7 AI coverage", "Instant responses at scale",
    "WooCommerce fully supported", "No per-ticket fees ever", "Live in under 10 minutes",
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Outfit:wght@300;400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #060A18;
          --bg2: #0A1020;
          --surface: rgba(0,119,204,0.06);
          --border: rgba(0,170,255,0.12);
          --border2: rgba(0,170,255,0.28);
          --accent: #0077CC;
          --accent2: #00AAFF;
          --accent-dim: rgba(0,119,204,0.15);
          --text: #E8F4FF;
          --text2: #7AA8C8;
          --text3: #3A5870;
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

        .circuit-bg {
          position: fixed; inset: 0; z-index: -1; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,170,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,170,255,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 100% 100% at 50% 0%, black 20%, transparent 80%);
        }
        .circuit-bg::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(0,170,255,0.35) 1.5px, transparent 1.5px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 75%);
        }
        .circuit-bg::after {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 600px 400px at 20% 30%, rgba(0,119,204,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 400px 300px at 80% 60%, rgba(0,170,255,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 500px 350px at 50% 10%, rgba(27,58,140,0.15) 0%, transparent 70%);
          animation: orbPulse 8s ease-in-out infinite;
        }
        @keyframes orbPulse { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }

        .circuit-traces { position: fixed; inset: 0; z-index: -1; pointer-events: none; overflow: hidden; }
        .trace { position: absolute; background: linear-gradient(90deg, transparent, rgba(0,170,255,0.6), transparent); height: 1px; width: 200px; animation: traceFlow 6s ease-in-out infinite; filter: blur(0.5px); }
        .trace-v { position: absolute; background: linear-gradient(180deg, transparent, rgba(0,170,255,0.5), transparent); width: 1px; height: 150px; animation: traceFlowV 7s ease-in-out infinite; filter: blur(0.5px); }
        @keyframes traceFlow { 0% { transform: translateX(-200px); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateX(calc(100vw + 200px)); opacity: 0; } }
        @keyframes traceFlowV { 0% { transform: translateY(-150px); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(calc(100vh + 150px)); opacity: 0; } }
        .trace-dot { position: absolute; width: 6px; height: 6px; background: #00AAFF; border-radius: 50%; box-shadow: 0 0 8px 2px rgba(0,170,255,0.8); animation: dotFlow 6s ease-in-out infinite; margin-top: -2.5px; }
        .trace-dot-v { position: absolute; width: 6px; height: 6px; background: #00AAFF; border-radius: 50%; box-shadow: 0 0 8px 2px rgba(0,170,255,0.8); animation: dotFlowV 7s ease-in-out infinite; margin-left: -2.5px; }
        @keyframes dotFlow { 0% { transform: translateX(-200px); opacity: 0; } 5% { opacity: 1; } 95% { opacity: 1; } 100% { transform: translateX(calc(100vw + 200px)); opacity: 0; } }
        @keyframes dotFlowV { 0% { transform: translateY(-150px); opacity: 0; } 5% { opacity: 1; } 95% { opacity: 1; } 100% { transform: translateY(calc(100vh + 150px)); opacity: 0; } }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 52px; height: 68px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 1px 12px rgba(0,0,0,0.06);
        }
        .nav-logo { display: flex; align-items: center; text-decoration: none; }
        .nav-logo img { height: 44px; object-fit: contain; }
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-links a { color: #4b5563; font-size: 14px; text-decoration: none; transition: color 0.2s; font-weight: 500; }
        .nav-links a:hover { color: #0077CC; }
        .nav-divider { width: 1px; height: 18px; background: #e5e7eb; }
        .btn-primary {
          background: linear-gradient(135deg, #0066BB, #00AAFF);
          color: #fff; font-family: 'Outfit', sans-serif; font-size: 13.5px; font-weight: 600;
          padding: 9px 20px; border-radius: 8px; text-decoration: none; border: none; cursor: pointer;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          display: inline-flex; align-items: center; gap: 6px;
          box-shadow: 0 4px 16px rgba(0,170,255,0.3);
        }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,170,255,0.4); }
        .btn-ghost {
          background: transparent; color: var(--text); font-family: 'Outfit', sans-serif;
          font-size: 15px; font-weight: 500; padding: 12px 28px; border-radius: 10px;
          text-decoration: none; border: 1px solid var(--border2);
          transition: border-color 0.2s, background 0.2s; display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-ghost:hover { border-color: var(--accent2); background: rgba(0,170,255,0.07); }

        .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 130px 24px 48px; position: relative; }
        .hero-glow { position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 1000px; height: 700px; background: radial-gradient(ellipse, rgba(0,119,204,0.18) 0%, rgba(27,58,140,0.08) 40%, transparent 70%); pointer-events: none; z-index: 0; }
        .hero-inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; width: 100%; }
        .badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(0,119,204,0.15); border: 1px solid rgba(0,170,255,0.4); color: #7DD3FC; font-size: 11.5px; font-weight: 600; padding: 5px 14px 5px 10px; border-radius: 100px; letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 28px; animation: fadeUp 0.6s ease both; }
        .badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #00AAFF; box-shadow: 0 0 8px #00AAFF; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 8px #00AAFF; } 50% { box-shadow: 0 0 16px #00AAFF; opacity: 0.6; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .hero h1 { font-size: clamp(42px, 6.5vw, 82px); font-weight: 800; line-height: 1.06; letter-spacing: -0.04em; margin-bottom: 22px; color: #fff; animation: fadeUp 0.6s 0.1s ease both; }
        .gradient-text { background: linear-gradient(115deg, #0088DD 0%, #00AAFF 50%, #7DD3FC 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-sub { font-size: 18px; color: var(--text2); line-height: 1.75; max-width: 560px; margin: 0 auto 36px; animation: fadeUp 0.6s 0.2s ease both; }
        .hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; animation: fadeUp 0.6s 0.3s ease both; }
        .btn-large { font-size: 15px; font-weight: 600; padding: 14px 32px; border-radius: 10px; }
        .hero-disclaimer { font-size: 12px; color: var(--text3); margin-top: 14px; animation: fadeUp 0.6s 0.35s ease both; }
        .stats-wrap { animation: fadeUp 0.7s 0.45s ease both; margin-top: 48px; width: 100%; max-width: 700px; }
        .stats { display: flex; border: 1px solid var(--border2); border-radius: 16px; overflow: hidden; background: rgba(0,119,204,0.07); backdrop-filter: blur(12px); }
        .stat { flex: 1; padding: 22px 16px; text-align: center; border-right: 1px solid var(--border); }
        .stat:last-child { border-right: none; }
        .stat-num { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 26px; font-weight: 800; color: #fff; letter-spacing: -0.03em; line-height: 1; }
        .stat-label { font-size: 12px; color: var(--text3); margin-top: 5px; }

        .mockup-section { padding: 40px 48px 0; display: flex; justify-content: center; }
        .mockup-wrap { width: 100%; max-width: 960px; position: relative; }
        .mockup-fade-bottom { position: absolute; bottom: 0; left: 0; right: 0; height: 100px; background: linear-gradient(to bottom, transparent, var(--bg)); pointer-events: none; }
        .mockup-browser { background: #f4f4f6; border-radius: 12px; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,170,255,0.15), 0 0 60px rgba(0,100,200,0.08); }
        .mockup-bar { background: #e8e8ea; padding: 10px 16px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(0,0,0,0.08); }
        .mockup-dot { width: 10px; height: 10px; border-radius: 50%; }
        .mockup-url { flex: 1; background: white; border-radius: 5px; padding: 4px 10px; font-size: 11px; color: #888; font-family: monospace; margin: 0 12px; border: 1px solid rgba(0,0,0,0.08); }
        .mockup-body { display: grid; grid-template-columns: 200px 1fr 240px; min-height: 340px; font-family: 'Inter', sans-serif; }
        .mockup-sidebar { background: white; border-right: 1px solid #ebebeb; padding: 16px 12px; }
        .mockup-logo-row { display: flex; align-items: center; gap: 8px; padding: 6px 10px; margin-bottom: 12px; }
        .mockup-logo-img { height: 28px; object-fit: contain; }
        .mockup-brand-chip { font-size: 10px; color: #6b7280; background: #f3f4f6; padding: 2px 8px; border-radius: 20px; margin-left: 4px; }
        .mockup-section-label { font-size: 9px; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.06em; padding: 10px 10px 4px; }
        .mockup-nav-item { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 7px; font-size: 11px; color: #6b7280; margin-bottom: 1px; cursor: default; }
        .mockup-nav-item.active { background: #EEF2FF; color: #4F46E5; font-weight: 500; }
        .mockup-nav-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
        .mockup-main { padding: 16px; display: flex; flex-direction: column; gap: 12px; background: #f4f4f6; }
        .mockup-stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .mockup-stat-card { background: white; border: 1px solid #ebebeb; border-radius: 8px; padding: 10px 12px; }
        .mockup-stat-label { font-size: 9px; color: #9ca3af; margin-bottom: 5px; }
        .mockup-stat-val { font-size: 20px; font-weight: 600; color: #111827; }
        .mockup-stat-val.red { color: #dc2626; }
        .mockup-stat-val.green { color: #16a34a; }
        .mockup-section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
        .mockup-section-title { font-size: 11px; font-weight: 600; color: #111; }
        .mockup-row-count { font-size: 10px; color: #9ca3af; }
        .mockup-table-wrap { background: white; border: 1px solid #ebebeb; border-radius: 8px; overflow: hidden; }
        .mockup-table-header { display: grid; grid-template-columns: 1.4fr 2fr 1fr 0.8fr 0.9fr; padding: 7px 12px; border-bottom: 1px solid #f3f4f6; }
        .mockup-th { font-size: 9px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500; }
        .mockup-row { display: grid; grid-template-columns: 1.4fr 2fr 1fr 0.8fr 0.9fr; padding: 8px 12px; border-bottom: 1px solid #f9f9f9; align-items: center; }
        .mockup-row:last-child { border-bottom: none; }
        .mockup-cell { font-size: 10px; color: #374151; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .mockup-cell.muted { color: #9ca3af; }
        .mockup-badge { display: inline-block; padding: 2px 7px; border-radius: 20px; font-size: 9px; font-weight: 500; }
        .badge-blue { background: #EEF2FF; color: #4338CA; }
        .badge-green { background: #f0fdf4; color: #15803d; }
        .badge-red { background: #fef2f2; color: #b91c1c; }
        .badge-yellow { background: #fffbeb; color: #b45309; }
        .escalated-flag { font-size: 9px; color: #b91c1c; display: block; margin-top: 2px; }
        .mockup-right { background: white; border-left: 1px solid #ebebeb; padding: 14px; display: flex; flex-direction: column; gap: 16px; }
        .mockup-panel-title { font-size: 9px; font-weight: 700; color: #4F46E5; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .mockup-input { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 5px; padding: 6px 8px; font-size: 10px; color: #9ca3af; margin-bottom: 5px; width: 100%; }
        .mockup-lookup-btn { background: #4F46E5; border-radius: 5px; padding: 6px; font-size: 10px; color: #fff; text-align: center; font-weight: 500; width: 100%; }
        .mockup-escalation-item { padding: 7px 0; border-bottom: 1px solid #f3f4f6; }
        .mockup-escalation-item:last-child { border-bottom: none; }
        .mockup-esc-email { font-size: 9px; color: #9ca3af; margin-bottom: 2px; }
        .mockup-esc-reason { font-size: 10px; color: #111; font-weight: 500; }
        .mockup-esc-meta { display: flex; justify-content: space-between; margin-top: 3px; }
        .mockup-esc-system { font-size: 9px; color: #b91c1c; }
        .mockup-esc-time { font-size: 9px; color: #9ca3af; }
        .mockup-intent-bar { margin-bottom: 8px; }
        .mockup-intent-row { display: flex; justify-content: space-between; margin-bottom: 4px; }
        .mockup-intent-label { font-size: 10px; color: #374151; }
        .mockup-intent-count { font-size: 10px; color: #9ca3af; }
        .mockup-bar-track { height: 3px; background: #f3f4f6; border-radius: 2px; }
        .mockup-bar-fill { height: 100%; background: #4F46E5; border-radius: 2px; }

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

        .photo-band { padding: 48px 0; overflow: hidden; }
        .photo-band-inner { display: flex; gap: 16px; padding: 0 48px; }
        .photo-card { flex: 1; min-width: 0; border-radius: 16px; overflow: hidden; position: relative; height: 200px; border: 1px solid var(--border); }
        .photo-card img { width: 100%; height: 100%; object-fit: cover; opacity: 0.65; transition: opacity 0.3s; }
        .photo-card:hover img { opacity: 0.85; }
        .photo-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,100,200,0.25), transparent 60%); }
        .photo-label { position: absolute; bottom: 0; left: 0; right: 0; padding: 12px 16px; background: linear-gradient(to top, rgba(6,10,24,0.9), transparent); font-size: 12px; font-weight: 600; color: var(--text2); letter-spacing: 0.04em; }

        .section-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; color: var(--text3); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 16px; }
        .eyebrow-line { width: 20px; height: 1px; background: var(--accent2); opacity: 0.5; }
        .section-title { font-size: clamp(26px, 3.5vw, 42px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: #fff; margin-bottom: 12px; }
        .section-sub { font-size: 15px; color: var(--text2); line-height: 1.7; }

        .platforms { padding: 56px 48px; text-align: center; }
        .platform-grid { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 720px; margin: 28px auto 0; }
        .platform-chip { background: rgba(0,119,204,0.08); border: 1px solid rgba(0,170,255,0.15); border-radius: 10px; padding: 10px 18px; font-size: 13px; font-weight: 500; color: #7AAAC4; transition: all 0.2s; display: flex; align-items: center; gap: 8px; }
        .platform-chip:hover { border-color: rgba(0,170,255,0.4); background: rgba(0,119,204,0.15); color: #BAE6FD; transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,100,200,0.2); }
        .platform-chip.live { border-color: rgba(0,170,255,0.35); color: #7DD3FC; background: rgba(0,119,204,0.12); }
        .live-badge { font-size: 10px; font-weight: 700; color: #4ade80; background: rgba(74,222,128,0.12); border: 1px solid rgba(74,222,128,0.3); padding: 1px 7px; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.06em; }
        .soon-badge { font-size: 10px; font-weight: 600; color: var(--text3); background: rgba(0,170,255,0.05); border: 1px solid rgba(0,170,255,0.1); padding: 1px 7px; border-radius: 100px; text-transform: uppercase; }

        .how-section { padding: 56px 48px; }
        .how-inner { max-width: 1080px; margin: 0 auto; }
        .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 40px; border: 1px solid var(--border2); border-radius: 20px; overflow: hidden; background: var(--border); }
        .step { background: var(--bg2); padding: 36px 30px; position: relative; transition: background 0.3s; }
        .step::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, rgba(0,170,255,0.6), transparent); opacity: 0; transition: opacity 0.3s; }
        .step:hover { background: rgba(0,119,204,0.07); }
        .step:hover::before { opacity: 1; }
        .step-num { font-size: 11px; font-weight: 700; color: var(--accent2); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 20px; }
        .step-icon { width: 46px; height: 46px; border-radius: 11px; background: rgba(0,119,204,0.15); border: 1px solid rgba(0,170,255,0.25); display: flex; align-items: center; justify-content: center; font-size: 21px; margin-bottom: 18px; }
        .step h3 { font-size: 17px; font-weight: 700; margin-bottom: 10px; color: #fff; letter-spacing: -0.02em; }
        .step p { font-size: 13.5px; color: var(--text2); line-height: 1.7; }

        .features-section { padding: 56px 48px; }
        .features-inner { max-width: 1080px; margin: 0 auto; }
        .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 40px; }
        .feature-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 26px; transition: all 0.3s; position: relative; overflow: hidden; }
        .feature-card::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,170,255,0.5), transparent); opacity: 0; transition: opacity 0.3s; }
        .feature-card:hover { border-color: rgba(0,170,255,0.3); transform: translateY(-3px); background: rgba(0,119,204,0.08); box-shadow: 0 8px 32px rgba(0,100,200,0.15); }
        .feature-card:hover::after { opacity: 1; }
        .feature-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(0,119,204,0.15); border: 1px solid rgba(0,170,255,0.25); display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 16px; }
        .feature-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: #fff; }
        .feature-card p { font-size: 13px; color: var(--text2); line-height: 1.65; }

        .testimonials-section { padding: 56px 48px; }
        .testimonials-inner { max-width: 1080px; margin: 0 auto; }
        .testimonial-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 40px; }
        .testimonial-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 26px; transition: all 0.3s; }
        .testimonial-card:hover { border-color: var(--border2); transform: translateY(-3px); box-shadow: 0 8px 32px rgba(0,100,200,0.12); }
        .stars { display: flex; gap: 3px; margin-bottom: 14px; }
        .star { color: #F59E0B; font-size: 13px; }
        .testimonial-card blockquote { font-size: 13.5px; color: var(--text2); line-height: 1.75; margin-bottom: 20px; }
        .testimonial-author { display: flex; align-items: center; gap: 10px; }
        .author-avatar { width: 38px; height: 38px; border-radius: 50%; overflow: hidden; flex-shrink: 0; border: 2px solid rgba(0,170,255,0.25); }
        .author-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .author-name { font-size: 12.5px; font-weight: 600; color: #fff; }
        .author-title { font-size: 11.5px; color: var(--text3); margin-top: 2px; }

        .pricing-section { padding: 56px 48px; }
        .pricing-inner { max-width: 1160px; margin: 0 auto; text-align: center; }
        .pricing-trial-note { font-size: 14px; color: var(--accent2); margin-top: 8px; font-weight: 500; }
        .pricing-unlimited-note { font-size: 13px; color: #4ade80; margin-top: 6px; font-weight: 600; }
        .pricing-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 40px; text-align: left; }
        .pricing-card { background: var(--surface); border: 1px solid var(--border); border-radius: 18px; padding: 28px 22px; position: relative; transition: all 0.3s; display: flex; flex-direction: column; }
        .pricing-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,100,200,0.15); }
        .pricing-card.featured { background: linear-gradient(145deg, rgba(0,119,204,0.18) 0%, rgba(0,170,255,0.06) 100%); border-color: rgba(0,170,255,0.4); box-shadow: 0 0 40px rgba(0,100,200,0.12); }
        .popular-tag { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: linear-gradient(115deg, #0066BB, #00AAFF); color: #fff; font-size: 10px; font-weight: 700; padding: 4px 14px; border-radius: 100px; letter-spacing: 0.08em; white-space: nowrap; box-shadow: 0 4px 16px rgba(0,170,255,0.4); }
        .plan-name { font-size: 11px; font-weight: 700; color: var(--text3); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.1em; }
        .plan-price { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 42px; font-weight: 800; line-height: 1; color: #fff; letter-spacing: -0.04em; }
        .plan-period { font-size: 13px; color: var(--text2); margin-left: 2px; }
        .plan-desc { font-size: 12.5px; color: var(--text2); margin: 14px 0 20px; line-height: 1.6; }
        .plan-divider { height: 1px; background: var(--border); margin-bottom: 18px; }
        .plan-features { display: flex; flex-direction: column; gap: 9px; margin-bottom: 24px; flex: 1; }
        .plan-feature { display: flex; align-items: flex-start; gap: 9px; font-size: 12.5px; color: #BAE6FD; line-height: 1.4; }
        .plan-feature.highlight { color: #4ade80; font-weight: 600; }
        .check-box { width: 16px; height: 16px; border-radius: 4px; background: rgba(0,119,204,0.2); border: 1px solid rgba(0,170,255,0.3); display: flex; align-items: center; justify-content: center; font-size: 9px; color: #7DD3FC; flex-shrink: 0; margin-top: 1px; }
        .check-box.green { background: rgba(74,222,128,0.15); border-color: rgba(74,222,128,0.4); color: #4ade80; }
        .btn-plan { display: flex; align-items: center; justify-content: center; width: 100%; padding: 11px; border-radius: 9px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600; text-decoration: none; transition: all 0.2s; cursor: pointer; border: none; margin-top: auto; }
        .btn-plan:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-plan-primary { background: linear-gradient(135deg, #0066BB, #00AAFF); color: #fff; box-shadow: 0 4px 20px rgba(0,170,255,0.3); }
        .btn-plan-ghost { background: transparent; color: var(--text2); border: 1px solid var(--border2); }
        .plan-trial { font-size: 11px; color: var(--text3); text-align: center; margin-top: 10px; }

        .trust-strip { padding: 32px 48px; display: flex; align-items: center; justify-content: center; gap: 48px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); flex-wrap: wrap; }
        .trust-item { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--text2); font-weight: 500; }
        .trust-icon { font-size: 18px; }

        .cta-section { margin: 32px 48px 72px; border-radius: 24px; padding: 80px 48px; text-align: center; position: relative; overflow: hidden; background: linear-gradient(145deg, rgba(0,119,204,0.2) 0%, rgba(27,58,140,0.1) 100%); border: 1px solid rgba(0,170,255,0.3); }
        .cta-glow { position: absolute; top: -80px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(0,119,204,0.3) 0%, transparent 70%); pointer-events: none; }
        .cta-section h2 { font-size: clamp(28px, 4vw, 50px); font-weight: 800; letter-spacing: -0.03em; margin-bottom: 14px; color: #fff; position: relative; z-index: 1; }
        .cta-section p { font-size: 15px; color: var(--text2); margin-bottom: 40px; position: relative; z-index: 1; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.7; }
        .cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }
        .cta-note { margin-top: 18px; font-size: 12.5px; color: var(--text3); position: relative; z-index: 1; }

        footer {
          background: #ffffff;
          border-top: 1px solid #e5e7eb;
          padding: 48px 52px 36px;
        }
        .footer-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 48px; margin-bottom: 40px; flex-wrap: wrap; }
        .footer-brand { max-width: 280px; }
        .footer-logo { display: flex; align-items: center; text-decoration: none; margin-bottom: 12px; }
        .footer-logo img { height: 44px; object-fit: contain; }
        .footer-tagline { font-size: 13px; color: #6b7280; line-height: 1.6; }
        .footer-cols { display: flex; gap: 56px; flex-wrap: wrap; }
        .footer-col h4 { font-size: 11px; font-weight: 700; color: #374151; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px; }
        .footer-col-links { display: flex; flex-direction: column; gap: 9px; }
        .footer-col-links a { font-size: 13px; color: #6b7280; text-decoration: none; transition: color 0.2s; }
        .footer-col-links a:hover { color: #0077CC; }
        .footer-bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding-top: 28px; border-top: 1px solid #e5e7eb; }
        .footer-bottom p { font-size: 12px; color: #9ca3af; }
        .footer-bottom-links { display: flex; gap: 20px; }
        .footer-bottom-links a { font-size: 12px; color: #9ca3af; text-decoration: none; transition: color 0.2s; }
        .footer-bottom-links a:hover { color: #374151; }

        /* ===================== TABLET (641px - 1024px) ===================== */
        @media (max-width: 1024px) {
          nav { padding: 0 28px; height: 64px; }
          .nav-logo img { height: 38px; }
          .nav-links { gap: 20px; }
          .nav-links a { font-size: 13px; }

          .hero { padding: 110px 24px 40px; min-height: auto; }
          .hero-sub { font-size: 16px; }

          .mockup-section { padding: 32px 28px 0; }
          .mockup-body { grid-template-columns: 160px 1fr 200px; }

          .ticker-section { padding: 32px 0 36px; }

          .photo-band-inner { padding: 0 28px; gap: 12px; }
          .photo-card { height: 160px; }

          .platforms, .how-section, .features-section, .testimonials-section, .pricing-section { padding: 48px 28px; }

          .steps { grid-template-columns: repeat(3, 1fr); }
          .step { padding: 28px 22px; }

          .feature-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonial-grid { grid-template-columns: repeat(2, 1fr); }

          .pricing-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }

          .trust-strip { padding: 28px; gap: 28px; }

          .cta-section { margin: 28px 28px 56px; padding: 60px 32px; }

          footer { padding: 40px 28px 32px; }
          .footer-cols { gap: 36px; }
        }

        /* ===================== MOBILE (≤640px) ===================== */
        @media (max-width: 640px) {
          nav { padding: 0 16px; height: 60px; }
          .nav-logo img { height: 34px; }
          /* Hide nav text links on mobile — keep only the trial CTA */
          .nav-links a:not(.btn-primary) { display: none; }
          .nav-divider { display: none; }
          .nav-links { gap: 0; }
          .btn-primary { font-size: 12.5px; padding: 8px 14px; }

          .hero { padding: 96px 18px 32px; min-height: auto; }
          .hero h1 { font-size: clamp(34px, 9vw, 52px); margin-bottom: 18px; }
          .hero-sub { font-size: 15px; line-height: 1.65; margin-bottom: 28px; }
          .badge { font-size: 10.5px; margin-bottom: 22px; }
          .hero-btns { gap: 10px; flex-direction: column; width: 100%; max-width: 320px; }
          .hero-btns a { width: 100%; justify-content: center; }
          .btn-large { font-size: 14.5px; padding: 13px 24px; }
          .hero-disclaimer { font-size: 11.5px; }

          .stats-wrap { margin-top: 36px; }
          /* Stats: 4 in a row → 2x2 grid */
          .stats { display: grid; grid-template-columns: repeat(2, 1fr); border-radius: 14px; }
          .stat { padding: 16px 10px; border-right: none; border-bottom: 1px solid var(--border); }
          .stat:nth-child(2) { border-right: none; }
          .stat:nth-child(odd) { border-right: 1px solid var(--border); }
          .stat:nth-child(3), .stat:nth-child(4) { border-bottom: none; }
          .stat-num { font-size: 22px; }
          .stat-label { font-size: 11px; }

          /* Hide the dashboard mockup on mobile — too dense to render usefully */
          .mockup-section { display: none; }

          .ticker-section { padding: 24px 0 32px; }
          .ticker-chip { font-size: 11.5px; padding: 7px 12px; }
          .ticker-outer::before, .ticker-outer::after { width: 60px; }

          .photo-band { padding: 32px 0; }
          .photo-band-inner { padding: 0 16px; gap: 10px; flex-direction: column; }
          .photo-card { height: 140px; }

          .trust-strip { padding: 24px 16px; gap: 14px; flex-direction: column; align-items: flex-start; }
          .trust-item { font-size: 13px; }

          .platforms, .how-section, .features-section, .testimonials-section, .pricing-section { padding: 44px 16px; }
          .section-title { font-size: clamp(24px, 6vw, 32px); }
          .section-sub { font-size: 14px; }

          .platform-grid { gap: 8px; margin-top: 22px; }
          .platform-chip { font-size: 12px; padding: 8px 14px; }

          /* How it works steps stack vertically */
          .steps { grid-template-columns: 1fr; margin-top: 28px; border-radius: 16px; }
          .step { padding: 26px 22px; }
          .step h3 { font-size: 16px; }
          .step p { font-size: 13px; }

          /* Features 3 cols → 1 col */
          .feature-grid { grid-template-columns: 1fr; gap: 12px; margin-top: 28px; }
          .feature-card { padding: 22px; }

          /* Testimonials 3 cols → 1 col */
          .testimonial-grid { grid-template-columns: 1fr; gap: 12px; margin-top: 28px; }
          .testimonial-card { padding: 22px; }

          /* Pricing 4 cols → 1 col, this is the big one */
          .pricing-grid { grid-template-columns: 1fr; gap: 14px; margin-top: 32px; }
          .pricing-card { padding: 26px 22px; }
          .plan-price { font-size: 38px; }
          .pricing-trial-note { font-size: 13px; }
          .pricing-unlimited-note { font-size: 12px; }

          .cta-section { margin: 24px 16px 48px; padding: 48px 22px; border-radius: 20px; }
          .cta-section h2 { font-size: clamp(24px, 6.5vw, 36px); }
          .cta-section p { font-size: 14px; margin-bottom: 28px; }
          .cta-btns { flex-direction: column; gap: 10px; width: 100%; max-width: 320px; margin: 0 auto; }
          .cta-btns a { width: 100%; justify-content: center; }
          .cta-note { font-size: 11.5px; }

          footer { padding: 36px 18px 28px; }
          .footer-top { gap: 32px; margin-bottom: 32px; }
          .footer-brand { max-width: 100%; }
          .footer-cols { gap: 28px; width: 100%; }
          .footer-col { min-width: 120px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 14px; padding-top: 24px; }
          .footer-bottom-links { gap: 16px; flex-wrap: wrap; }
        }
      `}</style>

      <div className="circuit-bg" />
      <div className="circuit-traces">
        {[
          { top: "12%", delay: "0s", duration: "8s" },
          { top: "28%", delay: "2s", duration: "10s" },
          { top: "45%", delay: "1s", duration: "9s" },
          { top: "62%", delay: "3s", duration: "7s" },
          { top: "78%", delay: "0.5s", duration: "11s" },
        ].map((t, i) => (
          <div key={i}>
            <div className="trace" style={{ top: t.top, animationDelay: t.delay, animationDuration: t.duration }} />
            <div className="trace-dot" style={{ top: t.top, animationDelay: t.delay, animationDuration: t.duration }} />
          </div>
        ))}
        {[
          { left: "15%", delay: "1s", duration: "9s" },
          { left: "35%", delay: "3s", duration: "11s" },
          { left: "65%", delay: "0s", duration: "8s" },
          { left: "85%", delay: "2s", duration: "10s" },
        ].map((t, i) => (
          <div key={i}>
            <div className="trace-v" style={{ left: t.left, animationDelay: t.delay, animationDuration: t.duration }} />
            <div className="trace-dot-v" style={{ left: t.left, animationDelay: t.delay, animationDuration: t.duration }} />
          </div>
        ))}
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
            <a href="#how-it-works">How it works</a>
            <div className="nav-divider" />
            <a href="https://app.solvebotic.com/auth/login">Login</a>
            <a href="https://app.solvebotic.com/onboarding" className="btn-primary">Start Free Trial {arrow}</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-inner">
            <div className="badge"><div className="badge-dot" />Now live on Shopify {dash} WooCommerce</div>
            <h1>Your store gets<br />support questions.<br /><span className="gradient-text">We answer them.</span></h1>
            <p className="hero-sub">
              SolveBotic's AI handles order tracking, refund requests, and cancellations instantly {dash} 24/7, across every platform you sell on. Your team only sees what actually needs a human.
            </p>
            <div className="hero-btns">
              <a href="https://app.solvebotic.com/onboarding" className="btn-primary btn-large">Start Free Trial {arrow}</a>
              <a href="#how-it-works" className="btn-ghost btn-large">See how it works</a>
            </div>
            <p className="hero-disclaimer">14-day free trial {dot} Credit card required {dot} Cancel anytime</p>
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
              <div className="mockup-body">
                <div className="mockup-sidebar">
                  <div className="mockup-logo-row">
                    <img className="mockup-logo-img" src="/logo.png" alt="SolveBotic" />
                    <span className="mockup-brand-chip">My Store</span>
                  </div>
                  <div className="mockup-section-label">Main</div>
                  {[{ label: "Dashboard", active: true }, { label: "Escalations", active: false }, { label: "Reports", active: false }].map(item => (
                    <div key={item.label} className={`mockup-nav-item ${item.active ? "active" : ""}`}>
                      <div className="mockup-nav-dot" />{item.label}
                    </div>
                  ))}
                  <div className="mockup-section-label">Store</div>
                  {["Order lookup", "Shopify sync"].map(label => (
                    <div key={label} className="mockup-nav-item"><div className="mockup-nav-dot" />{label}</div>
                  ))}
                  <div className="mockup-section-label">Account</div>
                  <div className="mockup-nav-item"><div className="mockup-nav-dot" />Settings</div>
                </div>
                <div className="mockup-main">
                  <div className="mockup-stats-row">
                    {[
                      { label: "Total requests", val: "124", cls: "" },
                      { label: "Escalated", val: "8", cls: "red" },
                      { label: "Resolved", val: "112", cls: "green" },
                      { label: "Top intent", val: "Order", cls: "" },
                    ].map(s => (
                      <div key={s.label} className="mockup-stat-card">
                        <div className="mockup-stat-label">{s.label}</div>
                        <div className={`mockup-stat-val ${s.cls}`}>{s.val}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="mockup-section-header">
                      <span className="mockup-section-title">Recent conversations</span>
                      <span className="mockup-row-count">5 rows</span>
                    </div>
                    <div className="mockup-table-wrap">
                      <div className="mockup-table-header">
                        {["Customer", "Message", "Intent", "Conf.", "Status"].map(h => (
                          <div key={h} className="mockup-th">{h}</div>
                        ))}
                      </div>
                      {[
                        { email: "jane@email.com", msg: "Where is my order #1042?", intent: "Order lookup", intCls: "badge-blue", conf: "100%", status: "resolved", stCls: "badge-green", esc: false },
                        { email: "mike@email.com", msg: "I want a refund please", intent: "Refund request", intCls: "badge-red", conf: "99%", status: "escalated", stCls: "badge-red", esc: true },
                        { email: "sara@email.com", msg: "Package not delivered yet", intent: "Order status", intCls: "badge-blue", conf: "95%", status: "resolved", stCls: "badge-green", esc: false },
                        { email: "tom@email.com", msg: "Wrong item received", intent: "Wrong item", intCls: "badge-red", conf: "98%", status: "escalated", stCls: "badge-red", esc: true },
                        { email: "lucy@email.com", msg: "Order lookup for #1001", intent: "Order lookup", intCls: "badge-blue", conf: "100%", status: "open", stCls: "badge-yellow", esc: false },
                      ].map((row, i) => (
                        <div key={i} className="mockup-row">
                          <div className="mockup-cell muted">{row.email}</div>
                          <div className="mockup-cell">{row.msg}</div>
                          <div className="mockup-cell"><span className={`mockup-badge ${row.intCls}`}>{row.intent}</span></div>
                          <div className="mockup-cell" style={{ color: "#374151", fontWeight: 500 }}>{row.conf}</div>
                          <div className="mockup-cell">
                            <span className={`mockup-badge ${row.stCls}`}>{row.status}</span>
                            {row.esc && <span className="escalated-flag">{'\u2191'} escalated</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mockup-right">
                  <div>
                    <div className="mockup-panel-title">Order Lookup</div>
                    <div className="mockup-input">Order number</div>
                    <div className="mockup-input">Customer email</div>
                    <div className="mockup-lookup-btn">Look up order</div>
                  </div>
                  <div>
                    <div className="mockup-panel-title">Escalation Alerts <span style={{ background: "#fef2f2", color: "#b91c1c", fontSize: 9, padding: "1px 6px", borderRadius: 20, marginLeft: 4 }}>2</span></div>
                    {[
                      { email: "mike@email.com", reason: "refund_request", system: "Shopify → Finance", time: "Apr 27, 11:11 AM" },
                      { email: "tom@email.com", reason: "wrong_item", system: "Shopify → Fulfillment", time: "Apr 26, 3:22 PM" },
                    ].map((e, i) => (
                      <div key={i} className="mockup-escalation-item">
                        <div className="mockup-esc-email">{e.email}</div>
                        <div className="mockup-esc-reason">{e.reason}</div>
                        <div className="mockup-esc-meta">
                          <span className="mockup-esc-system">{e.system}</span>
                          <span className="mockup-esc-time">{e.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="mockup-panel-title">Intent Breakdown</div>
                    {[
                      { label: "Order lookup", pct: 67 },
                      { label: "Refund request", pct: 17 },
                      { label: "Order status", pct: 16 },
                    ].map(item => (
                      <div key={item.label} className="mockup-intent-bar">
                        <div className="mockup-intent-row">
                          <span className="mockup-intent-label">{item.label}</span>
                          <span className="mockup-intent-count">{item.pct}%</span>
                        </div>
                        <div className="mockup-bar-track">
                          <div className="mockup-bar-fill" style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
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
          <div className="ticker-label">What SolveBotic handles for you</div>
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
                <div className="photo-overlay" />
                <div className="photo-label">{p.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="trust-strip">
          {[
            { icon: "🔒", text: "Payments secured by Stripe" },
            { icon: "🤖", text: "Powered by Gemini AI" },
            { icon: "⚡", text: "Live in under 10 minutes" },
            { icon: "🔁", text: "Cancel anytime" },
            { icon: "📦", text: "Shopify & WooCommerce native" },
          ].map(t => (
            <div key={t.text} className="trust-item">
              <span className="trust-icon">{t.icon}</span>
              {t.text}
            </div>
          ))}
        </div>

        {/* PLATFORMS */}
        <section id="platforms" className="platforms">
          <div className="section-eyebrow"><div className="eyebrow-line" />Integrations<div className="eyebrow-line" /></div>
          <h2 className="section-title">Works where you sell.</h2>
          <p className="section-sub" style={{ maxWidth: 460, margin: "0 auto" }}>
            Connect your store in minutes {dash} no code, no developers, no waiting.
          </p>
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
            <p className="section-sub">No complex setup. No developer required. No ongoing maintenance.</p>
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
            <p className="section-sub">Built for ecommerce brands that want to grow without growing their support headcount.</p>
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
                    <div className="author-avatar"><img src={t.img} alt={t.name} /></div>
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
            <p className="section-sub">No setup fees. No hidden costs. No per-ticket charges.</p>
            <p className="pricing-trial-note">All plans include a 14-day free trial {dash} credit card required to start.</p>
            <p className="pricing-unlimited-note">✦ Unlimited AI responses on every plan {dash} no per-ticket fees, ever.</p>
            <div className="pricing-grid">
              {plans.map(plan => (
                <div key={plan.name} className={`pricing-card ${plan.featured ? "featured" : ""}`}>
                  {plan.badge && <div className="popular-tag">{plan.badge}</div>}
                  <div className="plan-name">{plan.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                    <span className="plan-price">{plan.price}</span>
                    <span className="plan-period">{plan.period}</span>
                  </div>
                  <p className="plan-desc">{plan.desc}</p>
                  <div className="plan-divider" />
                  <div className="plan-features">
                    {plan.features.map(f => (
                      <div key={f} className={`plan-feature ${f.includes("Unlimited AI") ? "highlight" : ""}`}>
                        <span className={`check-box ${f.includes("Unlimited AI") ? "green" : ""}`}>{check}</span>{f}
                      </div>
                    ))}
                  </div>
                  <a href={plan.href} className={`btn-plan ${plan.featured ? "btn-plan-primary" : "btn-plan-ghost"}`}>
                    {plan.cta} {arrow}
                  </a>
                  {plan.cta !== "Contact Us" && <p className="plan-trial">14-day free trial included</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-section">
          <div className="cta-glow" />
          <h2>Stop answering the<br />same questions twice.</h2>
          <p>SolveBotic handles your routine support automatically so your team can focus on the work that actually moves your business forward.</p>
          <div className="cta-btns">
            <a href="https://app.solvebotic.com/onboarding" className="btn-primary btn-large">Start Free Trial {arrow}</a>
            <a href="https://app.solvebotic.com/auth/login" className="btn-ghost btn-large">Login to dashboard</a>
          </div>
          <p className="cta-note">14-day free trial {dot} Credit card required {dot} Cancel anytime</p>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                <img src="/logo.png" alt="SolveBotic" />
              </a>
              <p className="footer-tagline">AI-powered customer support for ecommerce brands. Unlimited AI responses on every plan. Live in under 10 minutes.</p>
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