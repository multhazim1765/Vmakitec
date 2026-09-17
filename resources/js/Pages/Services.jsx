import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const servicePricing = {
    web: {
        title: "Web Development",
        plans: [
            { name: "REGULAR", price: "₹3,999", features: ["1–3 pages", "Responsive design", "Basic UI", "Contact section", "Basic SEO", "Social media links"], popular: false },
            { name: "ADVANCED", price: "₹7,999", features: ["Up to 5 pages", "Modern UI/UX", "Responsive design", "SEO setup", "Contact/lead form", "Basic animations", "Performance optimization"], popular: true },
            { name: "BUSINESS", price: "₹11,999", features: ["Up to 10 pages", "Premium UI/UX", "Advanced SEO", "Custom functionality", "Lead/contact system", "Performance optimization", "Hosting deployment assistance"], popular: false }
        ]
    },
    mobile: {
        title: "Mobile App Development",
        plans: [
            { name: "REGULAR", price: "₹4,999", features: ["Basic mobile application", "Up to 5 screens", "Modern responsive UI", "Basic navigation", "Basic functionality"], popular: false },
            { name: "ADVANCED", price: "₹8,999", features: ["Android / cross-platform application", "Up to 10 screens", "Modern UI/UX", "API integration", "Authentication", "Database integration"], popular: true },
            { name: "BUSINESS", price: "₹14,999", features: ["Complete business application", "Advanced UI/UX", "API + database integration", "Authentication", "Admin functionality", "Advanced features", "Deployment assistance"], popular: false, custom: "For larger applications:\nCustom pricing based on requirements." }
        ]
    },
    ai: {
        title: "AI Solutions",
        plans: [
            { name: "REGULAR", price: "₹4,999", features: ["Basic AI chatbot", "AI API integration", "Basic automation", "Simple AI functionality"], popular: false },
            { name: "ADVANCED", price: "₹8,999", features: ["Custom AI solution", "AI chatbot/assistant", "API integration", "Data processing", "Automation workflows", "Basic analytics"], popular: true },
            { name: "BUSINESS", price: "₹14,999", features: ["Advanced AI solution", "Custom AI workflows", "Machine learning integration", "AI automation", "Advanced analytics", "Custom integrations"], popular: false, custom: "For complex AI/ML systems:\nCustom pricing based on requirements." }
        ]
    },
    data: {
        title: "Data Analytics",
        plans: [
            { name: "REGULAR", price: "₹2,999", features: ["Basic dashboard", "Data cleaning", "Basic charts", "Basic reports"], popular: false },
            { name: "ADVANCED", price: "₹5,999", features: ["Interactive dashboard", "Multiple data sources", "KPI tracking", "Advanced visualizations", "Automated reports"], popular: true },
            { name: "BUSINESS", price: "₹9,999", features: ["Advanced analytics dashboard", "Multiple data sources", "Business intelligence", "Advanced KPI analytics", "Automated reporting", "Custom analytics solution"], popular: false }
        ]
    },
    uiux: {
        title: "UI/UX Design",
        plans: [
            { name: "REGULAR", price: "₹2,999", features: ["Basic website UI", "Up to 5 screens", "Wireframes", "Basic design system"], popular: false },
            { name: "ADVANCED", price: "₹5,999", features: ["Website/app UI", "Up to 10 screens", "Wireframes", "Prototypes", "UX improvements", "Design system"], popular: true },
            { name: "BUSINESS", price: "₹9,999", features: ["Complete UI/UX design", "Up to 20 screens", "User flows", "High-fidelity prototype", "Design system", "Responsive design", "UX optimization"], popular: false }
        ]
    },
    digital: {
        title: "Digital Transformation",
        plans: [
            { name: "REGULAR", price: "₹4,999", features: ["Business process analysis", "Basic workflow improvement", "Digital strategy consultation", "Basic automation recommendations"], popular: false },
            { name: "ADVANCED", price: "₹8,999", features: ["Process automation", "Workflow optimization", "System integration", "Digital strategy", "Business dashboard", "Cloud solution guidance"], popular: true },
            { name: "BUSINESS", price: "₹14,999", features: ["Digital transformation planning", "Advanced automation", "System modernization", "Workflow optimization", "Business management solutions", "Cloud integration", "Custom implementation planning"], popular: false, custom: "For larger enterprise requirements:\nCustom pricing based on project scope." }
        ]
    }
};

