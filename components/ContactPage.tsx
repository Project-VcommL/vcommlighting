import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Users,
  Clock,
  Handshake,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Send,
  X
} from 'lucide-react';

const CustomStyles = () => (
  <style>{`
    .dot-pattern-bg {
      background-image: radial-gradient(#cbd5e1 1.3px, transparent 1.3px);
      background-size: 15px 15px;
    }

    /* Laser flare animation effect under VCOMM logo */
    @keyframes flarePulse {
      0%, 100% { opacity: 0.75; transform: scaleX(0.95); }
      50% { opacity: 1; transform: scaleX(1.05); }
    }

    .animate-flare {
      animation: flarePulse 3.5s ease-in-out infinite;
    }
  `}</style>
);

const LineIcon = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neon-green flex items-center justify-center shadow-md shrink-0 select-none">
    <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8 fill-white">
      {/* LINE speech bubble shape */}
      <path d="M 32 18 C 32 11.4 26.6 6 20 6 C 13.4 6 8 11.4 8 18 C 8 23.9 12.6 28.8 18.5 29.8 C 19.3 30 20.4 30.3 20.7 30.9 C 20.9 31.4 20.8 32.2 20.7 32.7 C 20.7 32.7 20.4 34.6 20.3 35.1 C 20.1 35.8 20.6 36 21 35.7 C 23.3 34.1 29.5 29.8 31.2 26.8 C 31.7 25.9 32 22 32 18 Z" />
      {/* LINE text */}
      <text
        x="20"
        y="21"
        fontFamily="'Montserrat', sans-serif"
        fontWeight="900"
        fontSize="8.5"
        fill="#06c755"
        textAnchor="middle"
        letterSpacing="0.8"
      >
        LINE
      </text>
    </svg>
  </div>
);

const GmailIcon = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-slate-200/90 shadow-md flex items-center justify-center shrink-0 select-none">
    <svg viewBox="0 0 36 36" className="w-7 h-7 sm:w-8 sm:h-8">
      {/* Multi-colored official Gmail M logo */}
      <path d="M 6 10 L 6 26 C 6 27.1 6.9 28 8 28 L 12 28 L 12 16 L 18 20.5 L 24 16 L 24 28 L 28 28 C 29.1 28 30 27.1 30 26 L 30 10 L 18 19 L 6 10 Z" fill="#ea4335" />
      {/* Blue / Red / Yellow / Green Corner folds */}
      <polygon points="6,10 18,19 12,16 6,12" fill="#c5221f" />
      <polygon points="30,10 18,19 24,16 30,12" fill="#c5221f" />
      <polygon points="6,10 12,14.5 12,28 8,28 6,26" fill="#4285f4" opacity="0.95" />
      <polygon points="30,10 24,14.5 24,28 28,28 30,26" fill="#34a853" opacity="0.95" />
      <polygon points="12,14.5 18,19 12,16" fill="#fbbc04" opacity="0.9" />
    </svg>
  </div>
);

const NavyPhoneIcon = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-navy-dark flex items-center justify-center text-white shadow-md shrink-0 select-none">
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 stroke-current fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Rotated phone handset */}
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      {/* Calling sound waves */}
      <path d="M14.5 4.5 C 16.5 6, 17.5 8, 17.5 10.5" strokeWidth="2" />
      <path d="M17.5 2 C 20.5 4, 22 7, 22 11" strokeWidth="2" />
    </svg>
  </div>
);

const NavyLocationIcon = () => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-navy-dark flex items-center justify-center text-white shadow-md shrink-0 select-none">
    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
  </div>
);

