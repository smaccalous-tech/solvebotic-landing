import Image from "next/image";

export default function Home() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; color: #111827; background: white; }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid #f3f4f6", padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src="/logo.png" alt="SolveBotic" style={{ height: 40 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#features" style={{ fontSize: 14, color: "#6b7280", textDecoration: "none" }}>Features</a>
          <a href="#platforms" style={{ fontSize: 14, color: "#6b7280", textDecoration: "none" }}>Platforms</a>
          <a href="#pricing" style={{ fontSize: 14, color: "#6b7280", textDecoration: "none" }}>Pricing</a>
          <a href="https://app.solvebotic.com/auth/login" style={{ fontSize: 14, color: "#6b7280", textDecoration: "none" }}>Login</a>
          <a href="https://app.solvebotic.com/onboarding" style={{ background: "#4F46E5", color: "white", padding: "8px 20px", borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #ffffff 60%)", padding: "100px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#EEF2FF", color: "#4F46E5", fontSize: 12, fontWeight: 600, padding: "4px 14px", borderRadius: 20, marginBottom: 24, letterSpacing: "0.05em" }}>
            AI-POWERED CUSTOMER SUPPORT
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1, color: "#111", marginBottom: 24 }}>
            Handle Every Support Request.<br />
            <span style={{ color: "#4F46E5" }}>Automatically.</span>
          </h1>
          <p style={{ fontSize: 20, color: "#6b7280", lineHeight: 1.6, marginBottom: 40, maxWidth: 580, margin: "0 auto 40px" }}>
            SolveBotic uses AI to instantly respond to post-purchase questions, look up orders, and escalate issues — across every platform you sell on.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.solvebotic.com/onboarding" style={{ background: "#4F46E5", color: "white", padding: "14px 32px", borderRadius: 10, fontSize: 16, fontWeight: 600, textDecoration: "none" }}>
              Get Started Free →
            </a>
            <a href="#how-it-works" style={{ background: "white", color: "#374151", padding: "14px 32px", borderRadius: 10, fontSize: 16, fontWeight: 500, textDecoration: "none", border: "1px solid #e5e7eb" }}>
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section id="platforms" style={{ padding: "80px 40px", background: "#fafafa", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#9ca3af", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 40 }}>
            Works with every major platform
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["Shopify", "WooCommerce", "ClickBank", "Digistore24", "Konnektive", "BuyGoods", "CartPanda"].map(p => (
              <div key={p} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 500, color: "#374151" }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "100px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111", marginBottom: 16 }}>How it works</h2>
          <p style={{ fontSize: 16, color: "#6b7280", marginBottom: 64 }}>Up and running in minutes, not weeks.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              { step: "01", title: "Install the widget", desc: "Paste one line of code into your store's header. Works on any platform." },
              { step: "02", title: "AI handles support", desc: "Customers get instant answers to order questions, tracking updates, and more." },
              { step: "03", title: "You get notified", desc: "Complex issues are automatically escalated to your team with full context." },
            ].map(s => (
              <div key={s.step} style={{ background: "#fafafa", border: "1px solid #ebebeb", borderRadius: 12, padding: 32, textAlign: "left" }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#4F46E5", marginBottom: 16 }}>{s.step}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#111", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: "100px 40px", background: "#fafafa" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111", marginBottom: 16 }}>Everything you need</h2>
            <p style={{ fontSize: 16, color: "#6b7280" }}>Built for ecommerce brands that want to scale support without scaling headcount.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: "🤖", title: "AI Classification", desc: "Gemini AI instantly classifies every support request by intent and confidence." },
              { icon: "📦", title: "Order Lookup", desc: "Customers can check order status and tracking without contacting support." },
              { icon: "⚡", title: "Auto Escalation", desc: "Refunds, damaged items, and complex issues are escalated automatically." },
              { icon: "🔌", title: "Multi-Platform", desc: "Connect Shopify, WooCommerce, ClickBank, and more from one dashboard." },
              { icon: "📊", title: "Real-time Dashboard", desc: "Monitor all support requests, escalations, and intent breakdowns live." },
              { icon: "💬", title: "Embeddable Widget", desc: "A floating chat widget your customers can use directly on your store." },
            ].map(f => (
              <div key={f.title} style={{ background: "white", border: "1px solid #ebebeb", borderRadius: 12, padding: 28 }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#111", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "100px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#111", marginBottom: 16 }}>Simple pricing</h2>
          <p style={{ fontSize: 16, color: "#6b7280", marginBottom: 64 }}>No setup fees. Cancel anytime.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}>
            {[
              {
                name: "Starter", price: "$49", period: "/month",
                desc: "Perfect for small stores just getting started.",
                features: ["1 brand", "500 AI responses/mo", "Order lookup", "Email escalation", "Dashboard access"],
                cta: "Get Started", highlighted: false,
              },
              {
                name: "Pro", price: "$99", period: "/month",
                desc: "For growing brands with higher support volume.",
                features: ["3 brands", "2,000 AI responses/mo", "All platforms", "Priority escalation", "Real-time dashboard", "Shopify sync"],
                cta: "Get Started", highlighted: true,
              },
              {
                name: "Enterprise", price: "Custom", period: "",
                desc: "For large operations needing custom solutions.",
                features: ["Unlimited brands", "Unlimited responses", "All platforms", "Dedicated support", "Custom integrations", "SLA guarantee"],
                cta: "Contact us", highlighted: false,
              },
            ].map(plan => (
              <div key={plan.name} style={{
                background: plan.highlighted ? "#4F46E5" : "white",
                border: plan.highlighted ? "none" : "1px solid #ebebeb",
                borderRadius: 12, padding: 32, textAlign: "left",
                transform: plan.highlighted ? "scale(1.05)" : "none",
              }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: plan.highlighted ? "#a5b4fc" : "#9ca3af", marginBottom: 8 }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 8 }}>
                  <span style={{ fontSize: 40, fontWeight: 800, color: plan.highlighted ? "white" : "#111" }}>{plan.price}</span>
                  <span style={{ fontSize: 14, color: plan.highlighted ? "#a5b4fc" : "#9ca3af" }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: 13, color: plan.highlighted ? "#c7d2fe" : "#6b7280", marginBottom: 24, lineHeight: 1.5 }}>{plan.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: plan.highlighted ? "white" : "#374151" }}>
                      <span style={{ color: plan.highlighted ? "#a5b4fc" : "#4F46E5", fontWeight: 600 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <a href="https://app.solvebotic.com/onboarding" style={{
                  display: "block", textAlign: "center", padding: "10px 0", borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: "none",
                  background: plan.highlighted ? "white" : "#4F46E5",
                  color: plan.highlighted ? "#4F46E5" : "white",
                }}>{plan.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: "#4F46E5", padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "white", marginBottom: 16 }}>Ready to automate your support?</h2>
          <p style={{ fontSize: 16, color: "#c7d2fe", marginBottom: 36, lineHeight: 1.6 }}>Join brands already using SolveBotic to handle customer support automatically.</p>
          <a href="https://app.solvebotic.com/onboarding" style={{ background: "white", color: "#4F46E5", padding: "14px 36px", borderRadius: 10, fontSize: 16, fontWeight: 600, textDecoration: "none", display: "inline-block" }}>
            Get Started Free →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111", padding: "40px", textAlign: "center" }}>
        <img src="/logo.png" alt="SolveBotic" style={{ height: 32, marginBottom: 16, filter: "brightness(0) invert(1)" }} />
        <p style={{ fontSize: 13, color: "#6b7280" }}>© 2025 SolveBotic. All rights reserved.</p>
      </footer>
    </>
  );
}