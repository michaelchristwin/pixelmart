import {
  CCTV,
  Headphones,
  SteelWaterbottle,
  TShirt,
  FitnessTrackerWhite1,
} from "@/assets";
import { StaticImageData } from "next/image";

export const ProductData: Product[] = [
  {
    id: "p001",
    name: "Wireless Bluetooth Headphones",
    quantity: 50,
    slug: "wireless-bluetooth-headphones",
    price: 79.99,
    images: [],
    image: Headphones,
    type: "simple",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation.",
    rating: 4.5,
    stockStatus: "in_stock",
  },
  {
    id: "p002",
    name: "Stainless Steel Water Bottle",
    quantity: 100,
    slug: "stainless-steel-water-bottle",
    price: 24.99,
    images: [],
    image: SteelWaterbottle,

    category: "Home & Kitchen",
    description: "Durable 32oz water bottle, keeps drinks cold for 24 hours.",
    rating: 4.8,
    type: "simple",
    stockStatus: "in_stock",
  },
  {
    id: "p003",
    name: "Organic Cotton T-Shirt",
    quantity: 75,
    slug: "organic-cotton-t-shirt",
    price: 19.99,
    type: "simple",
    images: [],
    image: TShirt,
    category: "Clothing",
    description: "Soft, breathable 100% organic cotton t-shirt.",
    rating: 4.2,
    stockStatus: "in_stock",
  },
  {
    id: "p004",
    name: "Smart Home Security Camera",
    quantity: 30,
    slug: "smart-home-security-camera",
    price: 129.99,
    images: [],
    image: CCTV,
    type: "simple",
    category: "Electronics",
    description: "HD security camera with night vision and two-way audio.",
    rating: 4.3,
    stockStatus: "in_stock",
  },
  {
    id: "p005",
    name: "Yoga Mat",
    slug: "yoga-mat",
    quantity: 60,
    price: 34.99,
    images: [],
    image: "",
    type: "simple",
    category: "Sports & Outdoors",
    description: "Non-slip, eco-friendly yoga mat with carrying strap.",
    rating: 4.7,
    stockStatus: "in_stock",
  },
  {
    id: "p006",
    name: "Portable Phone Charger",
    quantity: 0,
    slug: "portable-phone-charger",
    price: 49.99,
    images: [],
    image: "",
    category: "Electronics",
    description:
      "20000mAh power bank, charges multiple devices simultaneously.",
    rating: 4.6,
    type: "simple",
    stockStatus: "out_of_stock",
  },
  {
    id: "p007",
    type: "simple",
    name: "Cast Iron Skillet",
    quantity: 40,
    slug: "cast-iron-skillet",
    price: 39.99,
    images: [],
    image: "",
    category: "Home & Kitchen",
    description:
      "Pre-seasoned 12-inch cast iron skillet for versatile cooking.",
    rating: 4.9,
    stockStatus: "in_stock",
  },
  {
    id: "p008",
    name: "Leather Wallet",
    quantity: 25,
    slug: "leather-wallet",
    price: 59.99,
    images: [],
    image: "",
    type: "simple",
    category: "Accessories",
    description: "Genuine leather bifold wallet with RFID blocking.",
    rating: 4.4,
    stockStatus: "in_stock",
  },
  {
    id: "p009",
    name: "Smart Fitness Tracker",
    quantity: 80,
    slug: "smart-fitness-tracker",
    price: 89.99,
    images: [],
    image: FitnessTrackerWhite1,
    category: "Electronics",
    description: "Water-resistant fitness tracker with heart rate monitor.",
    rating: 4.6,
    type: "configurable",

    variants: {
      colors: ["white", "mint", "black"],
    },
    stockStatus: "in_stock",
  },
  {
    id: "p010",
    name: "Wooden Cutting Board Set",
    quantity: 35,
    type: "simple",
    slug: "wooden-cutting-board-set",
    price: 44.99,
    images: [],
    image: "",
    category: "Home & Kitchen",
    description: "Set of 3 acacia wood cutting boards in different sizes.",
    rating: 4.7,
    stockStatus: "in_stock",
  },
  {
    id: "p011",
    type: "simple",
    name: "Reusable Grocery Bags",
    quantity: 150,
    slug: "reusable-grocery-bags",
    price: 14.99,
    images: [],
    image: "",
    category: "Home & Kitchen",
    description: "Set of 5 durable, foldable reusable shopping bags.",
    rating: 4.8,
    stockStatus: "in_stock",
  },
  {
    id: "p012",
    name: "Wireless Gaming Mouse",
    quantity: 45,
    slug: "wireless-gaming-mouse",
    price: 69.99,
    images: [],
    image: "",
    type: "simple",
    category: "Electronics",
    description: "Ergonomic gaming mouse with customizable RGB lighting.",
    rating: 4.5,
    stockStatus: "in_stock",
  },
  {
    id: "p013",
    name: "Artificial Succulent Plants",
    quantity: 70,
    slug: "artificial-succulent-plants",
    price: 29.99,
    images: [],
    image: "",
    type: "simple",
    category: "Home & Garden",
    description: "Set of 6 lifelike artificial succulents in decorative pots.",
    rating: 4.3,
    stockStatus: "in_stock",
  },
  {
    id: "p014",
    name: "Stainless Steel Straws",
    quantity: 0,
    slug: "stainless-steel-straws",
    price: 12.99,
    images: [],
    image: "",
    type: "simple",
    category: "Home & Kitchen",
    description: "Set of 8 reusable metal straws with cleaning brush.",
    rating: 4.9,
    stockStatus: "out_of_stock",
  },
];

type BaseProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  slug: string;
  image: StaticImageData | string;
  category: string;
  type: "simple" | "configurable" | "digital" | "bundle";
  images: string[] | StaticImageData[];
  rating?: number;
  reviews?: number;
  stockStatus: "in_stock" | "out_of_stock" | "backorder";
};

type ConfigurableProduct = BaseProduct & {
  type: "configurable";
  variants: {
    sizes?: string[];
    colors?: string[];
    styles?: string[];
    // Any other variant types
  };
};

type DigitalProduct = BaseProduct & {
  type: "digital";
  fileFormat?: string;
  fileSize?: string;
  specifications?: {
    label: string;
    value: string;
  }[];
};

type SimpleProduct = BaseProduct & {
  type: "simple";
};

type BundleProduct = BaseProduct & {
  type: "bundle";
  items: {
    name: string;
    quantity: number;
  }[];
};

export type Product =
  | SimpleProduct
  | ConfigurableProduct
  | DigitalProduct
  | BundleProduct;
