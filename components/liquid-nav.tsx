'use client'

import React, { useState, useRef, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

interface LiquidNavProps {
  items: NavItem[];
  activeItem: string;
  onItemClick: (id: string) => void;
}

export default function LiquidNav({ items, activeItem, onItemClick }: LiquidNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = items.findIndex(item => item.id === activeItem);

  useEffect(() => {
    const updateIndicator = (index: number) => {
      const item = itemRefs.current[index];
      if (item && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        setIndicatorStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
        });
      }
    };

    updateIndicator(hoveredIndex ?? activeIndex);
  }, [hoveredIndex, activeIndex]);

  return (
    <nav
      ref={navRef}
      className="relative inline-flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 "
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Animated indicator */}
      <div
        className="absolute top-2 bottom-2 bg-gray-300 dark:bg-white/20 rounded-full transition-all duration-300 ease-out"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
        }}
      />

      {/* Nav items */}
      {items.map((item, index) => (
        <button
          key={item.id}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className="relative z-10 px-5 py-2 text-sm font-medium text-gray-800 dark:text-white transition-colors duration-200 rounded-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onClick={() => onItemClick(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}