export default function Services({ services }) {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <MainLayout>
            <Head title="Our Services - VMAKITEC" />
            <style>{`
            @keyframes modalFadeIn {
                0% { opacity: 0; backdrop-filter: blur(0px); }
                100% { opacity: 1; backdrop-filter: blur(16px); }
            }
            @keyframes premiumCardReveal {
                0% { opacity: 0; transform: translateY(40px) scale(0.95); }
                100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            .pricing-modal-overlay {
                animation: modalFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .pricing-modal-card {
                opacity: 0;
                animation: premiumCardReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .pricing-plan-0 { animation-delay: 0.1s; }
            .pricing-plan-1 { animation-delay: 0.2s; }
            .pricing-plan-2 { animation-delay: 0.3s; }
            `}</style>
            <div style={{ paddingTop: '80px' }}>
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
      {services && services.length > 0 ? (
          services.map((service) => (
            <div key={service.id} className="glass tilt-card reveal flex flex-col" style={{padding: "28px"}}>
                <div className="service-icon" style={{background: "rgba(14,165,233,.1)", color: "#0ea5e9", marginBottom: "20px"}} dangerouslySetInnerHTML={{ __html: service.icon_svg }}></div>
                <h3 style={{fontSize: "1.15rem", fontWeight: "700", marginBottom: "12px", color: "#f1f5f9"}}>{service.title}</h3>
                <ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", flex: "1"}}>
                {service.features && service.features.map((feature, idx) => (
                    <li key={idx} style={{fontSize: ".9rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "8px"}}>
                        <span style={{color: "#0ea5e9"}}>&#9656;</span> {feature}
                    </li>
                ))}
                </ul>
                <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 uppercase tracking-wider">Starting from</span>
                        <span className="font-bold text-white text-lg">{service.starting_price || 'Custom'}</span>
                    </div>
                    {/* For now, just link to contact for pricing or use a generic modal */}
                    <a href={route('contact')} className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group bg-blue-500/10 px-4 py-2 rounded-lg">
                        Get Quote <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                </div>
            </div>
          ))
      ) : (
          <div className="col-span-full text-center text-slate-400 py-12">
              No services available at the moment.
          </div>
      )}
    </div>
  </div>
</section>

{/* Premium Pricing Modal Reveal */}
<div className={`popup-overlay ${selectedService ? 'show pricing-modal-overlay' : ''}`} onClick={() => setSelectedService(null)} style={{ overflowY: "auto", alignItems: "flex-start", padding: "40px 20px" }}>
    <div className="popup-card pricing-modal-card" style={{padding: "40px", width: "100%", maxWidth: "1000px", margin: "auto", background: "rgba(6, 9, 19, 0.95)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px rgba(14, 165, 233, 0.15)"}} onClick={e => e.stopPropagation()}>
        {selectedService && (
            <>
                <button onClick={() => setSelectedService(null)} className="text-slate-400 hover:text-white flex items-center gap-2 mb-8 text-sm transition-colors group tracking-wide">
                    <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Services
                </button>
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedService.title}</h3>
                        <p className="text-slate-400">Pricing Plans</p>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {selectedService.plans.map((plan, idx) => (
                        <div key={idx} className={`pricing-modal-card pricing-plan-${idx} relative flex flex-col p-6 rounded-2xl border ${plan.popular ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'border-white/10 bg-white/5'}`}>
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg shadow-blue-500/30">
                                    MOST POPULAR ⭐
                                </div>
                            )}
                            <div className="mb-6 text-center">
                                <h4 className={`text-sm font-bold tracking-widest mb-3 ${plan.popular ? 'text-blue-400' : 'text-slate-400'}`}>{plan.name}</h4>
                                <div className="text-slate-400 text-xs mb-1">Starting from</div>
                                <div className="text-3xl md:text-4xl font-bold text-white">{plan.price}</div>
                            </div>
                            
                            <div className="flex-1 mb-8">
                                <ul className="flex flex-col gap-4">
                                    {plan.features.map((feature, fidx) => (
                                        <li key={fidx} className="flex items-start gap-3 text-slate-300 text-sm">
                                            <span className="text-blue-500 shrink-0 mt-0.5 font-bold">✓</span> 
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {plan.custom && (
                                <div className="text-xs text-slate-400 italic mb-6 text-center pb-6 border-b border-white/5 whitespace-pre-line">
                                    {plan.custom}
                                </div>
                            )}
                            
                            <a href="/contact" className={`mt-auto text-center w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                                Get Started &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </>
        )}
    </div>
</div>

            </div>
        </MainLayout>
    );
}
