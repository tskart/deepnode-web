// @ts-nocheck
/* eslint-disable */
'use client';

import React, { useState, useEffect, useRef, DragEvent } from 'react';
import { Network, Database, ShieldAlert, Briefcase, ArrowRight, Scale, Target, Terminal, Zap, Cpu } from 'lucide-react';

interface InvoiceResult {
  status: string;
  processing_time_seconds: number;
  data: { vendor: string; amount: string; date: string; tax_amount: string; language: string; };
}

// --- ORİJİNAL 4'LÜ HUD SİSTEMİ (Z-40 YAPILARAK TIKLANMA SORUNU ÇÖZÜLDÜ) ---
const VILLAGE_HUDS = [
  { id: 'HUD_01', title: 'Vision Core', subtitle: 'AI Logistics', image: '/2.jpeg', isMaster: false, 
    posClass: 'top-28 left-4 lg:left-8', 
    styleClass: 'border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]', textClass: 'text-cyan-400',
    details: 'The foundational neural net routing protocol. Optimizes B2B logistics.', stats: { nodes: 14200, latency: '0.4ms', status: 'Optimal' }, icon: Network },
  
  { id: 'HUD_02', title: 'Process & Purge', subtitle: 'Zero Retention', image: '/4.jpeg', isMaster: false, 
    posClass: 'bottom-8 lg:bottom-12 left-4 lg:left-8', 
    styleClass: 'border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]', textClass: 'text-cyan-400',
    details: 'Ephemeral data processing. Corporate intelligence is instantly purged.', stats: { nodes: 800, latency: '1.2ms', status: 'Enforced' }, icon: ShieldAlert },
  
  { id: 'HUD_03', title: 'Quantum Grid', subtitle: 'Startup Matrix', image: '/3.jpeg', isMaster: false, 
    posClass: 'top-28 right-4 lg:right-8', 
    styleClass: 'border-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]', textClass: 'text-emerald-400',
    details: 'Decentralized startup village matrix. Resources are dynamically allocated.', stats: { nodes: 450, latency: '0.1ms', status: 'Scaling' }, icon: Database },
  
  { id: 'MASTER', title: 'The Architect Vault', subtitle: 'Interactive Pitch Deck', image: '/vault.jpg', isMaster: true, 
    posClass: 'bottom-8 lg:bottom-12 right-4 lg:right-8', 
    styleClass: 'border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] shadow-[0_0_15px_rgba(245,158,11,0.2)]', textClass: 'text-amber-400 animate-pulse',
    details: 'DYNAMIC INTERVIEW & PRESENTATION MODULE', stats: { nodes: 0, latency: '0.0ms', status: 'Classified' }, icon: Briefcase },
];

