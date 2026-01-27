"use client";

import { cn } from "@/lib/utils";

interface Section {
  name: string;
  color: string;
}

interface DotNavigationProps {
  sections: Section[];
  activeSection: number;
  onDotClick: (index: number) => void;
}

export default function DotNavigation({ sections, activeSection, onDotClick }: DotNavigationProps) {
  return (
    <div className="fixed right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4">
      {sections.map((section, index) => (
        <button
          key={section.name}
          onClick={() => onDotClick(index)}
          className="group relative flex items-center justify-end"
          aria-label={`Go to ${section.name}`}
        >
          {/* Tooltip - hidden on mobile */}
          <span 
            className={cn(
              "hidden md:block absolute right-8 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg",
              "opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-x-0 translate-x-2"
            )}
            style={{ 
              backgroundColor: section.color,
              color: '#ffffff'
            }}
          >
            {section.name}
          </span>
          
          {/* Dot container with line */}
          <div className="relative flex items-center">
            {/* Connecting line for active */}
            <div 
              className={cn(
                "absolute right-full mr-1 h-0.5 transition-all duration-500",
                index === activeSection ? "w-4 md:w-6" : "w-0"
              )}
              style={{ backgroundColor: index === activeSection ? section.color : 'transparent' }}
            />
            
            {/* Main dot */}
            <div
              className={cn(
                "relative w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-500 ease-out",
                index === activeSection ? "scale-125" : "scale-100 hover:scale-110"
              )}
              style={{ 
                backgroundColor: index === activeSection ? section.color : 'rgba(255,255,255,0.4)',
                boxShadow: index === activeSection ? `0 0 12px ${section.color}` : 'none'
              }}
            >
              {/* Pulse effect for active dot */}
              {index === activeSection && (
                <span 
                  className="absolute inset-0 rounded-full animate-ping opacity-40"
                  style={{ backgroundColor: section.color }}
                />
              )}
              
              {/* Outer ring for active */}
              {index === activeSection && (
                <span 
                  className="absolute -inset-1 rounded-full border-2 animate-pulse"
                  style={{ borderColor: section.color }}
                />
              )}
            </div>
          </div>
        </button>
      ))}
      
      {/* Section indicator label - visible on mobile */}
      <div 
        className="md:hidden absolute -left-16 top-1/2 -translate-y-1/2 text-xs font-medium whitespace-nowrap transform -rotate-90 origin-center"
        style={{ color: sections[activeSection]?.color }}
      >
        {sections[activeSection]?.name}
      </div>
    </div>
  );
}
