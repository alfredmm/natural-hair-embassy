import React, { useState } from 'react';
import officialLogoImg from '../assets/images/nhe_official_logo_transparent.png';
import fallbackLogoImg from '../assets/images/nhe_official_logo_1790115976839.jpg';
import crestLogoImg from '../assets/images/nhe_logo_crest_1790115129510.jpg';

interface BrandLogoProps {
  className?: string;
  variant?: 'horizontal' | 'mark-only';
  alt?: string;
}

/**
 * Official single horizontal brand logo for Natural Hair Embassy.
 * Features the gold queen crown & locs crest alongside the gold typography:
 * "Natural Hair EMBASSY — MICROLOCS • SISTERLOCKS SERVICES"
 * High visibility, doubled scale, crystal clear gold rendering.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'h-20 sm:h-24 md:h-28 w-auto',
  variant = 'horizontal',
  alt = "Natural Hair Embassy - Women's Microlocs/Sisterlocks™ Services"
}) => {
  const [imgSrc, setImgSrc] = useState<string>(officialLogoImg);

  if (variant === 'mark-only') {
    return (
      <img
        src={crestLogoImg}
        alt={alt}
        className={`object-contain ${className}`}
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <img
        src={imgSrc}
        alt={alt}
        onError={() => {
          if (imgSrc === officialLogoImg) {
            setImgSrc(fallbackLogoImg);
          } else if (imgSrc !== crestLogoImg) {
            setImgSrc(crestLogoImg);
          }
        }}
        className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(197,160,89,0.22)] transition-transform duration-300 group-hover:scale-[1.02]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
