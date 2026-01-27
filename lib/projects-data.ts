export interface Space {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  features: string[];
  color: string;
  images: { src: string; title: string; description: string }[];
}

export const spaces: Space[] = [
  {
    id: 1,
    title: "Luxury Bedroom Interiors",
    category: "Bedroom",
    description: "Elegant bedroom interiors designed for comfort and luxury living.",
    fullDescription:
      "Our bedroom interiors combine aesthetics and comfort with custom wardrobes, lighting, wall panels, and premium finishes.",
    features: [
      "Custom headboard panels",
      "False ceiling ambient lighting",
      "Wardrobe with loft storage",
      "Premium flooring",
    ],
    color: "from-rose-500/30",
    images: [
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769522094/WhatsApp_Image_2026-01-26_at_21.55.05_1_fcdpqj.jpg", title: "Master Bedroom", description: "Luxury master bedroom" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521893/WhatsApp_Image_2026-01-26_at_21.54.58_2_jpi5x8.jpg", title: "Guest Bedroom", description: "Guest bedroom" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521893/WhatsApp_Image_2026-01-26_at_21.54.57_v0ywlw.jpg", title: "Kids Bedroom", description: "Kids bedroom" },
    ],
  },
  {
    id: 2,
    title: "Modern Modular Kitchen",
    category: "Kitchen",
    description: "Smart modular kitchens with maximum storage.",
    fullDescription: "Premium modular kitchen layouts with intelligent storage.",
    features: ["Soft close cabinets", "Quartz countertops", "Tall pantry units"],
    color: "from-amber-500/30",
    images: [
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521895/WhatsApp_Image_2026-01-26_at_21.54.59_epzbl9.jpg", title: "Kitchen", description: "Kitchen layout" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769522159/WhatsApp_Image_2026-01-26_at_21.55.07_3_tsfjxc.jpg", title: "Cabinets", description: "Storage cabinets" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521897/WhatsApp_Image_2026-01-26_at_21.55.03_2_mvrphc.jpg", title: "Counter", description: "Countertop" },
      {src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769522159/WhatsApp_Image_2026-01-26_at_21.55.07_eimqex.jpg", title: "Pantry", description: "Pantry unit" },
    ],
  },
  {
    id: 3,
    title: "Elegant Living Hall",
    category: "Hall",
    description: "Living hall interiors with TV units and decor.",
    fullDescription: "Designer TV units and wall paneling for living spaces.",
    features: ["TV unit", "False ceiling lighting", "Wall panels"],
    color: "from-emerald-500/30",
    images: [
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521897/WhatsApp_Image_2026-01-26_at_21.55.02_ylawit.jpg", title: "TV Unit", description: "TV wall" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521895/WhatsApp_Image_2026-01-26_at_21.54.59_1_k3rljn.jpg", title: "Seating", description: "Sofa layout" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521887/WhatsApp_Image_2026-01-26_at_21.54.55_2_fa5rx0.jpg", title: "Decor", description: "Wall decor" },
    ],
  },
  {
    id: 4,
    title: "Home Work Room",
    category: "WorkRoom",
    description: "Study and home office solutions.",
    fullDescription: "Ergonomic workroom interiors.",
    features: ["Study desk", "Bookshelves", "Lighting"],
    color: "from-blue-500/30",
    images: [
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521883/WhatsApp_Image_2026-01-26_at_21.54.54_3_ssqw5o.jpg", title: "Desk", description: "Study desk" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521867/WhatsApp_Image_2026-01-26_at_21.54.19_2_hlt1z4.jpg", title: "Shelf", description: "Bookshelf" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521866/WhatsApp_Image_2026-01-26_at_21.54.49_2_z2kpci.jpg", title: "Workspace", description: "Workspace" },
    ],
  },
  {
    id: 5,
    title: "Designer Cupboards",
    category: "Cupboards",
    description: "Wardrobes and cupboards with storage.",
    fullDescription: "Sliding and hinged wardrobes with organizers.",
    features: ["Sliding wardrobe", "Loft storage", "Organizers"],
    color: "from-stone-500/30",
    images: [
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521861/WhatsApp_Image_2026-01-26_at_21.54.47_1_jolvxh.jpg", title: "Sliding", description: "Sliding wardrobe" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521856/WhatsApp_Image_2026-01-26_at_21.54.46_3_rp0d88.jpg", title: "Hinged", description: "Hinged wardrobe" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521856/WhatsApp_Image_2026-01-26_at_21.54.46_ia1jwn.jpg", title: "Storage", description: "Storage" },
    ],
  },
  {
    id: 6,
    title: "Pooja Room Interiors",
    category: "God Room ",
    description: "Wardrobes and cupboards with storage.",
    fullDescription: "Sliding and hinged wardrobes with organizers.",
    features: ["Sliding wardrobe", "Loft storage", "Organizers"],
    color: "from-stone-500/30",
    images: [
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521882/WhatsApp_Image_2026-01-26_at_21.54.54_2_qxsls4.jpg", title: "Sliding", description: "Sliding wardrobe" },
      { src: "https://www.wedezinestudio.com/blogs/wp-content/uploads/2025/07/486791516_982752110637012_2537731303709328898_n.webp", title: "Hinged", description: "Hinged wardrobe" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkQvKXkdVK7_NnF3U8XCyaAHHVZJMHQTrIg&s", title: "Storage", description: "Storage" },
    ],
  },
  {
    id: 7,
    title: "Living Room Setup",
    category: "Living Room",
    description: "Wardrobes and cupboards with storage.",
    fullDescription: "Sliding and hinged wardrobes with organizers.",
    features: ["Sliding wardrobe", "Loft storage", "Organizers"],
    color: "from-stone-500/30",
    images: [
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521895/WhatsApp_Image_2026-01-26_at_21.54.59_1_k3rljn.jpg", title: "Sliding", description: "Sliding wardrobe" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769522157/WhatsApp_Image_2026-01-26_at_21.55.05_jjun5j.jpg", title: "Hinged", description: "Hinged wardrobe" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769522159/WhatsApp_Image_2026-01-26_at_21.55.08_lvwp70.jpg", title: "Storage", description: "Storage" },
    ],
  },
];

export const categories = ["All", "Bedroom", "Kitchen", "Hall", "WorkRoom", "Cupboards","God Room ","Living Room"];
