"use client";

import React, { useRef, useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Award,
  Users,
  Target,
  Shield,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

/* ---------------- VALUES (from screenshot) ---------------- */

const values = [
  {
    icon: Target,
    title: "Creative & Modern Designs",
    description:
      "Stylish, functional, and personalized designs that match your taste and lifestyle.",
  },
  {
    icon: Users,
    title: "End-to-End Service",
    description:
      "From planning to execution, we handle everything for a smooth, stress-free process.",
  },
  {
    icon: Award,
    title: "Quality Materials & Workmanship",
    description:
      "Reliable materials and skilled professionals ensure a premium finish.",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description:
      "Clear cost breakdowns with no hidden charges — you know exactly what you pay for.",
  },
];

/* ---------------- PAGE ---------------- */

export default function AboutPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    setIsHeaderVisible(true);
  }, []);

  const handleSectionVisible = (id: string) => {
    if (!visibleSections.includes(id)) {
      setVisibleSections((prev) => [...prev, id]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header variant="light" />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className={cn(
              "max-w-3xl transition-all duration-1000 transform",
              isHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
              About Aurenza Design Studio
            </span>

            <h1 className="font-serif text-5xl lg:text-7xl font-bold mb-6 text-balance">
              Transforming Spaces into Beautiful Experiences
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Aurenza Design Studio is a creative interior design studio dedicated to
              transforming spaces into beautiful, functional, and personalized
              environments. With a passion for thoughtful design and attention
              to detail, we offer complete interior solutions for homes, offices,
              and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <AnimatedSection
        id="story"
        onVisible={handleSectionVisible}
        isVisible={visibleSections.includes("story")}
        className="py-20"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Aurenza Design Studio focuses on blending aesthetics with
                  practicality, ensuring every project reflects the lifestyle,
                  personality, and needs of its clients. From concept development
                  and space planning to material selection and project execution,
                  we deliver end-to-end design services with a commitment to
                  quality and craftsmanship.
                </p>
                <p>
                  Driven by innovation and inspired by modern design trends, our
                  team works closely with clients to turn ideas into reality —
                  creating interiors that are stylish, comfortable, and timeless.
                  Whether it’s a full home makeover, a modular kitchen, a luxury
                  bedroom, or a contemporary office setup, we bring creativity
                  and professionalism to every project.
                </p>
                <p>
                  Our aim is to make every space uniquely meaningful, ensuring
                  designs that not only look beautiful but also enhance everyday
                  living.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-8xl font-bold text-accent/20">
                    Design
                  </div>
                  <div className="text-lg font-medium mt-2">
                    Craft • Creativity • Comfort
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent flex items-center justify-center">
                <Award className="w-12 h-12 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* VALUES */}
      <AnimatedSection
        id="values"
        onVisible={handleSectionVisible}
        isVisible={visibleSections.includes("values")}
        className="py-20 bg-secondary"
      >
      <div className="container mx-auto px-4 lg:px-8">
  <div className="text-center mb-16">
    <h2 className="font-serif text-4xl font-bold">
      Why Choose Aurenza Design Studio
    </h2>
  </div>

  <div className="max-w-5xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
    
    {[
      {
        title: "Creative & Modern Designs",
        desc: "They offer stylish, functional, and personalized designs that match your taste and lifestyle.",
      },
      {
        title: "End-to-End Service",
        desc: "From planning to execution, they handle everything — making the entire process smooth and stress-free.",
      },
      {
        title: "Quality Materials & Workmanship",
        desc: "They use reliable, long-lasting materials and skilled professionals to ensure a premium finish.",
      },
      {
        title: "Transparent Pricing",
        desc: "Clear cost breakdowns with no hidden charges, so you know exactly what you’re paying for.",
      },
      {
        title: "On-Time Delivery",
        desc: "They follow a structured process and deliver projects within the promised timeline.",
      },
      {
        title: "Client-Focused Approach",
        desc: "They listen to your requirements carefully and create designs that truly fit your needs.",
      },
      {
        title: "Trusted & Experienced Team",
        desc: "A professional team with experience in residential and commercial interiors.",
      },
    ].map((item, index) => (
      <div key={index} className="flex gap-6">
        <div className="text-accent font-serif text-2xl font-bold">
          {index + 1}.
        </div>

        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
            {item.title}
          </h3>
          <p>{item.desc}</p>
        </div>
      </div>
    ))}

  </div>
</div>

      </AnimatedSection>

      {/* WHY CHOOSE US LIST */}
      <AnimatedSection
        id="why"
        onVisible={handleSectionVisible}
        isVisible={visibleSections.includes("why")}
        className="py-20"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Distinctive Qualities That Make Us Exceptional
              </h2>

              <ul className="space-y-4">
                {[
                  "On-Time Delivery with structured process and promised timeline",
                  "Client-Focused approach that listens carefully to your requirements",
                  "Trusted & experienced professional team",
                  "100% personalization — we mean it!",
                  "Streamlined one-stop interior solution",
                  "Adding value in every detail",
                  "Going the extra mile in support",
                  "Seamless services with regular progress updates",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <div className="font-serif text-6xl font-bold text-accent mb-4">
                  100%
                </div>
                <div className="text-lg font-medium">
                  Personalization & Premium Finish
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            Let’s Design Your Dream Space
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Partner with Aurenza Design Studio to transform your space into
            something truly exceptional. Book a consultation with our experts
            today.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide uppercase text-sm transition-all duration-300 hover:gap-4"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------------- ANIMATION WRAPPER ---------------- */

function AnimatedSection({
  id,
  children,
  onVisible,
  isVisible,
  className,
}: any) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && onVisible(id),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [id, onVisible]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      {children}
    </section>
  );
}
