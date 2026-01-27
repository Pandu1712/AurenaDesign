"use client";

import React, { useRef, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { spaces } from "@/lib/projects-data";

export default function SpaceDetailPage() {
  const params = useParams();
  const spaceId = Number(params.id);
  const space = spaces.find((s) => s.id === spaceId);

  const [activeImage, setActiveImage] = useState(0);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  if (!space) {
    return (
      <div className="min-h-screen bg-background">
        <Header variant="light" />
        <div className="pt-32 pb-16 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Space Not Found</h1>
          <Link href="/projects" className="text-accent hover:underline">
            Back
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const nextSpace = spaces.find((s) => s.id === spaceId + 1) || spaces[0];
  const prevSpace =
    spaces.find((s) => s.id === spaceId - 1) ||
    spaces[spaces.length - 1];

  return (
    <div className="min-h-screen bg-background">
      <Header variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <span className="text-accent text-sm tracking-[0.3em] uppercase block mb-4">
            {space.category}
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold">
            {space.title}
          </h1>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative aspect-[16/10] overflow-hidden">
              <img
                src={space.images[activeImage].src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {space.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden",
                    index === activeImage && "ring-2 ring-accent"
                  )}
                >
                  <img
                    src={image.src}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">
              About This Space
            </h2>
            <p className="text-muted-foreground mb-6">
              {space.fullDescription}
            </p>
            <p className="text-muted-foreground">{space.description}</p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">
              Key Features
            </h2>
            <ul className="space-y-4">
              {space.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {space.images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden cursor-pointer"
              onClick={() => setActiveImage(i)}
            >
              <img
                src={img.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between">
          <Link href={`/projects/${prevSpace.id}`}>
            ← {prevSpace.title}
          </Link>
          <Link href={`/projects/${nextSpace.id}`}>
            {nextSpace.title} →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
