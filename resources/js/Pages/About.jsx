import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function About() {
    return (
        <MainLayout>
            <Head title="About Us - VMAKITEC" />
            <div style={{ paddingTop: '80px' }}>
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


            </div>
        </MainLayout>
    );
}
