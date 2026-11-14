


export type ProductCategory =
  | "Bedroom"
  | "Kitchen"
  | "Living Room"
  | "Others";

export interface Product {
  id: number;
  title: string;
  category: ProductCategory;
  image: string;
  description: string;
  materials: string[];
  features: string[];
}

export const products: Product[] = [

  //wardrobe | bedroom
  {
    id: 1,
    title: "Modern Wooden Wardrobe",
    category: "Bedroom",
    image: "/images/wardrobe/wardrobe-01.jpg",
    description:
      "A custom-designed wooden wardrobe with spacious storage and a modern finish for a well-organized bedroom.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Spacious storage compartments",
      "Customizable dimensions",
      "Modern door design",
    ],
  },
  {
    id: 2,
    title: "Modern Wooden Wardrobe",
    category: "Bedroom",
    image: "/images/wardrobe/wardrobe-02.jpg",
    description:
      "A custom-designed wooden wardrobe with spacious storage and a modern finish for a well-organized bedroom.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Spacious storage compartments",
      "Customizable dimensions",
      "Modern door design",
    ],
  },
  {
    id: 3,
    title: "Modern Wooden Wardrobe",
    category: "Bedroom",
    image: "/images/wardrobe/wardrobe-03.jpg",
    description:
      "A custom-designed wooden wardrobe with spacious storage and a modern finish for a well-organized bedroom.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Spacious storage compartments",
      "Customizable dimensions",
      "Modern door design",
    ],
  },
  // kitchen 
  {
    id: 4,
    title: "Wooden Kitchen Cabinets",
    category: "Kitchen",
    image: "/images/kitchen/kitchen-cabinet-01.jpg",
    description:
      "Custom-built kitchen cabinets designed to maximize storage and complement your kitchen interior.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Wall and base cabinets",
      "Multiple storage sections",
      "Custom finishes",
    ],
  },
  {
    id: 5,
    title: "Wooden Kitchen Cabinets",
    category: "Kitchen",
    image: "/images/kitchen/kitchen-cabinet-02.jpg",
    description:
      "Custom-built kitchen cabinets designed to maximize storage and complement your kitchen interior.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Wall and base cabinets",
      "Multiple storage sections",
      "Custom finishes",
    ],
  },
  {
    id: 6,
    title: "Wooden Kitchen Cabinets",
    category: "Kitchen",
    image: "/images/kitchen/kitchen-cabinet-03.jpg",
    description:
      "Custom-built kitchen cabinets designed to maximize storage and complement your kitchen interior.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Wall and base cabinets",
      "Multiple storage sections",
      "Custom finishes",
    ],
  },
  {
    id: 7,
    title: "Wooden Kitchen Cabinets",
    category: "Kitchen",
    image: "/images/kitchen/kitchen-cabinet-04.jpg",
    description:
      "Custom-built kitchen cabinets designed to maximize storage and complement your kitchen interior.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Wall and base cabinets",
      "Multiple storage sections",
      "Custom finishes",
    ],
  },
  {
    id: 8,
    title: "Wooden Kitchen Cabinets",
    category: "Kitchen",
    image: "/images/kitchen/kitchen-cabinet-05.jpg",
    description:
      "Custom-built kitchen cabinets designed to maximize storage and complement your kitchen interior.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Wall and base cabinets",
      "Multiple storage sections",
      "Custom finishes",
    ],
  },
  {
    id: 9,
    title: "Wooden Kitchen Cabinets",
    category: "Kitchen",
    image: "/images/kitchen/kitchen-cabinet-06.jpg",
    description:
      "Custom-built kitchen cabinets designed to maximize storage and complement your kitchen interior.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Wall and base cabinets",
      "Multiple storage sections",
      "Custom finishes",
    ],
  },
  {
    id: 10,
    title: "Wooden Kitchen Cabinets",
    category: "Kitchen",
    image: "/images/kitchen/kitchen-cabinet-07.jpg",
    description:
      "Custom-built kitchen cabinets designed to maximize storage and complement your kitchen interior.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Wall and base cabinets",
      "Multiple storage sections",
      "Custom finishes",
    ],
  },
  {
    id: 11,
    title: "Wooden Kitchen Cabinets",
    category: "Kitchen",
    image: "/images/kitchen/kitchen-cabinet-08.jpg",
    description:
      "Custom-built kitchen cabinets designed to maximize storage and complement your kitchen interior.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Wall and base cabinets",
      "Multiple storage sections",
      "Custom finishes",
    ],
  },
  {
    id: 12,
    title: "Wooden Kitchen Cabinets",
    category: "Kitchen",
    image: "/images/kitchen/kitchen-cabinet-09.jpg",
    description:
      "Custom-built kitchen cabinets designed to maximize storage and complement your kitchen interior.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Wall and base cabinets",
      "Multiple storage sections",
      "Custom finishes",
    ],
  },
  {
    id: 13,
    title: "Wooden Kitchen Cabinets",
    category: "Kitchen",
    image: "/images/kitchen/kitchen-cabinet-10.jpg",
    description:
      "Custom-built kitchen cabinets designed to maximize storage and complement your kitchen interior.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Wall and base cabinets",
      "Multiple storage sections",
      "Custom finishes",
    ],
  },

  //Tv units  | living room
  {
    id: 14,
    title: "Modern TV Unit",
    category: "Living Room",
    image: "/images/tvunit/tv-01.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },

  // bedroom
  {
    id: 15,
    title: "Modern Wooden Wardrobe",
    category: "Bedroom",
    image: "/images/wardrobe/wardrobe-04.jpg",
    description:
      "A custom-designed wooden wardrobe with spacious storage and a modern finish for a well-organized bedroom.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Spacious storage compartments",
      "Customizable dimensions",
      "Modern door design",
    ],
  },
  {
    id: 16,
    title: "Modern Wooden Wardrobe",
    category: "Bedroom",
    image: "/images/wardrobe/wardrobe-05.jpg",
    description:
      "A custom-designed wooden wardrobe with spacious storage and a modern finish for a well-organized bedroom.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Spacious storage compartments",
      "Customizable dimensions",
      "Modern door design",
    ],
  },
  {
    id: 17,
    title: "Modern Wooden Wardrobe",
    category: "Bedroom",
    image: "/images/wardrobe/wardrobe-06.jpg",
    description:
      "A custom-designed wooden wardrobe with spacious storage and a modern finish for a well-organized bedroom.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Spacious storage compartments",
      "Customizable dimensions",
      "Modern door design",
    ],
  },
  {
    id: 18,
    title: "Modern Wooden Wardrobe",
    category: "Bedroom",
    image: "/images/wardrobe/wardrobe-07.jpg",
    description:
      "A custom-designed wooden wardrobe with spacious storage and a modern finish for a well-organized bedroom.",
    materials: ["Plywood", "Decorative laminate"],
    features: [
      "Spacious storage compartments",
      "Customizable dimensions",
      "Modern door design",
    ],
  },

  {
    id: 19,
    title: "Modern TV Unit",
    category: "Living Room",
    image: "/images/tvunit/tv-02.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
  {
    id: 20,
    title: "Modern TV Unit",
    category: "Living Room",
    image: "/images/tvunit/tv-03.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
  {
    id: 21,
    title: "Modern TV Unit",
    category: "Living Room",
    image: "/images/tvunit/tv-04.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
  {
    id: 22,
    title: "Modern TV Unit",
    category: "Living Room",
    image: "/images/tvunit/tv-05.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
  {
    id: 23,
    title: "Modern TV Unit",
    category: "Living Room",
    image: "/images/tvunit/tv-06.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
  {
    id: 24,
    title: "Modern TV Unit",
    category: "Living Room",
    image: "/images/tvunit/tv-07.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
  {
    id: 25,
    title: "Modern TV Unit",
    category: "Living Room",
    image: "/images/tvunit/tv-08.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
  {
    id: 26,
    title: "Decorative Furniture",
    category: "Others",
    image: "/images/others/others-01.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
  {
    id: 27,
    title: "Decorative Furniture",
    category: "Others",
    image: "/images/others/others-02.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
  {
    id: 28,
    title: "Decorative Furniture",
    category: "Others",
    image: "/images/others/others-03.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
  {
    id: 29,
    title: "Decorative Furniture",
    category: "Others",
    image: "/images/others/others-04.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
  {
    id: 30,
    title: "Decorative Furniture",
    category: "Others",
    image: "/images/others/others-05.jpg",
    description:
      "A modern TV unit with integrated storage, designed to keep your living room organized while adding a stylish wooden finish.",
    materials: ["Plywood", "Laminate finish"],
    features: [
      "Integrated storage compartments",
      "Space-saving design",
      "Customizable dimensions",
    ],
  },
];
