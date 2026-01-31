"use client";

import { useRef, useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { spaces } from "@/lib/projects-data";

export default function ProjectsPage() {
  const [visible, setVisible] = useState<number[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Premium Hero */}
      <section className="pt-28 lg:pt-36 pb-20 text-center bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Interior <span className="text-accent">Spaces</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated collection of our finest residential interior projects
            crafted with elegance, precision, and architectural thinking.
          </p>
        </div>
      </section>

      {/* Premium Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {spaces.map((space, i) => (
              <Card
                key={space.id}
                space={space}
                index={i}
                onVisible={(id) =>
                  !visible.includes(id) &&
                  setVisible((v) => [...v, id])
                }
                isVisible={visible.includes(space.id)}
              />
            ))}
          </div>
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
        "group transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Link href={`/projects/${space.id}`}>
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src={space.images[0].src}
            alt={space.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90" />

          {/* Text on image */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
              {space.category}
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl leading-tight">
              {space.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
            {space.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-accent uppercase text-xs tracking-wider">
            Explore Project <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </div>
  );
}
