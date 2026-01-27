export type ServiceKey =
  | "residential"
  | "consultation"
  | "customFurniture"
  | "colorConsultancy"
  | "projectManagement"
  | "spacePlanning"
  | "lightingDesign"
  | "artProcurement"
  | "renovationRemodeling"
  | "stylingStaging";



export const serviceDetails: Record<
  ServiceKey,
  {
    title: string;
    description: string;
    benefits: string[];
    included: string[];
    process: string[];
    images: string[];
  }
> = {
  residential: {
    title: "Residential Interior Design",

    description: `Residential interior design at Tint Tone and Shade is dedicated to creating beautiful, functional, and personalized living spaces that reflect your unique style and needs. We focus on every detail, from layout planning and furniture selection to color schemes and decor, ensuring your home is a true representation of your personality and lifestyle.`,

    benefits: [
      "Personalized Design: Tailoring the design to match your individual taste and lifestyle.",
      "Enhanced Functionality: Creating practical and efficient layouts that optimize space usage.",
      "Increased Comfort: Designing cozy and inviting environments that enhance daily living.",
      "Aesthetic Appeal: Crafting visually stunning interiors that impress and inspire.",
      "Property Value: Improving the overall value and marketability of your home."
    ],

    included: [
      "Initial Consultation: Understanding your vision, preferences, and requirements for your home.",
      "Space Planning: Developing optimal layouts to maximize space and functionality.",
      "Color Scheme Development: Selecting color palettes that reflect your style and create the desired ambiance.",
      "Movable Furniture Selection: Recommending and sourcing furniture that fits the design and enhances comfort.",
      "Decor and Accessories: Choosing artwork, rugs, lighting, and accessories to complement the design.",
      "Material and Finish Selection: Advising on the best materials and finishes for durability and aesthetic appeal.",
      "Custom Solutions: Designing bespoke furniture or built-ins tailored to your specific needs.",
      "Project Management: Coordinating with contractors and suppliers to ensure smooth execution.",
      "Final Styling: Adding the finishing touches to complete the look and feel of your home."
    ],

    process: [
      "Consultation: Initial meeting to discuss your design goals, preferences, and budget.",
      "Design Concept Development: Creating mood boards and concept designs for your review.",
      "Space Planning and Layout: Developing detailed floor plans and layout options.",
      "Client Review and Feedback: Presenting the design concepts and layouts for your feedback.",
      "Material and Furniture Selection: Assisting in choosing materials, finishes, furniture, and decor.",
      "Implementation Coordination: Overseeing the procurement and installation process.",
      "Final Walkthrough: Reviewing the completed design with you to ensure satisfaction.",
      "Post-Completion Support: Providing ongoing support and maintenance advice if needed."
    ],

    images: [
      "/projects/res1.jpg",
      "/projects/res2.jpg",
      "/projects/res3.jpg",
      "/projects/res4.jpg",
    ],
  },

  consultation: {
    title: "Design Consultation",

    description: `Our interior design consultation service at Tint Tone and Shade is designed to provide clients with expert advice and tailored solutions for their spaces. Whether you need help with a single room makeover or a comprehensive redesign of your entire home, our consultation services offer personalized guidance to help you achieve your design goals.`,

    benefits: [
      "Professional Expertise: Access to professional interior designers who can provide expert advice and innovative solutions.",
      "Personalized Recommendations: Tailored design suggestions based on your style preferences, needs, and budget.",
      "Efficient Planning: Guidance on planning and prioritizing your design projects to save time and avoid costly mistakes.",
      "Resource Access: Recommendations for quality materials, furnishings, and trusted contractors.",
      "Enhanced Aesthetics and Functionality: Expert advice on how to enhance both the look and functionality of your space."
    ],

    included: [
      "Initial Consultation: A comprehensive discussion to understand your design goals, preferences, and challenges.",
      "Space Assessment: Detailed evaluation of your current space, including measurements and analysis of existing conditions.",
      "Design Ideas and Inspiration: Presentation of design concepts, mood boards, and inspirational ideas tailored to your style.",
      "Color and Material Selection: Guidance on choosing the right colors, materials, and finishes for your space.",
      "Furniture and Layout Recommendations: Advice on furniture selection and optimal layout to maximize space and enhance flow.",
      "Lighting and Accessories Suggestions: Recommendations for lighting solutions and decorative accessories to complete your design.",
      "Budget Planning: Assistance in creating a realistic budget and timeline for your project."
    ],

    process: [
      "Initial Consultation: We begin with a detailed discussion to understand your vision, style preferences, and any specific needs or challenges.",
      "Space Assessment: Our designers conduct a thorough evaluation of your space, taking measurements and noting existing features.",
      "Design Concept Development: Based on our discussions and assessment, we develop initial design concepts and present them to you for feedback.",
      "Client Review and Feedback: We review the proposed concepts with you, making adjustments based on your feedback.",
      "Final Recommendations: We provide you with final design recommendations, including color schemes, furniture layouts, and material selections.",
      "Implementation Guidance: We offer advice and resources to help you implement the design, including recommendations for trusted contractors and suppliers."
    ],

    images: [
      "/projects/res1.jpg",
      "/projects/res2.jpg",
      "/projects/res3.jpg",
      "/projects/res4.jpg",
    ],
  },
  customFurniture: {
  title: "Custom Furniture Design",

  description: `Custom furniture design at Tint Tone and Shade is a specialized service that caters to clients seeking unique, tailor-made pieces that perfectly fit their space and style. Our team of skilled designers and craftsmen work closely with clients to create bespoke furniture that not only meets their functional needs but also enhances the aesthetic appeal of their interiors.`,

  benefits: [
    "Personalization: Custom furniture reflects your individual taste and style, ensuring that each piece is uniquely yours.",
    "Perfect Fit: Tailored to your space's dimensions and layout, custom furniture maximizes functionality and flow.",
    "High-Quality Craftsmanship: Handcrafted by skilled artisans, ensuring superior quality and durability.",
    "Unique Designs: One-of-a-kind pieces that stand out and make a statement in your home or office.",
    "Sustainable Choices: Options to use eco-friendly materials and sustainable practices in the creation process."
  ],

  included: [
    "Initial Consultation: Understanding your design vision, needs, and preferences for custom furniture.",
    "Design Development: Creating detailed sketches and 3D renderings of the proposed furniture pieces.",
    "Material Selection: Assisting you in choosing the best materials, finishes, and fabrics.",
    "Customization Options: Offering various customization features, such as dimensions, colors, and detailing.",
    "Prototype Creation: Developing prototypes or mock-ups for complex designs if needed.",
    "Craftsmanship: Handcrafting the furniture with attention to detail and quality.",
    "Delivery and Installation: Coordinating the delivery and professional installation of the custom pieces.",
    "Follow-Up: Ensuring your satisfaction with the finished product and making any necessary adjustments."
  ],

  process: [
    "Consultation: Initial meeting to discuss your vision, style preferences, and specific requirements.",
    "Design Development: Our designers create detailed sketches and 3D renderings for your approval.",
    "Material Selection: We help you select the best materials, finishes, and fabrics that suit your design and budget.",
    "Client Review and Feedback: Presenting the designs and materials to you for feedback and adjustments.",
    "Craftsmanship: Our skilled artisans handcraft the furniture, paying close attention to every detail.",
    "Prototype (if needed): Developing prototypes for complex designs to ensure accuracy and functionality.",
    "Delivery and Installation: We coordinate the delivery and professional installation of the custom furniture pieces.",
    "Final Walkthrough: Reviewing the finished pieces with you to ensure they meet your expectations."
  ],

  images: [
    "/projects/res1.jpg",
    "/projects/res2.jpg",
    "/projects/res3.jpg",
    "/projects/res4.jpg",
  ],
},
colorConsultancy: {
  title: "Color Consultancy",

  description: `Color consultancy is an essential service offered by Tint Tone and Shade to help clients choose the perfect color palette for their interiors. This service involves expert advice on color selection to enhance the aesthetics, mood, and functionality of your space. Our goal is to create a cohesive and harmonious color scheme that reflects your style and complements the overall design of your home or office.`,

  benefits: [
    "Personalized Color Solutions: Tailored color palettes that reflect your personality and preferences.",
    "Enhanced Aesthetics: Creating visually appealing spaces with well-coordinated color schemes.",
    "Improved Mood and Functionality: Utilizing color psychology to influence the ambiance and functionality of each room.",
    "Increased Property Value: Professionally chosen colors can enhance the appeal and value of your property.",
    "Time and Cost Efficiency: Avoiding costly mistakes and time-consuming repainting by getting it right the first time."
  ],

  included: [
    "Initial Consultation: Understanding your color preferences, design goals, and any specific challenges.",
    "Color Analysis: Assessing the existing color scheme and identifying areas for improvement.",
    "Custom Color Palette: Developing a personalized color palette that aligns with your design vision.",
    "Paint and Finish Selection: Recommending the best paint types and finishes for different surfaces and rooms.",
    "Sample Boards: Providing sample boards or swatches to help visualize the proposed colors.",
    "Color Placement Plan: Advising on the strategic placement of colors to achieve the desired effect.",
    "Coordination with Decor: Ensuring that the chosen colors harmonize with your furniture, accessories, and overall decor.",
    "Implementation Guidance: Offering professional advice on the painting process and coordinating with painters if needed."
  ],

  process: [
    "Consultation: Initial meeting to discuss your color preferences, design goals, and budget.",
    "Color Analysis: On-site assessment of your current color scheme and decor.",
    "Palette Development: Creating a custom color palette based on your preferences and the color analysis.",
    "Client Review and Feedback: Presenting the color palette to you for feedback and adjustments.",
    "Sample Testing: Providing color samples or swatches to test in your space.",
    "Color Placement Plan: Developing a detailed plan for the placement of colors in each room.",
    "Implementation Coordination: Offering guidance and resources for the painting process and coordinating with professional painters.",
    "Final Walkthrough: Reviewing the completed color scheme with you to ensure satisfaction."
  ],

  images: [
    "/projects/res1.jpg",
    "/projects/res2.jpg",
    "/projects/res3.jpg",
    "/projects/res4.jpg",
  ],
},
projectManagement: {
  title: "Project Management",

  description: `Project management at Tint Tone and Shade ensures that your interior design projects are executed smoothly, on time, and within budget. We oversee every aspect of the project, from initial planning to final completion, coordinating with all stakeholders to deliver high-quality results that meet your vision and requirements.`,

  benefits: [
    "Efficient Coordination: Streamlining communication and coordination between designers, contractors, and clients.",
    "On-Time Delivery: Ensuring that all project milestones are met within the agreed timeline.",
    "Quality Assurance: Maintaining high standards of workmanship and design quality.",
    "Risk Mitigation: Identifying and addressing potential issues before they become major problems."
  ],

  included: [
    "Initial Planning: Defining project scope, objectives, and timelines in collaboration with the client.",
    "Budgeting: Establishing and managing the project budget to ensure financial efficiency.",
    "Scheduling: Creating detailed project schedules, including key milestones and deadlines.",
    "Resource Allocation: Assigning the necessary resources, including materials, labor, and equipment.",
    "Coordination and Communication: Facilitating regular communication between all parties involved to keep the project on track.",
    "Quality Control: Implementing quality control measures to ensure all work meets the specified standards.",
    "Risk Management: Identifying potential risks and developing strategies to mitigate them.",
    "Progress Monitoring: Regularly updating the client on project status and making necessary adjustments to stay on track.",
    "Final Review and Handover: Conducting a thorough final inspection and handover of the completed project."
  ],

  process: [
    "Consultation: Initial meeting to understand project goals, scope, and client expectations.",
    "Planning and Scheduling: Developing a comprehensive project plan and timeline.",
    "Budget Management: Establishing and managing the project budget.",
    "Resource Allocation: Ensuring all necessary resources are in place for the project.",
    "Coordination: Managing communication and coordination between all parties involved.",
    "Quality Assurance: Monitoring and ensuring the quality of workmanship throughout the project.",
    "Risk Management: Identifying and mitigating potential risks.",
    "Progress Updates: Providing regular updates to the client on project status.",
    "Final Review and Handover: Completing a final inspection and handing over the finished project."
  ],

  images: [
    "/projects/res1.jpg",
    "/projects/res2.jpg",
    "/projects/res3.jpg",
    "/projects/res4.jpg",
  ],
},
spacePlanning: {
  title: "Space Planning",

  description: `Space planning is a critical aspect of interior design that ensures the optimal use of available space, promoting functionality and aesthetics. At Tint Tone and Shade, our space planning services involve a comprehensive assessment and strategic arrangement of physical spaces to enhance the flow and efficiency of a room or an entire property. We consider furniture placement, movement patterns, and architectural features to create harmonious and practical environments tailored to our clients' needs.`,

  benefits: [
    "Optimal Utilization of Space: Efficient space planning maximizes the use of available space, ensuring every square foot is functional and aesthetically pleasing.",
    "Improved Flow and Functionality: Thoughtful arrangement of furniture and fixtures enhances the natural flow of movement within the space.",
    "Increased Comfort and Usability: Well-planned spaces are more comfortable and user-friendly, improving the overall experience for occupants.",
    "Enhanced Aesthetics: Proper space planning complements the interior design, creating a balanced and visually appealing environment.",
    "Cost Efficiency: By optimizing space, you can avoid unnecessary purchases and modifications, saving money in the long run."
  ],

  included: [
    "Initial Consultation: Understanding the client’s needs, preferences, and lifestyle.",
    "Site Analysis: Detailed assessment of the existing space, including measurements and architectural features.",
    "Concept Development: Creating a conceptual layout that reflects the client’s vision and requirements.",
    "Furniture Layout Plan: Strategically arranging furniture to optimize space and enhance functionality.",
    "Circulation Plan: Mapping out pathways and movement patterns to ensure efficient flow within the space.",
    "3D Renderings: Visualizing the proposed layout in 3D to help clients understand the design.",
    "Detailed Floor Plans: Providing comprehensive floor plans with precise measurements and placement details.",
    "Material and Furniture Selection: Recommending suitable materials and furniture to complement the space plan.",
    "Coordination with Contractors: Working closely with contractors and vendors to ensure seamless implementation of the space plan."
  ],

  process: [
    "Consultation: Initial meeting to discuss the client’s goals, preferences, and budget.",
    "Site Visit and Analysis: On-site assessment to take measurements and evaluate the existing space.",
    "Concept Development: Creating preliminary layouts and concepts based on the site analysis and client input.",
    "Client Review and Feedback: Presenting the concepts to the client for feedback and adjustments.",
    "Detailed Planning: Finalizing the layout, circulation plan, and furniture placement.",
    "3D Renderings and Floor Plans: Providing detailed visual representations and floor plans for client approval.",
    "Implementation Coordination: Collaborating with contractors and suppliers to execute the space plan accurately.",
    "Final Walkthrough: Reviewing the completed space with the client to ensure satisfaction."
  ],

  images: [
    "/projects/res1.jpg",
    "/projects/res2.jpg",
    "/projects/res3.jpg",
    "/projects/res4.jpg",
  ],
},
lightingDesign: {
  title: "Lighting Design",

  description: `Lighting design is a crucial aspect of interior design that significantly impacts the mood, functionality, and aesthetic appeal of a space. At Tint Tone and Shade, our lighting design services focus on creating a well-balanced lighting scheme that enhances the beauty of your interiors while providing practical illumination. We consider various lighting layers, fixtures, and technologies to tailor a lighting solution that meets your specific needs and preferences.`,

  benefits: [
    "Enhanced Ambiance: Creating a mood and atmosphere that complements your space and lifestyle.",
    "Improved Functionality: Ensuring adequate lighting for various activities and tasks within each room.",
    "Energy Efficiency: Utilizing energy-efficient lighting solutions to reduce electricity consumption and costs.",
    "Aesthetic Appeal: Highlighting architectural features, artwork, and decor with strategic lighting placement.",
    "Increased Property Value: Professionally designed lighting can boost the overall value and appeal of your property."
  ],

  included: [
    "Initial Consultation: Understanding your lighting needs, preferences, and any specific challenges.",
    "Lighting Assessment: Evaluating the current lighting setup and identifying areas for improvement.",
    "Layered Lighting Design: Developing a comprehensive lighting plan that includes ambient, task, and accent lighting.",
    "Fixture Selection: Recommending appropriate lighting fixtures, including chandeliers, pendants, sconces, and recessed lights.",
    "Control Systems: Integrating smart lighting controls and dimmers for flexibility and convenience.",
    "Energy-Efficient Solutions: Proposing energy-saving lighting options, such as LED bulbs and solar-powered fixtures.",
    "3D Renderings: Providing visual representations of the proposed lighting scheme.",
    "Installation Guidance: Offering professional advice on the placement and installation of lighting fixtures."
  ],

  process: [
    "Consultation: Initial meeting to discuss your lighting needs, preferences, and budget.",
    "Lighting Assessment: On-site evaluation of the current lighting conditions and identification of improvement areas.",
    "Design Development: Creating a layered lighting plan that includes ambient, task, and accent lighting.",
    "Client Review and Feedback: Presenting the lighting design to you for feedback and adjustments.",
    "Fixture Selection: Recommending suitable lighting fixtures and control systems based on the approved design.",
    "Implementation Coordination: Collaborating with electricians and contractors to ensure proper installation."
  ],

  images: [
    "/projects/res1.jpg",
    "/projects/res2.jpg",
    "/projects/res3.jpg",
    "/projects/res4.jpg",
  ],
},

artProcurement: {
  title: "Art and Accessory Procurement",

  description: `Art and accessory procurement is an essential service offered by Tint Tone and Shade to elevate the aesthetics and personalization of your space. This service involves sourcing and selecting unique art pieces, decor items, and accessories that align with your design vision and enhance the overall ambiance of your interiors.`,

  benefits: [
    "Unique Personalization: Adding distinctive art and accessories to reflect your personality and style.",
    "Cohesive Design: Ensuring that all decorative elements harmonize with the overall design theme.",
    "Access to Exclusive Pieces: Leveraging our network to source exclusive and hard-to-find items.",
    "Professional Curation: Expert selection and arrangement of items to create a balanced and appealing look.",
    "Increased Value: High-quality art and accessories can increase the aesthetic and financial value of your space."
  ],

  included: [
    "Initial Consultation: Discussing your style preferences, budget, and specific needs for art and accessories.",
    "Style and Theme Development: Identifying a cohesive style and theme to guide the selection process.",
    "Sourcing Unique Items: Finding unique and high-quality art pieces, sculptures, vases, textiles, and other decor items.",
    "Custom Art Solutions: Commissioning custom artworks tailored to your space and preferences.",
    "Curated Accessory Collections: Selecting groups of accessories that complement each other and the overall design.",
    "Vendor Coordination: Handling communication and transactions with artists, galleries, and suppliers.",
    "Installation Guidance: Providing professional advice on the placement and arrangement of art and accessories."
  ],

  process: [
    "Consultation: We start with an in-depth consultation to understand your aesthetic preferences, design vision, and budget.",
    "Design Concept Development: Based on the consultation, we develop a design concept that includes a curated selection of art and accessories.",
    "Sourcing and Procurement: Utilizing our network and expertise, we source unique and high-quality items that fit the design concept.",
    "Client Review and Selection: Presenting the curated collection to you for feedback and final selection.",
    "Purchase and Coordination: Managing the purchase process, coordinating with vendors, and arranging for delivery.",
    "Installation: Offering professional guidance on the best placement and arrangement of your new art and accessories to achieve the desired effect."
  ],

  images: [
    "/projects/res1.jpg",
    "/projects/res2.jpg",
    "/projects/res3.jpg",
    "/projects/res4.jpg",
  ],
},
renovationRemodeling: {
  title: "Renovation and Remodeling",

  description: `Renovation and remodeling services at Tint Tone and Shade offer comprehensive solutions to transform your existing spaces into functional, modern, and aesthetically pleasing environments. Whether you're looking to update a single room or undertake a full-scale renovation project, our team is committed to delivering exceptional results that exceed your expectations.`,

  benefits: [
    "Enhanced Functionality: Improving the layout and functionality of your space to better suit your lifestyle.",
    "Modernization: Updating outdated features and incorporating modern design trends.",
    "Increased Property Value: Renovations can significantly increase the resale value of your home.",
    "Personalization: Tailoring the design to reflect your style preferences and functional needs."
  ],

  included: [
    "Initial Consultation: Discussing your renovation goals, budget, and timeline.",
    "Concept Development: Creating initial design concepts and layout options.",
    "Detailed Planning: Developing detailed plans, including architectural drawings and specifications.",
    "Material Selection: Assisting in selecting materials, finishes, and fixtures that align with your vision.",
    "Construction and Installation: Managing the renovation process, including hiring contractors and overseeing construction.",
    "Project Coordination: Coordinating schedules, deliveries, and subcontractors to ensure smooth progress.",
    "Quality Assurance: Conducting inspections and ensuring all work meets high-quality standards.",
    "Final Touches: Adding finishing touches such as paint, decor, and lighting to complete the renovation."
  ],

  process: [
    "Consultation: Initial meeting to understand your renovation goals, preferences, and budget.",
    "Design Concept Development: Creating initial design concepts and layout options for your review.",
    "Detailed Planning: Developing comprehensive plans, including architectural drawings and material selections.",
    "Client Review and Approval: Presenting plans and designs for your feedback and final approval.",
    "Construction and Implementation: Managing the renovation process, coordinating with contractors, and overseeing work progress.",
    "Quality Control: Conducting inspections and ensuring that workmanship meets specified standards.",
    "Final Walkthrough: Reviewing the completed renovation with you to ensure satisfaction.",
    "Post-Completion Support: Providing guidance on maintenance and additional services as needed."
  ],

  images: [
    "/projects/res1.jpg",
    "/projects/res2.jpg",
    "/projects/res3.jpg",
    "/projects/res4.jpg",
  ],
},
stylingStaging: {
  title: "Styling and Staging",

  description: `Styling and staging services at Tint Tone and Shade are designed to prepare your home for sale or create a polished, cohesive look for everyday living. Our expert stylists focus on enhancing the visual appeal and functionality of your space by strategically placing furniture, decor, and accessories to create an inviting atmosphere that resonates with potential buyers or reflects your personal style.`,

  benefits: [
    "Increased Property Appeal: Professionally styled homes attract more potential buyers and can sell faster.",
    "Higher Selling Price: Staging often leads to higher offers, maximizing the return on your investment.",
    "Personalized Aesthetic: Tailoring the look of your home to reflect your unique taste and lifestyle.",
    "Functional Spaces: Enhancing the usability of each room with strategic furniture placement and decor choices.",
    "Stress-Free Process: Allowing our experts to handle the styling and staging, saving you time and effort."
  ],

  included: [
    "Initial Consultation: Understanding your goals, style preferences, and budget for styling or staging.",
    "Space Assessment: Evaluating the current layout, furniture, and decor to identify areas for improvement.",
    "Design Plan: Creating a customized styling or staging plan that includes furniture arrangement, decor selection, and color schemes.",
    "Furniture and Decor Selection: Recommending and sourcing appropriate furniture, artwork, rugs, and accessories.",
    "Staging Setup: Professionally arranging furniture and decor to create an inviting and cohesive look.",
    "Final Touches: Adding finishing touches such as plants, pillows, and lighting to enhance the overall ambiance.",
    "Photography Prep: Preparing your home for professional real estate photography if staging for sale."
  ],

  process: [
    "Consultation: Initial meeting to discuss your goals, preferences, and budget for styling or staging.",
    "Space Assessment: On-site evaluation to identify areas for improvement and opportunities to enhance appeal.",
    "Design Plan: Developing a tailored styling or staging plan with detailed recommendations.",
    "Client Review and Feedback: Presenting the plan to you for feedback and making any necessary adjustments.",
    "Implementation: Sourcing and arranging furniture, decor, and accessories to bring the design plan to life.",
    "Final Touches: Adding the finishing touches to ensure the space looks polished and inviting.",
    "Photography Prep (if applicable): Preparing the home for professional photography.",
    "De-staging (if applicable): Removing staged items once the home is sold or rented."
  ],

  images: [
    "/projects/res1.jpg",
    "/projects/res2.jpg",
    "/projects/res3.jpg",
    "/projects/res4.jpg",
  ],
},

};
