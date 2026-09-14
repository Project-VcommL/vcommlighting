'use client';

import { FileText, Menu, X } from 'lucide-react';

interface HomeHeaderProps {
    onOpenModal: (title: string) => void;
}

const menuItems = [
    ['HOME', '/'],
    ['ABOUT US', '/about'],
    ['PRODUCTS', '/products'],
    ['CASE COLLECTION', '/case'],
    ['CONTACT US', '/service'],
] as const;

export default function HomeHeader({ onOpenModal }: HomeHeaderProps) {
    return (
        <header className="relative z-40 w-full border-b border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
                <a href="/" className="flex items-center transition hover:opacity-95">
                    <span className="flex skew-x-[-6deg] items-center rounded bg-white px-4 py-1 text-2xl font-black tracking-tight text-navy-dark shadow-md sm:text-3xl">VCOMM</span>
                </a>
                <nav className="hidden items-center space-x-8 text-sm font-light text-slate-300 md:flex">
                    {menuItems.map(([label, href], index) => <a key={label} href={href} className={index === 0 ? 'border-b-2 border-green-400 pb-0.5 font-medium tracking-wide text-green-400' : 'tracking-wide transition hover:text-green-300'}>{label}</a>)}
                </nav>
                <div className="flex items-center gap-3">
                    <button onClick={() => onOpenModal('ขอใบเสนอราคา (REQUEST A QUOTE)')} className="flex items-center gap-2 rounded bg-neon-green px-4 py-2 text-xs font-semibold shadow-lg shadow-green-950/50 transition hover:bg-green-600">
                        <FileText className="h-4 w-4" /><span className="tracking-wide">REQUEST A QUOTE</span>
                    </button>
                    <HomeMobileMenu />
                </div>
            </div>
        </header>
    );
}

function HomeMobileMenu() {
    return <details className="group md:hidden">
        <summary className="flex cursor-pointer list-none p-2 text-gray-300 hover:text-white [&::-webkit-details-marker]:hidden"><Menu className="h-6 w-6 group-open:hidden" /><X className="hidden h-6 w-6 group-open:block" /></summary>
        <nav className="absolute left-0 right-0 top-full space-y-3 border-b border-green-800/40 bg-navy-dark/95 px-6 py-4 text-sm">
            {menuItems.map(([label, href]) => <a key={label} href={href} className="block text-slate-200 hover:text-green-300">{label}</a>)}
        </nav>
    </details>;
}
