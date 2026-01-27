"use client";

import Image from "next/image";
import { X } from "lucide-react";

type ServicePopupProps = {
  data: {
    title: string;
    description: string;
    benefits: string[];
    included: string[];
    process: string[];
    images: string[];
  };
  onClose: () => void;
};

export default function ServicePopup({ data, onClose }: ServicePopupProps) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-10">
      <div className="relative w-full max-w-7xl max-h-[92vh] overflow-y-auto rounded-2xl bg-background shadow-2xl border border-border/40 p-6 md:p-10">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full hover:bg-muted transition"
        >
          <X />
        </button>

        {/* Title & Description */}
        <div className="mb-10 pr-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            {data.description}
          </p>
        </div>

        {/* Body */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                {data.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">What’s Included</h3>
              <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                {data.included.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Process</h3>
              <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
                {data.process.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ol>
            </section>
          </div>

          {/* RIGHT IMAGES */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Project Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              {data.images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group"
                >
                  <Image
                    src={img}
                    alt="project"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
