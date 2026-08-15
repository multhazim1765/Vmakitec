<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VMAKITEC — We Make IT Easy</title>
<meta name="description" content="VMAKITEC - Transforming Ideas Into Digital Solutions. Web Development, Mobile Apps, AI Solutions, Data Analytics, UI/UX Design, Digital Transformation.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config={theme:{extend:{colors:{dark:{900:'#050510',800:'#0a0a1a',700:'#0d1127',600:'#131836',500:'#1a2044'},electric:{400:'#38bdf8',500:'#0ea5e9',600:'#0284c7'}},fontFamily:{sans:['Inter','sans-serif'],mono:['JetBrains Mono','monospace']}}}}
</script>
<style>
*{margin:0;padding:0;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#0ea5e9 #0a0a1a}
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:#0a0a1a}
::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#0ea5e9,#6366f1);border-radius:3px}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:#050510;color:#e2e8f0;overflow-x:hidden}

#loader{position:fixed;inset:0;z-index:9999;background:#050510;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;transition:opacity .6s,visibility .6s}
#loader.hidden{opacity:0;visibility:hidden;pointer-events:none}
.loader-ring{width:60px;height:60px;border:3px solid transparent;border-top:3px solid #0ea5e9;border-right:3px solid #6366f1;border-radius:50%;animation:spin 1s linear infinite;position:relative}
.loader-ring::before{content:'';position:absolute;inset:6px;border:3px solid transparent;border-bottom:3px solid #38bdf8;border-left:3px solid #a78bfa;border-radius:50%;animation:spin 1.5s linear reverse infinite}
.loader-text{color:#64748b;font-size:.85rem}

.cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(14,165,233,.08) 0%,transparent 70%);pointer-events:none;z-index:1;transform:translate(-50%,-50%);transition:left .3s ease-out,top .3s ease-out}

.nav-glass{background:rgba(5,5,16,.7);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(14,165,233,.1);transition:all .3s}
.nav-glass.scrolled{background:rgba(5,5,16,.95);border-bottom-color:rgba(14,165,233,.2)}
.nav-link{position:relative;padding:.5rem 0;color:#94a3b8;transition:color .3s;text-decoration:none}
.nav-link:hover,.nav-link.active{color:#0ea5e9}
.nav-link::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:linear-gradient(90deg,#0ea5e9,#6366f1);transition:width .3s}
.nav-link:hover::after,.nav-link.active::after{width:100%}

.glass{background:rgba(255,255,255,.03);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.06);border-radius:16px;transition:all .4s cubic-bezier(.4,0,.2,1)}
.glass:hover{background:rgba(255,255,255,.06);border-color:rgba(14,165,233,.2);transform:translateY(-4px);box-shadow:0 20px 60px rgba(14,165,233,.1)}
.glass-blue{background:rgba(14,165,233,.05);border:1px solid rgba(14,165,233,.15);border-radius:16px;transition:all .4s}
.glass-blue:hover{background:rgba(14,165,233,.1);border-color:rgba(14,165,233,.3);box-shadow:0 0 40px rgba(14,165,233,.1)}

.tilt-card{transform-style:preserve-3d;perspective:1000px;will-change:transform}

.gradient-text{background:linear-gradient(135deg,#38bdf8 0%,#0ea5e9 30%,#6366f1 70%,#a78bfa 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}

.btn-primary{position:relative;padding:14px 32px;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;font-weight:600;border-radius:12px;border:none;cursor:pointer;overflow:hidden;transition:all .3s;font-size:.95rem;font-family:'Inter',sans-serif}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 40px rgba(14,165,233,.3)}
.btn-primary::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,#6366f1,#0ea5e9);opacity:0;transition:opacity .3s}
.btn-primary:hover::before{opacity:1}
.btn-primary span{position:relative;z-index:1}
.btn-outline{padding:14px 32px;border:1.5px solid rgba(14,165,233,.4);color:#38bdf8;font-weight:600;border-radius:12px;background:transparent;cursor:pointer;transition:all .3s;font-size:.95rem;font-family:'Inter',sans-serif}
.btn-outline:hover{border-color:#0ea5e9;background:rgba(14,165,233,.1);transform:translateY(-2px);box-shadow:0 10px 40px rgba(14,165,233,.15)}
.btn-ghost{padding:14px 32px;color:#94a3b8;font-weight:500;border:none;border-radius:12px;background:transparent;cursor:pointer;transition:all .3s;font-size:.95rem;font-family:'Inter',sans-serif}
.btn-ghost:hover{color:#e2e8f0;background:rgba(255,255,255,.05)}

.service-icon{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;transition:all .3s}
.glass:hover .service-icon{transform:scale(1.1) rotateZ(-5deg)}

.form-input{width:100%;padding:14px 18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;color:#e2e8f0;font-family:'Inter',sans-serif;font-size:.95rem;transition:all .3s;outline:none}
.form-input:focus{border-color:#0ea5e9;background:rgba(14,165,233,.05);box-shadow:0 0 0 3px rgba(14,165,233,.1)}
.form-input::placeholder{color:#475569}
.form-input.error{border-color:#ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.1)}
.form-label{display:block;font-size:.85rem;font-weight:500;color:#94a3b8;margin-bottom:8px}
.error-msg{font-size:.8rem;color:#ef4444;margin-top:4px;display:none}
.error-msg.show{display:block}
select.form-input{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center}
select.form-input option{background:#0d1127;color:#e2e8f0}
textarea.form-input{resize:vertical;min-height:120px}

.section-divider{width:60px;height:4px;background:linear-gradient(90deg,#0ea5e9,#6366f1);border-radius:2px}

.reveal{opacity:0;transform:translateY(40px);transition:all .8s cubic-bezier(.4,0,.2,1)}
.reveal.active{opacity:1;transform:translateY(0)}
.reveal-left{opacity:0;transform:translateX(-40px);transition:all .8s cubic-bezier(.4,0,.2,1)}
.reveal-left.active{opacity:1;transform:translateX(0)}
.reveal-right{opacity:0;transform:translateX(40px);transition:all .8s cubic-bezier(.4,0,.2,1)}
.reveal-right.active{opacity:1;transform:translateX(0)}
.reveal-scale{opacity:0;transform:scale(.9);transition:all .8s cubic-bezier(.4,0,.2,1)}
.reveal-scale.active{opacity:1;transform:scale(1)}

.popup-overlay{position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,.7);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:20px}
.popup-overlay.show{display:flex}
.popup-card{background:#0d1127;border:1px solid rgba(14,165,233,.2);border-radius:20px;max-width:500px;width:100%;overflow:hidden;animation:popupIn .4s cubic-bezier(.4,0,.2,1);position:relative}
.popup-card img{width:100%;height:250px;object-fit:cover}

.admin-container{display:none;min-height:100vh}
.admin-container.show{display:flex}
.admin-sidebar{width:260px;background:#0a0a1a;border-right:1px solid rgba(255,255,255,.06);padding:24px 0;position:fixed;top:0;left:0;bottom:0;z-index:50;overflow-y:auto}
.admin-main{margin-left:260px;flex:1;padding:32px;min-height:100vh}
.admin-nav-item{display:flex;align-items:center;gap:12px;padding:12px 24px;color:#94a3b8;cursor:pointer;transition:all .2s;border-left:3px solid transparent;font-size:.9rem}
.admin-nav-item:hover{color:#e2e8f0;background:rgba(255,255,255,.03)}
.admin-nav-item.active{color:#0ea5e9;background:rgba(14,165,233,.08);border-left-color:#0ea5e9}
.admin-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:24px}
.admin-table{width:100%;border-collapse:collapse}
.admin-table th{text-align:left;padding:12px 16px;font-size:.8rem;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid rgba(255,255,255,.06)}
.admin-table td{padding:14px 16px;font-size:.9rem;border-bottom:1px solid rgba(255,255,255,.03);color:#cbd5e1}
.admin-table tr:hover td{background:rgba(255,255,255,.02)}
.admin-toggle{width:48px;height:26px;border-radius:13px;background:#334155;cursor:pointer;position:relative;transition:background .3s;display:inline-block}
.admin-toggle.on{background:#0ea5e9}
.admin-toggle::after{content:'';position:absolute;width:20px;height:20px;border-radius:50%;background:#fff;top:3px;left:3px;transition:transform .3s}
.admin-toggle.on::after{transform:translateX(22px)}

.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:8px;z-index:60}
.hamburger span{width:24px;height:2px;background:#e2e8f0;transition:all .3s;border-radius:1px}
.hamburger.open span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
.hamburger.open span:nth-child(2){opacity:0}
.hamburger.open span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}
.mobile-menu{position:fixed;inset:0;z-index:55;background:rgba(5,5,16,.98);backdrop-filter:blur(20px);display:none;flex-direction:column;align-items:center;justify-content:center;gap:32px}
.mobile-menu.show{display:flex}
.mobile-menu a{font-size:1.5rem;font-weight:600;color:#94a3b8;transition:color .3s;text-decoration:none}
.mobile-menu a:hover{color:#0ea5e9}

.toast{position:fixed;bottom:30px;right:30px;padding:16px 24px;border-radius:12px;font-size:.9rem;font-weight:500;z-index:9999;transform:translateY(100px);opacity:0;transition:all .4s cubic-bezier(.4,0,.2,1);display:flex;align-items:center;gap:10px;max-width:400px}
.toast.show{transform:translateY(0);opacity:1}
.toast.success{background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.3);color:#34d399}
.toast.error{background:rgba(239,68,68,.15);border:1px solid rgba(239,68,68,.3);color:#f87171}
.toast.info{background:rgba(14,165,233,.15);border:1px solid rgba(14,165,233,.3);color:#38bdf8}

.grid-bg{background-image:linear-gradient(rgba(14,165,233,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,.03) 1px,transparent 1px);background-size:60px 60px}

.particle{position:absolute;width:2px;height:2px;background:rgba(14,165,233,.5);border-radius:50%;animation:particleFloat linear infinite}

/* Logo Hero Styles */
.hero-logo-wrapper{position:relative;display:flex;align-items:center;justify-content:center}
.hero-logo-glow{position:absolute;width:120%;height:120%;background:radial-gradient(circle,rgba(14,165,233,.15) 0%,rgba(99,102,241,.08) 40%,transparent 70%);border-radius:50%;animation:logoGlowPulse 4s ease-in-out infinite;pointer-events:none}
.hero-logo-ring{position:absolute;width:110%;height:110%;border:1px solid rgba(14,165,233,.15);border-radius:50%;animation:spin 20s linear infinite;pointer-events:none}
.hero-logo-ring::after{content:'';position:absolute;top:-3px;left:50%;width:6px;height:6px;background:#0ea5e9;border-radius:50%;box-shadow:0 0 12px #0ea5e9}
.hero-logo-ring2{position:absolute;width:125%;height:125%;border:1px dashed rgba(99,102,241,.1);border-radius:50%;animation:spin 35s linear infinite reverse;pointer-events:none}
.hero-logo-img{width:340px;height:340px;object-fit:contain;position:relative;z-index:2;filter:drop-shadow(0 0 30px rgba(14,165,233,.2));animation:logoFloat 6s ease-in-out infinite}
@media(max-width:768px){.hero-logo-img{width:240px;height:240px}}

/* Tech Card */
.tech-card-icon{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:14px;font-size:24px;font-weight:800;transition:transform .3s}
.glass:hover .tech-card-icon{transform:scale(1.15) rotate(-5deg)}

@keyframes spin{to{transform:rotate(360deg)}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
@keyframes popupIn{from{opacity:0;transform:scale(.9) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}
@keyframes particleFloat{0%{transform:translateY(100vh) translateX(0);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translateY(-100px) translateX(100px);opacity:0}}
@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse{0%,100%{opacity:.5}50%{opacity:1}}
@keyframes logoFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
@keyframes logoGlowPulse{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}}

.stagger-children .reveal:nth-child(1){transition-delay:.05s}
.stagger-children .reveal:nth-child(2){transition-delay:.1s}
.stagger-children .reveal:nth-child(3){transition-delay:.15s}
.stagger-children .reveal:nth-child(4){transition-delay:.2s}
.stagger-children .reveal:nth-child(5){transition-delay:.25s}
.stagger-children .reveal:nth-child(6){transition-delay:.3s}
.stagger-children .reveal:nth-child(7){transition-delay:.35s}
.stagger-children .reveal:nth-child(8){transition-delay:.4s}
.stagger-children .reveal:nth-child(9){transition-delay:.45s}
.stagger-children .reveal:nth-child(10){transition-delay:.5s}
.stagger-children .reveal:nth-child(11){transition-delay:.55s}
.stagger-children .reveal:nth-child(12){transition-delay:.6s}
.stagger-children .reveal:nth-child(13){transition-delay:.65s}

.admin-mobile-toggle{display:none;position:fixed;top:16px;left:16px;z-index:60;background:#0d1127;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:10px 12px;cursor:pointer;color:#e2e8f0}
@media(max-width:768px){.admin-mobile-toggle{display:flex}}
@media(max-width:1024px){
  .admin-sidebar{width:220px}
  .admin-main{margin-left:220px;padding:24px}
}
@media(max-width:768px){
  .hamburger{display:flex}
  .desktop-nav{display:none!important}
  .admin-sidebar{transform:translateX(-100%);transition:transform .3s}
  .admin-sidebar.open{transform:translateX(0)}
  .admin-main{margin-left:0}
  .hero-buttons{flex-direction:column}
  .hero-buttons .btn-primary,.hero-buttons .btn-outline,.hero-buttons .btn-ghost{width:100%;text-align:center}
  .toast{left:16px;right:16px;bottom:16px;max-width:none}
}
</style>
</head>
<body class="grid-bg">

<div id="loader"><div class="loader-ring"></div><div class="loader-text">Loading VMAKITEC...</div></div>
<div class="cursor-glow" id="cursorGlow"></div>
<div id="toast" class="toast"></div>

<!-- POPUP OVERLAY -->
<div class="popup-overlay" id="popupOverlay">
  <div class="popup-card">
    <button onclick="closePopup()" style="position:absolute;top:12px;right:12px;z-index:10;width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.1);color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px)" onmouseover="this.style.background='rgba(239,68,68,.6)'" onmouseout="this.style.background='rgba(0,0,0,.6)'">&times;</button>
    <img id="popupImage" src="" alt="" style="display:none">
    <div style="padding:28px">
      <h3 id="popupTitle" style="font-size:1.3rem;font-weight:700;margin-bottom:10px;color:#f1f5f9"></h3>
      <p id="popupDesc" style="font-size:.95rem;color:#94a3b8;line-height:1.6"></p>
      <button onclick="closePopup()" class="btn-primary" style="margin-top:20px;width:100%"><span>Got It</span></button>
    </div>
  </div>
</div>

<!-- ==================== MAIN WEBSITE ==================== -->
<div id="mainSite">

<nav class="nav-glass fixed top-0 left-0 right-0 z-50" id="navbar">
  <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
    <a href="#home" class="flex items-center gap-2" style="text-decoration:none">
      <div style="width:36px;height:36px;background:linear-gradient(135deg,#0ea5e9,#6366f1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.85rem;color:#fff">V</div>
      <span style="font-weight:700;font-size:1.15rem;color:#f1f5f9;letter-spacing:-.02em">VMAKITEC</span>
    </a>
    <div class="desktop-nav flex items-center gap-8" style="display:flex">
      <a href="#home" class="nav-link active" data-section="home">Home</a>
      <a href="#about" class="nav-link" data-section="about">About</a>
      <a href="#services" class="nav-link" data-section="services">Services</a>
      <a href="#why-us" class="nav-link" data-section="why-us">Why Us</a>
      <a href="#tech-stack" class="nav-link" data-section="tech-stack">Tech Stack</a>
      <a href="#contact" class="nav-link" data-section="contact">Contact</a>
      <button onclick="showAdminLogin()" class="btn-outline" style="padding:8px 18px;font-size:.85rem;border-radius:8px">&#128737; Admin</button>
    </div>
    <div class="hamburger" id="hamburger" onclick="toggleMobileMenu()"><span></span><span></span><span></span></div>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a href="#home" onclick="closeMobileMenu()">Home</a>
  <a href="#about" onclick="closeMobileMenu()">About</a>
  <a href="#services" onclick="closeMobileMenu()">Services</a>
  <a href="#why-us" onclick="closeMobileMenu()">Why Us</a>
  <a href="#tech-stack" onclick="closeMobileMenu()">Tech Stack</a>
  <a href="#contact" onclick="closeMobileMenu()">Contact</a>
  <button onclick="closeMobileMenu();showAdminLogin()" class="btn-outline" style="margin-top:16px">Admin Login</button>
</div>

<!-- ===== HERO ===== -->
<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden" style="padding-top:80px">
  <div style="position:absolute;inset:0;overflow:hidden;pointer-events:none">
    <div style="position:absolute;top:-20%;left:-10%;width:600px;height:600px;background:radial-gradient(circle,rgba(14,165,233,.12) 0%,transparent 70%);border-radius:50%"></div>
    <div style="position:absolute;bottom:-20%;right:-10%;width:500px;height:500px;background:radial-gradient(circle,rgba(99,102,241,.1) 0%,transparent 70%);border-radius:50%"></div>
    <div id="particles" style="position:absolute;inset:0"></div>
  </div>
  <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
    <div class="flex-1 text-center lg:text-left">
      <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:100px;font-size:.8rem;color:#38bdf8;font-weight:500;margin-bottom:24px;animation:fadeInUp .8s ease-out both">
        <span style="width:6px;height:6px;background:#0ea5e9;border-radius:50%;animation:pulse 2s infinite"></span>
        We Make IT Easy
      </div>
      <h1 style="font-size:clamp(2.2rem,5.5vw,4rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin-bottom:20px;animation:fadeInUp .8s .15s ease-out both">
        Transforming Ideas Into<br><span class="gradient-text">Digital Solutions</span>
      </h1>
      <p style="font-size:clamp(1rem,1.8vw,1.2rem);color:#94a3b8;line-height:1.7;max-width:560px;margin-bottom:36px;animation:fadeInUp .8s .3s ease-out both">
        Helping businesses, startups, and organizations build modern websites, mobile applications, AI-powered systems, and data-driven solutions.
      </p>
      <div class="hero-buttons flex flex-wrap gap-4 justify-center lg:justify-start" style="animation:fadeInUp .8s .45s ease-out both">
        <a href="#contact" class="btn-primary" style="text-decoration:none"><span>Start Your Project</span></a>
        <a href="#contact" class="btn-outline" style="text-decoration:none">Get Free Consultation</a>
        <a href="#contact" class="btn-ghost" style="text-decoration:none">Contact Us &#8594;</a>
      </div>
    </div>
    <!-- VMAKITEC LOGO -->
    <div class="flex-shrink-0 reveal-scale" style="animation:fadeInUp 1s .3s ease-out both">
      <div class="hero-logo-wrapper">
        <div class="hero-logo-glow"></div>
        <div class="hero-logo-ring"></div>
        <div class="hero-logo-ring2"></div>
        <!--
          IMPORTANT: Replace the src below with your own hosted logo URL.
          The current URL may expire. Upload your logo to your project
          or Supabase storage and update the path.
        -->
        <img
          src="https://z-cdn-media.chatglm.cn/files/9c9058b9-7a81-4c39-8d4a-8991490d66ce.jpeg?auth_key=1882230010-987bae5e063043e898f1fd363647e89f-0-100ba04fca00dedcefb1362ed76c93e7"
          alt="VMAKITEC Logo"
          class="hero-logo-img"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        >
        <!-- Fallback if image fails -->
        <div style="display:none;width:340px;height:340px;border-radius:50%;background:linear-gradient(135deg,rgba(14,165,233,.1),rgba(99,102,241,.1));border:2px solid rgba(14,165,233,.2);align-items:center;justify-content:center;flex-direction:column;gap:8px;position:relative;z-index:2" class="hero-logo-img">
          <div style="width:100px;height:100px;background:linear-gradient(135deg,#0ea5e9,#6366f1);border-radius:24px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:2.5rem;color:#fff">V</div>
          <span style="font-weight:700;font-size:1.1rem;color:#f1f5f9;letter-spacing:.05em">VMAKITEC</span>
        </div>
      </div>
    </div>
  </div>
  <div style="position:absolute;bottom:30px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;opacity:.5">
    <span style="font-size:.75rem;color:#64748b;letter-spacing:.1em;text-transform:uppercase">Scroll</span>
    <div style="width:20px;height:32px;border:1.5px solid #475569;border-radius:10px;display:flex;justify-content:center;padding-top:6px">
      <div style="width:3px;height:8px;background:#0ea5e9;border-radius:2px;animation:float 2s ease-in-out infinite"></div>
    </div>
  </div>
</section>

<!-- ===== ABOUT ===== -->
<section id="about" class="py-24 lg:py-32 relative">
  <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"></div>
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16">
      <p class="reveal" style="font-size:.8rem;font-weight:600;color:#0ea5e9;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px">About Us</p>
      <h2 class="reveal" style="font-size:clamp(1.8rem,4vw,3rem);font-weight:800;letter-spacing:-.02em;margin-bottom:16px">Who We <span class="gradient-text">Are</span></h2>
      <div class="section-divider reveal" style="margin:0 auto"></div>
    </div>
    <div class="grid lg:grid-cols-2 gap-12 items-start">
      <div class="reveal-left">
        <p style="font-size:1.1rem;color:#cbd5e1;line-height:1.8;margin-bottom:24px">VMAKITEC is a technology solutions company focused on helping businesses transform ideas into scalable digital products and services.</p>
        <div class="glass-blue" style="padding:24px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            <h4 style="font-weight:700;font-size:1.05rem;color:#f1f5f9">Our Mission</h4>
          </div>
          <p style="font-size:.95rem;color:#94a3b8;line-height:1.7">Deliver reliable, innovative, and affordable technology solutions that help businesses grow.</p>
        </div>
      </div>
      <div class="reveal-right">
        <h4 style="font-weight:700;font-size:1.1rem;color:#f1f5f9;margin-bottom:20px;display:flex;align-items:center;gap:10px">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          Our Values
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="glass" style="padding:16px;display:flex;align-items:center;gap:12px">
            <div style="width:40px;height:40px;border-radius:10px;background:rgba(14,165,233,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></div>
            <span style="font-weight:600;font-size:.95rem;color:#e2e8f0">Innovation</span>
          </div>
          <div class="glass" style="padding:16px;display:flex;align-items:center;gap:12px">
            <div style="width:40px;height:40px;border-radius:10px;background:rgba(16,185,129,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg></div>
            <span style="font-weight:600;font-size:.95rem;color:#e2e8f0">Quality</span>
          </div>
          <div class="glass" style="padding:16px;display:flex;align-items:center;gap:12px">
            <div style="width:40px;height:40px;border-radius:10px;background:rgba(99,102,241,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></div>
            <span style="font-weight:600;font-size:.95rem;color:#e2e8f0">Transparency</span>
          </div>
          <div class="glass" style="padding:16px;display:flex;align-items:center;gap:12px">
            <div style="width:40px;height:40px;border-radius:10px;background:rgba(245,158,11,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
            <span style="font-weight:600;font-size:.95rem;color:#e2e8f0">Continuous Learning</span>
          </div>
          <div class="glass" style="padding:16px;display:flex;align-items:center;gap:12px">
            <div style="width:40px;height:40px;border-radius:10px;background:rgba(236,72,153,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <span style="font-weight:600;font-size:.95rem;color:#e2e8f0">Customer Focus</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== SERVICES ===== -->
<section id="services" class="py-24 lg:py-32 relative">
  <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"></div>
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16">
      <p class="reveal" style="font-size:.8rem;font-weight:600;color:#0ea5e9;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px">What We Do</p>
      <h2 class="reveal" style="font-size:clamp(1.8rem,4vw,3rem);font-weight:800;letter-spacing:-.02em;margin-bottom:16px">Our <span class="gradient-text">Services</span></h2>
      <div class="section-divider reveal" style="margin:0 auto"></div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
      <div class="glass tilt-card reveal" style="padding:28px">
        <div class="service-icon" style="background:rgba(14,165,233,.1);color:#0ea5e9;margin-bottom:20px"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
        <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:12px;color:#f1f5f9">Web Development</h3>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px">
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">&#9656;</span> Business Websites</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">&#9656;</span> Corporate Websites</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">&#9656;</span> Portfolio Websites</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">&#9656;</span> Landing Pages</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">&#9656;</span> E-Commerce Platforms</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">&#9656;</span> Admin Dashboards</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#0ea5e9">&#9656;</span> SEO Optimization</li>
        </ul>
      </div>
      <div class="glass tilt-card reveal" style="padding:28px">
        <div class="service-icon" style="background:rgba(99,102,241,.1);color:#6366f1;margin-bottom:20px"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
        <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:12px;color:#f1f5f9">Mobile App Development</h3>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px">
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#6366f1">&#9656;</span> Android Apps</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#6366f1">&#9656;</span> Cross Platform Apps</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#6366f1">&#9656;</span> Business Applications</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#6366f1">&#9656;</span> Inventory Systems</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#6366f1">&#9656;</span> Booking Applications</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#6366f1">&#9656;</span> Offline First Applications</li>
        </ul>
      </div>
      <div class="glass tilt-card reveal" style="padding:28px">
        <div class="service-icon" style="background:rgba(16,185,129,.1);color:#10b981;margin-bottom:20px"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 3.4 2 6.1 5 7.4V20h6v-2.6c3-1.3 5-4 5-7.4a8 8 0 0 0-8-8Z"/><path d="M9 22h6"/><path d="M8 18v4"/><path d="M16 18v4"/></svg></div>
        <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:12px;color:#f1f5f9">AI Solutions</h3>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px">
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#10b981">&#9656;</span> AI Chatbots</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#10b981">&#9656;</span> Automation Systems</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#10b981">&#9656;</span> Machine Learning Solutions</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#10b981">&#9656;</span> AI Assistants</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#10b981">&#9656;</span> Predictive Analytics</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#10b981">&#9656;</span> Intelligent Workflows</li>
        </ul>
      </div>
      <div class="glass tilt-card reveal" style="padding:28px">
        <div class="service-icon" style="background:rgba(245,158,11,.1);color:#f59e0b;margin-bottom:20px"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg></div>
        <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:12px;color:#f1f5f9">Data Analytics</h3>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px">
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#f59e0b">&#9656;</span> Business Intelligence</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#f59e0b">&#9656;</span> Dashboards</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#f59e0b">&#9656;</span> KPI Tracking</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#f59e0b">&#9656;</span> Data Visualization</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#f59e0b">&#9656;</span> Reporting Systems</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#f59e0b">&#9656;</span> Performance Analytics</li>
        </ul>
      </div>
      <div class="glass tilt-card reveal" style="padding:28px">
        <div class="service-icon" style="background:rgba(236,72,153,.1);color:#ec4899;margin-bottom:20px"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg></div>
        <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:12px;color:#f1f5f9">UI/UX Design</h3>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px">
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#ec4899">&#9656;</span> User Interface Design</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#ec4899">&#9656;</span> User Experience Design</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#ec4899">&#9656;</span> Wireframes</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#ec4899">&#9656;</span> Prototypes</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#ec4899">&#9656;</span> Design Systems</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#ec4899">&#9656;</span> Mobile App Design</li>
        </ul>
      </div>
      <div class="glass tilt-card reveal" style="padding:28px">
        <div class="service-icon" style="background:rgba(139,92,246,.1);color:#8b5cf6;margin-bottom:20px"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></div>
        <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:12px;color:#f1f5f9">Digital Transformation</h3>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px">
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">&#9656;</span> Process Automation</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">&#9656;</span> Workflow Optimization</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">&#9656;</span> Cloud Solutions</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">&#9656;</span> Software Modernization</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">&#9656;</span> Digital Strategy</li>
          <li style="font-size:.9rem;color:#94a3b8;display:flex;align-items:center;gap:8px"><span style="color:#8b5cf6">&#9656;</span> Business Management Systems</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ===== WHY US ===== -->
<section id="why-us" class="py-24 lg:py-32 relative">
  <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"></div>
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16">
      <p class="reveal" style="font-size:.8rem;font-weight:600;color:#0ea5e9;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px">Why Choose Us</p>
      <h2 class="reveal" style="font-size:clamp(1.8rem,4vw,3rem);font-weight:800;letter-spacing:-.02em;margin-bottom:16px">Why <span class="gradient-text">VMAKITEC</span></h2>
      <div class="section-divider reveal" style="margin:0 auto"></div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
      <div class="glass tilt-card reveal" style="padding:28px;text-align:center">
        <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,rgba(14,165,233,.15),rgba(14,165,233,.05));display:flex;align-items:center;justify-content:center;margin:0 auto 20px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg></div>
        <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:8px;color:#f1f5f9">Modern Technologies</h3>
        <p style="font-size:.9rem;color:#94a3b8;line-height:1.6">Using current frameworks and technologies.</p>
      </div>
      <div class="glass tilt-card reveal" style="padding:28px;text-align:center">
        <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,rgba(99,102,241,.15),rgba(99,102,241,.05));display:flex;align-items:center;justify-content:center;margin:0 auto 20px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z"/><path d="M12 12 9 10.91"/><path d="M12 12l3 1.09"/><path d="M12 12v3"/></svg></div>
        <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:8px;color:#f1f5f9">Custom Solutions</h3>
        <p style="font-size:.9rem;color:#94a3b8;line-height:1.6">Tailored for each client's needs.</p>
      </div>
      <div class="glass tilt-card reveal" style="padding:28px;text-align:center">
        <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,rgba(16,185,129,.15),rgba(16,185,129,.05));display:flex;align-items:center;justify-content:center;margin:0 auto 20px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div>
        <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:8px;color:#f1f5f9">Scalable Development</h3>
        <p style="font-size:.9rem;color:#94a3b8;line-height:1.6">Built for future growth.</p>
      </div>
      <div class="glass tilt-card reveal" style="padding:28px;text-align:center">
        <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,rgba(236,72,153,.15),rgba(236,72,153,.05));display:flex;align-items:center;justify-content:center;margin:0 auto 20px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><polyline points="16 11 18 13 22 9"/></svg></div>
        <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:8px;color:#f1f5f9">User-Focused Design</h3>
        <p style="font-size:.9rem;color:#94a3b8;line-height:1.6">Designed for real users.</p>
      </div>
      <div class="glass tilt-card reveal" style="padding:28px;text-align:center">
        <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,rgba(245,158,11,.15),rgba(245,158,11,.05));display:flex;align-items:center;justify-content:center;margin:0 auto 20px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></div>
        <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:8px;color:#f1f5f9">Transparent Communication</h3>
        <p style="font-size:.9rem;color:#94a3b8;line-height:1.6">Clear updates and collaboration.</p>
      </div>
      <div class="glass tilt-card reveal" style="padding:28px;text-align:center">
        <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,rgba(139,92,246,.15),rgba(139,92,246,.05));display:flex;align-items:center;justify-content:center;margin:0 auto 20px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg></div>
        <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:8px;color:#f1f5f9">Continuous Improvement</h3>
        <p style="font-size:.9rem;color:#94a3b8;line-height:1.6">Always learning and improving.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== TECH STACK (Horizontal Grid like Why Us) ===== -->
<section id="tech-stack" class="py-24 lg:py-32 relative">
  <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"></div>
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16">
      <p class="reveal" style="font-size:.8rem;font-weight:600;color:#0ea5e9;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px">Our Tools</p>
      <h2 class="reveal" style="font-size:clamp(1.8rem,4vw,3rem);font-weight:800;letter-spacing:-.02em;margin-bottom:16px">Technology <span class="gradient-text">Stack</span></h2>
      <div class="section-divider reveal" style="margin:0 auto"></div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 stagger-children">

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(227,79,38,.1);margin:0 auto 14px;color:#E34F26;font-size:28px;font-weight:900">H5</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">HTML</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Frontend</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(21,114,182,.1);margin:0 auto 14px;color:#1572B6;font-size:28px;font-weight:900">C3</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">CSS</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Frontend</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(247,223,30,.1);margin:0 auto 14px;color:#F7DF1E;font-size:26px;font-weight:900">JS</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">JavaScript</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Frontend</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(97,218,251,.1);margin:0 auto 14px;color:#61DAFB;font-size:22px;font-weight:900">Re</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">React</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Future Stack</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(6,182,212,.1);margin:0 auto 14px;color:#06B6D4;font-size:20px;font-weight:900">Tw</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">Tailwind CSS</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Future Stack</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(2,86,155,.1);margin:0 auto 14px;color:#02569B;font-size:20px;font-weight:900">Fl</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">Flutter</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Future Stack</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(62,207,142,.1);margin:0 auto 14px;color:#3ECF8E;font-size:20px;font-weight:900">Sb</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">Supabase</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Backend</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(65,105,225,.1);margin:0 auto 14px;color:#4169E1;font-size:18px;font-weight:900">Pg</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">PostgreSQL</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Backend</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(240,240,240,.06);margin:0 auto 14px;color:#f0f0f0;font-size:20px;font-weight:900">Gh</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">GitHub</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Tools</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(0,122,204,.1);margin:0 auto 14px;color:#007ACC;font-size:18px;font-weight:900">VS</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">VS Code</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Tools</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(255,255,255,.06);margin:0 auto 14px;color:#fff;font-size:18px;font-weight:900">Vc</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">Vercel</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Tools</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(242,200,17,.1);margin:0 auto 14px;color:#F2C811;font-size:18px;font-weight:900">BI</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">Power BI</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Analytics</p>
      </div>

      <div class="glass tilt-card reveal" style="padding:24px;text-align:center">
        <div class="tech-card-icon" style="background:rgba(55,118,171,.1);margin:0 auto 14px;color:#3776AB;font-size:22px;font-weight:900">Py</div>
        <h4 style="font-size:.95rem;font-weight:700;color:#f1f5f9">Python</h4>
        <p style="font-size:.75rem;color:#64748b;margin-top:4px">Analytics</p>
      </div>

    </div>
  </div>
</section>

<!-- ===== CONTACT ===== -->
<section id="contact" class="py-24 lg:py-32 relative">
  <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(14,165,233,.2),transparent)"></div>
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16">
      <p class="reveal" style="font-size:.8rem;font-weight:600;color:#0ea5e9;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px">Get In Touch</p>
      <h2 class="reveal" style="font-size:clamp(1.8rem,4vw,3rem);font-weight:800;letter-spacing:-.02em;margin-bottom:16px">Request a <span class="gradient-text">Quote</span></h2>
      <div class="section-divider reveal" style="margin:0 auto"></div>
    </div>
    <div class="grid lg:grid-cols-5 gap-10">
      <div class="lg:col-span-2 reveal-left">
        <div class="glass-blue" style="padding:28px;margin-bottom:20px">
          <h4 style="font-weight:700;font-size:1.05rem;color:#f1f5f9;margin-bottom:20px;display:flex;align-items:center;gap:10px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> Email</h4>
          <a href="mailto:vmakitec@gmail.com" style="font-size:.95rem;color:#94a3b8;text-decoration:none;transition:color .2s;display:block;word-break:break-all" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#94a3b8'">vmakitec@gmail.com</a>
        </div>
        <div class="glass-blue" style="padding:28px;margin-bottom:20px">
          <h4 style="font-weight:700;font-size:1.05rem;color:#f1f5f9;margin-bottom:20px;display:flex;align-items:center;gap:10px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Phone</h4>
          <a href="tel:+919600244885" style="font-size:.95rem;color:#94a3b8;text-decoration:none;transition:color .2s;display:block;margin-bottom:8px" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#94a3b8'">+91 9600244885</a>
          <a href="tel:+917092768612" style="font-size:.95rem;color:#94a3b8;text-decoration:none;transition:color .2s;display:block" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#94a3b8'">+91 7092768612</a>
        </div>
        <div class="glass-blue" style="padding:28px">
          <h4 style="font-weight:700;font-size:1.05rem;color:#f1f5f9;margin-bottom:20px;display:flex;align-items:center;gap:10px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> WhatsApp</h4>
          <a href="https://wa.me/919600244885" target="_blank" rel="noopener" class="btn-primary" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:linear-gradient(135deg,#25D366,#128C7E);font-size:.9rem;text-decoration:none"><span>Chat on WhatsApp</span></a>
        </div>
      </div>
      <div class="lg:col-span-3 reveal-right">
        <form id="quoteForm" class="glass" style="padding:32px" onsubmit="return handleSubmit(event)">
          <div class="grid sm:grid-cols-2 gap-5">
            <div><label class="form-label">Full Name *</label><input type="text" name="name" class="form-input" placeholder="Your full name" required><div class="error-msg">Please enter your name</div></div>
            <div><label class="form-label">Email Address *</label><input type="email" name="email" class="form-input" placeholder="your@email.com" required><div class="error-msg">Please enter a valid email</div></div>
            <div><label class="form-label">Phone Number *</label><input type="tel" name="phone" class="form-input" placeholder="+91 XXXXXXXXXX" required><div class="error-msg">Please enter your phone number</div></div>
            <div><label class="form-label">Service Required *</label><select name="service" class="form-input" required><option value="">Select a service</option><option>Web Development</option><option>Mobile App Development</option><option>AI Solutions</option><option>Data Analytics</option><option>UI/UX Design</option><option>Digital Transformation</option><option>Other</option></select><div class="error-msg">Please select a service</div></div>
            <!-- Changed from dropdown to manual text input for budget -->
            <div class="sm:col-span-2"><label class="form-label">Project Budget</label><input type="text" name="budget" class="form-input" placeholder="Enter your estimated budget (e.g., ₹50,000 - ₹1,00,000)"></div>
            <div class="sm:col-span-2"><label class="form-label">Project Description *</label><textarea name="description" class="form-input" placeholder="Tell us about your project, goals, and any specific requirements..." required></textarea><div class="error-msg">Please describe your project</div></div>
          </div>
          <button type="submit" id="submitBtn" class="btn-primary" style="margin-top:24px;width:100%;padding:16px;font-size:1rem"><span id="submitText">Submit Request</span></button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer style="background:#050510;border-top:1px solid rgba(255,255,255,.05);padding:60px 0 30px">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
          <div style="width:36px;height:36px;background:linear-gradient(135deg,#0ea5e9,#6366f1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.85rem;color:#fff">V</div>
          <span style="font-weight:700;font-size:1.15rem;color:#f1f5f9">VMAKITEC</span>
        </div>
        <p style="font-size:.9rem;color:#64748b;line-height:1.7;margin-bottom:16px">We Make IT Easy</p>
        <div style="display:flex;gap:10px">
          <a href="https://github.com/vmakitec" target="_blank" rel="noopener" style="width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;color:#94a3b8;transition:all .2s;text-decoration:none" onmouseover="this.style.borderColor='#0ea5e9';this.style.color='#0ea5e9'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)';this.style.color='#94a3b8'"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          <a href="https://www.instagram.com/vmakitec?igsh=cDg3c2hqZGFnZXp5" target="_blank" rel="noopener" style="width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;color:#94a3b8;transition:all .2s;text-decoration:none" onmouseover="this.style.borderColor='#ec4899';this.style.color='#ec4899'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)';this.style.color='#94a3b8'"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="https://linkedin.com/company/vmakitec" target="_blank" rel="noopener" style="width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;color:#94a3b8;transition:all .2s;text-decoration:none" onmouseover="this.style.borderColor='#0ea5e9';this.style.color='#0ea5e9'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)';this.style.color='#94a3b8'"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="https://wa.me/919600244885" target="_blank" rel="noopener" style="width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;color:#94a3b8;transition:all .2s;text-decoration:none" onmouseover="this.style.borderColor='#25D366';this.style.color='#25D366'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)';this.style.color='#94a3b8'"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
        </div>
      </div>
      <div><h4 style="font-weight:700;font-size:.95rem;color:#f1f5f9;margin-bottom:16px">Services</h4><ul style="list-style:none;display:flex;flex-direction:column;gap:10px"><li><a href="#services" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">Web Development</a></li><li><a href="#services" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">Mobile App Development</a></li><li><a href="#services" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">AI Solutions</a></li><li><a href="#services" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">Data Analytics</a></li><li><a href="#services" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">UI/UX Design</a></li><li><a href="#services" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">Digital Transformation</a></li></ul></div>
      <div><h4 style="font-weight:700;font-size:.95rem;color:#f1f5f9;margin-bottom:16px">Quick Links</h4><ul style="list-style:none;display:flex;flex-direction:column;gap:10px"><li><a href="#home" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">Home</a></li><li><a href="#about" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">About Us</a></li><li><a href="#services" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">Services</a></li><li><a href="#why-us" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">Why Choose Us</a></li><li><a href="#tech-stack" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">Tech Stack</a></li><li><a href="#contact" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">Contact</a></li></ul></div>
      <div><h4 style="font-weight:700;font-size:.95rem;color:#f1f5f9;margin-bottom:16px">Contact</h4><ul style="list-style:none;display:flex;flex-direction:column;gap:12px"><li style="display:flex;align-items:flex-start;gap:10px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" style="margin-top:3px;flex-shrink:0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><a href="mailto:vmakitec@gmail.com" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s;word-break:break-all" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">vmakitec@gmail.com</a></li><li style="display:flex;align-items:center;gap:10px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" style="flex-shrink:0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+919600244885" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">+91 9600244885</a></li><li style="display:flex;align-items:center;gap:10px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" style="flex-shrink:0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+917092768612" style="font-size:.9rem;color:#64748b;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#38bdf8'" onmouseout="this.style.color='#64748b'">+91 7092768612</a></li></ul></div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,.05);padding-top:24px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px">
      <p style="font-size:.85rem;color:#475569">&copy; 2025 VMAKITEC. All rights reserved.</p>
      <p style="font-size:.85rem;color:#475569">We Make IT Easy</p>
    </div>
  </div>
</footer>
</div>

<!-- ADMIN LOGIN MODAL -->
<div id="adminLoginModal" style="position:fixed;inset:0;z-index:2000;background:rgba(0,0,0,.8);backdrop-filter:blur(10px);display:none;align-items:center;justify-content:center;padding:20px">
  <div class="glass" style="padding:36px;max-width:400px;width:100%;animation:popupIn .4s ease-out">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px"><h3 style="font-size:1.2rem;font-weight:700;color:#f1f5f9">Admin Login</h3><button onclick="hideAdminLogin()" style="background:none;border:none;color:#64748b;cursor:pointer;font-size:20px;padding:4px" onmouseover="this.style.color='#f1f5f9'" onmouseout="this.style.color='#64748b'">&times;</button></div>
    <form onsubmit="return handleAdminLogin(event)"><div style="margin-bottom:16px"><label class="form-label">Password</label><input type="password" id="adminPassword" class="form-input" placeholder="Enter admin password" required><div class="error-msg" id="adminError">Incorrect password</div></div><button type="submit" class="btn-primary" style="width:100%"><span>Login</span></button></form>
  </div>
</div>

<!-- ADMIN DASHBOARD -->
<div class="admin-container" id="adminDashboard">
  <button class="admin-mobile-toggle" onclick="toggleAdminSidebar()"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
  <aside class="admin-sidebar" id="adminSidebar">
    <div style="padding:0 24px 24px;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:8px"><div style="display:flex;align-items:center;gap:10px"><div style="width:36px;height:36px;background:linear-gradient(135deg,#0ea5e9,#6366f1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.85rem;color:#fff">V</div><div><span style="font-weight:700;font-size:1rem;color:#f1f5f9;display:block;line-height:1.2">VMAKITEC</span><span style="font-size:.75rem;color:#64748b">Admin Panel</span></div></div></div>
    <div class="admin-nav-item active" data-admin-tab="overview" onclick="switchAdminTab('overview')">&#128202; Overview</div>
    <div class="admin-nav-item" data-admin-tab="requests" onclick="switchAdminTab('requests')">&#128196; Quote Requests</div>
    <div class="admin-nav-item" data-admin-tab="popups" onclick="switchAdminTab('popups')">&#128276; Popup Manager</div>
    <div style="padding:16px 24px;margin-top:auto;border-top:1px solid rgba(255,255,255,.06);position:absolute;bottom:0;left:0;right:0"><button onclick="adminLogout()" style="display:flex;align-items:center;gap:10px;color:#ef4444;background:none;border:none;cursor:pointer;font-size:.9rem;font-family:'Inter',sans-serif">&#128682; Logout</button><button onclick="goToWebsite()" style="display:flex;align-items:center;gap:10px;color:#64748b;background:none;border:none;cursor:pointer;font-size:.85rem;font-family:'Inter',sans-serif;margin-top:10px">&#127760; View Website</button></div>
  </aside>
  <main class="admin-main">
    <div id="tab-overview" class="admin-tab"><h2 style="font-size:1.5rem;font-weight:800;color:#f1f5f9;margin-bottom:8px">Dashboard Overview</h2><p style="color:#64748b;margin-bottom:28px">Monitor your website activity and submissions.</p><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><div class="admin-card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px"><span style="font-size:.85rem;color:#64748b;font-weight:500">Quote Requests</span><span style="font-size:20px">&#128196;</span></div><p id="stat-requests" style="font-size:2rem;font-weight:800;color:#f1f5f9">0</p></div><div class="admin-card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px"><span style="font-size:.85rem;color:#64748b;font-weight:500">Active Popups</span><span style="font-size:20px">&#128276;</span></div><p id="stat-popups" style="font-size:2rem;font-weight:800;color:#f1f5f9">0</p></div><div class="admin-card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px"><span style="font-size:.85rem;color:#64748b;font-weight:500">Database Status</span><span style="font-size:20px">&#128451;</span></div><p id="stat-db" style="font-size:1.5rem;font-weight:800;color:#10b981">Connected</p></div></div></div>
    <div id="tab-requests" class="admin-tab" style="display:none"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;flex-wrap:wrap;gap:12px"><div><h2 style="font-size:1.5rem;font-weight:800;color:#f1f5f9;margin-bottom:4px">Quote Requests</h2><p style="color:#64748b;font-size:.9rem">All project requests submitted through the website.</p></div><button onclick="loadRequests()" class="btn-outline" style="padding:10px 20px;font-size:.85rem">&#128260; Refresh</button></div><div class="admin-card" style="overflow-x:auto"><table class="admin-table"><thead><tr><th>Date</th><th>Name</th><th>Email</th><th>Phone</th><th>Service</th><th>Budget</th><th>Description</th></tr></thead><tbody id="requestsBody"><tr><td colspan="7" style="text-align:center;color:#475569;padding:40px">Loading...</td></tr></tbody></table></div></div>
    <div id="tab-popups" class="admin-tab" style="display:none"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;flex-wrap:wrap;gap:12px"><div><h2 style="font-size:1.5rem;font-weight:800;color:#f1f5f9;margin-bottom:4px">Popup Manager</h2><p style="color:#64748b;font-size:.9rem">Create and manage homepage popup announcements.</p></div><button onclick="loadPopups()" class="btn-outline" style="padding:10px 20px;font-size:.85rem">&#128260; Refresh</button></div><div class="admin-card" style="margin-bottom:24px"><h3 style="font-size:1.1rem;font-weight:700;color:#f1f5f9;margin-bottom:20px">&#10133; Create New Popup</h3><form onsubmit="return handleCreatePopup(event)"><div class="grid sm:grid-cols-2 gap-4"><div><label class="form-label">Title *</label><input type="text" id="popupTitleInput" class="form-input" placeholder="Popup title" required></div><div><label class="form-label">Image (optional)</label><input type="file" id="popupImageInput" class="form-input" accept="image/*" style="padding:10px"></div><div class="sm:col-span-2"><label class="form-label">Description *</label><textarea id="popupDescInput" class="form-input" placeholder="Popup description..." required style="min-height:80px"></textarea></div><div class="sm:col-span-2"><label style="display:flex;align-items:center;gap:10px;cursor:pointer"><input type="checkbox" id="popupActiveInput" checked style="width:18px;height:18px;accent-color:#0ea5e9"><span style="font-size:.9rem;color:#cbd5e1">Enable popup immediately</span></label></div></div><button type="submit" id="createPopupBtn" class="btn-primary" style="margin-top:16px;padding:12px 28px;font-size:.9rem"><span>Create Popup</span></button></form></div><div class="admin-card" style="overflow-x:auto"><h3 style="font-size:1.05rem;font-weight:700;color:#f1f5f9;margin-bottom:16px">Existing Popups</h3><table class="admin-table"><thead><tr><th>Title</th><th>Description</th><th>Image</th><th>Status</th><th>Created</th><th>Actions</th></tr></thead><tbody id="popupsBody"><tr><td colspan="6" style="text-align:center;color:#475569;padding:40px">Loading...</td></tr></tbody></table></div></div>
  </main>
</div>

<script async src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
var loaderHidden=false;function hideLoader(){if(loaderHidden)return;loaderHidden=true;var l=document.getElementById('loader');if(l)l.classList.add('hidden')}
setTimeout(hideLoader,3000);
if(document.readyState==='complete'||document.readyState==='interactive'){setTimeout(hideLoader,600)}else{document.addEventListener('DOMContentLoaded',function(){setTimeout(hideLoader,600)})}
window.addEventListener('load',function(){setTimeout(hideLoader,400)});

var SUPABASE_URL='https://hzqzkvusxiczvkolzctm.supabase.co';
var SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cXprdnVzeGljenZrb2x6Y3RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMjAyNTcsImV4cCI6MjA5Nzc5NjI1N30.D0Y3gXMJFwkzdGkSUXDf7-0IxXYf1qteR-uYhT7sBdw';
var ADMIN_PASSWORD='vmakitec2025';
var supabase=null,isAdminLoggedIn=false;

function initSupabase(){try{if(typeof window.supabase!=='undefined'&&window.supabase.createClient){supabase=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);console.log('Supabase connected')}else{setTimeout(initSupabase,500)}}catch(e){setTimeout(initSupabase,1000)}}
setTimeout(initSupabase,300);

function showToast(m,t){t=t||'info';var to=document.getElementById('toast');to.className='toast '+t;var ic=t==='success'?'&#9989;':t==='error'?'&#10060;':'&#8505;&#65039;';to.innerHTML='<span style="font-size:18px;flex-shrink:0">'+ic+'</span><span>'+m+'</span>';setTimeout(function(){to.classList.add('show')},10);setTimeout(function(){to.classList.remove('show')},4000)}

function toggleMobileMenu(){document.getElementById('hamburger').classList.toggle('open');document.getElementById('mobileMenu').classList.toggle('show');document.body.style.overflow=document.getElementById('mobileMenu').classList.contains('show')?'hidden':''}
function closeMobileMenu(){document.getElementById('hamburger').classList.remove('open');document.getElementById('mobileMenu').classList.remove('show');document.body.style.overflow=''}
window.addEventListener('scroll',function(){document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);var s=['home','about','services','why-us','tech-stack','contact'],c='home';for(var i=0;i<s.length;i++){var el=document.getElementById(s[i]);if(el&&el.offsetTop-200<=window.scrollY)c=s[i]}var lk=document.querySelectorAll('.nav-link');for(var j=0;j<lk.length;j++)lk[j].classList.toggle('active',lk[j].getAttribute('data-section')===c)});

var cg=document.getElementById('cursorGlow');if(window.innerWidth>768){document.addEventListener('mousemove',function(e){cg.style.left=e.clientX+'px';cg.style.top=e.clientY+'px'})}else{cg.style.display='none'}

var obs=new IntersectionObserver(function(e){for(var i=0;i<e.length;i++)if(e[i].isIntersecting)e[i].target.classList.add('active')},{threshold:.1,rootMargin:'0px 0px -50px 0px'});
var re=document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale');for(var i=0;i<re.length;i++)obs.observe(re[i]);

var tc=document.querySelectorAll('.tilt-card');for(var i=0;i<tc.length;i++){(function(c){c.addEventListener('mousemove',function(e){if(window.innerWidth<768)return;var r=c.getBoundingClientRect();c.style.transform='perspective(1000px) rotateX('+((e.clientY-r.top)-r.height/2)/15+'deg) rotateY('+(r.width/2-(e.clientX-r.left))/15+'deg) translateY(-4px)'});c.addEventListener('mouseleave',function(){c.style.transform='perspective(1000px) rotateX(0) rotateY(0) translateY(0)'})})(tc[i])}

(function(){var c=document.getElementById('particles');if(!c)return;for(var i=0;i<20;i++){var p=document.createElement('div');p.className='particle';p.style.left=Math.random()*100+'%';p.style.animationDuration=(8+Math.random()*12)+'s';p.style.animationDelay=Math.random()*10+'s';var s=(1+Math.random()*3)+'px';p.style.width=s;p.style.height=s;p.style.opacity=String(.2+Math.random()*.4);c.appendChild(p)}})();

function validateForm(f){var v=true,ins=f.querySelectorAll('[required]');for(var i=0;i<ins.length;i++){var inp=ins[i],err=inp.parentElement.querySelector('.error-msg');inp.classList.remove('error');if(err)err.classList.remove('show');if(!inp.value.trim()){inp.classList.add('error');if(err)err.classList.add('show');v=false}if(inp.type==='email'&&inp.value.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value.trim())){inp.classList.add('error');if(err)err.classList.add('show');v=false}}return v}
function handleSubmit(e){e.preventDefault();var f=e.target;if(!validateForm(f))return false;var b=document.getElementById('submitBtn'),t=document.getElementById('submitText');b.disabled=true;t.textContent='Submitting...';var d={name:f.name.value.trim(),email:f.email.value.trim(),phone:f.phone.value.trim(),service:f.service.value,budget:f.budget.value.trim()||'Not specified',description:f.description.value.trim()};if(supabase){supabase.from('quote_requests').insert([d]).then(function(r){if(r.error)throw r.error;showToast('Your request has been submitted successfully! We will contact you soon.','success');f.reset()}).catch(function(err){console.error(err);showToast('Something went wrong. Please try again or contact us directly.','error')}).finally(function(){b.disabled=false;t.textContent='Submit Request'})}else{showToast('Database not connected yet. Please try again in a moment.','error');b.disabled=false;t.textContent='Submit Request'}return false}
var fi=document.querySelectorAll('.form-input');for(var i=0;i<fi.length;i++){(function(inp){inp.addEventListener('input',function(){inp.classList.remove('error');var err=inp.parentElement.querySelector('.error-msg');if(err)err.classList.remove('show')})})(fi[i])}

function loadAndShowPopup(){if(!supabase||sessionStorage.getItem('popup_dismissed'))return;supabase.from('popup_messages').select('*').eq('is_active',true).order('created_at',{ascending:false}).limit(1).then(function(r){if(r.error||!r.data||!r.data.length)return;var p=r.data[0],img=document.getElementById('popupImage');if(p.image_url){img.src=p.image_url;img.style.display='block'}else{img.style.display='none'}document.getElementById('popupTitle').textContent=p.title;document.getElementById('popupDesc').textContent=p.description;document.getElementById('popupOverlay').classList.add('show')}).catch(function(){})}
function closePopup(){document.getElementById('popupOverlay').classList.remove('show');sessionStorage.setItem('popup_dismissed','true')}
document.getElementById('popupOverlay').addEventListener('click',function(e){if(e.target===e.currentTarget)closePopup()});

function showAdminLogin(){document.getElementById('adminLoginModal').style.display='flex';document.getElementById('adminPassword').focus();document.getElementById('adminError').classList.remove('show')}
function hideAdminLogin(){document.getElementById('adminLoginModal').style.display='none';document.getElementById('adminPassword').value=''}
function handleAdminLogin(e){e.preventDefault();if(document.getElementById('adminPassword').value===ADMIN_PASSWORD){isAdminLoggedIn=true;hideAdminLogin();showAdminDashboard();showToast('Welcome to the admin panel','success')}else{document.getElementById('adminError').classList.add('show')}return false}
function showAdminDashboard(){document.getElementById('mainSite').style.display='none';document.getElementById('adminDashboard').classList.add('show');document.body.style.overflow='auto';window.scrollTo(0,0);loadAdminData()}
function goToWebsite(){document.getElementById('adminDashboard').classList.remove('show');document.getElementById('mainSite').style.display='block';window.scrollTo(0,0)}
function adminLogout(){isAdminLoggedIn=false;goToWebsite();showToast('Logged out successfully','info')}
function toggleAdminSidebar(){document.getElementById('adminSidebar').classList.toggle('open')}
function switchAdminTab(tab){var tabs=document.querySelectorAll('.admin-tab');for(var i=0;i<tabs.length;i++)tabs[i].style.display='none';var navs=document.querySelectorAll('.admin-nav-item');for(var i=0;i<navs.length;i++)navs[i].classList.remove('active');document.getElementById('tab-'+tab).style.display='block';document.querySelector('[data-admin-tab="'+tab+'"]').classList.add('active');document.getElementById('adminSidebar').classList.remove('open');if(tab==='requests')loadRequests();if(tab==='popups')loadPopups();if(tab==='overview')loadAdminData()}
function loadAdminData(){if(!supabase){document.getElementById('stat-db').textContent='Not Connected';document.getElementById('stat-db').style.color='#f59e0b';return}supabase.from('quote_requests').select('*',{count:'exact',head:true}).then(function(r){document.getElementById('stat-requests').textContent=r.count||0}).catch(function(){});supabase.from('popup_messages').select('*',{count:'exact',head:true}).eq('is_active',true).then(function(r){document.getElementById('stat-popups').textContent=r.count||0}).catch(function(){});document.getElementById('stat-db').textContent='Connected';document.getElementById('stat-db').style.color='#10b981'}
function loadRequests(){var tb=document.getElementById('requestsBody');if(!supabase){tb.innerHTML='<tr><td colspan="7" style="text-align:center;color:#f59e0b;padding:40px">Database not connected.</td></tr>';return}tb.innerHTML='<tr><td colspan="7" style="text-align:center;color:#64748b;padding:40px">Loading...</td></tr>';supabase.from('quote_requests').select('*').order('created_at',{ascending:false}).then(function(r){if(r.error){tb.innerHTML='<tr><td colspan="7" style="text-align:center;color:#ef4444;padding:40px">Error: '+esc(r.error.message)+'</td></tr>';return}if(!r.data||!r.data.length){tb.innerHTML='<tr><td colspan="7" style="text-align:center;color:#64748b;padding:40px">No requests yet.</td></tr>';return}var h='';for(var i=0;i<r.data.length;i++){var d=r.data[i];h+='<tr><td style="white-space:nowrap;font-size:.85rem;color:#94a3b8">'+new Date(d.created_at).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})+'</td><td style="font-weight:500;color:#e2e8f0">'+esc(d.name)+'</td><td style="font-size:.85rem"><a href="mailto:'+esc(d.email)+'" style="color:#38bdf8;text-decoration:none">'+esc(d.email)+'</a></td><td style="font-size:.85rem;color:#94a3b8">'+esc(d.phone)+'</td><td><span style="padding:4px 10px;background:rgba(14,165,233,.1);border:1px solid rgba(14,165,233,.2);border-radius:6px;font-size:.8rem;color:#38bdf8;white-space:nowrap">'+esc(d.service)+'</span></td><td style="font-size:.85rem;color:#94a3b8">'+esc(d.budget||'N/A')+'</td><td style="font-size:.85rem;color:#94a3b8;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="'+esc(d.description)+'">'+esc(d.description)+'</td></tr>'}tb.innerHTML=h}).catch(function(){tb.innerHTML='<tr><td colspan="7" style="text-align:center;color:#ef4444;padding:40px">Error loading</td></tr>'})}
function loadPopups(){var tb=document.getElementById('popupsBody');if(!supabase){tb.innerHTML='<tr><td colspan="6" style="text-align:center;color:#f59e0b;padding:40px">Database not connected.</td></tr>';return}tb.innerHTML='<tr><td colspan="6" style="text-align:center;color:#64748b;padding:40px">Loading...</td></tr>';supabase.from('popup_messages').select('*').order('created_at',{ascending:false}).then(function(r){if(r.error){tb.innerHTML='<tr><td colspan="6" style="text-align:center;color:#ef4444;padding:40px">Error: '+esc(r.error.message)+'</td></tr>';return}if(!r.data||!r.data.length){tb.innerHTML='<tr><td colspan="6" style="text-align:center;color:#64748b;padding:40px">No popups yet.</td></tr>';return}var h='';for(var i=0;i<r.data.length;i++){var p=r.data[i];h+='<tr><td style="font-weight:500;color:#e2e8f0">'+esc(p.title)+'</td><td style="font-size:.85rem;color:#94a3b8;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(p.description)+'</td><td>'+(p.image_url?'<img src="'+esc(p.image_url)+'" style="width:50px;height:50px;object-fit:cover;border-radius:8px;border:1px solid rgba(255,255,255,.1)">':'<span style="color:#475569;font-size:.85rem">No image</span>')+'</td><td><div class="admin-toggle '+(p.is_active?'on':'')+'" onclick="togglePopupStatus('+p.id+','+!p.is_active+')" style="cursor:pointer"></div></td><td style="font-size:.85rem;color:#94a3b8;white-space:nowrap">'+new Date(p.created_at).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})+'</td><td><button onclick="deletePopup('+p.id+')" style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);color:#f87171;padding:6px 12px;border-radius:8px;cursor:pointer;font-size:.8rem;font-family:Inter,sans-serif">&#128465; Delete</button></td></tr>'}tb.innerHTML=h}).catch(function(){tb.innerHTML='<tr><td colspan="6" style="text-align:center;color:#ef4444;padding:40px">Error loading</td></tr>'})}

// FIXED: handleCreatePopup with better error handling and storage bucket check
function handleCreatePopup(e){e.preventDefault();if(!supabase){showToast('Database not connected','error');return false}var btn=document.getElementById('createPopupBtn');btn.disabled=true;btn.querySelector('span').textContent='Creating...';var title=document.getElementById('popupTitleInput').value.trim(),desc=document.getElementById('popupDescInput').value.trim(),active=document.getElementById('popupActiveInput').checked,file=document.getElementById('popupImageInput').files[0];function doInsert(u){supabase.from('popup_messages').insert([{title:title,description:desc,image_url:u,is_active:active}]).then(function(r){if(r.error)throw r.error;showToast('Popup created successfully!','success');document.getElementById('popupTitleInput').value='';document.getElementById('popupDescInput').value='';document.getElementById('popupImageInput').value='';document.getElementById('popupActiveInput').checked=true;loadPopups();loadAdminData()}).catch(function(err){console.error('Insert error:',err);showToast('Error: '+err.message,'error')}).finally(function(){btn.disabled=false;btn.querySelector('span').textContent='Create Popup'})}if(file){// Try to upload with better error handling
var fn='popup_'+Date.now()+'_'+file.name;supabase.storage.from('popups').upload(fn,file).then(function(ur){if(ur.error){console.error('Upload error:',ur.error);showToast('Upload error: '+ur.error.message+'. Creating popup without image.','error');doInsert(null);return}var pu=supabase.storage.from('popups').getPublicUrl(fn);doInsert(pu.publicUrl)}).catch(function(err){console.error('Upload catch:',err);showToast('Upload failed: '+err.message+'. Creating popup without image.','error');doInsert(null)})}else{doInsert(null)}return false}

function togglePopupStatus(id,st){if(!supabase)return;supabase.from('popup_messages').update({is_active:st}).eq('id',id).then(function(r){if(r.error){showToast('Error: '+r.error.message,'error');return}showToast('Popup '+(st?'enabled':'disabled'),'success');loadPopups();loadAdminData()})}
function deletePopup(id){if(!supabase||!confirm('Delete this popup?'))return;supabase.from('popup_messages').delete().eq('id',id).then(function(r){if(r.error){showToast('Error: '+r.error.message,'error');return}showToast('Popup deleted','success');loadPopups();loadAdminData()})}
function esc(s){if(!s)return '';var d=document.createElement('div');d.textContent=s;return d.innerHTML}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){hideAdminLogin();closePopup()}});
setTimeout(function(){loadAndShowPopup()},2500);
</script>
</body>
</html>