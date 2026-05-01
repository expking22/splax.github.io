export type Product = {
  id: string;
  title: string;
  category: string;
  price: number;
  compareAt: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  badge: string;
  stock: number;
  seller: string;
  delivery: string;
  description: string;
  specs: Record<string, string>;
};

export const products: Product[] = [
  {
    id: "aurora-noise-cancelling-headphones",
    title: "Aurora X9 Noise Cancelling Headphones",
    category: "Electronics",
    price: 15480,
    compareAt: 22680,
    rating: 4.8,
    reviews: 1840,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80"
    ],
    badge: "Best Seller",
    stock: 12,
    seller: "SoundPeak Official",
    delivery: "2-day delivery",
    description:
      "Premium wireless headphones with adaptive noise cancelling, 38-hour battery life, and a lightweight memory-foam fit for long listening sessions.",
    specs: {
      Battery: "38 hours",
      Connectivity: "Bluetooth 5.3",
      Warranty: "24 months",
      Returns: "30-day easy returns"
    }
  },
  {
    id: "nova-smartwatch-pro",
    title: "Nova Smartwatch Pro with Health Tracking",
    category: "Wearables",
    price: 20280,
    compareAt: 28680,
    rating: 4.7,
    reviews: 973,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80"
    ],
    badge: "Limited Deal",
    stock: 8,
    seller: "NovaGear",
    delivery: "Ships today",
    description:
      "A polished smartwatch with all-day health metrics, GPS workouts, call alerts, and a vivid always-on display.",
    specs: {
      Display: "1.9 inch AMOLED",
      Sensors: "Heart rate, SpO2, GPS",
      Water: "5 ATM",
      Battery: "7 days"
    }
  },
  {
    id: "atlas-travel-backpack",
    title: "Atlas 35L Carry-On Travel Backpack",
    category: "Travel",
    price: 10320,
    compareAt: 14880,
    rating: 4.9,
    reviews: 2410,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=80"
    ],
    badge: "Top Rated",
    stock: 21,
    seller: "Atlas Supply Co.",
    delivery: "Free delivery",
    description:
      "Cabin-friendly travel backpack with a clamshell opening, padded laptop zone, weather-resistant shell, and theft-safe pocketing.",
    specs: {
      Capacity: "35 liters",
      Laptop: "Fits up to 16 inch",
      Material: "Water-resistant nylon",
      Weight: "1.2 kg"
    }
  },
  {
    id: "luma-desk-lamp",
    title: "Luma LED Desk Lamp with Wireless Charging",
    category: "Home",
    price: 6960,
    compareAt: 9480,
    rating: 4.6,
    reviews: 642,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80"
    ],
    badge: "New Arrival",
    stock: 17,
    seller: "Luma Home",
    delivery: "3-day delivery",
    description:
      "A focused LED desk lamp with five brightness modes, warm-to-cool color control, and a built-in wireless charging pad.",
    specs: {
      Lighting: "5 modes",
      Charging: "15W wireless",
      Controls: "Touch dimmer",
      Finish: "Matte graphite"
    }
  },
  {
    id: "terra-running-shoes",
    title: "TerraFlex Lightweight Running Shoes",
    category: "Fashion",
    price: 8880,
    compareAt: 13800,
    rating: 4.5,
    reviews: 1288,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80"
    ],
    badge: "Flash Sale",
    stock: 15,
    seller: "TerraFit",
    delivery: "Free returns",
    description:
      "Breathable daily trainers with responsive cushioning, durable traction, and a secure knit upper built for city miles.",
    specs: {
      Upper: "Engineered knit",
      Sole: "Responsive EVA",
      Drop: "8 mm",
      Care: "Spot clean"
    }
  },
  {
    id: "pureblend-pro-mixer",
    title: "PureBlend Pro Compact Mixer",
    category: "Kitchen",
    price: 11280,
    compareAt: 16680,
    rating: 4.7,
    reviews: 801,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=80"
    ],
    badge: "Save 32%",
    stock: 10,
    seller: "PureBlend Store",
    delivery: "2-day delivery",
    description:
      "A compact kitchen mixer with a powerful motor, stainless attachments, and a stable low-noise base for everyday baking.",
    specs: {
      Power: "500W",
      Speeds: "6 settings",
      Bowl: "3.5L stainless steel",
      Included: "Whisk, hook, beater"
    }
  }
];

export const categories = Array.from(new Set(products.map((product) => product.category)));

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function formatPrice(value: number) {
  const formatted = new Intl.NumberFormat("en-BD", {
    maximumFractionDigits: 0
  }).format(value);

  return `Tk ${formatted}`;
}
