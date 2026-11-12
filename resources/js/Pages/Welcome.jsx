import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Welcome({ services }) {
  return (
    <MainLayout>
      <Head>
        <title>VMAKITEC | Web Development & AI Solutions Company in Chennai</title>
        <meta name="description" content="VMAKITEC is a technology solutions company in Chennai offering web development, mobile app development, AI solutions, data analytics, UI/UX design and digital transformation services across India." />
      </Head>

      {/*  ===== HERO =====  */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: "80px" }}>
        <div style={{ position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle,rgba(91,155,213,.16) 0%,transparent 70%)", borderRadius: "50%" }}></div>
          <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle,rgba(217,154,66,.10) 0%,transparent 70%)", borderRadius: "50%" }}></div>
          <div id="particles" style={{ position: "absolute", inset: "0" }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10 w-full py-20 lg:py-0">
          <div className="flex-1 text-center lg:text-left">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", background: "#EAF2F8", border: "1px solid #BDD7E8", borderRadius: "100px", fontSize: "11px", color: "#070E5C", fontWeight: "700", textTransform: "uppercase", letterSpacing: ".05em", boxShadow: "0 1px 2px rgba(7,14,92,.05)", marginBottom: "24px", animation: "fadeInUp .8s ease-out both" }}>
              <span style={{ width: "6px", height: "6px", background: "#D99A42", borderRadius: "50%", animation: "pulse 2s infinite" }}></span>
              Technology Solutions Company in Chennai
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif", fontWeight: "300", color: "#070E5C", lineHeight: "1.1", letterSpacing: "-.025em", marginBottom: "24px", animation: "fadeInUp .8s .15s ease-out both" }}>
              Build. Automate. Grow. <br /><span className="gradient-text">With VMAKITEC.</span>
            </h1>
            <h2 style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: "600", color: "#24272B", marginBottom: "20px", animation: "fadeInUp .8s .25s ease-out both" }}>
              Digital Solutions for Businesses in Chennai & Across India
            </h2>
            <p style={{ fontSize: "clamp(1rem,1.4vw,1.1rem)", color: "#747B83", lineHeight: "1.8", maxWidth: "600px", marginBottom: "36px", animation: "fadeInUp .8s .35s ease-out both" }} className="mx-auto lg:mx-0">
              VMAKITEC is a technology solutions company in Chennai helping startups, small businesses, enterprises, and organizations build modern digital products and improve their business operations through technology. <br /><br />
              We build professional websites, mobile applications, AI-powered solutions, data-driven systems, and custom digital solutions designed around your business needs.
            </p>
            <div className="hero-buttons flex flex-wrap gap-4 justify-center lg:justify-start mb-8" style={{ animation: "fadeInUp .8s .45s ease-out both" }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}><span>Start Your Project &rarr;</span></Link>
              <Link href="/services" className="btn-outline" style={{ textDecoration: "none" }}><span>Explore Our Services &rarr;</span></Link>
            </div>
            <div style={{ animation: "fadeInUp .8s .55s ease-out both", fontSize: "0.85rem", color: "#747B83", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              Based in Chennai, Tamil Nadu | Serving Businesses Across India
            </div>
          </div>
          {/*  VMAKITEC LOGO  */}
          <div className="flex-shrink-0 reveal-scale" style={{ animation: "fadeInUp 1s .3s ease-out both" }}>
            <div className="hero-logo-wrapper">
              <div className="hero-logo-glow"></div>
              <div className="hero-logo-ring" style={{ zIndex: 20 }}></div>
              <div className="hero-logo-ring2" style={{ zIndex: 20 }}>
                {/* 1. Top Center (0°) - Multhazim */}
                <div style={{ position: 'absolute', top: '-28px', left: 'calc(50% - 28px)', width: '56px', height: '56px', animation: 'popupIn 0.6s 1.0s both' }}>
                  <img src="/multhazim.jpeg" alt="Multhazim" className="orbit-img" style={{ position: 'relative', animationDuration: '35s', animationDirection: 'normal', zIndex: 30 }} title="Ahamed Multhazim A" />
                </div>
                {/* 2. Top Right (72°) - Irfan */}
                <div style={{ position: 'absolute', top: 'calc(34.55% - 28px)', left: 'calc(97.55% - 28px)', width: '56px', height: '56px', animation: 'popupIn 0.6s 1.2s both' }}>
                  <img src="/irfan.jpeg" alt="Irfan" className="orbit-img" style={{ position: 'relative', animationDuration: '35s', animationDirection: 'normal', zIndex: 30 }} title="Irfan Khan" />
                </div>
                {/* 3. Bottom Right (144°) - Abu */}
                <div style={{ position: 'absolute', top: 'calc(90.45% - 28px)', left: 'calc(79.39% - 28px)', width: '56px', height: '56px', animation: 'popupIn 0.6s 1.4s both' }}>
                  <img src="/abu.jpeg" alt="Abu" className="orbit-img" style={{ position: 'relative', animationDuration: '35s', animationDirection: 'normal', zIndex: 30 }} title="Abu Aaseem K" />
                </div>
                {/* 4. Bottom Left (216°) - Faazil */}
                <div style={{ position: 'absolute', top: 'calc(90.45% - 28px)', left: 'calc(20.61% - 28px)', width: '56px', height: '56px', animation: 'popupIn 0.6s 1.6s both' }}>
                  <img src="/faazil.jpeg" alt="Faazil" className="orbit-img" style={{ position: 'relative', animationDuration: '35s', animationDirection: 'normal', zIndex: 30 }} title="Mohamed Abdul Faazil A" />
                </div>
                {/* 5. Top Left (288°) - Farook */}
                <div style={{ position: 'absolute', top: 'calc(34.55% - 28px)', left: 'calc(2.45% - 28px)', width: '56px', height: '56px', animation: 'popupIn 0.6s 1.8s both' }}>
                  <img src="/profile.jpeg" alt="Farook" className="orbit-img" style={{ position: 'relative', animationDuration: '35s', animationDirection: 'normal', zIndex: 30 }} title="Mohammed Farook M" />
                </div>
              </div>
              <img
                src="/vmakitec-logo.jpg"
                alt="VMAKITEC Logo"
                className="hero-logo-img"
                width="380"
                height="380"
                fetchpriority="high"
                loading="eager"
                decoding="sync"
              />
              {/*  Fallback if image fails  */}
              <div style={{ display: "none", width: "380px", height: "380px", borderRadius: "50%", background: "linear-gradient(135deg,#FFFFFF,#EAF2F8)", border: "2px solid #BDD7E8", boxShadow: "0 25px 60px rgba(7,14,92,.12)", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px", position: "relative", zIndex: "2" }} className="hero-logo-img">
                <div style={{ width: "100px", height: "100px", background: "linear-gradient(135deg,#070E5C,#5B9BD5)", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "2.5rem", color: "#fff" }}>V</div>
                <span style={{ fontWeight: "700", fontSize: "1.1rem", color: "#070E5C", letterSpacing: ".05em" }}>VMAKITEC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  ===== WHO WE ARE =====  */}
      <section className="py-24 relative" style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="reveal cube-eyebrow" style={{ marginBottom: '16px' }}>Who We Are</p>
          <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: "Manrope, Inter, sans-serif", fontWeight: '800', color: '#070E5C', letterSpacing: '-.02em', marginBottom: '24px' }}>
            Your Technology Partner
          </h2>
          <p className="reveal text-ink-muted leading-relaxed max-w-4xl mx-auto text-lg" style={{ lineHeight: '1.8', marginBottom: '32px' }}>
            At VMAKITEC, we go beyond just writing code. We act as your dedicated technology partner, understanding your business challenges and delivering reliable, scalable, and innovative digital solutions that drive real growth. Whether you are a startup taking your first steps or an established enterprise looking to scale, we bring the technical expertise needed to succeed in a digital-first world.
          </p>
          <Link href="/about" className="btn-outline reveal" style={{ textDecoration: 'none', display: 'inline-block' }}>Learn More About VMAKITEC &rarr;</Link>
        </div>
      </section>

      {/*  ===== CORE SERVICES =====  */}
      <section className="py-24 relative">
        <div style={{ position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(91,155,213,.35),transparent)" }}></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="reveal cube-eyebrow" style={{ marginBottom: '16px' }}>What We Do</p>
          <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: "Manrope, Inter, sans-serif", fontWeight: '800', color: '#070E5C', letterSpacing: '-.02em', marginBottom: '48px' }}>Core <span className="gradient-text">Services</span></h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 reveal stagger-children text-left">
            {services && services.length > 0 ? (
              services.map((service, idx) => (
                <div key={service.id || idx} className="glass tilt-card flex flex-col p-8 rounded-3xl">
                  {service.icon_svg ? (
                    <div
                      style={{ width: "50px", height: "50px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #BDD7E8", boxShadow: "0 4px 16px rgba(7,14,92,.04)", color: "#D99A42", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}
                      dangerouslySetInnerHTML={{ __html: service.icon_svg }}
                    />
                  ) : (
                    <div style={{ width: "50px", height: "50px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #BDD7E8", boxShadow: "0 4px 16px rgba(7,14,92,.04)", color: "#D99A42", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                    </div>
                  )}
                  <h3 className="text-xl font-serif font-bold text-navy mb-2">{service.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-6 flex-1">
                    {Array.isArray(service.features) && service.features.length > 0 
                      ? service.features.slice(0, 3).join(' â€¢ ') 
                      : (service.description || 'Professional technology service customized for your business requirements.')}
                  </p>
                  <div className="pt-4 border-t border-line flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-ink-muted uppercase tracking-wider font-bold">Starting from</span>
                      <span className="font-bold text-navy text-base">{service.starting_price || 'Custom'}</span>
                    </div>
                    <Link href="/services" className="text-navy font-bold text-sm hover:text-amber transition-colors flex items-center gap-1 group">
                      Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="glass tilt-card flex flex-col p-8 rounded-3xl">
                <div style={{ width: "50px", height: "50px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #BDD7E8", boxShadow: "0 4px 16px rgba(7,14,92,.04)", color: "#D99A42", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg></div>
                <h3 className="text-xl font-serif font-bold text-navy mb-3">Web Development</h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-6 flex-1">Professional websites and web applications designed for performance, responsiveness, and business growth.</p>
                <Link href="/services" className="text-navy font-bold text-sm hover:text-amber transition-colors flex items-center gap-2 group">Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/*  ===== WHY CHOOSE US =====  */}
      <section className="py-24 relative" style={{ background: 'rgba(234,242,248,0.55)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="reveal cube-eyebrow" style={{ marginBottom: '16px' }}>VMAKITEC Advantage</p>
          <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: "Manrope, Inter, sans-serif", fontWeight: '800', color: '#070E5C', letterSpacing: '-.02em', marginBottom: '48px' }}>Why Choose <span className="gradient-text">VMAKITEC</span>?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left reveal stagger-children">
            <div className="glass p-6 rounded-3xl border border-sky-300 hover:border-sky-400 transition-colors">
              <h4 className="font-serif font-bold text-navy mb-2 text-lg">Custom Solutions</h4>
              <p className="text-ink-muted text-sm leading-relaxed">Technology designed around your actual business requirements, not just off-the-shelf templates.</p>
            </div>
            <div className="glass p-6 rounded-3xl border border-sky-300 hover:border-sky-400 transition-colors">
              <h4 className="font-serif font-bold text-navy mb-2 text-lg">Modern Technology</h4>
              <p className="text-ink-muted text-sm leading-relaxed">Modern frameworks, robust tools, and secure technologies selected specifically according to project requirements.</p>
            </div>
            <div className="glass p-6 rounded-3xl border border-sky-300 hover:border-sky-400 transition-colors">
              <h4 className="font-serif font-bold text-navy mb-2 text-lg">Scalable Development</h4>
              <p className="text-ink-muted text-sm leading-relaxed">We architect systems and build solutions designed specifically to support your future business growth.</p>
            </div>
            <div className="glass p-6 rounded-3xl border border-sky-300 hover:border-sky-400 transition-colors">
              <h4 className="font-serif font-bold text-navy mb-2 text-lg">Business-Focused Approach</h4>
              <p className="text-ink-muted text-sm leading-relaxed">We focus entirely on solving your core business problems instead of simply delivering lines of software code.</p>
            </div>
            <div className="glass p-6 rounded-3xl border border-sky-300 hover:border-sky-400 transition-colors">
              <h4 className="font-serif font-bold text-navy mb-2 text-lg">Transparent Communication</h4>
              <p className="text-ink-muted text-sm leading-relaxed">Experience clear, honest communication throughout the entire planning, development, and deployment phases.</p>
            </div>
            <div className="glass p-6 rounded-3xl border border-sky-300 hover:border-sky-400 transition-colors">
              <h4 className="font-serif font-bold text-navy mb-2 text-lg">Affordable Solutions</h4>
              <p className="text-ink-muted text-sm leading-relaxed">Practical, highly effective technology solutions perfectly suited for startups, small businesses, and growing organizations.</p>
            </div>
          </div>
          <Link href="/why-us" className="btn-outline reveal" style={{ textDecoration: 'none', display: 'inline-block' }}>See Why We Excel &rarr;</Link>
        </div>
      </section>

      {/*  ===== TECH STACK & PROCESS =====  */}
      <section className="py-24 relative">
        <div style={{ position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(91,155,213,.35),transparent)" }}></div>
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal text-center lg:text-left">
              <p style={{ display: 'inline-block', fontSize: '11px', fontWeight: '700', color: '#070E5C', background: '#EAF2F8', border: '1px solid #BDD7E8', borderRadius: '9999px', padding: '6px 14px', letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: '16px' }}>Modern Development</p>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontFamily: "Manrope, Inter, sans-serif", fontWeight: '800', color: '#070E5C', letterSpacing: '-.02em', marginBottom: '24px' }}>Our <span className="gradient-text">Technology Stack</span></h2>
              <p className="text-ink-muted text-lg mb-8 leading-relaxed">
                We use the latest, most robust, and secure technologies to build your digital solutions. By leveraging a modern tech stack, we ensure your software is fast, reliable, scalable, and easy to maintain over time.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <span className="px-4 py-2 bg-white border border-sky-300 rounded-full text-sm text-navy font-medium hover:bg-sky-100 hover:border-sky-400 transition-colors">React / Next.js</span>
                <span className="px-4 py-2 bg-white border border-sky-300 rounded-full text-sm text-navy font-medium hover:bg-sky-100 hover:border-sky-400 transition-colors">Node.js / Laravel</span>
                <span className="px-4 py-2 bg-white border border-sky-300 rounded-full text-sm text-navy font-medium hover:bg-sky-100 hover:border-sky-400 transition-colors">React Native</span>
                <span className="px-4 py-2 bg-white border border-sky-300 rounded-full text-sm text-navy font-medium hover:bg-sky-100 hover:border-sky-400 transition-colors">Python / AI</span>
                <span className="px-4 py-2 bg-white border border-sky-300 rounded-full text-sm text-navy font-medium hover:bg-sky-100 hover:border-sky-400 transition-colors">AWS / Cloud</span>
              </div>
              <Link href="/tech-stack" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>View Full Tech Stack &rarr;</Link>
            </div>

            <div className="reveal">
              <div className="glass p-8 rounded-2xl relative overflow-hidden">
                <div style={{ position: "absolute", top: "0", right: "0", width: "150px", height: "150px", background: "radial-gradient(circle,rgba(91,155,213,.22) 0%,transparent 70%)", borderRadius: "50%", filter: "blur(20px)" }}></div>
                <h3 className="text-xl font-serif font-bold text-navy mb-8 border-b border-line pb-4">How We Work</h3>

                <div className="flex flex-col gap-6 relative">
                  <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-sky-300 rounded-full z-0"></div>

                  <div className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-navy border border-navy flex items-center justify-center text-white shadow-cube font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-serif font-bold text-navy mb-1">Planning & Strategy</h4>
                      <p className="text-sm text-ink-muted">Understanding your business goals and defining the roadmap.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center text-navy font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-serif font-bold text-navy mb-1">UI/UX Design</h4>
                      <p className="text-sm text-ink-muted">Crafting intuitive and engaging user experiences.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center text-navy font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-serif font-bold text-navy mb-1">Development</h4>
                      <p className="text-sm text-ink-muted">Building robust, secure, and scalable solutions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-amber border border-amber flex items-center justify-center text-white font-bold shrink-0">4</div>
                    <div>
                      <h4 className="font-serif font-bold text-navy mb-1">Launch & Support</h4>
                      <p className="text-sm text-ink-muted">Deploying smoothly and ensuring continuous performance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/*  ===== CHENNAI LOCAL SEO SECTION =====  */}
      <section className="py-24 relative" style={{ background: 'linear-gradient(180deg, rgba(234,242,248,0.8) 0%, rgba(240,244,248,0) 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <div style={{ width: "60px", height: "60px", margin: "0 auto 24px", background: "#FFFFFF", border: "1px solid #BDD7E8", boxShadow: "0 10px 30px -10px rgba(7,14,92,.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>📍</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: "Manrope, Inter, sans-serif", fontWeight: '800', color: '#070E5C', letterSpacing: '-.02em', marginBottom: '24px' }}>
            Technology Solutions Company in <span className="gradient-text">Chennai, Tamil Nadu</span>
          </h2>
          <div className="text-ink-muted text-lg leading-relaxed flex flex-col gap-6 mb-10 text-left md:text-center">
            <p>
              VMAKITEC is based in Chennai, Tamil Nadu, providing expert web development, mobile app development, AI solutions, data analytics, UI/UX design, and digital transformation services across India.
            </p>
            <p>
              We work intimately with startups, entrepreneurs, small businesses, and organizations looking to build world-class digital products, improve their internal business processes, and establish a substantially stronger online presence.
            </p>
            <p>
              From professional website development and native mobile applications to advanced AI-powered systems and custom business software, we help businesses turn great ideas into practical, revenue-generating digital solutions.
            </p>
          </div>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}><span>Talk to VMAKITEC &rarr;</span></Link>
        </div>
      </section>


    </MainLayout>
  );
}
