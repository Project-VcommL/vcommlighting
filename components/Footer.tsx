// components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
// *** เพิ่ม FaLine เข้ามาในส่วน import ***
import { FaFacebook, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaLine } from 'react-icons/fa';
import Image from 'next/image';
import { useI18n } from '../hooks/use-i18n';

export default function Footer() {
    const { t } = useI18n(); // Global Hook
    // ข้อมูลตัวอย่างสำหรับ Footer
    const year = new Date().getFullYear();
    // *** ข้อมูล Line ID ของ VCOMM LIGHTING (สมมุติขึ้นมา) ***
    const lineId = 'vcommlighting';
    const lineLink = `https://line.me/ti/p/@${lineId}`; // รูปแบบลิงก์ที่แนะนำสำหรับ LINE OA

    return (
        <footer className="bg-teal dark:bg-teal text-gray-100 dark:text-gray-300 pt-10 pb-6 border-t border-gray-300 dark:border-neon-green shadow-none dark:shadow-[0_-5px_15px_rgba(52,211,153,0.2)]">
            <div className="container mx-auto px-4">
                {/* ส่วนบน: โลโก้, ลิงก์, ข้อมูลติดต่อ */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">

                    {/* คอลัมน์ที่ 1: โลโก้และโซเชียล */}
                    <div>
                        {/* โลโก้ (เพิ่มกลับเข้าไปเพื่อให้สมบูรณ์) */}
                        <Link href="/">
                            <Image
                                src="/1000047467-removebg-preview.png"
                                alt="Vcommlighting Logo"
                                width={120}
                                height={32}
                                className="h-8 w-auto mb-4 invert" // โลโก้สีขาวบนพื้นหลังมืด
                            />
                        </Link>

                        <p className="text-sm text-gray-500 mb-4">
                            {t('footer.company_name')}
                        </p>

                        {/* ไอคอนโซเชียล: เพิ่ม FaLine เข้ามา */}
                        <div className="flex space-x-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-neon-blue transition-colors text-xl">
                                <FaFacebook />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-neon-blue transition-colors text-xl">
                                <FaLinkedin />
                            </a>
                            <a href={lineLink} target="_blank" rel="noopener noreferrer" aria-label="LINE Official Account" className="text-gray-400 hover:text-neon-green transition-colors text-xl">
                                <FaLine />
                            </a>
                            <a href="mailto:contactvcomm@gmail.com" aria-label="Email" className="text-gray-400 hover:text-neon-pink transition-colors text-xl">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* คอลัมน์ที่ 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-widest text-neon-green drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">
                            {t('footer.quick_links')}
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-gray-400 hover:text-neon-green transition-colors">{t('header.about')}</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-neon-green transition-colors">{t('header.products')}</Link></li>
                            <li><Link href="/service" className="text-gray-400 hover:text-neon-green transition-colors">{t('header.service')}</Link></li>
                            <li><Link href="/news" className="text-gray-400 hover:text-neon-green transition-colors">News</Link></li>
                            <li><Link href="/case" className="text-gray-400 hover:text-neon-green transition-colors">{t('header.case')}</Link></li>
                        </ul>
                    </div>

                    {/* คอลัมน์ที่ 3: Services (ตัวอย่าง) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-widest text-neon-green drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">
                            {t('footer.services')}
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/service/import" className="text-gray-400 hover:text-neon-green transition-colors">{t('footer.import')}</Link></li>
                            <li><Link href="/service/warehouse" className="text-gray-400 hover:text-neon-green transition-colors">{t('footer.warehouse')}</Link></li>
                            <li><Link href="/service/logistics" className="text-gray-400 hover:text-neon-green transition-colors">{t('footer.logistics')}</Link></li>
                        </ul>
                    </div>

                    {/* คอลัมน์ที่ 4: Contact Info (เพิ่ม Line ID เข้ามาอีกครั้ง) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-widest text-neon-green drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">
                            {t('footer.contact')}
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-neon-green flex-shrink-0" />
                                <span className="text-gray-400">{t('footer.address')}</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="mr-3 text-neon-green" />
                                <a href="tel:0613289536" className="text-gray-400 hover:text-neon-green transition-colors">061-3289536</a>
                            </li>
                            {/* *** เพิ่ม Line ID ในส่วน Contact Info *** */}
                            <li className="flex items-center">
                                <FaLine className="mr-3 text-neon-green" />
                                <a href={lineLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors">LINE ID: {lineId}</a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-neon-green" />
                                <a href="mailto:contactvcomm@gmail.com" className="text-gray-400 hover:text-neon-green transition-colors">contactvcomm@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ส่วนล่าง: Copyright */}
                <div className="text-center pt-4 text-xs text-gray-500">
                    &copy; {year} VCOMM DIGITAL (THAILAND) CO.,LTD. {t('footer.rights')}
                </div>
            </div>
        </footer>
    );
}