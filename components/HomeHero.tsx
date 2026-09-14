'use client';

import { Calendar, FileText, Shield, ShieldCheck, Sprout, Wrench } from 'lucide-react';

interface HomeHeroProps {
    onOpenModal: (title: string) => void;
}

const features = [
    { icon: Sprout, title: 'ENERGY SAVING', detail: <>ประหยัดพลังงาน<br />สูงสุด 40-80%</> },
    { icon: ShieldCheck, title: 'HIGH QUALITY', detail: <>มาตรฐานสากล<br />ทนทาน และปลอดภัย</> },
    { icon: Wrench, title: 'ONE STOP SERVICE', detail: <>บริการครบวงจร<br />ตั้งแต่ให้คำปรึกษา<br className="hidden sm:block" />ถึงหลังการขาย</> },
];

export default function HomeHero({ onOpenModal }: HomeHeroProps) {
    return <main className="relative z-20 mx-auto flex w-full max-w-7xl flex-grow items-center px-4 pb-12 pt-24 sm:px-6 lg:px-8"><div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
            <div className="space-y-1"><h1 className="text-3xl font-extrabold uppercase leading-[1.15] tracking-tight sm:text-5xl lg:text-[56px]">Smart Lighting</h1><div className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-neon-green sm:text-6xl lg:text-[68px]">Solutions</div><div className="text-2xl font-extrabold uppercase leading-[1.15] tracking-tight sm:text-4xl lg:text-[42px]">For Better Tomorrow</div></div>
            <div className="text-lg leading-relaxed text-slate-200 sm:text-xl"><p>โซลูชั่นระบบแสงสว่าง LED</p><p>เพื่อโรงงานและอุตสาหกรรมอย่างยั่งยืน</p></div>
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">{features.map(({ icon: Icon, title, detail }) => <div key={title} className="flex flex-col items-center space-y-2 text-center sm:items-start sm:text-left"><div className="flex h-12 w-12 items-center justify-center rounded-full border border-green-500/60 bg-green-950/40 shadow-inner shadow-green-500/20"><Icon className="h-6 w-6 text-green-400" strokeWidth={1.8} /></div><div><p className="text-xs font-bold tracking-wider text-slate-100">{title}</p><p className="mt-0.5 text-[11px] font-light leading-snug text-slate-300">{detail}</p></div></div>)}<div className="flex flex-col items-center space-y-2 text-center sm:items-start sm:text-left"><div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-green-500/60 bg-green-950/40 shadow-inner shadow-green-500/20"><Shield className="h-6 w-6 text-green-400" strokeWidth={1.8} /><span className="absolute text-xs font-bold text-green-400">5</span></div><div><p className="text-xs font-bold tracking-wider text-slate-100">WARRANTY</p><p className="mt-0.5 text-[11px] font-light leading-snug text-slate-300">รับประกันสินค้า<br />สูงสุด 5 ปี</p></div></div></div>
            <div className="flex flex-wrap gap-4 pt-3"><button onClick={() => onOpenModal('ขอใบเสนอราคา LED อุตสาหกรรม')} className="flex items-center gap-2 rounded bg-neon-green px-6 py-2.5 text-sm font-medium shadow-md shadow-green-900/40 transition hover:bg-neon-green"><FileText className="h-4 w-4" />ขอใบเสนอราคา</button><button onClick={() => onOpenModal('นัดหมายสำรวจหน้างานโรงงาน')} className="flex items-center gap-2 rounded border border-cyan-400/80 bg-navy-dark/60 px-6 py-2.5 text-sm font-medium text-cyan-200 transition hover:bg-navy-dark/80"><Calendar className="h-4 w-4 text-cyan-300" />นัดหมาย สำรวจหน้างาน</button></div>
        </div>
    </div></main>;
}
