import React from 'react';
import { Handshake } from 'lucide-react';

export default function TrustClientsSection() {
  return (
    <section className="w-full rounded-2xl md:rounded-3xl bg-white border border-slate-200/80 shadow-md overflow-hidden flex flex-col justify-between">
      <div className="p-6 sm:p-8 lg:p-9">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-full bg-[#0c2340] flex items-center justify-center shadow-sm shrink-0">
            <Handshake className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-navy-dark leading-snug">
              ความไว้วางใจจากองค์กรชั้นนำ
            </h2>
            <span className="text-xs sm:text-sm font-semibold text-slate-500 font-eng">
              (Trusted by Leading Organizations)
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-[13px] text-slate-600 mb-4 leading-relaxed font-normal">
          เราภูมิใจที่ได้เป็นพันธมิตรด้านแสงสว่างและโซลูชันประหยัดพลังงาน
          ให้กับองค์กรชั้นนำในหลากหลายอุตสาหกรรมทั่วประเทศไทย
          ด้วยความไว้วางใจจากลูกค้าที่ร่วมงานกับเรามาอย่างยาวนาน
        </p>

        <div className="rounded-xl overflow-hidden border border-slate-200">
          <img
            src="/image21/Gemini_Generated_Image_2gis7e2gis7e2gis.jpeg"
            alt="ความไว้วางใจจากองค์กรชั้นนำ"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}