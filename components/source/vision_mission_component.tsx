import React, { useState } from 'react';
import { 
  Eye, 
  Target, 
  Lightbulb, 
  Leaf, 
  Users, 
  Globe, 
  Copy, 
  Check, 
  Edit3, 
  Eye as ViewIcon, 
  RotateCcw,
  Sparkles,
  Monitor,
  Smartphone
} from 'lucide-react';

export interface VisionMissionData {
  title: string;
  subtitle: string;
  vision: {
    title: string;
    englishTitle: string;
    description: string;
    imageUrl: string;
  };
  mission: {
    title: string;
    englishTitle: string;
    description: string;
    imageUrl: string;
  };
  features: Array<{
    id: number;
    icon: string;
    line1: string;
    line2: string;
  }>;
}

const defaultData: VisionMissionData = {
  title: "วิสัยทัศน์และพันธกิจ",
  subtitle: "VISION & MISSION",
  vision: {
    title: "วิสัยทัศน์",
    englishTitle: "(Vision):",
    description: "เป็นผู้นำด้านนวัตกรรมแสงสว่างอัจฉริยะและพลังงานสะอาด ที่ช่วยขับเคลื่อนภาคธุรกิจและสังคมไปสู่ความยั่งยืนทางสิ่งแวดล้อม",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
  },
  mission: {
    title: "พันธกิจ",
    englishTitle: "(Mission):",
    description: "มุ่งมั่นส่งมอบผลิตภัณฑ์ LED เกรดอุตสาหกรรมที่ดีที่สุดพร้อมโซลูชั่นการประหยัดพลังงานที่มีประสิทธิภาพสูง เพื่อสร้างความคุ้มค่าสูงสุดและช่วยลดต้นทุนให้แก่พันธมิตรธุรกิจของเรา",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop"
  },
  features: [
    { id: 1, icon: "lightbulb", line1: "นวัตกรรม", line2: "เพื่ออนาคต" },
    { id: 2, icon: "leaf", line1: "คุ้มค่า", line2: "ประหยัดพลังงาน" },
    { id: 3, icon: "users", line1: "สร้างคุณค่าสูงสุด", line2: "ให้พันธมิตรธุรกิจ" },
    { id: 4, icon: "globe", line1: "ขับเคลื่อนธุรกิจและสังคม", line2: "สู่ความยั่งยืน" }
  ]
};

