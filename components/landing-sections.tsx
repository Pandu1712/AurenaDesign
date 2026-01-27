"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, Users, Home, Sparkles, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Footer } from "react-day-picker";
import Image from "next/image";

// Hero Section
export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="inline-block text-sm tracking-[0.3em] uppercase mb-6 text-accent">
              Welcome to Aurenza
            </span>
          </div>
          
          <h1 className={cn(
            "font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 transition-all duration-1000 delay-200 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="block text-balance">Crafting Spaces,</span>
            <span className="block text-accent">Creating Stories</span>
          </h1>
          
          <p className={cn(
            "text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Transform your living spaces into extraordinary works of art with our 
            bespoke interior design solutions.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-medium tracking-wide uppercase text-sm transition-all duration-300 hover:gap-4"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 font-medium tracking-wide uppercase text-sm transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

// About Preview Section
export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Home, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: Sparkles, value: "50+", label: "Design Awards" },
  ];

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Designing Dreams <br />
              <span className="text-accent">Since 2010</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              At Aurenza Design Studio, we believe that every space tells a story. 
              With over 15 years of experience, we have transformed countless homes 
              and commercial spaces into stunning environments that reflect our 
              clients' unique personalities and aspirations.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Our team of passionate designers combines creativity with functionality, 
              ensuring every project exceeds expectations while remaining true to your vision.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-accent font-medium tracking-wide uppercase text-sm hover:gap-4 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className={cn(
            "grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="font-serif text-4xl font-bold mb-2 text-accent">{stat.value}</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Preview Section
export function ServicesPreviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

const servicesOverview = [
  { number: "01", title: "Residential Interior Design", description: "Complete home design solutions from concept to execution." },
  { number: "02", title: "Design Consultation", description: "Expert interior consultation tailored to your space and budget." },
  { number: "03", title: "Custom Furniture Design", description: "Bespoke furniture crafted to perfectly match your space and style." },
  { number: "04", title: "Color Consultancy", description: "Professional color planning to create the perfect interior palette." },
  { number: "05", title: "Project Management", description: "Seamless coordination ensuring timely and quality project delivery." },
  { number: "06", title: "Space Planning", description: "Strategic layouts to enhance comfort, flow, and functionality." },
  { number: "07", title: "Lighting Design", description: "Layered lighting solutions to enhance ambiance and aesthetics." },
  { number: "08", title: "Art & Accessory Procurement", description: "Curated art and décor to personalize and elevate your interiors." },
  { number: "09", title: "Renovation & Remodeling", description: "Transform existing spaces into modern and functional environments." },
  { number: "10", title: "Styling & Staging", description: "Professional staging to create inviting, market-ready interiors." },
];


  return (
    <section ref={sectionRef} className="relative h-screen flex items-center bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 lg:py-20">
        <div className={cn(
          "text-center mb-16 transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Our Services</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What We <span className="text-accent">Offer</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From concept to completion, we provide comprehensive design solutions 
            tailored to your specific needs and aspirations.
          </p>
        </div>

       <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

         {servicesOverview.map((service, index) => (

            <div
              key={service.number}
              className={cn(
                "group relative p-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-500 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="absolute top-4 right-4 font-serif text-6xl font-bold text-white/5 group-hover:text-accent/20 transition-colors duration-300">
                {service.number}
              </span>
              <h3 className="font-serif text-xl font-semibold mb-4 relative z-10">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">{service.description}</p>
              {/* <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div> */}
            </div>
          ))}
        </div>

        <div className={cn(
          "text-center mt-12 transition-all duration-1000 delay-500 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-medium tracking-wide uppercase text-sm transition-all duration-300 hover:gap-4"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Projects Preview Section
export function ProjectsPreviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

const projects = [
  {
    id: "villa-modern",
    title: "Modern Luxury Villa",
    category: "Residential",
    image: "/projects/p1.jpg",
  },
  {
    id: "office-space",
    title: "Corporate Office Space",
    category: "Commercial",
    image: "/projects/p2.jpg",
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen Design",
    category: "Kitchen",
    image: "/projects/p3.jpg",
  },
  {
    id: "bedroom-suite",
    title: "Luxury Bedroom Suite",
    category: "Bedroom",
    image: "/projects/p4.jpg",
  },
  {
    id: "living-room",
    title: "Elegant Living Room",
    category: "Living Room",
    image: "/projects/p5.jpg",
  },
];


return (
  <section
    ref={sectionRef}
    className="relative py-24 bg-primary text-white overflow-hidden"
  >
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      {/* Heading */}
      <div
        className={cn(
          "flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div>
          <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="text-accent">Projects</span>
          </h2>
        </div>

        {/* Keep this if you still want View All button */}
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-accent font-medium tracking-wide uppercase text-sm mt-6 lg:mt-0 hover:gap-4 transition-all duration-300"
        >
          View All Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "group relative overflow-hidden rounded-xl aspect-[3/4] transition-all duration-700 hover:scale-[1.03] cursor-default",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-accent text-xs tracking-wider uppercase mb-2">
                {project.category}
              </span>

              <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              <div className="mt-4 flex items-center gap-2 text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-sm">Project Preview</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


}

// Reviews Section
export function ReviewsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      name: "Priya Sharma",
      role: "Homeowner",
      content: "Aurenza transformed our home beyond our wildest dreams. Their attention to detail and creative vision brought our space to life.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "The team designed our office space with incredible professionalism. Our employees love the new environment!",
      rating: 5,
    },
    {
      name: "Ananya Reddy",
      role: "Property Developer",
      content: "Working with Aurenza has been a game-changer for our projects. Their designs consistently exceed expectations.",
      rating: 5,
    },
  ];

  const nextReview = () => setActiveReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Quote className="absolute top-20 left-10 w-64 h-64 text-accent transform -rotate-12" />
        <Quote className="absolute bottom-20 right-10 w-48 h-48 text-accent transform rotate-12" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 lg:py-20">
        <div className={cn(
          "text-center mb-16 transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
        </div>

        <div className={cn(
          "max-w-4xl mx-auto transition-all duration-1000 delay-300 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/30" />
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(reviews[activeReview].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-center leading-relaxed mb-8 text-white/90">
                &ldquo;{reviews[activeReview].content}&rdquo;
              </p>
              
              <div className="text-center">
                <div className="font-serif text-xl font-semibold">{reviews[activeReview].name}</div>
                <div className="text-accent text-sm uppercase tracking-wider">{reviews[activeReview].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 flex items-center justify-center border border-white/30 hover:border-accent hover:text-accent transition-colors duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReview(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeReview ? "bg-accent scale-125" : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextReview}
              className="w-12 h-12 flex items-center justify-center border border-white/30 hover:border-accent hover:text-accent transition-colors duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Preview Section
export function ContactPreviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Get in Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-balance">
              Let&apos;s Create Something <span className="text-accent">Beautiful Together</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Ready to transform your space? Contact us today for a free consultation 
              and let&apos;s discuss how we can bring your vision to life.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Address</div>
                  <div className="text-white">Plot No. 123, Banjara Hills, Hyderabad - 500034</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Phone</div>
                  <a href="tel:+918341012026" className="text-white hover:text-accent transition-colors">+91 83410 12026</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Email</div>
                  <a href="mailto:info@aurenzadesign.com" className="text-white hover:text-accent transition-colors">info@aurenzadesign.com</a>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-medium tracking-wide uppercase text-sm transition-all duration-300 hover:gap-4"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Contact Form Preview */}
          <div className={cn(
            "bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <h3 className="font-serif text-2xl font-semibold mb-2">Quick Inquiry</h3>
            <p className="text-white/60 mb-8">Send us a message and we&apos;ll get back to you soon.</p>
            
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-4 font-medium tracking-wide uppercase text-sm hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </section>
    
    
  );
}
