import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const CATALOG_PAGES: Record<string, { image: string; title: string }> = {
  't8-light': { image: '/image21/page_007.png', title: 'T8 Light' },
  'high-bay-light': { image: '/image21/page_008.png', title: 'High Bay Light' },
  'flood-light': { image: '/image21/page_009.png', title: 'Flood Light' },
  'street-lamp': { image: '/image21/page_010.png', title: 'Street Lamp' },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = CATALOG_PAGES[slug];
  return {
    title: page ? `${page.title} | VRcommlighting` : 'รายละเอียดสินค้า | VRcommlighting',
  };
}

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = CATALOG_PAGES[slug];

  return (
    <div className="min-h-screen bg-[#08111d] flex flex-col items-center justify-center px-4 py-8 sm:py-12">
      {page ? (
        <>
          <h1 className="mb-6 text-2xl sm:text-3xl font-extrabold text-neon-blue tracking-tight">
            {page.title}
          </h1>
          <div className="w-full max-w-4xl rounded-3xl overflow-hidden border border-slate-700/60 bg-white shadow-2xl">
            <img
              src={page.image}
              alt={`${page.title} แคตตาล็อกสินค้า`}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </>
      ) : (
        <p className="mb-6 text-xl text-slate-300">ไม่พบสินค้าที่ต้องการ</p>
      )}

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1a2333] text-white px-8 sm:px-14 py-2.5 sm:py-3.5 shadow-xl border border-slate-700/60 transition-all hover:scale-105"
      >
        <span aria-hidden="true">←</span>
        กลับหน้าแรก
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(CATALOG_PAGES).map((slug) => ({ slug }));
}