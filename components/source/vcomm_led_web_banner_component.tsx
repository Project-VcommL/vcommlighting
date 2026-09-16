import React, { useEffect } from 'react';
import Image from 'next/image';

// ==========================================
// TYPES & INTERFACES
// ==========================================
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

interface StatItemProps {
  icon: React.ReactNode;
  text: React.ReactNode;
}

// ==========================================
// SVG VECTOR COMPONENTS
// ==========================================

export const HighBaySVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 300 240" className={className}>
    <defs>
      <linearGradient id="metalBodyComp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="50%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
    </defs>
    <path d="M 150 20 C 142 20 138 28 138 35 C 138 42 144 48 150 48 C 156 48 162 42 162 35 C 162 28 158 20 150 20 Z" fill="none" stroke="#94a3b8" strokeWidth="6" />
    <rect x="144" y="44" width="12" height="14" rx="2" fill="#475569" />
    <path d="M 110 58 L 190 58 L 180 78 L 120 78 Z" fill="url(#metalBodyComp)" stroke="#64748b" strokeWidth="1" />
    <path d="M 50 140 Q 150 120 250 140 L 230 80 Q 150 70 70 80 Z" fill="url(#metalBodyComp)" />
    {Array.from({ length: 15 }).map((_, i) => (
      <path key={i} d={`M ${65 + i * 12} 132 L ${65 + i * 12 + 3} 82`} stroke="#475569" strokeWidth="2" strokeLinecap="round" />
    ))}
    <ellipse cx="150" cy="145" rx="125" ry="38" fill="#1e293b" stroke="#475569" strokeWidth="3" />
    <ellipse cx="150" cy="145" rx="115" ry="32" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
    <ellipse cx="150" cy="145" rx="95" ry="25" fill="#020617" />
  </svg>
);

export const FloodlightSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 260 220" className={className}>
    <defs>
      <linearGradient id="frameGradComp" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>
    <path d="M 40 180 L 15 195 L 15 130 L 35 120" stroke="#64748b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M 220 180 L 245 195 L 245 130 L 225 120" stroke="#64748b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M 15 195 L 245 195" stroke="#475569" strokeWidth="6" strokeLinecap="round" fill="none" />
    <rect x="35" y="30" width="190" height="135" rx="10" fill="url(#frameGradComp)" stroke="#475569" strokeWidth="4" />
    <rect x="48" y="42" width="164" height="111" rx="6" fill="#020617" stroke="#334155" strokeWidth="2" />
    {[
      { x: 58, y: 52 }, { x: 132, y: 52 },
      { x: 58, y: 100 }, { x: 132, y: 100 }
    ].map((pos, idx) => (
      <g key={idx}>
        <rect x={pos.x} y={pos.y} width="70" height="42" rx="4" fill="#0f172a" stroke="#1e293b" />
      </g>
    ))}
    <circle cx="42" cy="37" r="3" fill="#94a3b8" />
    <circle cx="218" cy="37" r="3" fill="#94a3b8" />
    <circle cx="42" cy="158" r="3" fill="#94a3b8" />
    <circle cx="218" cy="158" r="3" fill="#94a3b8" />
  </svg>
);

export const BulbSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 160 220" className={className}>
    <defs>
      <radialGradient id="bulbGlassComp" cx="45%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
        <stop offset="70%" stopColor="#f0f9ff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.3" />
      </radialGradient>
      <linearGradient id="baseMetalComp" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#94a3b8" />
        <stop offset="35%" stopColor="#f1f5f9" />
        <stop offset="70%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>
    </defs>
    <path d="M 62 165 L 98 165 L 96 172 L 64 172 Z" fill="url(#baseMetalComp)" />
    <path d="M 64 172 L 96 172 L 94 179 L 66 179 Z" fill="url(#baseMetalComp)" />
    <path d="M 66 179 L 94 179 L 92 186 L 68 186 Z" fill="url(#baseMetalComp)" />
    <path d="M 70 186 L 90 186 L 85 193 L 75 193 Z" fill="#334155" />
    <path d="M 52 125 L 108 125 L 100 165 L 60 165 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
    <path d="M 52 125 L 108 125 L 104 135 L 56 135 Z" fill="#e2e8f0" />
    <path d="M 80 20 C 42 20 30 55 30 80 C 30 102 48 120 54 125 L 106 125 C 112 120 130 102 130 80 C 130 55 118 20 80 20 Z" fill="url(#bulbGlassComp)" />
  </svg>
);

