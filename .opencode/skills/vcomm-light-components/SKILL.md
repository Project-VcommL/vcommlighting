---
name: vcomm-light-components
description: UI component conventions and styling standards for the VCOMM lighting website (Next.js + Tailwind v4 project under services/next/06-CUSTOMER/VCOMM/vcommlighting). Use when creating, copying, or styling components for this site — including turning source files from components/source/ into reusable components — so new sections match the existing look (width, background, shadow, colors) without re-explaining the design system.
version: 1.3.0
license: MIT
---

# VCOMM UI Component Conventions

มาตรฐาน UI ของเว็บไซต์ VCOMM lighting — ให้ component ใหม่ดูเป็นเว็บเดียวกันกับตัวที่มีอยู่
ใช้เมื่อ: สร้าง component ใหม่, คัดลอกจาก `components/source/`, หรือปรับสไตล์ให้เข้ากันทั้งเว็บ

## ข้อเท็จจริงโปรเจกต์ (ตรวจสอบแล้วจากไฟล์จริง)

- Framework: **Next.js 16.3.5** (App Router) + React 19.3.0 + TypeScript strict + **Tailwind CSS v4**
- Package manager: **pnpm**; path alias `@/*` → จาก root โปรเจกต์ (`tsconfig.json`)
- Component ที่ใช้ hooks (`useState`/`useEffect`/`useContext`) ต้องมี `'use client';` บรรทัดแรก
- ตรวจสอบทุกครั้งหลังแก้: `pnpm exec tsc --noEmit` (ต้องไม่มี error)

## Container มาตรฐาน (ที่ต้องใช้ให้เหมือนกันทั้งเว็บ)

ค่าต่อไปนี้คือมาตรฐานกลางของเว็บ — ใช้กับทุก section แบบ content card:

| ลักษณะ | ค่าที่ใช้จริง |
|---|---|
| พื้นหลังส่วน wrapper | `bg-transparent` (โปร่งใส — ให้ bg ของหน้าโชว์ผ่าน) |
| ความกว้าง card | `max-w-[1380px] w-full` |
| มุม card | `rounded-3xl` |
| เงา card | `shadow-2xl` |
| ตัว card | `bg-white` + `border border-slate-200` |
| ฟอนต์ wrapper | `font-['Prompt',sans-serif]` |
| วาง card กลาง | `flex justify-center items-center` (หรือ `flex flex-col items-center justify-center`) |
| ความสูง wrapper | ตามเนื้อหา — **ห้ามใช้ `min-h-screen`** (จะทำให้แต่ละ section เป็นหน้าเต็มจอ ไม่กลืนกัน) |
| padding wrapper | `py-6 px-2 sm:px-4 md:px-8` (เท่ากันทุก section) |

ตัวอย่าง wrapper เชิงอ้างอิง (ProductShowcase):

```tsx
<div className="bg-transparent py-6 px-2 sm:px-4 md:px-8 font-['Prompt',sans-serif] text-slate-800 flex flex-col items-center justify-center">
  <div className="w-full max-w-[1380px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 relative transition-all duration-500">
    ...
  </div>
</div>
```

**กฎ: ห้ามใช้คนละค่า** — ถ้าจะมี section ใหม่ ต้องใช้ wrapper/ขนาด/เงา/พื้นหลังชุดเดียวกัน ไม่ใช่ `bg-slate-100`/`rounded-2xl`/`shadow-xl`/`1140px` แบบอื่นที่ไม่ตรงมาตรฐาน และ **ห้ามใส่ `min-h-screen`** ใน wrapper (ทำให้รอยต่อไม่กลืนกัน) — wrapper ต้องเป็น `bg-transparent` ให้ bg ของหน้าโชว์ผ่าน

## สีธีม (จาก `app/globals.css` — ห้าม hardcode เบาๆ ไม่ตรงกับโทเคน)

มีทั้ง utility class (`.text-neon-green`, `.bg-neon-green`, `.border-neon-green`) และ Tailwind token (`text-navy-dark`, `bg-teal`, `border-teal`) ตรวจที่ `globals.css` ก่อนใช้

| Token | Light | Dark |
|---|---|---|
| `--neon-green` | `#059669` | `#34d399` |
| `--neon-blue` | `#1e40af` | `#60a5fa` |
| `--navy-dark` | `#0c2340` | `#1e3a5f` |
| `--teal` | `#006666` | `#003333` |

สีเฉพาะที่ใช้ใน component ที่สร้างจาก source ของ VCOMM:
- `#0c1e3d` = navy แดงเข้มใช้เป็นหัวข้อ/ป้ายตัวเลขใน InnovationLanding
- `#1a2333` = พื้นปุ่ม CTA / แถบเข้มใน ProductShowcase
- `text-slate-900` / `text-slate-800` = ข้อความหลักบน card ขาว
- รูปจาก source ใช้ `<img>` ธรรมดา (ลิงก์ Unsplash ในตัว component แล้ว)

## Workflow: ทำ source เป็น component (ปฏิบัติตามนี้ทุกครั้ง)

1. อ่านไฟล์ต้นทางใน `components/source/` ให้เข้าใจก่อน
2. สร้าง component ใหม่ที่ `components/<ชื่อ>.tsx` (คัดลอกจาก source)
   - เพิ่ม `'use client';` ถ้าใช้ hooks
   - default export ชื่อ PascalCase ตรงกับชื่อไฟล์
3. ใช้ wrapper/ขนาด/เงา/พื้นหลัง **ตาม Container มาตรฐาน** ข้างบนเท่านั้น
4. import ผ่าน `@/components/<ชื่อ>` ไปยัง `app/<หน้า>.tsx` แล้ววางเรียงต่อกัน
5. รัน `pnpm exec tsc --noEmit` — ผ่านก่อนบอกเสร็จ
6. รายงาน: สิ่งที่แก้ / ที่ยังไม่ได้ทำ / หมายเหตุ (เช่น dead code ที่เหลือ)

## ข้อควรระวัง

- **ห้ามใช้ `window`/`Date.now()`/`Math.random()` ในการคำนวณตอน render ตรงๆ** — ค่า server กับ client ต่างกัน → hydration mismatch ต้องแปลงเป็น state: `useState(false)` + `useEffect(() => { setX(...) }, [])` (อัปเดตหลัง mount) หรือตรวจ `typeof window !== 'undefined'` แบบไม่เปลี่ยนผลระหว่าง 2 ฝั่ง
- อย่าแตะ `app/layout.tsx`, `RootLayoutProvider`, `hooks/use-i18n.tsx`, `Header`, `Sidebar`, `Footer` โดยไม่ได้รับอนุญาต
- ข้อความภาษาในส่วนที่ใช้ i18n ต้องผ่าน `useI18n()` + `t('key')` ห้าม hardcode — แต่ component ที่คัดลอกจาก source ที่ hardcode ไทยไว้แล้ว (เช่น ProductShowcase/InnovationLanding) ให้คงไว้ตามต้นฉบับ
- อย่าเพิ่ม dependency ใหม่โดยไม่ถามก่อน

## Agent Guidelines / Rules

- สร้าง component ใหม่ → ใช้ Container มาตรฐาน (1380px / bg-slate-200 / rounded-3xl / shadow-2xl) เสมอ
- ถ้า container เดิมของ component ไหนไม่ตรงมาตรฐาน → ปรับให้เท่ากัน ไม่ใช่ปล่อยให้ต่างกัน
- รายงานความจริง: อ้างอิงไฟล์จริงเสมอ ไม่เดา