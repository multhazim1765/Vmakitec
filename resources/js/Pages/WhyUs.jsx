import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function WhyUs() {
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
                    <div style={{position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "800px", background: "radial-gradient(circle,rgba(14,165,233,.1) 0%,transparent 70%)", borderRadius: "50%"}}></div>
                </div>
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <p className="reveal" style={{fontSize: ".85rem", fontWeight: "600", color: "#0ea5e9", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "16px"}}>WHY CHOOSE VMAKITEC</p>
                    <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6" style={{letterSpacing: "-.02em", lineHeight: "1.1"}}>
                        Technology Built Around <br className="hidden sm:block" /><span className="gradient-text">Your Business</span>
                    </h1>
                    <p className="reveal text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10" style={{lineHeight: "1.7"}}>
                        We don't just build websites and applications. We understand your goals, solve your technology challenges, and create digital solutions designed to deliver real business value.<br/><br/>
                        From startups and small businesses to growing organizations, VMAKITEC helps turn ideas into reliable, scalable digital products.
                    </p>
                    <div className="reveal flex flex-wrap gap-4 justify-center mb-8">
                        <Link href="#portfolio" className="btn-outline" style={{textDecoration: "none"}}><span>View Our Work &rarr;</span></Link>
                    </div>
                    <div className="reveal" style={{fontSize: "0.85rem", color: "#64748b", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", justifyContent: "center"}}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        Chennai, Tamil Nadu &middot; Serving Businesses Across India
                    </div>
                </div>
            </section>

            {/*  ===== TRUST INTRODUCTION =====  */}
            <section className="py-24 relative" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="reveal text-3xl md:text-4xl font-bold mb-6">More Than a Technology Vendor</h2>
                        <p className="reveal text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
                            The right technology partner should understand your business before recommending a solution.<br/><br/>
                            At VMAKITEC, we combine technology, design, data, and business understanding to create solutions that are practical, scalable, and easy to use.
                        </p>
                        <div className="reveal glass-blue px-6 py-4 rounded-xl inline-block border border-blue-500/20 shadow-[0_0_30px_rgba(14,165,233,0.1)]">
                            <p className="text-white font-bold tracking-wide">Understand &rarr; Build &rarr; Deliver &rarr; Improve</p>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 reveal stagger-children">
                        <div className="glass p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-blue-400">01</span> Business Understanding
                            </h3>
                            <p className="text-slate-400 leading-relaxed">We begin by understanding your requirements, challenges, users, and goals.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl hover:border-indigo-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-indigo-400">02</span> Custom Development
                            </h3>
                            <p className="text-slate-400 leading-relaxed">We build solutions around your business instead of forcing your requirements into a fixed template.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl hover:border-emerald-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-emerald-400">03</span> Modern Technology
                            </h3>
                            <p className="text-slate-400 leading-relaxed">We select technologies based on performance, scalability, security, and project requirements.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl hover:border-purple-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-purple-400">04</span> Long-Term Partnership
                            </h3>
                            <p className="text-slate-400 leading-relaxed">Our relationship doesn't have to end when development is completed. We can continue supporting improvements and future requirements.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===== OUR APPROACH =====  */}
            <section className="py-24 relative">
                <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"}}></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="reveal" style={{ fontSize: '.85rem', fontWeight: '600', color: '#0ea5e9', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>OUR APPROACH</p>
                        <h2 className="reveal text-3xl md:text-4xl font-bold">From Business Challenge to Digital Solution</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal stagger-children">
                        <div className="glass p-8 rounded-2xl border-t border-blue-500/20">
                            <div className="text-blue-500 font-bold mb-4 opacity-70">Step 01</div>
                            <h3 className="text-xl font-bold text-white mb-3">Discover</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We understand your business, target users, requirements, challenges, and expected outcomes.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl border-t border-indigo-500/20">
                            <div className="text-indigo-500 font-bold mb-4 opacity-70">Step 02</div>
                            <h3 className="text-xl font-bold text-white mb-3">Plan</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We define the project scope, features, technology stack, architecture, timeline, and development approach.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl border-t border-emerald-500/20">
                            <div className="text-emerald-500 font-bold mb-4 opacity-70">Step 03</div>
                            <h3 className="text-xl font-bold text-white mb-3">Design</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We create a clear and user-focused experience before moving into development.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl border-t border-amber-500/20">
                            <div className="text-amber-500 font-bold mb-4 opacity-70">Step 04</div>
                            <h3 className="text-xl font-bold text-white mb-3">Build</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Our development process focuses on clean implementation, integration, testing, and performance.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl border-t border-pink-500/20">
                            <div className="text-pink-500 font-bold mb-4 opacity-70">Step 05</div>
                            <h3 className="text-xl font-bold text-white mb-3">Launch</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We deploy the completed solution and verify that the system works reliably.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl border-t border-purple-500/20">
                            <div className="text-purple-500 font-bold mb-4 opacity-70">Step 06</div>
                            <h3 className="text-xl font-bold text-white mb-3">Improve</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We continue improving the product based on feedback, business requirements, and future opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===== CLIENT PROJECT SHOWCASE =====  */}
            <section id="portfolio" className="py-24 relative" style={{ background: 'rgba(14,165,233,0.02)' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="reveal" style={{ fontSize: '.85rem', fontWeight: '600', color: '#0ea5e9', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>OUR WORK</p>
                        <h2 className="reveal text-3xl md:text-4xl font-bold mb-6">Real Projects. Real Business Solutions.</h2>
                        <p className="reveal text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            Explore selected projects developed by VMAKITEC across websites, mobile applications, AI-powered systems, analytics platforms, and custom business solutions.<br/>
                            Each project starts with a business requirement and ends with a solution designed around the client's actual needs.
                        </p>
                    </div>

                    <div className="space-y-12 reveal stagger-children">
                        
                        {/* Project Card 1 */}
                        <div className="glass rounded-2xl overflow-hidden border border-white/5 flex flex-col lg:flex-row hover:border-blue-500/30 transition-colors">
                            <div className="lg:w-2/5 p-8 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/5 flex flex-col justify-center items-center relative min-h-[300px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                                {/* Placeholder Image Area */}
                                <div className="w-full h-full border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center relative z-10 bg-black/40 backdrop-blur-sm min-h-[250px]">
                                    <span className="text-slate-500 font-semibold tracking-widest text-sm">[PROJECT SCREENSHOT]</span>
                                </div>
                            </div>
                            <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white">[CLIENT PROJECT NAME]</h3>
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300 font-medium tracking-wide">[Industry / Business Type]</span>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-1">Challenge</h4>
                                    <p className="text-slate-400 text-sm">The client needed [briefly explain the business problem].</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-1">Our Solution</h4>
                                    <p className="text-slate-400 text-sm">VMAKITEC designed and developed [website / web application / mobile application / custom software] to simplify the process and provide a better digital experience.</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-1">Outcome</h4>
                                    <p className="text-slate-400 text-sm">[Add real result/impact here - e.g. Reduced manual work, Improved customer experience]</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2 mb-6">
                                    <span className="text-xs font-semibold px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-300">[React.js]</span>
                                    <span className="text-xs font-semibold px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-300">[Node.js]</span>
                                    <span className="text-xs font-semibold px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-300">[MongoDB]</span>
                                </div>
                                <div>
                                    <button className="text-white font-bold text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                        View Project <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className="glass rounded-2xl overflow-hidden border border-white/5 flex flex-col lg:flex-row hover:border-indigo-500/30 transition-colors">
                            <div className="lg:w-2/5 p-8 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/5 flex flex-col justify-center items-center relative min-h-[300px] lg:order-2">
                                <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/10 to-blue-500/10"></div>
                                <div className="w-full h-full border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center relative z-10 bg-black/40 backdrop-blur-sm min-h-[250px]">
                                    <span className="text-slate-500 font-semibold tracking-widest text-sm">[PROJECT SCREENSHOT]</span>
                                </div>
                            </div>
                            <div className="lg:w-3/5 p-8 flex flex-col justify-center lg:order-1 lg:border-r border-white/5">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white">[CLIENT PROJECT NAME]</h3>
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300 font-medium tracking-wide">[Industry]</span>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-1">Challenge</h4>
                                    <p className="text-slate-400 text-sm">The client wanted to improve [specific business challenge].</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-1">Our Solution</h4>
                                    <p className="text-slate-400 text-sm">We created a customized digital solution that helped the client [specific improvement].</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-1">Outcome</h4>
                                    <p className="text-slate-400 text-sm">[Real measurable or qualitative result]</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2 mb-6">
                                    <span className="text-xs font-semibold px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-300">[Technology Stack]</span>
                                </div>
                                <div>
                                    <button className="text-white font-bold text-sm hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        View Project <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 3 */}
                        <div className="glass rounded-2xl overflow-hidden border border-white/5 flex flex-col lg:flex-row hover:border-emerald-500/30 transition-colors">
                            <div className="lg:w-2/5 p-8 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/5 flex flex-col justify-center items-center relative min-h-[300px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>
                                <div className="w-full h-full border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center relative z-10 bg-black/40 backdrop-blur-sm min-h-[250px]">
                                    <span className="text-slate-500 font-semibold tracking-widest text-sm">[PROJECT SCREENSHOT]</span>
                                </div>
                            </div>
                            <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white">[CLIENT PROJECT NAME]</h3>
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300 font-medium tracking-wide">[Industry]</span>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-1">Challenge</h4>
                                    <p className="text-slate-400 text-sm">The client required [business requirement].</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-1">Our Solution</h4>
                                    <p className="text-slate-400 text-sm">VMAKITEC developed [solution] with a focus on usability, scalability, and business efficiency.</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-1">Outcome</h4>
                                    <p className="text-slate-400 text-sm">[Real result]</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2 mb-6">
                                    <span className="text-xs font-semibold px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-300">[Technology Stack]</span>
                                </div>
                                <div>
                                    <button className="text-white font-bold text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                                        View Project <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/*  ===== PROJECT RESULTS =====  */}
            <section className="py-24 relative">
                <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"}}></div>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="reveal" style={{ fontSize: '.85rem', fontWeight: '600', color: '#0ea5e9', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>THE IMPACT</p>
                    <h2 className="reveal text-3xl md:text-4xl font-bold mb-6">Technology Should Create Results</h2>
                    <p className="reveal text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed mb-16">
                        Every project has a different objective. We measure success by how effectively the solution addresses the client's actual business needs.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal stagger-children text-left">
                        <div className="glass p-6 rounded-2xl flex flex-col h-full border border-white/5 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Better Efficiency</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Reduce repetitive manual processes through digital workflows and automation.</p>
                        </div>
                        <div className="glass p-6 rounded-2xl flex flex-col h-full border border-white/5 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Better Customer Experience</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Create faster, simpler, and more intuitive digital experiences.</p>
                        </div>
                        <div className="glass p-6 rounded-2xl flex flex-col h-full border border-white/5 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Better Visibility</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Turn business data into useful information and actionable insights.</p>
                        </div>
                        <div className="glass p-6 rounded-2xl flex flex-col h-full border border-white/5 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 13 9 20 9"/><path d="M13 2L13 9 20 9"/><path d="M22 15a3 3 0 0 1-3 3h-4"/><path d="M12 18v3"/><path d="M9 15a3 3 0 0 0 3 3h4"/></svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Better Scalability</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Build systems that can grow robustly alongside the business.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===== CLIENT FEEDBACK / TESTIMONIALS =====  */}
            <section className="py-24 relative" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="reveal" style={{ fontSize: '.85rem', fontWeight: '600', color: '#0ea5e9', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>CLIENT FEEDBACK</p>
                    <h2 className="reveal text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
                    <p className="reveal text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed mb-16">
                        Our best work is reflected in the experiences of the people and businesses we work with.
                    </p>

                    <div className="grid lg:grid-cols-3 gap-6 reveal stagger-children text-left">
                        {/* Testimonial 1 */}
                        <div className="glass p-8 rounded-2xl relative flex flex-col border border-white/5 hover:border-white/10 transition-colors">
                            <div className="absolute top-8 right-8 text-white/5">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                            </div>
                            <div className="flex gap-1 mb-6 text-amber-400 relative z-10">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="text-slate-300 italic mb-8 relative z-10 flex-1 leading-relaxed text-sm lg:text-base">
                                "[Insert the client's genuine feedback here. Do not generate or fabricate testimonials. Placeholder text until real data is provided.]"
                            </p>
                            <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-6 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 font-bold border border-white/10 shrink-0">
                                    [ ]
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">[Client Name]</h4>
                                    <p className="text-slate-400 text-xs">[Role], [Company Name]</p>
                                    <p className="text-blue-400 text-xs mt-1">[Project Name]</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="glass p-8 rounded-2xl relative flex flex-col border border-white/5 hover:border-white/10 transition-colors">
                            <div className="absolute top-8 right-8 text-white/5">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                            </div>
                            <div className="flex gap-1 mb-6 text-amber-400 relative z-10">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="text-slate-300 italic mb-8 relative z-10 flex-1 leading-relaxed text-sm lg:text-base">
                                "[Insert genuine client feedback here. Placeholder text until real data is provided.]"
                            </p>
                            <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-6 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 font-bold border border-white/10 shrink-0">
                                    [ ]
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">[Client Name]</h4>
                                    <p className="text-slate-400 text-xs">[Role], [Company Name]</p>
                                    <p className="text-indigo-400 text-xs mt-1">[Project Name]</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="glass p-8 rounded-2xl relative flex flex-col border border-white/5 hover:border-white/10 transition-colors">
                            <div className="absolute top-8 right-8 text-white/5">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                            </div>
                            <div className="flex gap-1 mb-6 text-amber-400 relative z-10">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="text-slate-300 italic mb-8 relative z-10 flex-1 leading-relaxed text-sm lg:text-base">
                                "[Insert genuine client feedback here. Placeholder text until real data is provided.]"
                            </p>
                            <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-6 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 font-bold border border-white/10 shrink-0">
                                    [ ]
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">[Client Name]</h4>
                                    <p className="text-slate-400 text-xs">[Role], [Company Name]</p>
                                    <p className="text-emerald-400 text-xs mt-1">[Project Name]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===== WHY CLIENTS CHOOSE US =====  */}
            <section className="py-24 relative">
                <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"}}></div>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="reveal" style={{ fontSize: '.85rem', fontWeight: '600', color: '#0ea5e9', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>WHY CLIENTS WORK WITH US</p>
                    <h2 className="reveal text-3xl md:text-4xl font-bold mb-16">Built Around Your Goals, Not Just Your Requirements</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal stagger-children text-left">
                        <div className="glass p-8 rounded-2xl hover:border-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">We Listen First</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We understand your business before deciding what technology should be used.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl hover:border-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">We Build for Real Use</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Our solutions are designed for actual users and practical business workflows.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl hover:border-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">We Keep Communication Clear</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">You stay informed about progress, decisions, changes, and project milestones.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl hover:border-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">We Think Beyond Launch</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">A successful product should be able to evolve as your business grows.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl hover:border-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">We Focus on Value</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We prioritize features and technology that provide meaningful business value.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl hover:border-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-3">We Build With Modern Technology</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We use suitable modern frameworks, databases, APIs, cloud services, AI tools, and development practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===== WHO WE WORK WITH =====  */}
            <section className="py-24 relative" style={{ background: 'rgba(14,165,233,0.02)' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="reveal text-3xl md:text-4xl font-bold">Who Can Work With VMAKITEC?</h2>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 reveal stagger-children text-center">
                        <div className="p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-2xl">🚀</div>
                            <h3 className="font-bold text-white mb-2">Startup Founders</h3>
                            <p className="text-slate-400 text-sm">Have an idea? We can help transform it into a working digital product.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-2xl">🏢</div>
                            <h3 className="font-bold text-white mb-2">Small Businesses</h3>
                            <p className="text-slate-400 text-sm">Build a professional digital presence and automate business operations.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-2xl">📈</div>
                            <h3 className="font-bold text-white mb-2">Growing Companies</h3>
                            <p className="text-slate-400 text-sm">Upgrade existing systems and create scalable digital solutions.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-2xl">💡</div>
                            <h3 className="font-bold text-white mb-2">Entrepreneurs</h3>
                            <p className="text-slate-400 text-sm">Launch websites, applications, platforms, and technology-driven businesses.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-2xl">🌐</div>
                            <h3 className="font-bold text-white mb-2">Organizations</h3>
                            <p className="text-slate-400 text-sm">Digitize workflows, manage information, and improve operational efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  ===== FAQ SECTION =====  */}
            <section className="py-24 relative">
                <div style={{position: "absolute", top: "0", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"}}></div>
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="reveal" style={{ fontSize: '.85rem', fontWeight: '600', color: '#0ea5e9', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>FREQUENTLY ASKED QUESTIONS</p>
                        <h2 className="reveal text-3xl md:text-4xl font-bold">Questions You May Have</h2>
                    </div>

                    <div className="reveal space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="glass rounded-xl overflow-hidden border border-white/5 transition-colors">
                                <button 
                                    className="w-full text-left p-6 flex justify-between items-center bg-transparent focus:outline-none"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-white font-bold text-lg pr-4">{faq.question}</h3>
                                    <span className={`text-blue-400 text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                <div 
                                    className="overflow-hidden transition-all duration-300 ease-in-out"
                                    style={{ maxHeight: openFaq === index ? '300px' : '0px', opacity: openFaq === index ? 1 : 0 }}
                                >
                                    <p className="p-6 pt-0 text-slate-400 leading-relaxed text-sm md:text-base border-t border-white/5 mt-2">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  ===== LOCAL SEO SECTION =====  */}
            <section className="py-24 relative" style={{ background: 'rgba(14,165,233,0.02)' }}>
                <div className="max-w-4xl mx-auto px-6 text-center reveal">
                    <p className="reveal" style={{ fontSize: '.85rem', fontWeight: '600', color: '#0ea5e9', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>VMAKITEC IN CHENNAI</p>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '800', marginBottom: '24px' }}>
                        Your Technology Partner in <span className="gradient-text">Chennai</span>
                    </h2>
                    <div className="text-slate-300 text-lg leading-relaxed flex flex-col gap-6 text-left md:text-center">
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
            <section className="py-24 text-center relative border-t border-white/5">
                <div style={{position: "absolute", top: "-150px", left: "50%", transform: "translateX(-50%)", width: "800px", height: "300px", background: "radial-gradient(ellipse,rgba(14,165,233,.1) 0%,transparent 70%)", pointerEvents: "none"}}></div>
                <h2 className="reveal text-4xl md:text-5xl font-extrabold mb-6">Let's Build Something That Matters</h2>
                <p className="reveal text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Have an idea, business challenge, or digital product in mind?<br/>
                    Let's discuss your requirements and find the right technology solution for your business.
                </p>
                <div className="reveal flex flex-wrap gap-4 justify-center mb-8">
                    <Link href="/contact" className="btn-outline" style={{textDecoration: "none", padding: "16px 32px", fontSize: "1.1rem"}}><span>Contact VMAKITEC &rarr;</span></Link>
                </div>
                <div className="reveal" style={{fontSize: "0.85rem", color: "#64748b", fontWeight: "500", display: "flex", alignItems: "center", gap: "8px", justifyContent: "center"}}>
                    Chennai, Tamil Nadu &middot; Serving Businesses Across India
                </div>
            </section>

        </MainLayout>
    );
}
