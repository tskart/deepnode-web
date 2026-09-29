'use client';
import React, { useState, useEffect, useRef, DragEvent } from 'react';
// Kullanılmayan tüm ikonlar temizlendi, Vercel artık hata vermeyecek!
import { Network, Database, ShieldAlert, Activity, Lock, Briefcase, ArrowRight, Scale, Target, Terminal } from 'lucide-react';

interface InvoiceResult {
  status: string;
  processing_time_seconds: number;
  data: { vendor: string; amount: string; date: string; tax_amount: string; language: string; };
}

// --- 6'LI HUD SİSTEMİ ---
const VILLAGE_HUDS = [
  // SOL TARAF
  { id: 'HUD_01', title: 'Vision Core', subtitle: 'AI Logistics', image: '/2.jpeg', isMaster: false, 
    posClass: 'top-24 left-4 lg:left-8', 
    styleClass: 'border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]', textClass: 'text-cyan-400',
    details: 'The foundational neural net routing protocol. Optimizes B2B logistics.', stats: { nodes: 14200, latency: '0.4ms', status: 'Optimal' }, icon: Network },
  
  { id: 'HUD_02', title: 'Quantum Grid', subtitle: 'Startup Matrix', image: '/3.jpeg', isMaster: false, 
    posClass: 'top-1/2 -translate-y-1/2 left-4 lg:left-8', 
    styleClass: 'border-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]', textClass: 'text-emerald-400',
    details: 'Decentralized startup village matrix. Resources are dynamically allocated.', stats: { nodes: 450, latency: '0.1ms', status: 'Scaling' }, icon: Database },
  
  { id: 'HUD_03', title: 'Process & Purge', subtitle: 'Zero Retention', image: '/4.jpeg', isMaster: false, 
    posClass: 'bottom-8 lg:bottom-12 left-4 lg:left-8', 
    styleClass: 'border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]', textClass: 'text-cyan-400',
    details: 'Ephemeral data processing. Corporate intelligence is instantly purged.', stats: { nodes: 800, latency: '1.2ms', status: 'Enforced' }, icon: ShieldAlert },
  
  // SAĞ TARAF
  { id: 'HUD_04', title: 'SAP Autonomy', subtitle: 'ERP Integration', image: '/5.jpeg', isMaster: false, 
    posClass: 'top-24 right-4 lg:right-8', 
    styleClass: 'border-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]', textClass: 'text-blue-400',
    details: 'Direct pipeline to corporate ERPs. Zero human intervention required.', stats: { nodes: 3100, latency: '0.8ms', status: 'Active' }, icon: Activity },
  
  // THE ARCHITECT VAULT (MÜLAKAT GİZLİ SİLAHI)
  { id: 'MASTER', title: 'The Architect Vault', subtitle: 'Interactive Pitch Deck', image: '/eski-el-yazmasi.jpg', isMaster: true, 
    posClass: 'top-1/2 -translate-y-1/2 right-4 lg:right-8', 
    styleClass: 'border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] shadow-[0_0_15px_rgba(245,158,11,0.2)]', textClass: 'text-amber-400 animate-pulse',
    details: 'DYNAMIC INTERVIEW & PRESENTATION MODULE', stats: { nodes: 0, latency: '0.0ms', status: 'Classified' }, icon: Briefcase },
  
  { id: 'HUD_06', title: 'Security Shield', subtitle: 'Zero-Day Defense', image: '/6.jpeg', isMaster: false, 
    posClass: 'bottom-8 lg:bottom-12 right-4 lg:right-8', 
    styleClass: 'border-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]', textClass: 'text-blue-400',
    details: 'Zero-day threat mitigation. The shield learns from incoming anomalies.', stats: { nodes: 99, latency: '0.2ms', status: 'Hardened' }, icon: Lock },
];

