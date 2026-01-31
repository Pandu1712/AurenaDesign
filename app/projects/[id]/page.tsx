"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { spaces } from "@/lib/projects-data";

export default function SpaceDetailPage() {
  const params = useParams();
  const spaceId = Number(params.id);
  const space = spaces.find((s) => s.id === spaceId);

  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!space) return null;

  const nextImage = () =>
    setIndex((prev) => (prev + 1) % space.images.length);
  const prevImage = () =>
    setIndex((prev) =>
      prev === 0 ? space.images.length - 1 : prev - 1
    );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* TITLE */}
      <section className="pt-28 pb-10 text-center bg-secondary">
        <Link href="/projects" className="inline-flex items-center gap-2 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        <span className="text-accent text-sm tracking-[0.3em] uppercase block mb-4">
          {space.category}
        </span>

        <h1 className="font-serif text-4xl lg:text-6xl font-bold">
          {space.title}
        </h1>
      </section>

      {/* RESPONSIVE CAROUSEL (NO CROP, CONTROLLED SIZE) */}
   <section className="relative w-full py-10 group overflow-hidden">

        <div className="relative w-full flex items-center justify-center max-h-[70vh] bg-secondary">

          <Image
            src={space.images[index].src}
            alt=""
            width={1400}
            height={900}
            className="max-h-[70vh] w-auto object-contain cursor-pointer"
            onClick={() => setLightbox(index)}
            priority
          />
        </div>

        {/* Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
        >
          <ArrowRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {space.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === i ? "bg-accent scale-125" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT & FEATURES */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">
              About This Space
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {space.fullDescription}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {space.description}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">
              Key Features
            </h2>
            <ul className="space-y-4">
              {space.features.map((f, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            Gallery
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {space.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                className="relative h-[360px] rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-[92%] h-[92%]">
            <Image
              src={space.images[lightbox].src}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
