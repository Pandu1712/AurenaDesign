export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  description: string;
  fullDescription: string;
  features: string[];
  color: string;
  images: { title: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Villa Interiors",
    category: "Residential",
    location: "Jubilee Hills, Hyderabad",
    year: "2024",
    area: "4,500 sq.ft",
    description: "A contemporary villa design featuring clean lines, natural materials, and seamless indoor-outdoor living spaces.",
    fullDescription: "This stunning modern villa in Jubilee Hills showcases our commitment to creating spaces that harmoniously blend contemporary aesthetics with functional living. The design emphasizes open floor plans, abundant natural light, and a sophisticated color palette that creates a serene yet luxurious atmosphere. Every element has been carefully curated to reflect the homeowners' lifestyle while maximizing the potential of the beautiful hillside location.",
    features: [
      "Open-concept living and dining areas",
      "Floor-to-ceiling windows with panoramic views",
      "Custom Italian marble flooring",
      "Smart home automation system",
      "Indoor-outdoor entertainment spaces",
      "Designer lighting throughout",
    ],
    color: "from-amber-500/30",
    images: [
      { title: "Living Room", description: "Expansive living area with custom furniture" },
      { title: "Master Bedroom", description: "Serene retreat with private balcony" },
      { title: "Kitchen", description: "State-of-the-art modular kitchen" },
      { title: "Dining Area", description: "Elegant dining space for entertaining" },
    ],
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    category: "Residential",
    location: "Banjara Hills, Hyderabad",
    year: "2024",
    area: "6,200 sq.ft",
    description: "An opulent penthouse featuring panoramic city views, premium finishes, and sophisticated entertainment spaces.",
    fullDescription: "Perched atop one of Hyderabad's most prestigious addresses, this penthouse represents the pinnacle of luxury living. Our design team created an environment that feels both grand and intimate, with carefully proportioned spaces that flow seamlessly from one to another. The interiors feature a curated collection of international materials and custom furniture pieces that elevate the living experience to new heights.",
    features: [
      "360-degree panoramic city views",
      "Private rooftop terrace with pool",
      "Home theater with Dolby Atmos",
      "Wine cellar and tasting room",
      "Custom millwork and built-ins",
      "Imported stone and wood finishes",
    ],
    color: "from-emerald-500/30",
    images: [
      { title: "Grand Living", description: "Double-height living room with chandelier" },
      { title: "Master Suite", description: "Luxurious master with walk-in closet" },
      { title: "Home Theater", description: "Private cinema experience" },
      { title: "Rooftop", description: "Private terrace with infinity pool" },
    ],
  },
  {
    id: 3,
    title: "Corporate Headquarters",
    category: "Commercial",
    location: "HITEC City, Hyderabad",
    year: "2023",
    area: "25,000 sq.ft",
    description: "A dynamic corporate office designed to foster collaboration, creativity, and employee well-being.",
    fullDescription: "This corporate headquarters was designed with the modern workforce in mind, creating an environment that balances focused work with collaborative spaces. The design incorporates biophilic elements throughout, bringing nature indoors to improve air quality and employee well-being. Flexible workstations, informal meeting areas, and state-of-the-art conference facilities ensure the space adapts to various work styles and needs.",
    features: [
      "Flexible open-plan workspaces",
      "Biophilic design with living walls",
      "Ergonomic furniture throughout",
      "Advanced AV conference rooms",
      "Employee wellness and recreation zones",
      "Sustainable and eco-friendly materials",
    ],
    color: "from-blue-500/30",
    images: [
      { title: "Reception", description: "Impressive entry with brand integration" },
      { title: "Open Office", description: "Collaborative workspace design" },
      { title: "Conference Room", description: "Executive meeting facilities" },
      { title: "Break Area", description: "Employee lounge and cafeteria" },
    ],
  },
  {
    id: 4,
    title: "Boutique Hotel",
    category: "Hospitality",
    location: "Gachibowli, Hyderabad",
    year: "2023",
    area: "15,000 sq.ft",
    description: "An intimate boutique hotel that combines local heritage with contemporary luxury.",
    fullDescription: "This boutique hotel project challenged us to create a unique hospitality experience that celebrates the rich cultural heritage of Hyderabad while providing modern comfort and luxury. Each of the 24 rooms tells a different story through carefully curated art pieces, local craftsmanship, and thoughtful amenities. The common areas serve as gathering spaces that encourage guests to connect with each other and the local community.",
    features: [
      "24 uniquely designed guest rooms",
      "Locally sourced art and crafts",
      "Rooftop restaurant and lounge",
      "Courtyard with traditional elements",
      "Spa and wellness facilities",
      "Custom furniture and fixtures",
    ],
    color: "from-rose-500/30",
    images: [
      { title: "Lobby", description: "Welcoming entrance with local art" },
      { title: "Suite", description: "Heritage-inspired luxury suite" },
      { title: "Restaurant", description: "Rooftop dining experience" },
      { title: "Courtyard", description: "Tranquil central gathering space" },
    ],
  },
  {
    id: 5,
    title: "Minimalist Apartment",
    category: "Residential",
    location: "Madhapur, Hyderabad",
    year: "2024",
    area: "2,800 sq.ft",
    description: "A serene apartment design embracing minimalist principles with warm, natural materials.",
    fullDescription: "This apartment renovation demonstrates how minimalist design can create warm, inviting spaces rather than cold, sterile environments. We stripped away unnecessary elements to reveal the essential beauty of each space, then layered in carefully selected materials and furniture pieces that add texture and warmth. The result is a home that feels spacious, calm, and deeply connected to its occupants' lifestyle.",
    features: [
      "Clean lines and neutral palette",
      "Hidden storage solutions",
      "Natural oak and stone materials",
      "Integrated lighting design",
      "Custom built-in furniture",
      "Zen-inspired bathroom retreats",
    ],
    color: "from-stone-500/30",
    images: [
      { title: "Living Space", description: "Minimalist living with hidden storage" },
      { title: "Bedroom", description: "Serene sleeping quarters" },
      { title: "Bathroom", description: "Spa-like bathroom design" },
      { title: "Kitchen", description: "Streamlined culinary space" },
    ],
  },
  {
    id: 6,
    title: "Art Collector's Home",
    category: "Residential",
    location: "Film Nagar, Hyderabad",
    year: "2023",
    area: "5,500 sq.ft",
    description: "A sophisticated residence designed as a gallery space for an extensive art collection.",
    fullDescription: "Designing for an avid art collector required us to think of this home as both a living space and a gallery. Every wall, lighting fixture, and furniture piece was carefully considered in relation to the art it would complement. We created flexible display systems that allow the collection to evolve, while ensuring the home maintains its warmth and livability. The result is a space where art and life coexist in perfect harmony.",
    features: [
      "Gallery-quality lighting system",
      "Climate-controlled storage",
      "Rotating display walls",
      "Artist studio space",
      "Sculpture garden terrace",
      "Entertainment and viewing rooms",
    ],
    color: "from-indigo-500/30",
    images: [
      { title: "Gallery Hall", description: "Main exhibition corridor" },
      { title: "Living Gallery", description: "Art-integrated living space" },
      { title: "Studio", description: "Private artist workspace" },
      { title: "Sculpture Garden", description: "Outdoor exhibition space" },
    ],
  },
];

export const categories = ["All", "Residential", "Commercial", "Hospitality"];


