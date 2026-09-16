'use client';

import { useState } from 'react';
import HomeHero from '@/components/HomeHero';
import HomeStatsFooter from '@/components/HomeStatsFooter';
import InquiryModal from '@/components/InquiryModal';
import ProductShowcase from '@/components/ProductShowcase';
import InnovationLanding from '@/components/InnovationLanding';
import VisionMission from '@/components/VisionMission';
import ProductsSection from '@/components/ProductsSection';

export default function HomePage() {
    const [modalTitle, setModalTitle] = useState('ติดต่อสอบถามข้อมูล');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const openModal = (title: string) => {
        setModalTitle(title);
        setIsSubmitted(false);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#08111d] font-sans text-white selection:bg-green-500 selection:text-white" style={{ backgroundImage: "linear-gradient(90deg, rgba(8,17,29,.94) 0%, rgba(8,17,29,.88) 45%, rgba(8,17,29,.65) 100%), radial-gradient(circle at 80% 25%, rgba(34,197,94,.15), transparent 60%), url('/image21/page_001-1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <HomeHero onOpenModal={openModal} />
            <HomeStatsFooter />
            <ProductShowcase />
            <InnovationLanding />
            <VisionMission />
            <ProductsSection />
            {isModalOpen && <InquiryModal title={modalTitle} isSubmitted={isSubmitted} onClose={() => setIsModalOpen(false)} onSubmit={() => setIsSubmitted(true)} />}
        </div>
    );
}
