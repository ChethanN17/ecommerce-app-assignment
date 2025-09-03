import { products } from "@/app/data/products";
import ProductDetails from "./ProductDetails";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === Number(resolvedParams.id));

  if (!product) return <h2>Product not found</h2>;

  // ✅ Pass product to client component
  return <ProductDetails product={product} />;
}
