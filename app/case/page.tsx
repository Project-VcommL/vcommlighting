// app/case/page.tsx
import type { Metadata } from 'next';
import CaseGrid from '@/components/CaseGrid'; // นำเข้า CaseGrid

export const metadata: Metadata = {
    title: 'ผลงาน (Case Collection) - VCOMM Lighting',
    description: 'รวบรวมผลงานและโครงการประหยัดพลังงาน LED ที่ประสบความสำเร็จของ VCOMM และ Bolbo Consulting',
};

export default function CasePage() {
    return (
        <section className="py-16 sm:py-24 bg-[#08111d] text-gray-200">
            <div className="pt-16 sm:pt-24"> {/* Adjusted top padding */}

                {/* ส่วนหัวของหน้า (Case Collection) */}
                <header className="text-center mb-12 animate-fadeInUp px-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-neon-blue tracking-tight drop-shadow-[0_0_10px_rgba(0,243,255,0.6)]">
                        Case Collection & Project Success
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                        เราสร้างความเชื่อมั่นด้วยผลลัพธ์: การลดการใช้พลังงาน 20%-80% ผ่านโซลูชันแสงสว่างและอุปกรณ์คุณภาพสูงของเรา
                    </p>
                </header>

                {/* ส่วนแสดง Case Grid */}
                <CaseGrid />

            </div>
        </section>
    );
}