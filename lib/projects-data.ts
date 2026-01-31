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
    title: "Luxury Master Bedroom",
    category: "Bedroom",
    description: "Premium bedroom interiors with wardrobe and paneling.",
    fullDescription: "Elegant master bedroom with custom headboard, wardrobes, and ambient lighting.",
    features: ["Headboard panel", "Wardrobe", "False ceiling lights"],
    color: "from-rose-500/30",
     images: [
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571927/WhatsApp_Image_2026-01-27_at_21.37.11_xj5wpr.jpg", title: "Master Bedroom 1", description: "Luxury setup" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571868/WhatsApp_Image_2026-01-27_at_21.37.11_1_xuhhof.jpg", title: "Master Bedroom 2", description: "Panel design" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571832/WhatsApp_Image_2026-01-27_at_21.37.11_2_dytqjj.jpg", title: "Master Bedroom 3", description: "Wardrobe view" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571804/WhatsApp_Image_2026-01-27_at_21.37.12_apceoh.jpg", title: "Master Bedroom 4", description: "Lighting" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571690/WhatsApp_Image_2026-01-27_at_21.37.12_2_qmtqsh.jpg", title: "Master Bedroom 5", description: "Bed view" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571639/WhatsApp_Image_2026-01-27_at_21.37.13_k8pqjd.jpg", title: "Master Bedroom 6", description: "Side decor" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571612/WhatsApp_Image_2026-01-27_at_21.37.14_1_bteanc.jpg", title: "Master Bedroom 7", description: "Ceiling design" },
      { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571612/WhatsApp_Image_2026-01-27_at_21.37.14_1_bteanc.jpg", title: "Master Bedroom 8", description: "Complete room" },
    ],
  },
  {
    id: 2,
    title: "Modern Modular Kitchen",
    category: "Kitchen",
    description: "Functional modular kitchen with smart storage.",
    fullDescription: "U-shaped modular kitchen with pantry, cabinets, and quartz top.",
    features: ["Soft close cabinets", "Pantry unit", "Quartz top"],
    color: "from-amber-500/30",
    images: [
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572479/WhatsApp_Image_2026-01-27_at_21.58.03_1_wbvqcf.jpg", title: "Kitchen 1", description: "Modern kitchen" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521897/WhatsApp_Image_2026-01-26_at_21.55.03_2_mvrphc.jpg", title: "Kitchen 2", description: "Cabinet layout" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521898/WhatsApp_Image_2026-01-26_at_21.55.04_1_mv9cyh.jpg", title: "Kitchen 3", description: "Countertop" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769521896/WhatsApp_Image_2026-01-26_at_21.55.01_umypgp.jpg", title: "Kitchen 4", description: "Pantry unit" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572475/WhatsApp_Image_2026-01-27_at_21.58.03_2_hwqxla.jpg", title: "Kitchen 5", description: "Sink area" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572479/WhatsApp_Image_2026-01-27_at_21.58.03_1_wbvqcf.jpg", title: "Kitchen 6", description: "Storage" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572486/WhatsApp_Image_2026-01-27_at_21.58.00_xj8ciy.jpg", title: "Kitchen 7", description: "Appliance area" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572488/WhatsApp_Image_2026-01-27_at_21.57.59_1_lpohlf.jpg", title: "Kitchen 8", description: "Complete view" },
],

  },
  /* {
    id: 3,
    title: "Elegant Living Room Setup",
    category: "Living Room",
    description: "Living room with sofa layout and decor panels.",
    fullDescription: "Designer living area with seating layout and lighting.",
    features: ["Sofa layout", "Wall decor", "Lighting"],
    color: "from-emerald-500/30",
    images: [
      { src: "/images/living1.jpg", title: "Living Room", description: "Living setup" },
    ],
  }, */
  {
    id: 4,
    title: "Puja Room Design",
    category: "Puja Room",
    description: "Traditional and modern pooja room interiors.",
    fullDescription: "Wooden pooja unit with backlit panel and storage.",
    features: ["Backlit panel", "Storage drawers"],
    color: "from-yellow-500/30",
    images: [
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572839/WhatsApp_Image_2026-01-27_at_21.45.25_3_hdsaww.jpg", title: "Puja 1", description: "Wooden unit" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572798/WhatsApp_Image_2026-01-27_at_21.45.26_fvk1jy.jpg", title: "Puja 2", description: "Backlight panel" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572856/WhatsApp_Image_2026-01-27_at_21.45.24_d7wjay.jpg", title: "Puja 3", description: "Storage" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572839/WhatsApp_Image_2026-01-27_at_21.45.25_3_hdsaww.jpg", title: "Puja 4", description: "Side decor" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572856/WhatsApp_Image_2026-01-27_at_21.45.24_d7wjay.jpg", title: "Puja 5", description: "Top view" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572884/WhatsApp_Image_2026-01-27_at_21.45.22_vn49vo.jpg", title: "Puja 6", description: "Shelf" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572856/WhatsApp_Image_2026-01-27_at_21.45.24_d7wjay.jpg", title: "Puja 7", description: "Lighting" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572841/WhatsApp_Image_2026-01-27_at_21.45.25_2_ermkpd.jpg", title: "Puja 8", description: "Complete view" },
],

  },
  {
    id: 5,
    title: "Home Study Room",
    category: "Study Room",
    description: "Ergonomic study table and bookshelf setup.",
    fullDescription: "Study desk with drawers and wall shelves.",
    features: ["Study desk", "Bookshelves"],
    color: "from-blue-500/30",
    images: [
  { src: "https://i.pinimg.com/736x/ea/c6/5c/eac65c9951e2888f9bc34b994078859d.jpg", title: "Study 1", description: "Desk" },
  { src: "https://st.hzcdn.com/simgs/90913ed1071c0b05_14-5020/home-design.jpg", title: "Study 2", description: "Shelf" },
  { src: "https://i.pinimg.com/originals/78/68/c3/7868c364469cb7db0557f018566d0bb9.jpg", title: "Study 3", description: "Lighting" },
  { src: "https://interiosplash.com/wp-content/uploads/2024/09/29-optimized-1.webp", title: "Study 4", description: "Workspace" },
  { src: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/03/18162519/study-room-designs.jpg", title: "Study 5", description: "Chair setup" },
 
],

  },
  {
    id: 6,
    title: "Sliding Wardrobe Design",
    category: "Ward Boards",
    description: "Sliding wardrobe with internal organizers.",
    fullDescription: "Premium laminate wardrobe with loft storage.",
    features: ["Sliding doors", "Loft storage"],
    color: "from-stone-500/30",
    images: [
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571317/WhatsApp_Image_2026-01-27_at_21.31.55_1_kvowyl.jpg", title: "Wardrobe 1", description: "Sliding door" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571315/WhatsApp_Image_2026-01-27_at_21.31.55_2_epu8jg.jpg", title: "Wardrobe 2", description: "Hinged door" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571311/WhatsApp_Image_2026-01-27_at_21.31.56_1_d72bpw.jpg", title: "Wardrobe 3", description: "Organizer" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571307/WhatsApp_Image_2026-01-27_at_21.31.56_3_z1pse4.jpg", title: "Wardrobe 4", description: "Loft" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571306/WhatsApp_Image_2026-01-27_at_21.31.57_ei8b22.jpg", title: "Wardrobe 5", description: "Shelves" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571129/WhatsApp_Image_2026-01-27_at_21.31.57_2_z1lyj0.jpg", title: "Wardrobe 6", description: "Finish" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571129/WhatsApp_Image_2026-01-27_at_21.31.57_1_qop7wa.jpg", title: "Wardrobe 7", description: "Interior" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769571313/WhatsApp_Image_2026-01-27_at_21.31.56_xx8hez.jpg", title: "Wardrobe 8", description: "Full view" },
],

  },
  {
    id: 7,
    title: "Designer TV Unit",
    category: "Tv Unit",
    description: "Modern TV wall unit with paneling.",
    fullDescription: "TV unit with shelves and back panel lighting.",
    features: ["TV panel", "Storage shelves"],
    color: "from-indigo-500/30",
    images: [
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573134/WhatsApp_Image_2026-01-27_at_21.54.32_orbr0w.jpg", title: "TV 1", description: "TV wall" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573124/WhatsApp_Image_2026-01-27_at_21.54.33_1_qgeboz.jpg", title: "TV 2", description: "Panel" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573123/WhatsApp_Image_2026-01-27_at_21.54.34_xvw8zy.jpg", title: "TV 3", description: "Lighting" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573113/WhatsApp_Image_2026-01-27_at_21.54.34_1_gf9pbj.jpg", title: "TV 4", description: "Storage" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573112/WhatsApp_Image_2026-01-27_at_21.54.34_2_v6juup.jpg", title: "TV 5", description: "Decor" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573103/WhatsApp_Image_2026-01-27_at_21.54.35_uaq7k0.jpg", title: "TV 6", description: "Finish" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573098/WhatsApp_Image_2026-01-27_at_21.54.35_2_ebiscr.jpg", title: "TV 7", description: "Side view" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573094/WhatsApp_Image_2026-01-27_at_21.54.36_hqjkzj.jpg", title: "TV 8", description: "Full setup" },
],

  },
  {
    id: 8,
    title: "Wall Panelling Decor",
    category: "Wall Panelling",
    description: "Decorative wall panels for living and bedrooms.",
    fullDescription: "Textured wall panels with lighting accents.",
    features: ["Panel design", "Ambient lighting"],
    color: "from-purple-500/30",
   images: [
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572939/WhatsApp_Image_2026-01-27_at_21.49.40_1_bxuun2.jpg", title: "Panel 1", description: "Texture" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572938/WhatsApp_Image_2026-01-27_at_21.49.40_2_cbjktw.jpg", title: "Panel 2", description: "Lighting" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572930/WhatsApp_Image_2026-01-27_at_21.49.41_wecbwb.jpg", title: "Panel 3", description: "Decor" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572912/WhatsApp_Image_2026-01-27_at_21.49.45_xt74k2.jpg", title: "Panel 4", description: "Finish" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572919/WhatsApp_Image_2026-01-27_at_21.49.44_c58k0m.jpg", title: "Panel 5", description: "Wall art" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572892/WhatsApp_Image_2026-01-27_at_21.49.48_uotpn3.jpg", title: "Panel 6", description: "Design" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572903/WhatsApp_Image_2026-01-27_at_21.49.46_ly9whs.jpg", title: "Panel 7", description: "Close view" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769572928/WhatsApp_Image_2026-01-27_at_21.49.43_hjuus8.jpg", title: "Panel 8", description: "Full wall" },
],

  },
  {
    id: 9,
    title: "Crockery Display Unit",
    category: "Crockery",
    description: "Glass crockery unit with storage.",
    fullDescription: "Crockery unit with glass shutters and lights.",
    features: ["Glass doors", "Lighting"],
    color: "from-orange-500/30",
    images: [
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573394/WhatsApp_Image_2026-01-27_at_22.01.44_vorky9.jpg", title: "Crockery 1", description: "Glass unit" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573391/WhatsApp_Image_2026-01-27_at_22.01.44_1_r2zhye.jpg", title: "Crockery 2", description: "Lighting" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573388/WhatsApp_Image_2026-01-27_at_22.01.45_1_nqxvqw.jpg", title: "Crockery 3", description: "Shelves" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573380/WhatsApp_Image_2026-01-27_at_22.01.46_2_tnzgdk.jpg", title: "Crockery 4", description: "Finish" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573381/WhatsApp_Image_2026-01-27_at_22.01.46_1_vsweev.jpg", title: "Crockery 5", description: "Storage" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573377/WhatsApp_Image_2026-01-27_at_22.01.47_pykfxw.jpg", title: "Crockery 6", description: "Decor" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573375/WhatsApp_Image_2026-01-27_at_22.01.47_1_sanzgm.jpg", title: "Crockery 7", description: "Interior" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573389/WhatsApp_Image_2026-01-27_at_22.01.45_s1fy0d.jpg", title: "Crockery 8", description: "Full view" },
],

  },
  {
    id: 10,
    title: "Vanity Area Setup",
    category: "Vanity",
    description: "Bedroom vanity with mirror and storage.",
    fullDescription: "Vanity table with drawers and mirror lighting.",
    features: ["Mirror lights", "Drawers"],
    color: "from-pink-500/30",
    images: [
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573588/WhatsApp_Image_2026-01-27_at_22.04.40_3_vsshe5.jpg", title: "Vanity 1", description: "Mirror lights" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573642/WhatsApp_Image_2026-01-27_at_22.04.39_gedvk1.jpg", title: "Vanity 2", description: "Drawers" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573639/WhatsApp_Image_2026-01-27_at_22.04.39_1_up6llj.jpg", title: "Vanity 3", description: "Finish" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573638/WhatsApp_Image_2026-01-27_at_22.04.40_exuw9h.jpg", title: "Vanity 4", description: "Decor" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573630/WhatsApp_Image_2026-01-27_at_22.04.40_1_typ9gs.jpg", title: "Vanity 5", description: "Side view" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573588/WhatsApp_Image_2026-01-27_at_22.04.40_3_vsshe5.jpg", title: "Vanity 6", description: "Lighting" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573570/WhatsApp_Image_2026-01-27_at_22.04.41_rcjhj6.jpg", title: "Vanity 7", description: "Setup" },
  { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573394/WhatsApp_Image_2026-01-27_at_22.01.44_vorky9.jpg", title: "Vanity 8", description: "Complete area" },
],

  },


  {
  id: 11,
  title: "Elegant Foyer Entrance",
  category: "Foyer",
  description: "Stylish foyer entrance with console, mirror, and decor lighting.",
  fullDescription: "Premium foyer design featuring console table, decorative mirror, wall paneling, and ambient lighting to create a grand first impression.",
  features: ["Console table", "Decor mirror", "Ambient lighting"],
  color: "from-amber-500/30",
  images: [
    { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573774/WhatsApp_Image_2026-01-27_at_22.06.16_pgb0tj.jpg", title: "Foyer 1", description: "Entrance view" },
    { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573773/WhatsApp_Image_2026-01-27_at_22.06.16_1_bkfbpb.jpg", title: "Foyer 2", description: "Console table" },
    { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573770/WhatsApp_Image_2026-01-27_at_22.06.16_2_buvvgq.jpg", title: "Foyer 3", description: "Mirror decor" },
    { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573769/WhatsApp_Image_2026-01-27_at_22.06.16_3_tehzwk.jpg", title: "Foyer 4", description: "Wall paneling" },
    { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573765/WhatsApp_Image_2026-01-27_at_22.06.17_nvypnh.jpg", title: "Foyer 5", description: "Lighting setup" },
    { src: "https://res.cloudinary.com/dgm3hnkfs/image/upload/v1769573764/WhatsApp_Image_2026-01-27_at_22.06.17_1_k1k1p8.jpg", title: "Foyer 6", description: "Side angle" },
    
  ]
},

];


export const categories = ["All", "Bedroom", "Kitchen", "Wall Panelling", "Study Room", "Ward Boards","Puja Room","Tv Unit","Crockery","Vanity","Foyer"];
