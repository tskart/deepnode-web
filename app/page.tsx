"use client";
import { useState, useEffect, useRef, DragEvent } from 'react';

// Otonom motordan dönecek verinin type-safe şeması
interface InvoiceResult {
  status: string;
  processing_time_seconds: number;
  data: {
    vendor: string;
    amount: string;
    date: string;
    tax_amount: string;
    language: string;
  };
}

export default function DeepNodeManifesto() {
  // TypeScript'e bunun bir video olduğunu soyluyoruz (Kirmizi cizgi cikmamasi icin VIP bilet)
  const videoRef = useRef<HTMLVideoElement>(null);
  const bottomVideoRef = useRef<HTMLVideoElement>(null);

  // Zeka Motoru Durum Yönetimi (State)
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<InvoiceResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Sayfa yuklenir yuklenmez videoyu zorla oynat
    if (videoRef.current) {
      videoRef.current.play().catch(() => console.log("Video 1 tetiklendi"));
    }
    if (bottomVideoRef.current) {
      bottomVideoRef.current.play().catch(() => console.log("Video 2 tetiklendi"));
    }
  }, []);

  // Sürükle-Bırak (Drag & Drop) Tetikleyicileri
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      await processInvoice(file);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      await processInvoice(file);
    }
  };

  // The Core (Python Backend) ile Şifreli İletişim Köprüsü
  const processInvoice = async (file: File) => {
    setIsProcessing(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Vercel Serverless Python motoruna ateşliyoruz
      const response = await fetch('/api/process-invoice', {
        method: 'POST',
        headers: {
          // Zero-Trust Güvenlik Anahtarımız
          'X-API-Key': 'dn_super_secret_key_2026'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Karantina Protokolü: İşlem reddedildi veya sunucu hatası.');
      }

      const data: InvoiceResult = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Bilinmeyen bir sistem hatası oluştu.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="relative min-h-screen text-slate-300 font-sans selection:bg-cyan-500 selection:text-white overflow-hidden bg-black">
      
      {/* 1. GERÇEK UZAY / SİBER ATMOSFER ARKA PLANI (Hareketli Nebulalar) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#05050f] to-black"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-cyan-900/10 blur-[120px] animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/10 blur-[150px] animate-[spin_80s_linear_infinite_reverse]"></div>
      </div>

      {/* 4 KÖŞE: HAREKETLİ VIP ZEKA GÖSTERGELERİ (HUD EKRANLARI) */}
      <div className="hidden md:block fixed top-24 left-4 lg:left-8 z-0 w-40 h-24 lg:w-72 lg:h-44 rounded-xl border border-cyan-500/20 bg-slate-900/40 overflow-hidden backdrop-blur-md transition-all duration-1000 hover:scale-110 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] group hover:z-50 cursor-crosshair animate-[pulse_4s_ease-in-out_infinite]">
         <img src="/2.jpeg" alt="Vision Core" className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" />
         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2 text-[9px] lg:text-[11px] text-cyan-400 font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold tracking-widest">
           [ SYS.01 ] VISION_CORE_3.6
         </div>
      </div>

      <div className="hidden md:block fixed top-24 right-4 lg:right-8 z-0 w-40 h-24 lg:w-72 lg:h-44 rounded-xl border border-blue-500/20 bg-slate-900/40 overflow-hidden backdrop-blur-md transition-all duration-1000 hover:scale-110 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] group hover:z-50 cursor-crosshair animate-[pulse_5s_ease-in-out_infinite]">
         <img src="/6.jpeg" alt="TypeSafe Shield" className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" />
         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2 text-[9px] lg:text-[11px] text-blue-400 font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold tracking-widest">
           [ SYS.02 ] SECURITY_SHIELD
         </div>
      </div>

      <div className="hidden md:block fixed bottom-8 left-4 lg:bottom-12 lg:left-8 z-0 w-40 h-24 lg:w-72 lg:h-44 rounded-xl border border-cyan-500/20 bg-slate-900/40 overflow-hidden backdrop-blur-md transition-all duration-1000 hover:scale-110 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] group hover:z-50 cursor-crosshair animate-[pulse_6s_ease-in-out_infinite]">
         <img src="/4.jpeg" alt="Process Destroy" className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" />
         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2 text-[9px] lg:text-[11px] text-cyan-400 font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold tracking-widest">
           [ SYS.03 ] PROCESS_&_DESTROY
         </div>
      </div>

      <div className="hidden md:block fixed bottom-8 right-4 lg:bottom-12 lg:right-8 z-0 w-40 h-24 lg:w-72 lg:h-44 rounded-xl border border-blue-500/20 bg-slate-900/40 overflow-hidden backdrop-blur-md transition-all duration-1000 hover:scale-110 hover:-translate-y-4 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] group hover:z-50 cursor-crosshair animate-[pulse_4.5s_ease-in-out_infinite]">
         <img src="/5.jpeg" alt="SAP Integration" className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" />
         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2 text-[9px] lg:text-[11px] text-blue-400 font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold tracking-widest">
           [ SYS.04 ] SAP_AUTONOMY_LINK
         </div>
      </div>

      {/* --- ANA İÇERİK (ÜST KATMAN) --- */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* ÜST BİLGİ & DİL SEÇENEĞİ */}
        <header className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center font-bold text-slate-950 text-lg shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              DN
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              DEEPNODE<span className="text-cyan-500">.AI</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <select className="bg-transparent border border-cyan-500/30 text-cyan-400 text-xs font-mono py-1 px-2 rounded outline-none cursor-pointer hover:border-cyan-400 transition-colors bg-black">
              <option value="en">EN - ENGLISH</option>
              <option value="de">DE - DEUTSCH</option>
              <option value="ar">AR - العربية</option>
              <option value="tr">TR - TÜRKÇE</option>
              <option value="fr">FR - FRANÇAIS</option>
              <option value="es">ES - ESPAÑOL</option>
            </select>

            <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-slate-900/60 rounded-full border border-green-500/30 shadow-inner">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)]"></span>
              </span>
              <span className="text-[10px] md:text-xs font-mono font-semibold text-green-400 tracking-widest">
                CORE: ONLINE
              </span>
            </div>
          </div>
        </header>

        {/* ANA VİTRİN (HERO SECTION) */}
        <section className="flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center">
          <div className="inline-block px-5 py-2 mb-8 border border-cyan-500/40 rounded-full bg-cyan-500/10 text-cyan-400 text-xs md:text-sm font-mono tracking-widest animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            [ PROPRIETARY NEURAL ENGINE ]
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-2xl">
            Zero Hallucination. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">
              Absolute Autonomy.
            </span>
          </h2>
          
          <p className="max-w-2xl text-base md:text-lg lg:text-xl text-slate-300 mb-6 leading-relaxed bg-white/5 p-4 md:p-6 rounded-lg backdrop-blur-md border border-white/10 shadow-2xl">
            We architect GDPR-compliant 'Process & Purge' AI data pipelines. Your corporate intelligence is processed ephemerally with zero data retention.
          </p>
        </section>

        {/* --- YENİ EKLENEN: MÜŞTERİ PANELİ (ZERO-TRUST DASHBOARD) --- */}
        <section className="max-w-4xl mx-auto w-full px-6 pb-16">
          <div className="bg-slate-900/60 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <h3 className="text-cyan-400 font-mono text-sm tracking-widest mb-4 flex items-center justify-between">
              <span>[ COMMAND CENTER ]</span>
              <span className="text-[10px] text-slate-500">SECURE TUNNEL ACTIVE</span>
            </h3>

            {/* Sürükle ve Bırak Alanı */}
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg transition-all duration-300 ${isDragging ? 'border-cyan-400 bg-cyan-900/20 shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'border-slate-700 bg-black/40 hover:border-cyan-500/50 hover:bg-slate-800/50'}`}
            >
              <input 
                type="file" 
                accept="image/png, image/jpeg, image/jpg" 
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
              />
              
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

            {/* Hata Mesajı Ekranı */}
            {error && (
              <div className="mt-4 p-4 border border-red-500/50 bg-red-900/20 rounded text-red-400 font-mono text-sm">
                [ SYS_ERROR ] {error}
              </div>
            )}

            {/* Otonom Sonuç Ekranı */}
            {result && (
              <div className="mt-6 border border-green-500/30 bg-black/60 rounded-lg overflow-hidden">
                <div className="bg-green-900/20 px-4 py-2 border-b border-green-500/30 flex justify-between items-center">
                  <span className="text-green-400 font-mono text-xs tracking-widest">DATA EXTRACTED SUCCESSFULLY</span>
                  <span className="text-cyan-500 font-mono text-[10px]">TIME: {result.processing_time_seconds}s</span>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500 font-mono mb-1">VENDOR</p>
                    <p className="text-white font-mono text-sm bg-slate-800/50 p-2 rounded">{result.data.vendor}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono mb-1">AMOUNT</p>
                    <p className="text-white font-mono text-sm bg-slate-800/50 p-2 rounded">{result.data.amount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono mb-1">DATE</p>
                    <p className="text-white font-mono text-sm bg-slate-800/50 p-2 rounded">{result.data.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono mb-1">TAX / VAT</p>
                    <p className="text-white font-mono text-sm bg-slate-800/50 p-2 rounded">{result.data.tax_amount}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* GERÇEK VİTRİN - THE CORE */}
        <section className="max-w-4xl mx-auto w-full px-6 pb-24">
          <div className="flex flex-col items-center">
            <h3 className="text-cyan-500 font-mono text-sm tracking-widest mb-4 animate-pulse">WATCH THE CORE IN ACTION</h3>
            <div className="relative w-full aspect-video bg-slate-900/80 border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] group">
              <video
                ref={videoRef}
                src="/deepnode.mp4"
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></video>
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,182,212,0.1)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 text-xs font-mono text-cyan-400 bg-black/50 px-2 py-1 rounded">DEEPNODE_CORE_V3.mp4</div>
            </div>
            <p className="text-slate-400 text-sm mt-6 text-center max-w-2xl font-mono">
              PROCESSING GLOBAL DATASETS WITH ZERO-TOLERANCE PRECISION. <br/>
              <span className="text-cyan-500">SYSTEM STATUS: FULLY AUTONOMOUS</span>
            </p>
          </div>
        </section>

        {/* DEEPNODE GAZETE KÜPÜRLERİ (SATIN ALMA HUNİSİ) */}
        <section className="max-w-6xl mx-auto w-full px-6 pb-32">
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
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Industrial-scale 'Fail-Closed' AI architectures. We integrate zero-hallucination autonomous agents into your existing ERP (SAP, Oracle) systems.</p>
              <button className="w-full py-4 bg-cyan-950/40 border border-cyan-500/50 text-cyan-400 font-mono text-xs uppercase tracking-widest hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300 rounded font-bold">
                ENTERPRISE LICENSE<br/><span className="text-lg">$2,500 / MO</span>
              </button>
            </article>
            <article className="p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-slate-900/60 transition-colors group animate-[pulse_5s_ease-in-out_infinite]">
              <div className="text-blue-500 font-mono text-sm tracking-widest mb-3">VOL 2. / TRAINING</div>
              <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tighter">DeepNode<br/><span className="text-blue-400">Edu.</span></h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Corporate intelligence transformation. We provide closed-circuit Prompt Engineering and AI integration masterclasses for your elite teams.</p>
              <button className="w-full py-4 bg-blue-950/40 border border-blue-500/50 text-blue-400 font-mono text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-black hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 rounded font-bold">
                TEAM MASTERCLASS<br/><span className="text-lg">$2,500 / PKG</span>
              </button>
            </article>
            <article className="p-8 hover:bg-slate-900/60 transition-colors group animate-[pulse_6s_ease-in-out_infinite]">
              <div className="text-green-500 font-mono text-sm tracking-widest mb-3">VOL 3. / MEDICAL</div>
              <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tighter">DeepNode<br/><span className="text-green-400">Health.</span></h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">The sanctity of medical data. HIPAA & GDPR compliant, Zero-Retention AI diagnostic pipelines that never learn or store patient data.</p>
              <button className="w-full py-4 bg-green-950/40 border border-green-500/50 text-green-400 font-mono text-xs uppercase tracking-widest hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300 rounded font-bold">
                CLINICAL LICENSE<br/><span className="text-lg">$2,500 / MO</span>
              </button>
            </article>
          </div>
        </section>

      </div>
      {/* DEEPNODE AI İMZA ALANI (Senin Videon) */}
      <div className="w-full max-w-5xl mx-auto px-8 mt-12 mb-8">
        <div className="relative w-full aspect-[21/9] bg-[#050505] border border-cyan-900/40 rounded-lg overflow-hidden group shadow-[0_0_30px_rgba(6,182,212,0.05)]">
          <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
          <video 
            ref={bottomVideoRef}
            src="/deepnode.mp4" 
            autoPlay={true} 
            loop={true} 
            muted={true} 
            playsInline={true} 
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen grayscale"
          ></video>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
            <div className="text-cyan-500/80 font-mono text-[10px] tracking-[0.4em] mb-3">
              [ THE ARCHITECT ]
            </div>
            <div className="text-xl md:text-3xl font-black tracking-widest text-slate-200 drop-shadow-lg">
              DEEPNODE <span className="text-cyan-600">AI</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}