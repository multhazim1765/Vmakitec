import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function WhyUs() {
    const { projects, testimonials } = usePage().props;
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Why should I choose VMAKITEC for my project?",
            answer: "VMAKITEC focuses on understanding your business requirements before recommending a technology solution. We combine development, design, data, AI, and business-focused thinking to create practical digital solutions."
        },
        {
            question: "What type of projects does VMAKITEC develop?",
            answer: "We develop professional websites, web applications, mobile applications, AI-powered solutions, data analytics systems, UI/UX designs, custom software, and digital transformation solutions."
        },
        {
            question: "Do you work with startups and small businesses?",
            answer: "Yes. Our solutions can be tailored to startups, entrepreneurs, small businesses, growing companies, and organizations based on their requirements and budget."
        },
        {
            question: "Where is VMAKITEC located?",
            answer: "VMAKITEC is based in Chennai, Tamil Nadu, India, and works with clients both locally and across India."
        },
        {
            question: "Can you build a completely custom application?",
            answer: "Yes. We can design and develop custom web applications, mobile applications, business systems, dashboards, APIs, and other digital products according to your requirements."
        },
        {
            question: "Can you improve or modernize an existing website or application?",
            answer: "Yes. We can analyze an existing digital product and help improve its design, performance, functionality, user experience, integrations, and scalability."
        },
        {
            question: "Do you provide support after project completion?",
            answer: "Yes. Depending on the project, we can provide maintenance, improvements, technical support, updates, and future development."
        },
        {
            question: "How does the project development process work?",
            answer: "Our typical process is: Discovery → Planning → Design → Development → Testing → Deployment → Improvement. The exact process can be adapted according to the project's size and requirements."
        },
        {
            question: "How do I start a project with VMAKITEC?",
            answer: "Simply contact our team and share your business idea, requirements, preferred timeline, and any existing materials. We can then discuss the project and recommend the appropriate approach."
        }
    ];

    return (
        <MainLayout>
            <Head>
                <title>Why Choose VMAKITEC | Technology Solutions Company in Chennai</title>
                <meta name="description" content="Discover why businesses choose VMAKITEC for web development, mobile apps, AI solutions, data analytics and custom digital solutions in Chennai and across India." />
            </Head>

            {/*  ===== HERO =====  */}
            <section id="why-us-hero" className="relative pt-32 pb-20 overflow-hidden text-center" style={{paddingTop: "120px"}}>
                <div style={{position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none"}}>
                    <div style={{position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "800px", background: "radial-gradient(circle,rgba(91,155,213,.14) 0%,transparent 70%)", borderRadius: "50%"}}></div>
                </div>
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <p className="reveal" style={{fontSize: "11px", fontWeight: "700", color: "#5B9BD5", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "16px"}}>WHY CHOOSE VMAKITEC</p>
                    <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-navy mb-6" style={{letterSpacing: "-.02em", lineHeight: "1.1"}}>
                        Technology Built Around <br className="hidden sm:block" /><span className="gradient-text">Your Business</span>
                    </h1>
                    <p className="reveal text-ink-muted text-lg md:text-xl max-w-3xl mx-auto mb-10" style={{lineHeight: "1.7"}}>
                        We don't just build websites and applications. We understand your goals, solve your technology challenges, and create digital solutions designed to deliver real business value.<br/><br/>
                        From startups and small businesses to growing organizations, VMAKITEC helps turn ideas into reliable, scalable digital products.
                    </p>
                    <div className="reveal flex flex-wrap gap-4 justify-center mb-8">
                        <Link href="#portfolio" className="btn-outline" style={{textDecoration: "none"}}><span>View Our Work &rarr;</span></Link>
                    </div>
                    <div className="reveal" style={{fontSize: "0.85rem", color: "#747B83", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", justifyContent: "center"}}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        Chennai, Tamil Nadu &middot; Serving Businesses Across India
                    </div>
                </div>
            </section>

            {/*  ===== TRUST INTRODUCTION =====  */}
            <section className="py-24 relative" style={{ background: 'rgba(255,255,255,0.55)' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="reveal text-3xl md:text-4xl font-display font-extrabold text-navy tracking-tight mb-6">More Than a Technology Vendor</h2>
                        <p className="reveal text-ink-muted text-lg max-w-3xl mx-auto leading-relaxed mb-6">
                            The right technology partner should understand your business before recommending a solution.<br/><br/>
                            At VMAKITEC, we combine technology, design, data, and business understanding to create solutions that are practical, scalable, and easy to use.
                        </p>
                        <div className="reveal glass-blue px-6 py-4 rounded-full inline-block border border-sky-300 shadow-cube">
                            <p className="text-navy font-bold tracking-wide">Understand &rarr; Build &rarr; Deliver &rarr; Improve</p>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 reveal stagger-children">
                        <div className="glass p-8 rounded-3xl hover:border-sky-400 transition-colors">
                            <h3 className="text-xl font-serif font-bold text-navy mb-3 flex items-center gap-3">
                                <span className="text-amber">01</span> Business Understanding
                            </h3>
                            <p className="text-ink-muted leading-relaxed">We begin by understanding your requirements, challenges, users, and goals.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl hover:border-sky-400 transition-colors">
                            <h3 className="text-xl font-serif font-bold text-navy mb-3 flex items-center gap-3">
                                <span className="text-amber">02</span> Custom Development
                            </h3>
                            <p className="text-ink-muted leading-relaxed">We build solutions around your business instead of forcing your requirements into a fixed template.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl hover:border-sky-400 transition-colors">
                            <h3 className="text-xl font-serif font-bold text-navy mb-3 flex items-center gap-3">
                                <span className="text-amber">03</span> Modern Technology
                            </h3>
                            <p className="text-ink-muted leading-relaxed">We select technologies based on performance, scalability, security, and project requirements.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl hover:border-sky-400 transition-colors">
                            <h3 className="text-xl font-serif font-bold text-navy mb-3 flex items-center gap-3">
                                <span className="text-amber">04</span> Long-Term Partnership
                            </h3>
                            <p className="text-ink-muted leading-relaxed">Our relationship doesn't have to end when development is completed. We can continue supporting improvements and future requirements.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===== OUR APPROACH =====  */}
            <section className="py-24 relative">
                <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(7,14,92,.12),transparent)"}}></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="reveal" style={{ fontSize: '11px', fontWeight: '700', color: '#5B9BD5', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>OUR APPROACH</p>
                        <h2 className="reveal text-3xl md:text-4xl font-display font-extrabold text-navy tracking-tight">From Business Challenge to Digital Solution</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal stagger-children">
                        <div className="glass p-8 rounded-3xl border-t border-sky-300">
                            <div className="text-amber text-[11px] font-bold uppercase tracking-wider mb-4">Step 01</div>
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">Discover</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">We understand your business, target users, requirements, challenges, and expected outcomes.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border-t border-sky-300">
                            <div className="text-amber text-[11px] font-bold uppercase tracking-wider mb-4">Step 02</div>
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">Plan</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">We define the project scope, features, technology stack, architecture, timeline, and development approach.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border-t border-sky-300">
                            <div className="text-amber text-[11px] font-bold uppercase tracking-wider mb-4">Step 03</div>
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">Design</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">We create a clear and user-focused experience before moving into development.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border-t border-sky-300">
                            <div className="text-amber text-[11px] font-bold uppercase tracking-wider mb-4">Step 04</div>
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">Build</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">Our development process focuses on clean implementation, integration, testing, and performance.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border-t border-sky-300">
                            <div className="text-amber text-[11px] font-bold uppercase tracking-wider mb-4">Step 05</div>
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">Launch</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">We deploy the completed solution and verify that the system works reliably.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border-t border-sky-300">
                            <div className="text-amber text-[11px] font-bold uppercase tracking-wider mb-4">Step 06</div>
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">Improve</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">We continue improving the product based on feedback, business requirements, and future opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===== CLIENT PROJECT SHOWCASE =====  */}
            <section id="portfolio" className="py-24 relative" style={{ background: '#F6FAFD' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="reveal" style={{ fontSize: '11px', fontWeight: '700', color: '#5B9BD5', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>OUR WORK</p>
                        <h2 className="reveal text-3xl md:text-4xl font-display font-extrabold text-navy tracking-tight mb-6">Real Projects. Real Business Solutions.</h2>
                        <p className="reveal text-ink-muted text-lg max-w-3xl mx-auto leading-relaxed">
                            Explore selected projects developed by VMAKITEC across websites, mobile applications, AI-powered systems, analytics platforms, and custom business solutions.<br/>
                            Each project starts with a business requirement and ends with a solution designed around the client's actual needs.
                        </p>
                    </div>

                    <div className="space-y-12 reveal stagger-children">
                        {projects && projects.length > 0 ? (
                            projects.map((project, index) => (
                                <div key={project.id} className={`glass rounded-3xl overflow-hidden border border-sky-300 flex flex-col lg:flex-row hover:border-sky-400 transition-colors`}>
                                    <div className={`lg:w-2/5 p-8 border-b lg:border-b-0 lg:border-r border-sky-300 bg-sky-50 flex flex-col justify-center items-center relative min-h-[300px] ${index % 2 !== 0 ? 'lg:order-2 lg:border-l lg:border-r-0' : ''}`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br from-sky-100/70 to-sky-50/30`}></div>
                                        {project.image_path ? (
                                            <div className="w-full h-full rounded-2xl flex items-center justify-center relative z-10 overflow-hidden">
                                                <img 
      src={project.image_path} 
      alt={project.client_name} 
      className="w-full h-full object-cover"
      onError={(e) => {
        // Fallback for broken/missing images
        e.currentTarget.style.display = 'none';
        if (e.currentTarget.nextElementSibling) {
          e.currentTarget.nextElementSibling.style.display = 'flex';
        }
      }} 
    />
    <div className="hidden w-full h-full bg-gradient-to-br from-sky-100 to-white border border-sky-300 rounded-2xl flex flex-col items-center justify-center p-6 text-center">
      <div className="w-12 h-12 rounded-full bg-white border border-sky-300 shadow-cube flex items-center justify-center mb-3">
        <span className="text-navy font-bold text-lg">{project.client_name ? project.client_name.charAt(0).toUpperCase() : 'V'}</span>
      </div>
      <span className="text-navy font-serif font-bold text-base">{project.client_name}</span>
      <span className="text-ink-muted text-xs mt-1">{project.industry || 'Featured Project'}</span>
    </div>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full border-2 border-dashed border-sky-300 rounded-2xl flex items-center justify-center relative z-10 bg-white/60 backdrop-blur-sm min-h-[250px]">
                                                <span className="text-ink-muted font-semibold tracking-widest text-sm">[NO IMAGE]</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`lg:w-3/5 p-8 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1 lg:border-r border-sky-300' : ''}`}>
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-serif font-bold text-navy">{project.client_name}</h3>
                                            <span className="px-3 py-1 bg-sky-100 border border-sky-300 rounded-full text-[11px] text-navy font-bold uppercase tracking-wider">{project.industry || 'General'}</span>
                                        </div>
                                        {project.challenge && (
                                            <div className="mb-4">
                                                <h4 className="text-navy text-[11px] font-bold uppercase tracking-wider mb-1">Challenge</h4>
                                                <p className="text-ink-muted text-sm leading-relaxed whitespace-pre-line">{project.challenge}</p>
                                            </div>
                                        )}
                                        {project.solution && (
                                            <div className="mb-4">
                                                <h4 className="text-sky-500 text-[11px] font-bold uppercase tracking-wider mb-1">Our Solution</h4>
                                                <p className="text-ink-muted text-sm leading-relaxed whitespace-pre-line">{project.solution}</p>
                                            </div>
                                        )}
                                        {project.outcome && (
                                            <div className="mb-4">
                                                <h4 className="text-amber text-[11px] font-bold uppercase tracking-wider mb-1">Outcome</h4>
                                                <p className="text-ink-muted text-sm leading-relaxed whitespace-pre-line">{project.outcome}</p>
                                            </div>
                                        )}
                                        {project.tech_stack && project.tech_stack.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-2 mb-6">
                                                {project.tech_stack.map((tech, i) => (
                                                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-white border border-sky-300 rounded-full text-ink-soft">{tech}</span>
                                                ))}
                                            </div>
                                        )}
                                        {project.link && (
                                            <div>
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-navy font-bold text-sm hover:text-amber-deep transition-colors flex items-center gap-2 group">
                                                    View Project <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-ink-muted py-12 border border-sky-300 bg-white/60 rounded-3xl">
                                More projects coming soon.
                            </div>
                        )}
                    </div>            </div>
            </section>

            {/*  ===== PROJECT RESULTS =====  */}
            <section className="py-24 relative">
                <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(7,14,92,.12),transparent)"}}></div>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="reveal" style={{ fontSize: '11px', fontWeight: '700', color: '#5B9BD5', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>THE IMPACT</p>
                    <h2 className="reveal text-3xl md:text-4xl font-display font-extrabold text-navy tracking-tight mb-6">Technology Should Create Results</h2>
                    <p className="reveal text-ink-muted text-lg max-w-3xl mx-auto leading-relaxed mb-16">
                        Every project has a different objective. We measure success by how effectively the solution addresses the client's actual business needs.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal stagger-children text-left">
                        <div className="glass p-6 rounded-3xl flex flex-col h-full border border-sky-300 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-sky-300 shadow-cube text-amber flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                            </div>
                            <h3 className="text-lg font-serif font-bold text-navy mb-3">Better Efficiency</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">Reduce repetitive manual processes through digital workflows and automation.</p>
                        </div>
                        <div className="glass p-6 rounded-3xl flex flex-col h-full border border-sky-300 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-sky-300 shadow-cube text-amber flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                            <h3 className="text-lg font-serif font-bold text-navy mb-3">Better Customer Experience</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">Create faster, simpler, and more intuitive digital experiences.</p>
                        </div>
                        <div className="glass p-6 rounded-3xl flex flex-col h-full border border-sky-300 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-sky-300 shadow-cube text-amber flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                            </div>
                            <h3 className="text-lg font-serif font-bold text-navy mb-3">Better Visibility</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">Turn business data into useful information and actionable insights.</p>
                        </div>
                        <div className="glass p-6 rounded-3xl flex flex-col h-full border border-sky-300 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-sky-300 shadow-cube text-amber flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 13 9 20 9"/><path d="M13 2L13 9 20 9"/><path d="M22 15a3 3 0 0 1-3 3h-4"/><path d="M12 18v3"/><path d="M9 15a3 3 0 0 0 3 3h4"/></svg>
                            </div>
                            <h3 className="text-lg font-serif font-bold text-navy mb-3">Better Scalability</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">Build systems that can grow robustly alongside the business.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===== CLIENT FEEDBACK / TESTIMONIALS =====  */}
            <section className="py-24 relative" style={{ background: 'rgba(255,255,255,0.55)' }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="reveal" style={{ fontSize: '11px', fontWeight: '700', color: '#5B9BD5', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>CLIENT FEEDBACK</p>
                    <h2 className="reveal text-3xl md:text-4xl font-display font-extrabold text-navy tracking-tight mb-6">What Our Clients Say</h2>
                    <p className="reveal text-ink-muted text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                        Our best work is reflected in the experiences of the people and businesses we work with.
                    </p>
                    
                    <div className="reveal mb-16">
                        <Link
                            href={route('leave-feedback')}
                            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-hover text-white font-medium py-3 px-6 rounded-full border border-navy transition-colors shadow-cube hover:shadow-cube-hover"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            Leave Feedback
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 reveal stagger-children text-left">
                        {testimonials && testimonials.length > 0 ? (
                            testimonials.map((testimonial, index) => {
                                const borderColors = ['border-navy/30', 'border-sky-500/50', 'border-amber/50', 'border-sky-400'];
                                const textColors = ['text-navy', 'text-sky-500', 'text-amber-deep', 'text-navy-700'];
                                const colorIndex = index % borderColors.length;

                                return (
                                    <div key={testimonial.id} className={`glass p-8 rounded-3xl relative flex flex-col border border-sky-300 hover:${borderColors[colorIndex]} transition-colors`}>
                                        <div className="absolute top-8 right-8 text-sky-100">
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                                        </div>
                                        <div className="flex gap-1 mb-6 text-amber relative z-10">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i} className={i < testimonial.rating ? '' : 'opacity-30'}>★</span>
                                            ))}
                                        </div>
                                        <p className="text-ink-soft italic mb-8 relative z-10 flex-1 leading-relaxed text-sm lg:text-base whitespace-pre-line">
                                            "{testimonial.feedback}"
                                        </p>
                                        <div className="flex items-center gap-4 relative z-10 border-t border-line pt-6 mt-auto">
                                            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-navy font-bold border border-sky-300 shrink-0">
                                                {testimonial.client_name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <h4 className="text-navy font-bold text-sm">{testimonial.client_name}</h4>
                                                {(testimonial.role || testimonial.company_name) && (
                                                    <p className="text-ink-muted text-xs">
                                                        {testimonial.role}{testimonial.role && testimonial.company_name ? ', ' : ''}{testimonial.company_name}
                                                    </p>
                                                )}
                                                {testimonial.project_name && (
                                                    <p className={`${textColors[colorIndex]} text-xs mt-1`}>{testimonial.project_name}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-span-full text-center text-ink-muted py-12 border border-sky-300 bg-white/60 rounded-3xl">
                                Testimonials coming soon.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/*  ===== WHY CLIENTS CHOOSE US =====  */}
            <section className="py-24 relative">
                <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(7,14,92,.12),transparent)"}}></div>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="reveal" style={{ fontSize: '11px', fontWeight: '700', color: '#5B9BD5', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>WHY CLIENTS WORK WITH US</p>
                    <h2 className="reveal text-3xl md:text-4xl font-display font-extrabold text-navy tracking-tight mb-16">Built Around Your Goals, Not Just Your Requirements</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal stagger-children text-left">
                        <div className="glass p-8 rounded-3xl hover:border-sky-400 transition-colors">
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">We Listen First</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">We understand your business before deciding what technology should be used.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl hover:border-sky-400 transition-colors">
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">We Build for Real Use</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">Our solutions are designed for actual users and practical business workflows.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl hover:border-sky-400 transition-colors">
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">We Keep Communication Clear</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">You stay informed about progress, decisions, changes, and project milestones.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl hover:border-sky-400 transition-colors">
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">We Think Beyond Launch</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">A successful product should be able to evolve as your business grows.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl hover:border-sky-400 transition-colors">
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">We Focus on Value</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">We prioritize features and technology that provide meaningful business value.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl hover:border-sky-400 transition-colors">
                            <h3 className="text-xl font-serif font-bold text-navy mb-3">We Build With Modern Technology</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">We use suitable modern frameworks, databases, APIs, cloud services, AI tools, and development practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===== WHO WE WORK WITH =====  */}
            <section className="py-24 relative" style={{ background: '#F6FAFD' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="reveal text-3xl md:text-4xl font-display font-extrabold text-navy tracking-tight">Who Can Work With VMAKITEC?</h2>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 reveal stagger-children text-center">
                        <div className="p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl border border-sky-300 shadow-cube flex items-center justify-center text-2xl">🚀</div>
                            <h3 className="font-serif font-bold text-navy mb-2">Startup Founders</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">Have an idea? We can help transform it into a working digital product.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl border border-sky-300 shadow-cube flex items-center justify-center text-2xl">🏢</div>
                            <h3 className="font-serif font-bold text-navy mb-2">Small Businesses</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">Build a professional digital presence and automate business operations.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl border border-sky-300 shadow-cube flex items-center justify-center text-2xl">📈</div>
                            <h3 className="font-serif font-bold text-navy mb-2">Growing Companies</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">Upgrade existing systems and create scalable digital solutions.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl border border-sky-300 shadow-cube flex items-center justify-center text-2xl">💡</div>
                            <h3 className="font-serif font-bold text-navy mb-2">Entrepreneurs</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">Launch websites, applications, platforms, and technology-driven businesses.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl border border-sky-300 shadow-cube flex items-center justify-center text-2xl">🌐</div>
                            <h3 className="font-serif font-bold text-navy mb-2">Organizations</h3>
                            <p className="text-ink-muted text-sm leading-relaxed">Digitize workflows, manage information, and improve operational efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===== FAQ SECTION =====  */}
            <section className="py-24 relative">
                <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(7,14,92,.12),transparent)"}}></div>
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="reveal" style={{ fontSize: '11px', fontWeight: '700', color: '#5B9BD5', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>FREQUENTLY ASKED QUESTIONS</p>
                        <h2 className="reveal text-3xl md:text-4xl font-display font-extrabold text-navy tracking-tight">Questions You May Have</h2>
                    </div>

                    <div className="reveal space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="glass rounded-2xl overflow-hidden border border-sky-300 transition-colors">
                                <button 
                                    className="w-full text-left p-6 flex justify-between items-center bg-transparent focus:outline-none"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-navy font-bold text-lg pr-4">{faq.question}</h3>
                                    <span className={`text-amber text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                <div 
                                    className="overflow-hidden transition-all duration-300 ease-in-out"
                                    style={{ maxHeight: openFaq === index ? '300px' : '0px', opacity: openFaq === index ? 1 : 0 }}
                                >
                                    <p className="p-6 pt-0 text-ink-muted leading-relaxed text-sm md:text-base border-t border-line mt-2">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  ===== LOCAL SEO SECTION =====  */}
            <section className="py-24 relative" style={{ background: '#F6FAFD' }}>
                <div className="max-w-4xl mx-auto px-6 text-center reveal">
                    <p className="reveal" style={{ fontSize: '11px', fontWeight: '700', color: '#5B9BD5', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>VMAKITEC IN CHENNAI</p>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '800', marginBottom: '24px', color: '#070E5C', fontFamily: 'Manrope, Inter, sans-serif', letterSpacing: '-.02em' }}>
                        Your Technology Partner in <span className="gradient-text">Chennai</span>
                    </h2>
                    <div className="text-ink-muted text-lg leading-relaxed flex flex-col gap-6 text-left md:text-center">
                        <p>
                            VMAKITEC is a technology solutions company based in Chennai, Tamil Nadu, providing web development, mobile app development, AI solutions, data analytics, UI/UX design, custom software, and digital transformation services.
                        </p>
                        <p>
                            We work with businesses, startups, entrepreneurs, and organizations across Chennai and throughout India to create practical digital solutions that support business growth.
                        </p>
                    </div>
                </div>
            </section>

            {/*  ===== FINAL CTA =====  */}
            <section className="py-24 text-center relative border-t border-line">
                <div style={{position: "absolute", top: "-150px", left: "50%", transform: "translateX(-50%)", width: "800px", height: "300px", background: "radial-gradient(ellipse,rgba(91,155,213,.14) 0%,transparent 70%)", pointerEvents: "none"}}></div>
                <h2 className="reveal text-4xl md:text-5xl font-display font-extrabold text-navy tracking-tight mb-6">Let's Build Something That Matters</h2>
                <p className="reveal text-ink-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Have an idea, business challenge, or digital product in mind?<br/>
                    Let's discuss your requirements and find the right technology solution for your business.
                </p>
                <div className="reveal flex flex-wrap gap-4 justify-center mb-8">
                    <Link href="/contact" className="btn-outline" style={{textDecoration: "none", padding: "16px 32px", fontSize: "1.1rem"}}><span>Contact VMAKITEC &rarr;</span></Link>
                </div>
                <div className="reveal" style={{fontSize: "0.85rem", color: "#747B83", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", justifyContent: "center"}}>
                    Chennai, Tamil Nadu &middot; Serving Businesses Across India
                </div>
            </section>

        </MainLayout>
    );
}