export const VisionMissionDisplay: React.FC<{ data: VisionMissionData }> = ({ data }) => {
  return (
    <section className="w-full max-w-6xl mx-auto p-4 md:p-8 font-['Prompt',sans-serif] bg-white text-[#0c2340]">
      {/* Import Google Fonts - Prompt */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Header Section */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="w-12 h-1.5 bg-[#0c2340] rounded-full inline-block"></span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0c2340] flex items-center gap-2 flex-wrap">
            <span>{data.title}</span>
            <span className="text-[#0c2340] font-bold">- {data.subtitle}</span>
          </h2>
        </div>
      </div>

      {/* Cards Container */}
      <div className="space-y-6">
        
        {/* CARD 1: VISION */}
        <div className="bg-[#f0f3f8] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row min-h-[220px]">
          {/* Content Left */}
          <div className="flex-1 p-6 md:p-8 flex items-center gap-6">
            {/* Double Ring Icon Badge */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#0c2340] flex items-center justify-center p-1.5 bg-white shadow-inner">
                <div className="w-full h-full rounded-full bg-[#0c2340] flex items-center justify-center text-white">
                  <Eye className="w-10 h-10 md:w-12 md:h-12 stroke-[1.8]" />
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-[1.5px] h-28 bg-gray-300 flex-shrink-0"></div>

            {/* Text Box */}
            <div className="flex-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0c2340]">
                  {data.vision.title}
                </h3>
                <span className="text-xl md:text-2xl font-bold text-[#0c2340]">
                  {data.vision.englishTitle}
                </span>
              </div>

              {/* Title Line with Square Dot */}
              <div className="flex items-center my-3">
                <div className="h-[2.5px] w-36 bg-[#0c2340]"></div>
                <div className="w-2 h-2 bg-[#0c2340]"></div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal max-w-xl">
                {data.vision.description}
              </p>
            </div>
          </div>

          {/* Image Right with Custom Angled Polygon Overlays */}
          <div className="w-full md:w-[45%] lg:w-[48%] relative min-h-[200px] md:min-h-[240px] overflow-hidden">
            {/* Layered Decorative Geometric Bands */}
            <div 
              className="absolute inset-0 bg-[#0c2340] opacity-90 z-10 hidden md:block"
              style={{
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)'
              }}
            ></div>
            <div 
              className="absolute inset-0 bg-[#1e3a8a] opacity-80 z-20 hidden md:block"
              style={{
                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 5% 50%)'
              }}
            ></div>

            {/* Main Image with Left Arrow/Chevron Cut */}
            <div 
              className="absolute inset-0 z-30 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: `url('${data.vision.imageUrl}')`,
                clipPath: window.innerWidth >= 768 
                  ? 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 10% 50%)' 
                  : 'none'
              }}
            >
              {/* Overlay for depth */}
              <div className="w-full h-full bg-gradient-to-r from-[#0c2340]/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* CARD 2: MISSION */}
        <div className="bg-[#f0f3f8] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row min-h-[220px]">
          {/* Content Left */}
          <div className="flex-1 p-6 md:p-8 flex items-center gap-6">
            {/* Double Ring Target Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#0c2340] flex items-center justify-center p-1.5 bg-white shadow-inner">
                <div className="w-full h-full rounded-full bg-[#0c2340] flex items-center justify-center text-white">
                  <Target className="w-10 h-10 md:w-12 md:h-12 stroke-[1.8]" />
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-[1.5px] h-28 bg-gray-300 flex-shrink-0"></div>

            {/* Text Box */}
            <div className="flex-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0c2340]">
                  {data.mission.title}
                </h3>
                <span className="text-xl md:text-2xl font-bold text-[#0c2340]">
                  {data.mission.englishTitle}
                </span>
              </div>

              {/* Title Line with Square Dot */}
              <div className="flex items-center my-3">
                <div className="h-[2.5px] w-36 bg-[#0c2340]"></div>
                <div className="w-2 h-2 bg-[#0c2340]"></div>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal max-w-xl">
                {data.mission.description}
              </p>
            </div>
          </div>

          {/* Image Right with Custom Angled Polygon Overlays */}
          <div className="w-full md:w-[45%] lg:w-[48%] relative min-h-[200px] md:min-h-[240px] overflow-hidden">
            {/* Layered Decorative Geometric Bands */}
            <div 
              className="absolute inset-0 bg-[#0c2340] opacity-90 z-10 hidden md:block"
              style={{
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)'
              }}
            ></div>
            <div 
              className="absolute inset-0 bg-[#1e3a8a] opacity-80 z-20 hidden md:block"
              style={{
                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 5% 50%)'
              }}
            ></div>

            {/* Main Image with Left Chevron Cut */}
            <div 
              className="absolute inset-0 z-30 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: `url('${data.mission.imageUrl}')`,
                clipPath: window.innerWidth >= 768 
                  ? 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 10% 50%)' 
                  : 'none'
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-[#0c2340]/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURE BAR */}
        <div className="bg-[#0b2341] rounded-2xl md:rounded-full py-4 px-6 text-white shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-blue-800/60">
            {data.features.map((item, idx) => (
              <div 
                key={item.id} 
                className={`flex items-center gap-3 justify-start sm:justify-center ${idx !== 0 ? 'pt-3 sm:pt-0 sm:pl-4' : ''}`}
              >
                {/* Icon Container */}
                <div className="w-11 h-11 rounded-full bg-white text-[#0c2340] flex items-center justify-center flex-shrink-0 shadow-md">
                  {item.icon === 'lightbulb' && <Lightbulb className="w-6 h-6 text-emerald-600 fill-emerald-100" />}
                  {item.icon === 'leaf' && <Leaf className="w-6 h-6 text-emerald-600 fill-emerald-100" />}
                  {item.icon === 'users' && <Users className="w-6 h-6 text-emerald-600 fill-emerald-100" />}
                  {item.icon === 'globe' && <Globe className="w-6 h-6 text-emerald-600 fill-emerald-100" />}
                </div>

                {/* Text Lines */}
                <div className="text-xs md:text-sm font-medium leading-snug">
                  <div className="text-gray-100">{item.line1}</div>
                  <div className="text-gray-300 font-light">{item.line2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default function App() {
  const [data, setData] = useState<VisionMissionData>(defaultData);

  return (
    <div className="min-h-screen bg-gray-50 p-3 md:p-6 font-sans text-slate-800">
      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto">
        <VisionMissionDisplay data={data} />
      </main>
    </div>
  );
}