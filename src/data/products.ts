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
    title: "Ulei de Măsline Extra Virgin 500ml",
    slug: "extra-virgin-olive-oil-500ml",
    price: 18.90,
    image: evoo500,
    shortDescription: "Presat la rece din măsline Koroneiki culese manual, uleiul nostru emblematic oferă un final picant și intens.",
    longDescription: "Uleiul nostru Extra Virgin emblematic este creat din măsline 100% Koroneiki, culese manual la vârful maturității din livezi seculare din sudul Peloponezului. Presat la rece în câteva ore de la recoltare, acest ulei își păstrează întregul spectru de polifenoli și antioxidanți. Așteptați-vă la o nuanță auriu-verde bogată, o aromă fructată cu note de iarbă proaspăt tăiată și un final plăcut picant care persistă pe palat. Perfect turnat peste salate, legume la grătar sau pâine crocantă.",
    ingredients: "100% Ulei de Măsline Extra Virgin (soiul Koroneiki)",
    origin: "Grecia",
    inStock: true,
    stockCount: 45,
    category: "extra-virgin",
    isBestSeller: true,
    reviews: [
      { id: "r1", author: "Maria S.", rating: 5, comment: "Cel mai bun ulei de măsline pe care l-am gustat vreodată. Se simte cu adevărat prospețimea.", date: "2025-12-15" },
      { id: "r2", author: "Ion D.", rating: 4, comment: "Calitate excelentă. Picant perfect pentru preparatele mele de paste.", date: "2025-11-20" },
    ],
    createdAt: "2025-01-01",
  },
  {
    id: "2",
    title: "Ulei de Măsline Organic Presat la Rece 750ml",
    slug: "organic-cold-pressed-750ml",
    price: 26.50,
    image: organic750,
    shortDescription: "Certificat organic, acest ulei delicat presat la rece oferă o aromă netedă, unsuroasă, ideală pentru gătitul de zi cu zi.",
    longDescription: "Uleiul nostru Organic Presat la Rece este produs din livezi de măslini certificate organic din dealurile Toscanei. Măslinele sunt recoltate manual și procesate folosind mori tradiționale de piatră, asigurând o extracție delicată care păstrează nutrienții și aromele subtile ale uleiului. Acest ulei prezintă o textură netedă, unsuroasă, cu note fructate ușoare și un final de migdale dulci. Versatilitatea sa îl face perfect atât pentru utilizarea crudă cât și pentru gătitul delicat.",
    ingredients: "100% Ulei de Măsline Extra Virgin Organic (amestec Frantoio & Leccino)",
    origin: "Italia",
    inStock: true,
    stockCount: 30,
    category: "organic",
    isBestSeller: true,
    reviews: [
      { id: "r3", author: "Sofia L.", rating: 5, comment: "Absolut divin. Atât de neted și unsos. Familia mea îl adoră.", date: "2025-10-10" },
    ],
    createdAt: "2025-01-15",
  },
  {
    id: "3",
    title: "Ulei de Măsline Premium Grecesc 1L",
    slug: "premium-greek-olive-oil-1l",
    price: 32.00,
    image: greek1l,
    shortDescription: "Un ulei de măsline grecesc robust, plin de corp, din Kalamata, bogat în antioxidanți și tradiție mediteraneană.",
    longDescription: "Provenit din legendarii livezi de măslini din Kalamata, sudul Greciei, acest Ulei de Măsline Premium Grecesc întruchipează secole de moștenire mediteraneană. Măslinele Koroneiki și Athinolia sunt presate la rece pentru a produce un ulei cu o culoare aurie profundă și un profil complex de arome — note ierburoase de anghinare și frunze de roșii, urmate de un final robust, picant. Bogat în oleocanthal și polifenoli, acest ulei este la fel de sănătos pe cât este de delicios. Ideal pentru dressinguri de salată consistente, marinări și finisarea preparatelor.",
    ingredients: "100% Ulei de Măsline Extra Virgin (amestec Koroneiki & Athinolia)",
    origin: "Grecia",
    inStock: true,
    stockCount: 20,
    category: "extra-virgin",
    isBestSeller: false,
    reviews: [
      { id: "r4", author: "Nikos P.", rating: 5, comment: "Îmi amintește de uleiul de măsline al bunicii mele din Grecia. Autentic!", date: "2025-09-05" },
      { id: "r5", author: "Elena W.", rating: 4, comment: "Aromă foarte robustă. Un pic este suficient.", date: "2025-08-20" },
    ],
    createdAt: "2025-02-01",
  },
  {
    id: "4",
    title: "Ulei de Măsline Infuzat — Busuioc",
    slug: "infused-olive-oil-basil",
    price: 14.90,
    image: basil,
    shortDescription: "Busuioc italian parfumat, infuzat în EVOO presat la rece — o vară mediteraneană în fiecare picătură.",
    longDescription: "Uleiul nostru de Măsline Infuzat cu Busuioc captează esența unei grădini de vară mediteraneene. Începem cu uleiul nostru premium extra virgin presat la rece și îl infuzăm lent cu frunze proaspete de busuioc Genovese italian. Rezultatul este un ulei aromatic, ierbos, care transformă orice preparat. Turnați peste salate Caprese, mozzarella proaspătă, bruschetta sau paste pentru o elevare instantanee a aromei. Nuanța verde vie și aroma îmbătătoare de busuioc îl fac o adăugire frumoasă pe masa dumneavoastră.",
    ingredients: "Ulei de Măsline Extra Virgin, Extract Natural de Busuioc",
    origin: "Italia",
    inStock: true,
    stockCount: 35,
    category: "infused",
    isBestSeller: true,
    reviews: [
      { id: "r6", author: "Clara M.", rating: 5, comment: "Aroma de busuioc este atât de proaspătă și naturală. Perfect pe Caprese-ul meu!", date: "2025-11-01" },
    ],
    createdAt: "2025-03-01",
  },
  {
    id: "5",
    title: "Ulei de Măsline Infuzat — Ardei Iute",
    slug: "infused-olive-oil-chili",
    price: 14.90,
    image: chili,
    shortDescription: "Un strop iute de ardei calabrez întâlnește EVOO-ul neted — perfect pentru pizza, paste și carne la grătar.",
    longDescription: "Pentru cei care iubesc iuțeala, Uleiul nostru de Măsline Infuzat cu Ardei Iute oferă un punch vibrant, picant, echilibrat de bogăția netedă a uleiului de măsline extra virgin presat la rece. Folosim ardei iuți autentici din Calabria, cunoscuți pentru dulceața lor afumată și iuțeala moderată, pentru a crea un ulei care entuziasmează fără a copleși. Ideal pentru a turna peste pizza, paste aglio e olio, carne la grătar sau pentru a adăuga un strop de iuțeală sosurilor de sos. Frumoasa nuanță roșu-chihlimbar adaugă dramă vizuală prezentărilor dumneavoastră culinare.",
    ingredients: "Ulei de Măsline Extra Virgin, Extract Natural de Ardei Iute",
    origin: "Italia",
    inStock: true,
    stockCount: 28,
    category: "infused",
    isBestSeller: false,
    reviews: [
      { id: "r7", author: "Marco R.", rating: 4, comment: "Ulei picant excelent! Nu prea iute, exact cât trebuie. Îl ador pe pizza.", date: "2025-10-22" },
      { id: "r8", author: "Lisa K.", rating: 5, comment: "Noul meu condiment preferat. Merge pe orice!", date: "2025-09-15" },
    ],
    createdAt: "2025-03-15",
  },
  {
    id: "6",
    title: "Set Cadou — 3 Sticle Premium",
    slug: "gift-set-3-bottles",
    price: 54.90,
    image: giftset,
    shortDescription: "O cutie cadou elegantă din lemn cu trei dintre cele mai fine uleiuri ale noastre — cadoul perfect pentru iubitorii de gastronomie.",
    longDescription: "Setul nostru Cadou Premium este cadoul suprem pentru entuziaștii uleiului de măsline și iubitorii de gastronomie. Prezentat frumos într-o cutie artizanală din lemn cu hârtie de mătase aurie, acest set include trei sticle de 250ml: uleiul nostru emblematic Extra Virgin, cel Infuzat cu Busuioc și cel Infuzat cu Ardei Iute. Fiecare sticlă este etichetată individual și sigilată cu capacul nostru signature auriu. Fie că este pentru o inaugurare a casei, o zi de naștere sau un cadou de sărbători, acest set aduce un gust din Mediterana în cel mai elegant ambalaj.",
    ingredients: "Ulei de Măsline Extra Virgin, Ulei de Măsline Infuzat cu Busuioc, Ulei de Măsline Infuzat cu Ardei Iute",
    origin: "Grecia & Italia",
    inStock: true,
    stockCount: 15,
    category: "gift-set",
    isBestSeller: true,
    reviews: [
      { id: "r9", author: "Ana B.", rating: 5, comment: "Am oferit asta cadou de Crăciun. Ambalajul este superb și uleiurile sunt excepționale!", date: "2025-12-28" },
      { id: "r10", author: "David H.", rating: 5, comment: "Prezentare frumoasă. Toate cele trei uleiuri sunt de calitate excelentă.", date: "2025-11-30" },
    ],
    createdAt: "2025-04-01",
  },
];

export const categories = [
  { value: "all", label: "Toate Produsele" },
  { value: "extra-virgin", label: "Extra Virgin" },
  { value: "organic", label: "Organic" },
  { value: "infused", label: "Infuzat" },
  { value: "gift-set", label: "Seturi Cadou" },
];
