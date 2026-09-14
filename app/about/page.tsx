'use client';

import React, { useState } from 'react';
import {
  Lightbulb,
  Settings,
  Handshake,
  Building2,
  ShieldCheck,
  Award,
  Target,
  Users,
} from 'lucide-react';

const CustomStyles = () => (
  <style>{`
    .clip-slanted {
      clip-path: polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    @media (max-width: 1024px) {
      .clip-slanted {
        clip-path: none;
      }
    }

    .dot-pattern {
      background-image: radial-gradient(#cbd5e1 1.5px, transparent 1.5px);
      background-size: 16px 16px;
    }
  `}</style>
);

const ModernFactoryBuildingSVG = () => (
  <svg viewBox="0 0 700 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#08101e" />
        <stop offset="40%" stopColor="#0f1f38" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <linearGradient id="wallGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#111827" />
        <stop offset="50%" stopColor="#1f2937" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="glowLight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
        <stop offset="30%" stopColor="rgba(224,242,254,0.4)" />
        <stop offset="100%" stopColor="rgba(56,189,248,0)" />
      </linearGradient>
      <linearGradient id="greenAccent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#15803d" />
        <stop offset="50%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
      <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect width="700" height="500" fill="url(#nightSky)" />
    <g transform="translate(40, 20)">
      <polygon points="120,80 660,130 660,340 120,380" fill="url(#wallGradient)" stroke="#374151" strokeWidth="1.5" />
      {[160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640].map((x, i) => (
        <line key={i} x1={x} y1={85 + (x - 120) * 0.09} x2={x} y2={375 - (x - 120) * 0.08} stroke="#1e293b" strokeWidth="2" />
      ))}
      {[170, 230, 290, 350, 410, 470, 530, 590].map((x, i) => {
        const yTop = 88 + (x - 120) * 0.09;
        return (
          <g key={i}>
            <ellipse cx={x} cy={yTop} rx="4" ry="2" fill="#ffffff" filter="url(#neonGlow)" />
            <polygon points={`${x - 3},${yTop} ${x + 3},${yTop} ${x + 32},${yTop + 160} ${x - 32},${yTop + 160}`} fill="url(#glowLight)" opacity="0.65" />
          </g>
        );
      })}
      <polygon points="120,290 660,270 660,295 120,315" fill="url(#greenAccent)" />
      <g opacity="0.85">
        <polygon points="130,320 650,298 650,336 130,370" fill="#0369a1" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="0.8" />
        {[170, 210, 250, 290, 330, 370, 410, 450, 490, 530, 570, 610].map((wx, idx) => (
          <line key={idx} x1={wx} y1={320 - (wx - 130) * 0.042} x2={wx} y2={370 - (wx - 130) * 0.065} stroke="#bae6fd" strokeWidth="1" opacity="0.6" />
        ))}
      </g>
      <g transform="translate(410, 165)">
        <text x="0" y="0" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontSize="36" fill="#ffffff" filter="url(#neonGlow)" letterSpacing="2">VCOMM</text>
        <text x="1" y="20" fontFamily="'Montserrat', sans-serif" fontWeight="600" fontSize="11" fill="#38bdf8" letterSpacing="3">TECHNOLOGY ENTERPRISE</text>
      </g>
    </g>
    <rect x="0" y="380" width="700" height="120" fill="#090e17" />
    <ellipse cx="380" cy="410" rx="280" ry="25" fill="#0284c7" opacity="0.15" />
    <ellipse cx="480" cy="420" rx="160" ry="12" fill="#38bdf8" opacity="0.12" />
    <path d="M 0 420 Q 70 395 140 420 Q 220 400 300 425 Q 400 398 500 420 L 500 500 L 0 500 Z" fill="#064e3b" opacity="0.8" />
  </svg>
);

