"use client";

import { useRef, useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { spaces, categories } from "@/lib/projects-data";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState<number[]>([]);

  const filteredSpaces =
    activeCategory === "All"
      ? spaces
      : spaces.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary text-center">
        <h1 className="font-serif text-5xl lg:text-7xl font-bold">
          Interior Spaces
        </h1>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-30">
        <div className="container mx-auto px-4 flex flex-wrap gap-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={cn(
                "px-6 py-2 text-sm uppercase",
                activeCategory === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpaces.map((space, i) => (
            <Card
              key={space.id}
              space={space}
              index={i}
              onVisible={(id) =>
                !visible.includes(id) && setVisible((v) => [...v, id])
              }
              isVisible={visible.includes(space.id)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface CardProps {
  space: typeof spaces[0];
  index: number;
  onVisible: (id: number) => void;
  isVisible: boolean;
}

function Card({ space, index, onVisible, isVisible }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) onVisible(space.id);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [space.id, onVisible]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Link href={`/projects/${space.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden mb-4">
          <img
            src={space.images[0].src}
            alt={space.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-xs uppercase">{space.category}</div>
            <h3 className="font-serif text-2xl">{space.title}</h3>
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2">
          {space.description}
        </p>

        <div className="mt-3 flex items-center gap-2 text-accent">
          View Space <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </div>
  );
}
