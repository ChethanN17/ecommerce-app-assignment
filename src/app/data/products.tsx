export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  { id: 1, name: "Laptop", price: 70000, image: "/images/laptop.avif" },
  { id: 2, name: "Smartphone", price: 35000, image: "/images/phone.avif" },
  { id: 3, name: "Headphones", price: 3000, image: "/images/headphones.jpg" },
  { id: 4, name: "Smartwatch", price: 8000, image: "/images/watch.avif" },
];
