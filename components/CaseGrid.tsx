// components/CaseGrid.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '../hooks/use-i18n';
import { X } from 'lucide-react';

// *** 1. Data Definitions ***
interface CaseItem {
    id: string;
    imageSrc: string;
    title: string;          // e.g., "Project: Factory Lighting Upgrade"
    location?: string;      // e.g., "Amata Nakorn"
    description?: string;   // Short description
    slug?: string;          // ถ้ามี → เปิดหน้า /case/[slug] แทน modal
}

const CASE_ITEMS: CaseItem[] = [
    {
        id: '1',
        imageSrc: '/images/cases/led-mining-lamp-1.jpg',
        title: 'Project: Industrial Mining Lighting',
        location: 'Saraburi',
        description: 'Installed high-durability LED mining lamps for enhanced visibility and safety.'
    },
    {
        id: '2',
        imageSrc: '/images/cases/led-mining-lamp-2.jpg',
        title: 'Project: Heavy Machinery Workshop',
        location: 'Rayong',
        description: 'High-bay lighting solution for heavy equipment maintenance area.'
    },
    // ... (Add more items or fetch from API)
    {
        id: '3',
        imageSrc: '/images/cases/led-mining-lamp-3.jpg',
        title: 'Project: Warehouse Distribution Center',
        location: 'Samut Prakan',
        description: 'Energy-efficient lighting for 24/7 logistics operation.'
    },
    {
        id: '4',
        imageSrc: '/images/cases/daily-chemical-packaging.jpg',
        title: 'Project: Chemical Packaging Line',
        location: 'Chonburi',
        description: 'Clean room lighting standards for chemical manufacturing.'
    },
    {
        id: '5',
        imageSrc: '/images/cases/mechanical-equipment.jpg',
        title: 'Project: Mechanical Equipment Plant',
        location: 'Ayutthaya',
        description: 'Optimized lighting for precision mechanical assembly.'
    },
    {
        id: '6',
        imageSrc: '/images/cases/led-straight-tube-lamp.jpg',
        title: 'Project: Office Building Retrofit',
        location: 'Bangkok',
        description: 'Replaced florescent tubes with LED Straight Tube Lamps for 60% energy savings.'
    },
    {
        id: 'page-01',
        slug: 'project-1',
        imageSrc: '/image21/page_011.png',
        title: 'Project 1',
    },
    {
        id: 'page-02',
        slug: 'project-2',
        imageSrc: '/image21/page_012.png',
        title: 'Project 2',
    },
    {
        id: 'page-03',
        slug: 'project-3',
        imageSrc: '/image21/page_013.png',
        title: 'Project 3',
    },
    {
        id: 'page-04',
        slug: 'project-4',
        imageSrc: '/image21/page_014.png',
        title: 'Project 4',
    },
    {
        id: 'page-05',
        slug: 'project-5',
        imageSrc: '/image21/page_015.png',
        title: 'Project 5',
    },
    {
        id: 'page-06',
        slug: 'project-6',
        imageSrc: '/image21/page_016.png',
        title: 'Project 6',
    },
    {
        id: 'page-07',
        slug: 'project-7',
        imageSrc: '/image21/page_017.png',
        title: 'Project 7',
    },
    {
        id: 'page-08',
        slug: 'project-8',
        imageSrc: '/image21/page_018.png',
        title: 'Project 8',
    },
    {
        id: 'page-09',
        slug: 'project-9',
        imageSrc: '/image21/page_019.png',
        title: 'Project 9',
    },
];

// *** 2. CaseCard Component ***
const CaseCard = ({ item, onClick }: { item: CaseItem; onClick: (item: CaseItem) => void }) => {
    const cardContent = (
        <>
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
                        View Project
                    </span>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-100 group-hover:text-neon-blue transition-colors">
                    {item.title}
                </h3>
                {item.location && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center">
                        <span className="mr-1">📍</span> {item.location}
                    </p>
                )}
            </div>
        </>
    );

    const cardClassName =
        'group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-white/10 block';

    if (item.slug) {
        return (
            <Link href={`/case/${item.slug}`} className={cardClassName}>
                {cardContent}
            </Link>
        );
    }

    return (
        <div className={cardClassName} onClick={() => onClick(item)}>
            {cardContent}
        </div>
    );
};

export default function CaseGrid() {
    const { t } = useI18n(); // Use hook
    const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="section-title text-neon-blue text-center mb-10 border-none">
                {t('case.section_title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CASE_ITEMS.map((item) => (
                    <CaseCard
                        key={item.id}
                        item={item}
                        onClick={setSelectedCase}
                    />
                ))}
            </div>

            {/* Simple Modal for Case Detail */}
            {selectedCase && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCase(null)}>
                    <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row relative" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute top-4 right-4 z-10 p-2 bg-white/50 rounded-full hover:bg-white text-gray-800 transition-colors"
                            onClick={() => setSelectedCase(null)}
                        >
                            <X size={24} />
                        </button>

                        <div className="w-full md:w-1/2 relative h-64 md:h-auto bg-gray-200">
                            <Image
                                src={selectedCase.imageSrc}
                                alt={selectedCase.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCase.title}</h3>
                            {selectedCase.location && (
                                <p className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wider">
                                    LOCATION: {selectedCase.location}
                                </p>
                            )}
                            <div className="prose text-gray-600">
                                <p>{selectedCase.description}</p>
                                <p className="mt-4 text-sm text-gray-400 italic">
                                    More details about the installation process, energy savings results, and client testimonials would go here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}