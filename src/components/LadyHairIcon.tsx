import React from 'react';
import logoIconImg from '../assets/images/nhe_logo_icon_1790115151777.jpg';
import logoCrestImg from '../assets/images/nhe_logo_crest_1790115129510.jpg';

interface LadyHairIconProps {
  className?: string;
  variant?: 'silhouette' | 'circle-emblem' | 'gold-fill' | 'full-crest';
}

/**
 * Brand Logo component featuring the exact crown-and-locs queen silhouette crest
 * from Natural Hair Embassy: Microlocs • Sisterlocks™ Services.
 */
export const LadyHairIcon: React.FC<LadyHairIconProps> = ({
  className = 'w-10 h-10',
  variant = 'circle-emblem'
}) => {
  if (variant === 'full-crest') {
    return (
      <img
        src={logoCrestImg}
        alt="Natural Hair Embassy Logo"
        className={`object-contain ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative rounded-full overflow-hidden border border-[#C5A059]/70 shadow-md group-hover:border-[#E2BC68] group-hover:shadow-[0_0_12px_rgba(197,160,89,0.4)] transition-all bg-[#0A0807] flex items-center justify-center shrink-0 ${className}`}
    >
      <img
        src={logoIconImg}
        alt="Natural Hair Embassy Queen Emblem"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};
