// app/products/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import ProductGallerySection from '@/components/ProductGallerySection';

export const metadata: Metadata = {
    title: 'สินค้า (Products) - VCOMM Lighting',
    description: 'ค้นพบผลิตภัณฑ์ LED และโซลูชันแสงสว่างประหยัดพลังงานคุณภาพสูงจาก VCOMM',
};

export default function ProductsPage() {
    return (
        <section className="py-16 sm:py-24 bg-[#08111d] text-gray-200">
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-8 pb-8 pt-16 sm:pt-24 text-center">
                <header className="text-center mb-12 animate-fadeInUp">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-neon-blue tracking-tight drop-shadow-[0_0_10px_rgba(0,243,255,0.6)]">                    หน้าสินค้า (Products)
                    </h1>
                    <p className="mt-4 text-lg text-gray-400">กำลังอยู่ในระหว่างการพัฒนาและเพิ่มรายการสินค้าเร็วๆ นี้</p>
                </header>
                {/* ไม่ต้องมี className ที่กำหนด padding ด้านบน เพราะ RootLayoutProvider จัดการให้แล้ว */}
                <div className="min-h-screen">

                    {/* Component แกลเลอรี่ผลิตภัณฑ์ */}
                    <ProductGallerySection
                        mainTitle="ผลิตภัณฑ์แสงสว่าง LED ของ Vcommlighting"
                        subTitle="ค้นพบโซลูชันที่สมบูรณ์แบบสำหรับโรงงาน, คลังสินค้า, และถนน"
                    />

                    {/* คุณสามารถเพิ่มส่วนอื่นๆ ได้ที่นี่ เช่น CTA, FAQ */}

                </div>
            </div>
        </section>
    );
}