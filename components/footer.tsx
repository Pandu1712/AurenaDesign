"use client";

import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-primary-foreground/80">
                <span className="font-serif text-lg font-bold">A</span>
              </div>
              <div>
                <div className="text-sm font-medium tracking-wider uppercase">Aurenza</div>
                <div className="text-xs tracking-widest uppercase opacity-70">Design Studio</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Transforming spaces into masterpieces. We bring your vision to life with 
              innovative design solutions and unparalleled craftsmanship.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-foreground/30 
                           hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-80" />
                <span className="text-sm opacity-80 leading-relaxed">
                  Plot No. 123, Banjara Hills,<br />
                  Hyderabad, Telangana - 500034
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 opacity-80" />
                <a href="tel:+918341012026" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300">
                  +91 83410 12026
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-80" />
                <a href="mailto:info@aurenzadesign.com" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300">
                  info@aurenzadesign.com
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Working Hours</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>2025 <strong>Aurenza Design Studio.</strong> All rights reserved.</p>
            <p>Designed with passion for excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
