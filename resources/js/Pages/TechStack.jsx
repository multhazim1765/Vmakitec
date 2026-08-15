import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function TechStack() {
    return (
        <MainLayout>
            <Head title="Tech Stack - VMAKITEC" />
            <div style={{ paddingTop: '80px' }}>
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


            </div>
        </MainLayout>
    );
}
