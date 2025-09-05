import { products } from "../../data/products";
import ProductDetails from "./ProductDetails";

// Generate all product paths at build time (SSG)
export async function generateStaticParams() {
  return products.map((p) => ({
    id: String(p.id),
  }));
}

// Server Component
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Find product from local mock data
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <p> Product not found</p>;
  }

  return <ProductDetails product={product} />;
}