const ZwimEmblemBadge = () => (
  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#1b4b8a] to-[#0a254c] border-2 border-white/80 p-1 flex items-center justify-center shadow-2xl shrink-0">
    <div className="w-full h-full rounded-full border border-dashed border-sky-300/60 flex flex-col items-center justify-center text-center p-1 text-white relative">
      <span className="text-[7px] tracking-widest text-sky-200 font-bold uppercase">CERTIFIED</span>
      <div className="w-6 h-6 my-0.5 relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-sky-400 rotate-45"></div>
        <div className="text-[9px] font-black tracking-wider text-white">ZWIM</div>
      </div>
      <span className="text-[6px] tracking-tight text-sky-300/90 font-medium">QUALITY ASSURED</span>
    </div>
  </div>
);

const CertificationsCluster = () => (
  <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 py-2 px-3">
    <div className="flex flex-col items-center justify-center text-center">
      <div className="border border-teal-700 rounded p-1 bg-white shadow-sm flex flex-col items-center w-16 h-12 justify-center">
        <span className="text-[11px] font-extrabold text-teal-800 tracking-wider">NOA</span>
        <svg viewBox="0 0 24 14" className="w-7 h-4 text-teal-600 fill-current"><path d="M1 8 L7 13 L22 1" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      <span className="text-[8px] font-bold text-slate-700 mt-1 uppercase leading-tight">ISO 14001<br /><span className="text-[7px] text-slate-500 font-normal">MANAGEMENT<br />CERTIFICATION</span></span>
    </div>
    <div className="h-14 w-[1px] bg-slate-300 hidden sm:block"></div>
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 border-2 border-amber-600 rotate-45 flex items-center justify-center shadow-xs">
        <div className="w-6 h-6 border border-amber-600 flex items-center justify-center -rotate-45"><span className="text-[8px] font-black text-amber-700">มอก.</span></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full border-2 border-blue-900 border-t-red-600 flex items-center justify-center text-[7px] font-bold text-blue-950">TIS</div>
        <span className="text-[7px] font-bold text-slate-800 mt-0.5 tracking-tighter leading-none">มอก.1955-2551</span>
        <span className="text-[6.5px] text-slate-500 font-semibold leading-none">TIS 1955-2551</span>
      </div>
    </div>
    <div className="flex flex-col items-center"><div className="w-11 h-11 rounded-full border-2 border-slate-700 flex items-center justify-center p-0.5"><div className="w-full h-full rounded-full border border-slate-400 flex items-center justify-center"><span className="text-[10px] font-extrabold tracking-wider text-slate-800 font-eng">CQC</span></div></div></div>
    <div className="flex items-center justify-center pl-1"><span className="text-3xl font-eng font-light text-slate-900 tracking-tighter select-none scale-y-110 font-sans">C€</span></div>
  </div>
);

