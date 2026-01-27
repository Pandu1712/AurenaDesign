"use client";

import { useRef, useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ArrowRight, Star, Quote, Building2, Home, Hotel } from "lucide-react";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner",
    company: "Jubilee Hills Residence",
    type: "Residential",
    rating: 5,
    content: "Aurenza Design Studio transformed our home beyond our wildest dreams. Their attention to detail and creative vision brought our space to life in ways we never imagined. The team was professional, responsive, and truly cared about making our vision a reality.",
    image: null,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "CEO",
    company: "TechStart Solutions",
    type: "Commercial",
    rating: 5,
    content: "The team designed our office space with incredible professionalism. Our employees love the new environment, and we've seen a noticeable improvement in productivity and morale. The biophilic design elements they incorporated are simply stunning.",
    image: null,
  },
  {
    id: 3,
    name: "Ananya Reddy",
    role: "Property Developer",
    company: "Reddy Constructions",
    type: "Commercial",
    rating: 5,
    content: "Working with Aurenza has been a game-changer for our projects. Their designs consistently exceed expectations and add significant value to our developments. They're now our go-to interior design partner for all premium projects.",
    image: null,
  },
  {
    id: 4,
    name: "Vikram Mehta",
    role: "Hotelier",
    company: "Heritage Hotels Group",
    type: "Hospitality",
    rating: 5,
    content: "The boutique hotel design they created for us perfectly captures the essence of Hyderabadi heritage while offering modern luxury. Our guests consistently praise the interiors, and the design has become a key differentiator for our brand.",
    image: null,
  },
  {
    id: 5,
    name: "Sneha Patel",
    role: "Homeowner",
    company: "Banjara Hills Apartment",
    type: "Residential",
    rating: 5,
    content: "From the first consultation to the final reveal, Aurenza made the entire process smooth and enjoyable. They listened to our needs, understood our style, and delivered a home that feels uniquely ours. Highly recommended!",
    image: null,
  },
  {
    id: 6,
    name: "Dr. Arun Krishnan",
    role: "Medical Director",
    company: "Wellness Clinic",
    type: "Commercial",
    rating: 5,
    content: "Our clinic needed to feel both professional and calming. Aurenza achieved this balance perfectly. Patients often comment on how relaxing our space feels, which is exactly what we wanted. Excellent work!",
    image: null,
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "4.9", label: "Average Rating" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
];

function getIcon(type: string) {
  switch (type) {
    case "Commercial":
      return Building2;
    case "Hospitality":
      return Hotel;
    default:
      return Home;
  }
}

export default function ReviewsPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState<number[]>([]);

  useEffect(() => {
    setIsHeaderVisible(true);
  }, []);

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
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold mb-6 text-balance">
              What Our Clients Say
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our valued clients 
              have to say about their experience working with Aurenza Design Studio.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={cn(
                  "text-center transition-all duration-700 transform",
                  isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="font-serif text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard 
                key={review.id} 
                review={review} 
                index={index}
                onVisible={(id) => {
                  if (!visibleReviews.includes(id)) {
                    setVisibleReviews(prev => [...prev, id]);
                  }
                }}
                isVisible={visibleReviews.includes(review.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Let us help you create a space you&apos;ll love. Schedule a free consultation 
            and discover the Aurenza difference.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-medium tracking-wide uppercase text-sm transition-all duration-300 hover:gap-4"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface ReviewCardProps {
  review: typeof reviews[0];
  index: number;
  onVisible: (id: number) => void;
  isVisible: boolean;
}

function ReviewCard({ review, index, onVisible, isVisible }: ReviewCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = getIcon(review.type);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(review.id);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [onVisible, review.id]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative bg-card border border-border p-8 transition-all duration-700 transform hover:shadow-lg hover:-translate-y-1",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Quote icon */}
      <Quote className="absolute top-6 right-6 w-10 h-10 text-muted/30" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed mb-8 relative z-10">
        &ldquo;{review.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-muted flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
          <div className="font-semibold">{review.name}</div>
          <div className="text-sm text-muted-foreground">{review.role}</div>
          <div className="text-xs text-accent">{review.company}</div>
        </div>
      </div>
    </div>
  );
}
