"use client";

import { useRef, useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { serviceDetails, ServiceKey } from "@/lib/service-details";
import ServicePopup from "@/components/ServicePopup";

/* -------------------- SERVICES DATA -------------------- */

const services: {
  id: ServiceKey;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: { text: string; highlight: string; end: string }[];
  imagePosition: "left" | "right";
}[] = [
  {
    id: "residential",
    number: "01",
    title: "Residential Interior Design",
    subtitle: "Aurenza Design Studio",
    description: "Complete home design solutions, from concept to execution.",
    image:
      "/Reside.jpeg",
    features: [
      {
        text: "Specialized in",
        highlight: "space planning, furniture selection",
        end: ", and decor styling.",
      },
      {
        text: "Transform your living spaces into",
        highlight: "dream homes",
        end: ".",
      },
      {
        text: "End-to-end project management with",
        highlight: "dedicated consultants",
        end: ".",
      },
    ],
    imagePosition: "left",
  },
  {
    id: "consultation",
    number: "02",
    title: "Design Consultation",
    subtitle: "Aurenza Design Studio",
    description: "Expert interior design consultation tailored to your space.",
    image:
      "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769567967/WhatsApp_Image_2026-01-27_at_21.11.33_bczg9r.jpg",
    features: [
      {
        text: "Expert advice for",
        highlight: "layout optimization",
        end: ".",
      },
      {
        text: "Guidance for",
        highlight: "materials and finishes",
        end: ".",
      },
      {
        text: "Avoid",
        highlight: "costly mistakes",
        end: ".",
      },
    ],
    imagePosition: "right",
  },
  {
  id: "customFurniture",
  number: "03",
  title: "Custom Furniture Design",
  subtitle: "Aurenza Design Studio",
  description: "Bespoke furniture pieces crafted to perfectly match your space and style.",
  image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769567966/WhatsApp_Image_2026-01-27_at_21.13.02_efxj2c.jpg",
  features: [
    {
      text: "Tailor-made furniture for",
      highlight: "perfect fit and functionality",
      end: ".",
    },
    {
      text: "Crafted by",
      highlight: "skilled artisans with premium materials",
      end: ".",
    },
    {
      text: "Unique designs that",
      highlight: "elevate your interiors",
      end: ".",
    },
  ],
  imagePosition: "left",
},
{
  id: "colorConsultancy",
  number: "04",
  title: "Color Consultancy",
  subtitle: "Aurenza Design Studio",
  description: "Expert guidance to create the perfect color palette for your interiors.",
  image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769567953/WhatsApp_Image_2026-01-27_at_21.14.49_hrrttw.jpg",
  features: [
    {
      text: "Personalized",
      highlight: "color palette creation",
      end: ".",
    },
    {
      text: "Enhance mood using",
      highlight: "color psychology",
      end: ".",
    },
    {
      text: "Avoid repainting with",
      highlight: "professional color planning",
      end: ".",
    },
  ],
  imagePosition: "right",
},
{
  id: "projectManagement",
  number: "05",
  title: "Project Management",
  subtitle: "Aurenza Design Studio",
  description: "End-to-end coordination to ensure your interior projects are completed on time and within budget.",
  image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769567952/WhatsApp_Image_2026-01-27_at_21.16.59_phac9c.jpg",
  features: [
    {
      text: "Seamless coordination between",
      highlight: "designers, contractors, and clients",
      end: ".",
    },
    {
      text: "Ensure",
      highlight: "on-time project delivery",
      end: ".",
    },
    {
      text: "Maintain",
      highlight: "quality and budget control",
      end: ".",
    },
  ],
  imagePosition: "left",
},
{
  id: "spacePlanning",
  number: "06",
  title: "Space Planning",
  subtitle: "Aurenza Design Studio",
  description: "Strategic space arrangement to enhance flow, comfort, and functionality.",
  image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769567952/WhatsApp_Image_2026-01-27_at_21.18.41_yocdsy.jpg",
  features: [
    {
      text: "Optimize every",
      highlight: "square foot of your space",
      end: ".",
    },
    {
      text: "Improve movement and",
      highlight: "functional flow",
      end: ".",
    },
    {
      text: "Create comfortable and",
      highlight: "balanced interiors",
      end: ".",
    },
  ],
  imagePosition: "right",
},
{
  id: "lightingDesign",
  number: "07",
  title: "Lighting Design",
  subtitle: "Aurenza Design Studio",
  description: "Strategic lighting solutions to enhance ambiance, functionality, and aesthetics.",
  image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769567952/WhatsApp_Image_2026-01-27_at_21.20.08_h2kejg.jpg",
  features: [
    {
      text: "Balanced",
      highlight: "ambient, task, and accent lighting",
      end: ".",
    },
    {
      text: "Energy-efficient",
      highlight: "smart lighting solutions",
      end: ".",
    },
    {
      text: "Highlight your",
      highlight: "architecture and decor",
      end: ".",
    },
  ],
  imagePosition: "left",
},
{
  id: "artProcurement",
  number: "08",
  title: "Art and Accessory Procurement",
  subtitle: "Aurenza Design Studio",
  description: "Curated art and accessories to personalize and elevate your interiors.",
  image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769567951/WhatsApp_Image_2026-01-27_at_21.21.08_xi43ib.jpg",
  features: [
    {
      text: "Source",
      highlight: "exclusive art and decor pieces",
      end: ".",
    },
    {
      text: "Professional",
      highlight: "curation and arrangement",
      end: ".",
    },
    {
      text: "Enhance",
      highlight: "aesthetic and personal expression",
      end: ".",
    },
  ],
  imagePosition: "right",
},
{
  id: "renovationRemodeling",
  number: "09",
  title: "Renovation and Remodeling",
  subtitle: "Aurenza Design Studio",
  description: "Transforming existing spaces into modern, functional, and beautiful environments.",
  image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769567951/WhatsApp_Image_2026-01-27_at_21.22.23_okjazq.jpg",
  features: [
    {
      text: "Upgrade your space with",
      highlight: "modern design solutions",
      end: ".",
    },
    {
      text: "Improve layout and",
      highlight: "overall functionality",
      end: ".",
    },
    {
      text: "Increase",
      highlight: "property value and appeal",
      end: ".",
    },
  ],
  imagePosition: "left",
},
{
  id: "stylingStaging",
  number: "10",
  title: "Styling and Staging",
  subtitle: "Aurenza Design Studio",
  description: "Professional styling and staging to create inviting, market-ready interiors.",
  image: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769567951/WhatsApp_Image_2026-01-27_at_21.24.02_nqt8fx.jpg",
  features: [
    {
      text: "Enhance",
      highlight: "visual appeal and atmosphere",
      end: ".",
    },
    {
      text: "Create",
      highlight: "functional and inviting spaces",
      end: ".",
    },
    {
      text: "Prepare homes for",
      highlight: "faster and higher-value sales",
      end: ".",
    },
  ],
  imagePosition: "right",
},

];

/* -------------------- SERVICE CARD -------------------- */

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const details = serviceDetails[service.id] ?? null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = service.imagePosition === "left";

return (
  <>
    <div
      ref={cardRef}
      className={cn(
        "relative grid lg:grid-cols-2 gap-14 items-center py-24",
        index !== 0 && "border-t border-border/50"
      )}
    >
      {/* IMAGE SIDE */}
      <div
        className={cn(
          "group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl",
          "transition-all duration-700",
          isLeft ? "lg:order-1" : "lg:order-2"
        )}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent z-10" />
<Image
  src={service.image}
  alt={service.title}
  fill
  className="object-contain transition-transform duration-1000 ease-out group-hover:scale-105"
/>

        {/* Service number badge */}
        <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs tracking-widest font-semibold shadow">
          {service.number}
        </div>
      </div>

      {/* CONTENT SIDE */}
      <div
        className={cn(
          "flex flex-col justify-center",
          isLeft ? "lg:order-2" : "lg:order-1"
        )}
      >
        <span className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
          {service.subtitle}
        </span>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          {service.title}
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
          {service.description}
        </p>

        <ul className="space-y-5 mb-10">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-accent mt-1 shrink-0" />
              <p className="text-base leading-relaxed">
                {feature.text}{" "}
                <strong className="text-foreground font-semibold">
                  {feature.highlight}
                </strong>
                {feature.end}
              </p>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <div className="flex flex-wrap gap-6">
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:gap-5 hover:shadow-xl"
          >
            View Details
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>

    {open && details && (
      <ServicePopup data={details} onClose={() => setOpen(false)} />
    )}
  </>
);

}

/* -------------------- PAGE -------------------- */

export default function ServicesClient() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container mx-auto px-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}
