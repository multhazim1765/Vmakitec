import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { teamData } from './TeamData';

export default function About() {
    const [selectedMember, setSelectedMember] = useState(null);

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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            <h4 style={{fontWeight: "700", fontSize: "1.05rem", color: "#f1f5f9"}}>Our Mission</h4>
          </div>
          <p style={{fontSize: ".95rem", color: "#94a3b8", lineHeight: "1.7"}}>Deliver reliable, innovative, and affordable technology solutions that help businesses grow.</p>
        </div>
      </div>
      <div className="reveal-right">
        <h4 style={{fontWeight: "700", fontSize: "1.1rem", color: "#f1f5f9", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px"}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          Our Values
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="glass" style={{padding: "16px", display: "flex", alignItems: "center", gap: "12px"}}>
            <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "rgba(14,165,233,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></div>
            <span style={{fontWeight: "600", fontSize: ".95rem", color: "#e2e8f0"}}>Innovation</span>
          </div>
          <div className="glass" style={{padding: "16px", display: "flex", alignItems: "center", gap: "12px"}}>
            <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "rgba(16,185,129,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg></div>
            <span style={{fontWeight: "600", fontSize: ".95rem", color: "#e2e8f0"}}>Quality</span>
          </div>
          <div className="glass" style={{padding: "16px", display: "flex", alignItems: "center", gap: "12px"}}>
            <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "rgba(99,102,241,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></div>
            <span style={{fontWeight: "600", fontSize: ".95rem", color: "#e2e8f0"}}>Transparency</span>
          </div>
          <div className="glass" style={{padding: "16px", display: "flex", alignItems: "center", gap: "12px"}}>
            <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "rgba(245,158,11,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
            <span style={{fontWeight: "600", fontSize: ".95rem", color: "#e2e8f0"}}>Continuous Learning</span>
          </div>
          <div className="glass" style={{padding: "16px", display: "flex", alignItems: "center", gap: "12px"}}>
            <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "rgba(236,72,153,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <span style={{fontWeight: "600", fontSize: ".95rem", color: "#e2e8f0"}}>Customer Focus</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

                {/*  ===== LEADERSHIP TEAM =====  */}
                <section id="team" className="py-24 relative" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                      <p className="reveal" style={{fontSize: ".8rem", fontWeight: "600", color: "#0ea5e9", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "12px"}}>Leadership</p>
                      <h2 className="reveal" style={{fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: "800", letterSpacing: "-.02em", marginBottom: "16px"}}>Meet Our <span className="gradient-text">Core Team</span></h2>
                      <div className="section-divider reveal" style={{margin: "0 auto", marginBottom: "24px"}}></div>
                      <p className="reveal text-slate-400 max-w-2xl mx-auto">
                        We are a group of passionate technologists, developers, and strategists working together to build impactful digital solutions.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 reveal stagger-children">
                      {teamData.map((member) => (
                        <div 
                          key={member.id} 
                          onClick={() => setSelectedMember(member)}
                          className="glass p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center md:items-start transition-all hover:border-blue-500/50 hover:bg-white/5 cursor-pointer group"
                        >
                          <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-blue-500/50 transition-colors">
                              <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="text-center md:text-left">
                              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{member.name}</h3>
                              <p className="text-blue-400 font-semibold mb-1">{member.role}</p>
                              <p className="text-slate-400 text-sm mb-4">{member.title}</p>
                              <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
                                  {member.summary}
                              </p>
                              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300">
                                View Full Profile <span>&rarr;</span>
                              </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Team Member Modal */}
                {selectedMember && (
                  <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedMember(null)}>
                    <div 
                      className="bg-[#050510] border border-white/10 rounded-2xl w-full max-w-[95vw] lg:max-w-7xl h-[95vh] lg:h-[85vh] shadow-[0_0_50px_rgba(0,0,0,0.8)] relative flex flex-col"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button 
                        onClick={() => setSelectedMember(null)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors z-50 shadow-lg"
                      >
                        ✕
                      </button>
                      {/* DESKTOP VIEW (Original Side-by-Side Layout) */}
                      <div className="hidden lg:flex p-8 flex-row gap-8 relative overflow-hidden h-full custom-scrollbar w-full">
                        {/* Background subtle glow */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-2xl lg:blur-3xl pointer-events-none"></div>
                        
                        {/* LEFT COLUMN: Profile Badge */}
                        <div className="w-[40%] lg:w-[30%] flex flex-col gap-2 lg:gap-4 relative z-10 h-full shrink-0">
                          
                          {/* Photo ID Badge Style - Scrapbook Theme (Dark) */}
                          <div className="glass p-1 lg:p-1.5 rounded-xl lg:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] relative group bg-gradient-to-b from-slate-800 to-[#0a0a1a] border border-slate-700 w-full mx-auto flex-1 flex flex-col mt-1 lg:mt-2">
                             
                             {/* Lanyard Clip */}
                             <div className="absolute -top-3 lg:-top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                               <div className="w-5 h-4 lg:w-8 lg:h-6 rounded-full border-[2px] lg:border-[3px] border-slate-400 bg-[#050510] shadow-md z-10"></div>
                               <div className="w-1.5 h-3 lg:w-3 lg:h-5 bg-gradient-to-b from-slate-300 to-slate-500 rounded-sm shadow-md -mt-0.5 lg:-mt-1 z-20 border border-slate-600"></div>
                             </div>

                             <div className="bg-[#0a0a1a]/90 rounded-lg lg:rounded-xl p-2 lg:p-5 pt-4 lg:pt-8 h-full border border-white/5 flex flex-col mt-0.5 lg:mt-1 relative overflow-hidden">
                               
                               {/* Role Header */}
                               <div className="mb-2 lg:mb-5 text-left relative z-10">
                                 <p className="text-[0.4rem] lg:text-[0.55rem] text-slate-400 font-mono tracking-[0.1em] lg:tracking-[0.2em] uppercase mb-0.5 lg:mb-1">Vmakitec Team</p>
                                 <h3 className="text-xs lg:text-2xl font-black text-white leading-[1.1] lowercase tracking-tighter pr-1 lg:pr-4">
                                   {selectedMember.role.split(' & ').map((word, i, arr) => (
                                     <span key={i}>
                                       {word}
                                       {i < arr.length - 1 && <br/>}
                                     </span>
                                   ))}
                                   <span className="text-blue-500">.</span>
                                 </h3>
                               </div>

                               {/* Middle Section: Interactive Contact Icons (Left) + Full Photo (Right) */}
                               <div className="flex gap-1.5 lg:gap-4 mb-2 lg:mb-5 flex-1 min-h-[100px] lg:min-h-0">
                                 {/* Left Icons (Functional Contacts) */}
                                 <div className="w-5 lg:w-10 flex flex-col items-center justify-center gap-1.5 lg:gap-3 border-r border-white/10 pr-1 lg:pr-3">
                                    {selectedMember.email && (
                                      <a href={`mailto:${selectedMember.email}`} title="Email" className="w-4 h-4 lg:w-8 lg:h-8 rounded lg:rounded-lg bg-slate-800/80 hover:bg-blue-500/20 text-white hover:text-blue-400 flex items-center justify-center border border-slate-700 hover:border-blue-500/50 shadow-sm transition-all">
                                        <svg className="w-2.5 h-2.5 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                      </a>
                                    )}
                                    {selectedMember.phone && (
                                      <a href={`tel:${selectedMember.phone}`} title="Phone" className="w-4 h-4 lg:w-8 lg:h-8 rounded lg:rounded-lg bg-slate-800/80 hover:bg-emerald-500/20 text-white hover:text-emerald-400 flex items-center justify-center border border-slate-700 hover:border-emerald-500/50 shadow-sm transition-all">
                                        <svg className="w-2.5 h-2.5 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                      </a>
                                    )}
                                    {selectedMember.linkedin && (
                                      <a href={selectedMember.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="w-4 h-4 lg:w-8 lg:h-8 rounded lg:rounded-lg bg-slate-800/80 hover:bg-blue-600/20 text-white hover:text-blue-500 flex items-center justify-center border border-slate-700 hover:border-blue-600/50 shadow-sm transition-all">
                                        <svg className="w-2.5 h-2.5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                      </a>
                                    )}
                                 </div>
                                 
                                 {/* Right Photo */}
                                 <div className="flex-1 relative h-full lg:min-h-[220px]">
                                   <div className="w-full h-full rounded-lg lg:rounded-xl overflow-hidden border lg:border-2 border-slate-800 shadow-xl lg:shadow-2xl relative bg-slate-900">
                                     <img src={selectedMember.photo} alt={selectedMember.name} className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 via-transparent to-transparent pointer-events-none"></div>
                                   </div>
                                 </div>
                               </div>

                               {/* Name and Title */}
                               <div className="text-left mt-auto pb-1 lg:pb-3 relative z-10">
                                 <h4 className="text-[0.65rem] lg:text-lg font-black text-white tracking-wide">{selectedMember.name}</h4>
                                 <div className="h-0.5 w-full bg-blue-500 my-0.5 lg:my-1 shadow-[0_0_8px_rgba(59,130,246,0.8)] rounded-full"></div>
                                 <p className="text-[0.4rem] lg:text-[0.65rem] text-slate-400 uppercase tracking-widest">{selectedMember.title || 'Director'}</p>
                               </div>

                               {/* Bottom Bar: Barcode and Quote */}
                               <div className="w-full flex items-center justify-between pt-1 lg:pt-3 border-t border-white/10 mt-0.5 lg:mt-1 relative z-10">
                                 {/* Fake Barcode */}
                                 <div className="flex gap-[1px] lg:gap-[2px] h-2 lg:h-5 opacity-60">
                                   <div className="w-[0.5px] lg:w-0.5 bg-white h-full"></div>
                                   <div className="w-[1px] lg:w-1 bg-white h-full"></div>
                                   <div className="w-[0.5px] lg:w-0.5 bg-white h-full"></div>
                                   <div className="w-[1px] lg:w-[1.5px] bg-white h-full"></div>
                                   <div className="w-[0.5px] lg:w-0.5 bg-white h-full"></div>
                                   <div className="w-[1px] lg:w-1 bg-white h-full"></div>
                                   <div className="w-[1.5px] lg:w-[3px] bg-white h-full"></div>
                                   <div className="w-[0.5px] lg:w-0.5 bg-white h-full"></div>
                                   <div className="w-[1px] lg:w-1 bg-white h-full"></div>
                                   <div className="w-[0.5px] lg:w-0.5 bg-white h-full"></div>
                                   <div className="w-[1px] lg:w-[2px] bg-white h-full"></div>
                                 </div>
                                 <div className="text-right border-l border-white/20 pl-1 lg:pl-2">
                                   <p className="text-[0.25rem] lg:text-[0.4rem] text-slate-500 uppercase tracking-widest leading-[1.2]">Design is<br/>intelligence<br/>made visible.</p>
                                 </div>
                               </div>
                               
                             </div>
                          </div>
                        </div>

                        {/* RIGHT COLUMN: Details */}
                        <div className="w-[60%] lg:w-[70%] flex flex-col gap-3 lg:gap-6 relative z-10 h-full overflow-y-auto lg:overflow-hidden pr-1 lg:pr-2">
                          
                          {/* Summary */}
                          <div className="text-slate-300 text-[0.45rem] lg:text-[0.95rem] leading-tight lg:leading-relaxed bg-white/5 p-2 lg:p-5 rounded-lg lg:rounded-xl border border-white/10 shadow-lg relative shrink-0">
                            <span className="absolute -top-2 lg:-top-4 -left-1 text-2xl lg:text-4xl text-white/10 font-serif">"</span>
                            {selectedMember.summary}
                          </div>

                          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 lg:gap-8 flex-1 min-h-0">
                            {/* Experiences */}
                            {selectedMember.experience && (
                              <div className="flex-1 overflow-y-auto pr-1 lg:pr-2 custom-scrollbar">
                                <h4 className="text-[0.6rem] lg:text-xl font-bold text-white mb-2 lg:mb-4 pb-1 lg:pb-2 border-b border-white/10 relative sticky top-0 bg-[#050510] z-20">
                                  Experience
                                  <span className="absolute bottom-0 left-0 w-4 lg:w-8 h-0.5 bg-blue-500 rounded-t-md"></span>
                                </h4>
                                <div className="space-y-3 lg:space-y-6 relative before:content-[''] before:absolute before:left-[5px] lg:before:left-[9px] before:top-1 lg:before:top-2 before:bottom-1 lg:before:bottom-2 before:w-[0.5px] lg:before:w-px before:bg-white/10">
                                  {selectedMember.experience.map((exp, idx) => (
                                    <div key={idx} className="relative pl-3 lg:pl-6">
                                      <div className="absolute left-0 top-1 lg:top-1.5 w-2.5 h-2.5 lg:w-5 lg:h-5 rounded-full bg-[#0a0a1a] border-[1px] lg:border-2 border-blue-500 flex items-center justify-center z-10 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                                      <div className="mb-1 lg:mb-1.5">
                                        <h5 className="text-[0.55rem] lg:text-[0.95rem] font-bold text-white leading-tight">{exp.company}</h5>
                                        <div className="flex flex-wrap items-center gap-1 lg:gap-1.5 text-[0.45rem] lg:text-[0.8rem] mt-0.5">
                                          <span className="text-blue-400 font-semibold">{exp.role}</span>
                                          <span className="text-slate-600">|</span>
                                          <span className="text-slate-400 bg-white/5 px-1 lg:px-1.5 py-0.5 rounded text-[0.4rem] lg:text-[0.7rem]">{exp.duration}</span>
                                        </div>
                                      </div>
                                      <ul className="text-slate-300 text-[0.45rem] lg:text-[0.85rem] space-y-0.5 lg:space-y-1.5 list-none mt-1 lg:mt-2">
                                        {exp.points.map((point, pIdx) => (
                                          <li key={pIdx} className="flex gap-1 lg:gap-2">
                                            <svg className="w-2 h-2 lg:w-3.5 lg:h-3.5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                            <span className="leading-snug">{point}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Skills */}
                            {selectedMember.skills && (
                              <div className="flex-1 overflow-y-auto pr-1 lg:pr-2 custom-scrollbar mt-3 lg:mt-0">
                                <h4 className="text-[0.6rem] lg:text-xl font-bold text-white mb-2 lg:mb-4 pb-1 lg:pb-2 border-b border-white/10 relative sticky top-0 bg-[#050510] z-20">
                                  Expertise
                                  <span className="absolute bottom-0 left-0 w-4 lg:w-8 h-0.5 bg-pink-500 rounded-t-md"></span>
                                </h4>
                                <div className="flex flex-col gap-2 lg:gap-4">
                                  {Object.entries(selectedMember.skills).map(([category, skillsList]) => (
                                    <div key={category} className="glass p-1.5 lg:p-3.5 rounded-lg border border-white/5">
                                      <h5 className="text-white font-bold mb-1 lg:mb-2.5 flex items-center gap-1 lg:gap-2 text-[0.45rem] lg:text-[0.85rem]">
                                        <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-pink-500"></div>
                                        {category}
                                      </h5>
                                      <div className="flex flex-wrap gap-1 lg:gap-1.5">
                                        {skillsList.map(skill => (
                                          <span key={skill} className="px-1 py-0.5 lg:px-2 lg:py-1 bg-white/5 border border-white/10 rounded lg:rounded-md text-[0.4rem] lg:text-[0.75rem] text-slate-300 shadow-sm">
                                            {skill}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* MOBILE VIEW (Resume Style Layout) */}
                      <div className="flex lg:hidden flex-col gap-4 w-full h-full overflow-y-auto custom-scrollbar p-4 bg-[#050510] relative rounded-2xl">
                        
                        {/* 1. Profile Card */}
                        <div className="bg-[#0a0a1a] border border-white/5 rounded-2xl p-5 relative overflow-hidden flex flex-col gap-4 shadow-lg shrink-0">
                          {/* Background Glow */}
                          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

                          {/* Top Labels */}
                          <div className="relative z-10">
                            <p className="text-[0.55rem] text-slate-400 font-mono tracking-widest uppercase mb-1">VMAKITEC TEAM</p>
                            <h3 className="text-2xl font-black text-white leading-tight lowercase tracking-tighter">
                              {selectedMember.role.split(' & ').map((word, i, arr) => (
                                <span key={i}>
                                  {word}
                                  {i < arr.length - 1 && <br/>}
                                </span>
                              ))}
                              <span className="text-blue-500">.</span>
                            </h3>
                          </div>

                          {/* Photo and Icons Row */}
                          <div className="flex items-center gap-4 relative z-10">
                            {/* Icons (Left) */}
                            <div className="flex flex-col gap-3">
                              {selectedMember.email && (
                                <a href={`mailto:${selectedMember.email}`} title="Email" className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-blue-500/20 text-slate-300 hover:text-blue-400 flex items-center justify-center border border-slate-700 hover:border-blue-500/50 shadow-sm transition-all active:scale-95">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </a>
                              )}
                              {selectedMember.phone && (
                                <a href={`tel:${selectedMember.phone}`} title="Phone" className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 flex items-center justify-center border border-slate-700 hover:border-emerald-500/50 shadow-sm transition-all active:scale-95">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                </a>
                              )}
                              {selectedMember.linkedin && (
                                <a href={selectedMember.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-blue-600/20 text-slate-300 hover:text-blue-500 flex items-center justify-center border border-slate-700 hover:border-blue-600/50 shadow-sm transition-all active:scale-95">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                              )}
                            </div>
                            
                            {/* Photo */}
                            <div className="flex-1 rounded-xl overflow-hidden border border-slate-800 shadow-md relative bg-[#0a0a1a] aspect-square">
                              <img src={selectedMember.photo} alt={selectedMember.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                          </div>

                          {/* Name & Title */}
                          <div className="text-center mt-2 relative z-10">
                            <h2 className="text-[1.1rem] font-black text-white tracking-wide">{selectedMember.name}</h2>
                            <div className="h-0.5 w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent my-1 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                            <p className="text-[0.55rem] text-slate-400 font-mono uppercase tracking-widest">{selectedMember.title || 'Director'}</p>
                          </div>

                          {/* Barcode & Quote */}
                          <div className="flex justify-between items-end border-t border-white/5 pt-3 mt-1 relative z-10">
                             <div className="flex gap-[2px] h-5 opacity-50">
                               <div className="w-[1px] bg-white h-full"></div>
                               <div className="w-[2px] bg-white h-full"></div>
                               <div className="w-[1px] bg-white h-full"></div>
                               <div className="w-[3px] bg-white h-full"></div>
                               <div className="w-[1px] bg-white h-full"></div>
                               <div className="w-[2px] bg-white h-full"></div>
                               <div className="w-[3px] bg-white h-full"></div>
                               <div className="w-[1px] bg-white h-full"></div>
                               <div className="w-[2px] bg-white h-full"></div>
                               <div className="w-[1px] bg-white h-full"></div>
                               <div className="w-[2px] bg-white h-full"></div>
                             </div>
                             <div className="text-right border-l border-white/10 pl-2">
                               <p className="text-[0.35rem] text-slate-500 uppercase tracking-widest leading-[1.2]">Design is<br/>intelligence<br/>made visible.</p>
                             </div>
                          </div>
                        </div>

                        {/* 2. About Card */}
                        {selectedMember.summary && (
                          <div className="bg-[#0a0a1a] border border-white/5 rounded-2xl p-5 shadow-lg flex gap-4 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                            </div>
                            <p className="text-[0.7rem] leading-relaxed text-slate-300">
                              {selectedMember.summary}
                            </p>
                          </div>
                        )}

                        {/* 3. Experience Card */}
                        {selectedMember.experience && (
                          <div className="bg-[#0a0a1a] border border-white/5 rounded-2xl p-5 shadow-lg shrink-0">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6">
                              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                                 <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                              </div>
                              <h3 className="text-[0.95rem] font-bold text-white tracking-wide border-b border-blue-500/50 pb-1">Experience</h3>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-6 relative before:content-[''] before:absolute before:left-[4px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                              {selectedMember.experience.map((exp, idx) => (
                                <div key={idx} className="relative pl-6">
                                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#0a0a1a] border-[1.5px] border-blue-500 z-10 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                                  <div className="mb-2">
                                    <h5 className="text-[0.8rem] font-bold text-white leading-tight uppercase">{exp.company}</h5>
                                    <div className="flex flex-wrap items-center gap-2 mt-1">
                                      <span className="text-blue-400 font-semibold text-[0.6rem] uppercase">{exp.role}</span>
                                      <span className="text-slate-600 text-[0.5rem]">|</span>
                                      <span className="bg-white/5 px-1.5 py-0.5 rounded text-[0.5rem] text-slate-400 border border-white/5">{exp.duration}</span>
                                    </div>
                                  </div>
                                  <ul className="space-y-1.5">
                                    {exp.points && exp.points.map((point, pIdx) => (
                                       <li key={pIdx} className="flex gap-2 text-[0.65rem] text-slate-300">
                                          <svg className="w-2.5 h-2.5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                          <span className="leading-relaxed">{point}</span>
                                       </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 4. Expertise Card */}
                        {selectedMember.skills && (
                          <div className="bg-[#0a0a1a] border border-white/5 rounded-2xl p-5 shadow-lg shrink-0">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6">
                              <div className="w-10 h-10 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center shrink-0">
                                 <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                              </div>
                              <h3 className="text-[0.95rem] font-bold text-white tracking-wide border-b border-pink-500/50 pb-1">Expertise</h3>
                            </div>
                            
                            {/* Skills List */}
                            <div className="flex flex-col gap-5">
                               {Object.entries(selectedMember.skills).map(([category, skillsList]) => (
                                  <div key={category}>
                                    <h5 className="text-white font-bold mb-2 flex items-center gap-2 text-[0.65rem] tracking-wide">
                                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                                      {category}
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                       {skillsList.map(skill => (
                                          <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[0.6rem] text-slate-300">
                                            {skill}
                                          </span>
                                       ))}
                                    </div>
                                  </div>
                               ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

            </div>
        </MainLayout>
    );
}

