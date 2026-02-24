import evoo500 from "@/assets/product-evoo-500.jpg";
import organic750 from "@/assets/product-organic-750.jpg";
import greek1l from "@/assets/product-greek-1l.jpg";
import basil from "@/assets/product-basil.jpg";
import chili from "@/assets/product-chili.jpg";
import giftset from "@/assets/product-giftset.jpg";

export interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  image: string;
  shortDescription: string;
  longDescription: string;
  ingredients: string;
  origin: string;
  inStock: boolean;
  stockCount: number;
  category: "extra-virgin" | "organic" | "infused" | "gift-set";
  isBestSeller: boolean;
  reviews: Review[];
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Extra Virgin Olive Oil 500ml",
    slug: "extra-virgin-olive-oil-500ml",
    price: 18.90,
    image: evoo500,
    shortDescription: "Cold-pressed from hand-picked Koroneiki olives, our signature EVOO delivers a bold, peppery finish.",
    longDescription: "Our flagship Extra Virgin Olive Oil is crafted from 100% Koroneiki olives, hand-picked at the peak of ripeness from centuries-old groves in the southern Peloponnese. Cold-pressed within hours of harvest, this oil retains its full spectrum of polyphenols and antioxidants. Expect a rich golden-green hue, a fruity aroma with hints of fresh-cut grass, and a pleasantly peppery finish that lingers on the palate. Perfect drizzled over salads, grilled vegetables, or crusty bread.",
    ingredients: "100% Extra Virgin Olive Oil (Koroneiki variety)",
    origin: "Greece",
    inStock: true,
    stockCount: 45,
    category: "extra-virgin",
    isBestSeller: true,
    reviews: [
      { id: "r1", author: "Maria S.", rating: 5, comment: "The best olive oil I've ever tasted. You can really taste the freshness.", date: "2025-12-15" },
      { id: "r2", author: "John D.", rating: 4, comment: "Excellent quality. Perfect peppery kick for my pasta dishes.", date: "2025-11-20" },
    ],
    createdAt: "2025-01-01",
  },
  {
    id: "2",
    title: "Organic Cold-Pressed Olive Oil 750ml",
    slug: "organic-cold-pressed-750ml",
    price: 26.50,
    image: organic750,
    shortDescription: "Certified organic, this gentle cold-pressed oil offers a smooth, buttery flavor ideal for everyday cooking.",
    longDescription: "Our Organic Cold-Pressed Olive Oil is produced from certified organic olive groves in the rolling hills of Tuscany. The olives are harvested by hand and processed using traditional stone mills, ensuring a gentle extraction that preserves the oil's delicate nutrients and flavors. This oil presents a smooth, buttery texture with mild fruity notes and a sweet almond finish. Its versatility makes it perfect for both raw applications and gentle cooking.",
    ingredients: "100% Organic Extra Virgin Olive Oil (Frantoio & Leccino blend)",
    origin: "Italy",
    inStock: true,
    stockCount: 30,
    category: "organic",
    isBestSeller: true,
    reviews: [
      { id: "r3", author: "Sophie L.", rating: 5, comment: "Absolutely divine. So smooth and buttery. My family loves it.", date: "2025-10-10" },
    ],
    createdAt: "2025-01-15",
  },
  {
    id: "3",
    title: "Premium Greek Olive Oil 1L",
    slug: "premium-greek-olive-oil-1l",
    price: 32.00,
    image: greek1l,
    shortDescription: "A robust, full-bodied Greek olive oil from Kalamata, rich in antioxidants and Mediterranean tradition.",
    longDescription: "Sourced from the legendary olive groves of Kalamata in southern Greece, this Premium Greek Olive Oil embodies centuries of Mediterranean heritage. The Koroneiki and Athinolia olives are cold-pressed to produce an oil with a deep golden color and complex flavor profile—herbaceous notes of artichoke and tomato leaf, followed by a robust peppery finish. Rich in oleocanthal and polyphenols, this oil is as healthful as it is delicious. Ideal for robust salad dressings, marinades, and finishing dishes.",
    ingredients: "100% Extra Virgin Olive Oil (Koroneiki & Athinolia blend)",
    origin: "Greece",
    inStock: true,
    stockCount: 20,
    category: "extra-virgin",
    isBestSeller: false,
    reviews: [
      { id: "r4", author: "Nikos P.", rating: 5, comment: "Reminds me of my grandmother's olive oil back in Greece. Authentic!", date: "2025-09-05" },
      { id: "r5", author: "Emma W.", rating: 4, comment: "Very robust flavor. A little goes a long way.", date: "2025-08-20" },
    ],
    createdAt: "2025-02-01",
  },
  {
    id: "4",
    title: "Infused Olive Oil — Basil",
    slug: "infused-olive-oil-basil",
    price: 14.90,
    image: basil,
    shortDescription: "Fragrant Italian basil steeped into cold-pressed EVOO—a Mediterranean summer in every drop.",
    longDescription: "Our Basil Infused Olive Oil captures the essence of a Mediterranean summer garden. We begin with our premium cold-pressed extra virgin olive oil and slowly infuse it with fresh Italian Genovese basil leaves. The result is an aromatic, herbaceous oil that transforms any dish. Drizzle over Caprese salads, fresh mozzarella, bruschetta, or pasta for an instant flavor elevation. The vivid green hue and intoxicating basil aroma make it a beautiful addition to your table.",
    ingredients: "Extra Virgin Olive Oil, Natural Basil Extract",
    origin: "Italy",
    inStock: true,
    stockCount: 35,
    category: "infused",
    isBestSeller: true,
    reviews: [
      { id: "r6", author: "Clara M.", rating: 5, comment: "The basil flavor is so fresh and natural. Perfect on my Caprese!", date: "2025-11-01" },
    ],
    createdAt: "2025-03-01",
  },
  {
    id: "5",
    title: "Infused Olive Oil — Chili",
    slug: "infused-olive-oil-chili",
    price: 14.90,
    image: chili,
    shortDescription: "A fiery kick of Calabrian chili meets smooth EVOO—perfect for pizza, pasta, and grilled meats.",
    longDescription: "For those who love heat, our Chili Infused Olive Oil delivers a vibrant, spicy punch balanced by the smooth richness of cold-pressed extra virgin olive oil. We use authentic Calabrian chili peppers, known for their smoky sweetness and moderate heat, to create an oil that excites without overwhelming. Ideal for drizzling over pizza, pasta aglio e olio, grilled meats, or adding a kick to dipping sauces. The beautiful red-amber hue adds visual drama to your culinary presentations.",
    ingredients: "Extra Virgin Olive Oil, Natural Chili Pepper Extract",
    origin: "Italy",
    inStock: true,
    stockCount: 28,
    category: "infused",
    isBestSeller: false,
    reviews: [
      { id: "r7", author: "Marco R.", rating: 4, comment: "Great spicy oil! Not too hot, just right. Love it on pizza.", date: "2025-10-22" },
      { id: "r8", author: "Lisa K.", rating: 5, comment: "My new favorite condiment. Goes on everything!", date: "2025-09-15" },
    ],
    createdAt: "2025-03-15",
  },
  {
    id: "6",
    title: "Gift Set — 3 Premium Bottles",
    slug: "gift-set-3-bottles",
    price: 54.90,
    image: giftset,
    shortDescription: "An elegant wooden gift box featuring three of our finest oils—the perfect present for food lovers.",
    longDescription: "Our Premium Gift Set is the ultimate present for olive oil enthusiasts and food lovers. Beautifully presented in a hand-crafted wooden box with gold tissue paper, this set includes three 250ml bottles: our signature Extra Virgin Olive Oil, the Basil Infused, and the Chili Infused oils. Each bottle is individually labeled and sealed with our signature gold cap. Whether for a housewarming, birthday, or holiday gift, this set delivers a taste of the Mediterranean in the most elegant packaging.",
    ingredients: "Extra Virgin Olive Oil, Basil Infused Olive Oil, Chili Infused Olive Oil",
    origin: "Greece & Italy",
    inStock: true,
    stockCount: 15,
    category: "gift-set",
    isBestSeller: true,
    reviews: [
      { id: "r9", author: "Anna B.", rating: 5, comment: "Gave this as a Christmas gift. The packaging is stunning and the oils are superb!", date: "2025-12-28" },
      { id: "r10", author: "David H.", rating: 5, comment: "Beautiful presentation. All three oils are excellent quality.", date: "2025-11-30" },
    ],
    createdAt: "2025-04-01",
  },
];

export const categories = [
  { value: "all", label: "All Products" },
  { value: "extra-virgin", label: "Extra Virgin" },
  { value: "organic", label: "Organic" },
  { value: "infused", label: "Infused" },
  { value: "gift-set", label: "Gift Sets" },
];
