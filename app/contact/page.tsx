"use client";

import React from "react"

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Jubilee enclave,Hitec city,", "Hyderabad, Telangana - 500081"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 85198 07011"],
    links: ["tel:85198 07011"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [" saisumanth2310@gmail.com"],
    links: ["mailto: saisumanth2310@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 10:00 AM - 7:00 PM", "Sat-Sun: 10:00 AM - 7:00 PM"],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/aurenza.designstudio?igsh=MTBnbXhhcGd6ODhyag%3D%3D", label: "Instagram" },
];

export default function ContactPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsHeaderVisible(true);
  }, []);
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const { name, email, phone, subject, message } = formData;

  const whatsappNumber = "918519807011"; // without + and spaces

  const whatsappMessage = `
New Contact Enquiry from Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${subject}

Message:
${message}
`;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");

  // optional UI reset
  setSubmitted(true);
  setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  setTimeout(() => setSubmitted(false), 3000);
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <Header  />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div
            className={cn(
              "transition-all duration-1000 transform",
              isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h1 className="font-serif text-6xl lg:text-8xl font-bold mb-6">
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div
              className={cn(
                "transition-all duration-1000 delay-200 transform",
                isHeaderVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}
            >
              <div className="mb-12">
                <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
                  Let&apos;s grab a coffee and jump on <span className="text-accent">conversation chat with us.</span>
                </h2>
                <p className="text-primary-foreground/70 leading-relaxed">
                  We&apos;d love to hear from you. Whether you have a question about our services, 
                  pricing, or just want to say hello, we&apos;re here to help.
                </p>
              </div>

              {/* Contact Info Grid */}
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="space-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-semibold">{info.title}</h3>
                    </div>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-primary-foreground/70 text-sm">
                        {info.links?.[i] ? (
                          <a 
                            href={info.links[i]} 
                            className="hover:text-accent transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 flex items-center justify-center border border-primary-foreground/20 
                               hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div
              className={cn(
                "bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-8 lg:p-12 transition-all duration-1000 delay-400 transform",
                isHeaderVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              )}
            >
              <h3 className="font-serif text-2xl font-semibold mb-2">Send us a Message</h3>
              <p className="text-primary-foreground/60 mb-8 text-sm">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-primary-foreground/70">Thank you for reaching out. We&apos;ll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="w-full bg-transparent border-b border-primary-foreground/30 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full bg-transparent border-b border-primary-foreground/30 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full bg-transparent border-b border-primary-foreground/30 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-primary-foreground/30 py-3 text-primary-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-primary text-primary-foreground">Select Service</option>
                        <option value="residential" className="bg-primary text-primary-foreground">Residential Design</option>
                        <option value="commercial" className="bg-primary text-primary-foreground">Commercial Design</option>
                        <option value="modular" className="bg-primary text-primary-foreground">Modular Kitchen</option>
                        <option value="renovation" className="bg-primary text-primary-foreground">Renovation</option>
                        <option value="other" className="bg-primary text-primary-foreground">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={5}
                      required
                      className="w-full bg-transparent border-b border-primary-foreground/30 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full bg-accent text-accent-foreground py-4 font-medium tracking-wide uppercase text-sm transition-all duration-300 flex items-center justify-center gap-2",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-accent/90"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-96 bg-primary-foreground/5 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
            <p className="text-primary-foreground/70">
              Jubilee enclave,  Hitec city, Hyderabad, Telangana - 500081
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
