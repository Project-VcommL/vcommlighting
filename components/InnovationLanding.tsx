'use client';

import React, { useState } from 'react';

// SVG Icons matching the original presentation exactly
const LightbulbIcon = () => (
  <svg className="w-7 h-7 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const ThermometerIcon = () => (
  <svg className="w-7 h-7 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
  </svg>
);

const PowerDriveIcon = () => (
  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#1e3a8a" />
    <path d="M13 10h-2l1.5-4.5h-2.5L9 12h2l-1.5 4.5" stroke="#ffffff" strokeWidth="2" />
  </svg>
);

const FactoryPlugIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="M12 11v3" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const EngineeringIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 0 4 10 15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0-4-10 15.3 15.3 0 0 0 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const IMAGES = {
  highbay: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  heatsink: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  powerDrive: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  factory: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
};

export default function InnovationLanding() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-transparent py-6 px-2 sm:px-4 md:px-8 font-['Prompt',sans-serif] text-slate-800 flex justify-center items-center">
      <div className="max-w-[1380px] w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-slate-200 text-slate-900">

        {/* ================= HEADER SECTION ================= */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e3d] tracking-tight mb-2">
            นวัตกรรมหลักของเรา
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            เพื่อประสิทธิภาพสูงสุดของระบบแสงสว่าง VCOMM ได้มุ่งเน้น การยกระดับเทคโนโลยีสำคัญ 3 ด้าน
          </p>
        </header>

        {/* ================= 3 INNOVATION CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

          {/* Card 01 */}
          <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              {/* Card Header */}
              <div className="flex items-start gap-3 mb-4">
                <span className="bg-[#0c1e3d] text-white font-bold text-lg px-3 py-1 rounded-md shrink-0">
                  01
                </span>
                <div>
                  <h3 className="font-bold text-[#0c1e3d] text-base leading-snug">
                    การกระจายแสงอัจฉริยะ
                  </h3>
                  <p className="text-slate-500 text-xs font-semibold">(LED Light Distribution)</p>
                </div>
              </div>

              {/* Content & Visual */}
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7 space-y-3">
                  <div className="w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center shadow-xs">
                    <LightbulbIcon />
                  </div>
                  <p className="text-[12px] leading-relaxed text-slate-700 font-normal">
                    คำนวณและออกแบบ มุมกระจายแสงให้เหมาะสมกับ พื้นที่ใช้งานจริง เพื่อความสบายตา เพิ่มทัศนวิสัยและ ลดการสูญเสียแสง โดยเปล่าประโยชน์
                  </p>
                </div>
                <div className="col-span-5 h-36 rounded-xl overflow-hidden border border-slate-200 shadow-inner relative group">
                  <img
                    src={IMAGES.highbay}
                    alt="LED Light Distribution"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              {/* Card Header */}
              <div className="flex items-start gap-3 mb-4">
                <span className="bg-[#0c1e3d] text-white font-bold text-lg px-3 py-1 rounded-md shrink-0">
                  02
                </span>
                <div>
                  <h3 className="font-bold text-[#0c1e3d] text-base leading-snug">
                    ระบบระบายความร้อนขั้นสูง
                  </h3>
                  <p className="text-slate-500 text-xs font-semibold">(Heat Dissipation)</p>
                </div>
              </div>

              {/* Content & Visual */}
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7 space-y-3">
                  <div className="w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center shadow-xs relative">
                    <ThermometerIcon />
                    <span className="absolute -right-1 -bottom-1 text-cyan-600 font-black text-xs">≈</span>
                  </div>
                  <p className="text-[12px] leading-relaxed text-slate-700 font-normal">
                    นวัตกรรม การระบายความร้อนที่มีประสิทธิภาพสูง ช่วยคงประสิทธิภาพความสว่าง และยืดอายุการใช้งาน ของหลอดไฟให้ยาวนานสูงสุด
                  </p>
                </div>
                <div className="col-span-5 h-36 rounded-xl overflow-hidden border border-slate-200 shadow-inner relative group">
                  <img
                    src={IMAGES.heatsink}
                    alt="Heat Dissipation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Airflow overlay graphics */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full border-2 border-cyan-400/80 animate-pulse flex items-center justify-center">
                      <span className="text-cyan-300 text-xs font-mono">COOL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              {/* Card Header */}
              <div className="flex items-start gap-3 mb-4">
                <span className="bg-[#0c1e3d] text-white font-bold text-lg px-3 py-1 rounded-md shrink-0">
                  03
                </span>
                <div>
                  <h3 className="font-bold text-[#0c1e3d] text-base leading-snug">
                    ระบบขับเคลื่อนพลังงาน
                  </h3>
                  <p className="text-slate-500 text-xs font-semibold">ที่เสถียร (Power Drive)</p>
                </div>
              </div>

              {/* Content & Visual */}
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0c1e3d] flex items-center justify-center shadow-xs">
                    <PowerDriveIcon />
                  </div>
                  <p className="text-[12px] leading-relaxed text-slate-700 font-normal">
                    วงจรขับเคลื่อน พลังงานไฟฟ้า ที่นิ่ง เสถียร ปลอดภัย และ ลดการสูญเสียพลังงาน ช่วยให้ประหยัดค่าไฟฟ้า ในระยะยาวอย่างยั่งยืน
                  </p>
                </div>
                <div className="col-span-5 h-36 rounded-xl overflow-hidden border border-slate-200 shadow-inner relative group">
                  <img
                    src={IMAGES.powerDrive}
                    alt="Power Drive"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/20"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= SECTION 2: GLOBAL MANUFACTURING & PRESENCE ================= */}
        <section className="bg-[#dcdfe5] rounded-2xl p-6 sm:p-8 mb-8 border border-slate-300/70">

          {/* Section Title */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1e3d] tracking-tight">
              เครือข่ายการผลิตและมาตรฐานสากล
            </h2>
            <p className="text-lg sm:text-xl font-bold text-[#0c1e3d] mt-1">
              - Manufacturing & Global Presence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Paragraph Text Content Left Side */}
            <div className="lg:col-span-5 bg-slate-100/90 rounded-xl p-5 border border-slate-300/80 flex items-center">
              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-normal">
                ผลิตภัณฑ์ของ VCOMM ขับเคลื่อนด้วย <span className="font-bold text-[#0c1e3d]">“นวัตกรรมระดับโลก”</span> ภายใต้โรงงานร่วมทุนของสองผู้นำด้านเทคโนโลยีอย่าง <span className="font-semibold text-slate-900">ประเทศจีนและประเทศญี่ปุ่น</span> นำมาซึ่งกระบวนการผลิตและการควบคุมคุณภาพเกรด <span className="font-semibold text-slate-900">Ultra Grade</span> ที่แข็งแกร่ง ทนทาน และตอบสนองต่อมาตรฐานวิศวกรรมอุตสาหกรรมขั้นสูงสุด ด้วยความพร้อมด้านระบบโลจิสติกส์ การนำเข้า และคลังสินค้าที่ได้มาตรฐาน เราพร้อมส่งมอบบริการและดูแลโครงการ ขนาดใหญ่ในภูมิภาคเอเชียตะวันออกเฉียงใต้ ไม่ว่าจะเป็นในประเทศไทย เวียดนาม มาเลเซีย อินโดนีเซีย และประเทศพันธมิตร อย่างครอบคลุม
              </p>
            </div>

            {/* Factory Image & Navy Overlay Banner Right Side */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden relative min-h-[300px] flex flex-col justify-between border border-slate-400/50 shadow-md">

              {/* Background Image of Modern Factory */}
              <div className="absolute inset-0 z-0">
                <img
                  src={IMAGES.factory}
                  alt="VCOMM Global Manufacturing Factory"
                  className="w-full h-full object-cover"
                />

                {/* World map graphic watermark & logo badge overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/30"></div>

                {/* VCOMM Logo on building */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0 bg-white/95 px-2 py-1 rounded-md shadow-lg border border-slate-300 flex items-center">
                  <img
                    src="/logos/1789656248083.jpg"
                    alt="VCOMM Logo"
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Empty Spacer */}
              <div className="relative z-10 h-32 sm:h-44"></div>

              {/* Dark Navy Blue Grid Overlay Banner */}
              <div className="relative z-10 bg-[#0c1e3d]/95 backdrop-blur-md text-white p-4 sm:p-5 border-t border-slate-700/50">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">

                  {/* Feature 1 */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full border border-slate-400/50 bg-slate-800/60 flex items-center justify-center shrink-0">
                      <FactoryPlugIcon />
                    </div>
                    <p className="text-[11px] sm:text-[12px] leading-tight font-medium px-1">
                      นวัตกรรมระดับโลก จากโรงงานร่วมทุน จีน - ญี่ปุ่น
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full border border-slate-400/50 bg-slate-800/60 flex items-center justify-center shrink-0">
                      <ShieldCheckIcon />
                    </div>
                    <p className="text-[11px] sm:text-[12px] leading-tight font-medium px-1">
                      ผลิตภัณฑ์เกรด Ultra Grade แข็งแกร่ง ทนทาน
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full border border-slate-400/50 bg-slate-800/60 flex items-center justify-center shrink-0">
                      <EngineeringIcon />
                    </div>
                    <p className="text-[11px] sm:text-[12px] leading-tight font-medium px-1">
                      มาตรฐานวิศวกรรม อุตสาหกรรมขั้นสูงสุด
                    </p>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full border border-slate-400/50 bg-slate-800/60 flex items-center justify-center shrink-0">
                      <GlobeIcon />
                    </div>
                    <p className="text-[11px] sm:text-[12px] leading-tight font-medium px-1">
                      พร้อมให้บริการ และดูแลโครงการ ครอบคลุมทั่วเอเชีย
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= FOOTER ICON BAR ================= */}
        <footer className="pt-4 border-t border-slate-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">

            {/* Footer Item 1 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#0c1e3d] flex items-center justify-center shrink-0 shadow-sm">
                <StarIcon />
              </div>
              <div>
                <h4 className="font-bold text-[#0c1e3d] text-xs sm:text-sm leading-snug">
                  นวัตกรรม
                </h4>
                <p className="text-slate-500 text-[11px] font-medium">
                  ที่เชื่อถือได้
                </p>
              </div>
            </div>

            {/* Footer Item 2 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#0c1e3d] flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheckIcon />
              </div>
              <div>
                <h4 className="font-bold text-[#0c1e3d] text-xs sm:text-sm leading-snug">
                  คุณภาพระดับสากล
                </h4>
                <p className="text-slate-500 text-[11px] font-medium">
                  เกรด Ultra Grade
                </p>
              </div>
            </div>

            {/* Footer Item 3 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#0c1e3d] flex items-center justify-center shrink-0 shadow-sm">
                <UsersIcon />
              </div>
              <div>
                <h4 className="font-bold text-[#0c1e3d] text-xs sm:text-sm leading-snug">
                  บริการมืออาชีพ
                </h4>
                <p className="text-slate-500 text-[11px] font-medium">
                  ใส่ใจทุกขั้นตอน
                </p>
              </div>
            </div>

            {/* Footer Item 4 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#0c1e3d] flex items-center justify-center shrink-0 shadow-sm">
                <TruckIcon />
              </div>
              <div>
                <h4 className="font-bold text-[#0c1e3d] text-xs sm:text-sm leading-snug">
                  ระบบโลจิสติกส์มาตรฐาน
                </h4>
                <p className="text-slate-500 text-[11px] font-medium">
                  พร้อมส่งมอบทั่วเอเชีย
                </p>
              </div>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}