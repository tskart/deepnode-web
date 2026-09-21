export default function DeepNodeManifesto() {
  return (
    <main className="relative min-h-screen text-slate-300 font-sans selection:bg-cyan-500 selection:text-white overflow-hidden bg-black">
      
      {/* 1. GERÇEK UZAY / SİBER ATMOSFER ARKA PLANI (Hareketli Nebulalar) */}
      <div className="fixed inset-0 z-0">
        {/* Derin Uzay Siyahı ve Yıldız Tozu Hissi */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#05050f] to-black"></div>
        
        {/* Yavaşça dönen Siber-Mavi Nebula */}
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-cyan-900/10 blur-[120px] animate-[spin_60s_linear_infinite]"></div>
        
        {/* Yavaşça dönen Derin-Mor Nebula */}
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
            {/* DİL SEÇİCİ */}
            <select className="bg-transparent border border-cyan-500/30 text-cyan-400 text-xs font-mono py-1 px-2 rounded outline-none cursor-pointer hover:border-cyan-400 transition-colors bg-black">
              <option value="en">EN - ENGLISH</option>
              <option value="de">DE - DEUTSCH</option>
              <option value="ar">AR - العربية</option>
              <option value="tr">TR - TÜRKÇE</option>
              <option value="fr">FR - FRANÇAIS</option>
              <option value="es">ES - ESPAÑOL</option>
            </select>

            {/* 7/24 GUARDING */}
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

        {/* ANA VİTRİN (HERO SECTION - ENGLISH) */}
        <section className="flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center">
          {/* TİCARİ SIR: TYPE-SAFE YERİNE PROPRIETARY YAZDIK */}
          <div className="inline-block px-5 py-2 mb-8 border border-cyan-500/40 rounded-full bg-cyan-500/10 text-cyan-400 text-xs md:text-sm font-mono tracking-widest animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            [ PROPRIETARY NEURAL ENGINE ]
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-2xl">
            Zero Hallucination. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">
              Absolute Autonomy.
            </span>
          </h2>
          
          <p className="max-w-2xl text-base md:text-lg lg:text-xl text-slate-300 mb-12 leading-relaxed bg-white/5 p-4 md:p-6 rounded-lg backdrop-blur-md border border-white/10 shadow-2xl">
            We build GDPR-compliant <strong className="text-white">"Process & Destroy"</strong> AI data pipelines. Your corporate data is never stored, and our models never hallucinate. Engineered with German precision.
          </p>
        </section>

        {/* YENİ: VİDEO DEMO ALANI */}
        <section className="max-w-4xl mx-auto w-full px-6 pb-24">
          <div className="flex flex-col items-center">
            <h3 className="text-cyan-500 font-mono text-sm tracking-widest mb-4 animate-pulse">WATCH THE CORE IN ACTION</h3>
            <div className="w-full aspect-video bg-slate-900/80 border border-cyan-500/30 rounded-xl relative flex items-center justify-center group overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:border-cyan-400 transition-colors duration-500 cursor-pointer">
              {/* Oynat Butonu */}
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/40 transition-all duration-300 backdrop-blur-md z-10 border border-cyan-400/50 group-hover:scale-110">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-cyan-400 border-b-[12px] border-b-transparent ml-2"></div>
              </div>
              {/* Video Arka Plan Görseli (Gelecekte buraya gerçek <video> etiketi gelecek) */}
              <img src="/2.jpeg" alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale" />
              <div className="absolute bottom-4 left-4 text-xs font-mono text-cyan-400">DEMO_INTERFACE_V3.mp4</div>
            </div>
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

          {/* 3'lü Gazete Küpürü Grid (Her biri yanıp sönme efektli) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl relative z-20">
            
            {/* DeepNode TECH */}
            <article className="p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-slate-900/60 transition-colors group animate-[pulse_4s_ease-in-out_infinite]">
              <div className="text-cyan-500 font-mono text-sm tracking-widest mb-3">VOL 1. / B2B AI</div>
              <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tighter">DeepNode<br/><span className="text-cyan-400">Tech.</span></h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Industrial-scale 'Fail-Closed' AI architectures. We integrate zero-hallucination autonomous agents into your existing ERP (SAP, Oracle) systems.</p>
              
              {/* SATIN ALMA BUTONU: 2500$ */}
              <button className="w-full py-4 bg-cyan-950/40 border border-cyan-500/50 text-cyan-400 font-mono text-xs uppercase tracking-widest hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300 rounded font-bold">
                ENTERPRISE LICENSE<br/><span className="text-lg">$2,500 / MO</span>
              </button>
            </article>

            {/* DeepNode EDU */}
            <article className="p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-slate-900/60 transition-colors group animate-[pulse_5s_ease-in-out_infinite]">
              <div className="text-blue-500 font-mono text-sm tracking-widest mb-3">VOL 2. / TRAINING</div>
              <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tighter">DeepNode<br/><span className="text-blue-400">Edu.</span></h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Corporate intelligence transformation. We provide closed-circuit Prompt Engineering and AI integration masterclasses for your elite teams.</p>
              
              {/* SATIN ALMA BUTONU: 2500$ */}
              <button className="w-full py-4 bg-blue-950/40 border border-blue-500/50 text-blue-400 font-mono text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-black hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 rounded font-bold">
                TEAM MASTERCLASS<br/><span className="text-lg">$2,500 / PKG</span>
              </button>
            </article>

            {/* DeepNode HEALTH */}
            <article className="p-8 hover:bg-slate-900/60 transition-colors group animate-[pulse_6s_ease-in-out_infinite]">
              <div className="text-green-500 font-mono text-sm tracking-widest mb-3">VOL 3. / MEDICAL</div>
              <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tighter">DeepNode<br/><span className="text-green-400">Health.</span></h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">The sanctity of medical data. HIPAA & GDPR compliant, Zero-Retention AI diagnostic pipelines that never learn or store patient data.</p>
              
              {/* SATIN ALMA BUTONU: 2500$ */}
              <button className="w-full py-4 bg-green-950/40 border border-green-500/50 text-green-400 font-mono text-xs uppercase tracking-widest hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300 rounded font-bold">
                CLINICAL LICENSE<br/><span className="text-lg">$2,500 / MO</span>
              </button>
            </article>

          </div>
        </section>

      </div>
    </main>
  );
}