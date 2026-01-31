"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, Users, Home, Sparkles, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Footer } from "react-day-picker";
import Image from "next/image";
import { spaces } from "@/lib/projects-data";



// Hero Section
export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-16 lg:pt-20 flex items-center justify-center overflow-hidden">

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
   <section
  ref={sectionRef}
  className="relative min-h-screen pt-20 lg:pt-24 pb-16 bg-primary text-white overflow-hidden flex items-center"
>
  {/* Background Accent */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" />
  </div>

  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">

      {/* Content */}
      <div
        className={cn(
          "transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        )}
      >
        <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
          About Us
        </span>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Designing Dreams <br />
          <span className="text-accent">Since 2010</span>
        </h2>

        <p className="text-white/80 text-lg leading-relaxed mb-6">
          At Aurenza Design Studio, we believe that every space tells a story.
          With over 15 years of experience, we have transformed countless homes
          into stunning environments that reflect our clients' personalities.
        </p>

        <p className="text-white/60 leading-relaxed mb-8">
          Our team combines creativity with functionality, ensuring every project
          exceeds expectations while staying true to your vision.
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
      <div
        className={cn(
          "grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 transform mt-10 lg:mt-0",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        )}
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-500"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
            <div className="font-serif text-3xl md:text-4xl font-bold mb-2 text-accent">
              {stat.value}
            </div>
            <div className="text-sm text-white/60 uppercase tracking-wider">
              {stat.label}
            </div>
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
   <section
  ref={sectionRef}
  className="relative min-h-screen pt-20 lg:pt-24 pb-16 bg-primary text-white overflow-hidden flex items-center"
>
  {/* Background */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent" />
  </div>

  <div className="container mx-auto px-4 lg:px-8 relative z-10">

    {/* Heading */}
    <div
      className={cn(
        "text-center mb-14 transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
        Our Services
      </span>

      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        What We <span className="text-accent">Offer</span>
      </h2>

      <p className="text-white/60 max-w-2xl mx-auto">
        From concept to completion, we provide comprehensive design solutions
        tailored to your needs.
      </p>
    </div>

    {/* Services */}
    <div className="relative">
      {/* Mobile scroll hint */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-primary to-transparent z-10 lg:hidden" />

      <div
        className="
          flex gap-6 overflow-x-auto pb-4 scroll-smooth
          lg:grid lg:grid-cols-3 xl:grid-cols-5 lg:overflow-visible
        "
      >
        {servicesOverview.map((service, index) => (
          <div
            key={service.number}
            className={cn(
              "group relative min-w-[80%] sm:min-w-[55%] lg:min-w-0 p-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <span className="absolute top-4 right-4 font-serif text-6xl font-bold text-white/5 group-hover:text-accent/20">
              {service.number}
            </span>

            <h3 className="font-serif text-xl font-semibold mb-4 relative z-10">
              {service.title}
            </h3>

            <p className="text-white/60 text-sm leading-relaxed relative z-10">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Button */}
    <div
      className={cn(
        "text-center mt-14 transition-all duration-1000 delay-500 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <Link
        href="/services"
        className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-medium tracking-wide uppercase text-sm hover:gap-4 transition-all duration-300"
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
    image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769522157/WhatsApp_Image_2026-01-26_at_21.55.05_jjun5j.jpg",
  },
  {
    id: "office-space",
    title: "Puja Room Design",
    category: "Puja Room",
    image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521882/WhatsApp_Image_2026-01-26_at_21.54.54_2_qxsls4.jpg",
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen Design",
    category: "Kitchen",
    image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521874/WhatsApp_Image_2026-01-26_at_21.54.52_1_m56m7q.jpg",
  },
  {
    id: "bedroom-suite",
    title: "Luxury Bedroom Suite",
    category: "Bedroom",
    image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521866/WhatsApp_Image_2026-01-26_at_21.54.19_1_k9fhce.jpg",
  },
  {
    id: "living-room",
    title: "Elegant Living Room",
    category: "Living Room",
    image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521870/WhatsApp_Image_2026-01-26_at_21.54.50_1_clrix4.jpg",
  },
];


return (
<section
  ref={sectionRef}
  className="relative py-24 pt-28 lg:pt-32 bg-primary text-white overflow-hidden"
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

      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-accent font-medium tracking-wide uppercase text-sm mt-6 lg:mt-0 hover:gap-4 transition-all duration-300"
      >
        View All Projects
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

    {/* Horizontal Scroll */}
    <div className="relative">

      {/* Fade */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-primary to-transparent z-10" />

      <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth scrollbar-hide">

        {spaces.slice(0, 8).map((space, index) => (
          <Link
            key={space.id}
            href={`/projects/${space.id}`}
            className={cn(
              "group relative overflow-hidden rounded-xl transition-all duration-700 hover:scale-[1.03]",
              // 👇 SMALLER WIDTHS
              "min-w-[65%] sm:min-w-[45%] md:min-w-[32%] lg:min-w-[22%] xl:min-w-[18%]",
              // 👇 SMALLER HEIGHTS
              "h-[240px] sm:h-[280px] lg:h-[340px]",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Image */}
            <Image
              src={space.images[0].src}
              alt={space.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <span className="text-accent text-xs tracking-wider uppercase mb-1">
                {space.category}
              </span>

              <h3 className="font-serif text-lg font-semibold text-white">
                {space.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                <span className="text-xs">Project Preview</span>
              </div>
            </div>
          </Link>
        ))}

      </div>
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
  name: "Srinivas Rao",
  role: "Villa Owner",
  content: "The design approach was thoughtful and elegant. Every corner of our villa now reflects warmth and sophistication.",
  rating: 5,
},
{
  name: "Lakshmi Narayanan",
  role: "Apartment Owner",
  content: "They utilized our space brilliantly. Storage, lighting, and aesthetics are perfectly balanced throughout the home.",
  rating: 5,
},
{
  name: "Haritha Devi",
  role: "Homeowner",
  content: "From concept to execution, the team ensured our home interiors felt luxurious yet comfortable for daily living.",
  rating: 5,
},
{
  name: "Venkatesh Iyer",
  role: "Independent House Owner",
  content: "Professional, creative, and detail-oriented. Our interiors now have a timeless and classy appeal.",
  rating: 5,
},
{
  name: "Swathi Ramesh",
  role: "Duplex Owner",
  content: "The color combinations and material selections completely elevated the look of our home. Truly impressive work.",
  rating: 5,
},
{
  name: "Karthikeya Varma",
  role: "Homeowner",
  content: "They understood our lifestyle needs and translated them beautifully into the interior design of our house.",
  rating: 5,
},
{
  name: "Divya Suresh",
  role: "Flat Owner",
  content: "Our compact flat now feels spacious and elegant thanks to their smart layout planning and décor choices.",
  rating: 5,
},
{
  name: "Raghavendra Prasad",
  role: "Villa Owner",
  content: "The attention to detailing in false ceiling, lighting, and furniture placement is simply outstanding.",
  rating: 5,
},
{
  name: "Meenakshi Pillai",
  role: "Homeowner",
  content: "Every room in our house tells a story now. The team’s design vision brought harmony to the entire space.",
  rating: 5,
},
{
  name: "Arjun Reddy",
  role: "Apartment Owner",
  content: "Elegant designs, timely delivery, and flawless execution. Our home looks straight out of a design magazine.",
  rating: 5,
},

  ];

  const nextReview = () => setActiveReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
  <section
  ref={sectionRef}
  className="relative min-h-screen pt-16 lg:pt-20 py-20 flex items-start lg:items-center bg-primary text-white overflow-hidden"
>
  {/* Background Quotes */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <Quote className="absolute top-20 left-6 lg:left-10 w-40 lg:w-64 h-40 lg:h-64 text-accent -rotate-12" />
    <Quote className="absolute bottom-20 right-6 lg:right-10 w-32 lg:w-48 h-32 lg:h-48 text-accent rotate-12" />
  </div>

  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    {/* Heading */}
    <div
      className={cn(
        "text-center mb-14 lg:mb-16 transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
        Testimonials
      </span>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
        What Our <span className="text-accent">Clients Say</span>
      </h2>
    </div>

    {/* Review Card */}
    <div
      className={cn(
        "max-w-4xl mx-auto transition-all duration-1000 delay-300 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-10 lg:p-12 rounded-xl">
        <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/30" />

        <div className="relative z-10">
          {/* Stars */}
          <div className="flex gap-1 mb-6 justify-center">
            {[...Array(reviews[activeReview].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>

          {/* Review text */}
          <p className="text-lg md:text-2xl text-center leading-relaxed mb-8 text-white/90">
            &ldquo;{reviews[activeReview].content}&rdquo;
          </p>

          {/* Author */}
          <div className="text-center">
            <div className="font-serif text-xl font-semibold">
              {reviews[activeReview].name}
            </div>
            <div className="text-accent text-sm uppercase tracking-wider">
              {reviews[activeReview].role}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4 mt-8 flex-wrap">
        <button
          onClick={prevReview}
          className="w-12 h-12 flex items-center justify-center border border-white/30 hover:border-accent hover:text-accent transition-colors"
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
                index === activeReview
                  ? "bg-accent scale-125"
                  : "bg-white/30 hover:bg-white/50"
              )}
            />
          ))}
        </div>

        <button
          onClick={nextReview}
          className="w-12 h-12 flex items-center justify-center border border-white/30 hover:border-accent hover:text-accent transition-colors"
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


  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

  const whatsappNumber = "918519807011";

  const text = `Hello, I have an inquiry from your website.

Name: ${name}
Email: ${email}
Message: ${message}`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};


  return (
   <section
  ref={sectionRef}
  className="relative min-h-screen py-20 lg:py-0 flex items-start lg:items-center bg-primary text-white overflow-hidden"
>
  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">

      {/* Left Content */}
      <div
        className={cn(
          "transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        )}
      >
        <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
          Get in Touch
        </span>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Let&apos;s Create Something{" "}
          <span className="text-accent">Beautiful Together</span>
        </h2>

        <div className="space-y-6 mb-10">
          <div>
            <div className="text-sm text-white/60 uppercase">Address</div>
            <div>Jubilee Enclave, Hitec City, Hyderabad - 500081</div>
          </div>

          <div>
            <div className="text-sm text-white/60 uppercase">Phone</div>
            <a href="tel:+918341012026" className="hover:text-accent">
              +91 83410 12026
            </a>
          </div>

          <div>
            <div className="text-sm text-white/60 uppercase">Email</div>
            <a
              href="mailto: aurenzadesignstudio@gmail.com"
              className="hover:text-accent"
            >
               aurenzadesignstudio@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Form */}
      <div
        className={cn(
          "bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 transition-all duration-1000 delay-300 transform",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        )}
      >
        <h3 className="font-serif text-2xl font-semibold mb-6">
          Quick Inquiry
        </h3>

        <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-4 uppercase text-sm"
          >
            Send Message on WhatsApp
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

    
    
  );
}