export default function DeepNodeManifesto() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bottomVideoRef = useRef<HTMLVideoElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<InvoiceResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activeCard, setActiveCard] = useState<any>(null);
  const [presentationTopic, setPresentationTopic] = useState<'EXPERIENCE' | 'PIPELINE' | 'VISION' | 'LEGAL'>('EXPERIENCE');

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
      
      {/* 1. GERÇEK UZAY / SİBER ATMOSFER ARKA PLANI */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#05050f] to-black"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-cyan-900/10 blur-[120px] animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/10 blur-[150px] animate-[spin_80s_linear_infinite_reverse]"></div>
      </div>

      {/* --- DEVASA HUD EKRANLARI --- */}
      {VILLAGE_HUDS.map((hud) => (
        <div 
          key={hud.id} 
          onClick={() => setActiveCard(hud)}
          className={`hidden md:block fixed z-10 w-40 h-24 lg:w-72 lg:h-44 rounded-xl border bg-slate-900/40 overflow-hidden backdrop-blur-md transition-all duration-1000 grayscale hover:grayscale-0 group hover:z-50 cursor-crosshair animate-[pulse_4s_ease-in-out_infinite] hover:scale-110 ${hud.posClass} ${hud.styleClass}`}
        >
           <img src={hud.image} alt={hud.title} className={`w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-700 ${hud.isMaster ? 'mix-blend-luminosity' : ''}`} />
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2 text-[9px] lg:text-[11px] font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold tracking-widest">
             <span className={hud.textClass}>[ {hud.id} ] {hud.title.toUpperCase()}</span>
           </div>
        </div>
      ))}

      {/* --- ANA İÇERİK --- */}
      <div className="relative z-20 flex flex-col min-h-screen">
        
        {/* ÜST BİLGİ & DİL SEÇENEĞİ */}
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
        <section className="flex flex-col items-center justify-center pt-16 pb-12 px-4 text-center">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 animate-pulse drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">
              Startup Village
            </h1>
          </div>
          <div className="inline-block px-5 py-2 mb-8 border border-cyan-500/40 rounded-full bg-cyan-500/10 text-cyan-400 text-xs md:text-sm font-mono tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            [ PROPRIETARY NEURAL ENGINE ]
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-2xl">
            Zero Hallucination. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">Absolute Autonomy.</span>
          </h2>
          <p className="max-w-2xl text-base md:text-lg lg:text-xl text-slate-300 mb-6 leading-relaxed bg-black/40 p-4 md:p-6 rounded-lg backdrop-blur-md border border-white/10 shadow-2xl">
            We architect GDPR-compliant 'Process & Purge' AI data pipelines. Your corporate intelligence is processed ephemerally with zero data retention.
          </p>
        </section>

        {/* COMMAND CENTER */}
        <section className="max-w-3xl mx-auto w-full px-6 pb-16">
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
            {error && <div className="mt-4 p-4 border border-red-500/50 bg-red-900/20 rounded text-red-400 font-mono text-sm">[ SYS_ERROR ] {error}</div>}
            
            {result && (
              <div className="mt-6 border border-green-500/30 bg-black/60 rounded-lg overflow-hidden">
                <div className="bg-green-900/20 px-4 py-2 border-b border-green-500/30 flex justify-between items-center">
                  <span className="text-green-400 font-mono text-xs tracking-widest">DATA EXTRACTED SUCCESSFULLY</span>
                  <span className="text-cyan-500 font-mono text-[10px]">TIME: {result.processing_time_seconds}s</span>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><p className="text-xs text-slate-500 font-mono mb-1">VENDOR</p><p className="text-white font-mono text-sm bg-slate-800/50 p-2 rounded">{result.data.vendor}</p></div>
                  <div><p className="text-xs text-slate-500 font-mono mb-1">AMOUNT</p><p className="text-white font-mono text-sm bg-slate-800/50 p-2 rounded">{result.data.amount}</p></div>
                  <div><p className="text-xs text-slate-500 font-mono mb-1">DATE</p><p className="text-white font-mono text-sm bg-slate-800/50 p-2 rounded">{result.data.date}</p></div>
                  <div><p className="text-xs text-slate-500 font-mono mb-1">TAX / VAT</p><p className="text-white font-mono text-sm bg-slate-800/50 p-2 rounded">{result.data.tax_amount}</p></div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* VİDEO */}
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

        {/* 2. VİDEO (THE ARCHITECT İMZASI) */}
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
          MÜLAKAT ŞOVU: THE ARCHITECT VAULT
          ===================================================================================== */}
      {activeCard && activeCard.isMaster && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4" onClick={() => setActiveCard(null)}>
          <div 
            className="w-full max-w-6xl h-[85vh] rounded-xl shadow-[0_0_100px_rgba(217,119,6,0.2)] flex flex-col relative overflow-hidden bg-cover bg-center border border-amber-900/30"
            style={{ backgroundImage: "url('/eski-el-yazmasi.jpg')" }} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-[#e3d5b8]/90 backdrop-blur-sm"></div>
            
            <div className="relative z-10 flex flex-col h-full text-amber-950 p-6 md:p-10">
              <div className="flex justify-between items-end border-b-2 border-amber-900/40 pb-4 mb-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter" style={{ fontFamily: "'Times New Roman', Times, serif" }}>The Architect's Vault</h1>
                  <p className="font-mono text-[10px] uppercase font-bold tracking-[0.2em] mt-2 text-amber-900/70">Dynamic Briefing & Integration Matrix</p>
                </div>
                <button onClick={() => setActiveCard(null)} className="font-mono text-xs font-bold border-2 border-amber-950 px-4 py-2 hover:bg-amber-950 hover:text-[#e3d5b8] transition-colors">
                  [X] CLOSE VAULT
                </button>
              </div>

              <div className="flex flex-1 overflow-hidden gap-8">
                <div className="w-1/3 border-r-2 border-amber-900/20 pr-6 flex flex-col gap-3 overflow-y-auto">
                   <h3 className="font-serif italic text-lg font-bold text-amber-900/60 mb-2 border-b border-amber-900/20 pb-2">Presentation Chapters</h3>
                   
                   <button onClick={() => setPresentationTopic('EXPERIENCE')} className={`flex items-center gap-3 p-4 font-serif text-sm font-bold transition-all text-left rounded ${presentationTopic === 'EXPERIENCE' ? 'bg-amber-900 text-[#e3d5b8] shadow-inner' : 'hover:bg-amber-900/10 text-amber-950'}`}><Terminal className="w-5 h-5"/> Key Experiences & Role</button>
                   <button onClick={() => setPresentationTopic('PIPELINE')} className={`flex items-center gap-3 p-4 font-serif text-sm font-bold transition-all text-left rounded ${presentationTopic === 'PIPELINE' ? 'bg-amber-900 text-[#e3d5b8] shadow-inner' : 'hover:bg-amber-900/10 text-amber-950'}`}><Network className="w-5 h-5"/> DeepNode Pipeline</button>
                   <button onClick={() => setPresentationTopic('VISION')} className={`flex items-center gap-3 p-4 font-serif text-sm font-bold transition-all text-left rounded ${presentationTopic === 'VISION' ? 'bg-amber-900 text-[#e3d5b8] shadow-inner' : 'hover:bg-amber-900/10 text-amber-950'}`}><Target className="w-5 h-5"/> DACH Region Strategy</button>
                   <button onClick={() => setPresentationTopic('LEGAL')} className={`flex items-center gap-3 p-4 font-serif text-sm font-bold transition-all text-left rounded ${presentationTopic === 'LEGAL' ? 'bg-amber-900 text-[#e3d5b8] shadow-inner' : 'hover:bg-amber-900/10 text-amber-950'}`}><Scale className="w-5 h-5"/> Compliance & Security</button>
                </div>

                <div className="w-2/3 overflow-y-auto pr-4" style={{ fontFamily: "'Georgia', serif" }}>
                  {presentationTopic === 'EXPERIENCE' && (
                    <div className="animate-in fade-in duration-500">
                      <h2 className="text-3xl font-black uppercase mb-4 leading-none border-b border-amber-900/20 pb-2">Professional Trajectory</h2>
                      <div className="text-lg leading-relaxed text-justify space-y-4">
                        <p><span className="text-5xl font-black float-left mr-2 mt-[-5px]">I</span> am operating as the Lead Architect and B2B Systems Architect under DeepNode AI, bringing over four years of intense R&D and design engineering experience. My foundational expertise spans across railway engineering, industrial hydraulics, and electromechanical systems.</p>
                        <p>Through my tenure, including pivotal work with Akhenaton Hydraulic LLC, I have bridged the gap between heavy industrial logic and modern software architecture. My role encompasses software development, data annotation, and AI model evaluation—ensuring theoretical AI models execute flawlessly in rigid, industrial environments.</p>
                        <p className="font-bold border-l-4 border-amber-900 pl-4 my-6 italic">"My engineering philosophy: Build systems that anticipate failure and quarantine it before it affects the core."</p>
                      </div>
                    </div>
                  )}

                  {presentationTopic === 'PIPELINE' && (
                    <div className="animate-in fade-in duration-500">
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
                        <p>The single-line diagram above demonstrates the immutable flow of our architecture. From the moment a document (such as a Blacksea Agro invoice) hits our ingestion layer, it is processed entirely in memory.</p>
                        <p>If a single API key or validation token is missing, the entire neural pipeline halts, quarantining the data immediately via our "Fail-Closed" doctrine. The orchestration layer analyzes the context, executes the extraction, and passes the structured payload to the final ERP system.</p>
                      </div>
                    </div>
                  )}

                  {presentationTopic === 'VISION' && (
                    <div className="animate-in fade-in duration-500">
                      <h2 className="text-3xl font-black uppercase mb-4 leading-none">DACH Region Execution</h2>
                      <div className="text-lg leading-relaxed text-justify space-y-4">
                        <p>The German and broader DACH enterprise market requires systems that are not just innovative, but inherently robust and legally impeccable. DeepNode is architected exactly for this environment.</p>
                        <p>We are not selling a simple SaaS wrapper; we are offering an industrial-grade **Computational Velocity** engine. For tier-one partners, we offer Dedicated Node deployments. This provides a private instance of our StartUp Village matrix, guaranteeing zero-latency processing even during peak logistical hours across Europe.</p>
                      </div>
                    </div>
                  )}

                  {presentationTopic === 'LEGAL' && (
                    <div className="animate-in fade-in duration-500">
                      <h2 className="text-3xl font-black uppercase mb-4 leading-none">GDPR & Zero-Retention</h2>
                      <div className="text-lg leading-relaxed text-justify space-y-4">
                        <p>Under GDPR Article 17, companies struggle to delete data used for AI training. DeepNode bypasses this entirely: <em>we do not train on client data</em>.</p>
                        <p>Our architecture employs a strict **Zero-Trust Purge** protocol. The moment the processed invoice reaches the client's SAP system, our neural RAM is wiped clean. Every transaction generates an encrypted, ephemeral hash proving that processing occurred without storing the payload. This is the gold standard for European corporate compliance.</p>
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