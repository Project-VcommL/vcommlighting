import { Building2, Users, Zap } from 'lucide-react';

const stats = [
    { icon: Building2, value: '20 +', title: 'YEARS EXPERIENCE', detail: 'ประสบการณ์มากกว่า 20 ปี' },
    { icon: Users, value: '1,000 +', title: 'PROJECTS COMPLETED', detail: 'โครงการสำเร็จมากกว่า 1,000 โครงการ' },
    { icon: Zap, value: '40-80%', title: 'ENERGY SAVING', detail: 'ประหยัดพลังงานสูงสุด 40-80%' },
];

export default function HomeStatsFooter() {
    return <footer className="relative z-30 w-full border-t border-green-700/50 bg-neon-green/10 py-5 backdrop-blur-md"><div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-3 md:gap-8 lg:px-8">{stats.map(({ icon: Icon, value, title, detail }, index) => <div key={title} className={`flex items-center gap-4 ${index < 2 ? 'border-b border-green-500/25 pb-4 md:border-b-0 md:border-r md:pb-0' : ''}`}><div className="rounded-lg border border-green-500/30 bg-green-900/30 p-2.5"><Icon className="h-9 w-9 text-green-400" strokeWidth={1.5} /></div><div><div className="text-3xl font-extrabold leading-none tracking-tight text-green-400">{value}</div><div className="mt-1 text-xs font-semibold tracking-wider text-slate-200">{title}</div><div className="text-[12px] font-light text-green-200/80">{detail}</div></div></div>)}</div></footer>;
}
