import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    useEffect(() => {
        // Hide loader
        const timer = setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader) loader.classList.add('hidden');
        }, 1000);

        // Cursor glow
        const handleMouseMove = (e) => {
            const cursor = document.getElementById('cursorGlow');
            if (cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        };
        document.addEventListener('mousemove', handleMouseMove);

        // Scroll reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        reveals.forEach(el => observer.observe(el));

        return () => {
            clearTimeout(timer);
            reveals.forEach(el => observer.unobserve(el));
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <Head title="VMAKITEC - We Make IT Easy" />
            <div className="bg-dark-900 text-slate-200 min-h-screen overflow-x-hidden">
                {/* Legacy Content */}
                

<div id="loader"><div className="loader-ring"></div><div className="loader-text">Loading VMAKITEC...</div></div>
<div className="cursor-glow" id="cursorGlow"></div>
<div id="toast" className="toast"></div>


{/*  ==================== MAIN WEBSITE ====================  */}
<div id="mainSite">

<nav className="nav-glass fixed top-0 left-0 right-0 z-50" id="navbar">
  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
    <a href="#home" className="flex items-center gap-2" style={{textDecoration: "none"}}>
      <div style={{width: "36px", height: "36px", background: "linear-gradient(135deg,#0ea5e9,#6366f1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: ".85rem", color: "#fff"}}>V</div>
      <span style={{fontWeight: "700", fontSize: "1.15rem", color: "#f1f5f9", letterSpacing: "-.02em"}}>VMAKITEC</span>
    </a>
    <div className="desktop-nav flex items-center gap-8" style={{display: "flex"}}>
      <a href="#home" className="nav-link active" data-section="home">Home</a>
      <a href="#about" className="nav-link" data-section="about">About</a>
      <a href="#services" className="nav-link" data-section="services">Services</a>
      <a href="#why-us" className="nav-link" data-section="why-us">Why Us</a>
      <a href="#tech-stack" className="nav-link" data-section="tech-stack">Tech Stack</a>
      <a href="#contact" className="nav-link" data-section="contact">Contact</a>
      <button  className="btn-outline" style={{padding: "8px 18px", fontSize: ".85rem", borderRadius: "8px"}}>&#128737; Admin</button>
    </div>
    <div className="hamburger" id="hamburger" ><span></span><span></span><span></span></div>
  </div>
</nav>

<div className="mobile-menu" id="mobileMenu">
  <a href="#home" >Home</a>
  <a href="#about" >About</a>
  <a href="#services" >Services</a>
  <a href="#why-us" >Why Us</a>
  <a href="#tech-stack" >Tech Stack</a>
  <a href="#contact" >Contact</a>
  <button  className="btn-outline" style={{marginTop: "16px"}}>Admin Login</button>
</div>

{/*  ===== HERO =====  */}
<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{paddingTop: "80px"}}>
  <div style={{position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none"}}>
    <div style={{position: "absolute", top: "-20%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle,rgba(14,165,233,.12) 0%,transparent 70%)", borderRadius: "50%"}}></div>
    <div style={{position: "absolute", bottom: "-20%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 70%)", borderRadius: "50%"}}></div>
    <div id="particles" style={{position: "absolute", inset: "0"}}></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
    <div className="flex-1 text-center lg:text-left">
      <div style={{display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", background: "rgba(14,165,233,.08)", border: "1px solid rgba(14,165,233,.2)", borderRadius: "100px", fontSize: ".8rem", color: "#38bdf8", fontWeight: "500", marginBottom: "24px", animation: "fadeInUp .8s ease-out both"}}>
        <span style={{width: "6px", height: "6px", background: "#0ea5e9", borderRadius: "50%", animation: "pulse 2s infinite"}}></span>
        We Make IT Easy
      </div>
      <h1 style={{fontSize: "clamp(2.2rem,5.5vw,4rem)", fontWeight: "800", lineHeight: "1.1", letterSpacing: "-.03em", marginBottom: "20px", animation: "fadeInUp .8s .15s ease-out both"}}>
        Transforming Ideas Into<br /><span className="gradient-text">Digital Solutions</span>
      </h1>
      <p style={{fontSize: "clamp(1rem,1.8vw,1.2rem)", color: "#94a3b8", lineHeight: "1.7", maxWidth: "560px", marginBottom: "36px", animation: "fadeInUp .8s .3s ease-out both"}}>
        Helping businesses, startups, and organizations build modern websites, mobile applications, AI-powered systems, and data-driven solutions.
      </p>
      <div className="hero-buttons flex flex-wrap gap-4 justify-center lg:justify-start" style={{animation: "fadeInUp .8s .45s ease-out both"}}>
        <a href="#contact" className="btn-primary" style={{textDecoration: "none"}}><span>Start Your Project</span></a>
        <a href="#contact" className="btn-outline" style={{textDecoration: "none"}}>Get Free Consultation</a>
        <a href="#contact" className="btn-ghost" style={{textDecoration: "none"}}>Contact Us &#8594;</a>
      </div>
    </div>
    {/*  VMAKITEC LOGO  */}
    <div className="flex-shrink-0 reveal-scale" style={{animation: "fadeInUp 1s .3s ease-out both"}}>
      <div className="hero-logo-wrapper">
        <div className="hero-logo-glow"></div>
        <div className="hero-logo-ring"></div>
        <div className="hero-logo-ring2"></div>
        {/*
          IMPORTANT: Replace the src below with your own hosted logo URL.
          The current URL may expire. Upload your logo to your project
          or Supabase storage and update the path.
        */}
        <img
          src="https://z-cdn-media.chatglm.cn/files/9c9058b9-7a81-4c39-8d4a-8991490d66ce.jpeg?auth_key=1882230010-987bae5e063043e898f1fd363647e89f-0-100ba04fca00dedcefb1362ed76c93e7"
          alt="VMAKITEC Logo"
          className="hero-logo-img"
          
         />
        {/*  Fallback if image fails  */}
        <div style={{display: "none", width: "340px", height: "340px", borderRadius: "50%", background: "linear-gradient(135deg,rgba(14,165,233,.1),rgba(99,102,241,.1))", border: "2px solid rgba(14,165,233,.2)", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px", position: "relative", zIndex: "2"}} className="hero-logo-img">
          <div style={{width: "100px", height: "100px", background: "linear-gradient(135deg,#0ea5e9,#6366f1)", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "2.5rem", color: "#fff"}}>V</div>
          <span style={{fontWeight: "700", fontSize: "1.1rem", color: "#f1f5f9", letterSpacing: ".05em"}}>VMAKITEC</span>
        </div>
      </div>
    </div>
  </div>
  <div style={{position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: ".5"}}>
    <span style={{fontSize: ".75rem", color: "#64748b", letterSpacing: ".1em", textTransform: "uppercase"}}>Scroll</span>
    <div style={{width: "20px", height: "32px", border: "1.5px solid #475569", borderRadius: "10px", display: "flex", justifyContent: "center", paddingTop: "6px"}}>
      <div style={{width: "3px", height: "8px", background: "#0ea5e9", borderRadius: "2px", animation: "float 2s ease-in-out infinite"}}></div>
    </div>
  </div>
</section>

{/*  ===== ABOUT =====  */}
<section id="about" className="py-24 lg:py-32 relative">
  <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"}}></div>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <p className="reveal" style={{fontSize: ".8rem", fontWeight: "600", color: "#0ea5e9", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "12px"}}>About Us</p>
      <h2 className="reveal" style={{fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: "800", letterSpacing: "-.02em", marginBottom: "16px"}}>Who We <span className="gradient-text">Are</span></h2>
      <div className="section-divider reveal" style={{margin: "0 auto"}}></div>
    </div>
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div className="reveal-left">
        <p style={{fontSize: "1.1rem", color: "#cbd5e1", lineHeight: "1.8", marginBottom: "24px"}}>VMAKITEC is a technology solutions company focused on helping businesses transform ideas into scalable digital products and services.</p>
        <div className="glass-blue" style={{padding: "24px"}}>
          <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px"}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            <h4 style={{fontWeight: "700", fontSize: "1.05rem", color: "#f1f5f9"}}>Our Mission</h4>
          </div>
          <p style={{fontSize: ".95rem", color: "#94a3b8", lineHeight: "1.7"}}>Deliver reliable, innovative, and affordable technology solutions that help businesses grow.</p>
        </div>
      </div>
      <div className="reveal-right">
        <h4 style={{fontWeight: "700", fontSize: "1.1rem", color: "#f1f5f9", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px"}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          Our Values
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="glass" style={{padding: "16px", display: "flex", alignItems: "center", gap: "12px"}}>
            <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "rgba(14,165,233,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></div>
            <span style={{fontWeight: "600", fontSize: ".95rem", color: "#e2e8f0"}}>Innovation</span>
          </div>
          <div className="glass" style={{padding: "16px", display: "flex", alignItems: "center", gap: "12px"}}>
            <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "rgba(16,185,129,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg></div>
            <span style={{fontWeight: "600", fontSize: ".95rem", color: "#e2e8f0"}}>Quality</span>
          </div>
          <div className="glass" style={{padding: "16px", display: "flex", alignItems: "center", gap: "12px"}}>
            <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "rgba(99,102,241,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></div>
            <span style={{fontWeight: "600", fontSize: ".95rem", color: "#e2e8f0"}}>Transparency</span>
          </div>
          <div className="glass" style={{padding: "16px", display: "flex", alignItems: "center", gap: "12px"}}>
            <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "rgba(245,158,11,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
            <span style={{fontWeight: "600", fontSize: ".95rem", color: "#e2e8f0"}}>Continuous Learning</span>
          </div>
          <div className="glass" style={{padding: "16px", display: "flex", alignItems: "center", gap: "12px"}}>
            <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "rgba(236,72,153,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <span style={{fontWeight: "600", fontSize: ".95rem", color: "#e2e8f0"}}>Customer Focus</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ===== SERVICES =====  */}
<section id="services" className="py-24 lg:py-32 relative">
  <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"}}></div>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <p className="reveal" style={{fontSize: ".8rem", fontWeight: "600", color: "#0ea5e9", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "12px"}}>What We Do</p>
      <h2 className="reveal" style={{fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: "800", letterSpacing: "-.02em", marginBottom: "16px"}}>Our <span className="gradient-text">Services</span></h2>
      <div className="section-divider reveal" style={{margin: "0 auto"}}></div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
      <div className="glass tilt-card reveal" style={{padding: "28px"}}>
        <div className="service-icon" style={{background: "rgba(14,165,233,.1)", color: "#0ea5e9", marginBottom: "20px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
        <h3 style={{fontSize: "1.15rem", fontWeight: "700", marginBottom: "12px", color: "#f1f5f9"}}>Web Development</h3>
        <ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "8px"}}>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#0ea5e9"}}>&#9656;</span> Business Websites</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#0ea5e9"}}>&#9656;</span> Corporate Websites</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#0ea5e9"}}>&#9656;</span> Portfolio Websites</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#0ea5e9"}}>&#9656;</span> Landing Pages</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#0ea5e9"}}>&#9656;</span> E-Commerce Platforms</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#0ea5e9"}}>&#9656;</span> Admin Dashboards</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#0ea5e9"}}>&#9656;</span> SEO Optimization</li>
        </ul>
      </div>
      <div className="glass tilt-card reveal" style={{padding: "28px"}}>
        <div className="service-icon" style={{background: "rgba(99,102,241,.1)", color: "#6366f1", marginBottom: "20px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
        <h3 style={{fontSize: "1.15rem", fontWeight: "700", marginBottom: "12px", color: "#f1f5f9"}}>Mobile App Development</h3>
        <ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "8px"}}>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#6366f1"}}>&#9656;</span> Android Apps</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#6366f1"}}>&#9656;</span> Cross Platform Apps</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#6366f1"}}>&#9656;</span> Business Applications</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#6366f1"}}>&#9656;</span> Inventory Systems</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#6366f1"}}>&#9656;</span> Booking Applications</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#6366f1"}}>&#9656;</span> Offline First Applications</li>
        </ul>
      </div>
      <div className="glass tilt-card reveal" style={{padding: "28px"}}>
        <div className="service-icon" style={{background: "rgba(16,185,129,.1)", color: "#10b981", marginBottom: "20px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 3.4 2 6.1 5 7.4V20h6v-2.6c3-1.3 5-4 5-7.4a8 8 0 0 0-8-8Z"/><path d="M9 22h6"/><path d="M8 18v4"/><path d="M16 18v4"/></svg></div>
        <h3 style={{fontSize: "1.15rem", fontWeight: "700", marginBottom: "12px", color: "#f1f5f9"}}>AI Solutions</h3>
        <ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "8px"}}>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#10b981"}}>&#9656;</span> AI Chatbots</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#10b981"}}>&#9656;</span> Automation Systems</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#10b981"}}>&#9656;</span> Machine Learning Solutions</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#10b981"}}>&#9656;</span> AI Assistants</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#10b981"}}>&#9656;</span> Predictive Analytics</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#10b981"}}>&#9656;</span> Intelligent Workflows</li>
        </ul>
      </div>
      <div className="glass tilt-card reveal" style={{padding: "28px"}}>
        <div className="service-icon" style={{background: "rgba(245,158,11,.1)", color: "#f59e0b", marginBottom: "20px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg></div>
        <h3 style={{fontSize: "1.15rem", fontWeight: "700", marginBottom: "12px", color: "#f1f5f9"}}>Data Analytics</h3>
        <ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "8px"}}>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#f59e0b"}}>&#9656;</span> Business Intelligence</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#f59e0b"}}>&#9656;</span> Dashboards</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#f59e0b"}}>&#9656;</span> KPI Tracking</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#f59e0b"}}>&#9656;</span> Data Visualization</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#f59e0b"}}>&#9656;</span> Reporting Systems</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#f59e0b"}}>&#9656;</span> Performance Analytics</li>
        </ul>
      </div>
      <div className="glass tilt-card reveal" style={{padding: "28px"}}>
        <div className="service-icon" style={{background: "rgba(236,72,153,.1)", color: "#ec4899", marginBottom: "20px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg></div>
        <h3 style={{fontSize: "1.15rem", fontWeight: "700", marginBottom: "12px", color: "#f1f5f9"}}>UI/UX Design</h3>
        <ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "8px"}}>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#ec4899"}}>&#9656;</span> User Interface Design</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#ec4899"}}>&#9656;</span> User Experience Design</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#ec4899"}}>&#9656;</span> Wireframes</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#ec4899"}}>&#9656;</span> Prototypes</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#ec4899"}}>&#9656;</span> Design Systems</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#ec4899"}}>&#9656;</span> Mobile App Design</li>
        </ul>
      </div>
      <div className="glass tilt-card reveal" style={{padding: "28px"}}>
        <div className="service-icon" style={{background: "rgba(139,92,246,.1)", color: "#8b5cf6", marginBottom: "20px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></div>
        <h3 style={{fontSize: "1.15rem", fontWeight: "700", marginBottom: "12px", color: "#f1f5f9"}}>Digital Transformation</h3>
        <ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "8px"}}>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#8b5cf6"}}>&#9656;</span> Process Automation</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#8b5cf6"}}>&#9656;</span> Workflow Optimization</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#8b5cf6"}}>&#9656;</span> Cloud Solutions</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#8b5cf6"}}>&#9656;</span> Software Modernization</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#8b5cf6"}}>&#9656;</span> Digital Strategy</li>
          <li style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}><span style={{color: "#8b5cf6"}}>&#9656;</span> Business Management Systems</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/*  ===== WHY US =====  */}
<section id="why-us" className="py-24 lg:py-32 relative">
  <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"}}></div>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <p className="reveal" style={{fontSize: ".8rem", fontWeight: "600", color: "#0ea5e9", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "12px"}}>Why Choose Us</p>
      <h2 className="reveal" style={{fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: "800", letterSpacing: "-.02em", marginBottom: "16px"}}>Why <span className="gradient-text">VMAKITEC</span></h2>
      <div className="section-divider reveal" style={{margin: "0 auto"}}></div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
      <div className="glass tilt-card reveal" style={{padding: "28px", textAlign: "center"}}>
        <div style={{width: "64px", height: "64px", borderRadius: "16px", background: "linear-gradient(135deg,rgba(14,165,233,.15),rgba(14,165,233,.05))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px"}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg></div>
        <h3 style={{fontSize: "1.05rem", fontWeight: "700", marginBottom: "8px", color: "#f1f5f9"}}>Modern Technologies</h3>
        <p style={{fontSize: ".9rem", color: "#94a3b8", lineHeight: "1.6"}}>Using current frameworks and technologies.</p>
      </div>
      <div className="glass tilt-card reveal" style={{padding: "28px", textAlign: "center"}}>
        <div style={{width: "64px", height: "64px", borderRadius: "16px", background: "linear-gradient(135deg,rgba(99,102,241,.15),rgba(99,102,241,.05))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px"}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z"/><path d="M12 12 9 10.91"/><path d="M12 12l3 1.09"/><path d="M12 12v3"/></svg></div>
        <h3 style={{fontSize: "1.05rem", fontWeight: "700", marginBottom: "8px", color: "#f1f5f9"}}>Custom Solutions</h3>
        <p style={{fontSize: ".9rem", color: "#94a3b8", lineHeight: "1.6"}}>Tailored for each client's needs.</p>
      </div>
      <div className="glass tilt-card reveal" style={{padding: "28px", textAlign: "center"}}>
        <div style={{width: "64px", height: "64px", borderRadius: "16px", background: "linear-gradient(135deg,rgba(16,185,129,.15),rgba(16,185,129,.05))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px"}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div>
        <h3 style={{fontSize: "1.05rem", fontWeight: "700", marginBottom: "8px", color: "#f1f5f9"}}>Scalable Development</h3>
        <p style={{fontSize: ".9rem", color: "#94a3b8", lineHeight: "1.6"}}>Built for future growth.</p>
      </div>
      <div className="glass tilt-card reveal" style={{padding: "28px", textAlign: "center"}}>
        <div style={{width: "64px", height: "64px", borderRadius: "16px", background: "linear-gradient(135deg,rgba(236,72,153,.15),rgba(236,72,153,.05))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px"}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><polyline points="16 11 18 13 22 9"/></svg></div>
        <h3 style={{fontSize: "1.05rem", fontWeight: "700", marginBottom: "8px", color: "#f1f5f9"}}>User-Focused Design</h3>
        <p style={{fontSize: ".9rem", color: "#94a3b8", lineHeight: "1.6"}}>Designed for real users.</p>
      </div>
      <div className="glass tilt-card reveal" style={{padding: "28px", textAlign: "center"}}>
        <div style={{width: "64px", height: "64px", borderRadius: "16px", background: "linear-gradient(135deg,rgba(245,158,11,.15),rgba(245,158,11,.05))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px"}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></div>
        <h3 style={{fontSize: "1.05rem", fontWeight: "700", marginBottom: "8px", color: "#f1f5f9"}}>Transparent Communication</h3>
        <p style={{fontSize: ".9rem", color: "#94a3b8", lineHeight: "1.6"}}>Clear updates and collaboration.</p>
      </div>
      <div className="glass tilt-card reveal" style={{padding: "28px", textAlign: "center"}}>
        <div style={{width: "64px", height: "64px", borderRadius: "16px", background: "linear-gradient(135deg,rgba(139,92,246,.15),rgba(139,92,246,.05))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px"}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg></div>
        <h3 style={{fontSize: "1.05rem", fontWeight: "700", marginBottom: "8px", color: "#f1f5f9"}}>Continuous Improvement</h3>
        <p style={{fontSize: ".9rem", color: "#94a3b8", lineHeight: "1.6"}}>Always learning and improving.</p>
      </div>
    </div>
  </div>
</section>

{/*  ===== TECH STACK (Horizontal Grid like Why Us) =====  */}
<section id="tech-stack" className="py-24 lg:py-32 relative">
  <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"}}></div>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <p className="reveal" style={{fontSize: ".8rem", fontWeight: "600", color: "#0ea5e9", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "12px"}}>Our Tools</p>
      <h2 className="reveal" style={{fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: "800", letterSpacing: "-.02em", marginBottom: "16px"}}>Technology <span className="gradient-text">Stack</span></h2>
      <div className="section-divider reveal" style={{margin: "0 auto"}}></div>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 stagger-children">

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(227,79,38,.1)", margin: "0 auto 14px", color: "#E34F26", fontSize: "28px", fontWeight: "900"}}>H5</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>HTML</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Frontend</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(21,114,182,.1)", margin: "0 auto 14px", color: "#1572B6", fontSize: "28px", fontWeight: "900"}}>C3</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>CSS</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Frontend</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(247,223,30,.1)", margin: "0 auto 14px", color: "#F7DF1E", fontSize: "26px", fontWeight: "900"}}>JS</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>JavaScript</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Frontend</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(97,218,251,.1)", margin: "0 auto 14px", color: "#61DAFB", fontSize: "22px", fontWeight: "900"}}>Re</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>React</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Future Stack</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(6,182,212,.1)", margin: "0 auto 14px", color: "#06B6D4", fontSize: "20px", fontWeight: "900"}}>Tw</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>Tailwind CSS</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Future Stack</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(2,86,155,.1)", margin: "0 auto 14px", color: "#02569B", fontSize: "20px", fontWeight: "900"}}>Fl</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>Flutter</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Future Stack</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(62,207,142,.1)", margin: "0 auto 14px", color: "#3ECF8E", fontSize: "20px", fontWeight: "900"}}>Sb</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>Supabase</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Backend</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(65,105,225,.1)", margin: "0 auto 14px", color: "#4169E1", fontSize: "18px", fontWeight: "900"}}>Pg</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>PostgreSQL</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Backend</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(240,240,240,.06)", margin: "0 auto 14px", color: "#f0f0f0", fontSize: "20px", fontWeight: "900"}}>Gh</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>GitHub</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Tools</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(0,122,204,.1)", margin: "0 auto 14px", color: "#007ACC", fontSize: "18px", fontWeight: "900"}}>VS</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>VS Code</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Tools</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(255,255,255,.06)", margin: "0 auto 14px", color: "#fff", fontSize: "18px", fontWeight: "900"}}>Vc</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>Vercel</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Tools</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(242,200,17,.1)", margin: "0 auto 14px", color: "#F2C811", fontSize: "18px", fontWeight: "900"}}>BI</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>Power BI</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Analytics</p>
      </div>

      <div className="glass tilt-card reveal" style={{padding: "24px", textAlign: "center"}}>
        <div className="tech-card-icon" style={{background: "rgba(55,118,171,.1)", margin: "0 auto 14px", color: "#3776AB", fontSize: "22px", fontWeight: "900"}}>Py</div>
        <h4 style={{fontSize: ".95rem", fontWeight: "700", color: "#f1f5f9"}}>Python</h4>
        <p style={{fontSize: ".75rem", color: "#64748b", marginTop: "4px"}}>Analytics</p>
      </div>

    </div>
  </div>
</section>

{/*  ===== CONTACT =====  */}
<section id="contact" className="py-24 lg:py-32 relative">
  <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"}}></div>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <p className="reveal" style={{fontSize: ".8rem", fontWeight: "600", color: "#0ea5e9", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "12px"}}>Get In Touch</p>
      <h2 className="reveal" style={{fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: "800", letterSpacing: "-.02em", marginBottom: "16px"}}>Request a <span className="gradient-text">Quote</span></h2>
      <div className="section-divider reveal" style={{margin: "0 auto"}}></div>
    </div>
    <div className="grid lg:grid-cols-5 gap-10">
      <div className="lg:col-span-2 reveal-left">
        <div className="glass-blue" style={{padding: "28px", marginBottom: "20px"}}>
          <h4 style={{fontWeight: "700", fontSize: "1.05rem", color: "#f1f5f9", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> Email</h4>
          <a href="mailto:vmakitec@gmail.com" style={{fontSize: ".95rem", color: "#94a3b8", textDecoration: "none", transition: "color .2s", display: "block", wordBreak: "break-all"}}  >vmakitec@gmail.com</a>
        </div>
        <div className="glass-blue" style={{padding: "28px", marginBottom: "20px"}}>
          <h4 style={{fontWeight: "700", fontSize: "1.05rem", color: "#f1f5f9", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Phone</h4>
          <a href="tel:+919600244885" style={{fontSize: ".95rem", color: "#94a3b8", textDecoration: "none", transition: "color .2s", display: "block", marginBottom: "8px"}}  >+91 9600244885</a>
          <a href="tel:+917092768612" style={{fontSize: ".95rem", color: "#94a3b8", textDecoration: "none", transition: "color .2s", display: "block"}}  >+91 7092768612</a>
        </div>
        <div className="glass-blue" style={{padding: "28px"}}>
          <h4 style={{fontWeight: "700", fontSize: "1.05rem", color: "#f1f5f9", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> WhatsApp</h4>
          <a href="https://wa.me/919600244885" target="_blank" rel="noopener" className="btn-primary" style={{display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "linear-gradient(135deg,#25D366,#128C7E)", fontSize: ".9rem", textDecoration: "none"}}><span>Chat on WhatsApp</span></a>
        </div>
      </div>
      <div className="lg:col-span-3 reveal-right">
        <form id="quoteForm" className="glass" style={{padding: "32px"}} >
          <div className="grid sm:grid-cols-2 gap-5">
            <div><label className="form-label">Full Name *</label><input type="text" name="name" className="form-input" placeholder="Your full name" required /><div className="error-msg">Please enter your name</div></div>
            <div><label className="form-label">Email Address *</label><input type="email" name="email" className="form-input" placeholder="your@email.com" required /><div className="error-msg">Please enter a valid email</div></div>
            <div><label className="form-label">Phone Number *</label><input type="tel" name="phone" className="form-input" placeholder="+91 XXXXXXXXXX" required /><div className="error-msg">Please enter your phone number</div></div>
            <div><label className="form-label">Service Required *</label><select name="service" className="form-input" required><option value="">Select a service</option><option>Web Development</option><option>Mobile App Development</option><option>AI Solutions</option><option>Data Analytics</option><option>UI/UX Design</option><option>Digital Transformation</option><option>Other</option></select><div className="error-msg">Please select a service</div></div>
            {/*  Changed from dropdown to manual text input for budget  */}
            <div className="sm:col-span-2"><label className="form-label">Project Budget</label><input type="text" name="budget" className="form-input" placeholder="Enter your estimated budget (e.g., ₹50,000 - ₹1,00,000)" /></div>
            <div className="sm:col-span-2"><label className="form-label">Project Description *</label><textarea name="description" className="form-input" placeholder="Tell us about your project, goals, and any specific requirements..." required></textarea><div className="error-msg">Please describe your project</div></div>
          </div>
          <button type="submit" id="submitBtn" className="btn-primary" style={{marginTop: "24px", width: "100%", padding: "16px", fontSize: "1rem"}}><span id="submitText">Submit Request</span></button>
        </form>
      </div>
    </div>
  </div>
</section>

{/*  ===== FOOTER =====  */}
<footer style={{background: "#050510", borderTop: "1px solid rgba(255,255,255,.05)", padding: "60px 0 30px"}}>
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px"}}>
          <div style={{width: "36px", height: "36px", background: "linear-gradient(135deg,#0ea5e9,#6366f1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: ".85rem", color: "#fff"}}>V</div>
          <span style={{fontWeight: "700", fontSize: "1.15rem", color: "#f1f5f9"}}>VMAKITEC</span>
        </div>
        <p style={{fontSize: ".9rem", color: "#64748b", lineHeight: "1.7", marginBottom: "16px"}}>We Make IT Easy</p>
        <div style={{display: "flex", gap: "10px"}}>
          <a href="https://github.com/vmakitec" target="_blank" rel="noopener" style={{width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all .2s", textDecoration: "none"}}  ><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          <a href="https://www.instagram.com/vmakitec?igsh=cDg3c2hqZGFnZXp5" target="_blank" rel="noopener" style={{width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all .2s", textDecoration: "none"}}  ><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="https://linkedin.com/company/vmakitec" target="_blank" rel="noopener" style={{width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all .2s", textDecoration: "none"}}  ><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="https://wa.me/919600244885" target="_blank" rel="noopener" style={{width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all .2s", textDecoration: "none"}}  ><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
        </div>
      </div>
      <div><h4 style={{fontWeight: "700", fontSize: ".95rem", color: "#f1f5f9", marginBottom: "16px"}}>Services</h4><ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "10px"}}><li><a href="#services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >Web Development</a></li><li><a href="#services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >Mobile App Development</a></li><li><a href="#services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >AI Solutions</a></li><li><a href="#services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >Data Analytics</a></li><li><a href="#services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >UI/UX Design</a></li><li><a href="#services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >Digital Transformation</a></li></ul></div>
      <div><h4 style={{fontWeight: "700", fontSize: ".95rem", color: "#f1f5f9", marginBottom: "16px"}}>Quick Links</h4><ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "10px"}}><li><a href="#home" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >Home</a></li><li><a href="#about" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >About Us</a></li><li><a href="#services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >Services</a></li><li><a href="#why-us" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >Why Choose Us</a></li><li><a href="#tech-stack" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >Tech Stack</a></li><li><a href="#contact" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >Contact</a></li></ul></div>
      <div><h4 style={{fontWeight: "700", fontSize: ".95rem", color: "#f1f5f9", marginBottom: "16px"}}>Contact</h4><ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "12px"}}><li style={{display: "flex", alignItems: "flex-start", gap: "10px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" style={{marginTop: "3px", flexShrink: "0"}}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><a href="mailto:vmakitec@gmail.com" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s", wordBreak: "break-all"}}  >vmakitec@gmail.com</a></li><li style={{display: "flex", alignItems: "center", gap: "10px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" style={{flexShrink: "0"}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+919600244885" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >+91 9600244885</a></li><li style={{display: "flex", alignItems: "center", gap: "10px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" style={{flexShrink: "0"}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+917092768612" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}  >+91 7092768612</a></li></ul></div>
    </div>
    <div style={{borderTop: "1px solid rgba(255,255,255,.05)", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px"}}>
      <p style={{fontSize: ".85rem", color: "#475569"}}>&copy; 2025 VMAKITEC. All rights reserved.</p>
      <p style={{fontSize: ".85rem", color: "#475569"}}>We Make IT Easy</p>
    </div>
  </div>
</footer>
</div>
            </div>
        </>
    );
}