export default function DeepNodeManifesto() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bottomVideoRef = useRef<HTMLVideoElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<InvoiceResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [activeCard, setActiveCard] = useState<any>(null);
  // İlk açılışta AO Mülakat hazırlığı çıksın diye 'AO_PREP' yaptık
  const [presentationTopic, setPresentationTopic] = useState<'AO_PREP' | 'EXPERIENCE' | 'PIPELINE' | 'LEGAL'>('AO_PREP');

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
    if (bottomVideoRef.current) bottomVideoRef.current.play().catch(() => {});
  }, []);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) { await processInvoice(e.dataTransfer.files[0]); }
  };
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) { await processInvoice(e.target.files[0]); }
  };

  const processInvoice = async (file: File) => {
    setIsProcessing(true); setError(null); setResult(null);
    const formData = new FormData(); formData.append('file', file);
    try {
      const response = await fetch('/api/process-invoice', { method: 'POST', headers: { 'X-API-Key': 'dn_super_secret_key_2026' }, body: formData });
      if (!response.ok) throw new Error('Karantina Protokolü: İşlem reddedildi veya sunucu hatası.');
      const data: InvoiceResult = await response.json(); setResult(data);
    } catch (err: any) { setError(err.message || "Bilinmeyen bir sistem hatası oluştu."); } 
    finally { setIsProcessing(false); }
  };

  return (
    <main className="relative min-h-screen text-slate-300 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden bg-black">
      
      {/* SÜREKLİ AŞAĞIDAN YUKARI AKAN GAZETE ANİMASYONU (CSS) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes teleprompter {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-150%); }
        }
        .animate-teleprompter {
          animation: teleprompter 90s linear infinite;
        }
        .animate-teleprompter:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* ARKA PLAN */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#05050f] to-black"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-cyan-900/10 blur-[120px] animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/10 blur-[150px] animate-[spin_80s_linear_infinite_reverse]"></div>
      </div>

      {/* --- HUD EKRANLARI (Z-40 yapılarak tıklanma sorunu çözüldü) --- */}
      {VILLAGE_HUDS.map((hud) => (
        <div 
          key={hud.id} 
          onClick={() => setActiveCard(hud)}
          className={`hidden md:block fixed z-40 w-40 h-24 lg:w-72 lg:h-44 rounded-xl border bg-slate-900/40 overflow-hidden backdrop-blur-md transition-all duration-1000 grayscale hover:grayscale-0 group hover:z-50 cursor-pointer animate-[pulse_4s_ease-in-out_infinite] hover:scale-110 ${hud.posClass} ${hud.styleClass}`}
        >
           <img src={hud.image} alt={hud.title} className={`w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-700 ${hud.isMaster ? 'mix-blend-luminosity' : ''}`} />
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2 text-[9px] lg:text-[11px] font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold tracking-widest">
             <span className={hud.textClass}>[ {hud.id} ] {hud.title.toUpperCase()}</span>
           </div>
        </div>
      ))}

      {/* --- ANA İÇERİK --- */}
      <div className="relative z-20 flex flex-col min-h-screen">
        
        {/* ÜST BİLGİ */}
        <header className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center font-bold text-slate-950 text-lg shadow-[0_0_15px_rgba(34,211,238,0.4)]">DN</div>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              DEEPNODE<span className="text-cyan-500">.AI</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <select className="bg-black border border-cyan-500/40 text-cyan-400 text-xs font-mono py-1.5 px-3 rounded outline-none cursor-pointer hover:border-cyan-400 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.1)]">
              <option value="en">EN - ENGLISH</option>
              <option value="de">DE - DEUTSCH</option>
              <option value="tr">TR - TÜRKÇE</option>
              <option value="ar">AR - العربية</option>
            </select>

            <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-slate-900/60 rounded-full border border-green-500/30 shadow-inner">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)]"></span>
              </span>
              <span className="text-[10px] md:text-xs font-mono font-semibold text-green-400 tracking-widest">CORE: ONLINE</span>
            </div>
          </div>
        </header>

        {/* ANA VİTRİN */}
        <section className="flex flex-col items-center justify-center pt-8 pb-12 px-4 text-center z-20 relative">
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 animate-pulse drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">
              Startup Village
            </h1>
          </div>
          
          <div className="inline-block px-5 py-2 mb-10 border border-cyan-500/40 rounded-full bg-cyan-500/10 text-cyan-400 text-xs md:text-sm font-mono tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            [ PROPRIETARY NEURAL ENGINE ]
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-2xl">
            Zero Hallucination. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">Absolute Autonomy.</span>
          </h2>
          <p className="max-w-2xl text-base md:text-lg lg:text-xl text-slate-300 mb-6 leading-relaxed bg-white/5 p-4 md:p-6 rounded-lg backdrop-blur-md border border-white/10 shadow-2xl">
            We architect GDPR-compliant 'Process & Purge' AI data pipelines. Your corporate intelligence is processed ephemerally with zero data retention.
          </p>
        </section>

        {/* COMMAND CENTER */}
        <section className="max-w-3xl mx-auto w-full px-6 pb-16 relative z-20">
          <div className="bg-slate-900/80 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] relative z-20">
            <h3 className="text-cyan-400 font-mono text-sm tracking-widest mb-4 flex items-center justify-between">
              <span>[ COMMAND CENTER ]</span>
              <span className="text-[10px] text-slate-500">SECURE TUNNEL ACTIVE</span>
            </h3>

            <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
              className={`relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg transition-all duration-300 ${isDragging ? 'border-cyan-400 bg-cyan-900/20 shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'border-slate-700 bg-black/60 hover:border-cyan-500/50 hover:bg-slate-800/50'}`}
            >
              <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleFileSelect} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
              {!isProcessing ? (
                <>
                  <svg className="w-10 h-10 text-cyan-500/50 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="text-sm font-mono text-slate-300">Drag & Drop Invoice (JPG/PNG)</p>
                  <p className="text-xs font-mono text-slate-500 mt-2">or click to browse</p>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 border-2 border-t-cyan-400 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin mb-3"></div>
                  <p className="text-sm font-mono text-cyan-400 animate-pulse">NEURAL ENGINE PROCESSING...</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =====================================================================================
            VİDEO VE EKOSİSTEM (KAYBOLAN KISIMLAR GERİ GELDİ!)
            ===================================================================================== */}
        
        {/* VİDEO BÖLÜMÜ */}
        <section className="relative z-20 max-w-4xl mx-auto w-full px-6 pb-24">
          <div className="flex flex-col items-center">
            <h3 className="text-cyan-500 font-mono text-sm tracking-widest mb-4 animate-pulse">WATCH THE CORE IN ACTION</h3>
            <div className="relative w-full aspect-video bg-slate-900/80 border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] group">
              <video ref={videoRef} src="/deepnode.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"></video>
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,182,212,0.1)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 text-xs font-mono text-cyan-400 bg-black/50 px-2 py-1 rounded">DEEPNODE_CORE_V3.mp4</div>
            </div>
          </div>
        </section>

        {/* 3'LÜ EKOSİSTEM BÖLÜMÜ */}
        <section className="max-w-6xl mx-auto w-full px-6 pb-20 z-20">
          <div className="border-t-[2px] border-b border-white/10 py-4 mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg">The Ecosystem</h2>
              <p className="text-slate-500 font-mono text-xs md:text-sm mt-2">B2B CORPORATE EDITIONS / GLOBAL INTELLIGENCE</p>
            </div>
            <div className="hidden md:block text-cyan-500 font-mono text-sm border px-3 py-1 border-cyan-500/30 bg-cyan-500/5">EST. 2026</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl relative z-20">
            <article className="p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-slate-900/60 transition-colors group animate-[pulse_4s_ease-in-out_infinite]">
              <div className="text-cyan-500 font-mono text-sm tracking-widest mb-3">VOL 1. / B2B AI</div>
              <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tighter">DeepNode<br/><span className="text-cyan-400">Tech.</span></h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Industrial-scale 'Fail-Closed' AI architectures.</p>
              <button className="w-full py-4 bg-cyan-950/40 border border-cyan-500/50 text-cyan-400 font-mono text-xs uppercase hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all rounded font-bold">ENTERPRISE LICENSE<br/><span className="text-lg">$2,500 / MO</span></button>
            </article>
            <article className="p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-slate-900/60 transition-colors group animate-[pulse_5s_ease-in-out_infinite]">
              <div className="text-blue-500 font-mono text-sm tracking-widest mb-3">VOL 2. / TRAINING</div>
              <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tighter">DeepNode<br/><span className="text-blue-400">Edu.</span></h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Corporate intelligence transformation masterclasses.</p>
              <button className="w-full py-4 bg-blue-950/40 border border-blue-500/50 text-blue-400 font-mono text-xs uppercase hover:bg-blue-500 hover:text-black hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all rounded font-bold">TEAM MASTERCLASS<br/><span className="text-lg">$2,500 / PKG</span></button>
            </article>
            <article className="p-8 hover:bg-slate-900/60 transition-colors group animate-[pulse_6s_ease-in-out_infinite]">
              <div className="text-green-500 font-mono text-sm tracking-widest mb-3">VOL 3. / MEDICAL</div>
              <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tighter">DeepNode<br/><span className="text-green-400">Health.</span></h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">The sanctity of medical data. Zero-Retention AI.</p>
              <button className="w-full py-4 bg-green-950/40 border border-green-500/50 text-green-400 font-mono text-xs uppercase hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all rounded font-bold">CLINICAL LICENSE<br/><span className="text-lg">$2,500 / MO</span></button>
            </article>
          </div>
        </section>

        {/* ALT VİDEO (THE ARCHITECT İMZASI) */}
        <div className="w-full max-w-5xl mx-auto px-8 mb-16 relative z-20">
          <div className="relative w-full aspect-[21/9] bg-[#050505] border border-cyan-900/40 rounded-lg overflow-hidden group shadow-[0_0_30px_rgba(6,182,212,0.05)]">
            <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
            <video ref={bottomVideoRef} src="/deepnode.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen grayscale"></video>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
              <div className="text-cyan-500/80 font-mono text-[10px] tracking-[0.4em] mb-3">[ THE ARCHITECT ]</div>
              <div className="text-xl md:text-3xl font-black tracking-widest text-slate-200 drop-shadow-lg">DEEPNODE <span className="text-cyan-600">AI</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================================
          MÜLAKAT ŞOVU: AO GLOBE LIFE PREPARATION VAULT (3 SAYFALIK TELEPROMPTER)
          ===================================================================================== */}
      {activeCard && activeCard.isMaster && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4" onClick={() => setActiveCard(null)}>
          <div 
            className="w-full max-w-6xl h-[85vh] rounded-xl shadow-[0_0_100px_rgba(217,119,6,0.2)] flex flex-col relative overflow-hidden bg-cover bg-center border border-amber-900/30"
            style={{ backgroundImage: "url('/vault.jpg')" }} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-[#e3d5b8]/90 backdrop-blur-sm"></div>
            
            <div className="relative z-10 flex flex-col h-full text-amber-950 p-6 md:p-10">
              
              <div className="flex justify-between items-end border-b-2 border-amber-900/40 pb-4 mb-6">
                <div className="flex flex-col">
                  <h1 className="text-5xl md:text-6xl font-black uppercase tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-b from-cyan-600 to-blue-800 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    NODA ENGINE
                  </h1>
                  <p className="font-mono text-xs uppercase font-bold tracking-[0.3em] mt-1 text-amber-900/80">STRATEGIC ALIGNMENT MATRIX</p>
                </div>
                <button onClick={() => setActiveCard(null)} className="font-mono text-xs font-bold border-2 border-amber-950 px-4 py-2 hover:bg-amber-950 hover:text-[#e3d5b8] transition-colors">
                  [X] CLOSE VAULT
                </button>
              </div>

              <div className="flex flex-1 overflow-hidden gap-8">
                {/* SOL MENÜ */}
                <div className="w-1/3 border-r-2 border-amber-900/20 pr-6 flex flex-col gap-3 overflow-y-auto">
                   <h3 className="font-serif italic text-lg font-bold text-amber-900/60 mb-2 border-b border-amber-900/20 pb-2">Intelligence Chapters</h3>
                   
                   <button onClick={() => setPresentationTopic('AO_PREP')} className={`flex items-center gap-3 p-4 font-serif text-sm font-bold transition-all text-left rounded ${presentationTopic === 'AO_PREP' ? 'bg-amber-900 text-[#e3d5b8] shadow-inner' : 'hover:bg-amber-900/10 text-amber-950'}`}><Zap className="w-5 h-5"/> AO Globe Life Prep</button>
                   <button onClick={() => setPresentationTopic('EXPERIENCE')} className={`flex items-center gap-3 p-4 font-serif text-sm font-bold transition-all text-left rounded ${presentationTopic === 'EXPERIENCE' ? 'bg-amber-900 text-[#e3d5b8] shadow-inner' : 'hover:bg-amber-900/10 text-amber-950'}`}><Terminal className="w-5 h-5"/> Core Architecture</button>
                   <button onClick={() => setPresentationTopic('PIPELINE')} className={`flex items-center gap-3 p-4 font-serif text-sm font-bold transition-all text-left rounded ${presentationTopic === 'PIPELINE' ? 'bg-amber-900 text-[#e3d5b8] shadow-inner' : 'hover:bg-amber-900/10 text-amber-950'}`}><Network className="w-5 h-5"/> Single-Line Matrix</button>
                   <button onClick={() => setPresentationTopic('LEGAL')} className={`flex items-center gap-3 p-4 font-serif text-sm font-bold transition-all text-left rounded ${presentationTopic === 'LEGAL' ? 'bg-amber-900 text-[#e3d5b8] shadow-inner' : 'hover:bg-amber-900/10 text-amber-950'}`}><Scale className="w-5 h-5"/> Data Sovereignty</button>
                </div>

                {/* SAĞ İÇERİK - TELEPROMPTER ALANI */}
                <div className="w-2/3 h-full relative" style={{ fontFamily: "'Georgia', serif" }}>
                  
                  {/* YENİ: AŞAĞIDAN YUKARI AKAN MÜLAKAT METNİ (AO GLOBE LIFE) */}
                  {presentationTopic === 'AO_PREP' && (
                    <div className="relative w-full h-full overflow-hidden bg-amber-950/5 border border-amber-900/20 rounded shadow-inner p-6 cursor-pointer">
                      
                      {/* Üst ve Alt Gölgeler (Yazıların kaybolarak çıkması için) */}
                      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#e3d5b8] to-transparent z-10 pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#e3d5b8] to-transparent z-10 pointer-events-none"></div>
                      
                      {/* AKAN İÇERİK (Fare ile üstüne gelince durur) */}
                      <div className="animate-teleprompter flex flex-col gap-12 text-amber-950/90 pb-96 pt-40 px-4">
                        
                        {/* BÖLÜM 1 */}
                        <div>
                          <h2 className="text-3xl font-black uppercase text-center border-y-2 border-amber-900/30 py-4 mb-6">Phase 1: AO Globe Life Alignment</h2>
                          <p className="text-lg leading-relaxed text-justify mb-4"><span className="text-6xl font-black float-left mr-3 mt-[-5px] text-amber-900">A</span>O Globe Life represents the pinnacle of institutional financial and insurance services. In such an ecosystem, adopting AI is not about simple automation; it is about absolute data sovereignty and infallible processing. The webinar phase confirms that your organization is scaling its digital infrastructure, seeking individuals who understand both macro-level strategy and micro-level execution.</p>
                          <p className="text-lg leading-relaxed text-justify">Traditional SaaS models fail in the insurance sector because they retain sensitive underwriting and policy data. DeepNode’s architecture is specifically engineered to bypass these liabilities. By integrating 'Fail-Closed' neural nodes, we ensure that every client's financial profile is processed ephemerally. This is the strategic alignment I bring to the table.</p>
                        </div>

                        {/* BÖLÜM 2 */}
                        <div>
                          <h2 className="text-3xl font-black uppercase text-center border-y-2 border-amber-900/30 py-4 mb-6">Phase 2: The Architect's Value Proposition</h2>
                          <p className="text-lg leading-relaxed text-justify mb-4">My background is not standard software development. With over four years in heavy industrial R&D, railway engineering, and electromechanical systems at Akhenaton Hydraulic LLC, my baseline is industrial logic. When a hydraulic system fails, the damage is catastrophic. When financial data leaks, the corporate damage is equally devastating.</p>
                          <p className="text-lg leading-relaxed text-justify">I apply this industrial-grade "anticipate-and-quarantine" methodology directly to software architecture. I do not build web apps; I build secure intelligence pipelines. AO Globe Life needs a Lead Architect who treats data like a high-pressure system—managing loads, preventing leaks, and ensuring zero downtime during peak policy processing hours.</p>
                        </div>

                        {/* BÖLÜM 3 */}
                        <div>
                          <h2 className="text-3xl font-black uppercase text-center border-y-2 border-amber-900/30 py-4 mb-6">Phase 3: Execution & Integration</h2>
                          <p className="text-lg leading-relaxed text-justify mb-4">The NODA engine is designed for frictionless integration. Instead of forcing AO Globe Life to abandon its legacy ERP or underwriting systems, my architecture serves as an invisible, intelligent bridge. The system reads raw inputs, validates them through a Single-Line Matrix, and pushes clean, structured data into your existing databases.</p>
                          <p className="text-lg leading-relaxed text-justify font-bold border-l-4 border-amber-900 pl-4 my-6 italic">"True corporate synergy is achieved when the AI adapts to the enterprise's security needs, rather than forcing the enterprise to lower its shields."</p>
                          <p className="text-lg leading-relaxed text-justify">As we transition to the final interview stage, my objective is clear: To demonstrate how this proprietary Zero-Retention model will reduce operational friction, ensure absolute GDPR/financial compliance, and position AO Globe Life as the most technologically impenetrable institution in the market.</p>
                        </div>

                        <div className="text-center mt-12 opacity-50 font-mono text-sm">[ END OF TELEMETRY DATA ]</div>
                      </div>
                    </div>
                  )}

                  {/* DİĞER SEKMELER (GİZLİ SİLAHLAR) */}
                  {presentationTopic === 'EXPERIENCE' && (
                    <div className="animate-in fade-in duration-500 overflow-y-auto h-full pr-4">
                      <h2 className="text-3xl font-black uppercase mb-4 leading-none border-b border-amber-900/20 pb-2">Core Architecture</h2>
                      <div className="text-lg leading-relaxed text-justify space-y-4">
                        <p><span className="text-5xl font-black float-left mr-2 mt-[-5px]">I</span> am operating as the Lead Architect and B2B Systems Architect under DeepNode AI, bringing over four years of intense R&D and design engineering experience. My foundational expertise spans across railway engineering, industrial hydraulics, and electromechanical systems.</p>
                      </div>
                    </div>
                  )}

                  {presentationTopic === 'PIPELINE' && (
                    <div className="animate-in fade-in duration-500 overflow-y-auto h-full pr-4">
                      <div className="w-full bg-amber-950/5 text-amber-950 p-4 mb-6 rounded border border-amber-900/20 flex flex-col md:flex-row items-center justify-between font-mono text-[10px] font-bold tracking-widest">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="bg-amber-900 text-[#e3d5b8] px-2 py-1 rounded">1. INGESTION</span> <ArrowRight className="w-4 h-4"/>
                          <span className="border-b-2 border-amber-900 pb-1">2. ORCHESTRATION</span> <ArrowRight className="w-4 h-4"/>
                          <span className="border-b-2 border-amber-900 pb-1">3. ZERO-TRUST PURGE</span> <ArrowRight className="w-4 h-4"/>
                          <span className="bg-amber-900 text-[#e3d5b8] px-2 py-1 rounded">4. ERP DELIVERY</span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-black uppercase mb-4 leading-none">The Single-Line Matrix</h2>
                      <div className="text-lg leading-relaxed text-justify space-y-4">
                        <p>The single-line diagram above demonstrates the immutable flow of our architecture. From the moment a document hits our ingestion layer, it is processed entirely in memory.</p>
                      </div>
                    </div>
                  )}

                  {presentationTopic === 'LEGAL' && (
                    <div className="animate-in fade-in duration-500 overflow-y-auto h-full pr-4">
                      <h2 className="text-3xl font-black uppercase mb-4 leading-none border-b border-amber-900/20 pb-2">Data Sovereignty</h2>
                      <div className="text-lg leading-relaxed text-justify space-y-4">
                        <p>Our architecture employs a strict **Zero-Trust Purge** protocol. Every transaction generates an encrypted, ephemeral hash proving that processing occurred without storing the payload. This is the gold standard for European corporate compliance.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NORMAL KART MODALI */}
      {activeCard && !activeCard.isMaster && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4" onClick={() => setActiveCard(null)}>
          <div className="w-full max-w-5xl h-[70vh] bg-[#050505] border border-cyan-500/40 rounded shadow-[0_0_80px_rgba(0,255,255,0.1)] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="h-14 border-b border-white/10 bg-black flex items-center justify-between px-6">
               <div className="flex items-center gap-3">
                 <activeCard.icon className="w-5 h-5 text-cyan-400" />
                 <span className="text-sm font-bold text-white tracking-widest">{activeCard.title}</span>
               </div>
               <button onClick={() => setActiveCard(null)} className="text-[10px] text-slate-400 hover:text-white border border-slate-800 hover:border-white px-3 py-1.5 rounded transition-all font-mono">[ X ] CLOSE</button>
            </div>
            <div className="flex flex-col md:flex-row h-full overflow-hidden">
              <div className="md:w-3/5 p-6 border-r border-white/5 bg-black flex items-center justify-center relative">
                <div className="w-full h-full rounded overflow-hidden relative border border-white/10">
                  <img src={activeCard.image} alt="Node" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
                </div>
              </div>
              <div className="md:w-2/5 p-8 flex flex-col bg-[#050505] font-mono">
                <h2 className="text-[10px] text-cyan-600 font-bold tracking-[0.2em] mb-4 uppercase">Node Specifications</h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">{activeCard.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}