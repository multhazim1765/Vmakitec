import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact Us - VMAKITEC" />
            <div style={{ paddingTop: '80px' }}>
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


            </div>
        </MainLayout>
    );
}
