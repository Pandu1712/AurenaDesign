"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Header from "@/components/header";
import DotNavigation from "@/components/dot-navigation";
import {
  HeroSection,
  AboutSection,
  ServicesPreviewSection,
  ProjectsPreviewSection,
  ReviewsSection,
  ContactPreviewSection,
} from "@/components/landing-sections";

const sections = [
  { name: "Home", color: "#C4A052" },
  { name: "About", color: "#10B981" },
  { name: "Services", color: "#3B82F6" },
  { name: "Projects", color: "#8B5CF6" },
  { name: "Reviews", color: "#F59E0B" },
  { name: "Contact", color: "#EF4444" },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = useCallback((index: number) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    const container = containerRef.current;
    const section = sectionRefs.current[index];
    
    if (container && section) {
      container.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
      setActiveSection(index);
    }
    
    setTimeout(() => setIsScrolling(false), 800);
  }, [isScrolling]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollPosition = container.scrollTop;
      const viewportHeight = window.innerHeight;
      
      // Calculate which section is most visible
      let currentSection = 0;
      let maxVisibility = 0;
      
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          // Calculate how much of this section is visible
          const visibleTop = Math.max(scrollPosition, sectionTop);
          const visibleBottom = Math.min(scrollPosition + viewportHeight, sectionBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          if (visibleHeight > maxVisibility) {
            maxVisibility = visibleHeight;
            currentSection = index;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  // Handle wheel events for snap scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTime = 0;
    const scrollCooldown = 800;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < scrollCooldown) return;
      
      e.preventDefault();
      lastScrollTime = now;
      
      if (e.deltaY > 0 && activeSection < sections.length - 1) {
        scrollToSection(activeSection + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        scrollToSection(activeSection - 1);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [activeSection, scrollToSection, sections.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && activeSection < sections.length - 1) {
        e.preventDefault();
        scrollToSection(activeSection + 1);
      } else if (e.key === "ArrowUp" && activeSection > 0) {
        e.preventDefault();
        scrollToSection(activeSection - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, scrollToSection]);

  // Handle touch events for mobile snap scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;
    let lastTouchTime = 0;
    const touchCooldown = 800;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchTime < touchCooldown) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const threshold = 50;

      if (Math.abs(deltaY) > threshold) {
        lastTouchTime = now;
        if (deltaY > 0 && activeSection < sections.length - 1) {
          scrollToSection(activeSection + 1);
        } else if (deltaY < 0 && activeSection > 0) {
          scrollToSection(activeSection - 1);
        }
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeSection, scrollToSection, sections.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      <Header variant="transparent" />
      
      <DotNavigation
        sections={sections}
        activeSection={activeSection}
        onDotClick={scrollToSection}
      />
      
      <div 
        ref={containerRef} 
        className="h-screen overflow-y-auto scroll-smooth"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <div 
          ref={(el) => { sectionRefs.current[0] = el; }} 
          id="home"
          className="h-screen scroll-snap-align-start"
          style={{ scrollSnapAlign: "start" }}
        >
          <HeroSection />
        </div>
        <div 
          ref={(el) => { sectionRefs.current[1] = el; }} 
          id="about"
          className="min-h-screen scroll-snap-align-start"
          style={{ scrollSnapAlign: "start" }}
        >
          <AboutSection />
        </div>
        <div 
          ref={(el) => { sectionRefs.current[2] = el; }} 
          id="services"
          className="min-h-screen scroll-snap-align-start"
          style={{ scrollSnapAlign: "start" }}
        >
          <ServicesPreviewSection />
        </div>
        <div 
          ref={(el) => { sectionRefs.current[3] = el; }} 
          id="projects"
          className="min-h-screen scroll-snap-align-start"
          style={{ scrollSnapAlign: "start" }}
        >
          <ProjectsPreviewSection />
        </div>
        <div 
          ref={(el) => { sectionRefs.current[4] = el; }} 
          id="reviews"
          className="min-h-screen scroll-snap-align-start"
          style={{ scrollSnapAlign: "start" }}
        >
          <ReviewsSection />
        </div>
        <div 
          ref={(el) => { sectionRefs.current[5] = el; }} 
          id="contact"
          className="min-h-screen scroll-snap-align-start"
          style={{ scrollSnapAlign: "start" }}
        >
          <ContactPreviewSection />
        </div>
      </div>
    </div>
  );
}
