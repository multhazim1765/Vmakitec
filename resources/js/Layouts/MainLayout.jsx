import React, { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function MainLayout({ children }) {
    const { url } = usePage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Hide loader on route change or initial load
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

        // Navbar scroll effect
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Scroll reveal logic
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        // Function to observe all reveal elements
        const observeElements = () => {
            const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
            reveals.forEach(el => {
                if (!el.hasAttribute('data-observed')) {
                    observer.observe(el);
                    el.setAttribute('data-observed', 'true');
                }
            });
        };
        
        // Initial observe
        // Use a short timeout to ensure children are mounted in React before selecting
        setTimeout(observeElements, 50);

        // Use MutationObserver to catch any dynamically added elements
        const mutationObserver = new MutationObserver(() => {
            observeElements();
        });
        
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, [url]); // Re-run loader logic and reveal on URL change

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-dark-900 text-slate-200 min-h-screen overflow-x-hidden">
            <div id="loader"><div className="loader-ring"></div><div className="loader-text">Loading VMAKITEC...</div></div>
            <div className="cursor-glow" id="cursorGlow"></div>
            <div id="toast" className="toast"></div>

            <nav className="nav-glass fixed top-0 left-0 right-0 z-50" id="navbar">
              <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2" style={{textDecoration: "none"}}>
                  <div style={{width: "36px", height: "36px", background: "linear-gradient(135deg,#0ea5e9,#6366f1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: ".85rem", color: "#fff"}}>V</div>
                  <span style={{fontWeight: "700", fontSize: "1.15rem", color: "#f1f5f9", letterSpacing: "-.02em"}}>VMAKITEC</span>
                </Link>
                <div className="desktop-nav flex items-center gap-8" style={{display: "flex"}}>
                  <Link href="/" className={`nav-link ${url === '/' ? 'active' : ''}`}>Home</Link>
                  <Link href="/about" className={`nav-link ${url === '/about' ? 'active' : ''}`}>About</Link>
                  <Link href="/services" className={`nav-link ${url === '/services' ? 'active' : ''}`}>Services</Link>
                  <Link href="/why-us" className={`nav-link ${url === '/why-us' ? 'active' : ''}`}>Why Us</Link>
                  <Link href="/tech-stack" className={`nav-link ${url === '/tech-stack' ? 'active' : ''}`}>Tech Stack</Link>
                  <Link href="/contact" className={`nav-link ${url === '/contact' ? 'active' : ''}`}>Contact</Link>
                  <Link href="/login" className="btn-outline" style={{padding: "8px 18px", fontSize: ".85rem", borderRadius: "8px", textDecoration: "none"}}>&#128737; Admin</Link>
                </div>
                <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} id="hamburger" onClick={toggleMobileMenu}><span></span><span></span><span></span></div>
              </div>
            </nav>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`} id="mobileMenu">
              <Link href="/" onClick={toggleMobileMenu}>Home</Link>
              <Link href="/about" onClick={toggleMobileMenu}>About</Link>
              <Link href="/services" onClick={toggleMobileMenu}>Services</Link>
              <Link href="/why-us" onClick={toggleMobileMenu}>Why Us</Link>
              <Link href="/tech-stack" onClick={toggleMobileMenu}>Tech Stack</Link>
              <Link href="/contact" onClick={toggleMobileMenu}>Contact</Link>
              <Link href="/login" className="btn-outline" style={{marginTop: "16px", textDecoration: "none"}}>Admin Login</Link>
            </div>

            <main id="mainSite">
                {children}
            </main>

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
                      <a href="https://github.com/vmakitec" target="_blank" rel="noopener" style={{width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all .2s", textDecoration: "none"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                      <a href="https://www.instagram.com/vmakitec?igsh=cDg3c2hqZGFnZXp5" target="_blank" rel="noopener" style={{width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all .2s", textDecoration: "none"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                      <a href="https://linkedin.com/company/vmakitec" target="_blank" rel="noopener" style={{width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all .2s", textDecoration: "none"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                      <a href="https://wa.me/919600244885" target="_blank" rel="noopener" style={{width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all .2s", textDecoration: "none"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
                    </div>
                  </div>
                  <div><h4 style={{fontWeight: "700", fontSize: ".95rem", color: "#f1f5f9", marginBottom: "16px"}}>Services</h4><ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "10px"}}><li><Link href="/services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>Web Development</Link></li><li><Link href="/services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>Mobile App Development</Link></li><li><Link href="/services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>AI Solutions</Link></li><li><Link href="/services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>Data Analytics</Link></li><li><Link href="/services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>UI/UX Design</Link></li><li><Link href="/services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>Digital Transformation</Link></li></ul></div>
                  <div><h4 style={{fontWeight: "700", fontSize: ".95rem", color: "#f1f5f9", marginBottom: "16px"}}>Quick Links</h4><ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "10px"}}><li><Link href="/" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>Home</Link></li><li><Link href="/about" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>About Us</Link></li><li><Link href="/services" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>Services</Link></li><li><Link href="/why-us" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>Why Choose Us</Link></li><li><Link href="/tech-stack" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>Tech Stack</Link></li><li><Link href="/contact" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>Contact</Link></li></ul></div>
                  <div><h4 style={{fontWeight: "700", fontSize: ".95rem", color: "#f1f5f9", marginBottom: "16px"}}>Contact</h4><ul style={{listStyle: "none", display: "flex", flexDirection: "column", gap: "12px"}}><li style={{display: "flex", alignItems: "flex-start", gap: "10px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" style={{marginTop: "3px", flexShrink: "0"}}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><a href="mailto:vmakitec@gmail.com" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s", wordBreak: "break-all"}}>vmakitec@gmail.com</a></li><li style={{display: "flex", alignItems: "center", gap: "10px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" style={{flexShrink: "0"}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+919600244885" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>+91 9600244885</a></li><li style={{display: "flex", alignItems: "center", gap: "10px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" style={{flexShrink: "0"}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+917092768612" style={{fontSize: ".9rem", color: "#64748b", textDecoration: "none", transition: "color .2s"}}>+91 7092768612</a></li></ul></div>
                  </div>
                  <div style={{borderTop: "1px solid rgba(255,255,255,.05)", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px"}}>
                    <p style={{fontSize: ".85rem", color: "#475569"}}>&copy; 2025 VMAKITEC. All rights reserved.</p>
                    <p style={{fontSize: ".85rem", color: "#475569"}}>We Make IT Easy</p>
                  </div>
                </div>
            </footer>
        </div>
    );
}