export default function App() {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  return (
    <div className="min-h-screen mt-20 bg-[#08111d] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 font-thai antialiased selection:bg-blue-600 selection:text-white">
      <CustomStyles />
      <main className="w-full max-w-7xl bg-white shadow-2xl rounded-2xl md:rounded-3xl border border-slate-200/90 overflow-hidden relative flex flex-col gap-5 p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="absolute top-4 left-4 w-28 h-28 dot-pattern opacity-40 pointer-events-none"></div>
        <section className="relative w-full rounded-2xl md:rounded-3xl bg-white border border-slate-100 shadow-sm overflow-hidden flex flex-col lg:flex-row">
          <div className="w-full lg:w-[57%] p-6 sm:p-8 md:p-10 flex flex-col justify-between z-10">
            <div>
              <div className="mb-4">
                <h3 className="text-slate-800 text-lg sm:text-xl font-bold tracking-tight">เกี่ยวกับเรา</h3>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-dark tracking-tight font-eng mt-[-2px] uppercase">ABOUT US</h1>
                <div className="flex items-center gap-1.5 mt-2"><div className="w-10 h-1.5 bg-[#0c2340] rounded-full"></div><div className="w-2.5 h-1.5 bg-[#0c2340] rounded-full"></div></div>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#0c2340] text-white px-4 py-1.5 rounded-full shadow-md mt-2 mb-4"><div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"><Users className="w-3.5 h-3.5 text-sky-300" /></div><span className="text-sm font-semibold tracking-wide">บทนำ</span></div>
              <p className="text-slate-700 text-xs sm:text-[13px] md:text-sm leading-relaxed text-justify font-normal"><span className="font-semibold text-navy-dark">บริษัท วีคอมม์ ดิจิตอล (ประเทศไทย) จำกัด (VCOMM)</span> คือผู้เชี่ยวชาญ ระดับแนวหน้าในการส่งมอบเทคโนโลยี แสงสว่างหลอดไฟ LED คุณภาพสูงระดับ High-End และโซลูชันประหยัดพลังงานอย่างเป็นระบบ ด้วยประสบการณ์และความสำเร็จที่ได้รับความพึงพอใจสูงสุด จากพันธมิตรธุรกิจยาวนานกว่า 20 ปี เราไม่ใช่เพียงผู้จัดจำหน่ายโคมไฟทั่วไป แต่เราเป็น บริษัท เทคโนโลยี (Technology Enterprise) ที่มุ่งเน้นการวิจัย พัฒนา และออกแบบผลิตภัณฑ์ ตามหลักวิศวกรรมขั้นสูง เพื่อส่งมอบเทคโนโลยีลิขสิทธิ์เฉพาะที่ตอบโจทย์โครงสร้างพื้นฐานและภาคอุตสาหกรรมในยุคปัจจุบัน</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6 mt-6 border-t border-slate-200/90 text-slate-700">
              <div className="flex items-start gap-2.5 pr-2 sm:border-r border-slate-200"><div className="p-1.5 rounded-lg bg-sky-50 text-navy-dark shrink-0"><Lightbulb className="w-5 h-5 text-amber-500 stroke-[2.2]" /></div><p className="text-[11px] sm:text-xs font-medium leading-snug">เชี่ยวชาญด้านเทคโนโลยี แสงสว่างระดับ High-End</p></div>
              <div className="flex items-start gap-2.5 pr-2 sm:border-r border-slate-200"><div className="p-1.5 rounded-lg bg-sky-50 text-navy-dark shrink-0"><Settings className="w-5 h-5 text-blue-700 stroke-[2.2]" /></div><p className="text-[11px] sm:text-xs font-medium leading-snug">โซลูชันระบบประหยัด พลังงานแบบครบวงจร</p></div>
              <div className="flex items-start gap-2.5 pr-2 sm:border-r border-slate-200"><div className="p-1.5 rounded-lg bg-sky-50 text-navy-dark shrink-0"><Handshake className="w-5 h-5 text-indigo-700 stroke-[2.2]" /></div><p className="text-[11px] sm:text-xs font-medium leading-snug">ประสบการณ์และความสำเร็จที่ลูกค้าไว้วางใจ กว่า 20 ปี</p></div>
              <div className="flex items-start gap-2.5"><div className="p-1.5 rounded-lg bg-sky-50 text-navy-dark shrink-0"><Building2 className="w-5 h-5 text-teal-700 stroke-[2.2]" /></div><p className="text-[11px] sm:text-xs font-medium leading-snug">พัฒนาและออกแบบ ด้วยหลักวิศวกรรม ขั้นสูง</p></div>
            </div>
          </div>
          <div className="w-full lg:w-[43%] relative min-h-[320px] sm:min-h-[380px] lg:min-h-full overflow-hidden bg-slate-900 clip-slanted">
            <div className="w-full h-full min-h-[320px] lg:min-h-[460px]"><ModernFactoryBuildingSVG /></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b2f] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute bottom-5 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-6 flex items-center gap-3 bg-navy-dark/90 backdrop-blur-md p-2 sm:p-2.5 rounded-2xl border border-white/20 shadow-2xl"><ZwimEmblemBadge /><div className="flex-1 pr-2"><h4 className="text-white text-xs sm:text-sm md:text-base font-bold leading-tight">พันธมิตรทางธุรกิจ ยาวนาน กว่า 20 ปี</h4><p className="text-sky-200 text-[10px] sm:text-xs font-normal mt-0.5 tracking-wide">ขับเคลื่อนอนาคต ด้วยเทคโนโลยีที่เชื่อถือได้</p></div></div>
          </div>
        </section>
        <section className="w-full rounded-2xl md:rounded-3xl bg-white border border-slate-200/80 shadow-md overflow-hidden flex flex-col justify-between">
          <div className="p-6 sm:p-8 lg:p-9 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-between">
            <div className="w-full lg:w-3/5">
              <div className="flex items-center gap-3 mb-2"><div className="w-9 h-9 rounded-full bg-[#0c2340] flex items-center justify-center shadow-sm shrink-0"><ShieldCheck className="w-5 h-5 text-white" /></div><div><h2 className="text-lg sm:text-xl font-bold text-navy-dark leading-snug">มาตรฐานและการรับรองระดับสากล</h2><span className="text-xs sm:text-sm font-semibold text-slate-500 font-eng">(Global Certifications & Standards)</span></div></div>
              <p className="text-xs sm:text-[13px] text-slate-600 mt-2 mb-4 leading-relaxed font-normal">วีคอมม์ ดิจิตอล มุ่งมั่นส่งมอบเทคโนโลยีแสงสว่างที่เปี่ยมด้วยคุณภาพและความรับผิดชอบ โรงงานผลิตของเราได้รับการรับรองมาตรฐานในทุกมิติ เพื่อให้พันธมิตรธุรกิจมั่นใจได้สูงสุด</p>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0c2340] mt-1.5 shrink-0"></span><span><strong className="font-semibold text-slate-900">ระบบบริหารงานคุณภาพสากล :</strong> ผ่านการรับรองมาตรฐาน ISO 9001</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0c2340] mt-1.5 shrink-0"></span><span><strong className="font-semibold text-slate-900">การจัดการสิ่งแวดล้อมอย่างยั่งยืน :</strong> ผ่านการรับรองมาตรฐาน ISO 14001</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0c2340] mt-1.5 shrink-0"></span><span><strong className="font-semibold text-slate-900">มาตรฐานผลิตภัณฑ์เด่นชัด :</strong> ได้รับใบรับรองคุณภาพ CQC Certificate</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0c2340] mt-1.5 shrink-0"></span><span><strong className="font-semibold text-slate-900">โครงสร้างธุรกิจมั่นคง :</strong> ดำเนินการโปร่งใส ภายใต้ทะเบียนพาณิชย์และทุนจดทะเบียนที่ถูกต้อง <span className="text-slate-500 font-eng text-[11px] block sm:inline sm:ml-1">(Business License & Capital Registration)</span></span></li>
              </ul>
            </div>
            <div className="w-full lg:w-2/5 flex items-center justify-center lg:justify-end"><div className="w-full max-w-md bg-slate-50/70 border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs"><CertificationsCluster /></div></div>
          </div>
          <div className="bg-[#0c2340] text-white py-4 px-4 sm:px-8 border-t border-[#0c2340]"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {([
              [ShieldCheck, 'สินค้าคุณภาพสูง', 'ได้มาตรฐานสากล'],
              [Award, 'มั่นใจได้ในคุณภาพ', 'และความปลอดภัย'],
              [Target, 'ตอบโจทย์ทุกความต้องการ', 'ของลูกค้าอย่างมืออาชีพ'],
              [Users, 'เติบโตเคียงข้างธุรกิจ', 'คุณอย่างยั่งยืน'],
            ] as Array<[typeof ShieldCheck, string, string]>).map(([Icon, firstLine, secondLine], index) => {
              const pillar = index + 1;
              const PillarIcon = Icon as typeof ShieldCheck;
              return <div key={pillar} onMouseEnter={() => setActiveHighlight(pillar)} onMouseLeave={() => setActiveHighlight(null)} className={`flex items-center gap-3 transition-transform duration-200 cursor-default ${activeHighlight === pillar ? 'scale-[1.03]' : ''}`}><div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md"><PillarIcon className="w-6 h-6 text-navy-dark" /></div><div className="text-xs sm:text-sm font-semibold leading-tight text-slate-100">{firstLine}<br />{secondLine}</div></div>;
            })}
          </div></div>
        </section>
      </main>
    </div>
  );
}
