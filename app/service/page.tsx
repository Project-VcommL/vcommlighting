// app/service/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactCtaSection from '@/components/ContactCtaSection';

// *** ข้อมูลเมตาสำหรับ SEO (โดเมนหลัก vcommlingting.com) ***
export const metadata: Metadata = {
    title: 'บริการ (Service) - VCOMM Lighting: Consulting + Digitalization',
    description: 'โซลูชัน Consulting + Digitalization แบบครบวงจรเพื่อประสิทธิภาพด้านพลังงานสูงสุดสำหรับอุตสาหกรรมการผลิต',
};

export default function ServicePage() {
    return (
        <section className="py-16 sm:py-24 bg-[#08111d] text-gray-200">
            <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center pt-16 sm:pt-24">

                {/* หัวข้อหลัก */}
                {/* หัวข้อหลัก */}
                <header className="text-center mb-12 animate-fadeInUp">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-neon-blue tracking-tight drop-shadow-[0_0_10px_rgba(0,243,255,0.6)]">
                        Consulting + Digitalization
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        การให้คำปรึกษาพร้อมการเปลี่ยนผ่านสู่ยุคดิจิทัล (Consulting + Digitalization)
                        คือ<strong className="text-neon-green">โซลูชันประสิทธิภาพพลังงานแบบองค์รวมที่ออกแบบมาโดยเฉพาะ (Tailor-made)</strong>
                        เพื่อช่วยให้อุตสาหกรรมการผลิตบรรลุเป้าหมายด้านประสิทธิภาพการดำเนินงานและมูลค่าทางธุรกิจที่เพิ่มขึ้น
                    </p>
                </header>

                {/* *** ตำแหน่งของ ContactCtaSection *** */}
                <ContactCtaSection />

                {/* กรอบเน้นบริการ */}
                <div className="mt-4 mb-10 p-6 max-w-3xl w-full bg-[#25252b] border border-neon-green/50 shadow-[0_0_15px_rgba(57,255,20,0.15)] rounded-xl hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300">
                    <h2 className="text-2xl font-semibold text-neon-green mb-3">
                        เพิ่มประสิทธิภาพและมูลค่าธุรกิจ
                    </h2>
                    <p className="text-lg text-gray-300">
                        เรามุ่งเน้นการมอบโซลูชันที่ปรับให้เข้ากับความต้องการเฉพาะของคุณ เพื่อให้มั่นใจว่าองค์กรของคุณจะได้รับ
                        <strong className="text-neon-yellow">การส่งเสริมสองเท่า (Double Boost)</strong> ทั้งในด้านประสิทธิภาพองค์กรและการสร้างมูลค่า
                    </p>
                </div>

                {/* ปุ่ม Consultation */}
                <Link
                    href="/contact" // ลิงก์ไปยังหน้าติดต่อเราเพื่อขอรับการปรึกษา
                    className="inline-flex items-center justify-center px-8 py-4 border border-neon-green text-lg font-bold rounded-full shadow-[0_0_15px_rgba(57,255,20,0.4)] text-black bg-neon-green hover:bg-green-400 hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] transition-all duration-300 transform hover:scale-105"
                >
                    ปรึกษาผู้เชี่ยวชาญด้านพลังงานวันนี้!
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>

                <p className="mt-4 text-sm text-gray-500">
                    คลิกเพื่อติดต่อทีมงานของเรา
                </p>

            </div>
        </section>
    );
}