import React from 'react';

export interface ProductItem {
  id: string;
  title: string;
  /** Image URL for the product photo */
  imageSrc: string;
  /** Image URL for the circular icon badge placed above the card header */
  iconSrc?: string;
  /** Alt text for the product image */
  imageAlt?: string;
}

export interface ProductsSectionProps {
  /** Section main title */
  title?: string;
  /** Subtitle or English translated title inside parentheses */
  subtitle?: string;
  /** Image URL for the first certificate (left) */
  cert1ImageSrc?: string;
  /** Image URL for the second certificate (right) */
  cert2ImageSrc?: string;
  /** Image URL for the yellow diamond TIS mark */
  tisDiamondLogoSrc?: string;
  /** Image URL for the red/blue TIS standard badge */
  tisCircleLogoSrc?: string;
  /** Image URL for CQC certificate mark */
  cqcLogoSrc?: string;
  /** Image URL for CE certificate mark */
  ceLogoSrc?: string;
  /** Array of products to display in the 4-column layout */
  products?: ProductItem[];
  /** Optional custom container CSS classes */
  className?: string;
}

// Default product data matching the reference layout
const DEFAULT_PRODUCTS: ProductItem[] = [
  {
    id: 't8-light',
    title: 'T8 Light',
    imageSrc: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=500&auto=format&fit=crop&q=80',
    iconSrc: 'https://api.iconify.design/lucide:lightbulb.svg?color=%230a2540',
    imageAlt: 'T8 LED Tube Light Fixture',
  },
  {
    id: 'high-bay-light',
    title: 'High Bay Light',
    imageSrc: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&auto=format&fit=crop&q=80',
    iconSrc: 'https://api.iconify.design/lucide:lamp-ceiling.svg?color=%230a2540',
    imageAlt: 'UFO LED High Bay Light Fixture',
  },
  {
    id: 'flood-light',
    title: 'Flood Light',
    imageSrc: 'https://images.unsplash.com/photo-1508873696983-2df515122519?w=500&auto=format&fit=crop&q=80',
    iconSrc: 'https://api.iconify.design/lucide:sun.svg?color=%230a2540',
    imageAlt: 'Industrial LED Flood Light',
  },
  {
    id: 'street-lamp',
    title: 'Street Lamp',
    imageSrc: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=500&auto=format&fit=crop&q=80',
    iconSrc: 'https://api.iconify.design/lucide:lamp-wall-up.svg?color=%230a2540',
    imageAlt: 'Outdoor LED Street Lamp',
  },
];

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  title = "สินค้า",
  subtitle = "(PRODUCTS)",
  cert1ImageSrc = "https://placehold.co/180x250/ffffff/0a2540?text=ใบอนุญาต+มอก.1",
  cert2ImageSrc = "https://placehold.co/180x250/ffffff/0a2540?text=ใบอนุญาต+VCOMM",
  tisDiamondLogoSrc,
  tisCircleLogoSrc,
  cqcLogoSrc,
  ceLogoSrc,
  products = DEFAULT_PRODUCTS,
  className = "",
}) => {
  return (
    <div
      className={`relative w-full max-w-[1240px] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-4 sm:p-8 md:p-10 border border-slate-200/80 font-sans select-none ${className}`}
    >
      {/* ==================== 1. TOP LEFT & BOTTOM RIGHT DECORATIVE ARCS ==================== */}
      
      {/* Top Left Corner Curved Graphics (Gold & Navy Arc) */}
      <div className="absolute top-0 left-0 w-44 sm:w-60 h-44 sm:h-60 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0a2540] [clip-path:polygon(0_0,_100%_0,_0_100%)] opacity-90" />
        <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-[#c5a059] [clip-path:polygon(0_0,_100%_0,_0_100%)]" />
      </div>

      {/* Bottom Right Corner Curved Graphics (Gold & Navy Arc) */}
      <div className="absolute bottom-0 right-0 w-52 sm:w-72 h-52 sm:h-72 pointer-events-none z-0">
        <div className="absolute bottom-0 right-0 w-full h-full bg-[#c5a059] [clip-path:polygon(100%_0,_100%_100%,_0_100%)] opacity-90" />
        <div className="absolute bottom-0 right-0 w-4/5 h-4/5 bg-[#0a2540] [clip-path:polygon(100%_0,_100%_100%,_0_100%)]" />
      </div>

      {/* Background Dot Matrix Pattern (Top Right) */}
      <div className="absolute top-6 right-8 w-28 h-28 opacity-25 pointer-events-none hidden sm:grid grid-cols-6 gap-2">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        ))}
      </div>

      {/* ==================== 2. MAIN CONTENT WRAPPER ==================== */}
      <div className="relative z-10">
        
        {}
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sm:mb-16">
          
          {/* Left Side: Official Thai TIS License Certificates */}
          <div className="flex items-center gap-3 sm:gap-5 pl-4 sm:pl-10 md:pl-12">
            
            {/* Certificate 1 */}
            <div className="w-24 sm:w-28 md:w-32 bg-white rounded border border-slate-300 p-1.5 shadow-md hover:shadow-lg transition-all duration-200 aspect-[1/1.4] flex flex-col justify-between overflow-hidden">
              <img
                src={cert1ImageSrc}
                alt="ใบอนุญาต มอก. 1"
                className="w-full h-full object-cover rounded-sm"
                loading="lazy"
              />
            </div>

            {/* Certificate 2 (with VCOMM stamp) */}
            <div className="w-24 sm:w-28 md:w-32 bg-white rounded border border-slate-300 p-1.5 shadow-md hover:shadow-lg transition-all duration-200 aspect-[1/1.4] flex flex-col justify-between overflow-hidden relative">
              <img
                src={cert2ImageSrc}
                alt="ใบอนุญาต มอก. 2 VCOMM"
                className="w-full h-full object-cover rounded-sm"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side: Header Title Text */}
          <div className="text-center md:text-right pr-2 md:pr-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1d2a65] tracking-tight">
              {title}{" "}
              <span className="font-extrabold text-[#1d2a65] inline-block">
                {subtitle}
              </span>
            </h1>
          </div>
        </div>

        {}
        {/* ==================== 3. PRODUCT CARDS GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white rounded-2xl border border-slate-300/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header Ribbon with Floating Circular Icon Badge */}
              <div className="relative bg-[#0a2540] text-white pt-7 pb-3 px-3 text-center">
                
                {/* Floating Circular Badge Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-2 border-[#0a2540] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 z-10 overflow-hidden p-2.5">
                  {item.iconSrc ? (
                    <img
                      src={item.iconSrc}
                      alt={`${item.title} icon`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0a2540] rounded-full" />
                  )}
                </div>

                {/* Product Title Banner */}
                <h3 className="text-base sm:text-lg font-bold tracking-wide mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Product Image Container */}
              <div className="flex-1 p-4 sm:p-5 flex items-center justify-center bg-white min-h-[210px] sm:min-h-[230px]">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt || item.title}
                    className="max-h-48 w-auto object-contain max-w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {}
        {/* ==================== 4. FOOTER CERTIFICATIONS ==================== */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 pb-2 border-t border-slate-200/80">
          
          {/* 1. Yellow Diamond TIS Logo */}
          <div className="flex items-center justify-center">
            {tisDiamondLogoSrc ? (
              <img
                src={tisDiamondLogoSrc}
                alt="มอก. Diamond Mark"
                className="h-11 object-contain"
              />
            ) : (
              <div className="w-10 h-10 border-[3px] border-[#d4af37] bg-[#fffdf5] transform rotate-45 flex items-center justify-center shadow-sm">
                <span className="transform -rotate-45 font-black text-[#b8860b] text-[10px] tracking-tighter">
                  มอก
                </span>
              </div>
            )}
          </div>

          {/* 2. Official TIS Circle Symbol with Standard Text */}
          <div className="flex items-center gap-2">
            {tisCircleLogoSrc ? (
              <img
                src={tisCircleLogoSrc}
                alt="มอก.1955-2551 TIS 1955-2551"
                className="h-11 object-contain"
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-full border-2 border-red-600 flex items-center justify-center p-0.5 bg-white shadow-sm">
                  <div className="w-full h-full rounded-full border border-blue-800 flex items-center justify-center text-red-600 font-extrabold text-xs">
                    <span className="text-[10px] font-black text-blue-900">TIS</span>
                  </div>
                </div>
                <div className="text-left leading-none">
                  <div className="text-xs font-bold text-slate-800 tracking-tight">
                    มอก.1955-2551
                  </div>
                  <div className="text-[9px] font-semibold text-slate-500">
                    TIS 1955-2551
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. CQC Mark (China Quality Certification) */}
          {cqcLogoSrc ? (
            <img src={cqcLogoSrc} alt="CQC Certification" className="h-9 object-contain" />
          ) : (
            <div className="px-3 py-1 rounded-full border border-slate-400 text-slate-800 font-black tracking-widest text-lg font-serif bg-white shadow-sm">
              cqc
            </div>
          )}

          {/* 4. CE Mark (Conformité Européenne) */}
          {ceLogoSrc ? (
            <img src={ceLogoSrc} alt="CE Mark" className="h-9 object-contain" />
          ) : (
            <div className="text-3xl font-black text-slate-900 tracking-tighter font-mono">
              CE
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductsSection;