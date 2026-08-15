import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Welcome() {
    return (
        <MainLayout>
            <Head>
                <title>VMAKITEC | Web Development & AI Solutions Company in Chennai</title>
                <meta name="description" content="VMAKITEC is a technology solutions company in Chennai offering web development, mobile app development, AI solutions, data analytics, UI/UX design and digital transformation services across India." />
            </Head>

            {/*  ===== HERO =====  */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{paddingTop: "80px"}}>
              <div style={{position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none"}}>
                <div style={{position: "absolute", top: "-20%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle,rgba(14,165,233,.12) 0%,transparent 70%)", borderRadius: "50%"}}></div>
                <div style={{position: "absolute", bottom: "-20%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 70%)", borderRadius: "50%"}}></div>
                <div id="particles" style={{position: "absolute", inset: "0"}}></div>
              </div>
              <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10 w-full py-20 lg:py-0">
                <div className="flex-1 text-center lg:text-left">
                  <div style={{display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", background: "rgba(14,165,233,.08)", border: "1px solid rgba(14,165,233,.2)", borderRadius: "100px", fontSize: ".8rem", color: "#38bdf8", fontWeight: "600", marginBottom: "24px", animation: "fadeInUp .8s ease-out both"}}>
                    <span style={{width: "6px", height: "6px", background: "#0ea5e9", borderRadius: "50%", animation: "pulse 2s infinite"}}></span>
                    Technology Solutions Company in Chennai
                  </div>
                  <h1 style={{fontSize: "clamp(2rem,4.5vw,3.5rem)", fontWeight: "800", lineHeight: "1.1", letterSpacing: "-.03em", marginBottom: "20px", animation: "fadeInUp .8s .15s ease-out both"}}>
                    Build. Automate. Grow. <br /><span className="gradient-text">With VMAKITEC.</span>
                  </h1>
                  <h2 style={{fontSize: "clamp(1rem, 1.5vw, 1.25rem)", fontWeight: "600", color: "#e2e8f0", marginBottom: "16px", animation: "fadeInUp .8s .25s ease-out both"}}>
                    Digital Solutions for Businesses in Chennai & Across India
                  </h2>
                  <p style={{fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#94a3b8", lineHeight: "1.7", maxWidth: "600px", marginBottom: "32px", animation: "fadeInUp .8s .35s ease-out both"}} className="mx-auto lg:mx-0">
                    VMAKITEC is a technology solutions company in Chennai helping startups, small businesses, enterprises, and organizations build modern digital products and improve their business operations through technology. <br/><br/>
                    We build professional websites, mobile applications, AI-powered solutions, data-driven systems, and custom digital solutions designed around your business needs.
                  </p>
                  <div className="hero-buttons flex flex-wrap gap-4 justify-center lg:justify-start mb-8" style={{animation: "fadeInUp .8s .45s ease-out both"}}>
                    <Link href="/contact" className="btn-primary" style={{textDecoration: "none"}}><span>Start Your Project &rarr;</span></Link>
                    <Link href="/services" className="btn-outline" style={{textDecoration: "none"}}><span>Explore Our Services &rarr;</span></Link>
                  </div>
                  <div style={{animation: "fadeInUp .8s .55s ease-out both", fontSize: "0.85rem", color: "#64748b", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", justifyContent: "center"}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Based in Chennai, Tamil Nadu | Serving Businesses Across India
                  </div>
                </div>
                {/*  VMAKITEC LOGO  */}
                <div className="flex-shrink-0 reveal-scale hidden lg:block" style={{animation: "fadeInUp 1s .3s ease-out both"}}>
                  <div className="hero-logo-wrapper">
                    <div className="hero-logo-glow"></div>
                    <div className="hero-logo-ring"></div>
                    <div className="hero-logo-ring2"></div>
                    <img
                      src="https://z-cdn-media.chatglm.cn/files/9c9058b9-7a81-4c39-8d4a-8991490d66ce.jpeg?auth_key=1882230010-987bae5e063043e898f1fd363647e89f-0-100ba04fca00dedcefb1362ed76c93e7"
                      alt="VMAKITEC Logo"
                      className="hero-logo-img"
                      width="320"
                      height="320"
                      fetchpriority="high"
                      loading="eager"
                      decoding="sync"
                     />
                    {/*  Fallback if image fails  */}
                    <div style={{display: "none", width: "320px", height: "320px", borderRadius: "50%", background: "linear-gradient(135deg,rgba(14,165,233,.1),rgba(99,102,241,.1))", border: "2px solid rgba(14,165,233,.2)", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px", position: "relative", zIndex: "2"}} className="hero-logo-img">
                      <div style={{width: "80px", height: "80px", background: "linear-gradient(135deg,#0ea5e9,#6366f1)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "2rem", color: "#fff"}}>V</div>
                      <span style={{fontWeight: "700", fontSize: "1rem", color: "#f1f5f9", letterSpacing: ".05em"}}>VMAKITEC</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/*  ===== WHO WE ARE =====  */}
            <section className="py-24 relative" style={{ background: 'rgba(14,165,233,0.02)' }}>
              <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="reveal" style={{ fontSize: '.9rem', fontWeight: '600', color: '#0ea5e9', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Who We Are</p>
                <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '24px' }}>
                  Your Technology Partner
                </h2>
                <p className="reveal text-slate-300 max-w-4xl mx-auto text-lg" style={{ lineHeight: '1.8', marginBottom: '32px' }}>
                  At VMAKITEC, we go beyond just writing code. We act as your dedicated technology partner, understanding your business challenges and delivering reliable, scalable, and innovative digital solutions that drive real growth. Whether you are a startup taking your first steps or an established enterprise looking to scale, we bring the technical expertise needed to succeed in a digital-first world.
                </p>
                <Link href="/about" className="btn-outline reveal" style={{ textDecoration: 'none', display: 'inline-block' }}>Learn More About VMAKITEC &rarr;</Link>
              </div>
            </section>

            {/*  ===== CORE SERVICES =====  */}
            <section className="py-24 relative">
              <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"}}></div>
              <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="reveal" style={{ fontSize: '.9rem', fontWeight: '600', color: '#0ea5e9', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>What We Do</p>
                <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '48px' }}>Core <span className="gradient-text">Services</span></h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 reveal stagger-children text-left">
                  <div className="glass tilt-card flex flex-col p-8 rounded-2xl">
                    <div style={{width: "50px", height: "50px", borderRadius: "12px", background: "rgba(14,165,233,.1)", color: "#0ea5e9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                    <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">Professional websites and web applications designed for performance, responsiveness, and business growth.</p>
                    <Link href="/services" className="text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors flex items-center gap-2 group">Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
                  </div>
                  
                  <div className="glass tilt-card flex flex-col p-8 rounded-2xl">
                    <div style={{width: "50px", height: "50px", borderRadius: "12px", background: "rgba(99,102,241,.1)", color: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
                    <h3 className="text-xl font-bold text-white mb-3">Mobile App Development</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">Custom Android, iOS, and cross-platform applications built robustly around your specific business requirements.</p>
                    <Link href="/services" className="text-indigo-400 font-bold text-sm hover:text-indigo-300 transition-colors flex items-center gap-2 group">Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
                  </div>

                  <div className="glass tilt-card flex flex-col p-8 rounded-2xl">
                    <div style={{width: "50px", height: "50px", borderRadius: "12px", background: "rgba(16,185,129,.1)", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a8 8 0 0 0-8 8c0 3.4 2 6.1 5 7.4V20h6v-2.6c3-1.3 5-4 5-7.4a8 8 0 0 0-8-8Z"/><path d="M9 22h6"/><path d="M8 18v4"/><path d="M16 18v4"/></svg></div>
                    <h3 className="text-xl font-bold text-white mb-3">AI Solutions</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">AI-powered applications, intelligent automation, machine learning integration, and smart business solutions.</p>
                    <Link href="/services" className="text-emerald-400 font-bold text-sm hover:text-emerald-300 transition-colors flex items-center gap-2 group">Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
                  </div>

                  <div className="glass tilt-card flex flex-col p-8 rounded-2xl">
                    <div style={{width: "50px", height: "50px", borderRadius: "12px", background: "rgba(245,158,11,.1)", color: "#f59e0b", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg></div>
                    <h3 className="text-xl font-bold text-white mb-3">Data Analytics</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">Transform complex business data into meaningful dashboards, actionable insights, and better decision-making capabilities.</p>
                    <Link href="/services" className="text-amber-400 font-bold text-sm hover:text-amber-300 transition-colors flex items-center gap-2 group">Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
                  </div>

                  <div className="glass tilt-card flex flex-col p-8 rounded-2xl">
                    <div style={{width: "50px", height: "50px", borderRadius: "12px", background: "rgba(236,72,153,.1)", color: "#ec4899", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                    <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">User-focused interfaces designed to create simple, engaging, intuitive, and highly effective digital experiences.</p>
                    <Link href="/services" className="text-pink-400 font-bold text-sm hover:text-pink-300 transition-colors flex items-center gap-2 group">Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
                  </div>

                  <div className="glass tilt-card flex flex-col p-8 rounded-2xl">
                    <div style={{width: "50px", height: "50px", borderRadius: "12px", background: "rgba(139,92,246,.1)", color: "#8b5cf6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></div>
                    <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">Modernize legacy business processes through workflow automation, custom software, and connected digital systems.</p>
                    <Link href="/services" className="text-purple-400 font-bold text-sm hover:text-purple-300 transition-colors flex items-center gap-2 group">Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
                  </div>
                </div>
              </div>
            </section>

            {/*  ===== WHY CHOOSE US =====  */}
            <section className="py-24 relative" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="reveal" style={{ fontSize: '.9rem', fontWeight: '600', color: '#0ea5e9', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>VMAKITEC Advantage</p>
                <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '48px' }}>Why Choose <span className="gradient-text">VMAKITEC</span>?</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left reveal stagger-children">
                    <div className="glass p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <h4 className="font-bold text-white mb-2 text-lg">Custom Solutions</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Technology designed around your actual business requirements, not just off-the-shelf templates.</p>
                    </div>
                    <div className="glass p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <h4 className="font-bold text-white mb-2 text-lg">Modern Technology</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Modern frameworks, robust tools, and secure technologies selected specifically according to project requirements.</p>
                    </div>
                    <div className="glass p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <h4 className="font-bold text-white mb-2 text-lg">Scalable Development</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">We architect systems and build solutions designed specifically to support your future business growth.</p>
                    </div>
                    <div className="glass p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <h4 className="font-bold text-white mb-2 text-lg">Business-Focused Approach</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">We focus entirely on solving your core business problems instead of simply delivering lines of software code.</p>
                    </div>
                    <div className="glass p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <h4 className="font-bold text-white mb-2 text-lg">Transparent Communication</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Experience clear, honest communication throughout the entire planning, development, and deployment phases.</p>
                    </div>
                    <div className="glass p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <h4 className="font-bold text-white mb-2 text-lg">Affordable Solutions</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Practical, highly effective technology solutions perfectly suited for startups, small businesses, and growing organizations.</p>
                    </div>
                </div>
                <Link href="/why-us" className="btn-outline reveal" style={{ textDecoration: 'none', display: 'inline-block' }}>See Why We Excel &rarr;</Link>
              </div>
            </section>

            {/*  ===== TECH STACK & PROCESS =====  */}
            <section className="py-24 relative">
              <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"}}></div>
              <div className="max-w-7xl mx-auto px-6">
                
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="reveal text-center lg:text-left">
                        <p style={{ fontSize: '.9rem', fontWeight: '600', color: '#0ea5e9', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Modern Development</p>
                        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: '800', marginBottom: '24px' }}>Our <span className="gradient-text">Technology Stack</span></h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            We use the latest, most robust, and secure technologies to build your digital solutions. By leveraging a modern tech stack, we ensure your software is fast, reliable, scalable, and easy to maintain over time.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 font-medium hover:bg-white/10 transition-colors">React / Next.js</span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 font-medium hover:bg-white/10 transition-colors">Node.js / Laravel</span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 font-medium hover:bg-white/10 transition-colors">React Native</span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 font-medium hover:bg-white/10 transition-colors">Python / AI</span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 font-medium hover:bg-white/10 transition-colors">AWS / Cloud</span>
                        </div>
                        <Link href="/tech-stack" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>View Full Tech Stack &rarr;</Link>
                    </div>

                    <div className="reveal">
                        <div className="glass p-8 rounded-2xl relative overflow-hidden">
                            <div style={{position: "absolute", top: "0", right: "0", width: "150px", height: "150px", background: "radial-gradient(circle,rgba(14,165,233,.2) 0%,transparent 70%)", borderRadius: "50%", filter: "blur(20px)"}}></div>
                            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">How We Work</h3>
                            
                            <div className="flex flex-col gap-6 relative">
                                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-white/5 rounded-full z-0"></div>
                                
                                <div className="flex gap-4 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Planning & Strategy</h4>
                                        <p className="text-sm text-slate-400">Understanding your business goals and defining the roadmap.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center text-indigo-400 font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">UI/UX Design</h4>
                                        <p className="text-sm text-slate-400">Crafting intuitive and engaging user experiences.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Development</h4>
                                        <p className="text-sm text-slate-400">Building robust, secure, and scalable solutions.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-purple-400 font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Launch & Support</h4>
                                        <p className="text-sm text-slate-400">Deploying smoothly and ensuring continuous performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              </div>
            </section>

            {/*  ===== CHENNAI LOCAL SEO SECTION =====  */}
            <section className="py-24 relative" style={{ background: 'linear-gradient(180deg, rgba(14,165,233,0.02) 0%, transparent 100%)' }}>
              <div className="max-w-4xl mx-auto px-6 text-center reveal">
                <div style={{width: "60px", height: "60px", margin: "0 auto 24px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px"}}>📍</div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '800', marginBottom: '24px' }}>
                  Technology Solutions Company in <span className="gradient-text">Chennai, Tamil Nadu</span>
                </h2>
                <div className="text-slate-300 text-lg leading-relaxed flex flex-col gap-6 mb-10 text-left md:text-center">
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
