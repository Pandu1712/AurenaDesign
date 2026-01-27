"use client";

import { useRef, useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ArrowRight, MapPin, Calendar, Maximize2 } from "lucide-react";
import Link from "next/link";
import { projects, categories } from "@/lib/projects-data";

export default function ProjectsPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    setIsHeaderVisible(true);
  }, []);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header variant="light" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className={cn(
              "max-w-3xl transition-all duration-1000 transform",
              isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Our Portfolio</span>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold mb-6 text-balance">
              Featured Projects
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore our collection of thoughtfully designed spaces that showcase 
              our commitment to excellence in interior design.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onVisible={(id) => {
                  if (!visibleProjects.includes(id)) {
                    setVisibleProjects(prev => [...prev, id]);
                  }
                }}
                isVisible={visibleProjects.includes(project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how we can bring your vision to life. Our team is ready 
            to create something extraordinary for you.
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

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  onVisible: (id: number) => void;
  isVisible: boolean;
}

function ProjectCard({ project, index, onVisible, isVisible }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(project.id);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [onVisible, project.id]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group cursor-pointer transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Link href={`/projects/${project.id}`}>
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden mb-6">
          <div className={cn("absolute inset-0 bg-gradient-to-br to-muted", project.color)} />
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500" />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 text-white text-xs tracking-wider uppercase">
                {project.category}
              </span>
              <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div>
              <div className="flex items-center gap-4 text-white/70 text-sm mb-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {project.location.split(",")[0]}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          </div>
          
          {/* Hover border */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 group-hover:text-foreground transition-colors duration-300">
          {project.description}
        </p>
        
        <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-sm font-medium">View Project</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </div>
  );
}
