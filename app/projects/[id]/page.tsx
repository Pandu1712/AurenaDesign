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

  const [activeImage, setActiveImage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!space) return null;

  const nextSpace = spaces.find((s) => s.id === spaceId + 1) || spaces[0];
  const prevSpace =
    spaces.find((s) => s.id === spaceId - 1) ||
    spaces[spaces.length - 1];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href="/projects" className="flex items-center gap-2 mb-6">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>

          <span className="text-accent text-sm tracking-[0.3em] uppercase block mb-4">
            {space.category}
          </span>

          <h1 className="font-serif text-5xl lg:text-7xl font-bold">
            {space.title}
          </h1>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className="w-full bg-white rounded-xl shadow-lg p-8 cursor-pointer"
            onClick={() => setLightbox(activeImage)}
          >
            <div className="relative w-full h-[520px]">
              <Image
                src={space.images[activeImage].src}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* THUMBNAILS */}
          <div className="mt-12 flex gap-6 overflow-x-auto pb-4">
            {space.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(i)}
                className={`min-w-[140px] h-32 bg-white p-3 rounded-lg shadow cursor-pointer transition ${
                  activeImage === i
                    ? "ring-2 ring-accent scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <div className="relative w-full h-full">
                  <Image src={img.src} alt="" fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION & FEATURES */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8">
              About This Space
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {space.fullDescription}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {space.description}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold mb-8">
              Key Features
            </h2>
            <ul className="space-y-5">
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
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-20 text-center">
            Space Gallery
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {space.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                className="bg-white p-6 rounded-xl shadow-lg cursor-pointer"
              >
                <div className="relative w-full h-[420px]">
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIOUS / NEXT NAVIGATION */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between">
          <Link
            href={`/projects/${prevSpace.id}`}
            className="flex items-center gap-3 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
            <div>
              <div className="text-sm text-muted-foreground">Previous</div>
              <div className="font-serif text-xl">{prevSpace.title}</div>
            </div>
          </Link>

          <Link
            href={`/projects/${nextSpace.id}`}
            className="flex items-center gap-3 group"
          >
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Next</div>
              <div className="font-serif text-xl">{nextSpace.title}</div>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-[90%] h-[85%]">
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