export const GlobeIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 0 4 10 15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0-4-10 15.3 15.3 0 0 0 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

export const ShieldCheckIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const TimerIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l3 2" />
    <path d="M12 2v3" />
    <path d="M9 2h6" />
  </svg>
);

export const Award20Icon = () => (
  <div className="w-10 h-10 rounded-full border-2 border-[#1a2b56] flex items-center justify-center font-black text-[#1a2b56] text-sm tracking-tight">
    20+
  </div>
);

export const PeopleGroupIcon = () => (
  <svg className="w-7 h-7 text-[#1a2b56]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

export const EcoLeafIcon = () => (
  <svg className="w-7 h-7 text-[#1a2b56]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 8C8 10 59 16.17 3.82 21.34l1.42 1.42c5.17-5.17 11.34-4.18 13.34-13.18H17z" opacity="0.3" />
    <path d="M21 3v2c0 9.94-7.06 18-16 18h-2v-2c0-8.94 8.06-16 18-16zm-3.5 3.5C10.84 7.2 5.86 12.3 5.1 19.1 11.9 18.34 17 13.36 17.5 6.5z" />
  </svg>
);

// ==========================================
// SUB-COMPONENTS
// ==========================================

export const HeroLeftContent: React.FC = () => (
  <div
    className="lg:col-span-7 p-6 sm:p-10 md:p-12 lg:pr-16 flex flex-col justify-center relative z-10 bg-white"
    style={{
      backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
      backgroundSize: `22px 22px`
    }}
  >
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-bold leading-[1.3] text-[#122244]">
        “ <span className="text-[#102a6b] font-extrabold">VCOMM</span> ยกระดับองค์กรด้วยเทคโนโลยีแสงสว่างอัจฉริยะ
        <br />
        <span className="text-[#102a6b]">ลดต้นทุนพลังงานสูงสุด </span>
        <span className="text-[#102a6b] font-extrabold">40-80%</span>{' '}
        <span className="text-[#38bdf8] font-extrabold">อย่างยั่งยืน</span> ”
      </h1>

      <div className="w-16 h-[5px] bg-[#1a2e5a] rounded-full my-6"></div>

      <p className="text-base sm:text-lg md:text-[19px] text-slate-700 font-medium leading-relaxed max-w-xl">
        ขับเคลื่อนธุรกิจและองค์กรของคุณสู่อนาคตที่ยั่งยืน ด้วยโซลูชั่นโคมไฟและหลอดไฟ LED นวัตกรรมระดับ High-End ประสบการณ์ยาวนานกว่า 20 ปี
      </p>
    </div>
  </div>
);

export const HeroRightGraphic: React.FC = () => (
  <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full overflow-hidden bg-[#091122]">
    <Image
      src="/image21/Gemini_Generated_Image_1qczsc1qczsc1qcz.jpeg"
      alt="VCOMM LED Lighting Products"
      fill
      sizes="(min-width: 1024px) 42vw, 100vw"
      priority
      className="object-cover"
    />
  </div>
);

export const RibbonBadge: React.FC = () => (
  <div className="relative z-30 flex justify-center -mt-6 sm:-mt-7 mb-4">
    <div
      className="relative bg-[#1a2333] text-white px-8 sm:px-14 py-2.5 sm:py-3.5 rounded-xl shadow-xl border border-slate-700/60 flex items-center justify-center transform hover:scale-105 transition-transform"
      style={{
        clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)',
        minWidth: '280px'
      }}
    >
      <span className="text-base sm:text-xl font-bold tracking-wide text-slate-100">
        จุดเด่นที่ทำให้ <span className="text-[#38bdf8] font-extrabold ml-1">แตกต่าง</span>
      </span>
    </div>
  </div>
);

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle, description }) => (
  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:border-sky-200 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group">
    <div>
      <div className="w-16 h-16 rounded-full bg-[#16274c] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-[#10244c] leading-snug">
        {title}
      </h3>
      <p className="text-sm font-semibold text-[#10244c] mb-3">
        {subtitle}
      </p>
      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
    <div className="w-12 h-1 bg-[#10244c] rounded-full mt-6 group-hover:w-20 transition-all duration-300"></div>
  </div>
);

