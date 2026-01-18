'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/components/theme-provider';

// themes: connection to source, universal harmony, inexhaustible use
// visualization: Patterns emerge endlessly from source, finding harmony in constant transformation

type PatternFunction = (x: number, y: number, t: number) => number;
type PatternName = 'balance' | 'duality' | 'flow' | 'chaos';

interface MousePosition {
  x: number;
  y: number;
}

const patterns: Record<PatternName, PatternFunction> = {
  // Pattern finding harmony in connection to source
  balance: (x, y, t) => {
    const cx = 30;
    const cy = 15;
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    return Math.sin(dx * 0.3 + t * 0.5) * Math.cos(dy * 0.3 + t * 0.3) * 
           Math.sin(dist * 0.1 - t * 0.4);
  },
  
  duality: (x, y, t) => {
    const cx = 30;
    const left = x < cx ? Math.sin(x * 0.2 + t * 0.3) : 0;
    const right = x >= cx ? Math.cos(x * 0.2 - t * 0.3) : 0;
    
    return left + right + Math.sin(y * 0.3 + t * 0.2);
  },
  
  flow: (x, y, t) => {
    const angle = Math.atan2(y - 15, x - 30);
    const dist = Math.sqrt(Math.pow(x - 30, 2) + Math.pow(y - 15, 2));
    
    return Math.sin(angle * 3 + t * 0.4) * Math.cos(dist * 0.1 - t * 0.3);
  },
  
  chaos: (x, y, t) => {
    const noise1 = Math.sin(x * 0.5 + t) * Math.cos(y * 0.3 - t);
    const noise2 = Math.sin(y * 0.4 + t * 0.5) * Math.cos(x * 0.2 + t * 0.7);
    const noise3 = Math.sin((x + y) * 0.2 + t * 0.8);
    
    return noise1 * 0.3 + noise2 * 0.3 + noise3 * 0.4;
  }
};

const BlackWhiteBlobs: React.FC = () => {
  const [frame, setFrame] = useState<number>(0);
  const [patternType, setPatternType] = useState<number>(0);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const patternTypes: PatternName[] = ['balance', 'duality', 'flow', 'chaos'];
  const width = 60;
  const height = 35;
  const slowdownFactor = 12;

  // Check if we're actually in dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [theme]);

  const BACKGROUND_COLOR = isDark ? '#1a1a1a' : '#F0EEE6';
  const TEXT_COLOR = isDark ? '#e0e0e0' : '#333';
  
  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      setFrame(f => (f + 1) % (240 * slowdownFactor));
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [slowdownFactor]);
  
  const generateAsciiArt = (): string => {
    const t = (frame * Math.PI) / (60 * slowdownFactor);
    const currentPattern = patterns[patternTypes[patternType]];
    let result = '';
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let value = currentPattern(x, y, t);
        
        if (mouseDown && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const dx = x - (((mousePos.x - rect.left) / rect.width) * width);
          const dy = y - (((mousePos.y - rect.top) / rect.height) * height);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.exp(-dist * 0.1) * Math.sin(t * 2);
          value += mouseInfluence * 0.8;
        }
        
        let char = ' ';
        if (value > 0.8) {
          char = '█';
        } else if (value > 0.5) {
          char = '▓';
        } else if (value > 0.2) {
          char = '▒';
        } else if (value > -0.2) {
          char = '░';
        } else if (value > -0.5) {
          char = '·';
        }
        
        result += char;
      }
      result += '\n';
    }
    
    return result;
  };
  
  const handleClick = (): void => {
    setPatternType((prev) => (prev + 1) % patternTypes.length);
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  
  const handleMouseDown = (): void => {
    setMouseDown(true);
  };
  
  const handleMouseUp = (): void => {
    setMouseDown(false);
  };
  
  return (
    <div 
      style={{ 
        margin: 0,
        padding: 0,
        background: BACKGROUND_COLOR,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      ref={containerRef}
    >
      <pre style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        lineHeight: '1',
        letterSpacing: '0.1em',
        color: TEXT_COLOR,
        userSelect: 'none',
        cursor: 'pointer',
        margin: 0,
        padding: 0
      }}>
        {generateAsciiArt()}
      </pre>
    </div>
  );
};

export default BlackWhiteBlobs;