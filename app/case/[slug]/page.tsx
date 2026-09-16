import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const CASE_PAGES: Record<string, { image: string; title: string }> = {
  'project-1': { image: '/image21/page_011.png', title: 'Project 1' },
  'project-2': { image: '/image21/page_012.png', title: 'Project 2' },
  'project-3': { image: '/image21/page_013.png', title: 'Project 3' },
  'project-4': { image: '/image21/page_014.png', title: 'Project 4' },
  'project-5': { image: '/image21/page_015.png', title: 'Project 5' },
  'project-6': { image: '/image21/page_016.png', title: 'Project 6' },
  'project-7': { image: '/image21/page_017.png', title: 'Project 7' },
  'project-8': { image: '/image21/page_018.png', title: 'Project 8' },
  'project-9': { image: '/image21/page_019.png', title: 'Project 9' },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = CASE_PAGES[slug];
  return {
    title: page ? `${page.title} | VRcommlighting` : 'รายละเอียดผลงาน | VRcommlighting',
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = CASE_PAGES[slug];

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
              alt={`${page.title} ผลงานติดตั้ง`}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </>
      ) : (
        <p className="mb-6 text-xl text-slate-300">ไม่พบผลงานที่ต้องการ</p>
      )}

      <Link
        href="/case"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1a2333] text-white px-8 sm:px-14 py-2.5 sm:py-3.5 shadow-xl border border-slate-700/60 transition-all hover:scale-105"
      >
        <span aria-hidden="true">←</span>
        กลับหน้ารวมผลงาน
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(CASE_PAGES).map((slug) => ({ slug }));
}