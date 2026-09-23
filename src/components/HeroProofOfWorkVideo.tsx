import React, { useRef, useState, useEffect } from 'react';

interface HeroProofOfWorkVideoProps {
  className?: string;
}

export const HeroProofOfWorkVideo: React.FC<HeroProofOfWorkVideoProps> = ({
  className = ''
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // Guarantee seamless background autoplay on mobile and desktop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Playing successfully
        })
        .catch(() => {
          // Autoplay fallback
        });
    }
  }, []);

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* HTML5 Autoplay Background Video uploaded by user */}
      {!hasError ? (
        <video
          ref={videoRef}
          poster="/assets/hero-proof-of-work-poster.jpg"
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 scale-[1.05] filter brightness-[0.38] contrast-[1.12] saturate-[1.15] ${
            isVideoLoaded ? 'opacity-100' : 'opacity-60'
          }`}
        >
          <source src="/assets/hero-proof-of-work.mp4" type="video/mp4" />
          <source src="/assets/hero-proof-of-work-mobile.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="w-full h-full bg-cover bg-center brightness-[0.32]"
          style={{ backgroundImage: `url(/assets/hero-proof-of-work-poster.jpg)` }}
        />
      )}

      {/* Luxury Dark Backdrop Overlays matching the user design specification */}
      {/* 1. Base dark tint */}
      <div className="absolute inset-0 bg-[#0B0907]/75 backdrop-blur-[1px]" />

      {/* 2. Top-to-bottom soft gradient so header & text stand out pristinely */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0907] via-[#0B0907]/65 to-[#0B0907]" />

      {/* 3. Subtle radial center gold highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,rgba(197,160,89,0.10)_0%,transparent_70%)]" />
    </div>
  );
};