export const StatItem: React.FC<StatItemProps> = ({ icon, text }) => (
  <div className="flex items-center justify-center gap-3 p-3 text-center md:text-left">
    {icon}
    <span className="text-sm sm:text-base font-bold text-[#10244c] leading-tight">
      {text}
    </span>
  </div>
);

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-200 py-6 px-2 sm:px-4 md:px-8 font-['Prompt',sans-serif] text-slate-800 flex flex-col items-center justify-center selection:bg-sky-500 selection:text-white">
      
      {/* Main Banner Box */}
      <div className="w-full max-w-[1380px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 relative transition-all duration-500">
        
        {/* Top Split Hero Section */}
        <div className="relative min-h-[520px] lg:min-h-[580px] grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          <HeroLeftContent />
          <HeroRightGraphic />
        </div>

        {/* Center Overlay Ribbon */}
        <RibbonBadge />

        {/* Feature Cards Grid Section */}
        <div className="px-4 sm:px-8 lg:px-12 py-6 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<GlobeIcon />}
              title="นวัตกรรมผลิตระดับโลก"
              subtitle="(Global Innovation)"
              description="โรงงานร่วมทุนร่วมผลิตระหว่างประเทศจีนและญี่ปุ่น"
            />
            <FeatureCard
              icon={<ShieldCheckIcon />}
              title="มาตรฐานเกรดอุตสาหกรรม"
              subtitle="(Ultra Grade)"
              description="ผลผลิตภัณฑ์สว่าง ทนทาน คุ้มค่าสูงสุด ทนต่อสภาวะแวดล้อมเหมาะสำหรับ โรงงานอุตสาหกรรม คลังสินค้า และสนามฟุตบอล"
            />
            <FeatureCard
              icon={<TimerIcon />}
              title="ผลลัพธ์ที่พิสูจน์ได้จริง"
              subtitle="(Proven Efficiency)"
              description="ช่วยลดการใช้พลังงานในองค์กร พร้อมยืดอายุการใช้งานยาวนานกว่า 8 ปี"
            />
          </div>
        </div>

        {/* Footer Stats Bar */}
        <div className="border-t border-slate-200/80 bg-white py-5 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <StatItem icon={<Award20Icon />} text={<>ประสบการณ์ยาวนาน<br />กว่า 20 ปี</>} />
            <StatItem icon={<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center"><ShieldCheckIcon /></div>} text={<>มาตรฐานระดับสากล<br />เชื่อถือได้</>} />
            <StatItem icon={<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center"><PeopleGroupIcon /></div>} text={<>ทีมงานมืออาชีพ<br />บริการครบวงจร</>} />
            <StatItem icon={<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center"><EcoLeafIcon /></div>} text={<>ประหยัดพลังงาน<br />เพื่ออนาคตที่ยั่งยืน</>} />
          </div>
        </div>

      </div>

      {/* Footer Branding Credit */}
      <div className="mt-4 text-xs text-slate-500 font-medium text-center">
        © VCOMM Intelligent Lighting Technology Solutions. All Rights Reserved.
      </div>

    </div>
  );
}