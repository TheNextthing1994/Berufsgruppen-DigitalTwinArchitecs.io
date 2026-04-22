import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface LineShadowTextProps {
  children: React.ReactNode;
  shadowColor?: string;
  className?: string;
}

export const LineShadowText: React.FC<LineShadowTextProps> = ({
  children,
  shadowColor = 'rgba(0, 163, 108, 0.4)',
  className,
}) => {
  return (
    <span className={cn("relative inline-block", className)}>
      {/* Main Text Shadow (Deep Depth) */}
      <span 
        className="absolute inset-0 z-0 pointer-events-none select-none opacity-40 transform translate-x-[2px] translate-y-[2px]"
        style={{
          color: shadowColor,
          filter: 'blur(0.5px)',
          textShadow: `1px 1px ${shadowColor}, 2px 2px ${shadowColor}`
        }}
      >
        {children}
      </span>
      
      {/* Animated Line Shadow */}
      <motion.span
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: '200% 200%' }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 z-0 pointer-events-none select-none mix-blend-screen opacity-60"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, ${shadowColor} 2px, ${shadowColor} 4px)`,
          backgroundSize: '200% 200%',
          transform: 'translate(3px, 3px)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {children}
      </motion.span>

      <span className="relative z-10">{children}</span>
    </span>
  );
};

interface GlossyTextProps {
  children: React.ReactNode;
  className?: string;
  baseColor?: string; // e.g., #10b981 for emerald
}

export const GlossyText: React.FC<GlossyTextProps> = ({
  children,
  className,
  baseColor = '#10b981',
}) => {
  return (
    <span className={cn("relative inline-block cursor-default select-none", className)}>
      {/* 3D Depth Shadow/Bevel */}
      <span 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          color: 'rgba(0,0,0,0.8)',
          transform: 'translateY(0.06em)',
          filter: 'blur(0.01em)',
          WebkitTextStroke: '0.04em rgba(0,0,0,0.4)',
        }}
      >
        {children}
      </span>

      {/* Outer Glow / Halo */}
      <span 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 blur-[4px]"
        style={{
          color: baseColor,
          WebkitTextStroke: '0.08em currentColor',
        }}
      >
        {children}
      </span>

      {/* Main Glossy Body with High Contrast Horizontal and Vertical lighting */}
      <span 
        className="relative z-10 block animate-shimmer"
        style={{
          background: `
            linear-gradient(
              to bottom,
              #fff 0%,
              #ecfdf5 10%,
              ${baseColor} 20%,
              #fff 35%,
              #065f46 48%,
              #064e3b 50%,
              #065f46 52%,
              ${baseColor} 65%,
              #fff 85%,
              #ecfdf5 100%
            )
          `,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0px 1px 1px rgba(255,255,255,0.3))',
          WebkitTextStroke: '0.01em rgba(255,255,255,0.1)',
        }}
      >
        {children}
      </span>

      {/* Vertical Shimmer Sweep (Extreme Highlights) */}
      <span 
        className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay animate-shimmer"
        style={{
          background: 'linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {children}
      </span>

      {/* Horizontal Lighting Sweep (Golden Focus) */}
      <span 
        className="absolute inset-0 z-25 pointer-events-none mix-blend-overlay"
        style={{
          background: `radial-gradient(circle at center, ${baseColor} 0%, transparent 80%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {children}
      </span>

      {/* Extreme Highlight / Glare */}
      <span 
        className="absolute inset-0 z-30 pointer-events-none opacity-90"
        style={{
          background: 'linear-gradient(135deg, #fff 0%, transparent 40%, transparent 60%, #fff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {children}
      </span>
    </span>
  );
};

interface VariableLengthDecryptionProps {
  text: string;
  className?: string;
  speed?: number;
}

export const VariableLengthDecryption: React.FC<VariableLengthDecryptionProps> = ({
  text,
  className,
  speed = 40,
}) => {
  const [displayText, setDisplayText] = React.useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

  React.useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1/3;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={cn("font-mono", className)} aria-label={text}>
      {displayText}
    </span>
  );
};
