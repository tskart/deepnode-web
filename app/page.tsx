'use client';
import React from 'react';

export default function DeepNodeManifesto() {
  return (
    <main className="min-h-screen bg-[#030303] text-gray-300 font-mono overflow-x-hidden selection:bg-cyan-900 selection:text-cyan-100 relative">
      
      {/* ANIMASYONLAR (KAYAR BANT İÇİN) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: 200%;
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* 4 KÖŞE: HAREKETLİ VIP ZEKA GÖSTERGELERİ (Senin Orijinal Tasarımın) */}
      <div className="hidden md:block fixed top-24 left-6 z-0 opacity-40 hover:opacity-100 transition-opacity">
        <img src="/2.jpeg" alt="Vision Core" className="w-32 h-20 object-cover border border-cyan-900/30" />
        <div className="text-[9px] text-cyan-500 mt-1">[ SYS.01 ] VISION_CORE_3.6</div>
      </div>
      
      <div className="hidden md:block fixed top-24 right-6 z-0 opacity-40 hover:opacity-100 transition-opacity text-right">
        <img src="/6.jpeg" alt="Security Shield" className="w-32 h-20 object-cover border border-cyan-900/30 ml-auto" />
        <div className="text-[9px] text-cyan-500 mt-1">[ SYS.02 ] SECURITY_SHIELD</div>
      </div>
      
      <div className="hidden md:block fixed bottom-8 left-6 z-0 opacity-40 hover:opacity-100 transition-opacity">
        <img src="/4.jpeg" alt="Process Destroy" className="w-32 h-20 object-cover border border-cyan-900/30" />
        <div className="text-[9px] text-cyan-500 mt-1">[ SYS.03 ] PROCESS_&_DESTROY</div>
      </div>
      
      <div className="hidden md:block fixed bottom-8 right-6 z-0 opacity-40 hover:opacity-100 transition-opacity text-right">
        <img src="/5.jpeg" alt="SAP Integration" className="w-32 h-20 object-cover border border-cyan-900/30 ml-auto" />
        <div className="text-[9px] text-cyan-500 mt-1">[ SYS.04 ] SAP_AUTONOMY_LINK</div>
      </div>

      {/* ÜST MENÜ VE DROPDOWN (YENİ EKLENTİ) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs tracking-[0.1em]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-cyan-600 flex items-center justify-center text-white font-bold text-[10px]">DN</div>
            <span className="text-white font-bold tracking-widest">DEEPNODE.AI</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center text-gray-500 uppercase">
            <a href="#" className="hover:text-cyan-400 transition-colors">HOME</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">ENTERPRISE API</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">LLM ORCHESTRATION</a>
            
            {/* DAHA FAZLASI - DROPDOWN BÖLÜMÜ */}
            <div className="relative group py-6">
              <button className="flex items-center gap-1 hover:text-cyan-400 text-white font-bold transition-colors">
                DAHA FAZLASI
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              <div className="absolute top-16 left-0 w-56 bg-[#0a0a0a] border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col shadow-2xl shadow-cyan-900/20 z-50">
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-cyan-400 border-b border-white/5 transition-colors">APPLIED ARCHITECTURE</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-cyan-400 border-b border-white/5 transition-colors">SYNERGY HUB</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-cyan-400 border-b border-white/5 transition-colors">ARCHITECTURE INSIGHTS</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-cyan-400 transition-colors">CONTRACT RESEARCH</a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[10px]">
            <span className="text-cyan-500 border border-cyan-900/50 px-2 py-1 bg-cyan-900/10 hidden sm:block">SYS.0.3.19</span>
            <span className="text-green-500 flex items-center gap-2 border border-green-900/50 px-2 py-1 bg-green-900/10">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> CORE: ONLINE
            </span>
          </div>
        </div>
      </nav>

      {/* ANA İÇERİK */}
      <div className="relative z-10 pt-32 pb-20 px-6 max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* HERO METNİ */}
        <div className="border border-cyan-900/30 text-cyan-500 text-[10px] px-3 py-1 mb-8 tracking-widest bg-cyan-900/10 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          [ PROPRIETARY NEURAL ENGINE ]
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Zero Hallucination. <br/>
          <span className="text-blue-500">Absolute Autonomy.</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base max-w-2xl border border-white/5 p-6 bg-white/[0.02] mb-12">
          We architect GDPR-compliant 'Process & Purge' AI data pipelines. <br/>
          Your corporate intelligence is processed ephemerally with zero data retention.
        </p>

        {/* COMMAND CENTER (Sürükle-Bırak ve Karantina) */}
        <div className="w-full border border-white/10 bg-[#050505] p-6 mb-12 text-left relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>
          
          <div className="text-cyan-500 text-[10px] tracking-widest mb-6 border-b border-white/5 pb-2">
            [ COMMAND CENTER ]
          </div>
          
          {/* DRAG & DROP ALANI */}
          <div className="border-2 border-dashed border-white/10 bg-[#0a0a0a] hover:border-cyan-500/30 transition-colors h-40 flex flex-col items-center justify-center mb-6 cursor-pointer relative">
            <svg className="w-6 h-6 text-blue-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <span className="text-gray-500 text-sm">Drag & Drop Invoice (JPG/PNG)</span>
            <span className="text-gray-700 text-xs mt-1">or click to browse</span>
          </div>

          {/* KARANTİNA UYARISI (Fail-Closed) */}
          <div className="border border-red-900/50 bg-red-950/20 p-4 flex items-center gap-3">
            <span className="text-red-500 text-xs font-bold whitespace-nowrap">[ SYS_ERROR ]</span>
            <span className="text-red-400 text-xs">Karantina Protokolü: İşlem reddedildi veya sunucu hatası.</span>
          </div>
        </div>

        {/* BLACKSEA AGRO - KAYAR BANT (YENİ EKLENTİ) */}
        <div className="w-full border border-white/10 bg-[#050505] p-6 text-left overflow-hidden">
          <div className="text-cyan-500 text-[10px] tracking-widest mb-6 border-b border-white/5 pb-2 flex justify-between">
            <span>[ AGRO-CYBERNETICS DATA STREAM ]</span>
            <span className="text-gray-600 animate-pulse">LIVE FEED</span>
          </div>
          
          {/* Sonsuz Kayan Bant */}
          <div className="overflow-hidden relative w-full h-32 border border-white/5 bg-black/50">
            {/* Sağ ve Sol Gölgeler (Yumuşak Geçiş) */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-scroll h-full flex items-center gap-4 px-4">
              {/* Buradaki b1.webp, b2.webp resimlerini public içine atacaksın */}
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item, idx) => (
                <div key={idx} className="h-24 w-40 shrink-0 relative group cursor-crosshair border border-white/5 hover:border-cyan-500/50 transition-colors overflow-hidden">
                  <img 
                    src={`/b${item}.webp`} 
                    alt={`Blacksea Node ${item}`} 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 origin-center"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                  {/* Üstüne Gelince Çöken Neon Işık */}
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(6,182,212,0)] group-hover:shadow-[inset_0_0_30px_rgba(6,182,212,0.4)] transition-all duration-700 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}