export default function App() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setShowMessageModal(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#08111d] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 font-thai text-slate-800 antialiased selection:bg-blue-800 selection:text-white">
      <CustomStyles />

      {/* Main 16:9 Presentation Canvas Container matching original aspect ratio */}
      <main className="w-full max-w-7xl bg-white shadow-2xl rounded-2xl md:rounded-3xl border border-slate-200 relative overflow-hidden flex flex-col justify-between min-h-[640px] md:min-h-[720px]">

        {/* Subtle decorative dot pattern in bottom-left */}
        <div className="absolute bottom-6 left-6 w-56 h-56 dot-pattern-bg opacity-35 pointer-events-none z-0" />

        {/* ========================================================
            TOP & CENTER GRID: SPLIT LAYOUT (LEFT CONTACT & RIGHT PHOTO)
        ======================================================== */}
        <div className="relative z-10 w-full flex-1 flex flex-col lg:flex-row">

          {/* ----------------------------------------------------
              LEFT PANEL: CONTACT HEADER & CONTACT INFO ROWS
          ---------------------------------------------------- */}
          <section className="w-full lg:w-[50%] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between z-10">
            <div>
              {/* CONTACT Header with Blue Underline & Accent Dot */}
              <div className="mb-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-navy-dark tracking-tight font-eng uppercase">
                  CONTACT
                </h1>

                {/* Horizontal Blue bar + Blue dot accent */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-12 h-1.5 bg-navy-dark rounded-full"></div>
                  <div className="w-2.5 h-1.5 bg-navy-dark rounded-full"></div>
                </div>
              </div>

              {/* Sub-heading Company Name */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-navy-dark tracking-tight font-eng mb-8 sm:mb-10">
                VCOMM DIGITAL (THAILAND) CO., LTD.
              </h2>

              {/* ------------------------------------------------
                  4 CONTACT ITEM ROWS (ICON + DIVIDER + INFO)
              ------------------------------------------------ */}
              <div className="space-y-5 sm:space-y-6">

                {/* ROW 1: ADDRESS */}
                <div className="group flex items-center gap-3 sm:gap-4">
                  <NavyLocationIcon />

                  {/* Vertical hairline divider */}
                  <div className="h-10 sm:h-12 w-[1.5px] bg-slate-300 group-hover:bg-blue-600 transition-colors"></div>

                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 font-eng tracking-wide leading-tight">
                        518/132 SOI RAMKHAMHAENG39 (THEPLEELA1)
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 font-eng tracking-wide leading-tight mt-0.5">
                        WANGTONGGLANG, BANGKOK THAILAND 10310
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy('518/132 SOI RAMKHAMHAENG39 (THEPLEELA1) WANGTONGGLANG, BANGKOK THAILAND 10310', 'address')}
                      title="คัดลอกที่อยู่"
                      className="ml-2 p-1.5 rounded-lg text-slate-400 hover:text-navy-dark hover:bg-slate-100 transition-all"
                    >
                      {copiedItem === 'address' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* ROW 2: TELEPHONE */}
                <div className="group flex items-center gap-3 sm:gap-4">
                  <NavyPhoneIcon />

                  {/* Vertical hairline divider */}
                  <div className="h-9 sm:h-10 w-[1.5px] bg-slate-300 group-hover:bg-blue-600 transition-colors"></div>

                  <div className="flex-1 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="tel:0613288595"
                        className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900 font-eng hover:text-blue-700 transition-colors"
                      >
                        061-3288595
                      </a>
                      <span className="text-slate-400 font-bold font-eng">,</span>
                      <a
                        href="tel:0658791285"
                        className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900 font-eng hover:text-blue-700 transition-colors"
                      >
                        065-8791285
                      </a>
                    </div>

                    <button
                      onClick={() => handleCopy('061-3288595, 065-8791285', 'phone')}
                      title="คัดลอกเบอร์โทร"
                      className="ml-2 p-1.5 rounded-lg text-slate-400 hover:text-navy-dark hover:bg-slate-100 transition-all"
                    >
                      {copiedItem === 'phone' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* ROW 3: LINE OFFICIAL */}
                <div className="group flex items-center gap-3 sm:gap-4">
                  <LineIcon />

                  {/* Vertical hairline divider */}
                  <div className="h-9 sm:h-10 w-[1.5px] bg-slate-300 group-hover:bg-neon-green transition-colors"></div>

                  <div className="flex-1 flex items-center justify-between">
                    <p className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900 font-eng tracking-tight">
                      LINE ID: <span className="text-neon-green font-black">VCOMMLIGHTING</span>
                    </p>

                    <button
                      onClick={() => handleCopy('VCOMMLIGHTING', 'line')}
                      title="คัดลอก LINE ID"
                      className="ml-2 p-1.5 rounded-lg text-slate-400 hover:text-neon-green hover:bg-emerald-50 transition-all"
                    >
                      {copiedItem === 'line' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* ROW 4: GMAIL */}
                <div className="group flex items-center gap-3 sm:gap-4">
                  <GmailIcon />

                  {/* Vertical hairline divider */}
                  <div className="h-9 sm:h-10 w-[1.5px] bg-slate-300 group-hover:bg-red-500 transition-colors"></div>

                  <div className="flex-1 flex items-center justify-between">
                    <a
                      href="mailto:contactvcomm@gmail.com"
                      className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 font-eng tracking-tight hover:text-red-600 transition-colors break-all"
                    >
                      CONTACTVCOMM@GMAIL.COM
                    </a>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleCopy('contactvcomm@gmail.com', 'email')}
                        title="คัดลอกอีเมล"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all"
                      >
                        {copiedItem === 'email' ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => setShowMessageModal(true)}
                        title="ส่งข้อความด่วน"
                        className="hidden sm:inline-flex items-center gap-1 ml-1 px-2.5 py-1 text-xs font-semibold text-navy-dark bg-slate-100 hover:bg-navy-dark hover:text-white rounded-lg transition-all"
                      >
                        <Send className="w-3 h-3" />
                        <span>ส่งข้อความ</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick action button on mobile */}
            <div className="mt-8 pt-4 lg:hidden">
              <button
                onClick={() => setShowMessageModal(true)}
                className="w-full py-2.5 px-4 bg-navy-dark text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>ติดต่อเราทันที</span>
              </button>
            </div>
          </section>

          {/* ----------------------------------------------------
              RIGHT PANEL: DIAGONAL CURVED MASK & BUILDING PHOTOGRAPHY
          ---------------------------------------------------- */}
          <section className="w-full lg:w-[50%] relative min-h-[380px] sm:min-h-[460px] lg:min-h-full overflow-hidden flex flex-col justify-between">

            {/* Smooth S-Curve Divider separating White panel and Building Section */}
            <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                {/* Clean organic white arc cutting into the right imagery */}
                <path
                  d="M 0 0 L 14 0 Q 32 45, 0 100 Z"
                  fill="#ffffff"
                />
              </svg>
            </div>

            {/* Top Right Dark Navy Corner Banner with VCOMM Branding & Glow */}
            <div className="absolute top-0 right-0 w-full sm:w-[460px] h-[140px] sm:h-[160px] z-20 pointer-events-none">
              <svg
                viewBox="0 0 460 160"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Triangular navy geometric wedge */}
                <polygon points="120,0 460,0 460,160 0,160" fill="#0b1e36" />

                {/* Subtle dark gradient overlay */}
                <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#081526" />
                  <stop offset="100%" stopColor="#0e2849" />
                </linearGradient>
                <polygon points="120,0 460,0 460,160 0,160" fill="url(#headerGrad)" opacity="0.95" />
              </svg>

              {/* Corporate Header Text inside Navy Wedge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pl-14 sm:pl-16 pr-6 pt-2">

                {/* VCOMM Logo */}
                <div className="relative">
                  <h3 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-widest text-white font-eng leading-none select-none">
                    VCOMM
                  </h3>

                  {/* Cyan / Blue Horizontal Laser Light Flare underneath */}
                  <div className="w-48 sm:w-56 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-1.5 animate-flare"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-20 h-5 bg-sky-400/30 blur-md pointer-events-none"></div>
                </div>

                {/* Subtitle Company Name */}
                <p className="text-[9px] sm:text-[11px] font-bold text-slate-300 font-eng tracking-wider uppercase mt-2">
                  DIGITAL (THAILAND) CO., LTD.
                </p>
              </div>
            </div>

            {/* Architectural Building Visual Illustration */}
            <div className="w-full h-full min-h-[380px] lg:min-h-full">
              <img
                src="/image21/Gemini_Generated_Image_1qczsc1qczsc1qcz.jpeg"
                alt="VCOMM Office Building"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

          </section>

        </div>


        {/* ========================================================
            BOTTOM ROW: 4 NAVY CORPORATE VALUE PILLARS
        ======================================================== */}
        <footer className="relative z-20 w-full bg-navy-dark text-white py-4 sm:py-5 px-4 sm:px-8 md:px-12 rounded-b-2xl md:rounded-b-3xl border-t border-slate-200/20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

            {/* Pillar 1: เชื่อถือได้ บริการด้วยความจริงใจ */}
            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/90 bg-white/10 group-hover:bg-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                <ShieldCheck className="w-6 h-6 text-white group-hover:text-navy-dark transition-colors" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  เชื่อถือได้
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-200 font-light leading-tight mt-0.5">
                  บริการด้วยความจริงใจ
                </p>
              </div>
            </div>

            {/* Pillar 2: ทีมงานมืออาชีพ พร้อมให้คำปรึกษา */}
            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/90 bg-white/10 group-hover:bg-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                <Users className="w-6 h-6 text-white group-hover:text-navy-dark transition-colors" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  ทีมงานมืออาชีพ
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-200 font-light leading-tight mt-0.5">
                  พร้อมให้คำปรึกษา
                </p>
              </div>
            </div>

            {/* Pillar 3: ตอบสนองรวดเร็ว ใส่ใจทุกความต้องการ */}
            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/90 bg-white/10 group-hover:bg-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                <Clock className="w-6 h-6 text-white group-hover:text-navy-dark transition-colors" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  ตอบสนองรวดเร็ว
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-200 font-light leading-tight mt-0.5">
                  ใส่ใจทุกความต้องการ
                </p>
              </div>
            </div>

            {/* Pillar 4: พันธมิตรทางธุรกิจ ที่เติบโตไปด้วยกัน */}
            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/90 bg-white/10 group-hover:bg-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                <Handshake className="w-6 h-6 text-white group-hover:text-navy-dark transition-colors" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  พันธมิตรทางธุรกิจ
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-200 font-light leading-tight mt-0.5">
                  ที่เติบโตไปด้วยกัน
                </p>
              </div>
            </div>

          </div>
        </footer>

      </main>


      {/* ========================================================
          MODAL: QUICK CONTACT & INQUIRY FORM
      ======================================================== */}
      {showMessageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">

            {/* Modal Header */}
            <div className="bg-navy-dark text-white p-4 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">ติดต่อสอบถามข้อมูล</h3>
                  <p className="text-xs text-slate-300">VCOMM DIGITAL (THAILAND)</p>
                </div>
              </div>
              <button
                onClick={() => setShowMessageModal(false)}
                className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {formSent ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800">ส่งข้อความเรียบร้อยแล้ว</h4>
                  <p className="text-xs text-slate-500">ทีมงานจะติดต่อกลับไปยังท่านโดยเร็วที่สุด</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      ชื่อ - นามสกุล หรือชื่อบริษัท *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="เช่น คุณสมชาย (บจก. เอบีซี)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] text-xs sm:text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        เบอร์โทรติดต่อ *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="08X-XXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        อีเมล
                      </label>
                      <input
                        type="email"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      ข้อความ / ผลิตภัณฑ์ที่สนใจ
                    </label>
                    <textarea
                      rows={3}
                      placeholder="ระบุข้อความหรือรุ่นหลอดไฟที่ต้องการขอใบเสนอราคา..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] text-xs sm:text-sm resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowMessageModal(false)}
                      className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors"
                    >
                      ยกเลิก
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-navy-dark text-white rounded-lg text-xs font-semibold hover:bg-blue-950 transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>ส่งข้อมูล</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}