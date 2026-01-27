"use client";

import React from "react"

import { useRef, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Maximize2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects-data";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = Number(params.id);
  const project = projects.find(p => p.id === projectId);
  
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    setIsHeaderVisible(true);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header variant="light" />
        <div className="pt-32 pb-16 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-accent hover:underline">
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const nextProject = projects.find(p => p.id === projectId + 1) || projects[0];
  const prevProject = projects.find(p => p.id === projectId - 1) || projects[projects.length - 1];

  return (
    <div className="min-h-screen bg-background">
      <Header variant="light" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          
          <div
            className={cn(
              "transition-all duration-1000 transform",
              isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">{project.category}</span>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold mb-6 text-balance">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground mt-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize2 className="w-5 h-5 text-accent" />
                <span>{project.area}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className={cn("absolute inset-0 bg-gradient-to-br to-muted", project.color)} />
                <div className="absolute inset-0 bg-primary/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-serif font-bold mb-2">{String(activeImage + 1).padStart(2, '0')}</div>
                    <div className="text-xl font-semibold">{project.images[activeImage].title}</div>
                    <div className="text-sm opacity-70">{project.images[activeImage].description}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden transition-all duration-300",
                    index === activeImage ? "ring-2 ring-accent" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <div className={cn("absolute inset-0 bg-gradient-to-br to-muted", project.color)} />
                  <div className="absolute inset-0 bg-primary/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">{image.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Description */}
            <AnimatedSection
              id="description"
              onVisible={(id) => {
                if (!visibleSections.includes(id)) {
                  setVisibleSections(prev => [...prev, id]);
                }
              }}
              isVisible={visibleSections.includes("description")}
            >
              <h2 className="font-serif text-3xl font-bold mb-6">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.fullDescription}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection
              id="features"
              onVisible={(id) => {
                if (!visibleSections.includes(id)) {
                  setVisibleSections(prev => [...prev, id]);
                }
              }}
              isVisible={visibleSections.includes("features")}
              delay={0.2}
            >
              <h2 className="font-serif text-3xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-10 text-center">Project Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => setActiveImage(index)}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br to-muted", project.color)} />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                  <div className="font-serif text-4xl font-bold mb-2">{String(index + 1).padStart(2, '0')}</div>
                  <div className="font-semibold">{image.title}</div>
                  <div className="text-sm opacity-70 mt-1">{image.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link 
              href={`/projects/${prevProject.id}`}
              className="group flex items-center gap-4"
            >
              <ArrowLeft className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:-translate-x-2 transition-all" />
              <div className="text-right">
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Previous</div>
                <div className="font-serif text-xl font-semibold group-hover:text-accent transition-colors">{prevProject.title}</div>
              </div>
            </Link>
            
            <Link 
              href="/projects"
              className="px-6 py-2 border border-border hover:border-accent hover:text-accent transition-colors"
            >
              All Projects
            </Link>
            
            <Link 
              href={`/projects/${nextProject.id}`}
              className="group flex items-center gap-4"
            >
              <div className="text-left">
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Next</div>
                <div className="font-serif text-xl font-semibold group-hover:text-accent transition-colors">{nextProject.title}</div>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            Inspired by This Project?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Let&apos;s create something extraordinary for your space. Schedule a consultation 
            with our design team today.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-medium tracking-wide uppercase text-sm transition-all duration-300 hover:gap-4"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface AnimatedSectionProps {
  id: string;
  children: React.ReactNode;
  onVisible: (id: string) => void;
  isVisible: boolean;
  delay?: number;
}

function AnimatedSection({ id, children, onVisible, isVisible, delay = 0 }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(id);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [id, onVisible]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
